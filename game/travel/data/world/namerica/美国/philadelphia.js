/* ============ 美国·费城 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'philadelphia',
    name: '费城',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🔔',
    desc: '《独立宣言》诞生地：自由钟与独立宫诉说着建国故事，费城牛肉芝士三明治的江湖，"兄弟之爱之城"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }, { name: '高铁', icon: '🚄', cost: 7700 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'philadelphia_bell', name: '自由钟中心', icon: '🔔', price: 0, desc: '自由钟上有裂纹却象征自由，"让土地所有居民都听到"。免费参观，美国的精神图腾。' },
      { id: 'philadelphia_independence', name: '独立宫', icon: '🏛️', price: 0, desc: '《独立宣言》与宪法在此签署。"签署大厅"的桌椅原样保留，华盛顿坐过的椅子还在。' },
      { id: 'philadelphia_art', name: '费城艺术博物馆·洛奇台阶', icon: '🖼️', price: 30, desc: '72级台阶上《洛奇》跑步名场面。梵高《向日葵》与罗丹雕塑馆藏，"艺术+电影"双圣地。' },
      { id: 'philadelphia_magic', name: '魔术花园（马赛克艺术）', icon: '🎨', price: 15, desc: 'Isaiah Zagar 的马赛克宇宙：碎瓷拼满墙巷。"南街的魔幻花园"，自愈的艺术。' },
      { id: 'philadelphia_franklin', name: '富兰克林故居·科学馆', icon: '🔬', price: 0, desc: '本杰明富兰克林的城市：避雷针发明地。富兰克林 Institute 的巨型心脏走廊。' },
      { id: 'philadelphia_waterworks', name: '费尔芒特水厂·船屋街', icon: '🌿', price: 0, desc: '废弃水厂改成花园，"美国第一个城市水系统"。斯库尔基尔河船屋 Rowing 风景线。' },
      { id: 'philadelphia_market', name: '雷丁车站市场', icon: '🛒', price: 0, desc: '1893年开的百年室内市场，"费城的胃"。Amish 摊位与荷兰甜点。' },
    ],
    souvenirs: [
      { id: 'philadelphia_cheesesteak', name: '费城牛肉芝士三明治', icon: '🥖', tag: '食', type: '美食', price: 60, desc: '薄切牛肉+Cheez Whiz 芝士塞满长面包。Pa’ 与 Gen’ 的"百年对头"，"说对暗号才点得到"。' },
      { id: 'philadelphia_ice', name: 'Water Ice 冰霜', icon: '🍧', tag: '食', type: '美食', price: 20, desc: '费城特色水果冰霜"Wooder Ice"。"费城人把 water 说成 wooder"。' },
      { id: 'philadelphia_softpretzel', name: '软椒盐卷饼', icon: '🥨', tag: '食', type: '美食', price: 15, desc: '费城人均消费软碱水饼全国第一。早餐配黄芥末，"费城的贝果"。' },
      { id: 'philadelphia_tastykake', name: 'Tastykake 点心', icon: '🧁', tag: '食', type: '特产', price: 30, desc: '费城百年点心品牌，"Butterscotch Krimpets"是传奇。本地人的童年味道。' },
      { id: 'philadelphia_bell_wen', name: '自由钟文创', icon: '🔔', tag: '衣', type: '文创', price: 40, desc: '自由钟摆件、裂纹钟冰箱贴。"Let freedom ring"的纪念。' },
      { id: 'philadelphia_rocky', name: '洛奇文创', icon: '🥊', tag: '衣', type: '文创', price: 45, desc: '洛奇铜像前合影（官方铜像就在博物馆旁）。"Yo Adrian!"T恤，"费城的电影魂"。' },
      { id: 'philadelphia_love', name: 'LOVE 雕塑文创', icon: '❤️', tag: '衣', type: '文创', price: 35, desc: '"LOVE Park"的红色 LOVE 雕塑是城市标志。LOVE T恤与明信片，"兄弟之爱之城"。' },
      { id: 'philadelphia_run', name: '洛奇台阶挑战', icon: '🏃', tag: '玩', type: '体验', price: 0, desc: '学洛奇跑上72级台阶挥拳，"必做动作"。所有人都在做，没人觉得傻。' },
      { id: 'philadelphia_prison', name: '东州监狱探秘', icon: '🏚️', tag: '玩', type: '体验', price: 90, desc: '1829年"世界第一座现代监狱"，阿尔卡彭住过。夜间"恐怖之旅"，"废墟爱好者的天堂"。' },
      { id: 'philadelphia_mural', name: '壁画城市导览', icon: '🎨', tag: '玩', type: '体验', price: 60, desc: '费城有4000多幅壁画，"世界壁画之都"。导览看社区壁画，"墙上的城市历史"。' },
      { id: 'philadelphia_rowing', name: '斯库尔基尔划船', icon: '🛶', tag: '玩', type: '体验', price: 100, desc: '船屋街划船文化百年，"费城的剑桥"。划过艺术博物馆水岸。' },
      { id: 'philadelphia_minsu', name: '老城旅馆', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '老城殖民风旅馆，独立宫步行可达。砖墙木梁，"建国年代的氛围"。' },
    ],
    stories: [
      { id: 'philadelphia_story_bell2', name: '自由钟的"裂缝之谜"', icon: '🔔', desc: '自由钟1835年敲出著名的裂缝后"退休"。裂纹修复失败反而成了象征："不完美的自由"。' },
      { id: 'philadelphia_story_cheese2', name: 'Whiz 还是 American？', icon: '🥖', desc: '费城人点 cheesesteak 要说清楚芝士种类和"with/without 洋葱"。说错会收获白眼，"点单即考试"。' },
      { id: 'philadelphia_story_rocky2', name: '洛奇台阶的"全民运动"', icon: '🏃', desc: '《洛奇》1976年让72级台阶成名，如今游客日均上千。市政府干脆在山顶立了洛奇铜像。' },
      { id: 'philadelphia_story_first', name: '美国的"第一城"', icon: '🏛️', desc: '第一个图书馆、医院、医学院、动物园都在费城。富兰克林一个人贡献了一半。' },
      { id: 'philadelphia_story_mural2', name: '壁画反 graffiti 计划', icon: '🎨', desc: '1984年费城用壁画"消灭"涂鸦破坏。结果成了"世界壁画之都"，"艺术治理的样本"。' },
      { id: 'philadelphia_story_jaws', name: '东州监狱的"夜半歌声"', icon: '👻', desc: '东州监狱废弃后传说闹鬼，夜间票最抢手。历史学家说："这里关的不是犯人，是孤独。"' },
    ],
  });
})();
