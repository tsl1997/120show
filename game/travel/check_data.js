'use strict';
/* 数据校验：node check_data.js
 * 检查所有 data/*.js 的字段完整性、id 唯一性、经济平衡。 */
const fs = require('fs');
const path = require('path');

global.window = {};
const dataDir = path.join(__dirname, 'data');
// 递归加载 data 目录（含子目录，如 data/op/ 分册）；组装器 isekai_onepiece.js 必须最后加载
const jsFiles = [];
const collectJs = dir => {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) collectJs(p);
    else if (name.endsWith('.js')) jsFiles.push(p);
  }
};
collectJs(dataDir);
jsFiles.sort((a, b) => (a.endsWith('isekai_onepiece.js') ? 1 : b.endsWith('isekai_onepiece.js') ? -1 : a.localeCompare(b)));
jsFiles.forEach(p => { try { require(p); } catch (e) { console.error(`❌ ${path.relative(__dirname, p)} 加载失败: ${e.message}`); process.exitCode = 1; } });

const CITIES = global.window.TRAVEL_CITIES || [];
const TAGS = ['衣', '食', '住', '行', '玩', '游', '闻'];
const TYPES = ['美食', '饮品', '特产', '文创', '服饰', '体验', '住宿', '宝物', '秘籍', '体质', '经文', '法宝', '法器', '神药', '秘术', '手办', '武魂', '魂骨', '魂环', '异火', '暗器', '神兽', '徽章', '收藏卡', '暗器'];
const ECON = {
  RATES: { cn: { spot: 3.0, souvenir: 3.0 }, foreign: { spot: 3.5, souvenir: 3.5 } },
  MIN_R: { cn: { spot: 50, souvenir: 50, story: 50 }, foreign: { spot: 80, souvenir: 80, story: 80 } },
  STORY_R: { cn: 50, foreign: 80 },
};
const rewardOf = (foreign, kind, price) => {
  const f = foreign ? 'foreign' : 'cn';
  if (kind === 'story') return ECON.STORY_R[f];
  return Math.max(ECON.MIN_R[f][kind], Math.round((price || 0) * ECON.RATES[f][kind]));
};

const seenIds = new Map();
let errors = 0, warns = 0;
const err = m => { console.error('  ❌ ' + m); errors++; };
const warn = m => { console.log('  ⚠️  ' + m); warns++; };

let totCost = 0, totReward = 0;
console.log(`\n===== 校验 ${CITIES.length} 个城市 =====\n`);
for (const c of CITIES) {
  const foreign = c.cc !== 'CN';
  console.log(`▶ ${c.name} (${c.id}) [${c.country}/${c.region}] ${foreign ? 'FOREIGN' : 'CN'}`);
  for (const f of ['id', 'name', 'country', 'cc', 'flag', 'region', 'desc', 'travel', 'spots', 'souvenirs', 'stories']) {
    if (c[f] === undefined) err(`缺少字段 ${f}`);
  }
  if (seenIds.has(c.id)) err(`城市 id 重复: ${c.id}`); seenIds.set(c.id, c.name);
  if (!Array.isArray(c.travel) || !c.travel.length) err('travel 为空');
  else c.travel.forEach(t => { if (typeof t.cost !== 'number' || t.cost < 0) err(`travel ${t.name} cost 非法`); if (!t.name || !t.icon) err(`travel 缺 name/icon`); });
  if (foreign && !c.visa) err('国外城市缺少 visa 字段');
  if (foreign && c.visa && typeof c.visa.cost !== 'number') err('visa.cost 非法');

  let cost = 0, rew = 0, nSp = 0, nSu = 0, nSt = 0, freeCnt = 0, tags = new Set();
  for (const [kind, arr, need] of [['spot', c.spots, [6, 10]], ['souvenir', c.souvenirs, [12, 18]], ['story', c.stories, [4, 7]]]) {
    if (!Array.isArray(arr)) { err(`${kind} 不是数组`); continue; }
    if (arr.length < need[0] || arr.length > need[1]) warn(`${kind} 数量 ${arr.length} 建议在 ${need[0]}-${need[1]}`);
    for (const it of arr) {
      if (!it.id || !it.name || !it.icon || typeof it.desc !== 'string' || !it.desc.length) err(`${kind} 条目字段不全: ${it.id || it.name}`);
      if (seenIds.has(it.id)) err(`条目 id 重复: ${it.id} (${seenIds.get(it.id)} / ${c.name})`); seenIds.set(it.id, c.name);
      const p = +it.price || 0;
      if (kind !== 'story') {
        if (typeof it.price !== 'number' || it.price < 0) err(`${it.id} price 非法: ${it.price}`);
        if (p === 0) freeCnt++;
        cost += p;
      }
      rew += rewardOf(foreign, kind, p);
      if (kind === 'souvenir') {
        nSu++;
        if (!TAGS.includes(it.tag)) err(`${it.id} tag 非法: ${it.tag}`);
        if (!TYPES.includes(it.type)) err(`${it.id} type 非法: ${it.type}`);
        tags.add(it.tag);
      } else if (kind === 'spot') nSp++; else nSt++;
      if (it.desc && it.desc.length < 18) warn(`${it.id} 描述过短`);
      if (it.desc && /[a-zA-Z]{4,}/.test(it.desc) && !/(千米|公里)/.test(it.desc)) warn(`${it.id} 描述含疑似英文单词`);
    }
  }
  if (foreign && freeCnt === 0) warn('国外城市建议至少 1 个免费条目');
  if (nSu >= 8 && tags.size < 3) warn(`${c.name} souvenir tag 覆盖不足: ${[...tags].join(',')}`);
  const net = rew - cost;
  totCost += cost; totReward += rew;
  console.log(`  条目 ${nSp}景 ${nSu}周 ${nSt}闻 | 花销 ${cost.toFixed(0)} 奖励 ${rew.toFixed(0)} 净赚 ${net.toFixed(0)} (${cost ? (net / cost * 100).toFixed(0) : '∞'}%)`);
  if (net < 2000 || net > 12000) warn(`单城净赚 ${net.toFixed(0)} 偏离健康区间 2000-12000`);
}
console.log(`\n===== 汇总: ${CITIES.length} 城 | 总花销 ${totCost.toFixed(0)} | 总奖励 ${totReward.toFixed(0)} | 总净赚 ${(totReward - totCost).toFixed(0)} =====`);
const cn = CITIES.filter(c => c.cc === 'CN' && c.world !== 'isekai').length, fo = CITIES.filter(c => c.world !== 'isekai' && c.cc !== 'CN').length;
console.log(`国内 ${cn} 城 / 国外 ${fo} 城 ${fo >= cn ? '✓ 国外≥国内' : '⚠️ 国外少于国内'}`);
console.log(errors ? `❌ ${errors} 个错误，${warns} 个警告` : `✅ 全部通过（${warns} 个警告）`);
process.exitCode = errors ? 1 : 0;
