/* ============ 美国·新奥尔良 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'neworleans',
    name: '新奥尔良',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🎺',
    desc: '爵士乐的诞生地：法国区的铁艺阳台与街头铜管乐，贝尼特甜甜圈与秋葵浓汤，巫毒文化与狂欢节，"大easy"的独特灵魂。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'neworleans_frenchquarter', name: '法国区', icon: '🏰', price: 0, desc: '1718年的老城：铁艺阳台、皇家街画廊与波旁街。圣路易大教堂面朝杰克逊广场，"美国最欧洲的角落"。' },
      { id: 'neworleans_bourbon', name: '波旁街夜生活', icon: '🍸', price: 0, desc: '街头喝酒合法（塑料杯），Hand Grenade 鸡尾酒。live 酒吧到凌晨，"美国狂欢一条街"。' },
      { id: 'neworleans_cafe', name: 'Café du Monde 贝尼特', icon: '🍩', price: 20, desc: '1862年老店24小时营业，撒糖粉的贝尼特甜甜圈。配 Chicory 咖啡，"新奥尔良的早晨"。' },
      { id: 'neworleans_cemetery', name: '圣路易一号墓地', icon: '⚰️', price: 40, desc: '"城市之上的墓地"：墓穴在地面上。巫毒女王 Marie Laveau 长眠于此，"最神秘的墓地"。' },
      { id: 'neworleans_museum', name: '二战国家博物馆', icon: '🎖️', price: 130, desc: '全美最佳博物馆之一，"登陆日"沉浸展。希金斯登陆艇就是新奥尔良造的。' },
      { id: 'neworleans_streetcar', name: '圣查尔斯有轨电车', icon: '🚋', price: 15, desc: '1835年运营的"美国最古老电车"。穿过橡树大道与花园区豪宅，"绿皮车的慢时光"。' },
      { id: 'neworleans_mardigras', name: '狂欢节（Mardi Gras）', icon: '🎭', price: 0, desc: '2-3月狂欢节季：花车 parade 与紫色金绿色。 Throw me something mister！"美国最大的派对"。' },
    ],
    souvenirs: [
      { id: 'neworleans_gumbo', name: '秋葵浓汤（Gumbo）', icon: '🍲', tag: '食', type: '美食', price: 60, desc: '克里奥尔炖汤：海鲜/香肠配米饭。"一锅汤里的法国+非洲+西班牙"。' },
      { id: 'neworleans_jambalaya', name: '什锦饭（Jambalaya）', icon: '🍚', tag: '食', type: '美食', price: 55, desc: '克里奥尔"西班牙海鲜饭的表亲"。Cajun 香料够劲，"路易斯安那的灵魂饭"。' },
      { id: 'neworleans_poboy', name: 'Po-Boy 潇洒三明治', icon: '🥖', tag: '食', type: '美食', price: 50, desc: '炸牡蛎/虾三明治"dressed"加生菜番茄。"1929年电车工人罢工的免费三明治"。' },
      { id: 'neworleans_beignet2', name: '贝尼特粉', icon: '🍩', tag: '食', type: '特产', price: 25, desc: 'Café du Monde 糖粉与咖啡豆礼盒。"回家自己做贝尼特"，粉会撒满全身。' },
      { id: 'neworleans_voodoo', name: '巫毒文创', icon: '🕯️', tag: '衣', type: '文创', price: 45, desc: '巫毒娃娃、护身符、薰香。Marie Laveau 的"神秘学纪念"。' },
      { id: 'neworleans_trumpet', name: '爵士乐文创', icon: '🎺', tag: '衣', type: '文创', price: 60, desc: '小号摆件、Preservation Hall 黑胶。"爵士乐诞生地"的音乐纪念。' },
      { id: 'neworleans_jazztour', name: ' Preservation Hall 爵士夜', icon: '🎺', tag: '玩', type: '体验', price: 150, desc: '1961年开的爵士圣殿，无音响纯原声。"坐在地板上听最正宗的新奥尔良爵士"。' },
      { id: 'neworleans_swamp', name: '沼泽气垫船找鳄鱼', icon: '🐊', tag: '玩', type: '体验', price: 250, desc: ' bayou 里喂鳄鱼（导游示范）。橡树挂西班牙苔藓，"南部哥特风景"。' },
      { id: 'neworleans_ghost', name: '幽灵与巫毒夜游', icon: '👻', tag: '玩', type: '体验', price: 150, desc: '法国区夜游：凶宅、墓地与巫毒故事。"全美最闹鬼城市"的传说。' },
      { id: 'neworleans_cruise', name: 'Steamboat 爵士晚餐游船', icon: '🚢', tag: '行', type: '体验', price: 300, desc: '明轮蒸汽船 Natchez 密西西比巡游。爵士乐队+自助餐，"老南方之夜"。' },
      { id: 'neworleans_minsu', name: '法国区民宿', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '铁艺阳台老屋民宿，窗看杰克逊广场。清晨大教堂钟声。' },
    ],
    stories: [
      { id: 'neworleans_story_jazz', name: '爵士乐诞生在"风月区"', icon: '🎺', desc: '1890年代 Storyville 红灯区的妓院乐队诞生了爵士。Louis Armstrong 就在附近长大，"最伟大的音乐来自最意外的角落"。' },
      { id: 'neworleans_story_katrina', name: '卡特里娜飓风的伤痕与重生', icon: '🌊', desc: '2005年80%城区被淹，1800人遇难。"Second Line"游行成了城市的治愈仪式。' },
      { id: 'neworleans_story_voodoo2', name: '巫毒女王 Marie Laveau', icon: '🕯️', desc: '19世纪巫毒女王同时是慈善家与理发师。墓上画XXX"许愿"成了传统（其实是破坏）。' },
      { id: 'neworleans_story_beignet2', name: '贝尼特的"糖粉战争"', icon: '🍩', desc: '吃贝尼特必撒一身糖粉，本地人叫"新奥尔良之吻"。服务员会直接撒一大勺。' },
      { id: 'neworleans_story_mardigras2', name: '狂欢节的"Krewes"', icon: '🎭', desc: 'Mardi Gras 的花车由秘密社团"Krewes"组织。Zulu 椰子是抢手"throw"，一年攒一个。' },
      { id: 'neworleans_story_food', name: '"美国最好吃的城市"', icon: '🍲', desc: '新奥尔良自封"美国美食之都"少有争议。Creole 与 Cajun 两大流派，"吃东西就是旅游"。' },
    ],
  });
})();
