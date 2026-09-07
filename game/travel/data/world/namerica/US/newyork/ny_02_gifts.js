/* 纽约 分册02：特色周边（披萨/贝果/芝士蛋糕/百老汇/NBA/曼哈顿酒店/帝国大厦） */
window.NY_GIFTS = window.NY_GIFTS || [];
window.NY_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'newyork_pizza', name: '纽约披萨', icon: '🍕', tag: '食', type: '美食', price: 30, desc: '薄片披萨对折着吃，芝士拉丝半米长。街角"一块披萨"文化，站着吃完才地道。' },
  { id: 'newyork_bagel', name: '贝果配奶油芝士', icon: '🥯', tag: '食', type: '美食', price: 25, desc: '水煮再烤的贝果外韧内软，抹厚厚奶油芝士。加烟熏三文鱼是"纽约早晨的仪式"。' },
  { id: 'newyork_hotdog', name: '街头热狗', icon: '🌭', tag: '食', type: '美食', price: 15, desc: '路边餐车热狗加芥末酸菜，两三美元一管。中央公园长椅上啃热狗喂松鼠，美剧同款。' },
  { id: 'newyork_steak', name: '纽约客牛排', icon: '🥩', tag: '食', type: '美食', price: 280, desc: '老牌牛排馆炭烤带骨纽约客，配波本威士忌。木桌上一刀切开，肉汁与烟雾齐飞。' },
  { id: 'newyork_cheesecake', name: '纽约芝士蛋糕', icon: '🍰', tag: '食', type: '美食', price: 45, desc: '厚重扎实的重乳酪，配草莓酱。朱尼尔斯老店一块传三代，"芝士界的纪念碑"。' },
  { id: 'newyork_coffee', name: '街头咖啡车咖啡', icon: '☕', tag: '食', type: '饮品', price: 10, desc: '"Coffee regular"（加奶加糖）是纽约早晨暗号。两美元一杯，站在路边三口喝完去赶地铁。' },
  { id: 'newyork_moma', name: 'MoMA 文创', icon: '🎨', tag: '衣', type: '文创', price: 90, desc: '现代艺术博物馆的设计商店全球闻名。梵高《星月夜》丝巾、毕加索马克杯，"把艺术带回家"。' },
  { id: 'newyork_cap', name: 'NY 棒球帽', icon: '🧢', tag: '衣', type: '服饰', price: 150, desc: '洋基队 NY 帽是全球街头的硬通货。球场里的正版与时代广场的平价款，各取所需。' },
  { id: 'newyork_subway', name: '纽约地铁体验', icon: '🚇', tag: '行', type: '体验', price: 15, desc: '24小时运营的百年地铁，站台上有乐队也有鼠。Uptown/Downtown 别坐反，"纽约生存第一课"。' },
  { id: 'newyork_ferry', name: '史泰登岛渡轮', icon: '⛴️', tag: '行', type: '体验', price: 0, desc: '免费渡轮往返曼哈顿与史泰登岛，经过自由女神正面。本地通勤、游客巡游，"全纽约性价比之王"。' },
  { id: 'newyork_nba', name: 'NBA 现场观赛', icon: '🏀', tag: '玩', type: '体验', price: 450, desc: '麦迪逊花园广场看尼克斯主场，山呼海啸。中场秀、T恤炮、"Kiss Cam"，美式体育的沉浸体验。' },
  { id: 'newyork_hotel', name: '曼哈顿景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '纽约酒店贵到出名，但窗外是帝国大厦就值。夜里数着楼灯入睡，"住在电影里"。' },
  /* ---- 纽约其他菜 ---- */
  { id: 'nyg_deli', name: '犹太熟食店三明治', icon: '🥪', tag: '食', type: '美食', price: 120, desc: 'Pastrami 烟熏牛肉塔配黑麦面包与黄芥末。Katz Deli 百年老店，"超过15厘米免费"。' },
  { id: 'nyg_pretzel', name: '街头椒盐脆饼', icon: '🥨', tag: '食', type: '美食', price: 5, desc: '一美元一只巨型软碱水饼。街头小贩用纸袋装，咬开是热乎的。"纽约人的快餐"。' },
  { id: 'nyg_dumpling', name: '曼哈顿饺子', icon: '🥟', tag: '食', type: '美食', price: 20, desc: '唐人街一笼 8 美元，猪肉白菜配醋。"纽约最便宜的正餐"。' },
  { id: 'nyg_chopped', name: '切达奶酪牛排三明治', icon: '🥩', tag: '食', type: '美食', price: 180, desc: '五星级牛排碎的创意汉堡。"垃圾美食"版的"高大上"。"纽约客的觉醒"。' },
  { id: 'nyg_gelato', name: '意大利手工冰淇淋', icon: '🍨', tag: '食', type: '美食', price: 30, desc: '小意大利与 SoHo 的手工 Gelato 店。开心果味是意大利"灵魂口味"，浓到无法化。' },
  /* ---- 文创与服饰 ---- */
  { id: 'nyg_brooklyn_fashion', name: '布鲁克林 T 恤', icon: '👕', tag: '衣', type: '服饰', price: 120, desc: 'Brooklyn 印字 Tee 是纽约客的地下信仰。威廉斯堡的 Vintage 二手衣店还能淘到百年老衣。' },
  { id: 'nyg_met_shop', name: '大都会博物馆商店', icon: '🏺', tag: '衣', type: '文创', price: 150, desc: '埃及馆藏复刻、希腊瓶画瓷器。博物馆商店不输大堂本身，"展品的延伸"。' },
  { id: 'nyg_broadway_play', name: '百老汇节目册', icon: '🎭', tag: '衣', type: '文创', price: 80, desc: '《狮子王》《汉密尔顿》纪念节目册。"带走剧的余温"。' },
  /* ---- 体验课 ---- */
  { id: 'nyg_central_park', name: '中央公园导览', icon: '🚶', tag: '玩', type: '体验', price: 80, desc: '公园历史协会志愿者导览。草莓园到贝塞斯达喷泉，"纽约的中央绿地解读"。' },
  { id: 'nyg_foodtour', name: '唐人街美食徒步', icon: '🥟', tag: '玩', type: '体验', price: 200, desc: '老饕带路吃小笼包、叉烧、烧鸭。"一小时吃遍八个摊位"。' },
  { id: 'nyg_yankee', name: '洋基球场观赛', icon: '⚾', tag: '玩', type: '体验', price: 350, desc: '百年洋基球场棒球。"美国国球"的圣殿。椒盐脆饼与啤酒，"美式夏季记忆"。' },
  /* ---- 住宿 ---- */
  { id: 'nyg_hudson_yards', name: '哈德逊广场新酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '新地标附近的现代酒店，窗外是 Edge 观景台。"新纽约的客厅"。' },
  { id: 'nyg_brooklyn_loft', name: '布鲁克林 Loft 民宿', icon: '🏠', tag: '住', type: '住宿', price: 500, desc: '老仓库改造的工业风公寓，地铁 30 分钟到曼哈顿。"曼哈顿的便宜替代"。' }
);
