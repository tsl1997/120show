/* ============ 台北 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'taibei',
    name: '台北',
    country: '中国',
    cc: 'CN',
    province: '台湾',
    flag: '🇹🇼',
    region: '港澳台',
    hero: '🌃',
    desc: '101大楼撑起天际线，夜市烟火暖着人间。骑楼下的奶茶店与旧书摊比邻，温柔的说"谢谢"声是这座城市的背景音。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '轮船', icon: '⛴️', cost: 500 }],
    visa: null,
    spots: [
      { id: 'taibei_101', name: '台北101', icon: '🏙️', price: 600, desc: '曾是世界第一高楼，竹节造型寓意"节节高升"。89层观景台电梯37秒直上，台风来时看阻尼器"风铃"晃动是隐藏节目。' },
      { id: 'taibei_gugong', name: '台北故宫博物院', icon: '🏺', price: 350, desc: '翠玉白菜、肉形石、毛公鼎"三宝"坐镇，近七十万件中华文物在此。展柜前挤满惊叹，是一座装满"乡愁"的宝库。' },
      { id: 'taibei_shilin', name: '士林夜市', icon: '🏮', price: 0, desc: '台北最大夜市，蚵仔煎、鸡排、豪大杯饮料一路吃过去。霓虹招牌下人潮摩肩接踵，烟火气浓到化不开。' },
      { id: 'taibei_zhongshan', name: '中正纪念堂', icon: '🏛️', price: 0, desc: '蓝瓦白墙的八角顶建筑，整点卫兵交接仪式一步一停。从自由广场望过去，101正好立在轴线尽头。' },
      { id: 'taibei_longshan', name: '龙山寺·艋舺老街', icon: '🛕', price: 0, desc: '两百年的台北信仰中心，香火与签诗声不绝。隔壁剥皮寮老街红砖拱窗，是电影里的旧时光现场。' },
      { id: 'taibei_beitou', name: '北投温泉', icon: '♨️', price: 0, desc: '日据时代开发的百年温泉乡，硫磺雾气绕着青磺泉。泡完汤去温泉博物馆走走，像穿回1930年代。' },
      { id: 'taibei_dadaocheng', name: '大稻埕·迪化街', icon: '🏮', price: 0, desc: '百年南北货街，中药铺、布行、茶行招牌层层叠叠。逛完永乐市场去大稻埕码头看淡水落日，一天刚好。' },
    ],
    souvenirs: [
      { id: 'taibei_haojidian', name: '豪大大鸡排', icon: '🍗', tag: '食', type: '美食', price: 80, desc: '比脸大的鸡排现炸现切，酥皮锁住肉汁。夜市排队王，两个人吃一份才不辜负。' },
      { id: 'taibei_kexiaojian', name: '蚵仔煎', icon: '🥚', tag: '食', type: '美食', price: 60, desc: '鲜蚵裹地瓜粉浆加蛋煎制，淋上甜咸酱汁。夜市头牌，一口下去海味与酱香齐飞。' },
      { id: 'taibei_naicha', name: '珍珠奶茶', icon: '🧋', tag: '食', type: '饮品', price: 50, desc: '台式奶茶发源地的"本命"，珍珠要Q弹到能弹牙。春水堂与翰林之争没结果，好喝就对了。' },
      { id: 'taibei_niuroumian', name: '牛肉面', icon: '🍜', tag: '食', type: '美食', price: 150, desc: '红烧汤头炖到牛腱软糯，半筋半肉面是天花板。每年还有牛肉面节比赛，冠军一碗难求。' },
      { id: 'taibei_luwei', name: '卤味', icon: '🍢', tag: '食', type: '美食', price: 70, desc: '鸭血、豆干、海带自选称重，老板现切现拌。卤汁老汤越陈越香，夜宵的温柔乡。' },
      { id: 'taibei_bingguan', name: '凤梨酥', icon: '🍍', tag: '食', type: '特产', price: 120, desc: '微热山丘的土凤梨馅酸得坦率，佳德礼盒甜得讨喜。手信店试吃一路，两盒起步才够分。' },
      { id: 'taibei_niuzha', name: '牛轧糖·雪花饼', icon: '🍬', tag: '食', type: '特产', price: 100, desc: '大黑松小两口的老牌牛轧糖奶香四溢。雪花饼外裹雪花酥内夹蔓越莓，甜点界的"白色风暴"。' },
      { id: 'taibei_chashan', name: '台湾高山茶', icon: '🍵', tag: '食', type: '特产', price: 200, desc: '阿里山、梨山高冷茶回甘带花香。迪化街茶行试泡三轮再买，老板泡茶的手艺本身就是表演。' },
      { id: 'taibei_wenxue', name: '故宫文创·朕知道了胶带', icon: '🎀', tag: '衣', type: '文创', price: 80, desc: '"朕知道了"纸胶带一炮而红，翠玉白菜书签紧随其后。把博物馆的幽默感带回家。' },
      { id: 'taibei_dingdingche', name: 'Ubike骑行淡水河边', icon: '🚲', tag: '行', type: '体验', price: 30, desc: '借一辆公共自行车沿河滨车道慢慢骑，河对岸是观音山。台北人下班后的解压路线，游客也能秒上手。' },
      { id: 'taibei_wenquan', name: '北投泡汤', icon: '♨️', tag: '玩', type: '体验', price: 250, desc: '青磺泉泡上二十分钟，浑身毛孔都松开。日式木造汤屋配上蒸汽，恍惚间穿越到《千与千寻》。' },
      { id: 'taibei_yangmingshan', name: '阳明山花季一日', icon: '🌸', tag: '玩', type: '体验', price: 150, desc: '春天海芋田里摘花、绣球花海打卡，冬天山顶泡温泉看云雾。台北人的后花园，四季都有节目。' },
      { id: 'taibei_minsu', name: '温泉旅馆一晚', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '北投半山腰的日式旅馆，房间自带汤池。夜里泡汤看山间灯火，听虫鸣入睡。' },
    ],
    stories: [
      { id: 'taibei_story_101', name: '阻尼器"风铃太太"', icon: '🛡️', desc: '101大楼660吨的钢球阻尼器被昵称"风铃太太"，台风天晃动近一米还能"纹丝不乱"。她成了大楼的镇宅明星。' },
      { id: 'taibei_story_yexshi', name: '夜市的江湖规矩', icon: '🏮', desc: '士林夜市摊位几代相传，"排队越长越好吃"是公认定律。本地人秘籍：避开周末，周三的夜市才是自己的夜市。' },
      { id: 'taibei_story_naicha', name: '奶茶大战', icon: '🧋', desc: '台中春水堂与台南翰林都自称珍珠奶茶发明者，官司打了十年。判决没出结果，奶茶倒是喝遍了全世界。' },
      { id: 'taibei_story_shu', name: '诚品的深夜灯', icon: '📚', desc: '诚品书店曾24小时营业，深夜里读余华、看漫画、睡觉的各得其所。"一盏灯照亮整条街"，成了城市的文化地标。' },
      { id: 'taibei_story_wenquan', name: '北投的硫磺传说', icon: '♨️', desc: '北投温泉早年被称为"女巫之汤"，因硫磺雾气缭绕如魔法。日据时期开发后，成了百年温泉乡。' },
      { id: 'taibei_story_aisuo', name: '"谢谢"的城市温度', icon: '😊', desc: '台北的公车、便利店、夜市摊，一句"谢谢"使用率全国领先。游客说：这座城市的温柔，是从耳朵开始感觉到的。' },
    ],
  });
})();
