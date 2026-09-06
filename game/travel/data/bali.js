/* ============ 印度尼西亚·巴厘岛 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'bali',
    name: '巴厘岛',
    country: '印度尼西亚',
    cc: 'ID',
    flag: '🇮🇩',
    region: '东南亚',
    hero: '🌺',
    desc: '"众神之岛"：梯田叠着火山、海神庙立在潮间，乌布的艺术家巷子与库塔的浪，把浪漫与野性装进同一座岛。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 250, note: '落地签（VoA，35万印尼盾约250元）' },
    spots: [
      { id: 'bali_tanah_lot', name: '海神庙', icon: '⛩️', price: 30, desc: '建在海中巨岩上的十六世纪庙宇，涨潮时孤悬海上。日落时分潮水拍岩、庙影鎏金，是巴厘岛最经典的剪影。' },
      { id: 'bali_ubud', name: '乌布·圣猴森林', icon: '🐒', price: 25, desc: '艺术家聚集的山城，画廊、银器铺、瑜伽馆挤满小巷。圣猴森林里七百多只猕猴"当家"，眼镜手机请收好。' },
      { id: 'bali_tegallalang', name: '德格拉朗梯田', icon: '🌾', price: 15, desc: '层层叠叠的绿色水稻梯田配棕榈树，是"明信片巴厘"本片。秋千荡到田埂上空，尖叫与稻香一起起飞。' },
      { id: 'bali_batur', name: '巴杜尔火山日出', icon: '🌋', price: 250, desc: '凌晨两点出发爬火山，山顶云海配日出金光。下山还能泡火山温泉，疲惫全被硫磺泉洗掉。' },
      { id: 'bali_uluwatu', name: '乌鲁瓦图断崖', icon: '🌊', price: 30, desc: '七十米悬崖上的"情人崖"，传说殉情女子化为此地。傍晚Kecak火舞在崖顶开演，篝火与海浪声一起燃烧。' },
      { id: 'bali_kuta', name: '库塔海滩', icon: '🏄', price: 0, desc: '冲浪初学者的天堂，浪长而缓、租赁店满街。傍晚日落时整片海滩变成金红色，酒吧音乐从巷口一路排到海边。' },
      { id: 'bali_jatiluwih', name: '水神庙·圣泉寺', icon: '💧', price: 30, desc: '圣泉寺的泉水据说能洗净厄运，游客排队在泉眼"淋身"。巴厘印度教的莲花座、伞盖与花盒，处处是仪式感。' },
    ],
    souvenirs: [
      { id: 'bali_nasi', name: '脏鸭餐', icon: '🦆', tag: '食', type: '美食', price: 60, desc: '整鸭炸得酥脆到骨头都能嚼，配三色米饭与参巴酱。乌布稻田边吃"脏鸭"，是巴厘的仪式感午餐。' },
      { id: 'bali_babi', name: '烤乳猪饭', icon: '🐷', tag: '食', type: '美食', price: 40, desc: '巴厘印度教才有的猪肉料理，脆皮乳猪配血肠和辣酱。伊卡河边的摊子排队三十年，吃完手指都要嘬干净。' },
      { id: 'bali_sate', name: '沙爹烤串·烤鱼', icon: '🍢', tag: '食', type: '美食', price: 30, desc: '金巴兰海滩的炭烤海鲜配椰壳烤玉米。脚踩白沙、头顶星星，烤鱼香与海浪声是"巴厘晚餐标配"。' },
      { id: 'bali_luwak', name: '猫屎咖啡', icon: '☕', tag: '食', type: '饮品', price: 80, desc: '麝香猫"加工"的咖啡豆，全球最贵的咖啡之一。咖啡庄园里试喝十种口味，猫在笼子里一脸高冷。' },
      { id: 'bali_coconut', name: '椰子水·Es Kelapa', icon: '🥥', tag: '食', type: '饮品', price: 15, desc: '热带岛屿的"天然电解质水"，现剖椰子配椰肉。椰壳还能做成碗带回家，环保又好喝。' },
      { id: 'bali_bintang', name: 'Bintang啤酒', icon: '🍺', tag: '食', type: '饮品', price: 20, desc: '"五星啤酒"是巴厘海滩的官方饮料，冰镇配日落。红绿圆标一出现，就知道到巴厘了。' },
      { id: 'bali_sarong', name: '沙龙布（纱笼）', icon: '🩳', tag: '衣', type: '服饰', price: 40, desc: '进庙必须围的"庙裙"，热带花卉图案。一条纱笼百变：围腰、披肩、沙滩巾，巴厘的"万能布"。' },
      { id: 'bali_wood', name: '木雕·石雕', icon: '🗿', tag: '衣', type: '文创', price: 90, desc: '马斯村的木雕匠人刻出神像与猫头鹰。一小尊"神猴哈奴曼"摆件，放在案头守护专注。' },
      { id: 'bali_silver', name: '乌布银器', icon: '💍', tag: '衣', type: '文创', price: 150, desc: '巴厘银匠的细丝工艺全球有名，花藤纹手镯是招牌。可定制刻字，"海岛限定"的纪念。' },
      { id: 'bali_surf', name: '冲浪教学', icon: '🏄', tag: '玩', type: '体验', price: 150, desc: '库塔软浪区两小时速成课，教练拖板带你追浪。第一次站起来那三秒，会上瘾。' },
      { id: 'bali_spa', name: '巴厘式SPA', icon: '💆', tag: '玩', type: '体验', price: 120, desc: '花瓣浴、热石按摩、天然磨砂一条龙。两小时下来皮肤滑得能"反光"，价格只要国内三分之一。' },
      { id: 'bali_yoga', name: '乌布瑜伽晨课', icon: '🧘', tag: '玩', type: '体验', price: 60, desc: '稻田边的瑜伽馆，鸟鸣当背景音。一小时的拜日式下来，浑身通透。' },
      { id: 'bali_villa', name: '私人泳池别墅', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '巴厘的住宿性价比之王：独栋别墅带泳池。清晨被鸟叫醒，跳进泳池游两圈再吃早餐。' },
    ],
    stories: [
      { id: 'bali_story_offering', name: '满街的"花盒"', icon: '🌸', desc: '巴厘人每天在门口摆上椰叶花盒（Canang）祭神，游客要小心别踩到。花盒里插着香，是"众神之岛"的日常仪式。' },
      { id: 'bali_story_nyepi', name: '全岛静默日', icon: '🤫', desc: '每年安宁日（Nyepi）全岛停工停航、不许点灯，连机场都关闭。一整天的寂静，是巴厘给世界的"强制冥想"。' },
      { id: 'bali_story_monkey', name: '圣猴的"抢劫犯"清单', icon: '🐒', desc: '乌布圣猴森林的猴子学会了"交易"：抢走眼镜换香蕉。园区管理员练就一手"用香蕉赎回手机"的绝技。' },
      { id: 'bali_story_kelingking', name: '"精灵坠崖"的陡', icon: '🪨', desc: '努沙佩尼达岛的"精灵坠崖"因形似恐龙脖颈走红。崖壁近乎垂直，照片里的人小小一个，真实走下海滩要四十分钟。' },
      { id: 'bali_story_tanah', name: '海神庙的"潮汐钟"', icon: '🌊', desc: '海神庙涨潮时是岛、退潮时可步行到庙前。当地人来拜神要看潮汐表，游客第一次去都会"看海发呆"。' },
      { id: 'bali_story_digital', name: '数字游民的"第二首都"', icon: '💻', desc: '乌布和长谷是全球数字游民聚集地，咖啡馆里全是远程办公的笔记本。"在稻田边写周报"成了巴厘新风景。' },
    ],
  });
})();
