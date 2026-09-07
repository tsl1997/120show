/* ============ 山东·青岛 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'qingdao',
    name: '青岛',
    country: '中国',
    cc: 'CN',
    province: '山东',
    flag: '🇨🇳',
    region: '华东',
    hero: '🍺',
    desc: '红瓦绿树、碧海蓝天：八大关的万国建筑，栈桥的海鸥，啤酒屋的塑料袋打酒，青岛把德式风情与山东豪爽酿成一体。',
    travel: [{ name: '高铁', icon: '🚄', cost: 600 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: [
      { id: 'qingdao_zhanqiao', name: '栈桥·小青岛', icon: '🌉', price: 0, desc: '百年栈桥深入海中，冬天海鸥成群接食。回澜阁与"飞阁回澜"，青岛的地标原点。' },
      { id: 'qingdao_badaguan', name: '八大关', icon: '🏛️', price: 0, desc: '"万国建筑博览会"，十条路种十种树。公主楼、花石楼各领风骚，秋天居庸关路银杏金黄。' },
      { id: 'qingdao_laoshan', name: '崂山', icon: '⛰️', price: 130, desc: '海上第一名山，道教圣地太清宫。山海相连的观景台，崂山矿泉水泡茶天下一绝。' },
      { id: 'qingdao_pijiu', name: '青岛啤酒博物馆', icon: '🍺', price: 60, desc: '百年老厂房里看啤酒生产线，门票含两杯鲜啤。微醺工厂游，"青岛的液体灵魂"。' },
      { id: 'qingdao_jinsha', name: '金沙滩·石老人海水浴场', icon: '🏖️', price: 0, desc: '"亚洲第一滩"金沙滩沙细如粉。夏天洗海澡、玩沙滩排球，石老人礁石传说伴着浪声。' },
      { id: 'qingdao_tianshui', name: '天主教堂·大学路', icon: '⛪', price: 0, desc: '哥特式圣弥厄尔大教堂双塔巍峨。大学路红墙转角是"网红墙"，咖啡店扎堆的文艺街区。' },
      { id: 'qingdao_aodifan', name: '奥帆中心·五四广场', icon: '⛵', price: 0, desc: '2008奥运帆船赛场，"帆船之都"的心脏。五月的风雕塑火红，夜游浮山湾灯光秀。' },
    ],
    souvenirs: [
      { id: 'qingdao_haichan', name: '辣炒蛤蜊·海凉粉', icon: '🦪', tag: '食', type: '美食', price: 30, desc: '"哈啤酒吃嘎啦"，辣炒蛤蜊是青岛的灵魂小菜。海凉粉配蒜泥醋，夏夜大排档标配。' },
      { id: 'qingdao_pijiu_da', name: '塑料袋打鲜啤', icon: '🍺', tag: '食', type: '饮品', price: 10, desc: '拎着塑料袋装散啤走街串巷，"青岛特色移动酒馆"。原浆鲜啤当天酒厂直供。' },
      { id: 'qingdao_shaokao', name: '野馄饨·烤海鲜', icon: '🍢', tag: '食', type: '美食', price: 50, desc: '青岛夜宵江湖叫"野馄饨"，烤鱿鱼烤扇贝。凌晨的海风配炭火，"青岛人的深夜食堂"。' },
      { id: 'qingdao_paigu', name: '排骨米饭·鲅鱼水饺', icon: '🥟', tag: '食', type: '美食', price: 35, desc: '砂锅排骨米饭是青岛"快餐之王"。鲅鱼水饺鲜嫩多汁，"没有一条鲅鱼能游过五一"。' },
      { id: 'qingdao_gaoli', name: '高粱饴·青岛大虾酥', icon: '🍬', tag: '食', type: '特产', price: 25, desc: '高粱饴软糯拉丝是童年糖，虾酥夹大虾肉。青岛特产铺的"怀旧双拼"。' },
      { id: 'qingdao_pijiuli', name: '青岛啤酒礼盒·啤酒杯', icon: '🍻', tag: '食', type: '特产', price: 80, desc: '经典1903礼盒与做工精良的啤酒杯。啤酒屋同款"袋装鲜啤"带不上飞机，礼盒可以。' },
      { id: 'qingdao_bei', name: '贝壳·海洋文创', icon: '🐚', tag: '衣', type: '文创', price: 35, desc: '栈桥海鸥冰箱贴、贝壳风铃。青岛海洋元素的文创，"把海鸥的叫声带回家"。' },
      { id: 'qingdao_de', name: '德式建筑文创', icon: '🏰', tag: '衣', type: '文创', price: 45, desc: '教堂、花石楼明信片与红瓦绿树印章册。"万国建筑"的纸质纪念，盖满章的旅行。' },
      { id: 'qingdao_yang', name: '崂山绿茶·崂山水', icon: '🍵', tag: '食', type: '特产', price: 60, desc: '"南有龙井北有崂绿"，崂山豆香浓郁。崂山矿泉水号称"世界级水源"。' },
      { id: 'qingdao_jiao', name: '赶海挖蛤蜊', icon: '🦀', tag: '玩', type: '体验', price: 50, desc: '红岛蛤蜊节提桶下滩，挖一桶"嘎啦"。本地大姨技术指导，收获找店辣炒。' },
      { id: 'qingdao_chuan', name: '帆船出海', icon: '⛵', tag: '玩', type: '体验', price: 200, desc: '奥帆中心登船，"帆船之都"体验课。教练带操帆，从海上回望老城红瓦。' },
      { id: 'qingdao_pao', name: '海水温泉·崂山民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '崂山脚下的海景民宿，泡池面海。清晨推窗见渔船出海，"渔村的日出"。' },
    ],
    stories: [
      { id: 'qingdao_story_pijiu', name: '啤酒要按"袋"卖', icon: '🍺', desc: '青岛人打啤酒用塑料袋拎着走，全国独一份的风景。散啤当天喝完才够鲜，"青岛人的牛奶"。' },
      { id: 'qingdao_story_de', name: '德占时期的地下管网', icon: '🌧️', desc: '百年前德建的雨污分流管网至今部分在用。青岛"不怕淹"的传说，一半要归功于它。' },
      { id: 'qingdao_story_gala', name: '蛤蜊的青岛发音', icon: '🦪', desc: '青岛人管蛤蜊叫"嘎啦"，辣炒嘎啦配啤酒。"嘎啦"的鲜，是青岛夏天的味道单位。' },
      { id: 'qingdao_story_jiao', name: '栈桥的海鸥季', icon: '🕊️', desc: '每年冬天海鸥从西伯利亚飞来青岛过冬，人鸥互动三十年。掰一块馒头海鸥会空中接住。' },
      { id: 'qingdao_story_mai', name: '啤酒屋的"市井江湖"', icon: '🏠', desc: '社区啤酒屋里自带海鲜加工，"拎着海鲜去打酒"。老板娘记得每个熟客的口味。' },
      { id: 'qingdao_story_lao', name: '崂山道士的传说', icon: '🧙', desc: '《聊斋》崂山道士穿墙术的故事就出自这座山。太清宫还在，游客排队"学穿墙"。' },
    ],
  });
})();
