/* 两界搬运工 · 世界大地图
 * 现代(2026)：北京/上海 + 国际航空枢纽（香港/东京/旧金山/伦敦/内罗毕）
 * 旧时(1980)：北京/广州/武汉/哈尔滨/乌鲁木齐/杭州 + 国际（香港/东京，需解锁）
 * place 字段: [名称, 描述, 类型, 库存, 片区, 限量, 到访消耗{time分钟,energy,hunger,thirst}]
 * 交通贴合历史：1980 绿皮车动辄一两天，需介绍信；2026 高铁/飞机以小时计。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  // 通用到访消耗：city 步行约15分钟；far 片区更远
  const W = (z, t) => ({ time: t || (z === 'far' ? 30 : 15), energy: z === 'far' ? 4 : 2, hunger: z === 'far' ? 1.5 : 0.6, thirst: z === 'far' ? 2 : 0.8 });
  const isCost = (o) => !!o && typeof o === 'object' && ('time' in o || 'energy' in o || 'hunger' in o || 'thirst' in o);
  // 第6/7参数既可传限量({itemId:qty})也可传到访消耗({time,energy,...})，自动识别
  const P = (name, desc, type, stock, zone, a, b) => {
    let limits = null, cost = null;
    if (isCost(a)) cost = a; else if (a) limits = a;
    if (isCost(b)) cost = b; else if (b) limits = b;
    return [name, desc, type, stock || [], zone, limits, cost || W(zone, undefined)];
  };

  const MODERN = {
    beijing: {
      name: '北京', era: 'modern',
      intro: '2026年的首都，你的大本营。物质过剩，机会与门槛并存。',
      places: {
        home: P('城中村出租屋', '你的起点。初始储物有限，可通过租房升级扩容。', 'home', [], 'outer'),
        shop: P('楼下小卖部', '货少价略贵，买瓶水买个面包很方便。', 'market', ['noodle', 'biscuit', 'milk', 'soap', 'toothpaste', 'water', 'cola', 'soda']),
        supermarket: P('大型超市', '品类齐全，日常采购价格公道。', 'market', ['rice5', 'noodle', 'flour10', 'bun', 'pork', 'beef', 'chicken', 'egg10', 'milk', 'canned', 'biscuit', 'candy', 'whiteCandy', 'chocolate', 'instantNoodle', 'sugar', 'salt', 'peanutOil', 'water', 'cola', 'sprite', 'juice', 'beer', 'teaJasmine', 'soap', 'towel', 'toothpaste', 'detergent', 'umbrella']),
        wholesale: P('批发市场', '成箱货品利润高，也更占地方。', 'wholesale', ['matches', 'enamel', 'workglove', 'nylonRope', 'notebook', 'ballpen', 'bulb', 'soapPowder', 'plasticBasin']),
        seeds: P('种子站', '能改变旧时代农业的高产种子。', 'market', ['wheatseed', 'riceseed', 'cornseed', 'tomatoseed', 'cottonseed']),
        dock: P('生鲜冷链码头', '海产与肉品冷链集散地。', 'market', ['prawn', 'hairtail', 'pork', 'beef'], 'east'),
        orchard: P('水果批发市场', '当季鲜果整筐出货。', 'market', ['apple', 'banana', 'orange', 'lychee', 'longan'], 'far'),
        flea: P('旧货市场', '功能正常的二手电子与过季服装。', 'market', ['radio', 'watch', 'calculator', 'camera', 'cassette', 'fan', 'bwTV', 'colorTV', 'coat', 'jeans', 'sneaker', 'scarf', 'downcoat', 'leatherShoes']),
        electronicsFactory: P('电子厂批发部', '库存整机与元器件箱。', 'wholesale', ['radio', 'watch', 'calculator', 'cassette', 'fan', 'colorTV', 'sewingMachine'], 'east'),
        industrialFactory: P('工业品厂', '电机、水泵、工具按采购批次出售。', 'wholesale', ['electricMotor', 'dieselEngine', 'handTractor', 'bearing', 'welder', 'waterPump'], 'east'),
        clothingFactory: P('服装厂尾货部', '成衣、劳保服与批发尾货直供。', 'wholesale', ['coat', 'jeans', 'sneaker', 'scarf', 'downcoat', 'dacron', 'cloth', 'nylonStocking', 'leatherShoes']),
        books: P('大学旧书店', '教材、工具书，偶有技术资料。', 'market', ['englishBook', 'radioBook', 'agriBook', 'dictionary', 'classics']),
        techPark: P('科技园', '现代技术资料与小批电子设备。', 'market', ['seedManual', 'icsManual', 'radioTech', 'plasticTech', 'radio', 'calculator']),
        antiqueCity: P('古玩城', '收购已鉴定文物，可在这里出售带回的古玩。', 'antique', [], 'center'),
        pawn: P('典当行 / 旧货回收站', '什么都收（压价），旧世界带回来的稀奇货都能折现。', 'pawn', [], 'center'),
        gearShop: P('行者装备店', '升级你的背包容量——穿越只能带背包里的东西。', 'gear', [], 'center'),
        property: P('房屋中介', '升级现代住宅，扩大家中储物容量。', 'property', [], 'center'),
        bank: P('中国银行北京分行', '存款取款、结售汇（年度5万美元额度）。', 'bank', [], 'center'),
        stock: P('证券营业部', 'A股交易，T+1制度，涨跌幅10%。', 'stock', [], 'center'),
        airport: P('北京大兴国际机场', '乘机前往香港、东京、旧金山、伦敦、内罗毕。', 'airport', [], 'far', { time: 45, energy: 5, hunger: 1, thirst: 1.5 }),
        freight: P('北京陆港货运码头', '办理国内大宗配送、查看在途货物。', 'warehouse', [], 'east'),
        training: P('职业培训中心', '现代培训解锁旧时职业：外语、鉴定、农机。', 'training', [], 'center'),
        admin: P('行政服务中心', '办理护照等行政事务。', 'service', [], 'center'),
        restaurant: P('京味餐馆', '用餐恢复饱腹与精神，解渴的汤水。', 'restaurant', [], 'center'),
        park: P('城市公园', '散步恢复心情，偶遇诗词风景。', 'park', [], 'center'),
        luxury: P('高端商城', '奢侈品与陈年茅台等稀缺货。', 'market', ['agedMaotai', 'panda', 'scarf', 'leatherShoes', 'longjing'], 'center'),
        station: P('北京南站', '高铁通往上海（数小时可达）。', 'station', [], 'far', { time: 40, energy: 5, hunger: 1, thirst: 1.5 })
      }
    },
    shanghai: {
      name: '上海', era: 'modern',
      intro: '2026年的上海，国际大都市，商业高度发达。',
      places: {
        home: P('静安短租公寓', '落脚歇息的地方。', 'home', [], 'center'),
        station: P('虹桥站', '高铁通往北京。', 'station', [], 'far', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        market: P('南京路商圈', '全国时尚与电子潮流中心。', 'market', ['nylonStocking', 'silkBolt', 'camera', 'watch', 'jeans', 'scarf', 'colorTV']),
        wholesale: P('七浦路批发市场', '华东服装与小商品批发集散地。', 'wholesale', ['matches', 'notebook', 'ballpen', 'nylonRope', 'plasticBasin', 'enamel', 'workglove']),
        bank: P('中国银行上海分行', '存取款与结售汇。', 'bank', [], 'center'),
        restaurant: P('本帮菜馆', '用餐恢复状态。', 'restaurant', [], 'center'),
        park: P('外滩', '黄浦江畔，万国建筑群。', 'park', [], 'center')
      }
    }
  };

  const INTL_MODERN = {
    hongkong: {
      name: '香港', currency: 'HKD', flightHours: 3.5, flightCost: 1200,
      intro: '东方之珠，资本洗涤池，世界的窗口。',
      places: {
        home: P('尖沙咀临时寓所', '歇脚的地方。', 'home', [], 'center'),
        airport: P('香港国际机场', '往返北京。', 'airport', [], 'far', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        market: P('香港商贸中心', '时装、电子与海产，港币交易。', 'market', ['crab', 'prawn', 'camera', 'cassette', 'nylonStocking', 'silkBolt']),
        auction: P('国际拍卖行', '鉴定并拍卖海外古董。', 'auction', [], 'center'),
        warehouse: P('葵青公共仓库', '租仓、存取货物并接收码头货物。', 'warehouse', [], 'east'),
        bank: P('汇丰银行', '港币与多币种服务。', 'bank', [], 'center'),
        restaurant: P('中环餐厅', '用餐恢复状态。', 'restaurant', [], 'center')
      }
    },
    tokyo: {
      name: '东京', currency: 'JPY', flightHours: 4, flightCost: 2500,
      intro: '霓虹帝都，电子与收藏品的圣殿。',
      places: {
        home: P('新宿临时住所', '歇脚的地方。', 'home', [], 'center'),
        airport: P('东京成田机场', '往返北京。', 'airport', [], 'far', { time: 60, energy: 6, hunger: 1.5, thirst: 2 }),
        market: P('秋叶原电子街', '电子、相机、收藏品，日元交易。', 'market', ['colorTV', 'bwTV', 'camera', 'cassette', 'watch', 'silkBolt']),
        auction: P('东京国际美术拍卖', '鉴定并拍卖文物。', 'auction', [], 'center'),
        warehouse: P('东京湾公共仓库', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('东京银行', '日元与多币种服务。', 'bank', [], 'center'),
        restaurant: P('银座料理店', '用餐恢复状态。', 'restaurant', [], 'center')
      }
    },
    sanfrancisco: {
      name: '旧金山', currency: 'USD', flightHours: 11, flightCost: 6500,
      intro: '湾区，技术与农产品的源头。',
      places: {
        home: P('湾区短租公寓', '歇脚的地方。', 'home', [], 'center'),
        airport: P('旧金山国际机场', '往返北京。', 'airport', [], 'far', { time: 45, energy: 6, hunger: 1.5, thirst: 2 }),
        market: P('湾区工业市场', '工业、种子与农产品，美元交易。', 'market', ['electricMotor', 'waterPump', 'wheatseed', 'cottonseed', 'apple', 'beef', 'chicken']),
        warehouse: P('奥克兰公共仓库', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('花旗银行', '美元服务。', 'bank', [], 'center'),
        restaurant: P('渔人码头餐厅', '用餐恢复状态。', 'restaurant', [], 'center')
      }
    },
    london: {
      name: '伦敦', currency: 'GBP', flightHours: 12, flightCost: 8000,
      intro: '泰晤士河畔，艺术与古董的老牌中心。',
      places: {
        home: P('泰晤士寓所', '歇脚的地方。', 'home', [], 'center'),
        airport: P('伦敦希思罗机场', '往返北京。', 'airport', [], 'far', { time: 50, energy: 6, hunger: 1.5, thirst: 2 }),
        market: P('伦敦艺术市场', '艺术品、书刊与奢侈品，欧元交易。', 'market', ['silkBolt', 'coffee', 'chocolate', 'classics', 'scarf']),
        auction: P('伦敦国际拍卖行', '鉴定并拍卖文物。', 'auction', [], 'center'),
        warehouse: P('泰晤士公共仓库', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('巴克莱银行', '英镑与多币种服务。', 'bank', [], 'center'),
        restaurant: P('西区餐厅', '用餐恢复状态。', 'restaurant', [], 'center')
      }
    },
    nairobi: {
      name: '内罗毕', currency: 'KES', flightHours: 13, flightCost: 9500,
      intro: '东非之门，矿产、咖啡与木雕的源头。',
      places: {
        home: P('内罗毕小屋', '歇脚的地方。', 'home', [], 'center'),
        airport: P('内罗毕国际机场', '往返北京。', 'airport', [], 'far', { time: 45, energy: 6, hunger: 1.5, thirst: 2 }),
        market: P('内罗毕市场', '矿产、咖啡与木雕，先令交易。', 'market', ['coffee', 'crab', 'peanutOil']),
        warehouse: P('内罗毕公共仓库', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('东非银行', '先令服务。', 'bank', [], 'center'),
        restaurant: P('内罗毕餐厅', '用餐恢复状态。', 'restaurant', [], 'center')
      }
    }
  };

  const OLD = {
    beijing: {
      name: '北京', era: 'old',
      intro: '1980年的北京。新旧交替的暴风眼，红墙下涌动着改革开放的第一缕潮。',
      places: {
        home: P('南锣鼓巷56号四合院', '八户邻居共住一院，你的落脚点。', 'home', [], 'north'),
        street: P('热闹街区', '人来人往，可向行人兜售货物、结识街坊。', 'street', [], 'center'),
        coop: P('国营供销社', '凭票或议价买粮油肉布，稀缺烟酒不常补。', 'market', ['flour10', 'bun', 'millet', 'sugar', 'salt', 'soap', 'towel', 'cloth', 'dacron', 'matches', 'bulb']),
        restaurant: P('国营饭店', '吃饭恢复饱腹与精神，汤水解渴。', 'restaurant', [], 'center'),
        antique: P('文物商店', '收售旧物与疑似古玩，需鉴定；限量谜团件。', 'antique', ['mystery_jar', 'mystery_bowl', 'mystery_scroll', 'mystery_bronze', 'mystery_jade'], 'west', { mystery_jar: 4, mystery_bowl: 6, mystery_scroll: 3, mystery_bronze: 2, mystery_jade: 4 }),
        friendship: P('友谊商店', '只收外汇券，出售进口稀罕货。', 'friendship', ['cola', 'sprite', 'coffee', 'chocolate', 'camera', 'cassette', 'watch', 'nylonStocking', 'canned'], 'center', { cola: 5, sprite: 5, coffee: 3, chocolate: 6, camera: 1, cassette: 2, watch: 4, nylonStocking: 6, canned: 8 }),
        post: P('邮局', '限量出售邮票；每日存货有限，卖完即止，次日补货。', 'market', ['monkey', 'redstamp', 'landscape'], 'center', { monkey: 2, redstamp: 1, landscape: 3 }),
        station: P('北京站', '绿皮火车通往全国各大城市。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        bank: P('中国银行北京分行', '旧时人民币存取、外汇券兑换。', 'bank', [], 'center'),
        park: P('人民公园', '散步恢复心情，偶遇诗句风景。', 'park', [], 'center'),
        science: P('科学院', '收购高产种子与技术手稿。', 'market', ['seedManual', 'icsManual', 'radioTech', 'plasticTech'], 'west'),
        factory: P('工厂区', '工人消费力强；在这里可为官方办事、领取票证。', 'market', ['electricMotor', 'bearing', 'welder', 'fan', 'radio', 'bwTV'], 'east', null, null, { time: 25, energy: 3, hunger: 1, thirst: 1.2 }),
        office: P('街道办', '办理介绍信、就业、领补贴；单位在此发工资和票证。', 'office', [], 'north'),
        blackmarket: P('鸽子市（夜黑市）', '深夜开市，高价散货，也能高价收到票证。', 'blackmarket', ['nylonRope', 'flashlight', 'watch', 'nylonStocking', 'plasticBasin', 'whiteCandy', 'instantNoodle', 'meatTicket', 'foodTicket', 'clothTicket', 'oilTicket', 'sugarTicket', 'cigaretteTicket', 'wineTicket'], 'west', { nylonRope: 10, flashlight: 8, watch: 10, nylonStocking: 10, plasticBasin: 6, whiteCandy: 10, instantNoodle: 10, meatTicket: 6, foodTicket: 12, clothTicket: 6, oilTicket: 5, sugarTicket: 5, cigaretteTicket: 4, wineTicket: 4 }),
        wholesale: P('街道批发部', '小商品批发，量大价优。', 'wholesale', ['matches', 'notebook', 'ballpen', 'bulb', 'enamel', 'workglove', 'soapPowder'], 'north'),
        smallMarket: P('街道小市', '日用、食品与旧书少量流通。', 'market', ['soap', 'towel', 'flashlight', 'millet', 'sugar', 'salt', 'pickle', 'classics', 'dictionary'], 'north'),
        culture: P('天安门广场', '共和国的心脏。', 'culture', [], 'center'),
        tower: P('景山俯瞰故宫', '紫禁城尽收眼底。', 'culture', [], 'center', { time: 30, energy: 4, hunger: 1, thirst: 1.2 })
      }
    },
    guangzhou: {
      name: '广州', era: 'old',
      intro: '1980年的广州。南大门、走私前线、个体户的天堂。',
      places: {
        home: P('西关骑楼旧居', '临街的老骑楼，你的落脚点。', 'home', [], 'west'),
        station: P('广州站', '铁路枢纽，通往全国。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        gaodijie: P('高第街服装市场', '港版时装、电子表遍地，只认现金。', 'market', ['dacron', 'nylonStocking', 'watch', 'calculator', 'cassette', 'camera', 'jeans', 'scarf']),
        qingping: P('清平药材市场', '药材与野味集散，也收东北山货。', 'market', ['pineNut', 'woodEar', 'soybeanOilN', 'rice5']),
        wharf: P('黄埔港 / 珠江口', '走私货靠岸点，高风险高回报。', 'blackmarket', ['colorTV', 'cassette', 'camera', 'watch', 'nylonStocking', 'canned', 'chocolate', 'meatTicket', 'foodTicket', 'clothTicket'], 'east', { colorTV: 2, cassette: 5, camera: 2, watch: 8, nylonStocking: 8, canned: 6, chocolate: 5, meatTicket: 6, foodTicket: 12, clothTicket: 6 }),
        fruitMarket: P('岭南水果市场', '荔枝龙眼香蕉成筐。', 'market', ['lychee', 'longan', 'banana', 'orange'], 'south'),
        restaurant: P('早茶楼', '一盅两件，饮茶吃饭。', 'restaurant', [], 'center'),
        bank: P('中国银行广州分行', '存兑外汇。', 'bank', [], 'center'),
        culture: P('沙面 / 珠江边', '近代史的见证，江风拂面。', 'culture', [], 'west'),
        hotel: P('东方宾馆', '涉外宾馆，住宿休息。', 'hotel', [], 'center')
      }
    },
    wuhan: {
      name: '武汉', era: 'old',
      intro: '1980年的武汉。九省通衢，江汉粮仓与个体户中转站。',
      places: {
        home: P('汉口老里分', '里分民居，你的落脚点。', 'home', [], 'north'),
        station: P('汉口站', '京广线心脏，全国中转。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        hanzheng: P('汉正街', '中国小商品第一街，打包出货。', 'wholesale', ['matches', 'notebook', 'ballpen', 'bulb', 'enamel', 'workglove', 'nylonStocking', 'flashlight']),
        dock: P('长江码头', '水运发往重庆、上海，运费极低。', 'station', [], 'east'),
        market: P('集贸市场', '大米、莲藕、武昌鱼。', 'market', ['dami', 'lotus', 'wuchangFish', 'rice5', 'pork']),
        restaurant: P('老通城豆皮', '过早吃豆皮，喝蛋酒。', 'restaurant', [], 'center'),
        bank: P('中国银行汉口分行', '存兑外汇。', 'bank', [], 'center'),
        culture: P('黄鹤楼遗址 / 蛇山', '昔人已乘黄鹤去。', 'culture', [], 'west'),
        hotel: P('江城饭店', '住宿休息。', 'hotel', [], 'center')
      }
    },
    harbin: {
      name: '哈尔滨', era: 'old',
      intro: '1980年的哈尔滨。共和国长子，重工业与黑土山货的宝库。',
      places: {
        home: P('道里区筒子楼', '大厂职工的筒子楼，你的落脚点。', 'home', [], 'north'),
        station: P('哈尔滨站', '通往关内外的铁路枢纽。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        qiulin: P('秋林公司', '俄式百货，红肠大列巴。', 'market', ['canned', 'chocolate', 'milk', 'sugar', 'teaJasmine']),
        factory: P('三大动力厂生活区', '工人们工资高，缺副食，销货宝地；厂里发票证。', 'street', [], 'east', null, null, { time: 25, energy: 3, hunger: 1, thirst: 1.2 }),
        mountain: P('长白山山货集散地', '人参鹿茸貂皮松子，山货江湖。', 'market', ['pineNut', 'woodEar', 'soybeanOilN'], 'far', null, null, { time: 45, energy: 6, hunger: 2, thirst: 2.5 }),
        restaurant: P('国营老菜馆', '杀猪菜、大列巴蘸红肠。', 'restaurant', [], 'center'),
        bank: P('中国银行哈尔滨分行', '存兑外汇。', 'bank', [], 'center'),
        culture: P('中央大街 / 索菲亚教堂', '俄式风情，冰雪之城。', 'culture', [], 'center'),
        hotel: P('秋林宾馆', '住宿休息。', 'hotel', [], 'center')
      }
    },
    urumqi: {
      name: '乌鲁木齐', era: 'old',
      intro: '1980年的乌鲁木齐。西域棉海，丝绸古道上的绿洲。',
      places: {
        home: P('大杂院', '兵团家属大杂院，你的落脚点。', 'home', [], 'north'),
        station: P('乌鲁木齐站', '兰新铁路终点，出疆唯一铁路。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        bazar: P('二道桥巴扎', '干果、玉料、皮货，异域风情。', 'market', ['raisin', 'hamiMelon', 'jadeMaterial', 'pineNut', 'woodEar']),
        bingtuan: P('兵团百货', '长绒棉与细羊毛，计划外配额。', 'market', ['longCotton', 'xinganWool', 'soybeanOilN'], 'east'),
        restaurant: P('清真食堂', '手抓饭、烤包子。', 'restaurant', [], 'center'),
        bank: P('中国银行乌鲁木齐分行', '存兑外汇。', 'bank', [], 'center'),
        culture: P('天山脚下 / 达坂城', '大漠孤烟直，长河落日圆。', 'culture', [], 'west'),
        hotel: P('红山宾馆', '住宿休息。', 'hotel', [], 'center')
      }
    },
    hangzhou: {
      name: '杭州', era: 'old',
      intro: '1980年的杭州。江南水乡，丝绸茶叶之乡，文人墨客的精神家园。',
      places: {
        home: P('清河坊老宅', '临河老宅，你的落脚点。', 'home', [], 'north'),
        station: P('杭州站', '沪杭线咽喉。', 'station', [], 'south', { time: 40, energy: 5, hunger: 1, thirst: 1.5 }),
        silk: P('丝绸厂', '真丝绸缎，出口级物资。', 'market', ['silkBolt', 'cloth', 'dacron'], 'east'),
        tea: P('龙井村茶园', '春茶直接产地，绕开层层加价。', 'market', ['longjing', 'teaJasmine', 'yellowWine'], 'west', null, null, { time: 35, energy: 4, hunger: 1, thirst: 1.5 }),
        dock: P('拱宸桥码头', '运河与内河水运，慢而便宜。', 'station', [], 'east'),
        antique: P('苏州平江路古玩摊', '江南旧物，字画瓷器。', 'antique', ['mystery_jar', 'mystery_scroll', 'mystery_bowl', 'mystery_jade'], 'west', { mystery_jar: 4, mystery_scroll: 3, mystery_bowl: 5, mystery_jade: 4 }),
        restaurant: P('楼外楼', '西湖醋鱼、叫花鸡。', 'restaurant', [], 'center'),
        bank: P('中国银行杭州分行', '存兑外汇。', 'bank', [], 'center'),
        culture: P('西湖断桥 / 苏堤', '欲把西湖比西子。', 'culture', [], 'west'),
        hotel: P('湖滨旅馆', '住宿休息。', 'hotel', [], 'center')
      }
    }
  };

  const INTL_OLD = {
    hongkong: {
      name: '香港', currency: 'HKD', lockedHint: '需“港澳通行证”与在穗关系',
      intro: '英属香港，西方资本进入内地唯一跳板。',
      places: {
        home: P('九龙旅社', '落脚歇息的地方。', 'home', [], 'center'),
        station: P('罗湖口岸', '内地通往香港的陆路口岸。', 'station', [], 'south', { time: 30, energy: 4, hunger: 1, thirst: 1.5 }),
        market: P('庙街夜市', '港货、电子、海产，港币交易。', 'market', ['colorTV', 'camera', 'cassette', 'watch', 'crab', 'prawn', 'nylonStocking']),
        auction: P('香港拍卖行', '文物鉴定与拍卖。', 'auction', [], 'center'),
        warehouse: P('葵涌货仓', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('汇丰银行', '港币与外币兑换。', 'bank', [], 'center'),
        restaurant: P('茶餐厅', '丝袜奶茶、烧腊。', 'restaurant', [], 'center'),
        culture: P('维多利亚港 / 太平山', '俯瞰香江夜色。', 'culture', [], 'center')
      }
    },
    tokyo: {
      name: '东京', currency: 'JPY', lockedHint: '需日语证书与公派/商务身份',
      intro: '泡沫前夜的霓虹帝都。',
      places: {
        home: P('新宿小旅馆', '落脚歇息的地方。', 'home', [], 'center'),
        airport: P('成田机场（返程）', '乘机返回北京。', 'station', [], 'far', { time: 60, energy: 6, hunger: 1.5, thirst: 2 }),
        market: P('秋叶原', '电子元器件与家电。', 'market', ['colorTV', 'bwTV', 'camera', 'cassette', 'watch', 'silkBolt']),
        auction: P('东京美术拍卖', '文物拍卖。', 'auction', [], 'center'),
        warehouse: P('东京湾仓库', '租仓、存取货物。', 'warehouse', [], 'east'),
        bank: P('东京银行', '日元服务。', 'bank', [], 'center'),
        restaurant: P('银座料理店', '用餐恢复状态。', 'restaurant', [], 'center'),
        culture: P('上野公园', '樱花与俳句。', 'culture', [], 'center')
      }
    }
  };

  // 旧时城际铁路（1980 绿皮车）
  const OLD_ROUTES = {
    'beijing|guangzhou': { hours: 42, cost: 34 },
    'beijing|wuhan': { hours: 20, cost: 16 },
    'beijing|harbin': { hours: 26, cost: 21 },
    'beijing|urumqi': { hours: 72, cost: 58 },
    'beijing|hangzhou': { hours: 30, cost: 24 },
    'guangzhou|wuhan': { hours: 22, cost: 18 },
    'guangzhou|hangzhou': { hours: 24, cost: 20 },
    'guangzhou|harbin': { hours: 52, cost: 45 },
    'wuhan|harbin': { hours: 34, cost: 28 },
    'wuhan|urumqi': { hours: 56, cost: 46 },
    'wuhan|hangzhou': { hours: 14, cost: 11 },
    'harbin|urumqi': { hours: 60, cost: 50 },
    'harbin|hangzhou': { hours: 42, cost: 36 },
    'urumqi|hangzhou': { hours: 66, cost: 55 }
  };
  // 现代国内交通
  const MODERN_ROUTES = {
    'beijing|shanghai': { hours: 4.5, cost: 553, mode: '高铁' }
  };

  LJ.World = {
    modern: MODERN, intlModern: INTL_MODERN,
    old: OLD, intlOld: INTL_OLD,
    oldRoutes: OLD_ROUTES, modernRoutes: MODERN_ROUTES
  };

  // 货币
  LJ.Currencies = {
    CNY: { name: '人民币', symbol: '¥', rate: 1 },
    USD: { name: '美元', symbol: '$', rate: 0.139 },
    HKD: { name: '港币', symbol: 'HK$', rate: 1.08 },
    JPY: { name: '日元', symbol: '¥', rate: 21.5 },
    EUR: { name: '欧元', symbol: '€', rate: 0.128 },
    GBP: { name: '英镑', symbol: '£', rate: 0.11 },
    KES: { name: '肯尼亚先令', symbol: 'KSh', rate: 18 }
  };
  LJ.CityCurrency = {
    beijing: 'CNY', guangzhou: 'CNY', wuhan: 'CNY', harbin: 'CNY',
    urumqi: 'CNY', hangzhou: 'CNY', shanghai: 'CNY',
    hongkong: 'HKD', tokyo: 'JPY', sanfrancisco: 'USD', london: 'GBP', nairobi: 'KES'
  };
})();
