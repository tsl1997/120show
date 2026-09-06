/* ============ 希腊·雅典 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'athens',
    name: '雅典',
    country: '希腊',
    cc: 'SCH',
    flag: '🇬🇷',
    region: '欧洲',
    hero: '🏛️',
    desc: '西方文明摇篮：卫城的帕特农神庙俯瞰2500年， Democracy 与哲学的出生地，普拉卡老街的烤肉香与爱琴海的风。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6400 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'athens_acropolis', name: '卫城·帕特农神庙', icon: '🏛️', price: 120, desc: '公元前447年的大理石神庙，"人类建筑史巅峰"。伊瑞克提翁女像柱优雅托顶，"西方文明的封面"。' },
      { id: 'athens_museum', name: '卫城博物馆·国家考古博物馆', icon: '🏺', price: 50, desc: '阿伽门农黄金面具、安提基特拉机械（世界第一台电脑）。玻璃地板下是古城遗址。' },
      { id: 'athens_plaka', name: '普拉卡老城·蒙纳斯提拉奇', icon: '🏘️', price: 0, desc: '卫城脚下的老街区，台阶咖啡与三角梅。跳蚤市场与街头涂鸦共存，"老雅典的烟火"。' },
      { id: 'athens_agora', name: '古市集·赫菲斯托斯神庙', icon: '⛩️', price: 40, desc: '苏格拉底曾在此"抬杠"的市场。保存最完好的希腊神庙，"民主的发源地"。' },
      { id: 'athens_lycabettus', name: '利卡贝托山', icon: '🌄', price: 0, desc: '登缆车或步行到雅典最高点。日落时全城铺开、卫城被镀金，"雅典的深夜玫瑰"。' },
      { id: 'athens_sounion', name: '苏尼翁角海神庙', icon: '🌅', price: 60, desc: '爱琴海悬崖上的波塞冬神庙。"拜伦刻名的石柱"，日落是全希腊最美。' },
      { id: 'athens_island', name: '爱琴海跳岛一日', icon: '🏝️', price: 250, desc: '渡轮去埃伊纳岛或伊兹拉岛。蓝白教堂与海，"希腊的蓝色浪漫"。' },
    ],
    souvenirs: [
      { id: 'athens_souvlaki', name: 'Souvlaki 烤肉卷', icon: '🌯', tag: '食', type: '美食', price: 30, desc: '希腊"国民快餐"：烤猪肉/鸡肉卷皮塔饼。配 Tzatziki 黄瓜酸奶酱，"雅典的深夜食堂"。' },
      { id: 'athens_moussaka', name: 'Moussaka 茄子千层', icon: '🍆', tag: '食', type: '美食', price: 55, desc: '茄子肉酱白酱千层焗烤。"希腊的国菜"，配一杯茴香酒。' },
      { id: 'athens_gyros', name: 'Gyros 烤肉', icon: '🌯', tag: '食', type: '美食', price: 25, desc: '竖烤肉柱削下来卷饼，"希腊版沙威玛"。配炸薯条塞进去，本地吃法。' },
      { id: 'athens_olive', name: '卡拉马塔橄榄·橄榄油', icon: '🫒', tag: '食', type: '特产', price: 60, desc: '"液体黄金"希腊橄榄油。橄榄皂与橄榄木碗，"希腊的三宝"。' },
      { id: 'athens_honey', name: '希俄斯乳香脂·百里香蜜', icon: '🍯', tag: '食', type: '特产', price: 90, desc: '乳香脂（Mastiha）是世界独有树脂糖。配酸奶与蜂巢，"雅典酸奶碗"。' },
      { id: 'athens_evil', name: '恶魔眼（Mati）饰品', icon: '🧿', tag: '衣', type: '文创', price: 30, desc: '蓝眼睛护身符"挡走厄运"。门上、车上、身上都挂，"希腊的守护符"。' },
      { id: 'athens_colosseum', name: '卫城日出+日落双打卡', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '日出从 Philopappos 山看，日落去 Areopagus 岩石。避开人潮的卫城美学。' },
      { id: 'athens_island2', name: '三岛跳岛游', icon: '⛵', tag: '玩', type: '体验', price: 300, desc: '埃伊纳+波罗斯+伊兹拉一日船游。海鸥追船，"爱琴海的快闪"。' },
      { id: 'athens_ferry', name: '圣托里尼快线', icon: '🏝️', tag: '行', type: '体验', price: 500, desc: '快船5小时到圣托里尼看蓝顶教堂与伊亚日落。世界最美日落，"希腊的终极浪漫"。' },
      { id: 'athens_bar', name: '屋顶酒吧看卫城', icon: '🍸', tag: '玩', type: '体验', price: 150, desc: 'A for Athens 等天台酒吧，灯火中的帕特农。"卫城的鸡尾酒时刻"。' },
      { id: 'athens_minsu', name: '普拉卡民宿', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: '老城白墙民宿，露台正对卫城。夜里帕特农亮灯如神迹。' },
    ],
    stories: [
      { id: 'athens_story_parthenon', name: '帕特农的"视觉魔法"', icon: '🏛️', desc: '神庙柱子中间微凸（entasis），避免"中间细"错觉。2500年前的"视觉修正算法"。' },
      { id: 'athens_story_democracy', name: '民主在雅典的"诞生"', icon: '🗳️', desc: '公元前508年克里斯提尼改革，公民抽签当官。"Demokratia"=人民的统治。' },
      { id: 'athens_story_marble', name: '大理石会"发光"', icon: '☀️', desc: '彭特利大理石含铁，夕阳下泛金色。帕特农的"金色时刻"每天只有20分钟。' },
      { id: 'athens_story_elgin', name: '埃尔金石雕的"归属之争"', icon: '🗿', desc: '19世纪英国额尔金伯爵把神庙浮雕搬去大英。希腊一直在追讨，"最著名的文物争议"。' },
      { id: 'athens_story_marathon', name: '马拉松的"傳說"', icon: '🏃', desc: '公元前490年菲迪皮德斯跑42公里报捷后倒地。"马拉松"由此得名，跑者都会来雅典朝圣。' },
      { id: 'athens_story_god', name: '雅典娜的"橄榄树礼物"', icon: '🌳', desc: '雅典娜与波塞冬争城，她送橄榄树赢了。"雅典"由此得名，橄榄树是城市之魂。' },
    ],
  });
})();
