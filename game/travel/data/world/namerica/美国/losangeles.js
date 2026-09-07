/* ============ 美国·洛杉矶 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'losangeles',
    name: '洛杉矶',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🌴',
    desc: '天使之城：好莱坞山下的棕榈大道，圣莫尼卡的日落摩天轮，随便一个街角都像电影布景，阳光全年不打烊。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6800 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'losangeles_hollywood', name: '好莱坞星光大道', icon: '⭐', price: 0, desc: '2700多颗星星嵌在人行道上，中国戏院前的明星手脚印最热。街头"超人蜘蛛侠"合影要给小费，好莱坞的烟火气。' },
      { id: 'losangeles_sign', name: '格里菲斯天文台', icon: '🔭', price: 0, desc: '免费天文台正对好莱坞标志，日落时分整城镀金。《爱乐之城》取景地，晚上望远镜排队看土星环。' },
      { id: 'losangeles_santa_monica', name: '圣莫尼卡码头', icon: '🎡', price: 100, desc: '66号公路的"终点"路牌在这里。太平洋乐园的摩天轮看海上日落，沙滩上排球与滑板齐飞。' },
      { id: 'losangeles_disney', name: '加州迪士尼·星球大战园', icon: '🚀', price: 550, desc: '迪士尼老家+"星球大战：银河边缘"园区。开千年隼、喝蓝色牛奶，星战粉的终极朝圣。' },
      { id: 'losangeles_getty', name: '盖蒂中心', icon: '🏛️', price: 0, desc: '山顶白色建筑群，梵高《鸢尾花》真迹挂在那里。免费入园，空中电车爬上山坡，花园与海景都是展品。' },
      { id: 'losangeles_venice', name: '威尼斯海滩', icon: '🛹', price: 0, desc: '海滨步道的肌肉海滩、滑板场与街头篮球。运河区的小桥流水，藏着"洛杉矶的阿姆斯特丹"。' },
      { id: 'losangeles_studio', name: '环球影城', icon: '🎬', price: 480, desc: '片场小火车带你看真实摄影棚，《速度与激情》特效体验。哈利波特园区配黄油啤酒，加州阳光版魔法世界。' },
    ],
    souvenirs: [
      { id: 'losangeles_innout', name: 'In-N-Out 汉堡', icon: '🍔', tag: '食', type: '美食', price: 45, desc: '加州汉堡界"初恋"，现切土豆现炸薯条。暗号菜单"Animal Style"肉香加倍，餐盘纸印着圣经章节。' },
      { id: 'losangeles_tacos', name: '墨西哥塔可', icon: '🌮', tag: '食', type: '美食', price: 30, desc: '餐车塔可两美元一个，香菜洋葱青柠汁。深夜的"塔可车"是洛杉矶灵魂，排队的人比车还多。' },
      { id: 'losangeles_poke', name: '加州波奇饭', icon: '🍣', tag: '食', type: '美食', price: 80, desc: '夏威夷生鱼饭在加州进化成"健身餐之王"。牛油果金枪鱼配糙米，阳光味的健康。' },
      { id: 'losangeles_smoothie', name: '巴西莓果碗', icon: '🍓', tag: '食', type: '饮品', price: 60, desc: '紫色的 açaí 打底铺满水果椰片。海滩边的"晒碗文化"，先拍照再吃是默认流程。' },
      { id: 'losangeles_coffee', name: '加州精品咖啡', icon: '☕', tag: '食', type: '饮品', price: 40, desc: 'Intelligentsia 等精品咖啡店带动"第三波咖啡"。燕麦拿铁加一分甜，配上洛杉矶的阳光刚刚好。' },
      { id: 'losangeles_sneaker', name: '球鞋与潮牌', icon: '👟', tag: '衣', type: '服饰', price: 400, desc: '梅尔罗斯大道的潮牌店与球鞋店，"街头文化货舱"。限量款要摇号，逛一圈了解整个潮流圈。' },
      { id: 'losangeles_vinyl', name: '黑胶唱片', icon: '💿', tag: '衣', type: '文创', price: 150, desc: 'Amoeba 唱片店百万张黑胶淘到腿软。洛杉矶的摇滚灵魂，一张老唱片就是一个年代。' },
      { id: 'losangeles_star', name: '好莱坞周边', icon: '🎬', tag: '衣', type: '文创', price: 60, desc: '奥斯卡小金人摆件、电影场记板钥匙扣。"好莱坞"三个字的魔力，从纪念品店开始。' },
      { id: 'losangeles_bike', name: '海滨骑行', icon: '🚲', tag: '玩', type: '体验', price: 80, desc: '从圣莫尼卡骑到威尼斯海滩，一路海风与棕榈。租辆单车两小时，"加州式"运动日常。' },
      { id: 'losangeles_surf', name: '马里布冲浪', icon: '🏄', tag: '玩', type: '体验', price: 200, desc: '《海滩游侠》的浪点，教练带着追第一道浪。上岸后看太平洋落日，"加州梦"具象化。' },
      { id: 'losangeles_hike', name: '鲁尼恩峡谷徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '本地人的晨跑圣地，半山腰与好莱坞标志合影。偶遇遛狗的明星，洛杉矶人早已见怪不怪。' },
      { id: 'losangeles_hotel', name: '海滨汽车旅馆风酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '加州风泳池酒店，棕榈树影落在白墙上。晚上泳池边烧烤，"美式度假片"现场。' },
    ],
    stories: [
      { id: 'losangeles_story_sign', name: '好莱坞标志的"地产广告"出身', icon: '⭐', desc: 'HOLLYWOODLAND 原是1923年的地产广告，"LAND"后来拆掉。广告牌成了全球最著名的城市地标。' },
      { id: 'losangeles_story_traffic', name: '全美最堵的"405高速"', icon: '🚗', desc: '洛杉矶人平均堵车一年上百小时，导航软件都说"麻木"。本地黑话："堵在405上"=人生常态。' },
      { id: 'losangeles_story_tacos', name: '塔可车的"米其林逆袭"', icon: '🌮', desc: '墨西哥餐车从"路边摊"做到米其林推荐，洛杉矶的美食民主化样本。深夜塔可车前，西装与滑板少年同队。' },
      { id: 'losangeles_story_sun', name: '一年300天晴天', icon: '☀️', desc: '洛杉矶年降水只有两周，"雨"是新闻话题。本地人下雨不开车（不会开），晴天才是默认设置。' },
      { id: 'losangeles_story_screen', name: '满城都是"片场"', icon: '🎬', desc: '在洛杉矶喝咖啡撞见剧组是日常，封路牌写"filming"。路人淡定走过，"群众演员浓度全国最高"。' },
      { id: 'losangeles_story_beauty', name: '肌肉海滩的"复古秀"', icon: '💪', desc: '威尼斯海滩的户外健身区从1930年代火到现在。举铁的爷爷辈选手，腹肌比游客的行程还硬核。' },
    ],
  });
})();
