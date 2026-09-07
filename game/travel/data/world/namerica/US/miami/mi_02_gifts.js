/* 迈阿密 分册02：特色周边（古巴三明治/凯金小龙虾/酸橘汁腌鱼/雪茄/Art Deco文创/火烈鸟） */
window.MI_GIFTS = window.MI_GIFTS || [];
window.MI_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'miami_cuban', name: '古巴三明治·咖啡', icon: '🥪', tag: '食', type: '美食', price: 30, desc: '压烤的古巴三明治配 cafe cubano 小杯浓咖啡。"Ventanita"窗口点单文化。' },
  { id: 'miami_ceviche', name: '秘鲁酸橘汁腌鱼', icon: '🐟', tag: '食', type: '美食', price: 70, desc: '迈阿密的 ceviche 融合拉美风味。"柠檬汁煮熟"的鲜甜。' },
  { id: 'miami_croquetas', name: '古巴可乐饼（Croquetas）', icon: '🧆', tag: '食', type: '美食', price: 15, desc: '火腿芝士炸可乐饼，"古巴早餐标配"。Versailles 餐厅的老味道。' },
  { id: 'miami_cigars', name: '雪茄', icon: '🚬', tag: '食', type: '特产', price: 130, desc: '小哈瓦那手工卷雪茄，El Titan 现场卷制。"古巴手艺的美国延续"。' },
  { id: 'miami_pastelitos', name: '古巴酥点（Pastelitos）', icon: '🥟', tag: '食', type: '特产', price: 15, desc: 'Guava 酪梨酱酥点，甜到心口。配 cafe con leche，"迈阿密的早晨"。' },
  { id: 'miami_deco_wen', name: 'Art Deco 文创', icon: '🏛️', tag: '衣', type: '文创', price: 30, desc: 'Art Deco 火烈鸟、粉彩建筑冰箱贴。"迈阿密的粉彩美学"。' },
  { id: 'miami_flamingo', name: '火烈鸟周边', icon: '🦩', tag: '衣', type: '文创', price: 30, desc: '火烈鸟泳圈、T恤、充气玩具。"佛罗里达的粉色符号"。' },
  { id: 'miami_airboat', name: '大沼泽气垫船', icon: '🚤', tag: '玩', type: '体验', price: 200, desc: '气垫船飙进湿地找鳄鱼。船头牛仔讲解，"沼泽速度与激情"。' },
  { id: 'miami_boat', name: '比斯坎湾明星豪宅游', icon: '🛥️', tag: '玩', type: '体验', price: 200, desc: '游船看明星岛豪宅与邮轮港。特朗普、JLo 的房子，"海上看财富"。' },
  { id: 'miami_nightclub', name: '南海滩夜店巡礼', icon: '🕺', tag: '玩', type: '体验', price: 250, desc: 'LIV、Story 全球 DJ 驻场。"迈阿密的夜晚是拉丁节奏"。' },
  { id: 'miami_paddle', name: '海上桨板看海豚', icon: '🏄', tag: '玩', type: '体验', price: 160, desc: '桨板穿红树林水道，海豚常出现。"佛罗里达的野生南"。' },
  { id: 'miami_minsu', name: '南海滩 Art Deco 酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: 'Ocean Drive 的 Art Deco 酒店直面海滩。粉色外墙泳池，"迈阿密的经典"。' },
  /* ---- 迈阿密其他菜 ---- */
  { id: 'mig_guava', name: 'Guava 番石榴甜品', icon: '🍰', tag: '食', type: '美食', price: 25, desc: '番石榴奶冻与冰沙，热带果香浓烈，迈阿密的果味。' },
  { id: 'mig_mofongo', name: 'Mofongo 炸蕉肉泥', icon: '🍌', tag: '食', type: '美食', price: 40, desc: '波多黎各菜：大蕉泥与蒜，配肉类或海鲜，加勒比的玉米糊。' },
  { id: 'mig_cafe', name: '古巴浓缩咖啡', icon: '☕', tag: '食', type: '饮品', price: 8, desc: '小哈瓦那的"Ventanita"窗口咖啡。3 美元一杯，"迈阿密最便宜的咖啡"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'mig_heat_wen', name: '热火队周边', icon: '🏀', tag: '衣', type: '服饰', price: 120, desc: 'Miami Heat 红白黑三色球衣。Wade 3 号 "闪回迈阿密"。' },
  { id: 'mig_dolphin_wen', name: '海豚队周边', icon: '🐬', tag: '衣', type: '文创', price: 80, desc: 'NFL Miami Dolphins 海豚 logo。橙青配色，"热带橄榄球"。' },
  /* ---- 体验课 ---- */
  { id: 'mig_baile', name: '拉丁舞夜店体验', icon: '💃', tag: '玩', type: '体验', price: 150, desc: '小哈瓦那酒吧的萨尔萨与巴恰塔。' + '舞步教学 + 免费一杯 mojito。"迈阿密的拉丁心跳"。' },
  { id: 'mig_jet_ski', name: '喷射水上摩托', icon: '🚤', tag: '玩', type: '体验', price: 200, desc: '迈阿密海岸的 60 分钟喷射摩托。' + '看对面明星岛，' + '"海上的肾上腺素"。' },
  /* ---- 住宿 ---- */
  { id: 'mig_brickell', name: 'Brickell 金融区酒店', icon: '🏨', tag: '住', type: '住宿', price: 750, desc: '迈阿密"曼哈顿"，' + '楼顶无边泳池看比斯坎湾。' + '"潮人的迈阿密"。' },
  { id: 'mig_south_beach', name: '南海滩公寓', icon: '🏠', tag: '住', type: '住宿', price: 500, desc: 'Ocean Drive 公寓，' + '阳台对着粉彩建筑。' + '"迈阿密最完美的早晨"。' }
);
