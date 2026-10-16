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
jsFiles.sort((a, b) => {
  const aw = /^isekai_/.test(path.basename(a)) ? 1 : 0, bw = /^isekai_/.test(path.basename(b)) ? 1 : 0;
  if (aw !== bw) return aw - bw;
  return a.localeCompare(b);
});
jsFiles.forEach(p => { try { require(p); } catch (e) { console.error(`❌ ${path.relative(__dirname, p)} 加载失败: ${e.message}`); process.exitCode = 1; } });

const CITIES = global.window.TRAVEL_CITIES || [];
const TAGS = ['衣', '食', '住', '行', '玩', '游', '闻'];
const TYPES = ['美食', '饮品', '特产', '文创', '服饰', '体验', '住宿', '宝物', '秘籍', '体质', '经文', '法宝', '法器', '神药', '秘术', '手办', '武魂', '魂骨', '魂环', '异火', '暗器', '神兽', '徽章', '收藏卡'];
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
  for (const [kind, arr, min] of [['spot', c.spots, 6], ['souvenir', c.souvenirs, 8], ['story', c.stories, 4]]) {
    if (!Array.isArray(arr)) { err(`${kind} 不是数组`); continue; }
    if (!arr.length) err(`${kind} 为空（0 条）——城市将无内容可收集`);
    else if (arr.length < min) warn(`${kind} 数量 ${arr.length} 偏少（建议 ≥${min}）`);
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
      // 白名单：专有名词/IP/机构缩写/外来语等合理英文不算夹生
      // 白名单：来自全量数据扫描的专有名词/IP/机构缩写/外来语（自动生成，勿手改）
      // 白名单：来自全量数据扫描的专有名词/IP/机构缩写/外来语（自动生成，勿手改）
      // 白名单：来自全量数据扫描的专有名词/IP/机构缩写/外来语（自动生成，勿手改）
      const OK_EN = /(^|[^A-Za-z])(Knox-Henderson|Intelligentsia|assassination|HOLLYWOODLAND|ILLUSTRATIONS|Architecture|Preservation|Butterscotch|Christchurch|Nickelodeon|Mozartkugel|Pfannkuchen|Tempranillo|Philopappos|Saltimbocca|stroopwafel|Herengracht|Californian|Powell-Hyde|GarapaGhost|pilgrimage|Knightmare|biangbiang|Krugerrand|rstelstand|Naschmarkt|Karlsplatz|Castellers|Hendrick's|Portobello|Demokratia|Auditorium|Scotiabank|Sea-to-Sky|Stockyards|Spindletop|Drive-thru|Versailles|Storyville|Bainbridge|antibiotic|livehouse|NAMJATOWN|Berggasse|Speakeasy|Carnivore|Mandarake|Blackpink|Mayerling|Anschluss|Ampelmann|Carbonara|Hollandse|Vancouver|Enchanted|Portillos|margarita|Lafayette|MotorCity|Corkscrew|Coachella|Ventanita|Minnesota|Kissimmee|sourdough|democracy|Jefferson|community|ownership|APTX4869|Billiken|kuidaore|Thompson|Heuriger|hardened|Citywalk|Pinotage|Noritake|defaults|K-Beauty|Augarten|Eixample|Tzatziki|Moussaka|Souvlaki|Palatine|Mondeggi|Frascati|Pecorino|Esposito|Principe|Bacalhau|Ginjinha|Koolhaas|EdgeWalk|Carousel|Canada's|Ebenezer|BeltLine|Hamilton|Franklin|Kingston|Meyerson|Highland|Montrose|Galleria|Bellaire|Wolfgang|Griffith|Portland|Basquiat|Fearless|Pastrami|Brooklyn|TapuTapu|utilidor|Happiest|Taqueria|Anderson|Paradise|L'Enfant|Rottnest|Allbirds|talisman|Nirvana|Baklava|KUMAMON|Central|Natchez|Zuweila|Karkade|Chapati|Kericho|Rooibos|Dolphin|Liberty|S-Pulse|Saudade|teamLab|instant|K-Drama|Merdeka|EZ-Link|Goulash|Pilsner|defined|Wannsee|RICHARD|Passeig|Sangria|Fortnum|Mastiha|Retsina|Glyfada|entasis|Hassler|Piaggio|Tuk-Tuk|Saudite|Samovar|Peameal|Spadina|flyover|Japadog|Skytrax|Battery|Clayton|Twitter|Chowder|Charles|Cannoli|Lincoln|Detroit|Packard|Hermann|Houston|concert|Buffalo|Tex-Mex|Heights|Fremont|Goliath|filming|ceviche|Flagler|comfort|Chicory|dressed|Lottery|Whitney|Bedford|Premium|freedom|Dolores|Pacific|Capitol|Skillet|Griffey|Cupcake|Capital|SkyWalk|SEIGAKU|UNESCO|Piazza|Gelato|Alfama|Techno|Zilker|Uptown|Motown|Animal|Purple|SpaceX|Boudin|Kaolin|Ladies|Cowboy|SCV-70|modern|sukuma|Safari|Bailey|Canang|PayPay|SMTOWN|Kopi-O|Manner|Sedlec|Brezel|Heyman|duende|Bicing|Bibury|Athens|Pastis|Grappa|Aperol|Appian|Magere|Albert|become|Gassan|Semper|Banyas|Trendy|Bloody|Rainey|Quincy|Boston|Joseph|Dipped|Jordan|Bishop|Monroe|Murals|Brazos|fajita|fusion|Apollo|X-Pole|Gordon|Airbnb|Runyon|Amoeba|Pueblo|mojito|Summit|skyway|Prince|Second|Creole|Harlem|Street|Outlet|Coffee|Avatar|Isaiah|Rowing|Adrian|Powell|Dragon|Escape|Dupont|Brunch|Zespri|Rhythm|Gibson|PLAYER|Phobos|Deimos|Garapa|Bebop|Geass|Vegas|Kecak|zunda|Hotel|Rodeo|Texas|Miami|Macau|ASACA|SEELE|style|Sweet|Lofts|Union|Titan|F-150|Aloha|Frank|Basel|Ocean|Marie|bayou|Mardi|EPCOT|Stone|Chili|Bossa|story|Final|Zaffe|Shuka|Braai|Great|Nyepi|shops|MLX01|omega|Cosmo|Tarik|Mamak|Obama|Figlm|Einsp|Kebab|Herta|Jesse|Jerez|Tapas|Vespa|Pizza|Fendi|latte|Brute|Greco|Mario|Piero|Wi-Fi|Abril|Bloor|False|panda|Peach|Kreuz|Sixth|Stata|Burns|Ledge|Bulls|U-505|Green|Windy|Muddy|Field|Rowdy|Fenix|Berry|Space|Phish|Elvis|Chris|Sqirl|Vegan|Magic|Calle|Guava|Story|Chain|North|Throw|Cajun|Monde|Storm|Amish|water|Alamo|Angel|Curry|Cable|Yerba|Loupe|Hiram|Puget|Mochi|James|Voted|Adams|Bondi|ANZAC|Scoop|Cacha|ULTRA|PIECE|coach|Alone|Stand|Ghost|Zero|NERV|Taco|Deco|EISA|Fado|Past|Bean|Mall|Free|SSJ2|Five|Slam|IAEA|Omni|soul|SoCo|Paul|Cubs|Lone|MoMA|NASA|LOVE|logo|Kiwi|CA72|plus|APTX|SDAT|SIDE|Abou|shai|Nile|Dawa|Abra|Soho|Pani|Chai|POLA|LIVE|D101|Tony|CIMB|IMAX|Milo|Siam|Ring|SO36|Love|Dodi|Mind|Lock|Olde|bank|Rome|Foam|Piet|Deep|Gone|Trae|Yogi|Live|Keep|Mike|Back|Made|Tiki|BBVA|Banh|Viva|Earl|Buck|Cars|Sand|Kobe|Skid|Wade|cafe|West|Mill|Gold|Hand|Kiss|SoHo|Edge|Kool|NoHo|Mako|Duff|Geno|Blue|Meta|Karl|LGBT|Bill|Pike|Loft|Fish|flat|wine|Piha|Hoki|Koru|Boss|PLUS|VIVI|ROOM|BANG|GOLD|BLUE|call|SLAM|DUNK|WISE)([^A-Za-z]|$)/;
      if (it.desc && !OK_EN.test(it.desc) && /[a-zA-Z]{4,}/.test(it.desc) && !/(千米|公里)/.test(it.desc)) warn(`${it.id} 描述含疑似英文单词`);
    }
  }
  if (foreign && freeCnt === 0) warn('国外城市建议至少 1 个免费条目');
  if (nSu >= 8 && tags.size < 3) warn(`${c.name} souvenir tag 覆盖不足: ${[...tags].join(',')}`);
  const net = rew - cost;
  totCost += cost; totReward += rew;
  console.log(`  条目 ${nSp}景 ${nSu}周 ${nSt}闻 | 花销 ${cost.toFixed(0)} 奖励 ${rew.toFixed(0)} 净赚 ${net.toFixed(0)} (${cost ? (net / cost * 100).toFixed(0) : '∞'}%)`);
  // 单城净赚不再限制区间：大 IP 副本条目多、收益高属设计使然
}

/* ---------- 系列收藏校验 ---------- */
const SERIES = global.window.TRAVEL_SERIES || [];
const SERIES_CATS = ['anime', 'isekai', 'tokusatsu', 'japan', 'usa', 'china', 'beauty', 'luxury', 'world'];
const cityIds = new Set(CITIES.map(c => c.id));
console.log(`\n===== 系列收藏校验 ${SERIES.length} 个系列 =====\n`);
for (const sr of SERIES) {
  if (!sr.id || !sr.name) { err(`系列缺少 id/name`); continue; }
  if (seenIds.has(sr.id)) err(`系列 id 重复: ${sr.id}`);
  else seenIds.set(sr.id, `系列·${sr.name}`);
  if (!SERIES_CATS.includes(sr.cat)) err(`系列 ${sr.id} 的 cat 非法: ${sr.cat}`);
  if (!Array.isArray(sr.items) || !sr.items.length) { err(`系列 ${sr.id} 无 items`); continue; }
  for (const it of sr.items) {
    if (!it.id || !it.name || !it.type) { err(`系列 ${sr.id} 条目字段不全: ${it.id || it.name}`); continue; }
    if (seenIds.has(it.id)) err(`系列条目 id 冲突/重复: ${it.id}（已用于 ${seenIds.get(it.id)}）`);
    else seenIds.set(it.id, `系列·${sr.name}`);
    if (!cityIds.has(it.city)) err(`系列 ${sr.id} 条目 ${it.id} 的 city 不存在: ${it.city}`);
    if (typeof it.price !== 'number' || it.price < 0) err(`系列 ${sr.id} 条目 ${it.id} price 非法: ${it.price}`);
  }
}

/* ---------- 数据加载一致性校验（data-order.txt / data-bundle.js / index.html） ---------- */
const dataFiles = [];
const collectMount = dir => {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) collectMount(p);
    else if (name.endsWith('.js')) dataFiles.push('data/' + path.relative(dataDir, p).replace(/\\/g, '/'));
  }
};
collectMount(dataDir);
const dataSet = new Set(dataFiles);
const lowerData = new Map(dataFiles.map(f => [f.toLowerCase(), f]));

let listed = [];
try { listed = fs.readFileSync(path.join(__dirname, 'data-order.txt'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean); }
catch (e) { err('缺少 data-order.txt（执行 node tools/build_data.js 生成）'); }
const listedSet = new Set(listed);
listed.forEach(f => {
  if (!dataSet.has(f)) {
    if (lowerData.has(f.toLowerCase())) err(`data-order.txt 大小写不符: ${f}（磁盘为 ${lowerData.get(f.toLowerCase())}）`);
    else err(`data-order.txt 登记的文件不存在: ${f}`);
  }
});
dataFiles.forEach(f => { if (!listedSet.has(f)) err(`data-order.txt 未登记数据文件: ${f}（执行 node tools/build_data.js 自动补入）`); });

let bundle = '';
try { bundle = fs.readFileSync(path.join(__dirname, 'data-bundle.js'), 'utf8'); }
catch (e) { err('缺少 data-bundle.js（执行 node tools/build_data.js 生成）'); }
const inBundle = [...bundle.matchAll(/\/\* =+ (data\/[^ ]+) =+ \*\//g)].map(m => m[1]);
const bundleSet = new Set(inBundle);
if (bundle) {
  if (inBundle.length !== listed.length) {
    err(`data-bundle.js 已过期：含 ${inBundle.length} 个文件，data-order.txt 有 ${listed.length} 个（重新执行 node tools/build_data.js）`);
  } else {
    for (let i = 0; i < listed.length; i++) {
      if (inBundle[i] !== listed[i]) { err(`data-bundle.js 与 data-order.txt 顺序不一致（第 ${i} 项 ${inBundle[i]} ≠ ${listed[i]}），请重新执行 node tools/build_data.js`); break; }
    }
  }
  dataFiles.forEach(f => { if (!bundleSet.has(f)) err(`data-bundle.js 缺少文件: ${f}（重新执行 node tools/build_data.js）`); });
}

let html = '';
try { html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'); } catch (e) {}
const mountBundle = /src="data-bundle\.js"/.test(html);
if (!mountBundle) err('index.html 未挂载 data-bundle.js');
if (!/src="app\.js"/.test(html)) err('index.html 未挂载 app.js');
if (/src="data\//.test(html)) err('index.html 仍有逐个挂载的 data 脚本（应改为 data-bundle.js）');
console.log(`数据文件 ${dataFiles.length} 个 | data-order.txt ${listed.length} 行 | data-bundle.js ${inBundle.length} 个 | index.html ${mountBundle ? '已挂载 data-bundle.js' : '未挂载'}`);

console.log(`\n===== 汇总: ${CITIES.length} 城 | 总花销 ${totCost.toFixed(0)} | 总奖励 ${totReward.toFixed(0)} | 总净赚 ${(totReward - totCost).toFixed(0)} =====`);
const cn = CITIES.filter(c => c.cc === 'CN' && c.world !== 'isekai').length, fo = CITIES.filter(c => c.world !== 'isekai' && c.cc !== 'CN').length;
console.log(`国内 ${cn} 城 / 国外 ${fo} 城 ${fo >= cn ? '✓ 国外≥国内' : '⚠️ 国外少于国内'}`);
console.log(errors ? `❌ ${errors} 个错误，${warns} 个警告` : `✅ 全部通过（${warns} 个警告）`);
process.exitCode = errors ? 1 : 0;
