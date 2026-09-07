/* ============ 南非·开普敦 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'capetown',
    name: '开普敦',
    country: '南非',
    cc: 'ZA',
    flag: '🇿🇦',
    region: '非洲',
    hero: '⛰️',
    desc: '桌山脚下的"母亲城"：两大洋在好望角交汇，企鹅在沙滩上晒太阳，葡萄园铺满山谷，非洲的野性与欧式的悠闲共存。',
    travel: [{ name: '飞机', icon: '✈️', cost: 9500 }],
    visa: { cost: 500, note: '南非旅游签证' },
    spots: [
      { id: 'capetown_table', name: '桌山', icon: '⛰️', price: 130, desc: '平顶山像一张"上帝的餐桌"横在海边。缆车旋转登顶1085米，云铺过来就是"桌布"。岩蹄兔在石缝里晒太阳。' },
      { id: 'capetown_cape', name: '好望角', icon: '🌊', price: 90, desc: '"非洲最西南端"的灯塔与怒海。大西洋与印度洋的风在这里相撞，"山雨欲来"的气势终生难忘。' },
      { id: 'capetown_penguins', name: '企鹅滩（博尔德斯海滩）', icon: '🐧', price: 80, desc: '非洲企鹅在沙滩上摇摇摆摆"上通勤"。木栈道近距离看企鹅孵蛋喂鱼，"非洲居然有企鹅"。' },
      { id: 'capetown_robben', name: '罗本岛', icon: '⛓️', price: 200, desc: '曼德拉被囚18年的监狱岛，政治犯导游亲自讲述。石灰岩采石场的石堆，是出狱者留下的纪念。' },
      { id: 'capetown_bo_kaap', name: '波卡普街区', icon: '🌈', price: 0, desc: '粉色蓝色黄色的马来社区房子，"开普敦的彩虹巷"。每一面墙都是背景板，门口的邻居会跟你打招呼。' },
      { id: 'capetown_v&a', name: 'V&A 海滨·Zeitz 艺术馆', icon: '🖼️', price: 140, desc: '老粮仓改造成非洲当代艺术馆，"谷粒切割"中庭震撼。海滨广场海豹趴在木桩上晒太阳。' },
      { id: 'capetown_winelands', name: '斯泰伦博斯酒乡', icon: '🍇', price: 250, desc: '开普荷兰式白墙庄园连绵山谷，品酒三轮配奶酪。三百年的葡萄酒历史，"非洲的波尔多"。' },
    ],
    souvenirs: [
      { id: 'capetown_braai', name: '南非烤肉（Braai）', icon: '🍖', tag: '食', type: '美食', price: 150, desc: '炭烤羚羊肉肠配玉米糊（Pap），"国民社交活动"。开普敦人每个周末都在 Braai，烤香飘满山谷。' },
      { id: 'capetown_bunny', name: '兔子乔拉尼', icon: '🍛', tag: '食', type: '美食', price: 45, desc: '面包挖空填咖喱，"德班来的国民街头美食"。手撕面包蘸咖喱汁，"不许用刀叉"。' },
      { id: 'capetown_biltong', name: '风干肉条', icon: '🥩', tag: '食', type: '特产', price: 90, desc: '南非版"牛肉干"更厚更香，鸵鸟肉口味独特。加油站超市人手一包，"公路旅行标配"。' },
      { id: 'capetown_rooibos', name: '博士茶', icon: '🍵', tag: '食', type: '饮品', price: 60, desc: '南非独有 Rooibos 红灌木茶，无咖啡因带甜香。开普山脉限产的"国茶"，喝法英式。' },
      { id: 'capetown_wine', name: '品乐塔吉红酒', icon: '🍷', tag: '食', type: '特产', price: 180, desc: '南非独有的 Pinotage 葡萄酒，烟熏果香。酒庄直购一瓶不到两百，"回国行李最值钱的一格"。' },
      { id: 'capetown_chakalaka', name: '查卡拉卡辣酱', icon: '🌶️', tag: '食', type: '特产', price: 40, desc: '番茄豆子辣酱配烤肉米饭，"南非的辣椒酱"。超市货架一排，"吃了会上头"。' },
      { id: 'capetown_beadwork', name: '祖鲁串珠', icon: '📿', tag: '衣', type: '文创', price: 80, desc: '祖鲁族手编串珠，颜色与图形都能"传递情话"。手环项链色彩浓烈，"非洲的摩斯密码"。' },
      { id: 'capetown_ostrich', name: '鸵鸟蛋与羽毛', icon: '🦤', tag: '衣', type: '文创', price: 120, desc: '鸵鸟蛋雕成灯罩彩绘蛋，羽毛掸子轻到起灰。奥茨胡恩鸵鸟农场参观，"非洲巨鸟全身都是宝"。' },
      { id: 'capetown_gold', name: '黄金与钻石文创', icon: '💎', tag: '衣', type: '特产', price: 400, desc: '南非金矿钻石的文创银饰。开普钻石博物馆看"非洲之心"切割过程，"大地的礼物"。' },
      { id: 'capetown_kayak', name: '海上皮划艇看企鹅', icon: '🛶', tag: '玩', type: '体验', price: 250, desc: '从西蒙镇划出海，海豹企鹅绕着船游。两洋交汇的海面，浪从两个方向来。' },
      { id: 'capetown_shark', name: '铁笼潜水看鲨鱼', icon: '🦈', tag: '玩', type: '体验', price: 900, desc: '旱鸭子也能进铁笼，与 Great White 隔笼对视。大白鲨从蓝色里浮出的瞬间，"心跳重启"。' },
      { id: 'capetown_paraglide', name: '狮头山滑翔伞', icon: '🪂', tag: '玩', type: '体验', price: 700, desc: '从狮头山起飞，双洋海岸线在脚下展开。教练说"跑三步就飞"，风把尖叫吹成了笑声。' },
      { id: 'capetown_hotel', name: '海滨庄园酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '维多利亚风老宅酒店，花园里蓝花楹开放。早餐在露台看桌山"戴帽"，"非洲的欧式清晨"。' },
    ],
    stories: [
      { id: 'capetown_story_tablecloth', name: '桌山的"桌布"', icon: '☁️', desc: '云层漫过平顶山时被称为"铺桌布"，本地人以此预报天气。传说是一位退休海盗与魔鬼比赛抽烟的烟雾。' },
      { id: 'capetown_story_penguin', name: '非洲企鹅的"驴叫"', icon: '🐧', desc: '非洲企鹅叫声像驴，也叫"笑企鹅"。它们在博尔德斯海滩定居四十多年，从两对繁衍到几千对。' },
      { id: 'capetown_story_mandela', name: '曼德拉的石灰岩视力', icon: '⛓️', desc: '罗本岛采石场的石灰岩反光伤了曼德拉的眼睛，他出狱后见强光会流泪。那堆石头如今立在采石场入口。' },
      { id: 'capetown_story_two_ocean', name: '两大洋的"交汇点"', icon: '🌊', desc: '好望角其实不是两大洋精确分界，厄加勒斯角才是。但游客仍爱在好望角拍照："站在两大洋之间"。' },
      { id: 'capetown_story_wine', name: '品乐塔吉的"意外诞生"', icon: '🍇', desc: '1925年葡萄学家无意间杂交出的新品种，成了南非国酒。一场"实验意外"酿出百年名酒。' },
      { id: 'capetown_story_baboon', name: '狒狒的"开窗劫"', icon: '🐵', desc: '查普曼公路旁的狒狒会拉车门抢食物，公园立牌"关好车窗"。它们的"抢劫"更像收取过路费。' },
    ],
  });
})();
