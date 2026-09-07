/* 首尔 分册02：特色周边（烤肉/参鸡汤/泡菜/KPOP/韩服/汗蒸幕/体验） */
window.KR_GIFTS = window.KR_GIFTS || [];
window.KR_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'seoul_samgyetang', name: '参鸡汤', icon: '🍲', tag: '食', type: '美食', price: 100, desc: '整童子鸡塞糯米人参红枣炖到脱骨，汤白如奶。韩国人"以热制热"的伏天标配，喝完汗都带着人参味。' },
  { id: 'seoul_bulgogi', name: '韩式烤肉', icon: '🥩', tag: '食', type: '美食', price: 120, desc: '炭火现烤雪花牛五花，生菜包肉配蒜瓣辣酱。服务员帮烤还帮剪，"包饭"手势学会了才算入门。' },
  { id: 'seoul_bibimbap', name: '石锅拌饭', icon: '🍚', tag: '食', type: '美食', price: 50, desc: '滚烫石锅把锅巴烙得金黄，拌入辣酱与煎蛋。彩虹配菜先拍照再搅拌，是韩国料理的仪式。' },
  { id: 'seoul_tteokbokki', name: '辣炒年糕', icon: '🍢', tag: '食', type: '美食', price: 25, desc: '甜辣酱裹着年糕鱼饼咕嘟冒泡。路摊三件套：炒年糕、鱼糕串、血肠，站着吃完才算地道。' },
  { id: 'seoul_kimchi', name: '泡菜·鱼糕', icon: '🥬', tag: '食', type: '特产', price: 40, desc: '辣白菜、萝卜块装盒带走，机场有真空包装款。韩国人的冰箱哲学：没有泡菜的饭桌不完整。' },
  { id: 'seoul_makgeolli', name: '烧酒·玛格丽米酒', icon: '🍶', tag: '食', type: '饮品', price: 18, desc: '绿瓶烧酒配炸鸡，或乳白玛格丽配煎饼。"配（喝法）"文化：烧酒混啤酒叫"炸弹"。' },
  { id: 'seoul_cosmetic', name: '韩妆护肤', icon: '💄', tag: '衣', type: '特产', price: 100, desc: '面膜买十送五、小样塞满购物袋。明洞美妆店柜姐中文十级，买单像一场快闪活动。' },
  { id: 'seoul_kpop', name: 'KPOP专辑·周边', icon: '💿', tag: '衣', type: '文创', price: 80, desc: '专辑开箱抽小卡、应援棒、明星同款。追星女孩的钱包在明洞和弘大之间反复横跳。' },
  { id: 'seoul_hanbok', name: '韩服租赁', icon: '👘', tag: '玩', type: '体验', price: 90, desc: '两小时韩服体验，穿去景福宫免费入宫。裙摆拖过青瓦巷，路人会用韩语夸你"漂亮"。' },
  { id: 'seoul_sauna', name: '汗蒸幕', icon: '🧖', tag: '玩', type: '体验', price: 60, desc: '盐房、黄土房、冰雪房轮着蒸，出来裹着羊角帽吃水煮蛋。韩剧同款"搓澡一条龙"，通宵也能睡。' },
  { id: 'seoul_noryangjin', name: '鹭梁津水产市场', icon: '🦀', tag: '玩', type: '体验', price: 150, desc: '一楼买活蟹活章鱼，二楼现加工。会动的章鱼刺身挑战勇气，老板娘用中文喊"帅哥尝尝"。' },
  { id: 'seoul_karaoke', name: '练歌房K歌', icon: '🎤', tag: '玩', type: '体验', price: 40, desc: '韩式练习室小包厢，铃鼓和音效帮腔。唱一首骑马舞神曲全场起立，不唱完不许走。' },
  { id: 'seoul_hotel', name: '明洞商务酒店', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '楼下就是夜市街，快递小哥和炸鸡车同框。韩国酒店赠品是泡面，深夜食堂自带。' },
  /* ---- 新增 ---- */
  { id: 'krg_galbi', name: '韩式烤牛排骨', icon: '🥩', tag: '食', type: '美食', price: 180, desc: '腌制牛排骨上炭火，' +
  '蒜片与辣椒圈是灵魂。' +
  '"韩国烤肉的高配"。' },
  { id: 'krg_jeon', name: '韩式煎饼（Jeon）', icon: '🥞', tag: '食', type: '美食', price: 30, desc: '泡菜煎饼、海鲜煎饼，' +
  '蘸醋酱油。' +
  '下雨天配马格利米酒，' +
  '"韩国家庭菜"。' },
  { id: 'krg_naeng', name: '冷面（Naengmyeon）', icon: '🍜', tag: '食', type: '美食', price: 35, desc: '荞麦冷面配牛肉汤，' +
  '加醋加芥末。' +
  '夏天"零下体验"。' },
  { id: 'krg_ginseng', name: '高丽人参精', icon: '🌿', tag: '食', type: '特产', price: 250, desc: '六年根高丽参，' +
  '红参与白参分级。' +
  '送礼与自用都合适，' +
  '"韩国的"补气之王""。' },
  { id: 'krg_holika', name: '韩纸与韩服小件', icon: '🧧', tag: '衣', type: '文创', price: 80, desc: '韩纸手作灯笼与扇子，' +
  '韩服缩小版布娃娃。' +
  '"传统美学的微缩"。' },
  { id: 'krg_soju_set', name: '初饮初乐烧酒', icon: '🍶', tag: '食', type: '饮品', price: 25, desc: '韩国"国民酒"，' +
  '绿色玻璃瓶经典。' +
  '配烤肉或炸鸡，' +
  '"韩国的"啤酒替代品""。' },
  { id: 'krg_k_pop', name: 'SM/YG/JYP 经纪公司商店', icon: '🎵', tag: '衣', type: '文创', price: 100, desc: 'SMTOWN 与 Ktown4u 等' +
  '偶像周边专卖店，' +
  '从专辑到签名照。' +
  '"追星族的朝圣地"。' },
  { id: 'krg_gangnam', name: '江南美容 SPA', icon: '💆', tag: '玩', type: '体验', price: 200, desc: '韩国医美与皮肤管理，' +
  'K-Beauty 一条龙。' +
  '敷面膜、' +
  '水光针、' +
  '"韩国颜值经济"。' },
  { id: 'krg_jeonju_bibimbap', name: '全州拌饭礼盒', icon: '🍱', tag: '食', type: '特产', price: 80, desc: '全州石锅拌饭调料包' +
  '与韩式辣椒酱，' +
  '回家自己做。' }
);
