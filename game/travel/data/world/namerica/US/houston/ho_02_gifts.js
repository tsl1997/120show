/* 休斯敦 分册02：特色周边（德州 BBQ/Tex-Mex/越南粉/小龙虾/NASA 文创/牛仔文化） */
window.HO_GIFTS = window.HO_GIFTS || [];
window.HO_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'houston_bbq', name: '德州烧烤（Brisket）', icon: '🍖', tag: '食', type: '美食', price: 120, desc: '烟熏牛胸肉16小时，"德州 BBQ 三巨头之一"。Corkscrew BBQ 排队王，配白面包与酸黄瓜。' },
  { id: 'houston_texmex', name: 'Tex-Mex 德墨菜', icon: '🌮', tag: '食', type: '美食', price: 60, desc: '德州墨西哥菜：辣酱玉米片、fajita 铁板。"Houston-style fajita"发源地。' },
  { id: 'houston_vietnamese', name: '越南粉（Pho）', icon: '🍜', tag: '食', type: '美食', price: 40, desc: '休斯顿越南社区全美第二，Pho 浓度爆表。Banh Mi 法棍三明治，"越南的第二故乡"。' },
  { id: 'houston_crawfish', name: '凯金小龙虾', icon: '🦞', tag: '食', type: '美食', price: 75, desc: '路易斯安那凯金风味小龙虾配蒜蓉黄油。"越南-凯金 fusion"，春天最肥。' },
  { id: 'houston_nasa_wen', name: 'NASA 文创', icon: '🚀', tag: '衣', type: '文创', price: 70, desc: '任务控制徽章、宇航员冰淇淋（冻干）。"Houston, we have a problem"T恤。' },
  { id: 'houston_oil', name: '石油能源文创', icon: '🛢️', tag: '衣', type: '文创', price: 30, desc: '油井模型、能源城纪念品。"石油之城"的硬核纪念。' },
  { id: 'houston_nasa_tour', name: '任务控制中心导览', icon: '🎙️', tag: '玩', type: '体验', price: 250, desc: '进真正的 Apollo 任务控制厅（历史复原）。坐登月指挥席，"人类一大步的地面现场"。' },
  { id: 'houston_astro', name: 'Minute Maid 棒球观赛', icon: '⚾', tag: '玩', type: '体验', price: 200, desc: '太空人队主场，有可开合屋顶。"2017/2022 双冠王"的球场。' },
  { id: 'houston_rodeo', name: '休斯顿牲畜展（Rodeo）', icon: '🐂', tag: '玩', type: '体验', price: 180, desc: '全球最大牲畜展与牛仔竞技（2-3月）。骑牛与 concert，"德州精神"全景。' },
  { id: 'houston_kemah2', name: 'Kemah 海滨游乐园', icon: '🎡', tag: '玩', type: '体验', price: 120, desc: '海滨过山车与摩天轮，海风凉爽。"德州人的周末海滨"。' },
  { id: 'houston_minsu', name: 'Montrose 文艺民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: 'Montrose 区艺术民宿，壁画街区。多样性之城的核心区。' },
  /* ---- 休斯顿其他菜 ---- */
  { id: 'hog_enchilada', name: 'Tex-Mex 玉米饼', icon: '🌯', tag: '食', type: '美食', price: 35, desc: '玉米粉圆饼包肉、豆、芝士。" + "德州和墨西哥的混血"。' },
  { id: 'hog_chicken_w', name: '炸鸡与华夫饼', icon: '🍗', tag: '食', type: '美食', price: 40, desc: '南方 soul food 经典。脆皮炸鸡配华夫饼，" + "甜咸交替的南方"解法"。' },
  { id: 'hog_blue_bell', name: 'Blue Bell 冰淇淋', icon: '🍦', tag: '食', type: '特产', price: 25, desc: '德州本地冰淇淋品牌，1907 年起。"美国南方冰淇淋之王"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'hog_te_neue', name: '德州星空图案 T恤', icon: '👕', tag: '衣', type: '服饰', price: 60, desc: 'Lone Star State 的单星旗，' + '牛仔裤的"原乡"。" + "牛仔大州的精神周边"。' },
  { id: 'hog_astro_wen', name: '太空人队周边', icon: '⚾', tag: '衣', type: '文创', price: 100, desc: '2022 冠军帽、双冠王纪念 T。"休斯顿的棒球救赎"。' },
  /* ---- 体验课 ---- */
  { id: 'hog_bayou_kayak', name: '水牛河皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 80, desc: '市中心 Buffalo Bayou 划独木舟。' + '看水獭与白鹭。" + "城中的野外探险"。' },
  { id: 'hog_truck', name: '餐车美食徒步', icon: '🚚', tag: '玩', type: '体验', price: 30, desc: '休斯顿的餐车文化。' + '早午晚都有不同主题。" + "Tex-Mex + 越南 + 拉美"。' },
  /* ---- 住宿 ---- */
  { id: 'hog_ritz', name: 'The Post Oak 酒店', icon: '🏨', tag: '住', type: '住宿', price: 950, desc: '休斯顿 Galleria 旁的顶奢酒店。' + '奶酪蛋糕与套房服务。" + "德州的奢华样板"。' },
  { id: 'hog_heights', name: 'Heights 民宿', icon: '🏠', tag: '住', type: '住宿', price: 350, desc: '休斯顿老城 Heights 街区。' + '维多利亚小屋民宿，" + "德州小清新"。' }
);
