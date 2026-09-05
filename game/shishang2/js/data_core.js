/* ============================================================
 * data_core.js — 万界店主 核心数据（商品/世界/角色/武功/成就/顾客）
 * 依赖：无。加载顺序应早于 data_acts/* 与 engine.js
 * ============================================================ */
(function(){
  if(!window.SS) window.SS = {};

  /* ---------- 世界图鉴 ---------- */
  SS.WORLDS = {
    earth:{name:"现代地球", icon:"🌆"},
    wanjie:{name:"万界楼", icon:"🏮"},
    sd:{name:"射雕英雄传", icon:"🐎"},
    san:{name:"汉末三国", icon:"🐉"},
    dt:{name:"隋唐演义·大唐", icon:"🗡️"},
    xy:{name:"笑傲江湖", icon:"🌙"},
    yt:{name:"倚天屠龙记", icon:"⛰️"},
    lj:{name:"鹿鼎记", icon:"👑"},
    shen:{name:"神雕侠侣", icon:"🦅"},
    longzhu:{name:"龙珠", icon:"🐒"},
    tq:{name:"神话·大秦", icon:"⚱️"},
    aq:{name:"爱情公寓", icon:"🏠"},
    lx:{name:"陆小凤传奇", icon:"🌸"},
    zj:{name:"僵尸先生", icon:"⚰️"},
    cy:{name:"咒怨", icon:"👻"},
    sx:{name:"尸兄·末世", icon:"🧟"},
    db:{name:"盗墓笔记", icon:"🕳️"},
    kg:{name:"抗战·亮剑", icon:"🎖️"},
    yx:{name:"异形·主神空间", icon:"🛸"},
    fy:{name:"风云", icon:"🌪️"},
    fj:{name:"仙侠万界", icon:"✨"},
    dz:{name:"哆啦A梦未来", icon:"🤖"},
    wl:{name:"无限恐怖", icon:"🌌"},
    jq:{name:"惊奇先生", icon:"📿"},
    wy:{name:"僵尸约会", icon:"🩸"},
    ww:{name:"武侠万界", icon:"⚔️"},
    kr:{name:"抗战·晋西北", icon:"🔫"}
  };

  /* ---------- 星级里程碑 ---------- */
  SS.STARS = [
    {star:1, title:"一星店主", desc:"万界商铺系统绑定成功，从失业青年到万界楼店主。", episodes:["act1"]},
    {star:2, title:"二星店主", desc:"搬空汉末皇帝私库，商品种类激增，万界楼正式成型。", episodes:["act3"]},
    {star:3, title:"三星店主", desc:"交易万界，名动诸天。武道先天大成，员工满编，位面商人之路开启。", episodes:["act23"]}
  ];

  /* ---------- 幕表 ---------- */
  SS.ACT_CONFIG = [
    {id:"act1", title:"系统觉醒",   sub:"第1-2章 · 一星店主",       chapters:"1-2"},
    {id:"act2", title:"位面采购 · 射雕少林", sub:"第3-9章",        chapters:"3-9"},
    {id:"act3", title:"汉末风云",    sub:"第10-13章 · 二星店主",    chapters:"10-13"},
    {id:"act4", title:"大唐战突厥 · 汉末宴会", sub:"第14-19章",     chapters:"14-19"},
    {id:"act5", title:"拍卖会 · 第一日", sub:"第20-28章",           chapters:"20-28"},
    {id:"act6", title:"拍卖会 · 第二日 · 先天境", sub:"第29-34章",  chapters:"29-34"},
    {id:"act7", title:"骠骑营 · 渭水大捷", sub:"第35-40章",         chapters:"35-40"},
    {id:"act8", title:"打折风暴 · 论剑", sub:"第41-48章",           chapters:"41-48"},
    {id:"act9", title:"功德 · 爱情公寓 · 北京决战(上)", sub:"第49-58章", chapters:"49-58"},
    {id:"act10", title:"北京决战(下) · 捉鬼 · 僵尸先生", sub:"第59-67章", chapters:"59-67"},
    {id:"act11", title:"经营 · 位面代理人 · 紫禁之巅", sub:"第68-75章", chapters:"68-75"},
    {id:"act12", title:"华佗 · 高手云集", sub:"第76-84章",          chapters:"76-84"},
    {id:"act13", title:"尸兄 · 安全区与尸潮", sub:"第85-89章",      chapters:"85-89"},
    {id:"act14", title:"尸兄 · 龙右与拍卖造势", sub:"第90-96章",    chapters:"90-96"},
    {id:"act15", title:"尸兄拍卖会 · 林平之", sub:"第97-103章",     chapters:"97-103"},
    {id:"act16", title:"天下第一富 · 商战 · 陈真 · 三国", sub:"第104-108章", chapters:"104-108"},
    {id:"act17", title:"商战十天 · 棒子 · 答辩 · 点将", sub:"第109-115章", chapters:"109-115"},
    {id:"act18", title:"合法倒斗 · 鲁王墓(上)", sub:"第116-120章",  chapters:"116-120"},
    {id:"act19", title:"倒斗 · 玉俑 · 文物 · 会员", sub:"第121-127章", chapters:"121-127"},
    {id:"act20", title:"会员 · 长生 · 契约 · 第一贪", sub:"第128-133章", chapters:"128-133"},
    {id:"act21", title:"抗战德械师 · 平安县城", sub:"第134-138章",  chapters:"134-138"},
    {id:"act22", title:"位面商人 · 异形巢穴", sub:"第139-141章",    chapters:"139-141"},
    {id:"act23", title:"三星店主 · 尾声", sub:"第142章",            chapters:"142"}
  ];

  /* ---------- 商品库（经营用）----------
   * src: earth 用 rmb 进货；world 用 价值点 进货。
   * 售出收益 = 估值 * 0.02（向下取整，至少1）。 */
  SS.GOODS = [
    {id:"pm", name:"泡面", tag:"食物", src:"earth", rmb:5,  vp:60,  icon:"🍜", desc:"现代世界最普通的速食，饿肚子的异界顾客最爱。"},
    {id:"kfc", name:"肯德基套餐", tag:"食物", src:"earth", rmb:40, vp:500, icon:"🍗", desc:"孙悟空一顿能吃一百份的大餐。"},
    {id:"yyh", name:"音乐盒", tag:"宝物", src:"earth", rmb:100, vp:1500, icon:"🎵", desc:"会唱歌的盒子，在古代堪比神器。"},
    {id:"jz", name:"玻璃镜子", tag:"宝物", src:"earth", rmb:30, vp:800, icon:"🪞", desc:"照出人影的神物，汉末贵女最爱。"},
    {id:"bj", name:"白酒", tag:"食物", src:"earth", rmb:120, vp:1000, icon:"🍶", desc:"骠骑营将士的最爱，千杯不醉的张飞喝了也要倒。"},
    {id:"ls", name:"零食大礼包", tag:"食物", src:"earth", rmb:20, vp:200, icon:"🍬", desc:"快乐礼品店的孩子们看到就走不动路。"},
    {id:"mh", name:"漫画书", tag:"文娱", src:"earth", rmb:35, vp:400, icon:"📚", desc:"哆啦A梦想给大雄带的生日礼物。"},
    {id:"sj", name:"智能手机", tag:"科技", src:"earth", rmb:3000, vp:20000, icon:"📱", desc:"异界神仙看了都直呼仙器。"},
    {id:"sxyf", name:"天山雪莲", tag:"药材", src:"world", buyVp:2200, vp:3000, icon:"❄️", desc:"五百年雪莲，九叔师徒穷得只敢看看。"},
    {id:"xhd", name:"小还丹", tag:"丹药", src:"world", buyVp:15, vp:20, icon:"💊", desc:"少林小还丹，一颗增加三年功力。"},
    {id:"dhd", name:"大还丹", tag:"丹药", src:"world", buyVp:900, vp:1000, icon:"💊", desc:"少林大还丹，一颗增加二十年功力。"},
    {id:"qns", name:"千年人参", tag:"药材", src:"world", buyVp:2200, vp:3000, icon:"🌿", desc:"灵参，武者可增一甲子功力。"},
    {id:"qhy", name:"血兰花", tag:"药材", src:"world", buyVp:1500, vp:2000, icon:"🌺", desc:"狂蟒之灾世界特产，可强化血脉解开基因锁。"},
    {id:"qhly", name:"强化药液", tag:"强化", src:"world", buyVp:450, vp:1000, icon:"🧪", desc:"低级基因强化药液，随机觉醒一种异能。"},
    {id:"pty", name:"小蟠桃", tag:"灵果", src:"world", buyVp:400, vp:500, icon:"🍑", desc:"一颗增加三年寿元，固本培元。"},
    {id:"bysg", name:"赛亚人血脉", tag:"血脉", src:"world", buyVp:480, vp:500, icon:"🩸", desc:"低级赛亚人血脉，天赋提升一档，越战越强。"},
    {id:"yxst", name:"异形尸体", tag:"生物", src:"world", buyVp:40, vp:50, icon:"🦂", desc:"异形躯体，主神空间轮回者的恶梦，万界楼的好货。"},
    {id:"gxz", name:"古尸标本", tag:"生物", src:"world", buyVp:45, vp:100, icon:"🧟", desc:"高价回收的二手僵尸鬼怪，量大价优。"},
    {id:"bysd", name:"丧尸精血", tag:"血脉", src:"world", buyVp:90, vp:100, icon:"🩸", desc:"生化危机世界的丧尸精血。"},
    {id:"xcq", name:"竹蜻蜓", tag:"科技", src:"world", buyVp:700, vp:800, icon:"🚁", desc:"戴在头上就能自由飞翔，哆啦A梦出品。"}
  ];

  /* ---------- 顾客池（经营随机客人）----------
   * need 与商品 tag 匹配才能成交；unlockAct 为解锁幕（含）之后出现。 */
  SS.CUSTOMERS = [
    {id:"swk", name:"孙悟空", world:"龙珠", need:"食物", pay:"赛亚人血脉·不识数", quote:"店主，还有吃的东西吗？", unlock:"act1"},
    {id:"ybq", name:"岳不群", world:"笑傲江湖", need:"内力", pay:"武功秘籍", quote:"我愿用华山派所有秘籍，换一颗增加功力的丹药。", unlock:"act1"},
    {id:"cf", name:"陈峰", world:"现代地球", need:"秘籍", pay:"寿元·功德", quote:"店主，紫霞神功不知需要多少寿元？", unlock:"act2"},
    {id:"gj", name:"郭靖(少年)", world:"射雕英雄传", need:"宝物", pay:"黄金", quote:"周大哥，你没有盘缠，我这还有些黄金。", unlock:"act2"},
    {id:"lb", name:"刘辩", world:"汉末三国", need:"护卫", pay:"封地", quote:"我想用整个西凉，请一个厉害的护卫。", unlock:"act3"},
    {id:"lstm", name:"李世民", world:"隋唐演义·大唐", need:"打仗", pay:"千年灵参", quote:"突厥趁我大唐空虚发兵长安，请店主相助！", unlock:"act4"},
    {id:"ax", name:"阿星", world:"功夫", need:"前途", pay:"如来神掌", quote:"看店主骨骼惊奇，这本绝世秘籍，800块卖给你！", unlock:"act4"},
    {id:"zhwj", name:"张无忌", world:"倚天屠龙记", need:"疗伤", pay:"医经·毒经·七伤拳", quote:"店主，还请救我！", unlock:"act5"},
    {id:"cangyuan", name:"苍猿", world:"倚天屠龙记", need:"治病", pay:"小蟠桃", quote:"店主，救我。", unlock:"act5"},
    {id:"mzy", name:"糜竺", world:"汉末三国", need:"商路", pay:"经商才能", quote:"子仲必定尽力。", unlock:"act5"},
    {id:"gaoyao", name:"高要", world:"神话·大秦", need:"恢复", pay:"长生不老药·效忠", quote:"店主，我希望恢复正常的身体。", unlock:"act6"},
    {id:"dlam", name:"哆啦A梦", world:"哆啦A梦未来", need:"礼物", pay:"未来道具", quote:"我想给大雄买一件难忘的生日礼物。", unlock:"act7"},
    {id:"dfbb", name:"东方不败", world:"笑傲江湖", need:"变性", pay:"葵花宝典残篇", quote:"奴家，想变成女人。", unlock:"act7"},
    {id:"cuiwz", name:"崔文子", world:"神话·大秦", need:"丹方", pay:"炼丹天赋", quote:"只要能和丹方药材在一起，就是天下最幸福的事。", unlock:"act7"},
    {id:"zzx", name:"崇祯朱由检", world:"明朝", need:"联军", pay:"关宁铁骑·国运", quote:"我们八国联军，打算去鳌拜的世界逛一逛。", unlock:"act8"},
    {id:"gf", name:"郭靖(神雕)", world:"神雕侠侣", need:"守城", pay:"天道功德", quote:"郭某将一生镇守在襄阳，抵挡蒙古大军。", unlock:"act9"},
    {id:"zxq", name:"曾小贤", world:"爱情公寓", need:"明星", pay:"价值点", quote:"店主，不知这里培不培养大明星？", unlock:"act9"},
    {id:"jius", name:"九叔", world:"僵尸先生", need:"捉鬼", pay:"茅山道术·僵尸", quote:"我们穷的只剩下满屋子的棺材。", unlock:"act10"},
    {id:"malx", name:"马小玲", world:"我和僵尸有个约会", need:"捉鬼", pay:"驱魔", quote:"小弟弟，站在这别说话，姐姐带你刷经验。", unlock:"act10"},
    {id:"wxe", name:"王小二", world:"中国惊奇先生", need:"捉鬼", pay:"神鬼七杀令", quote:"破杀令！", unlock:"act10"},
    {id:"xmcs", name:"西门吹雪", world:"陆小凤传奇", need:"比剑", pay:"剑术·决斗", quote:"因为他是叶孤城。", unlock:"act11"},
    {id:"ygc", name:"叶孤城", world:"陆小凤传奇", need:"比剑", pay:"剑术·决斗", quote:"月圆之夜，紫禁之巅，一剑西来，天外飞仙。", unlock:"act11"},
    {id:"lsh", name:"李寻欢", world:"多情剑客无情剑", need:"酒", pay:"小李飞刀", quote:"喝最烈的酒，玩最快的刀。", unlock:"act11"},
    {id:"bxfs", name:"白小飞", world:"尸兄·末世", need:"变强", pay:"气运·主角光环", quote:"我要变强，什么代价我都愿意付出！", unlock:"act13"},
    {id:"qqfj", name:"权紫峰", world:"尸兄·末世", need:"变强", pay:"风系异能·十年寿命", quote:"我想立刻成为一个高手！", unlock:"act13"},
    {id:"lz", name:"龙右", world:"尸兄·末世", need:"不死", pay:"不死之身精血", quote:"为什么就不让我装一个完整的逼？", unlock:"act14"},
    {id:"syyw", name:"沈万三", world:"万界诸天", need:"商战", pay:"商业奇才", quote:"我沈万三，要把万界楼的生意做到诸天万界！", unlock:"act16"},
    {id:"wlq", name:"吴邪", world:"盗墓笔记", need:"合作", pay:"倒斗·古墓", quote:"国家需要我？", unlock:"act18"},
    {id:"zql", name:"张起灵", world:"盗墓笔记", need:"神秘", pay:"倒斗·古墓", quote:"你活的够久了，可以死了。", unlock:"act18"},
    {id:"lxx", name:"李萧毅", world:"无限恐怖", need:"保命", pay:"奖励点数九成", quote:"啊！不要啊！我不想死啊！", unlock:"act20"},
    {id:"zyq", name:"郑吒", world:"无限恐怖", need:"回家", pay:"奖励点数", quote:"10000奖励点数，就能送我回地球？", unlock:"act20"},
    {id:"lxg", name:"林平之", world:"笑傲江湖", need:"变强", pay:"寿元", quote:"我用寿命！", unlock:"act15"},
    {id:"htj", name:"皇太极", world:"女真·后金", need:"求援", pay:"清朝宝藏·龙气", quote:"神仙，救我女真一族！", unlock:"act15"},
    {id:"hzs", name:"和珅", world:"清朝", need:"防身", pay:"大把价值点", quote:"看见没有，我又花了一千价值点。", unlock:"act20"}
  ];

  /* ---------- 角色图鉴 ---------- */
  SS.CHARS = [
    {id:"zy", name:"周阳", world:"万界楼", role:"万界楼店主，本书主角", unlock:"act1"},
    {id:"swk", name:"孙悟空", world:"龙珠", role:"赛亚人少年，实习员工，大胃王", unlock:"act1"},
    {id:"ybq", name:"岳不群", world:"笑傲江湖", role:"华山派掌门，君子剑", unlock:"act1"},
    {id:"gj", name:"郭靖", world:"射雕/神雕", role:"射雕少年与神雕郭大侠", unlock:"act2"},
    {id:"hr", name:"黄蓉", world:"射雕/神雕", role:"郭夫人，冰雪聪明", unlock:"act2"},
    {id:"jy", name:"觉远", world:"射雕英雄传", role:"藏经阁看守，张三丰之师", unlock:"act2"},
    {id:"lb", name:"刘辩", world:"汉末三国", role:"大汉皇帝，小皇帝", unlock:"act3"},
    {id:"lbd", name:"吕布", world:"汉末三国", role:"左将军，骠骑营，方天画戟", unlock:"act3"},
    {id:"cc", name:"曹操", world:"汉末三国", role:"执金吾，乱世枭雄", unlock:"act3"},
    {id:"jy2", name:"贾诩", world:"汉末三国", role:"并州牧，毒士", unlock:"act3"},
    {id:"lstm", name:"李世民", world:"隋唐演义", role:"大唐皇帝，贞观之治", unlock:"act4"},
    {id:"ax", name:"阿星", world:"功夫", role:"小混混，卖如来神掌", unlock:"act4"},
    {id:"wy", name:"王颖", world:"现代地球", role:"周阳高中班花同学", unlock:"act4"},
    {id:"zhwj", name:"张无忌", world:"倚天屠龙记", role:"命运之子，寒毒缠身", unlock:"act5"},
    {id:"cangyuan", name:"苍猿", world:"倚天屠龙记", role:"腹藏九阳真经的老猿", unlock:"act5"},
    {id:"bm", name:"布玛", world:"龙珠", role:"天才科学家，实习员工", unlock:"act5"},
    {id:"mzy", name:"糜竺", world:"汉末三国", role:"徐州富商，拍卖会主持", unlock:"act5"},
    {id:"gaoyao", name:"高要", world:"神话·大秦", role:"实习员工，秦国掌控者", unlock:"act6"},
    {id:"zb", name:"鳌拜", world:"鹿鼎记", role:"满清第一勇士", unlock:"act5"},
    {id:"wxb", name:"韦小宝", world:"鹿鼎记", role:"小桂子，命运之子", unlock:"act10"},
    {id:"dlam", name:"哆啦A梦", world:"哆啦A梦未来", role:"机器猫，百宝袋", unlock:"act7"},
    {id:"dfbb", name:"东方不败", world:"笑傲江湖", role:"日月神教教主（变性后）", unlock:"act7"},
    {id:"cuiwz", name:"崔文子", world:"神话·大秦", role:"炼丹师，炼制长生不老药", unlock:"act7"},
    {id:"fqy", name:"风清扬", world:"笑傲江湖", role:"独孤九剑传人", unlock:"act8"},
    {id:"ygc", name:"叶孤城", world:"陆小凤传奇", role:"白云城主，天外飞仙", unlock:"act8"},
    {id:"xmcs", name:"西门吹雪", world:"陆小凤传奇", role:"剑神", unlock:"act8"},
    {id:"yangguo", name:"杨过", world:"神雕侠侣", role:"独臂神雕大侠", unlock:"act8"},
    {id:"zsf", name:"张三丰", world:"倚天屠龙记", role:"武当祖师，武林神话", unlock:"act8"},
    {id:"zjb", name:"张君宝", world:"神雕侠侣", role:"小沙弥，未来的张三丰", unlock:"act8"},
    {id:"gx", name:"郭襄", world:"神雕侠侣", role:"小东邪，峨眉祖师", unlock:"act8"},
    {id:"zxq", name:"曾小贤", world:"爱情公寓", role:"好男人，历史学双硕士", unlock:"act9"},
    {id:"hyf", name:"胡一菲", world:"爱情公寓", role:"暴力御姐", unlock:"act9"},
    {id:"zzx", name:"朱由检", world:"明朝", role:"崇祯皇帝，八国联军发起人", unlock:"act9"},
    {id:"yuefei", name:"岳飞", world:"宋朝", role:"岳家军统帅", unlock:"act9"},
    {id:"jius", name:"九叔", world:"僵尸先生", role:"茅山道士", unlock:"act10"},
    {id:"malx", name:"马小玲", world:"我和僵尸有个约会", role:"马家第40代传人", unlock:"act10"},
    {id:"wxe", name:"王小二", world:"中国惊奇先生", role:"神鬼七杀令传人", unlock:"act10"},
    {id:"bxfs", name:"白小飞", world:"尸兄·末世", role:"主角，末世幸存者", unlock:"act13"},
    {id:"lz", name:"龙右", world:"尸兄·末世", role:"千年尸王，不死之身", unlock:"act14"},
    {id:"lzg", name:"朱无视", world:"天下第一", role:"铁胆神侯，吸功大法", unlock:"act8"},
    {id:"syyw", name:"沈万三", world:"万界诸天", role:"商圣候选，万界楼实习员工", unlock:"act16"},
    {id:"fanli", name:"范蠡", world:"春秋", role:"商圣，股神", unlock:"act16"},
    {id:"luofu", name:"吕不韦", world:"寻秦记·大秦", role:"奇货可居的巨商", unlock:"act16"},
    {id:"wqb", name:"吴三省", world:"盗墓笔记", role:"南派土夫子巨头", unlock:"act18"},
    {id:"wq", name:"吴邪", world:"盗墓笔记", role:"古董店老板", unlock:"act18"},
    {id:"zql", name:"张起灵", world:"盗墓笔记", role:"神秘闷油瓶", unlock:"act18"},
    {id:"lxx", name:"李萧毅", world:"无限恐怖", role:"轮回者，契约者", unlock:"act20"},
    {id:"ly", name:"李云龙", world:"亮剑·抗战", role:"第五快速反应旅旅长", unlock:"act21"},
    {id:"cyl", name:"楚云飞", world:"亮剑·抗战", role:"晋绥军358团团长", unlock:"act21"},
    {id:"xs", name:"黄裳", world:"盗墓笔记", role:"考古专家组组长助手", unlock:"act18"},
    {id:"cf", name:"陈峰", world:"现代地球", role:"万界楼顾客，用十年寿元买紫霞神功", unlock:"act2"},
    {id:"ysxc", name:"易小川", world:"神话·大秦", role:"穿越者，与玉漱相守", unlock:"act6"},
    {id:"xhl", name:"完颜阿骨打", world:"金国", role:"金太祖，女真雄主", unlock:"act6"},
    {id:"dlm", name:"哆啦A梦", world:"哆啦A梦未来", role:"机器猫，未来道具百宝袋", unlock:"act7"},
    {id:"lxf", name:"陆小凤", world:"陆小凤传奇", role:"四条眉毛，灵犀一指", unlock:"act8"},
    {id:"lsh", name:"李寻欢", world:"多情剑客无情剑", role:"小李飞刀，例不虚发", unlock:"act11"},
    {id:"yy", name:"岳飞", world:"宋朝", role:"岳家军统帅，八国联军主帅", unlock:"act9"},
    {id:"qqjf", name:"权紫峰", world:"尸兄·末世", role:"风系异能觉醒者", unlock:"act13"},
    {id:"fl", name:"范蠡", world:"春秋", role:"商圣，十天商战股神", unlock:"act16"},
    {id:"lfb", name:"吕不韦", world:"寻秦记·大秦", role:"奇货可居的巨商", unlock:"act16"},
    {id:"syw", name:"沈万三", world:"万界诸天", role:"商业奇才，万界楼实习员工", unlock:"act16"},
    {id:"lpz", name:"林平之", world:"笑傲江湖", role:"福威镖局少东家", unlock:"act15"}
  ];

  /* ---------- 武功库（修炼菜单）---------- */
  SS.SKILLS = [
    {id:"zxsc", name:"紫霞神功·前二重", cost:10, wb:1, unlock:"act1", desc:"华山派掌门内功，练成可生真气。周阳的第一门武学。"},
    {id:"jlzj2", name:"九阳真经·前四重", cost:5000, wb:3, unlock:"act2", desc:"斗酒僧所创顶级武学，阴阳调和，百毒不侵。"},
    {id:"jlzj5", name:"九阳真经·全卷", cost:10000, wb:5, unlock:"act6", desc:"九阳大成，先天境小成巅峰，真气自行运转。"},
    {id:"jzq", name:"金钟罩", cost:10000, wb:4, unlock:"act14", desc:"原始本金钟罩，十二道玄关全开，护体罡气。"},
    {id:"qsq", name:"七伤拳", cost:1500, wb:4, unlock:"act14", desc:"崆峒派绝学，专伤五脏六腑，破不死之身。"},
    {id:"ywdj", name:"一苇渡江", cost:8000, wb:4, unlock:"act14", desc:"达摩所创顶级轻功，疾速身法。"},
    {id:"rlsc", name:"如来神掌", cost:0, wb:6, unlock:"act4", desc:"释迦摩尼所创究极武学，一掌山河断流。剧情习得第一式。"},
    {id:"bsj", name:"变身术", cost:0, wb:1, unlock:"act4", desc:"乌龙所授低级秘术，随心变化外形。"},
    {id:"tdg", name:"铁档功", cost:50, wb:1, unlock:"act10", desc:"中级武学，专练胯下防御……只能防御，别无他用。"},
    {id:"ddjj", name:"独孤九剑", cost:8000, wb:5, unlock:"act16", desc:"独孤求败所创，破尽天下万法。"},
    {id:"mssd", name:"茅山道术", cost:1000, wb:1, unlock:"act10", desc:"驱邪镇僵，克一切妖魔鬼怪。"},
    {id:"yjg", name:"易筋经", cost:8000, wb:4, unlock:"act8", desc:"少林镇派绝学，中正平和，进境神速。"}
  ];

  /* ---------- 成就 ---------- */
  SS.ACHIEVES = [
    {id:"start", name:"命运转折", desc:"获得万界商铺系统，踏上店主之路", cond:{act:["act1"]}},
    {id:"guoshi", name:"大汉国师", desc:"脚踢董卓，平定西凉军", cond:{act:["act3"]}},
    {id:"two_star", name:"二星店主", desc:"万界楼正式成型", cond:{act:["act3"]}},
    {id:"paimai", name:"拍卖会第一人", desc:"成功举办黄级拍卖会", cond:{act:["act5"]}},
    {id:"xian_tian", name:"先天境", desc:"九阳大成，跨入先天", cond:{act:["act6"]}},
    {id:"tujue", name:"大破突厥", desc:"骠骑营渭水大捷", cond:{act:["act7"]}},
    {id:"buguo", name:"千种商品", desc:"万界楼初具规模", cond:{act:["act7"]}},
    {id:"lunjian", name:"剑道论武", desc:"见证叶孤城与杨过论剑", cond:{act:["act8"]}},
    {id:"bajing", name:"八国联军", desc:"八个皇帝联手打爆北京城", cond:{act:["act10"]}},
    {id:"zhuogui", name:"捉鬼天团", desc:"咒怨伽椰子一战成名", cond:{act:["act10"]}},
    {id:"daizhiren", name:"位面代理人", desc:"开启免薪用人模式", cond:{act:["act11"]}},
    {id:"zijingzhi", name:"紫禁之巅", desc:"见证一剑西来天外飞仙", cond:{act:["act11"]}},
    {id:"shixiong", name:"尸兄前线", desc:"H市安全区守住了", cond:{act:["act13"]}},
    {id:"longyou", name:"留下一臂", desc:"放走尸王龙右，留下一条胳膊", cond:{act:["act14"]}},
    {id:"gaolican", name:"我喜欢吃高丽参", desc:"一句话平定朝鲜", cond:{act:["act15"]}},
    {id:"gupiao", name:"股神范蠡", desc:"见证十天商战奇迹", cond:{act:["act16"]}},
    {id:"daodou", name:"合法倒斗", desc:"国家特级专家组开挖鲁王墓", cond:{act:["act18"]}},
    {id:"yuyong", name:"玉俑到手", desc:"三千年玉俑重见天日", cond:{act:["act19"]}},
    {id:"huiyuan", name:"会员制度", desc:"黑铁会员卡体系上线", cond:{act:["act20"]}},
    {id:"kangzhan", name:"德械十二师", desc:"平安县城练兵大捷", cond:{act:["act21"]}},
    {id:"weishang", name:"位面商人", desc:"主神空间首秀，收割奖励点数", cond:{act:["act22"]}},
    {id:"three_star", name:"三星店主", desc:"商通万界，名动诸天", cond:{act:["act23"]}}
  ];

  /* ---------- 名场面图鉴 ---------- */
  SS.MEMS = [
    {id:"yuelun", text:"月圆之夜，紫禁之巅，一剑西来，天外飞仙。", src:"西门吹雪 × 叶孤城"},
    {id:"gaolican", text:"我喜欢吃高丽参。", src:"周阳 · 一句定朝鲜"},
    {id:"liuyi", text:"留下一臂，自行离去。", src:"周阳 × 尸王龙右"},
    {id:"chudong", text:"叮咚！万界商铺系统融合成功！", src:"命运的转折点"},
    {id:"dashou", text:"你见过从天而降的掌法吗？", src:"如来神掌"},
    {id:"jiuseng", text:"贫僧，只是来买一瓶消炎水。", src:"晦聪方丈"},
    {id:"woshou", text:"你知道吗？我出手，我自己都怕。", src:"周阳 × 龙右单挑"},
    {id:"jingwu", text:"你活得够久了，可以死了。", src:"张起灵 × 鲁殇王"},
    {id:"zhengzha", text:"我们是宇宙第一强国！", src:"高丽头目"},
    {id:"zhuojiu", text:"我要变强，什么代价我都愿意付出！", src:"白小飞"},
    {id:"sanxing", text:"商通万界，让所有人给我打工。", src:"周阳 · 三星店主"},
    {id:"zhiwei", text:"救人！任何代价都行！", src:"步惊云"},
    {id:"woshipushang", text:"我是一个游离主神空间外的位面商人。", src:"周阳 × 轮回者"},
    {id:"xiuxian", text:"玉俑，这可是神器，穿上就会返老还童。", src:"鲁殇王墓"}
  ];

  /* ---------- 武道境界 ---------- */
  SS.WB = ["", "后天初期", "后天小成", "后天大圆满", "先天小成", "先天小成巅峰", "先天大成"];

  /* ---------- 数据校验（控制台运行） ---------- */
  SS.__validate = function(){
    var errs = [];
    var seen = {};
    (SS.ACT_CONFIG||[]).forEach(function(a){ seen[a.id]=1; });
    var acts = SS.ACTS||{};
    Object.keys(acts).forEach(function(actId){
      if(!seen[actId]) errs.push("幕未注册:"+actId);
      var scenes = acts[actId];
      var ids = {};
      scenes.forEach(function(sc){
        if(ids[sc.id]) errs.push(actId+": 重复场景id "+sc.id);
        ids[sc.id]=1;
        if(!sc.lines || !sc.lines.length) errs.push(actId+"/"+sc.id+": 无对白行");
        var hasExit = (sc.choices && sc.choices.length) || sc.then;
        if(!hasExit) errs.push(actId+"/"+sc.id+": 无出口");
        (sc.choices||[]).forEach(function(c,i){
          if(c.goto && !scenes.some(function(x){return x.id===c.goto;}))
            errs.push(actId+"/"+sc.id+": choice"+i+" goto 不存在 "+c.goto);
        });
        if(sc.then && sc.then !== "THE_END" && !scenes.some(function(x){return x.id===sc.then;}))
          errs.push(actId+"/"+sc.id+": then 不存在 "+sc.then);
      });
    });
    console.log(errs.length?("校验失败 "+errs.length+" 条:\n"+errs.join("\n")):"✓ 校验通过");
    return errs;
  };
})();
