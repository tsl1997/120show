/* ============ 日本·仙台 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sendai',
    name: '仙台',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·东北',
    hero: '🍃',
    desc: '"杜之都"：独眼龙伊达政宗的青叶城，牛舌碳烤的香气，松岛千帆与瑞凤殿，东北第一城把武士魂与美食揉在一起。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'sendai_matsushima', name: '松岛', icon: '⛵', price: 60, desc: '日本三景之一，260余座岛屿铺满松绿色海湾。游船穿岛，圆通院与五大堂，"松岛浮舟"经典画面。' },
      { id: 'sendai_zuihoden', name: '瑞凤殿', icon: '🏯', price: 57, desc: '伊达政宗陵寝，桃山风格极尽奢华。古殿毁于战火后重建，夜枫点灯如金焰。' },
      { id: 'sendai_castle', name: '青叶城迹', icon: '⛰️', price: 0, desc: '伊达政宗居城遗址，政宗骑马铜像俯瞰仙台平原。夜景灯光，"杜都"的夜。' },
      { id: 'sendai_jozenji', name: '定禅寺通·勾当台', icon: '🌳', price: 0, desc: '榉树大道，夏天青叶祭、冬天光之页面。爵士咖啡与酒吧，"仙台的香榭丽舍"。' },
      { id: 'sendai_osaki', name: '多贺城·大崎八幡宫', icon: '⛩️', price: 0, desc: '大崎八幡宫是政宗下令建造的国宝，权现造黑金配色。".defaults 桃山艺术"巅峰。' },
      { id: 'sendai_aoba', name: '秋保温泉·作并温泉', icon: '♨️', price: 80, desc: '仙台近郊两大道后，"日本三名汤"之一秋保。磊磊峡红叶与瀑布温泉。' },
      { id: 'sendai_zunda', name: '毛豆泥体验·仙台朝市', icon: '🌱', price: 0, desc: '仙台朝市"东北的厨房"，70家店挤在小巷。zunda 毛豆泥麻糬绿得可爱，现捣现吃。' },
    ],
    souvenirs: [
      { id: 'sendai_gyutan', name: '厚切牛舌', icon: '👅', tag: '食', type: '美食', price: 120, desc: '仙台是牛舌发祥地，碳烤厚切"外脆内弹"。配麦饭与山药汤，"仙台的灵魂午餐"。' },
      { id: 'sendai_zunda2', name: 'ずんだ（毛豆泥）甜点', icon: '🟢', tag: '食', type: '美食', price: 30, desc: '毛豆捣泥加糖裹麻糬，"绿色的甜"。zunda shake、麻糬、泡芙全家桶。' },
      { id: 'sendai_sasakama', name: '笹蒲鉾（竹叶鱼饼）', icon: '🐟', tag: '食', type: '特产', price: 40, desc: '竹叶形烤鱼饼，仙台名物。炭火现烤的最好吃，真空装带回家。' },
      { id: 'sendai_hagi', name: '萩之月', icon: '🍮', tag: '食', type: '特产', price: 30, desc: '黄色海绵蛋糕裹卡仕达布丁，"仙台伴手礼之王"。形似萩花圆润可爱。' },
      { id: 'sendai_date', name: '伊达政宗文创', icon: '⚔️', tag: '衣', type: '文创', price: 50, desc: '"独眼龙"月牙盔头盔摆件、政宗猫手办。仙台的"战国顶流"，周边超萌。' },
      { id: 'sendai_matsushima_wen', name: '松岛文创', icon: '⛵', tag: '衣', type: '文创', price: 40, desc: '松岛四大观明信片、牡蛎壳风铃。"日本三景"的记忆。' },
      { id: 'sendai_tanabata', name: '仙台七夕祭文创', icon: '🎋', tag: '衣', type: '文创', price: 35, desc: '八月七夕祭的纸串装饰与和纸。风幡书签，"东北最华丽祭典"。' },
      { id: 'sendai_oyaki', name: '海味便当·牡蛎', icon: '🦪', tag: '食', type: '美食', price: 80, desc: '松岛牡蛎"海之牛奶"，冬季肥美。牡蛎锅与牡蛎饭，"仙台的冬天"。' },
      { id: 'sendai_gyutan_tie', name: '牛舌烤制体验', icon: '🔥', tag: '玩', type: '体验', price: 130, desc: '学习牛舌去膜与碳烤火候。自己烤的牛舌配麦饭，"仙台味道毕业考"。' },
      { id: 'sendai_matsushima2', name: '松岛游船环岛', icon: '⛵', tag: '行', type: '体验', price: 60, desc: '50分钟游船穿行群岛，海鸥追船。"仁王丸"号的老船长会讲政宗故事。' },
      { id: 'sendai_onsen2', name: '秋保温泉泡汤', icon: '♨️', tag: '玩', type: '体验', price: 100, desc: '"日本三名汤"之一，岩沼屋大浴场。红叶季泡露天风吕，"东北的秋"。' },
      { id: 'sendai_minsu', name: '定禅寺通酒店', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '榉树大道旁的酒店，牛舌店步行可达。夏天七夕祭阳台看纸串飞舞。' },
    ],
    stories: [
      { id: 'sendai_story_date2', name: '独眼龙的"月牙盔"', icon: '⚔️', desc: '伊达政宗右眼失明，戴月牙前立盔征战。他说"愿早生二十年，成就织田信长之业"。' },
      { id: 'sendai_story_gyutan2', name: '牛舌是"战后发明"', icon: '👅', desc: '1948年仙台烤鸡店老板把牛舌做成碳烤料理。"仙台牛舌"如今是城市名片，年消费全国第一。' },
      { id: 'sendai_story_matsushima2', name: '松岛的"日本三景"认证', icon: '⛵', desc: '儒学家林春斋1643年评定"日本三景"：松岛、天桥立、宫岛。松岛的松长在海蚀岩上，四百年来"绿岛如盆景"。' },
      { id: 'sendai_story_zunda2', name: '毛豆泥的"绿色甜蜜"', icon: '🟢', desc: 'zunda 原是武士出征前的能量食品。如今是仙台的"绿色甜品宇宙"，从麻糬到咖啡全都有。' },
      { id: 'sendai_story_tanabata2', name: '七夕祭的"纸艺天花板"', icon: '🎋', desc: '仙台七夕祭纸串长10米，直径3米。商店街挂满手绘纸串，"东北夏天的仪式感"。' },
      { id: 'sendai_story_ohira', name: '3.11后的"仙台韧性"', icon: '🌊', desc: '2011年东日本大地震仙台受灾严重。重建后的海岸线有"防波堤公园"，"杜之都的坚强"。' },
    ],
  });
})();
