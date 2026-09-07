/* 洛阳 分册02：特色周边（汤馆早味/水席名菜/盛唐手信/神都体验） */
window.LY_GIFTS = window.LY_GIFTS || [];
window.LY_GIFTS.push(
  /* ---- 洛阳汤与水席（沿用原条目） ---- */
  { id: 'luoyang_niuroutang', name: '洛阳牛肉汤·羊肉汤', icon: '🍲', tag: '食', type: '美食', price: 15, desc: '洛阳人喝汤如喝水：牛肉汤、驴肉汤、豆腐汤。配饼丝泡着吃，"甜咸辣"三选。' },
  { id: 'luoyang_shuixi', name: '洛阳水席', icon: '🍽️', tag: '食', type: '美食', price: 98, desc: '24道菜连汤带水如行云流水，"武皇水席"。牡丹燕菜把萝卜雕成牡丹，国宴级刀工。' },
  { id: 'luoyang_hutang', name: '胡辣汤·不翻汤', icon: '🥣', tag: '食', type: '美食', price: 12, desc: '河南胡辣汤的洛阳版本更"温柔"。不翻汤酸辣开胃，配锅贴是老城夜宵。' },
  { id: 'luoyang_mudan_gao', name: '牡丹饼·银条', icon: '🥮', tag: '食', type: '特产', price: 35, desc: '牡丹花瓣做馅的牡丹饼花香四溢。洛阳银条脆嫩，"唐僧御用"的传说加持。' },
  { id: 'lyg_jiangmian', name: '浆面条', icon: '🍜', tag: '食', type: '美食', price: 8, desc: '绿豆浆发酵成酸浆，下锅煮面条酸香开胃。洛阳人的"心头好"，外地人第一口皱眉、第二口真香。' },
  { id: 'lyg_guotie', name: '小街锅贴', icon: '🥟', tag: '食', type: '美食', price: 10, desc: '西工小街的锅贴底儿金黄，一只只焦脆爆汁。配一碗浆面条，是老洛阳最扎实的午饭。' },
  { id: 'lyg_hutumian', name: '糊涂面', icon: '🍲', tag: '食', type: '美食', price: 10, desc: '玉米糁糊涂汤下手工面，撒芝麻碎青菜。糊糊涂涂一碗，却是豫西人最念的家常味。' },
  { id: 'lyg_yancai', name: '牡丹燕菜', icon: '🥗', tag: '食', type: '美食', price: 28, desc: '水席头牌：萝卜丝细如发丝，汤鲜味美。当年武则天吃后赞不绝口，萝卜从此有了"燕菜"的贵气。' },
  { id: 'lyg_rouhe', name: '偃师肉合', icon: '🥙', tag: '食', type: '美食', price: 8, desc: '火烧夹卤猪头肉，肉肥瘦相间拌蒜汁。偃师人早餐的顶配，一口下去满嘴流油。' },
  /* ---- 特产美酒 ---- */
  { id: 'lyg_dukang', name: '杜康酒', icon: '🍶', tag: '食', type: '特产', price: 80, desc: '"何以解忧，唯有杜康"。酒祖杜康造酒于洛阳，一杯老酒喝的是五千年的华夏酒香。' },
  { id: 'lyg_mudancha', name: '牡丹花茶', icon: '🌸', tag: '食', type: '特产', price: 45, desc: '整朵牡丹烘干入茶，泡开在水里重新绽放。花香清雅，喝的是"一朵花一杯春"。' },
  { id: 'lyg_badajian', name: '洛阳八大件点心', icon: '🎁', tag: '食', type: '特产', price: 40, desc: '牡丹饼、芝麻酥、翻毛月饼拼成"八大件"礼盒。走亲访友拎一盒，老洛阳的体面都在点心里。' },
  /* ---- 盛唐手信（沿用原条目+新增） ---- */
  { id: 'luoyang_tangcai', name: '唐三彩', icon: '🐎', tag: '衣', type: '文创', price: 120, desc: '洛阳唐三彩驼俑马俑"釉色流转"。孟津南石山村匠人手作，"盛唐的颜色"。' },
  { id: 'luoyang_mudan_zhen', name: '牡丹瓷', icon: '🌷', tag: '衣', type: '文创', price: 200, desc: '陶瓷烧出的牡丹花"永不凋谢"。国礼级工艺，摆在家里四季花开。' },
  { id: 'lyg_xia_ju', name: '乳钉纹青铜爵复刻', icon: '🏺', tag: '玩', type: '文创', price: 150, desc: '二里头出土的"华夏第一爵"复刻，夏代青铜的简拙之美。放在案头，是最早中国的名片。' },
  { id: 'lyg_luoyangchan', name: '洛阳铲文创', icon: '🪏', tag: '玩', type: '文创', price: 30, desc: '考古神器洛阳铲做成冰箱贴与书签，半圆铲头造型传神。考古迷最爱，"盗墓工具"的正名之礼。' },
  { id: 'lyg_gongdeng', name: '洛阳宫灯', icon: '🏮', tag: '玩', type: '文创', price: 50, desc: '洛阳宫灯传承千年，木架糊绢纱画花鸟。元宵夜挂一盏，隋唐上元节的灯火就在家里亮起。' },
  { id: 'lyg_chengnixuan', name: '黄河澄泥砚', icon: '🪨', tag: '玩', type: '文创', price: 120, desc: '黄河澄泥千淘万漉烧成砚，与端砚歙砚并称名砚。一方砚台里，沉淀着黄河的细腻。' },
  /* ---- 神都体验（沿用原条目+新增） ---- */
  { id: 'luoyang_hanfu', name: '汉服妆造+跟拍', icon: '👘', tag: '玩', type: '体验', price: 300, desc: '洛邑古城"汉服自由"：妆造+跟拍一条龙。满城唐装宋服，"人均穿越"的沉浸感。' },
  { id: 'luoyang_yeyou', name: '应天门夜游灯光秀', icon: '💡', tag: '行', type: '体验', price: 60, desc: '城门投影重现武皇登基。灯光洒在城墙上的瞬间，"神都"名副其实。' },
  { id: 'luoyang_luoyang_chan', name: '龙门石窟研学讲解', icon: '🎧', tag: '玩', type: '体验', price: 80, desc: '专业讲解员讲"伊阙佛龛"的皇家工程。听懂了造像题记，石窟才算没白来。' },
  { id: 'luoyang_laoshan_chan', name: '老君山金顶索道', icon: '🚡', tag: '行', type: '体验', price: 130, desc: '两级索道直上金顶道观群。雪后金顶"云顶天宫"级画面，随便拍都是壁纸。' },
  { id: 'lyg_yexiao', name: '老城夜市逛吃', icon: '🍢', tag: '玩', type: '体验', price: 30, desc: '从丽景门逛到十字街，汤、饼、水席一路尝过去。嘴不停、脚不停，洛阳的夜就在这股烟火气里。' },
  { id: 'lyg_sancai_up', name: '唐三彩上釉体验', icon: '🎨', tag: '玩', type: '体验', price: 100, desc: '在孟津南石山村跟着老师傅画釉，亲手给马俑上色。烧出来的那件"大作"，全世界独一份。' },
  { id: 'lyg_suzhai', name: '白马寺素斋', icon: '🥗', tag: '食', type: '美食', price: 25, desc: '白马寺的素斋清淡见真味，一碗素面几碟小菜。吃完逛寺，心境都跟着素净下来。' },
  { id: 'lyg_dagu', name: '河洛大鼓书场', icon: '🥁', tag: '玩', type: '体验', price: 60, desc: '河洛大鼓一敲，鼓书艺人用河南腔唱三国唱隋唐。老书场的规矩：茶管够，故事不散场。' },
  { id: 'luoyang_yuan', name: '牡丹园种植体验', icon: '🌱', tag: '玩', type: '体验', price: 88, desc: '春天认领一株牡丹苗，秋天寄来种球。"洛阳牡丹带回家"的独特玩法。' },
  { id: 'luoyang_minsu', name: '老城民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '丽景门旁的院落民宿，露台能望应天门。清晨牛肉汤香从巷口飘来。' }
);
