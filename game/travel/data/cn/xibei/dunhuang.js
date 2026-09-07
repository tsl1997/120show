/* ============ 甘肃·敦煌 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dunhuang',
    name: '敦煌',
    country: '中国',
    cc: 'CN',
    province: '甘肃',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏜️',
    desc: '丝绸之路的咽喉：莫高窟的飞天壁画千年不褪色，鸣沙山下月牙泉碧了一千年，"敦，大也；煌，盛也"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1300 }, { name: '火车', icon: '🚂', cost: 900 }],
    visa: null,
    spots: [
      { id: 'dunhuang_mogao', name: '莫高窟', icon: '🕳️', price: 238, desc: '千年佛教艺术宝库，735个洞窟壁画四万五千平方米。飞天反弹琵琶、九色鹿本生故事，"墙上博物馆"震撼到失语。' },
      { id: 'dunhuang_mingsha', name: '鸣沙山·月牙泉', icon: '🌙', price: 110, desc: '沙山会"唱歌"，沙漠怀抱里一弯碧泉千年不涸。爬上沙脊看日落，滑沙下来耳边全是轰鸣。' },
      { id: 'dunhuang_yumen', name: '玉门关遗址', icon: '🏝️', price: 40, desc: '"春风不度玉门关"的汉长城关隘。戈壁孤城残垣，风声呜咽，两千年前丝路商队的必经之地。' },
      { id: 'dunhuang_yangguan', name: '阳关', icon: '🏯', price: 50, desc: '"西出阳关无故人"的阳关古道。烽燧矗立戈壁，博物馆里能听古琴曲《阳关三叠》。' },
      { id: 'dunhuang_yadan', name: '雅丹魔鬼城', icon: '🗿', price: 120, desc: '风蚀地貌如舰队出海，"孔雀开屏"惟妙惟肖。夜里风声如鬼哭得名"魔鬼城"，日落时分金红一片。' },
      { id: 'dunhuang_shazhou', name: '沙洲夜市', icon: '🏮', price: 0, desc: '敦煌夜生活的中心：烤全羊、杏皮水、夜光杯。买一张沙画，听街头艺人唱《月牙泉》。' },
      { id: 'dunhuang_yueyiquan', name: '《又见敦煌》演出', icon: '🎭', price: 298, desc: '行走式沉浸演出，观众随剧情"穿行"千年丝路。王维、张骞从身边走过，看完直起鸡皮疙瘩。' },
    ],
    souvenirs: [
      { id: 'dunhuang_xingpi', name: '杏皮水', icon: '🥤', tag: '食', type: '饮品', price: 8, desc: '李广杏皮熬的酸甜饮料，敦煌"国民快乐水"。大漠骄阳下冰镇一杯，从喉咙凉到心里。' },
      { id: 'dunhuang_liguang', name: '驴肉黄面', icon: '🍜', tag: '食', type: '美食', price: 30, desc: '"天上龙肉，地上驴肉"，黄面拉得细如龙须。配香菇肉末浇头，顺顺顺驴肉黄面是招牌。' },
      { id: 'dunhuang_hu', name: '胡羊焖饼', icon: '🥘', tag: '食', type: '美食', price: 60, desc: '羊肉焖到酥烂，薄饼吸饱汤汁。"敦煌人的大盘鸡"，两人一锅管饱。' },
      { id: 'dunhuang_liguangxing', name: '李广杏', icon: '🍑', tag: '食', type: '特产', price: 50, desc: '飞将军李广得名，敦煌独有的甜杏。鲜杏娇贵，杏干杏脯四季可吃。' },
      { id: 'dunhuang_yeguangbei', name: '夜光杯', icon: '🍷', tag: '衣', type: '文创', price: 120, desc: '"葡萄美酒夜光杯"的祁连玉杯，薄如蛋壳。月光下杯壁透绿，"酒泉"故事随身带。' },
      { id: 'dunhuang_feitian', name: '飞天文创', icon: '🧚', tag: '衣', type: '文创', price: 55, desc: '反弹琵琶飞天做成丝巾、书签、胶带。莫高窟官方文创，壁画美学穿在身上。' },
      { id: 'dunhuang_sha', name: '沙画瓶·骆驼玩偶', icon: '🐪', tag: '衣', type: '文创', price: 40, desc: '鸣沙山的沙装进彩沙瓶，五色流沙如大漠日落。骆驼毛绒玩具驼铃叮当，丝路记忆可携带。' },
      { id: 'dunhuang_luotuo', name: '骆驼骑行', icon: '🐫', tag: '玩', type: '体验', price: 100, desc: '鸣沙山骑驼队走丝路古线，驼铃叮当。五峰驼队绵延成"沙漠长龙"，日落下剪影绝美。' },
      { id: 'dunhuang_huasha', name: '滑沙·沙漠越野', icon: '🏂', tag: '玩', type: '体验', price: 120, desc: '从沙山之巅坐滑板俯冲，沙鸣如雷。沙漠摩托冲沙丘更刺激，"大漠过山车"。' },
      { id: 'dunhuang_xingkong', name: '沙漠星空露营', icon: '⛺', tag: '住', type: '住宿', price: 220, desc: '鸣沙山后山的露营基地，帐篷、篝火、银河。沙漠的夜空亮到"银河伸手可摘"。' },
      { id: 'dunhuang_bihua_ke', name: '壁画临摹体验课', icon: '🎨', tag: '玩', type: '体验', price: 150, desc: '用矿物颜料临摹一幅飞天，老师讲解壁画千年不褪色之谜。画完带走"自己的莫高窟"。' },
      { id: 'dunhuang_che', name: '西线一日包车', icon: '🚙', tag: '行', type: '体验', price: 200, desc: '包车走西线：阳关-玉门关-雅丹。戈壁公路自驾感拉满，司机是"丝路活地图"。' },
    ],
    stories: [
      { id: 'dunhuang_story_feitian', name: '飞天为什么"不长翅膀"', icon: '🧚', desc: '敦煌飞天靠飘带飞行，"凭虚御风"的东方美学。西方天使长翅膀，中国飞天靠一条丝带——这就是意境。' },
      { id: 'dunhuang_story_cangjing', name: '藏经洞的伤心史', icon: '📜', desc: '1900年王道士发现藏经洞五万卷文书，大量流失海外。"敦煌者，吾国学术之伤心史也"——陈寅恪叹言。' },
      { id: 'dunhuang_story_yueya', name: '月牙泉为何千年不涸', icon: '🌙', desc: '沙山环抱却泉不填沙，靠特殊风向"沙不进泉"。如今人工补水续命，"沙漠第一泉"仍在坚持。' },
      { id: 'dunhuang_story_liguang', name: '李广杏的将军传说', icon: '🍑', desc: '传说飞将军李广西征时杏子救过全军，此杏由此得名。敦煌绿洲里最甜的一口，杏干更耐存。' },
      { id: 'dunhuang_story_yadan', name: '魔鬼城的"鬼哭狼嚎"', icon: '👻', desc: '雅丹风蚀岩夜间风声凄厉，古人以为鬼怪。地理学解释：气流穿过岩缝的"管风琴效应"。' },
      { id: 'dunhuang_story_shamo', name: '鸣沙山的"歌唱"', icon: '🎵', desc: '滑沙时沙粒摩擦发出嗡鸣，四大鸣沙山之首。物理学家研究百年，"会唱歌的沙子"仍有谜团。' },
    ],
  });
})();
