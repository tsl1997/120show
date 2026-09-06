/* ============ 云南·丽江 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lijiang',
    name: '丽江',
    country: '中国',
    cc: 'CN',
    province: '云南',
    flag: '🇨🇳',
    region: '西南',
    hero: '🏔️',
    desc: '雪山下的柔软时光：大研古城的水巷酒吧，玉龙雪山的十三峰银光，纳西古乐与东巴文字，丽江是"发呆"的代名词。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '火车', icon: '🚂', cost: 650 }],
    visa: null,
    spots: [
      { id: 'lijiang_dayan', name: '丽江古城（大研）', icon: '🏮', price: 50, desc: '世界遗产古城，四方街辐射出清末民初的街巷。水渠穿街、柳树拂面，夜晚酒吧街灯火如河。' },
      { id: 'lijiang_yulong', name: '玉龙雪山·蓝月谷', icon: '🏔️', price: 100, desc: '纳西人的神山，索道直上4506米冰川公园。蓝月谷湖水奶蓝色如"白色牛奶湖"，雪山倒影圣洁。' },
      { id: 'lijiang_shuhe', name: '束河古镇', icon: '🏘️', price: 40, desc: '茶马古道重镇，比大研更安静。青龙桥下马帮故事，咖啡店与银器铺沿水而开。' },
      { id: 'lijiang_mufu', name: '木府', icon: '🏛️', price: 60, desc: '"北有故宫，南有木府"，纳西土司的紫禁城。万卷楼藏东巴经，登上狮子山万古楼俯瞰全城。' },
      { id: 'lijiang_heiyu', name: '黑龙潭公园', icon: '⛲', price: 0, desc: '玉龙雪山倒映潭中的经典机位。东巴文化研究院在此，"雪山第一景"。' },
      { id: 'lijiang_baisha', name: '白沙古镇·壁画', icon: '🖼️', price: 30, desc: '纳西文化发源地，白沙壁画融汉藏纳西风格。古镇安静得能听见风声，扎染坊挂满蓝白。' },
      { id: 'lijiang_lugu', name: '泸沽湖两日游', icon: '🏞️', price: 400, desc: '摩梭人"女儿国"，湖水能见度12米。猪槽船划向里格半岛，篝火晚会对歌，"东方的女儿国"。' },
    ],
    souvenirs: [
      { id: 'lijiang_paigutang', name: '腊排骨火锅', icon: '🍖', tag: '食', type: '美食', price: 98, desc: '象山市场腊排骨炖一锅，咸香入骨。配薄荷叶与蘸水，"丽江的冬日标配"。' },
      { id: 'lijiang_jidou', name: '鸡豆凉粉', icon: '🍮', tag: '食', type: '美食', price: 10, desc: '丽江独有的鸡豆做凉粉，冷热两吃。撒花生碎酸醋，纳西奶奶的手艺。' },
      { id: 'lijiang_naxi', name: '纳西烤鱼·烤肉', icon: '🐟', tag: '食', type: '美食', price: 60, desc: '炭火烤鱼配薄荷与蘸水，纳西风味。腊排骨之外的第二选择，"雪山下的烟火"。' },
      { id: 'lijiang_xiancao', name: '鲜花饼·青梅酒', icon: '🌸', tag: '食', type: '特产', price: 40, desc: '玫瑰花酱馅饼"咬一口春天"。青梅酒微醺，"雪山脚下的小酒馆"。' },
      { id: 'lijiang_dongba', name: '东巴文字文创', icon: '📜', tag: '衣', type: '文创', price: 45, desc: '东巴象形文字写下你的名字。世界唯一活着的象形文字，"纳西族的智慧"。' },
      { id: 'lijiang_zharan', name: '扎染围巾', icon: '🧣', tag: '衣', type: '服饰', price: 60, desc: '白沙古镇手工扎染，蓝白花纹独一无二。披上拍照"最上镜的丽江色"。' },
      { id: 'lijiang_yinshi2', name: '雪花银手镯', icon: '💍', tag: '衣', type: '服饰', price: 200, desc: '纳西银匠手工錾花，"雪花银"成色好。古城银器店认准手工錾刻。' },
      { id: 'lijiang_guqin', name: '手鼓体验课', icon: '🪘', tag: '玩', type: '体验', price: 80, desc: '非洲鼓店门口学一段"丽江节奏"。老板娘边打边唱，"会打鼓才算来过丽江"。' },
      { id: 'lijiang_guzhen', name: '酒吧街微醺夜', icon: '🍻', tag: '玩', type: '体验', price: 120, desc: '新华街酒吧一条街，民谣声漫过水渠。"艳遇之都"的夜晚，微醺刚刚好。' },
      { id: 'lijiang_machang', name: '茶马古道骑马', icon: '🐎', tag: '玩', type: '体验', price: 180, desc: '拉市海湿地骑马走茶马古道一段。马帮铃声里，"重回南丝路"。' },
      { id: 'lijiang_xuexue', name: '雪山冰川公园索道', icon: '🚡', tag: '行', type: '体验', price: 140, desc: '大索道直上海拔4506米冰川公园。租羽绒服吸氧瓶，"触手可及的冰川"。' },
      { id: 'lijiang_minu', name: '雪山观景民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '古城天台民宿，躺床上看玉龙雪山。清晨阳光染白雪峰，"被雪山叫醒"。' },
    ],
    stories: [
      { id: 'lijiang_story_dongba', name: '东巴文：活着的象形文字', icon: '📜', desc: '纳西东巴文有1400个单字，图画感十足。写情书用它，"全世界最浪漫的文字"。' },
      { id: 'lijiang_story_yanshui', name: '丽江的"发呆经济"', icon: '☕', desc: '"来丽江躺平"成了青年生活方式。客栈老板白天晒太阳晚上唱歌，"慢"就是主业。' },
      { id: 'lijiang_story_yulong', name: '玉龙雪山无人登顶', icon: '🏔️', desc: '玉龙雪山主峰扇子陡至今无人成功登顶。纳西人视为神山，"她的美只可远观"。' },
      { id: 'lijiang_story_mosuo', name: '泸沽湖的"女儿国"', icon: '🏞️', desc: '摩梭人走婚习俗：男方"走"到女方家，暮合晨离。母系家庭传了千年，"最后的女权王国"。' },
      { id: 'lijiang_story_machang2', name: '茶马古道的马铃声', icon: '🐎', desc: '丽江是茶马古道重镇，藏区茶叶从这里转运。束河的马帮博物馆里，马鞍与铃铛还在。' },
      { id: 'lijiang_story_shui', name: '古城的"三眼井"智慧', icon: '💧', desc: '纳西三眼井：第一眼饮用、第二眼洗菜、第三眼洗衣。600年前的"分级用水"环保智慧。' },
    ],
  });
})();
