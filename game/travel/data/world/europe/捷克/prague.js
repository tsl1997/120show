/* ============ 捷克·布拉格 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'prague',
    name: '布拉格',
    country: '捷克',
    cc: 'SCH',
    flag: '🇨🇿',
    region: '欧洲',
    hero: '🌉',
    desc: '"百塔之城"：查理大桥的圣像与伏尔塔瓦河，天文钟的整点游行，卡夫卡与昆德拉的城市，波西米亚的黄金。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6400 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'prague_castle', name: '布拉格城堡·圣维特大教堂', icon: '🏰', price: 100, desc: '世界最大古城堡群，圣维特彩窗穆夏之作。换岗仪式整点，"城市的天际线之王"。' },
      { id: 'prague_charles', name: '查理大桥', icon: '🌉', price: 0, desc: '1357年建，30尊巴洛克圣像排满桥身。摸圣约翰浮雕"许愿重回布拉格"，日出最空灵。' },
      { id: 'prague_clock', name: '老城天文钟', icon: '🕰️', price: 0, desc: '1410年installed的世界最老天文钟。整点十二使徒巡游，"中世纪的机械奇迹"。' },
      { id: 'prague_jewish', name: '犹太区·老新犹太会堂', icon: '✡️', price: 60, desc: '欧洲保存最完整的犹太区，平卡斯墓园墓碑如林。卡夫卡的故乡，"神秘布拉格"。' },
      { id: 'prague_dancing', name: '跳舞的房子', icon: '🏢', price: 0, desc: '盖里设计的"金妮与弗雷德"舞者楼。顶楼餐厅看河景，"现代布拉格"。' },
      { id: 'prague_petrin', name: '佩特任山·瞭望塔', icon: '🗼', price: 60, desc: '"小埃菲尔铁塔"63米，镜面迷宫好玩。玫瑰园徒步上山，"俯瞰百塔"。' },
      { id: 'prague_letsna', name: '列侬墙·康帕岛', icon: '🎨', price: 0, desc: '列侬墙从80年代涂鸦至今"永远在变"。康帕岛慢跑与天鹅，"布拉格的自由角"。' },
    ],
    souvenirs: [
      { id: 'prague_goulash', name: '炖牛肉配面包盅', icon: '🍲', tag: '食', type: '美食', price: 60, desc: 'Goulash 装在挖空的面包里，"吃完汤再吃碗"。配捷克啤酒才是全套。' },
      { id: 'prague_trdelnik', name: '烟囱卷（Trdelník）', icon: '🍩', tag: '食', type: '美食', price: 25, desc: '炭火烤的肉桂糖卷，可加冰淇淋。"布拉格街头甜味"。' },
      { id: 'prague_pork', name: '烤猪肘配啤酒', icon: '🍖', tag: '食', type: '美食', price: 90, desc: '一人一只烤猪肘，"捷克式豪迈"。皮脆肉嫩配辣根酱。' },
      { id: 'prague_beer', name: '皮尔森啤酒·啤酒浴', icon: '🍺', tag: '食', type: '饮品', price: 45, desc: '捷克人均啤酒消费世界第一。Pilsner Urquell 发源地，还能"泡啤酒浴"。' },
      { id: 'prague_garnet', name: '波西米亚石榴石', icon: '🔴', tag: '衣', type: '特产', price: 200, desc: '捷克国石"火红石榴石"。宫廷珠宝款与银戒，"波西米亚的红"。' },
      { id: 'prague_marionette', name: '提线木偶', icon: '🎭', tag: '衣', type: '文创', price: 90, desc: '捷克木偶剧传统，莫扎特《唐璜》木偶剧。斯卡拉特木偶店手工款。' },
      { id: 'prague_beer2', name: '啤酒SPA体验', icon: '🛁', tag: '玩', type: '体验', price: 200, desc: '啤酒花麦芽浴+无限量生啤。"泡在啤酒里喝啤酒"。' },
      { id: 'prague_black', name: '黑光剧', icon: '🖤', tag: '玩', type: '体验', price: 180, desc: '布拉格特色黑光剧，荧光道具舞蹈。"不看台词的戏剧"。' },
      { id: 'prague_river', name: '伏尔塔瓦河游船', icon: '⛵', tag: '行', type: '体验', price: 100, desc: '船上看查理桥与城堡全貌。斯美塔那《伏尔塔瓦河》的现实版。' },
      { id: 'prague_sunrise', name: '查理大桥日出', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '清晨6点的大桥只有摄影师与天鹅。雾气中的桥塔，"最美的布拉格"。' },
      { id: 'prague_minsu', name: '老城公寓民宿', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: '老城广场旁公寓，推窗见天文钟。夜里石板路回声清脆。' },
    ],
    stories: [
      { id: 'prague_story_clock2', name: '天文钟匠人的"悲剧"', icon: '🕰️', desc: '传说钟匠哈努什被刺瞎双眼防止再造第二座。他"报复"式地把钟停了几十年。' },
      { id: 'prague_story_kafka', name: '卡夫卡的布拉格', icon: '✍️', desc: '卡夫卡一生几乎没离开布拉格，"K城"就是它。变形记的甲虫藏在每条小巷。' },
      { id: 'prague_story_defenestration', name: '"掷出窗外"事件×2', icon: '🪟', desc: '1419年和1618年布拉格两次"扔官员出窗外"。第二次直接引发三十年战争。' },
      { id: 'prague_story_beer2', name: '啤酒比水便宜', icon: '🍺', desc: '捷克人均年喝啤酒140升世界第一。有些地方啤酒比矿泉水便宜，"不喝才奇怪"。' },
      { id: 'prague_story_golem', name: '布拉格的"泥人哥连"', icon: '🧿', desc: '16世纪拉比用泥土造哥连保护犹太区。老新犹太会堂阁楼据说还藏着它的残躯。' },
      { id: 'prague_story_mucha', name: '穆夏的"新艺术"', icon: '🎨', desc: '穆夏海报 defined 新艺术运动。穆夏博物馆与圣维特彩窗都是他的作品。' },
    ],
  });
})();
