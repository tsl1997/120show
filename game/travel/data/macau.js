/* ============ 澳门 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'macau',
    name: '澳门',
    country: '中国',
    cc: 'CN',
    province: '澳门',
    flag: '🇲🇴',
    region: '港澳台',
    hero: '🎰',
    desc: '四百年中葡交融的小城：大三巴牌坊俯瞰石板街，葡挞香气飘过议事亭前地，一夜之间能从欧陆小镇走到度假村宇宙。',
    travel: [{ name: '轮船', icon: '⛴️', cost: 180 }, { name: '高铁', icon: '🚄', cost: 620 }, { name: '飞机', icon: '✈️', cost: 950 }],
    visa: null,
    spots: [
      { id: 'macau_dasanba', name: '大三巴牌坊', icon: '⛪', price: 0, desc: '圣保禄教堂的正面前壁，巴洛克石雕历经三次大火独存。68级台阶上是澳门最著名的取景框，比教堂本身更有故事。' },
      { id: 'macau_yishiting', name: '议事亭前地', icon: '🧱', price: 0, desc: '碎波浪图案的石板路配上粉黄粉绿的葡式建筑，仿佛一脚踩进里斯本。喷泉、咖啡座、手信街全在一圈之内。' },
      { id: 'macau_fangdingna', name: '官也街', icon: '🍢', price: 0, desc: '氹仔的老食街，短短百余米挤满手信铺和小吃摊。猪扒包、雪糕、葡挞一路吃过去，是澳门的"开胃走廊"。' },
      { id: 'macau_lisboa', name: '威尼斯人度假村', icon: '🛳️', price: 0, desc: '三楼"运河"上有贡多拉船夫唱着歌划过，天花板蓝天永不日落。室内威尼斯与巨型购物中心合体，迷路是常态。' },
      { id: 'macau_mafei', name: '妈阁庙', icon: '🛕', price: 0, desc: '澳门最古老的庙宇之一，"Macau"之名正源于"妈阁"。天后宫香火五百年不断，摩崖石刻满庭，是老澳门的起点。' },
      { id: 'macau_loujia', name: '澳门旅游塔', icon: '🗼', price: 195, desc: '338米的观光塔，58层室外观景廊俯瞰三城。胆大的可以挑战"笨猪跳"——全球最高商业蹦极就在这里。' },
      { id: 'macau_bowuguan', name: '澳门博物馆·大炮台', icon: '🏰', price: 15, desc: '大炮台城墙环抱的博物馆，讲述四百年中西交汇史。十七门古炮曾守卫港口，如今静看大堂街的车水马龙。' },
    ],
    souvenirs: [
      { id: 'macau_puta', name: '安德鲁葡挞', icon: '🥧', tag: '食', type: '美食', price: 12, desc: '焦糖斑点的蛋挞鼻祖，外壳千层酥脆、蛋芯软嫩滚烫。路环老店出炉即空，一次买六只是起步价。' },
      { id: 'macau_zhubabao', name: '猪扒包', icon: '🍔', tag: '食', type: '美食', price: 35, desc: '炭烧猪排夹进现烤柴面包，可加蛋加芝士。外脆内嫩、肉汁横流，氹仔茶餐厅的灵魂。' },
      { id: 'macau_shuixiegao', name: '水蟹粥', icon: '🦀', tag: '食', type: '美食', price: 120, desc: '水蟹鲜甜融进粥底，整锅金黄绵滑。一锅够两人分，配油条蘸粥，是澳门夜宵界的顶流。' },
      { id: 'macau_xingjibing', name: '杏仁饼', icon: '🍪', tag: '食', type: '特产', price: 45, desc: '咀香园百年炭烧手艺，杏仁粒粒可见、酥到掉渣。现烤出炉用油纸一包，是澳门手信的门面担当。' },
      { id: 'macau_niunai', name: '莫义记雪糕·姜撞奶', icon: '🍨', tag: '食', type: '美食', price: 30, desc: '百年老店的榴莲雪糕"猫山王"闻名全城，姜撞奶现撞要等三分钟。甜咸之间，全是老铺底气。' },
      { id: 'macau_putaocai', name: '葡国菜·马介休', icon: '🐟', tag: '食', type: '美食', price: 150, desc: '葡国鸡、马介休球、非洲鸡，一桌吃出大航海味觉版图。葡式免治饭淋番茄汁，"土生葡菜"全球只有澳门做。' },
      { id: 'macau_shouxin', name: '猪肉脯·肉干', icon: '🥓', tag: '食', type: '特产', price: 60, desc: '炭烤现剪的蜜汁猪肉脯，油亮喷香。官也街的试吃一条接一条，买到最后拎不动。' },
      { id: 'macau_wenxue', name: '大三巴冰箱贴', icon: '🧲', tag: '衣', type: '文创', price: 30, desc: '大三巴、玫瑰堂、牌坊阶梯都变成微缩文创。石板路纹理的明信片，写上"此地一别，葡挞常念"。' },
      { id: 'macau_danahan', name: '大运河贡多拉', icon: '🛶', tag: '玩', type: '体验', price: 120, desc: '室内运河乘贡多拉，船夫边划边唱《我的太阳》。头顶永远是黄昏前的蓝天，浪漫得十分"塑料"但快乐真实。' },
      { id: 'macau_kanabiji', name: '新濠影汇8字摩天轮', icon: '🎡', tag: '玩', type: '体验', price: 100, desc: '"影汇之星"是全球最高8字形摩天轮，挂在大楼夹缝之间。夜坐一圈，路氹金光大道的霓虹尽收眼底。' },
      { id: 'macau_lvyoubao', name: '澳门旅游塔笨猪跳', icon: '🪢', tag: '玩', type: '体验', price: 350, desc: '233米全球最高商业蹦极，阿汤哥来拍过《碟中谍》。四秒自由落体后回弹，胆量毕业证书当场颁发。' },
      { id: 'macau_jiudian', name: '氹仔度假村酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '度假村里泳池、运河、缆车一应俱全。房间里望出去是路氹不夜的灯海，一夜好眠带香甜。' },
    ],
    stories: [
      { id: 'macau_story_mingzi', name: '"Macau"来自妈阁', icon: '⛵', desc: '葡萄牙人登陆问地名，渔民答"妈阁"（阿妈阁庙），于是整座城被记作"Macau"。一问一答，写进了世界地图。' },
      { id: 'macau_story_dasanba', name: '大火烧剩一面墙', icon: '🔥', desc: '圣保禄教堂1835年大火后只剩前壁，石雕上的中日汉字与西方天使共存。这座"残壁"反而成了城市最完整的名片。' },
      { id: 'macau_story_puta', name: '葡挞两家的百年之争', icon: '🥧', desc: '安德鲁与玛嘉烈曾是夫妻档，离婚后各自开店、配方各藏一手。两派葡挞之争打了三十年，赢家是全世界食客。' },
      { id: 'macau_story_luocha', name: '赌城不赌的日常', icon: '🍵', desc: '本地人很少进赌场，更爱茶餐厅和大排档。街坊说："赌场是游客的天堂，杏香园糖水才是我们的主场。"' },
      { id: 'macau_story_shibanlu', name: '碎石路里的葡萄牙', icon: '🧱', desc: '澳门的波浪形碎石路全部由葡萄牙工匠铺法砌成。低头看路也是旅行——黑白马赛克拼出帆船与海浪。' },
      { id: 'macau_story_shijieyichan', name: '全城皆世遗', icon: '🏛️', desc: '澳门历史城区30多处建筑打包入选世界文化遗产，从庙宇到教堂步行可达。一座城的"世界遗产密度"全国第一。' },
    ],
  });
})();
