'use strict';
/* ============================================================
 * 把 data/** 的全部数据文件按 data-order.txt 的顺序合并成 data-bundle.js
 *
 * 用法：node tools/build_data.js
 *
 * 为什么需要它：index.html 原先手写 894 个 <script>，首屏 894 个请求。
 * 合并后 index.html 只需 1 个请求。数据源仍然是 data/ 下的独立文件。
 *
 * 加载顺序很重要：它决定城市/作品在「世界地图」「图鉴」里的排列先后，
 * 因此顺序固化在 data-order.txt（人工可读可改），而不是靠文件名推导。
 * 新增数据文件后：
 *   - 若已写进 data-order.txt，按清单顺序加载；
 *   - 若没写，会自动插到同目录最后一个已知文件之后（并打印提示）。
 *
 * ⚠️ 改完任何 data 文件后必须重新执行本脚本，否则 check_data.js 会报错。
 * ============================================================ */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dataDir = path.join(root, 'data');
const orderFile = path.join(root, 'data-order.txt');
const outFile = path.join(root, 'data-bundle.js');

const relOf = f => 'data/' + path.relative(dataDir, f).split(path.sep).join('/');

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.js')) out.push(p);
  }
}

const allFiles = [];
walk(dataDir, allFiles);
const allRel = allFiles.map(relOf);
const allSet = new Set(allRel);

const listed = fs.existsSync(orderFile)
  ? fs.readFileSync(orderFile, 'utf8').split('\n').map(s => s.trim()).filter(Boolean)
  : [];
const listedSet = new Set(listed);

const kept = listed.filter(r => allSet.has(r));
const missing = listed.filter(r => !allSet.has(r));
const extra = allRel.filter(r => !listedSet.has(r));

// 组装器（同目录内最后加载）排在分册之后
const isAsm = r => /^isekai_/.test(path.posix.basename(r)) || path.posix.basename(r) === path.posix.basename(path.posix.dirname(r)) + '.js';
extra.sort((a, b) => {
  const da = path.posix.dirname(a), db = path.posix.dirname(b);
  if (da !== db) return da < db ? -1 : 1;
  const aa = isAsm(a) ? 1 : 0, ba = isAsm(b) ? 1 : 0;
  if (aa !== ba) return aa - ba;
  return a < b ? -1 : a > b ? 1 : 0;
});

// 未列入清单的新文件：插到「同目录最后一个已知文件」之后；整目录都是新的则上溯到最近的祖先目录
const order = kept.slice();
extra.forEach(r => {
  let dir = path.posix.dirname(r), idx = -1;
  while (dir && dir !== '.' && dir !== 'data') {
    for (let i = order.length - 1; i >= 0; i--) {
      if (path.posix.dirname(order[i]) === dir) { idx = i; break; }
    }
    if (idx >= 0) break;
    dir = path.posix.dirname(dir);
  }
  if (idx < 0) order.push(r); else order.splice(idx + 1, 0, r);
});

if (missing.length) {
  console.error('❌ data-order.txt 里列了但磁盘上不存在的文件（请删掉这些行）：');
  missing.slice(0, 20).forEach(r => console.error('   ' + r));
  process.exitCode = 1;
}
if (extra.length) {
  console.log('ℹ️ 有 ' + extra.length + ' 个文件未写入 data-order.txt，已自动排在各自目录的末尾：');
  extra.slice(0, 20).forEach(r => console.log('   ' + r));
}

let out = '/* 自动生成，请勿手改！由 tools/build_data.js 依据 data-order.txt 合并 data/** 生成。\n'
  + ' * 数据源是 data/ 下的独立文件；改完数据请执行：node tools/build_data.js\n'
  + ' * 本次合并 ' + order.length + ' 个文件。\n */\n';

order.forEach(r => {
  let src = fs.readFileSync(path.join(root, r), 'utf8');
  if (src.charCodeAt(0) === 0xFEFF) src = src.slice(1);   // 去 BOM，避免拼进文件中部
  out += '\n/* ================= ' + r + ' ================= */\n' + src.replace(/\s*$/, '') + '\n';
});

fs.writeFileSync(outFile, out, 'utf8');

// 把最终顺序回写清单，保持可读、可 diff（新文件从此有明确位置）
fs.writeFileSync(orderFile, order.join('\n') + '\n', 'utf8');

console.log('已生成 data-bundle.js：' + order.length + ' 个数据文件，'
  + (Buffer.byteLength(out, 'utf8') / 1048576).toFixed(2) + ' MB');
