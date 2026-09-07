/* 拉斯维加斯 分册02：特色周边（自助餐/名厨牛排/赌场鸡尾酒/猫王周边/太阳马戏/超跑） */
window.LV_GIFTS = window.LV_GIFTS || [];
window.LV_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'lasvegas_buffet', name: '自助餐之王 Bacchanal', icon: '🍽️', tag: '食', type: '美食', price: 400, desc: '凯撒宫自助餐"赌城自助天花板"。700种菜品，"吃回本"是门学问。' },
  { id: 'lasvegas_steak', name: '名厨牛排馆', icon: '🥩', tag: '食', type: '美食', price: 650, desc: '戈登拉姆齐、Wolfgang Puck 都在这开店。"名厨集结地"，人均四位数的牛排。' },
  { id: 'lasvegas_cocktail', name: '赌场池畔鸡尾酒', icon: '🍹', tag: '食', type: '饮品', price: 100, desc: '泳池边"Free Flow"鸡尾酒。18米高泳池看长街，"Vegas 的夏天"。' },
  { id: 'lasvegas_chip', name: '纪念筹码', icon: '🪙', tag: '衣', type: '文创', price: 25, desc: '每家赌场的限定纪念筹码，"收集控的天堂"。不赌也能买，"赌城的货币艺术"。' },
  { id: 'lasvegas_elvis', name: '猫王周边', icon: '🕺', tag: '衣', type: '文创', price: 30, desc: '猫王是"赌城之王"，白婚纱猫王合影。"Viva Las Vegas"的文化符号。' },
  { id: 'lasvegas_wedding', name: '小白教堂纪念', icon: '💍', tag: '衣', type: '文创', price: 40, desc: '"Drive-thru 婚礼教堂"是世界奇观。买枚"Vegas married"戒指当纪念。' },
  { id: 'lasvegas_shoot', name: '射击场体验', icon: '🔫', tag: '玩', type: '体验', price: 350, desc: '合法射击场体验加特林与狙击枪。"只在 Vegas 能玩"的重火力。' },
  { id: 'lasvegas_heli', name: '夜航直升机看长街', icon: '🚁', tag: '玩', type: '体验', price: 700, desc: '直升机环城夜景，香槟着陆。"空中赌城"，最浪漫的打开方式。' },
  { id: 'lasvegas_pole', name: '脱衣舞健身课', icon: '💃', tag: '玩', type: '体验', price: 250, desc: '"X-Pole"钢管舞体验课， Vegas 特色。运动量惊人，"笑着流汗"。' },
  { id: 'lasvegas_drive', name: '超跑自驾体验', icon: '🏎️', tag: '玩', type: '体验', price: 500, desc: '租兰博基尼/法拉利跑长街15分钟。"车比人多"的城市体验。' },
  { id: 'lasvegas_minsu', name: '主题酒店套房', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '威尼斯人"运河房"、百乐宫喷泉景房。"房间本身就是景点"。' },
  /* ---- 赌城其他菜 ---- */
  { id: 'lvg_bbq2', name: '沙漠 BBQ 烟熏', icon: '🍖', tag: '食', type: '美食', price: 80, desc: '沙漠烟熏牛排猪排。"Earl of Sandwich"等快餐厅与赌场餐车都有。"赌城快餐不简单"。' },
  { id: 'lvg_oyster2', name: '冰镇生蚝塔', icon: '🦪', tag: '食', type: '美食', price: 200, desc: '海鲜自助里生蚝螃蟹现剥。"沙漠中的海洋"。' },
  { id: 'lvg_vegas_food', name: 'Gordon Ramsay Hell Kitchen', icon: '🍽️', tag: '食', type: '美食', price: 350, desc: '地狱厨房真人版的牛排馆。名厨 Gordon Ramsay 真人驻场。"全球戈登粉必来"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'lvg_dice', name: '骰子钥匙扣', icon: '🎲', tag: '衣', type: '文创', price: 35, desc: '红白两色迷你骰子扣在包上。"赌城的护身符"。' },
  { id: 'lvg_chips_set', name: '赌城全套纪念品', icon: '🎁', tag: '衣', type: '文创', price: 200, desc: '五家赌场筹码+猫王钥匙+威龙巾套装。"赌城入门礼盒"。' },
  /* ---- 体验课 ---- */
  { id: 'lvg_blackjack', name: '21点新手教学', icon: '🃏', tag: '玩', type: '体验', price: 100, desc: '赌场用新手筹码教学，"不赌也能玩"。荷官教规则，"赌城入门第一课"。' },
  { id: 'lvg_drive_lux', name: '兰博基尼 5 分钟', icon: '🏎️', tag: '玩', type: '体验', price: 800, desc: '超跑俱乐部租兰博基尼/法拉利绕长街拍照。"5 分钟体验版"够拍 100 张 IG。' },
  { id: 'lvg_spa', name: '沙漠绿洲 SPA', icon: '💆', tag: '玩', type: '体验', price: 350, desc: '沙漠中的顶级 SPA 中心。矿物泥浴与热石按摩，"沙漠里的绿洲"。' },
  /* ---- 住宿 ---- */
  { id: 'lvg_mandalay', name: '曼德勒海湾酒店', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '热带雨林主题酒店，鲨鱼礁水族馆。"赌城的马尔代夫"。' },
  { id: 'lvg_airbnb', name: 'Downtown Airbnb', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '老城区 Airbnb 公寓，离长街 10 分钟。"便宜的赌城"也能住。' }
);
