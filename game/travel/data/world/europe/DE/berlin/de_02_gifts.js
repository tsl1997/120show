/* 柏林 分册02：特色周边（咖喱香肠与啤酒/柏林熊/涂鸦文化/历史文创/体验住宿） */
window.DE_GIFTS = window.DE_GIFTS || [];
window.DE_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'berlin_currywurst', name: '咖喱香肠', icon: '🌭', tag: '食', type: '美食', price: 30, desc: '切块香肠淋咖喱番茄酱，配薯条和面包。柏林街头"国民小吃"，专门有香肠博物馆为它立传。' },
  { id: 'berlin_doner', name: '土耳其烤肉卷', icon: '🌯', tag: '食', type: '美食', price: 25, desc: '柏林人改良的土耳其卷饼，烤肉蔬菜酱料塞满面饼。凌晨两点的大份卷饼，是"柏林夜生活的终点站"。' },
  { id: 'berlin_beer', name: '德国啤酒·啤酒花园', icon: '🍺', tag: '食', type: '饮品', price: 28, desc: '纯净法酿造的啤酒只有水麦芽啤酒花。树下长桌一坐，一升扎杯配椒盐卷饼，"德式社交"。' },
  { id: 'berlin_brezel', name: '碱水结面包', icon: '🥨', tag: '食', type: '美食', price: 10, desc: 'Brezel 外皮碱香有嚼劲，蘸黄油或芝士酱。面包店门口一篮，配咖啡是"柏林早晨"。' },
  { id: 'berlin_kaffee', name: '黑森林蛋糕', icon: '🍰', tag: '食', type: '美食', price: 30, desc: '樱桃酒奶油蛋糕层层分明，巧克力屑铺满。百年咖啡馆里一茶一蛋糕，"慢得理直气壮"。' },
  { id: 'berlin_wall_piece', name: '柏林墙碎片', icon: '🧱', tag: '衣', type: '文创', price: 80, desc: '真墙碎片装在亚克力盒里附证书。一块混凝土带一小片涂鸦，"自由的价格"可以揣回家。' },
  { id: 'berlin_ampelmann', name: '小人红绿灯文创', icon: '🚦', tag: '衣', type: '文创', price: 35, desc: '东德礼帽小人 Ampelmann 成了城市 IP。交通灯形象做成果酱、马克杯、T恤，"社会主义美学复活"。' },
  { id: 'berlin_bear', name: '柏林熊', icon: '🐻', tag: '衣', type: '文创', price: 40, desc: '城市吉祥物柏林熊做成玩偶与徽章。市政厅前的联合熊雕塑，是游客合影的"熊抱点"。' },
  { id: 'berlin_bike', name: '街头涂鸦导览骑行', icon: '🚲', tag: '玩', type: '体验', price: 100, desc: '骑行穿过涂鸦巷与废弃厂房，"柏林的颓废美学"。向导讲每一幅墙画的故事，比画廊生动十倍。' },
  { id: 'berlin_bunker', name: '地下掩体参观', icon: '🕳️', tag: '玩', type: '体验', price: 90, desc: '二战防空洞与秘密地堡改的博物馆。阴冷灯光下听讲解，出地面那一刻阳光格外珍贵。' },
  { id: 'berlin_club', name: 'Techno 俱乐部夜', icon: '🎧', tag: '玩', type: '体验', price: 130, desc: '柏林是 Techno 圣地，仓库俱乐部通宵营业。"门口排队被DJ选人"，进去就是十二小时的低音轰炸。' },
  { id: 'berlin_hotel', name: '米特区设计酒店', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '老工厂改造的阁楼酒店，天台看柏林墙方向。柏林住宿性价比欧洲最高，工业风房间里睡个好觉。' },
  /* ---- 德国美食 ---- */
  { id: 'deg_sauerbraten', name: '德国烤牛膝·酸菜', icon: '🍖', tag: '食', type: '美食', price: 80, desc: '腌三天的牛膝配酸菜与土豆丸子。柏林版比慕尼黑的清淡，"北德人的实在菜"。' },
  { id: 'deg_schnitzel', name: '维也纳炸猪排', icon: '🥩', tag: '食', type: '美食', price: 60, desc: '金黄酥脆的猪肉薄片，柠檬角配菜沙拉。柏林啤酒馆里的"国民主菜"。' },
  { id: 'deg_berliner', name: 'Berliner 油炸面球', icon: '🍩', tag: '食', type: '美食', price: 5, desc: '柏林人叫 Pfannkuchen，慕尼黑人叫 Krapfen。北德与南德因为它有过"甜咸之争"。' },
  { id: 'deg_spätzle', name: 'Spätzle 鸡蛋面疙瘩', icon: '🍜', tag: '食', type: '美食', price: 40, desc: '德国南部的小麦蛋面疙瘩配奶酪酱。柏林啤酒馆的"灵魂主食"。' },
  { id: 'deg_eisbär', name: '柏林酒馆 Radler', icon: '🍺', tag: '食', type: '饮品', price: 25, desc: '啤酒加柠檬汽水的德国传统混饮。夏天喝一杯"清凉啤酒"，1922 年慕尼黑发明。' },
  /* ---- 文化与文创 ---- */
  { id: 'deg_bauhaus', name: '包豪斯设计明信片', icon: '✉️', tag: '衣', type: '文创', price: 30, desc: '包豪斯 1923 年的"魏玛海报"复刻。三原色方块与现代字体，"极简主义的鼻祖"。' },
  { id: 'deg_kpm', name: 'KPM 柏林皇家瓷', icon: '🏺', tag: '衣', type: '文创', price: 200, desc: '柏林王瓷 KPM 1763 年至今仍手工烧制。蓝标、波罗的海风纹，"普鲁士的工艺标准"。' },
  { id: 'deg_brandenburg', name: '勃兰登堡门模型', icon: '🏛️', tag: '衣', type: '文创', price: 60, desc: '勃兰登堡门青铜微缩模型，胜利女神四马车清晰。摆在书桌上是"柏林的永恒坐标"。' },
  { id: 'deg_book', name: '柏林墙诗集', icon: '📚', tag: '衣', type: '文创', price: 80, desc: '东西德作家笔下的柏林墙诗集。策兰、穆勒、延恩，墙两侧的声音，"分裂与统一"的文字档案。' },
  /* ---- 体验课 ---- */
  { id: 'deg_bier_tour', name: '啤酒博物馆与酒馆', icon: '🍺', tag: '玩', type: '体验', price: 80, desc: '柏林啤酒博物馆导览 + 5 杯本地精酿。讲解纯净法与德国啤酒分级，"精酿的学术入门"。' },
  /* ---- 时尚与服饰 ---- */
  { id: 'deg_adidas', name: '阿迪达斯柏林跑鞋', icon: '👟', tag: '衣', type: '服饰', price: 150, desc: '阿迪达斯德国总部在黑措根奥拉赫。柏林旗舰店的复刻版跑鞋，"阿迪老家买的限定色"。' },
  { id: 'deg_wmf', name: 'WMF 福腾宝厨具', icon: '🍴', tag: '衣', type: '服饰', price: 250, desc: '德国厨具之王，1853 年至今。柏林专柜的迷你锅具套装，"德国家庭的味道"。' },
  /* ---- 街头艺术 ---- */
  { id: 'deg_streetart', name: '街头艺术丝巾', icon: '🧣', tag: '衣', type: '服饰', price: 90, desc: '柏林街头涂鸦艺术家的原作转印丝巾。每条都标艺术家签名，"穿戴的画廊"。' },
  /* ---- 住宿 ---- */
  { id: 'deg_mitte_boutique', name: '米特精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 480, desc: '米特区中心的小型设计酒店，靠近博物馆岛。早餐黑面包配蜂蜜黄油，"柏林的早晨"。' },
  { id: 'deg_kreuz_hostel', name: '克罗伊茨贝格青年旅舍', icon: '🛏️', tag: '住', type: '住宿', price: 90, desc: '柏林市中心最便宜的青旅，自带涂鸦酒吧。背包客的"柏林客厅"。' }
);
