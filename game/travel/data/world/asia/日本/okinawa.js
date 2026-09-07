/* ============ 日本·冲绳县 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'okinawa',
    name: '冲绳县',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·冲绳',
    hero: '🐠',
    desc: '日本最南端的群岛天堂：珊瑚礁泻湖蓝得发光，琉球文化带着南国松弛感，一颗香檬配一碗冲绳荞麦面就是海岛日常。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2400 }, { name: '邮轮', icon: '🛳️', cost: 3200 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'okinawa_shuri', name: '首里城', icon: '🏯', price: 30, desc: '琉球王国的王宫，赤瓦朱柱融合中日建筑风格。守礼门上的"守礼之邦"匾额，是琉球五百年王城的名片。' },
      { id: 'okinawa_churaumi', name: '美丽海水族馆', icon: '🐋', price: 130, desc: '"黑潮之海"主水缸里有全球最大级别鲸鲨，水族馆天花板就是一整面巨幕。喂食秀时鲸鲨张嘴的瞬间全场倒吸气。' },
      { id: 'okinawa_kouri', name: '古宇利岛大桥', icon: '🌉', price: 0, desc: '两公里跨海大桥飞越翡翠绿海面，尽头是小岛白沙滩。自驾桥上像开进一幅画，随手拍都是壁纸。' },
      { id: 'okinawa_baise', name: '万座毛', icon: '🌊', price: 0, desc: '海边悬崖上的整片草坪被海风修剪成毛绒绒的"大象鼻"。日落时海天一色，风大到能把烦恼吹走。' },
      { id: 'okinawa_taketomi', name: '竹富岛', icon: '🏝️', price: 60, desc: '离岛里的"琉球活化石"：白砂路、红瓦屋、石狮子。水牛车带你绕岛一圈，车夫边赶牛边弹三线。' },
      { id: 'okinawa_america', name: '美国村', icon: '🎡', price: 0, desc: '北谷的美式风情街区：摩天轮、加州风餐厅、冲浪店。琉球与美式文化奇妙混搭，落日海滩就在隔壁。' },
      { id: 'okinawa_sefa', name: '斋场御岳', icon: '🙏', price: 2, desc: '琉球最高圣地，没有神殿只有巨岩与绿意。"遥拜地"面向久高岛，古时琉球最高女祭司在此祈祷。' },
    ],
    souvenirs: [
      { id: 'okinawa_soba', name: '冲绳荞麦面', icon: '🍜', tag: '食', type: '美食', price: 40, desc: '其实不是荞麦面，是小麦面配软糯五花肉与鱼板。汤头鲣鱼香浓，桌上一罐岛辣椒是隐藏挑战。' },
      { id: 'okinawa_goya', name: '苦瓜炒杂烩', icon: '🥒', tag: '食', type: '美食', price: 50, desc: '岛苦瓜与午餐肉、鸡蛋同炒，微苦回甘。冲绳人长寿饮食的代表菜，配白饭能吃两碗。' },
      { id: 'okinawa_taco_rice', name: '塔可饭', icon: '🍚', tag: '食', type: '美食', price: 45, desc: '塔可碎肉浇在白饭上加番茄生菜，美式墨西哥混血快餐。美军基地文化的"意外遗产"，吃了都说香。' },
      { id: 'okinawa_pork', name: '拉法帖·猪蹄料理', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '冲绳人"除叫声外全吃"的猪文化代表。猪蹄炖到胶质黏唇，配泡盛酒是本地大爷的最爱。' },
      { id: 'okinawa_souki', name: '香檬汁', icon: '🍋', tag: '食', type: '饮品', price: 25, desc: '岛香檬（シークヮーサー）酸得清爽，兑水或入泡盛。长寿之岛的"维C炸弹"，一喝上头。' },
      { id: 'okinawa_awamori', name: '泡盛', icon: '🍶', tag: '食', type: '饮品', price: 80, desc: '琉球古法蒸馏米酒，度数高但口感圆润。兑香檬加冰是"冲绳标配"，酒瓶上的岁月标记是"古酒"。' },
      { id: 'okinawa_benimo', name: '红芋挞·雪姬盐', icon: '🍠', tag: '食', type: '特产', price: 30, desc: '紫薯做的红芋挞紫色控必买，"雪盐"饼干用冲绳盐微甜带咸。机场手信区的"紫色风暴"。' },
      { id: 'okinawa_shisa', name: '风狮爷（Shisa）', icon: '🦁', tag: '衣', type: '文创', price: 70, desc: '屋顶与门口张口的狮子陶偶，一只张嘴一只闭嘴，驱邪纳福。买一对摆家里，琉球门神上岗。' },
      { id: 'okinawa_bingata', name: '红型染布艺', icon: '🎨', tag: '衣', type: '文创', price: 110, desc: '琉球王族的"红型"染布，热带花鸟配色大胆。做成杯垫、手机壳，一秒入南国。' },
      { id: 'okinawa_snorkel', name: '浮潜·青之洞窟', icon: '🤿', tag: '玩', type: '体验', price: 200, desc: '真荣田岬的海蚀洞里，阳光穿透水面反射出神秘蓝光。不会游泳也能全程教练带着，鱼群就在脸旁边。' },
      { id: 'okinawa_diving', name: '潜水看海龟', icon: '🐢', tag: '玩', type: '体验', price: 350, desc: '持证潜水员去庆良间群岛，与海龟同框概率极高。海底的蓝色静谧，上来后话都变少——震撼的。' },
      { id: 'okinawa_parasail', name: '海上拖伞', icon: '🪂', tag: '玩', type: '体验', price: 250, desc: '快艇把你和降落伞送上五十米高空，俯瞰珊瑚礁分层蓝。海风很大、视野无敌，尖叫会被吹回嘴里。' },
      { id: 'okinawa_eisa', name: '太鼓EISA表演', icon: '🥁', tag: '玩', type: '体验', price: 60, desc: '琉球传统EISA舞配上太鼓与三线，节奏一响手脚自动打拍。游客也能跟着围圈跳，气氛拉满。' },
      { id: 'okinawa_hotel', name: '海边度假酒店', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: '恩纳村悬崖边的度假酒店，泳池连着大海。躺在床上听浪，阳台上喝香檬气泡水看日落。' },
    ],
    stories: [
      { id: 'okinawa_story_changshou', name: '长寿之岛的饮食密码', icon: '🥗', desc: '冲绳曾是全球百岁老人密度最高地区之一，苦瓜、豆腐、海藻、猪肉均衡吃法被称为"冲绳膳食"。长寿文化成了岛上的软实力。' },
      { id: 'okinawa_story_shisa', name: '风狮爷的公母之分', icon: '🦁', desc: '张嘴的吸福气、闭嘴的守福气，一对风狮爷各司其职。岛上房顶、路口、学校门口都有，风格从呆萌到凶悍任选。' },
      { id: 'okinawa_story_mekong', name: '琉球王国的"万国津梁"', icon: '⛵', desc: '琉球王国自称"万国津梁"（四海桥梁），靠朝贡贸易富甲一方。首里城里的钟铭至今写着这份开放与骄傲。' },
      { id: 'okinawa_story_kokuba', name: '黑潮之海的鲸鲨', icon: '🐋', desc: '美丽海水族馆人工饲养鲸鲨，游客隔着玻璃与七米巨鱼对视。馆方说：看它游一圈，胜过看十部海洋纪录片。' },
      { id: 'okinawa_story_hanabi', name: '离岛的慢船', icon: '⛴️', desc: '渡嘉敷岛慢船单程两小时，甲板上能睡一觉。离岛游客多是本地家庭，这种"慢"正是冲绳的疗愈配方。' },
      { id: 'okinawa_story_onami', name: '台风天的"休岛"', icon: '🌀', desc: '冲绳每年夏秋都要迎接几个台风，机场一关全岛放假。民宿老板说：台风天最有冲绳味——大家围炉吃泡盛等风走。' },
    ],
  });
})();
