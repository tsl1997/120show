/* One Piece 式 Sailor Moon 重构生成器
 * 用法：node sm_00_gen.js  (game/travel 目录下)
 * 产出：
 *   1) data/isekai/anime/sailormoon/sm_series.js   —— 人物按势力拆成 TRAVEL_SERIES（带色）
 *   2) 重写 sm_02_stories.js                        —— 只保留名场面（smv_*）作为 SM_STORIES
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'data', 'isekai', 'anime', 'sailormoon');
const SRC = path.join(DIR, 'sm_02_stories.js');
const CITY = 'isekai_sailormoon';

const SERIES_CONFIG = [
  { id: 'sr_sm_inners', name: '内部五战士与守护者·主角团', color: '#d4a017', type: '战士卡', price: 170,
    theme: '月野兔与内部五战士收藏', hero: '月野兔（水手月亮）', slogan: '月棱镜力量，变身！',
    bg: '银千年王国转世到麻布十番的爱哭少女月野兔，与水星、火星、木星、金星四大战士并肩，守护倩妮迪公主与幻之银水晶。',
    story: '夜礼服假面的玫瑰与月亮公主的宿命——爱是最后的武器。',
    ids: ['smc_usagi','smc_ami','smc_rei','smc_makoto','smc_minako','smc_mamoru','smc_chibiusa'] },
  { id: 'sr_sm_outers', name: '外部太阳系四战士', color: '#8e44ad', type: '战士卡', price: 190,
    theme: '天王星海王星冥王星土星收藏', hero: '天王遥与海王满', slogan: '守护真正的和平',
    bg: '来自太阳系边缘的冷酷守护者：赛车的天王遥、小提琴家海王满、时间之门看守人冥王雪奈，与终焉之镰土萌萤。',
    story: '"我们不是同伴，是同志"——她们用最痛的代价守护星球。',
    ids: ['smc_haruka','smc_michiru','smc_setsuna','smc_hotaru'] },
  { id: 'sr_sm_alls', name: '露娜与麻布十番的伙伴们', color: '#2ecc71', type: '伙伴卡', price: 120,
    theme: '黑猫导师与人类朋友收藏', hero: '黑猫露娜', slogan: '小兔你又迟到了！',
    bg: '额头月牙的黑猫露娜与白猫阿提米丝，加上麻布十番的家人和同学——战士们的日常能量来源。',
    story: '变身笔与通讯手表背后，是最平凡的放学时光。',
    ids: ['smc_luna','smc_artemis','smc_diana','smc_family','smc_naru','smc_umino'] },
  { id: 'sr_sm_dark', name: '黑暗王国·贝利尔与四天王', color: '#c0392b', type: '敌人卡', price: 200,
    theme: '第一季反派收藏', hero: '贝利尔女王', slogan: '梅塔利亚的混沌',
    bg: '向安迪米奥王子病态执念的贝利尔女王，与东、南、西、北四位守护骑士——黑暗王国的能量收集战。',
    story: '银水晶之争——前世今生的悲剧对决。',
    ids: ['sme_beryl','sme_metalia','sme_jadeite','sme_nephrite','sme_zoisite','sme_kunzite'] },
  { id: 'sr_sm_blackmoon', name: '黑月亮·死月一族', color: '#2c3e50', type: '敌人卡', price: 200,
    theme: '黑月篇反派收藏', hero: '迪亚蒙德王子', slogan: '水晶东京属于我们',
    bg: '来自未来的死月一族入侵水晶东京：鲁贝乌斯、艾丝梅拉特、萨菲尔、迪亚蒙德王子，与操控一切的智者怀斯曼。',
    story: '小小兔的眼泪——被洗脑成黑色淑女的月之小公主。',
    ids: ['sme_rubeus','sme_esmeraude','sme_saphir','sme_diamond','sme_wiseman','sme_blacklady'] },
  { id: 'sr_sm_infinity', name: '无限学园·死亡月亮', color: '#16a085', type: '敌人卡', price: 200,
    theme: '外部战士篇与马戏团篇反派收藏', hero: '尼黑伦尼亚女王', slogan: '永远的美',
    bg: '土萌博士的实验学园、寄生萤体内的女主宰九号、异次元的法老90，与镜中永生的死亡月亮女王尼黑伦尼亚。',
    story: '纯真之心的圣杯——土星的沉默与重生。',
    ids: ['sme_tomoe','sme_mistress9','sme_pharaoh90','sme_nehellenia','sme_amazon'] },
  { id: 'sr_sm_galaxy', name: '银河终章·加拉西亚与星光', color: '#9b59b6', type: '敌人卡', price: 210,
    theme: '银河之战的战士与敌收藏', hero: '水手加拉西亚', slogan: '星之种子属于我',
    bg: '来自 Kinmoku 星的偶像歌手星光三剑侠，与银河最强的战士加拉西亚——收集星之种子的最终决战。',
    story: '小小小兔的星光——爱让被混沌吞噬的战士找回自己。',
    ids: ['sme_galaxia','sme_starlights','smc_chibichibi'] },
];

function extractEntries(text) {
  const entries = [];
  let i = 0, n = text.length;
  while (i < n) {
    const m = /\{ *id: *'([^']*)'/.exec(text.slice(i));
    if (!m) break;
    const start = i + m.index;
    let depth = 0, j = start;
    for (; j < n; j++) {
      const ch = text[j];
      if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) { j++; break; } }
      else if (ch === "'" || ch === '"') { const q = ch; j++; while (j < n && (text[j] !== q || text[j - 1] === '\\')) j++; }
    }
    entries.push({ id: m[1], raw: text.slice(start, j).replace(/,\s*$/, '') });
    i = j;
  }
  return entries;
}
function toItem(raw, type, price) {
  const end = raw.lastIndexOf('}');
  return `${raw.slice(0, end).replace(/\s*$/, '')}, type: '${type}', city: '${CITY}', price: ${price} }`;
}

const text = fs.readFileSync(SRC, 'utf8');
const all = extractEntries(text);
const byId = {};
all.forEach(e => (byId[e.id] = e));

// ---------- 输出 series ----------
const seriesOut = [];
for (const s of SERIES_CONFIG) {
  const items = s.ids.map(id => {
    const e = byId[id];
    if (!e) { console.error('MISSING ' + id); process.exitCode = 1; return ''; }
    return '    ' + toItem(e.raw, s.type, s.price);
  }).join(',\n');
  seriesOut.push(`window.TRAVEL_SERIES.push({ id: '${s.id}', cat: 'isekai', name: '${s.name}', color: '${s.color}',
  years: '1992-至今', author: '武内直子', theme: '${s.theme}',
  background: '${s.bg}',
  story: '${s.story}',
  protagonist: '${s.hero}', slogan: '${s.slogan}',
  cities: ['${CITY}'],
  items: [
${items}
  ]
});`);
}
fs.writeFileSync(path.join(DIR, 'sm_series.js'),
  '/* 异世界·美少女战士 势力系列收藏（sm_00_gen.js 生成，勿手改结构） */\n(function () {\n  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n' +
  seriesOut.map(x => '  ' + x.replace(/\n/g, '\n  ')).join('\n') + '\n})();\n', 'utf8');
console.log('written sm_series.js (' + seriesOut.length + ' series)');

// ---------- 重写 stories：只保留名场面 smv_* ----------
const events = all.filter(e => /^smv_/.test(e.id));
const evOut = events.map(e => '  ' + e.raw).join(',\n');
fs.writeFileSync(SRC,
  '/* 异世界·美少女战士 分册02：剧情名场面（smv_*，人物已迁入 sm_series.js 系列收藏） */\n' +
  'window.SM_STORIES = window.SM_STORIES || [];\nwindow.SM_STORIES.push(\n' + evOut + '\n);\n', 'utf8');
console.log('rewrote sm_02_stories.js with ' + events.length + ' scenes');
