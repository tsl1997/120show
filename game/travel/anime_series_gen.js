/* 动漫副本系列化生成器：龙珠DB / 灌篮SL / 火影NA / 柯南CO
 * 玩法：把人物/势力从 *STORIES 迁入 TRAVEL_SERIES（带 color，主角金），
 *       原 stories 只保留名场面（事件前缀）。
 * 用法：node anime_series_gen.js （game/travel 下）
 */
const fs = require('fs');
const path = require('path');

// ---------- 解析 ----------
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
function toItem(raw, type, price, city) {
  const end = raw.lastIndexOf('}');
  return `${raw.slice(0, end).replace(/\s*$/, '')}, type: '${type}', city: '${city}', price: ${price} }`;
}

// ---------- 生成：把某文件的"人物"条目写成 series，返回文件文本 ----------
function seriesFileText(city, seriesList) {
  const lines = [];
  for (const s of seriesList) {
    const items = s.items.map(it => '    ' + toItem(it.raw, s.type, s.price, city)).join(',\n');
    lines.push(`window.TRAVEL_SERIES.push({ id: '${s.id}', cat: 'isekai', name: '${s.name}', color: '${s.color}',
  years: '${s.years}', author: '${s.author}', theme: '${s.theme}',
  background: '${s.bg}',
  story: '${s.story}',
  protagonist: '${s.hero}', slogan: '${s.slogan}',
  cities: ['${city}'],
  items: [
${items}
  ]
});`);
  }
  return '/* 异世界·动漫 势力系列收藏（anime_series_gen.js 生成，勿手改结构） */\n(function () {\n  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n' +
    lines.map(x => '  ' + x.replace(/\n/g, '\n  ')).join('\n') + '\n})();\n';
}

// 通用：读源文件 → entries → 按前缀分组成 series
function buildSeriesByPrefix(all, groups, city, years, author) {
  // groups: [{ prefix, id, name, color, type, price, theme, hero, slogan, bg, story }]
  return groups.map(g => {
    const items = all.filter(e => e.id.startsWith(g.prefix));
    if (!items.length) { console.error('EMPTY prefix ' + g.prefix); process.exitCode = 1; }
    return {
      id: g.id, name: g.name, color: g.color, type: g.type, price: g.price,
      theme: g.theme, hero: g.hero, slogan: g.slogan, bg: g.bg, story: g.story,
      years, author, items,
    };
  });
}
function writeSeriesFile(file, city, series) {
  const head = `/* 异世界·动漫 势力系列收藏（anime_series_gen.js 生成，勿手改结构） */\n(function () {\n  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n`;
  const body = series.map(s => {
    const items = s.items.map(it => '    ' + toItem(it.raw, s.type, s.price, city)).join(',\n');
    return `  window.TRAVEL_SERIES.push({ id: '${s.id}', cat: 'isekai', name: '${s.name}', color: '${s.color}',
    years: '${s.years}', author: '${s.author}', theme: '${s.theme}',
    background: '${s.bg}', story: '${s.story}',
    protagonist: '${s.hero}', slogan: '${s.slogan}', cities: ['${city}'],
    items: [\n${items}\n    ]\n  });`;
  }).join('\n');
  fs.writeFileSync(file, head + body + '\n})();\n', 'utf8');
}

const A = { years: '1984-至今', author: '鸟山明' };

// ============ DB 龙珠 ============
{
  const dbSrc = path.join(__dirname, 'data', 'isekai', 'anime', 'db', 'db_02_stories.js');
  const dbText = fs.readFileSync(dbSrc, 'utf8');
  const all = extractEntries(dbText);
  const dbSeries = [
    { id: 'sr_db_z', name: 'Z战士·悟空与伙伴们', color: '#d4a017', type: '战士卡', price: 160,
      theme: 'Z战士与地球战士收藏', hero: '孙悟空', slogan: '卡——美——哈——美——哈！',
      bg: '从包子山的野孩子到宇宙最强的超级赛亚人——悟空、贝吉塔、比克、悟饭与伙伴们守护地球的战士之魂。',
      story: '"我就是地球的孙悟空！"从龙珠冒险到宇宙大战的战士群像。', prefix: 'dbc_' },
    { id: 'sr_db_enemy', name: '宇宙的强敌·弗利萨与魔人', color: '#c0392b', type: '强敌卡', price: 200,
      theme: '历代反派收藏', hero: '弗利萨·沙鲁·魔人布欧', slogan: '宇宙帝王与完美生物',
      bg: '拉蒂兹、弗利萨、基纽战队、沙鲁、巴比迪与布欧——踩着悟空成长的历代宇宙级强敌。',
      story: '每一场以命相搏的恶战，都是Z战士变强的台阶。', prefix: 'dbe_' },
    { id: 'sr_db_god', name: '神与传说·界王与神龙', color: '#8e44ad', type: '传说卡', price: 180,
      theme: '神界与龙族收藏', hero: '界王神·全王·神龙', slogan: '说出你的愿望吧',
      bg: '天神与波波、界王星的笑话大师、界王神、全王与神龙——守护宇宙秩序与许愿奇迹的传说们。',
      story: '从加林塔的猫仙人到全王的指尖，龙珠世界的神话谱系。', prefix: 'dbn_' },
  ];
  const people = buildSeriesByPrefix(all, dbSeries, 'isekai_db', A.years, A.author);
  writeSeriesFile(path.join(__dirname, 'data', 'isekai', 'anime', 'db', 'db_series.js'), 'isekai_db', people);
  // 重写 stories：只留 dbv 事件
  const ev = all.filter(e => e.id.startsWith('dbv_'));
  fs.writeFileSync(dbSrc,
    '/* 异世界·龙珠 分册02：剧情名场面（人物已迁入 db_series.js） */\n' +
    'window.DB_STORIES = window.DB_STORIES || [];\nwindow.DB_STORIES.push(\n' +
    ev.map(e => '  ' + e.raw).join(',\n') + '\n);\n', 'utf8');
  console.log('DB: series', people.length, 'scenes', ev.length);
}

// ============ SL 灌篮 ============
{
  const slSrc = path.join(__dirname, 'data', 'isekai', 'anime', 'slamdunk', 'sl_02_stories.js');
  const text = fs.readFileSync(slSrc, 'utf8');
  const all = extractEntries(text);
  const pick = ids => all.filter(e => ids.includes(e.id));
  const groups = [
    { id: 'sr_sl_shonan', name: '湘北·天才与伙伴', color: '#d4a017', type: '球员卡', price: 160,
      theme: '湘北篮球部收藏', hero: '樱木花道', slogan: '我是天才！',
      bg: '问题儿童军团在安西教练麾下从零出发——樱木、流川、赤木、三井、宫城与板凳上的呐喊。',
      story: '"教练，我想打篮球"——湘北向全国大赛冲刺的热血一年。',
      ids: ['slc_sakuragi','slc_rukawa','slc_akagi','slc_mitsui','slc_miyagi','slc_kogure','slc_anzai','slc_ayako','slc_haruko','slc_sakuragi_gumi','slc_yasuda','slc_yasuko'] },
    { id: 'sr_sl_kanagawa', name: '神奈川群雄·陵南海南翔阳', color: '#2e86c1', type: '球员卡', price: 170,
      theme: '神奈川强队收藏', hero: '仙道彰·牧绅一·藤真健司', slogan: '神奈川的顶点',
      bg: '仙道的陵南、牧绅一的海南、藤真的翔阳——四强会战中的神奈川群雄。',
      story: '每一支球队都有自己的王牌与眼泪，通向全国的只有一张门票。',
      ids: ['slc_sendoh','slc_uozumi','slc_fukuda','slc_taoka','slc_yezo','slc_hikoichi','slc_maki','slc_koshino','slc_kiyota','slc_takasago','slc_takato','slc_miyamasu','slc_fujima','slc_hanagata','slc_hasegawa','slc_shoyo_big4'] },
    { id: 'sr_sl_national', name: '全国大会·山王与豪强', color: '#c0392b', type: '球员卡', price: 200,
      theme: '全国豪强收藏', hero: '泽北荣治·河田雅史', slogan: '全日本第一',
      bg: '卫冕王者山王工业的泽北、河田、深津，丰玉的南烈，还有森重宽、诸星大等全国怪物。',
      story: '与山王的一战封神——湘北的世纪之战与青春的一页。',
      ids: ['slc_sawakita','slc_kawada','slc_fukatsu','slc_nobe','slc_matsumoto','slc_ichinokura','slc_kawata_m','slc_domoto','slc_nanjo','slc_kishimoto','slc_morishige','slc_moroboshi','slc_taoka_anger'] },
  ];
  const people = groups.map(g => {
    const items = pick(g.ids);
    if (!items.length) { console.error('SL empty ' + g.id); process.exitCode = 1; }
    return { id: g.id, name: g.name, color: g.color, type: g.type, price: g.price, theme: g.theme, hero: g.hero, slogan: g.slogan, bg: g.bg, story: g.story, items };
  });
  fs.writeFileSync(path.join(__dirname, 'data', 'isekai', 'anime', 'slamdunk', 'sl_series.js'),
    '/* 异世界·灌篮高手 势力系列收藏（anime_series_gen.js 生成） */\n' +
    '(function () {\n  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n' +
    people.map(s => {
      const items = s.items.map(it => '    ' + toItem(it.raw, s.type, s.price, 'isekai_slamdunk')).join(',\n');
      return `  window.TRAVEL_SERIES.push({ id: '${s.id}', cat: 'isekai', name: '${s.name}', color: '${s.color}',
    years: '1990-1996', author: '井上雄彦', theme: '${s.theme}',
    background: '${s.bg}', story: '${s.story}',
    protagonist: '${s.hero}', slogan: '${s.slogan}', cities: ['isekai_slamdunk'],
    items: [\n${items}\n    ]\n  });`;
    }).join('\n') + '\n})();\n', 'utf8');
  const ev = all.filter(e => e.id.startsWith('slv_'));
  fs.writeFileSync(slSrc,
    '/* 异世界·灌篮高手 分册02：剧情名场面（人物已迁入 sl_series.js） */\n' +
    'window.SL_STORIES = window.SL_STORIES || [];\nwindow.SL_STORIES.push(\n' +
    ev.map(e => '  ' + e.raw).join(',\n') + '\n);\n', 'utf8');
  console.log('SL: series', people.length, 'scenes', ev.length);
}

// ============ NA 火影 / CO 柯南：整文件=单系列 ============
function wholeFileSeries(cfg) {
  // cfg: {src, city, out?, id, name, color, type, price, years, author, theme, hero, slogan, bg, story, skipPrefixes:[]}
  const src = path.join(__dirname, 'data', 'isekai', 'anime', cfg.folder, cfg.src);
  const text = fs.readFileSync(src, 'utf8');
  const all = extractEntries(text).filter(e => !(cfg.skipPrefixes || []).some(p => e.id.startsWith(p)));
  if (!all.length) { console.error('EMPTY ' + cfg.src); process.exitCode = 1; }
  const items = all.map(it => '    ' + toItem(it.raw, cfg.type, cfg.price, cfg.city)).join(',\n');
  const out = `/* ${cfg.comment} */\n(function () {\n  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n  window.TRAVEL_SERIES.push({ id: '${cfg.id}', cat: 'isekai', name: '${cfg.name}', color: '${cfg.color}',
    years: '${cfg.years}', author: '${cfg.author}', theme: '${cfg.theme}',
    background: '${cfg.bg}', story: '${cfg.story}',
    protagonist: '${cfg.hero}', slogan: '${cfg.slogan}', cities: ['${cfg.city}'],
    items: [\n${items}\n    ]\n  });\n})();\n`;
  fs.writeFileSync(path.join(__dirname, 'data', 'isekai', 'anime', cfg.folder, cfg.out), out, 'utf8');
  return all.length;
}
function makeStoriesOnly(cfg) {
  // 把事件文件重写：保持指定数组 init + 仅留 skipPrefixes 未覆盖的内容? 直接全部保留（已是事件文件），加 init
  const src = path.join(__dirname, 'data', 'isekai', 'anime', cfg.folder, cfg.src);
  const text = fs.readFileSync(src, 'utf8');
  const all = extractEntries(text);
  fs.writeFileSync(src,
    `/* ${cfg.comment} */\nwindow.${cfg.arr} = window.${cfg.arr} || [];\nwindow.${cfg.arr}.push(\n` +
    all.map(e => '  ' + e.raw).join(',\n') + '\n);\n', 'utf8');
  console.log(cfg.folder, cfg.src, 'stories', all.length);
}

// 火影 NA
wholeFileSeries({ folder: 'naruto', src: 'na_02_konoha.js', out: 'na_02_konoha.js', city: 'isekai_naruto',
  id: 'sr_na_konoha', name: '木叶·第七班与十二小强', color: '#d4a017', type: '忍者卡', price: 160,
  years: '2002-至今', author: '岸本齐史', theme: '木叶忍者收藏', hero: '漩涡鸣人', slogan: '我要成为火影！',
  bg: '木叶隐村第七班与十二小强——鸣人、佐助、小樱与卡卡西，以及看着他们长大的上忍们。',
  story: '"木叶飞舞之处，火亦生生不息"——从吊车尾到火影的成长群像。',
  comment: '异世界·火影忍者 势力系列收藏（第七班·木叶）' });
wholeFileSeries({ folder: 'naruto', src: 'na_03_hokage.js', out: 'na_03_hokage.js', city: 'isekai_naruto',
  id: 'sr_na_legacy', name: '历代火影与传说忍者', color: '#5b2c6f', type: '忍者卡', price: 200,
  years: '2002-至今', author: '岸本齐史', theme: '火影与传说忍者收藏', hero: '千手柱间·宇智波斑', slogan: '火之意志',
  bg: '初代至四代火影、千手与宇智波、漩涡一族，以及斑、鼬、带土、长门等改变忍界的传说。',
  story: '"在忍者的世界里，不遵守规则的是废物，不珍惜伙伴的人连废物都不如。"',
  comment: '异世界·火影忍者 势力系列收藏（历代火影·传说）' });
wholeFileSeries({ folder: 'naruto', src: 'na_04_akatsuki.js', out: 'na_04_akatsuki.js', city: 'isekai_naruto',
  id: 'sr_na_akatsuki', name: '晓·鹰小队与音忍', color: '#c0392b', type: '忍者卡', price: 200,
  years: '2002-至今', author: '岸本齐史', theme: '晓组织收藏', hero: '佩恩·带土', slogan: '黑底红云的梦想',
  bg: '黑底红云的晓组织、佐助的鹰小队与大蛇丸的音忍——面具与袍影下的黑暗群像。',
  story: '"让世界感受痛楚"——晓的终极计划与落幕。',
  comment: '异世界·火影忍者 势力系列收藏（晓·鹰·音忍）' });
wholeFileSeries({ folder: 'naruto', src: 'na_05_villages.js', out: 'na_05_villages.js', city: 'isekai_naruto',
  id: 'sr_na_village', name: '五影与各大隐村', color: '#2e86c1', type: '忍者卡', price: 180,
  years: '2002-至今', author: '岸本齐史', theme: '忍村群像收藏', hero: '我爱罗·照美冥', slogan: '影的意志',
  bg: '砂隐的我爱罗与千代、雾隐的照美冥、云隐的雷影与奇拉比、岩隐的大野木——五大国的顶点与名忍。',
  story: '五影会谈与第四次忍界大战——五大国第一次并肩。',
  comment: '异世界·火影忍者 势力系列收藏（五影·忍村）' });
wholeFileSeries({ folder: 'naruto', src: 'na_06_clans.js', out: 'na_06_clans.js', city: 'isekai_naruto',
  id: 'sr_na_clan', name: '瞳术·尾兽与通灵兽', color: '#16a085', type: '忍者卡', price: 180,
  years: '2002-至今', author: '岸本齐史', theme: '一族尾兽通灵收藏', hero: '九尾·日向一族', slogan: '羁绊之力',
  bg: '日向、猪鹿蝶三族，一至九尾的尾兽，蛤蟆文太、万蛇、蛞蝓等通灵兽——力量与羁绊的谱系。',
  story: '"我们不是工具"——从被利用到并肩作战的人柱力们。',
  comment: '异世界·火影忍者 势力系列收藏（一族·尾兽·通灵）' });
wholeFileSeries({ folder: 'naruto', src: 'na_07_otutsuki.js', out: 'na_07_otutsuki.js', city: 'isekai_naruto',
  id: 'sr_na_otutsuki', name: '大筒木与博人传新世代', color: '#8e44ad', type: '忍者卡', price: 220,
  years: '2016-至今', author: '岸本齐史', theme: '大筒木与次世代收藏', hero: '大筒木辉夜·漩涡博人', slogan: '新时代',
  bg: '查克拉之祖辉夜、六道仙人兄弟、桃式等大筒木，以及博人、佐良娜、巳月、川木的新世代。',
  story: '"我不是火影的儿子，我是漩涡博人！"——木叶的新传说。',
  comment: '异世界·火影忍者 势力系列收藏（大筒木·次世代）' });
makeStoriesOnly({ folder: 'naruto', src: 'na_09_events.js', arr: 'NA_STORIES', comment: '异世界·火影忍者 分册09：剧情名场面' });

// 柯南 CO
wholeFileSeries({ folder: 'conan', src: 'co_02_detectives.js', out: 'co_02_detectives.js', city: 'isekai_conan',
  id: 'sr_co_main', name: '米花町·主角团与红方', color: '#d4a017', type: '人物卡', price: 180,
  years: '1994-至今', author: '青山刚昌', theme: '柯南与伙伴收藏', hero: '江户川柯南', slogan: '真相永远只有一个！',
  bg: '柯南与毛利家、少年侦探团、FBI的赤井家、公安的安室透——围绕名侦探的正义同盟网。',
  story: '"身体变小，头脑不变"——藏在童颜之下的银色子弹。',
  comment: '异世界·名侦探柯南 势力系列收藏（主角团·红方）' });
wholeFileSeries({ folder: 'conan', src: 'co_03_police.js', out: 'co_03_police.js', city: 'isekai_conan',
  id: 'sr_co_police', name: '警视厅·警察群像', color: '#2e86c1', type: '人物卡', price: 160,
  years: '1994-至今', author: '青山刚昌', theme: '警察群像收藏', hero: '目暮十三·佐藤美和子', slogan: '正义的勋章',
  bg: '目暮、高木、佐藤、白鸟等搜查一课，大阪府警与警校五人组——守护米花町的蓝衣人们。',
  story: '"下辈子的彩票"——松田阵平与殉职刑警们的正义。',
  comment: '异世界·名侦探柯南 势力系列收藏（警视厅）' });
wholeFileSeries({ folder: 'conan', src: 'co_04_black.js', out: 'co_04_black.js', city: 'isekai_conan',
  id: 'sr_co_black', name: '黑衣组织·代号们', color: '#34495e', type: '人物卡', price: 220,
  years: '1994-至今', author: '青山刚昌', theme: '黑衣组织收藏', hero: '琴酒·朗姆', slogan: 'A secret makes a woman woman',
  bg: '那位大人乌丸莲耶、琴酒、贝尔摩德、朗姆三候选与组织干部——以酒为名的黑暗。',
  story: '"我们是创造这个时代的人"——与红方纠缠二十年的宿敌。',
  comment: '异世界·名侦探柯南 势力系列收藏（黑衣组织）' });
wholeFileSeries({ folder: 'conan', src: 'co_05_rivals.js', out: 'co_05_rivals.js', city: 'isekai_conan',
  id: 'sr_co_rival', name: '怪盗基德与关西侦探', color: '#16a085', type: '人物卡', price: 170,
  years: '1994-至今', author: '青山刚昌', theme: '基德与对手收藏', hero: '怪盗基德·服部平次', slogan: '怪盗只用华丽的手法',
  bg: '月光魔术师怪盗基德、服部平次与大阪组、白马探与魔女红子——侦探与怪盗的星光舞台。',
  story: '"怪盗用华丽的手法盗取，侦探则用推理解开"——宿敌与盟友。',
  comment: '异世界·名侦探柯南 势力系列收藏（基德·关西）' });
wholeFileSeries({ folder: 'conan', src: 'co_06_movies.js', out: 'co_06_movies.js', city: 'isekai_conan',
  id: 'sr_co_movie', name: '剧场版·银幕群像', color: '#8e44ad', type: '人物卡', price: 180,
  years: '1997-至今', author: '青山刚昌', theme: '剧场版人物收藏', hero: '库拉索·泽田弘树', slogan: '银幕之上的名场面',
  bg: '从引爆摩天楼到黑铁的鱼影——剧场版限定人物与名场面的集大成。',
  story: '大银幕上的生死营救与告白——柯南电影宇宙的群星。',
  comment: '异世界·名侦探柯南 势力系列收藏（剧场版）' });
makeStoriesOnly({ folder: 'conan', src: 'co_08_events.js', arr: 'CO_STORIES', comment: '异世界·名侦探柯南 分册08：剧情名场面' });
