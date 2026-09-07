/* OnePiece 海贼王副本：把 OP_STORIES 里的"人物/事件"按势力拆成 TRAVEL_SERIES。
 * 用法：node gen_op_series.js  (在 game/travel 目录下执行)
 * 每个组：{ file, series:[{id,name,color,type,price,theme,bg,story,hero,slogan, ids:[...]|'ALL'}] }
 * ids 省略 = 全取该文件条目。
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'data', 'isekai', 'anime', 'onepiece');
const CITY = 'isekai_onepiece';

const CONFIG = [
  { file: 'op_02_crew.js', series: [
    { id: 'sr_op_strawhat_full', name: '草帽海贼团·伙伴与羁绊', color: '#d4a017', type: '伙伴卡', price: 160,
      theme: '草帽一伙全员与羁绊收藏', hero: '蒙奇·D·路飞与伙伴们', slogan: '我们是伙伴！',
      bg: '从东海的小帆船到新世界的万里阳光号，路飞一路集结起剑士、航海士、狙击手、厨师、船医、考古学家、船匠、音乐家与舵手。',
      story: '一顶草帽串起十面旗帜——外加家人、恩人与一路并肩的羁绊者。',
      ids: 'ALL' }
  ]},
  { file: 'op_03_yonko_a.js', series: [
    { id: 'sr_op_redhair', name: '红发海贼团', color: '#c0392b', type: '势力卡', price: 200,
      theme: '四皇香克斯的红发团收藏', hero: '红发香克斯', slogan: '新时代里没有能载我的船',
      bg: '四皇之一，前罗杰海贼团见习生香克斯组建的最强铁壁海贼团。霸王色震海，枪指黄猿，以"面子"闻名大海。',
      story: '把草帽托付给路飞的男人——亦师亦友的四皇。',
      ids: ['opy_shanks','opy_beckman','opy_luckyroux','opy_yasopp_r','opy_lucky_mang','opy_hongo','opy_building','opy_utah'] },
    { id: 'sr_op_blackbeard', name: '黑胡子海贼团', color: '#2c3e50', type: '势力卡', price: 220,
      theme: '黑胡子蒂奇与船团收藏', hero: '马歇尔·D·蒂奇', slogan: '人的梦想是不会结束的！',
      bg: '暗暗+震震双果实的"四皇"蒂奇，聚拢推进城第六层最凶残的罪犯组成的新时代暴君船团。',
      story: '从白胡子团二番队到夺取最强的男人——LV6群凶入伙。',
      ids: ['opy_teach','opy_burgess','opy_shiryu','opy_vanaugur','opy_laffitte','opy_pizarro','opy_vasco','opy_wolf','opy_devon','opy_docq','opy_kuzan_bb'] },
    { id: 'sr_op_whitebeard', name: '白胡子海贼团', color: '#5d6d7e', type: '势力卡', price: 220,
      theme: '白胡子纽盖特的大家庭收藏', hero: '爱德华·纽盖特', slogan: '我是旧时代的残党！',
      bg: '"世界最强的男人"白胡子把船员当作儿子，十六番队与麾下船长组成的最强家族，顶上战争震裂大海。',
      story: '把"家人"二字刻进海贼团的男人——新时代没有能载他的船。',
      ids: ['opy_whitebeard','opy_marco','opy_ace','opy_jozu','opy_vista','opy_izo','opy_thatch','opy_blamenco','opy_rakuyo','opy_namur','opy_curiel','opy_kingdew','opy_haruta','opy_atmos','opy_speedjiru','opy_fossa','opy_squard','opy_oarsjr'] }
  ]},
  { file: 'op_03_yonko_b.js', series: [
    { id: 'sr_op_bigmom', name: 'BIG MOM海贼团·托特兰', color: '#c2185b', type: '势力卡', price: 200,
      theme: '万国夏洛特家族收藏', hero: '夏洛特·玲玲', slogan: '想吃什么就吃什么',
      bg: '灵魂果实的"大妈"用万国缔造甜点王国，几十个子女与将星拱卫；茶会与镜世界一战震动新世界。',
      story: '四皇与她的庞大家族——甜蜜又凶残的托特兰。',
      ids: ['opy_bigmom','opy_katakuri','opy_smoothie','opy_cracker','opy_perospero','opy_katakuri_fam','opy_breulee','opy_pudding','opy_compote','opy_montdor','opy_galette','opy_opera','opy_bobbin','opy_tamago','opy_bege','opy_chiffon','opy_lola','opy_pedro','opy_pekoms'] },
    { id: 'sr_op_germa', name: '杰尔马66·文斯莫克', color: '#7d3c98', type: '势力卡', price: 180,
      theme: '科学王国杰尔马收藏', hero: '文斯莫克·伽治', slogan: '科学的王国杰尔马！',
      bg: '以克隆人与科技称霸北海的"无王国"，文斯莫克四兄弟与山治的母亲索拉——改造人的悲欢。',
      story: '没有国土的王国——科技军团的诅咒与亲情。',
      ids: ['opy_judge','opy_reiju','opy_ichiji','opy_niji','opy_yonji','opy_sora'] },
    { id: 'sr_op_kaido', name: '百兽海贼团·凯多', color: '#117a65', type: '势力卡', price: 220,
      theme: '百兽凯多的鬼岛军团收藏', hero: '百兽凯多', slogan: '要做什么样的死法！',
      bg: '"世界最强生物"凯多以人造果实与动物系能力者组成百兽团，大看板与飞六胞盘踞和之国鬼岛。',
      story: '鬼岛决战坠落的四皇——最强生物的时代谢幕。',
      ids: ['opy_kaido','opy_king','opy_queen','opy_jack','opy_tobiroppo','opy_sasaki','opy_whoswho','opy_blackmaria','opy_pagewho','opy_drake_bb','opy_hawkins_bb','opy_apoo_bb','opy_numbers','opy_gifters'] }
  ]},
  { file: 'op_03_yonko_c.js', series: [
    { id: 'sr_op_roger', name: '罗杰海贼团', color: '#ca6f1e', type: '传说卡', price: 240,
      theme: '海贼王罗杰的船团收藏', hero: '哥尔·D·罗杰', slogan: '想要我的财宝吗？去找吧！',
      bg: '史上唯一抵达拉夫坦路的海贼王船团，雷利、加宾与见习生香克斯、巴基——传说落幕前最亮的星。',
      story: '一句遗言开启大海贼时代——传奇船员各奔东西。',
      ids: ['opy_roger','opy_rayleigh','opy_gaban','opy_shanks_roger','opy_rogue_crew','opy_rouge'] },
    { id: 'sr_op_rocks', name: '洛克斯海贼团', color: '#943126', type: '传说卡', price: 240,
      theme: '神之谷的梦魇船团收藏', hero: '洛克斯·D·吉贝克', slogan: '世界之王',
      bg: '38年前差点统治世界的帝王船团，船员后来个个成为四皇——神之谷被罗杰与卡普联手击溃。',
      story: '孕育四皇的摇篮——被历史抹去的传说。',
      ids: ['opy_rocks','opy_rocks_wb','opy_rocks_bm','opy_rocks_kaido','opy_rocks_shiki','opy_captain_john','opy_wangzhi','opy_ochoku','opy_stussy_ma'] },
    { id: 'sr_op_legend', name: '传说海贼与隐藏强者', color: '#6e2c00', type: '传说卡', price: 220,
      theme: '金狮子红伯爵等传说强者收藏', hero: '金狮子·史基', slogan: '强者不该被名字定义',
      bg: '金狮子、红伯爵、小丑巴基、威布尔……游离于四皇之外的传说与散落强者的群像。',
      story: '时代的边角料里藏着无数传说。',
      ids: ['opy_shiki','opy_redfield','opy_buggy','opy_alvida','opy_moria','opy_weevil','opy_crocodile','opy_heart_pirates','opy_kid_pirates','opy_fallengen','opy_bonney_crew'] }
  ]},
  { file: 'op_04_marine.js', series: [
    { id: 'sr_op_admiral', name: '海军三大将·新旧', color: '#1f618d', type: '大将卡', price: 260,
      theme: '大将序列收藏', hero: '赤犬·黄猿·青雉', slogan: '绝对的正义',
      bg: '海军本部最高战力——青雉、赤犬、黄猿，以及藤虎、绿牛等世界征兵提拔的新大将。',
      story: '坐镇马林梵多的三大将，一念之间决定时代的走向。',
      ids: ['opm_akainu','opm_kizaru','opm_aokiji','opm_fujitora','opm_ryokugyu','opm_zephyr'] },
    { id: 'sr_op_navy', name: '海军本部·群星', color: '#5b8aa0', type: '海军卡', price: 180,
      theme: '元帅中将英雄新星收藏', hero: '卡普·战国', slogan: '正义的拳头',
      bg: '从全军总帅到热血新兵——卡普的铁拳、战国的智谋、斯摩格的执着，海军的群像。',
      story: '海上正义的执行者与传承者们。',
      ids: ['opm_kong','opm_sengoku','opm_garp','opm_tsuru','opm_smoker','opm_tashigi','opm_koby','opm_helmeppo','opm_bogard','opm_sengoku_goat','opm_momousagi','opm_tokikake','opm_jonathan','opm_momonga','opm_doberman','opm_vergo','opm_coby_grow','opm_xdrake_former','opm_brannew'] }
  ]},
  { file: 'op_05_gov.js', series: [
    { id: 'sr_op_wg', name: '世界政府·圣地与谍报', color: '#4a148c', type: '势力卡', price: 240,
      theme: '伊姆五老星CP科学部队收藏', hero: '伊姆大人', slogan: '掩盖真相的世界之王',
      bg: '统治世界八百年的世界政府——虚空王座上的伊姆、五老星、天龙人、CP0-9与贝加庞克的科学部队。',
      story: '空白一百年的守密者——世界上最深的黑暗。',
      ids: 'ALL' }
  ]},
  { file: 'op_05_rev.js', series: [
    { id: 'sr_op_rev', name: '革命军', color: '#b71c1c', type: '势力卡', price: 200,
      theme: '推翻世界政府的革命之军收藏', hero: '蒙奇·D·龙', slogan: '要改变的是整个世界',
      bg: '以"推翻天龙人统治"为目标的革命武装，龙与萨博总揽大局，四大军队长分镇四方，暴君熊是最悲情的间谍。',
      story: '世界上最凶恶的罪犯们，要还给人民一个真正的世界。',
      ids: 'ALL' }
  ]},
  { file: 'op_06_shichibukai.js', series: [
    { id: 'sr_op_warlord', name: '王下七武海', color: '#6a1b9a', type: '势力卡', price: 240,
      theme: '七武海与制度兴亡收藏', hero: '鹰眼·多弗朗明哥', slogan: '海上势力的平衡木',
      bg: '被世界政府承认的海贼特许势力——鹰眼、明哥、克洛克达尔、熊、女帝、甚平、罗与巴基……制度的兴亡。',
      story: '天平上的七个名字——最终被时代废除。',
      ids: 'ALL' }
  ]},
  { file: 'op_06_supernova.js', series: [
    { id: 'sr_op_supernova', name: '超新星·最恶世代', color: '#00a86b', type: '势力卡', price: 200,
      theme: '香波地最恶世代收藏', hero: '基德·罗', slogan: '新时代要由我们来改写',
      bg: '同一年抵达香波地群岛、悬赏过亿的十一名新人——基德、罗、波妮、霍金斯、德雷克与草帽双人组。',
      story: '挑战四皇的最恶世代——鬼岛乱战的主力们。',
      ids: 'ALL' }
  ]},
  { file: 'op_07_dark.js', series: [
    { id: 'sr_op_dark', name: '黑暗势力·地下世界', color: '#424949', type: '势力卡', price: 200,
      theme: '堂吉诃德家族与地下王者收藏', hero: '多弗朗明哥', slogan: '胜者才是正义',
      bg: '德雷斯罗萨的JOKER家族、凯撒的科技罪恶、黄金帝泰佐罗与剧场版的强者们——藏在阳光下的地下世界。',
      story: '觊觎世界的黑暗帝国与枭雄们。',
      ids: 'ALL' }
  ]},
  { file: 'op_07_impel.js', series: [
    { id: 'sr_op_impel', name: '推进城·深海大监狱', color: '#7f8c8d', type: '势力卡', price: 200,
      theme: '因佩尔地狱的看守与囚徒收藏', hero: '署长麦哲伦', slogan: '这里是地狱',
      bg: '世界第一监狱因佩尔——毒之署长麦哲伦、看守与狱卒兽，LV6关押着足以毁灭世界的传说囚犯。',
      story: '从LV1到LV6——史上最大越狱骚动的舞台。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_east_blue.js', series: [
    { id: 'sr_op_eastblue', name: '东海篇·起点群像', color: '#f39c12', type: '群像卡', price: 150,
      theme: '东海最初的对手与羁绊收藏', hero: '阿龙·克洛·克利克', slogan: '一切从东海开始',
      bg: '路飞出海的第一片海——阿龙、黑猫克洛、克利克、巴基与亚尔丽塔，还有古伊娜与伦巴团的起点故事。',
      story: '伟大航路之前——东海见证的少年启航。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_alabasta.js', series: [
    { id: 'sr_op_alabasta', name: '阿拉巴斯坦篇·群像', color: '#d4ac0d', type: '群像卡', price: 160,
      theme: '沙漠王国与巴洛克工作社收藏', hero: '克洛克达尔·薇薇', slogan: '守护我的国家',
      bg: '沙之国阿拉巴斯坦——叛乱军与巴洛克工作社的谍报对决，奈菲鲁塔莉王族与"冥王"的八百载秘密。',
      story: '沙漠之泪与兄弟再会——薇薇挥手的告别。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_skypiea.js', series: [
    { id: 'sr_op_skypiea', name: '空岛篇·群像', color: '#8fd3e8', type: '群像卡', price: 160,
      theme: '白海之上的神国群像收藏', hero: '艾尼路·诺兰德', slogan: '黄金乡在云上',
      bg: '白海之上的空岛——自封为神的艾尼路、山迪亚的战士、四百年前诺兰德与卡尔加拉的钟声之约。',
      story: '响彻云海的黄金钟——被岁月误读的真相。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_water7.js', series: [
    { id: 'sr_op_water7', name: '水之都·司法岛篇·群像', color: '#2980b9', type: '群像卡', price: 160,
      theme: '船匠之城与CP9群像收藏', hero: '冰山·汤姆·CP9', slogan: '造船匠与守护者的骄傲',
      bg: '水之七岛的海列车与卡雷拉公司，传奇船匠汤姆的传承，以及罗宾被带走后的司法岛之役。',
      story: '"我想活下去！"——烧掉世界政府之旗的那一天。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_thriller.js', series: [
    { id: 'sr_op_thriller', name: '恐怖三桅帆船篇·群像', color: '#6c3483', type: '群像卡', price: 160,
      theme: '魔之三角的僵尸群岛像收藏', hero: '月光莫利亚·龙马', slogan: '影子与月光',
      bg: '魔之三角海域的僵尸巨船——莫利亚的影影军团、三怪人、剑豪龙马的尸骸，与布鲁克五十年之约的达成。',
      story: '百影路飞与影子归还——月光下的决战。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_fishman.js', series: [
    { id: 'sr_op_fishman', name: '鱼人岛篇·群像', color: '#16a085', type: '群像卡', price: 160,
      theme: '海底乐园与太阳团群像收藏', hero: '白星·费舍尔·泰格', slogan: '要把自己当人看',
      bg: '海底一万米的人鱼乐园——龙宫王族、太阳海贼团的解放史、仇恨的新鱼人团，与"海王"波塞冬的真相。',
      story: '乙姬的签名册与白星的眼泪——海底的诺亚之约。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_dressrosa.js', series: [
    { id: 'sr_op_dressrosa', name: '德雷斯罗萨篇·群像', color: '#e74c3c', type: '群像卡', price: 160,
      theme: '爱与激情之国的复国群像收藏', hero: '居鲁士·萨博', slogan: '夺回我们的国家',
      bg: '力库王朝的屈辱与明哥的玩具王国——斗技场豪杰与草帽大船团的诞生，萨博夺回烧烧果实。',
      story: '鸟笼之内四分钟的奔跑——被诅咒的玩具们重获自由。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_zou_wano.js', series: [
    { id: 'sr_op_wano', name: '佐乌·和之国篇·群像', color: '#e67e22', type: '群像卡', price: 160,
      theme: '毛皮族与武士之国群像收藏', hero: '光月御田', slogan: '开国——和之国的黎明',
      bg: '象背上的毛皮族佐乌与闭关锁国的和之国——赤鞘九侠、光月御田的传奇与二十年的复仇之约。',
      story: '鬼岛决战——御田的意志穿越二十年。',
      ids: 'ALL' }
  ]},
  { file: 'op_08_egghead.js', series: [
    { id: 'sr_op_egghead', name: '蛋头岛·艾尔巴夫·群像', color: '#2e86c1', type: '群像卡', price: 160,
      theme: '未来岛与巨人国群像收藏', hero: '贝加庞克', slogan: '科学改变未来',
      bg: '贝加庞克六分身与朋克记录、巨人之国艾尔巴夫的双雄与诅咒王子，以及剧场版强者们的补遗。',
      story: '"世界将沉入大海"——天才遗言震撼全球。',
      ids: 'ALL' }
  ]},
];

// ---------- 工具：从单文件提取人物条目（括号配平） ----------
function extractEntries(text) {
  const entries = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    // 找 `{ id: 'xxx'` 起点
    const m = /\{ *id: *'([^']*)'/.exec(text.slice(i));
    if (!m) break;
    const start = i + m.index;
    const id = m[1];
    // 括号配平到匹配的 }
    let depth = 0, j = start;
    for (; j < n; j++) {
      const ch = text[j];
      if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) { j++; break; } }
      else if (ch === "'" || ch === '"') { // 跳过字符串（简单处理转义）
        const q = ch; j++;
        while (j < n && (text[j] !== q || text[j - 1] === '\\')) j++;
      }
    }
    const raw = text.slice(start, j).replace(/,\s*$/, '');
    entries.push({ id, raw });
    i = j;
  }
  return entries;
}

// 往原始对象里补字段（在最后一个 } 之前插入）
function toItem(raw, type, price) {
  const end = raw.lastIndexOf('}');
  const head = raw.slice(0, end).replace(/\s*$/, '');
  return `${head}, type: '${type}', city: '${CITY}', price: ${price} }`;
}

// ---------- 组装 ----------
for (const cf of CONFIG) {
  const p = path.join(DIR, cf.file);
  const text = fs.readFileSync(p, 'utf8');
  const all = extractEntries(text);
  const byId = {};
  all.forEach(e => { byId[e.id] = e; });
  const parts = [];
  for (const s of cf.series) {
    const ids = s.ids === 'ALL' ? all.map(e => e.id) : s.ids;
    const items = ids.map(id => {
      const e = byId[id];
      if (!e) { console.error('MISSING id ' + id + ' in ' + cf.file); process.exitCode = 1; return ''; }
      return '    ' + toItem(e.raw, s.type, s.price);
    }).join(',\n');
    const obj = `  { id: '${s.id}', cat: 'isekai', name: '${s.name}', color: '${s.color}',\n` +
      `    years: '1997-至今', author: '尾田荣一郎', theme: '${s.theme}',\n` +
      `    background: '${s.bg}',\n` +
      `    story: '${s.story}',\n` +
      `    protagonist: '${s.hero}', slogan: '${s.slogan}',\n` +
      `    cities: ['${CITY}'],\n` +
      `    items: [\n${items}\n    ]\n  }`;
    parts.push(obj);
  }
  const out = `/* 异世界·航海王 势力系列收藏（由 ${cf.file} 拆分生成，勿手改结构） */\n` +
    `(function () {\n` +
    `  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];\n` +
    parts.map(x => '  window.TRAVEL_SERIES.push(' + x + ');').join('\n') +
    `\n})();\n`;
  fs.writeFileSync(p, out, 'utf8');
  console.log('written ' + cf.file + ' (series ' + cf.series.length + ', entries ' + all.length + ')');
}
