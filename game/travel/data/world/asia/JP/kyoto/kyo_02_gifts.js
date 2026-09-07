/* 京都府 分册02：特色周边（京料理/茶与酒/町家手作/祇园体验） */
window.KYO_GIFTS = window.KYO_GIFTS || [];
window.KYO_GIFTS.push(
  /* ---- 京料理（沿用原条目） ---- */
  { id: 'kyoto_kaiseki', name: '怀石料理', icon: '🍱', tag: '食', type: '美食', price: 350, desc: '一汁三菜的"高级日料之魂"，旬物摆盘如山水画。豆腐、鲷鱼、栗子各归其位，吃的是季节本身。' },
  { id: 'kyoto_yudofu', name: '汤豆腐', icon: '🍲', tag: '食', type: '美食', price: 100, desc: '南禅寺门前的百年豆腐料理，昆布汤里轻煮嫩豆腐。蘸柚子酱油，清淡到让味蕾重启。' },
  { id: 'kyoto_matcha_full', name: '抹茶全家福', icon: '🍵', tag: '食', type: '美食', price: 80, desc: '抹茶荞麦面、抹茶蕨饼、抹茶白玉一字排开。宇治就在隔壁，京都的"绿色"可以吃一天。' },
  { id: 'kyoto_kyo_wagashi', name: '京果子', icon: '🍡', tag: '食', type: '美食', price: 60, desc: '练切菓子捏成樱花、枫叶、小兔子，一天吃完就过季。配一碗现打抹茶，茶道的入门甜点。' },
  { id: 'kyog_obanzai', name: 'おばんざい町家料理', icon: '🍲', tag: '食', type: '美食', price: 90, desc: '京町家妈妈的小钵家常菜，一碟渍物、一块烤鱼、一碗煮物。京料理的温柔，都在小小的盘子里。' },
  { id: 'kyog_shojin', name: '精进料理', icon: '🥗', tag: '食', type: '美食', price: 180, desc: '寺庙里的全素斋，用当季蔬菜与豆制品做出山海之味。精进料理教人"把一顿饭也吃成修行"。' },
  { id: 'kyog_dashimaki', name: 'だし巻き卵', icon: '🍳', tag: '食', type: '美食', price: 40, desc: '关西风的高汤玉子烧，层层卷起、柔软湿润。甜口的天王寺味与咸口的京都味，各有一派信徒。' },
  { id: 'kyog_yuba', name: '汤叶·豆皮名物', icon: '🥢', tag: '食', type: '特产', price: 50, desc: '豆浆表面揭起的一层汤叶，生汤叶蘸酱油入口即化。京都的豆香，一半在豆腐一半在这层薄皮里。' },
  { id: 'kyog_kawadoko', name: '鸭川纳凉床料理', icon: '🌉', tag: '食', type: '美食', price: 200, desc: '夏天鸭川边搭起的纳凉床，席地而坐吃会席。河风、流水与灯笼，京都夏夜的"高级纳凉"。' },
  /* ---- 茶与酒（沿用原条目+新增） ---- */
  { id: 'kyoto_sake_fushimi', name: '伏见清酒', icon: '🍶', tag: '食', type: '饮品', price: 70, desc: '月桂冠、黄樱的软水清酒甘口顺滑。酒藏一条街可试饮，酒瓶插在河边像小旗子。' },
  { id: 'kyog_sakagura', name: '伏见酒藏见学', icon: '🏭', tag: '玩', type: '体验', price: 100, desc: '走一趟月桂冠大仓纪念馆，看酒桶与酵母，试饮三杯。软水清酒的甜，是伏见地下水的礼物。' },
  { id: 'kyog_machagrind', name: '宇治·石臼磨抹茶', icon: '🪨', tag: '玩', type: '体验', price: 120, desc: '在茶铺亲手转动石臼磨抹茶，粉香慢慢飘起来。现磨的那碗，比成品甜三分。' },
  /* ---- 渍物与手信（沿用原条目+新增） ---- */
  { id: 'kyoto_tsukemono', name: '京都渍物', icon: '🥬', tag: '食', type: '特产', price: 40, desc: '千枚渍、柴渍是京都人餐桌的"和食呼吸"。锦市场按克卖，甜咸酸脆全在一小碟里。' },
  { id: 'kyoto_yatsuhashi', name: '八桥', icon: '🥮', tag: '食', type: '特产', price: 50, desc: '肉桂皮香的生八桥与烤脆的八桥饼，京都手信之王。红色包装一提，全世界都知道你来了京都。' },
  { id: 'kyog_konpeito', name: '金平糖·绿寿庵清水', icon: '🍬', tag: '食', type: '特产', price: 80, desc: '百年老铺手工熬出的一颗颗星形结晶，一锅要转十四天。京都最"贵"的甜，甜得慢慢吞吞。' },
  { id: 'kyoto_furoshiki', name: '风吕敷包袱布', icon: '🎀', tag: '衣', type: '文创', price: 60, desc: '一块布包出所有形状的京都智慧。西阵织纹样、友禅染图腾，学三种包法就能出门炫技。' },
  { id: 'kyoto_yuzen', name: '友禅染小物', icon: '🎨', tag: '衣', type: '文创', price: 120, desc: '京友禅染的和风扇、手帕、零钱包。一笔一色都是手工，金线勾边贵气内敛。' },
  { id: 'kyog_kyosensu', name: '京扇子', icon: '🪭', tag: '玩', type: '文创', price: 100, desc: '京扇子把和纸与竹骨裁成风雅，绘上友禅或金箔。夏日一摇，扇出的都是京都的风。' },
  { id: 'kyog_hashi', name: '京漆器·箸', icon: '🥢', tag: '玩', type: '文创', price: 150, desc: '京漆器一层层刷出润泽，莳绘的筷子夹起的不仅是饭。一双好筷，让一顿饭有了仪式。' },
  { id: 'kyog_koh', name: '京线香·御香', icon: '🕯️', tag: '玩', type: '文创', price: 60, desc: '京都老香铺的线香，白檀与沉香的烟火气淡雅。点一支，房间就有寺庙的安心感。' },
  /* ---- 体验与住宿（沿用原条目+新增） ---- */
  { id: 'kyoto_kimono_rental', name: '和服租赁漫步', icon: '👘', tag: '玩', type: '体验', price: 300, desc: '清水坂选一套真丝和服，发型发饰全套。走在千年石板路上，木屐声自己就会变慢。' },
  { id: 'kyoto_tea_ceremony', name: '茶道体验', icon: '🫖', tag: '玩', type: '体验', price: 150, desc: '茶室里跪坐、转碗、三口半。老师轻声说"一期一会"，这碗抹茶从此有了重量。' },
  { id: 'kyoto_rickshaw', name: '岚山人力车', icon: '🛺', tag: '行', type: '体验', price: 180, desc: '车夫一身藏青短打，拉你穿过竹林并全程导游。跑上坡还能稳稳加速，服务与体能双满分。' },
  { id: 'kyog_pottery', name: '清水烧陶艺体验', icon: '🏺', tag: '玩', type: '体验', price: 120, desc: '在清水烧工房拉坯、上釉，捏一只歪歪的茶碗。烧好后寄回家，从此喝茶都有了京都记忆。' },
  { id: 'kyog_maiko', name: '舞伎变身体验', icon: '💄', tag: '玩', type: '体验', price: 400, desc: '专业化妆师帮你戴上舞伎白妆与发髻，拍照留念。两小时的"花街一日梦"，比想象中更沉。' },
  { id: 'kyog_zazen', name: '坐禅·写经体验', icon: '🧘', tag: '玩', type: '体验', price: 120, desc: '天还没亮就进寺坐禅，听晨钟诵经，再抄一段心经。腿麻之后的那阵安静，是旅行最贵的一课。' },
  { id: 'kyoto_ryokan', name: '京町家旅馆一晚', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '百年木造町家改的旅馆，庭园枯山水推窗可见。榻榻米上睡一晚，早晨被寺庙的钟声叫醒。' }
);
