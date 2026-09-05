// 陶氏族谱 · CSV → JSON 转换工具
// 用法: node csv2json.js data_template.csv
// 会在 CSV 同目录生成 data.json 与 data.js,网页直接读取。
//
// 表头(顺序固定):
//   id,name,gender,generation,father_id,zi,hao,spouse,notes
// 规则:
//   - id 留空时自动编号;generation 留空且填了 father_id 时按父辈+1 自动推算。
//   - 备注(notes)内含英文逗号时,该单元格须用英文双引号括起来。
//   - 文件需为 UTF-8 编码(带不带 BOM 均可)。

const fs = require('fs');
const path = require('path');

const COLUMNS = ['id', 'name', 'gender', 'generation', 'father_id', 'zi', 'hao', 'spouse', 'notes'];

// 简单健壮的 CSV 解析:支持双引号包裹、逗号、转义引号
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      if (row.some((c) => c.trim() !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += ch;
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    if (row.some((c) => c.trim() !== '')) rows.push(row);
  }
  return rows;
}

function toNumber(v) {
  const s = String(v == null ? '' : v).trim();
  return s === '' ? null : Number(s);
}

function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error('用法: node csv2json.js <输入.csv>');
    process.exit(1);
  }
  const raw = fs.readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
  const rows = parseCSV(raw);
  if (!rows.length) {
    console.error('CSV 为空');
    process.exit(1);
  }

  const header = rows[0].map((h) => h.trim());
  const bad = header.filter((h) => !COLUMNS.includes(h));
  if (bad.length) {
    console.error('表头包含未知列: ' + bad.join(', '));
    console.error('应为: ' + COLUMNS.join(','));
    process.exit(1);
  }

  const idx = Object.fromEntries(COLUMNS.map((c) => [c, header.indexOf(c)]));

  let autoId = 0;
  let warn = 0;
  const persons = [];
  for (let r = 1; r < rows.length; r++) {
    if (rows[r].length !== COLUMNS.length) {
      console.warn(
        '警告: 第 ' + (r + 1) + ' 行有 ' + rows[r].length + ' 个字段(应为 ' +
        COLUMNS.length + ' 个)。请检查是否多/少了逗号,或含英文逗号的字段未加双引号。'
      );
      warn++;
    }
    const get = (c) => {
      const i = idx[c];
      return i >= 0 ? String(rows[r][i] == null ? '' : rows[r][i]).trim() : '';
    };

    let id = toNumber(get('id'));
    if (id == null) {
      autoId = Math.max(autoId, Math.max(0, ...persons.map((p) => p.id))) + 1;
      id = autoId;
    }

    persons.push({
      id,
      name: get('name') || '(佚名)',
      gender: get('gender') || '男',
      generation: toNumber(get('generation')),
      father_id: toNumber(get('father_id')),
      zi: get('zi'),
      hao: get('hao'),
      spouse: get('spouse'),
      notes: get('notes'),
    });
  }

  // 依据父亲补推世系
  const byId = new Map(persons.map((p) => [p.id, p]));
  persons.forEach((p) => {
    if (p.generation == null) {
      if (p.father_id != null && byId.has(p.father_id) && byId.get(p.father_id).generation != null) {
        p.generation = byId.get(p.father_id).generation + 1;
      } else {
        p.generation = 1;
      }
    }
  });

  const data = {
    meta: { surname: '陶', title: '陶氏族谱', version: '0.1', updated: new Date().toISOString().slice(0, 10) },
    persons,
  };

  const dir = path.dirname(path.resolve(csvPath));
  const jsonPath = path.join(dir, 'data.json');
  const jsPath = path.join(dir, 'data.js');

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

  const js = [
    '// 由 csv2json.js 自动生成,勿手改;修改 CSV 后重新执行转换。',
    '// 数据与 data.json 保持一致;file:// 直接双击打开时使用本文件。',
    'window.TAO_DATA = ' + JSON.stringify(data, null, 2) + ';',
    '',
  ].join('\n');
  fs.writeFileSync(jsPath, js, 'utf8');

  console.log('完成: 共 ' + persons.length + ' 人' + (warn ? ' (有 ' + warn + ' 行需修正)' : ''));
  console.log('  ' + jsonPath);
  console.log('  ' + jsPath);
}

main();
