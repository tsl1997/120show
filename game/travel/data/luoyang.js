/* ============ 河南·洛阳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'luoyang',
    name: '洛阳',
    country: '中国',
    cc: 'CN',
    province: '河南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🌸',
    desc: '十三朝古都：龙门石窟的卢舍那大佛微笑千年，四月满城牡丹动京城，一碗牛肉汤配饼丝，神都的早晨就此开启。',
    travel: [{ name: '高铁', icon: '🚄', cost: 280 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: [
      { id: 'luoyang_longmen', name: '龙门石窟', icon: '🗿', price: 90, desc: '世界文化遗产，十万余尊造像刻在伊河两岸崖壁。卢舍那大佛"东方蒙娜丽莎"，夜游灯光更震撼。' },
      { id: 'luoyang_baima', name: '白马寺', icon: '🛕', price: 35, desc: '中国第一古刹，佛教传入中国的第一座官办寺院。印度、泰国、缅甸风格佛殿齐聚，"国际佛寺朋友圈"。' },
      { id: 'luoyang_mudan', name: '王城公园·中国国花园', icon: '🌸', price: 30, desc: '四月牡丹花会，"唯有牡丹真国色"。姚黄魏紫争艳，全城赏花人潮如织，"洛阳的春天是牡丹味的"。' },
      { id: 'luoyang_lijing', name: '丽景门·洛邑古城', icon: '🏮', price: 0, desc: '"不到丽景门，枉来洛阳城"。洛邑古城夜色中满城汉服，"穿越浓度"全国最高。' },
      { id: 'luoyang_tianshu', name: '应天门·明堂天堂', icon: '🏯', price: 120, desc: '隋唐洛阳城国家遗址公园，武则天的"神都"宫城。应天门灯光秀投影重现盛唐，气势恢宏。' },
      { id: 'luoyang_bowuguan', name: '洛阳博物馆', icon: '🏺', price: 0, desc: '唐三彩的马肥釉艳，曹魏白玉杯"冰清玉洁"。十三朝的家底，免费看个够。' },
      { id: 'luoyang_laoyang', name: '老君山', icon: '⛰️', price: 100, desc: '"远赴人间惊鸿宴，老君山上一人间"。金顶雪景火遍全网，云海之上金殿耀眼。' },
    ],
    souvenirs: [
      { id: 'luoyang_niuroutang', name: '洛阳牛肉汤·羊肉汤', icon: '🍲', tag: '食', type: '美食', price: 15, desc: '洛阳人喝汤如喝水：牛肉汤、驴肉汤、豆腐汤。配饼丝泡着吃，"甜咸辣"三选。' },
      { id: 'luoyang_shuixi', name: '洛阳水席', icon: '🍽️', tag: '食', type: '美食', price: 98, desc: '24道菜连汤带水如行云流水，"武皇水席"。牡丹燕菜把萝卜雕成牡丹，国宴级刀工。' },
      { id: 'luoyang_hutang', name: '胡辣汤·不翻汤', icon: '🥣', tag: '食', type: '美食', price: 12, desc: '河南胡辣汤的洛阳版本更"温柔"。不翻汤酸辣开胃，配锅贴是老城夜宵。' },
      { id: 'luoyang_mudan_gao', name: '牡丹饼·银条', icon: '🥮', tag: '食', type: '特产', price: 35, desc: '牡丹花瓣做馅的牡丹饼花香四溢。洛阳银条脆嫩，"唐僧御用"的传说加持。' },
      { id: 'luoyang_tangcai', name: '唐三彩', icon: '🐎', tag: '衣', type: '文创', price: 120, desc: '洛阳唐三彩驼俑马俑"釉色流转"。孟津南石山村匠人手作，"盛唐的颜色"。' },
      { id: 'luoyang_mudan_zhen', name: '牡丹瓷', icon: '🌷', tag: '衣', type: '文创', price: 200, desc: '陶瓷烧出的牡丹花"永不凋谢"。国礼级工艺，摆在家里四季花开。' },
      { id: 'luoyang_hanfu', name: '汉服妆造+跟拍', icon: '👘', tag: '玩', type: '体验', price: 300, desc: '洛邑古城"汉服自由"：妆造+跟拍一条龙。满城唐装宋服，"人均穿越"的沉浸感。' },
      { id: 'luoyang_yeyou', name: '应天门夜游灯光秀', icon: '💡', tag: '行', type: '体验', price: 60, desc: '城门投影重现武皇登基。灯光洒在城墙上的瞬间，"神都"名副其实。' },
      { id: 'luoyang_luoyang_chan', name: '龙门石窟研学讲解', icon: '🎧', tag: '玩', type: '体验', price: 80, desc: '专业讲解员讲"伊阙佛龛"的皇家工程。听懂了造像题记，石窟才算没白来。' },
      { id: 'luoyang_laoshan_chan', name: '老君山金顶索道', icon: '🚡', tag: '行', type: '体验', price: 130, desc: '两级索道直上金顶道观群。雪后金顶"云顶天宫"级画面，随便拍都是壁纸。' },
      { id: 'luoyang_yuan', name: '牡丹园种植体验', icon: '🌱', tag: '玩', type: '体验', price: 88, desc: '春天认领一株牡丹苗，秋天寄来种球。"洛阳牡丹带回家"的独特玩法。' },
      { id: 'luoyang_minsu', name: '老城民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '丽景门旁的院落民宿，露台能望应天门。清晨牛肉汤香从巷口飘来。' },
    ],
    stories: [
      { id: 'luoyang_story_mudan', name: '牡丹花会四十年', icon: '🌸', desc: '1983年首届牡丹花会至今，"一城人争睹一城花"。武则天贬牡丹的传说让洛阳牡丹更有脾气：烧焦仍开花，"焦骨牡丹"。' },
      { id: 'luoyang_story_shisanchao', name: '十三朝古都的底气', icon: '🏛️', desc: '夏商周汉魏隋唐……洛阳建都史超1500年。"若问古今兴废事，请君只看洛阳城"。' },
      { id: 'luoyang_story_lushe', name: '卢舍那大佛的"武则天脸"', icon: '🗿', desc: '传说卢舍那大佛按武则天容貌雕凿。17米高的大佛嘴角微笑，"东方的蒙娜丽莎"。' },
      { id: 'luoyang_story_baima', name: '白马驮经的由来', icon: '🐎', desc: '汉明帝夜梦金人，遣使西域请来高僧与佛经，白马驮归。"中国第一古刹"由此得名。' },
      { id: 'luoyang_story_hanfu', name: '洛邑古城的"汉服浓度"', icon: '👘', desc: '傍晚的洛邑古城十步一个"公主"。汉服店与妆造铺密度全国第一，"穿越"是洛阳的日常。' },
      { id: 'luoyang_story_tang', name: '水席为什么"水"', icon: '🍲', desc: '24道菜全部带汤上桌，一道接一道如行云流水。当年武皇宴客的标准流程，"汤汤水水都是讲究"。' },
    ],
  });
})();
