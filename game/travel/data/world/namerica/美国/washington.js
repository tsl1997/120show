/* ============ 美国·华盛顿特区 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'washington',
    name: '华盛顿特区',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🏛️',
    desc: '政治心脏：白宫与国会山之间，史密森尼博物馆群全部免费，樱花季的潮汐湖粉白一片，"权力的游戏"实景地。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }, { name: '高铁', icon: '🚄', cost: 7800 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'washington_whitehouse', name: '白宫', icon: '🏛️', price: 0, desc: '美国总统官邸，从拉斐特广场围观铁栅栏。提前预约可入内参观东翼，"权力的中心"。' },
      { id: 'washington_capitol', name: '国会山', icon: '🏛️', price: 0, desc: '国会大厦白色穹顶是国家象征，免费预约参观。两院议事厅，" democracy 的现场"。' },
      { id: 'washington_lincoln', name: '林肯纪念堂·反思池', icon: '🗿', price: 0, desc: '林肯坐像凝视反思池与华盛顿纪念碑。《阿甘正传》演讲地，马丁路德金"我有一个梦想"演讲台。' },
      { id: 'washington_smithsonian', name: '史密森尼博物馆群', icon: '🏺', price: 0, desc: '19座博物馆全部免费：航空航天馆、自然历史馆。希望之星蓝钻石与阿波罗登月舱，"世界博物馆之都"。' },
      { id: 'washington_cherry', name: '潮汐湖樱花', icon: '🌸', price: 0, desc: '1912年东京赠送的樱花树，春天3750株齐放。杰弗逊纪念堂做背景，"华盛顿的粉色春天"。' },
      { id: 'washington_monument', name: '华盛顿纪念碑', icon: '🗼', price: 0, desc: '169米方尖碑，世界最高石造建筑。可登顶俯瞰全城，"国家广场的中轴"。' },
      { id: 'washington_georgetown', name: '乔治城老街', icon: '🏘️', price: 0, desc: '百年石板路与联排小楼，《驱魔人》阶梯。Cupcake 排队王 Georgetown Cupcake。' },
    ],
    souvenirs: [
      { id: 'washington_halfsmoke', name: 'Half Smoke 香肠', icon: '🌭', tag: '食', type: '美食', price: 40, desc: '特区灵魂食物：烟熏猪肉香肠配辣洋葱酱。Be’ Chili Bowl 五十年老店，"政治人物也排队"。' },
      { id: 'washington_ethiopian', name: '埃塞俄比亚英吉拉', icon: '🫓', tag: '食', type: '美食', price: 70, desc: '特区有全美最大埃塞 community，英吉拉薄饼配炖菜。手抓着吃，"华盛顿的隐形名物"。' },
      { id: 'washington_chesapeake', name: '切萨皮克蓝蟹', icon: '🦀', tag: '食', type: '美食', price: 130, desc: '马里兰蓝蟹蒸汽配 Old Bay 调料。蟹饼三明治，"切萨皮克湾的鲜"。' },
      { id: 'washington_museum', name: '航空航天馆文创', icon: '🚀', tag: '衣', type: '文创', price: 80, desc: 'NASA 登月徽章、航天飞机模型。"史密森尼"限定，太空迷收藏。' },
      { id: 'washington_political', name: '政治文创', icon: '🗳️', tag: '衣', type: '文创', price: 45, desc: '白宫冰箱贴、总统选举徽章、"I Voted"贴纸套装。政治幽默 T 恤，"特区限定"。' },
      { id: 'washington_cherry_wen', name: '樱花文创', icon: '🌸', tag: '衣', type: '文创', price: 40, desc: '樱花节限定杯、樱花蜜。日美友谊的"粉色纪念"。' },
      { id: 'washington_spy', name: '国际间谍博物馆门票', icon: '🕵️', tag: '玩', type: '体验', price: 160, desc: '全球唯一公立间谍博物馆，"体验卧底"。破译密码任务，"007 的学校"。' },
      { id: 'washington_zoo', name: '国家动物园看熊猫', icon: '🐼', tag: '玩', type: '体验', price: 0, desc: '史密森尼国家动物园免费，熊猫馆是顶流。大熊猫"宝力"的日常，"华盛顿的明星"。' },
      { id: 'washington_bikeshare', name: '国家广场骑行', icon: '🚲', tag: '行', type: '体验', price: 50, desc: '共享单车串起纪念碑到国会山。樱花季骑行，"最效率的观光"。' },
      { id: 'washington_minsu', name: '乔治城精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '乔治城老街酒店，砖墙壁炉。推窗看运河，"特区最优雅的角落"。' },
    ],
    stories: [
      { id: 'washington_story_free', name: '"免费之城"的底气', icon: '🎫', desc: '史密森尼遗产造就全美最大免费博物馆群。"知识不应有门票"，特区最自豪的事。' },
      { id: 'washington_story_cherry2', name: '樱花的"百年友谊"', icon: '🌸', desc: '1912年东京市长赠3000株樱花。每年樱花节，"最成功的礼物"。' },
      { id: 'washington_story_height', name: '为什么没有高楼', icon: '🏙️', desc: '特区法律限制建筑高度低于国会山。天际线低平，"纪念碑永远是最高的"。' },
      { id: 'washington_story_panda', name: '熊猫外交', icon: '🐼', desc: '1972年玲玲兴兴赴美，"熊猫外交"开端。虽已回国，新熊猫又来了——"不可替代的友谊"。' },
      { id: 'washington_story_half2', name: 'Half Smoke的"政治隐喻"', icon: '🌭', desc: 'Be’ Chili Bowl 老板说："这香肠像政治家——外表硬内心软。"政客都来吃过。' },
      { id: 'washington_story_mall', name: 'National Mall 不是商场', icon: '🌳', desc: 'Mall 在这是"草坪广场"。游客问"购物中心在哪"，本地人笑："你正站在最大的 Mall 上。"' },
    ],
  });
})();
