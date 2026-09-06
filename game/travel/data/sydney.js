/* ============ 澳大利亚·悉尼 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sydney',
    name: '悉尼',
    country: '澳大利亚',
    cc: 'AU',
    flag: '🇦🇺',
    region: '大洋洲',
    hero: '🦘',
    desc: '南半球的阳光之城：歌剧院白帆在海湾舒展，考拉在桉树上打盹，邦代海滩的浪与咖啡香，构成"悉尼式"的松弛。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5000 }],
    visa: { cost: 1050, note: '澳大利亚访客签证（600类别）' },
    spots: [
      { id: 'sydney_opera', name: '悉尼歌剧院', icon: '🎭', price: 260, desc: '一百万块瑞典陶瓦拼成的"白帆"。内部导览看贝壳厅与音乐厅，晚上从月亮公园对岸看它亮灯最惊艳。' },
      { id: 'sydney_bridge', name: '海港大桥攀爬', icon: '🌉', price: 1800, desc: '爬上134米桥顶"自由行走在钢铁拱架"。全程三小时配全装教练，"人生清单"级别的体验。' },
      { id: 'sydney_bondi', name: '邦代海滩', icon: '🏖️', price: 0, desc: '悉尼人后院的冲浪圣地，"Bondi 冰山泳池"在海浪间。到库吉的滨海步道六公里，一路悬崖海湾。' },
      { id: 'sydney_zoo', name: '塔龙加动物园', icon: '🐨', price: 330, desc: '考拉抱抱（昆州以外为合影）、袋鼠喂食。对岸就是歌剧院，"动物们的海景房"。' },
      { id: 'sydney_blue_mountains', name: '蓝山国家公园', icon: '🏞️', price: 250, desc: '三姐妹峰与桉树蓝雾，"世界最陡缆车"52度俯冲。回音谷看日出，金色的山谷被雾点亮。' },
      { id: 'sydney_rock', name: '岩石区·周末市集', icon: '🏛️', price: 0, desc: '悉尼最古老的街区，鹅卵石巷与殖民老酒馆。周六市集的手作与小吃，"历史与咖啡同在"。' },
      { id: 'sydney_ferry', name: '曼利渡轮', icon: '⛴️', price: 40, desc: '三十分钟渡轮穿过海港，歌剧院与大桥轮番上镜。曼利海滩的冲浪与海鲜薯条，"船票即观光票"。' },
    ],
    souvenirs: [
      { id: 'sydney_avo_toast', name: '牛油果吐司', icon: '🥑', tag: '食', type: '美食', price: 90, desc: '"Brunch 之王"的发源地之一，水波蛋撒辣椒片。海景咖啡馆一份配 flat white，"澳式早晨"。' },
      { id: 'sydney_meatpie', name: '澳式肉派', icon: '🥧', tag: '食', type: '美食', price: 45, desc: '手拿肉派浇番茄酱，"国民小吃"。看球赛标配，哈里咖啡车卖了几十年。' },
      { id: 'sydney_barramundi', name: '澳洲肺鱼（Barramundi）', icon: '🐟', tag: '食', type: '美食', price: 160, desc: '烧烤肺鱼配柠檬黄油，"澳洲鱼的名字最可爱"。海鲜市场现选现做，配一杯霞多丽。' },
      { id: 'sydney_flatwhite', name: 'Flat White 咖啡', icon: '☕', tag: '食', type: '饮品', price: 45, desc: '澳新发明的奶咖，"咖啡界的白月光"。悉尼每条街都是精品咖啡师，拉花是基本功。' },
      { id: 'sydney_timtam', name: 'Tim Tam 饼干', icon: '🍪', tag: '食', type: '特产', price: 60, desc: '"Tim Tam Slam"吸咖啡吃法：咬两角当吸管。国民饼干一年吃掉四亿块。' },
      { id: 'sydney_vegemite', name: 'Vegemite 酱', icon: '🧈', tag: '食', type: '特产', price: 50, desc: '酵母咸酱"澳洲人的乡愁"，游客挑战重灾区。薄涂黄油配吐司才是正确打开方式。' },
      { id: 'sydney_ugg', name: 'UGG 雪地靴', icon: '🥾', tag: '衣', type: '服饰', price: 600, desc: '澳洲羊毛雪地靴原产地，"南半球的温暖"。工厂店比国内便宜一半，冬天北上带回来。' },
      { id: 'sydney_opal', name: '澳宝（欧泊）', icon: '💎', tag: '衣', type: '特产', price: 500, desc: '全世界95%的欧泊产自澳洲，变彩效应独特。岩石区珠宝店看"彩虹石头"，"大自然的油画"。' },
      { id: 'sydney_koala', name: '考拉周边', icon: '🐨', tag: '衣', type: '文创', price: 80, desc: '考拉玩偶、袋鼠皮钥匙扣、"金拱门考拉"T恤。动物园出口的礼物店，"萌物经济"。' },
      { id: 'sydney_surf_bondi', name: '邦代冲浪课', icon: '🏄', tag: '玩', type: '体验', price: 300, desc: '两小时小班教学，从沙滩跑到抓浪起乘。"澳洲人八岁就会的事"，游客三十岁补课。' },
      { id: 'sydney_bridge_climb', name: '大桥攀爬（同景点）·日落皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 200, desc: '海港里划皮划艇，从水面看歌剧院亮灯。划过月神公园的摩天轮，"城市的水上视角"。' },
      { id: 'sydney_hotel', name: '海港景酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '环形码头的酒店，窗外就是歌剧院侧影。跨年夜阳台看烟花，"全球最贵的跨年房"。' },
    ],
    stories: [
      { id: 'sydney_story_opera', name: '歌剧院的"设计风波"', icon: '🎭', desc: '丹麦设计师约恩·乌松因预算超支中途辞职，终生没见过完工的歌剧院。2008年他去世时，悉尼熄灯致哀。' },
      { id: 'sydney_story_koala', name: '考拉每天睡20小时', icon: '🐨', desc: '考拉吃桉树叶"带毒低营养"，只能靠睡覺省能量。动物园的"考拉抱"实为合影，它们醒着就不错了。' },
      { id: 'sydney_story_spider', name: '"别穿鞋进鞋"的澳洲日常', icon: '🕷️', desc: '澳洲人穿鞋前会抖一抖，蜘蛛蛇蜥蜴是"室友"。游客攻略：夏天看鞋、别摸任何没见过的虫。' },
      { id: 'sydney_story_ny烟花', name: '全球最早的跨年烟花', icon: '🎆', desc: '悉尼跨年烟花比中国早三小时，桥上歌剧院旁百万发。全球电视台转播，"南半球的倒计时"。' },
      { id: 'sydney_story_flat', name: '咖啡师是"职业运动员"', icon: '☕', desc: '澳洲咖啡师比赛像选秀，flat white 奶泡厚度有标准。游客评价："这杯咖啡值得我早起。"' },
      { id: 'sydney_story_surflifesaver', name: '红黄旗的"救生员文化"', icon: '🛟', desc: '澳洲海滩有志愿者救生员百年制度，游泳必须在红黄旗之间。"不听旗子的话，浪会教育你"。' },
    ],
  });
})();
