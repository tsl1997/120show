/* 罗马 分册02：特色周边（意面与披萨/Gelato/葡萄酒/皮具/文化体验/住宿） */
window.IT_GIFTS = window.IT_GIFTS || [];
window.IT_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'rome_pasta', name: '手工意面', icon: '🍝', tag: '食', type: '美食', price: 60, desc: 'Carbonara用蛋黄培根罗马式做法，意面煮到弹牙。老馆子里主厨用叉子卷面，转出"罗马风情"。' },
  { id: 'rome_pizza', name: '罗马披萨', icon: '🍕', tag: '食', type: '美食', price: 40, desc: '薄脆方切披萨按重量称卖，玛格丽特是试金石。面包房窗口直接"称一角"，边走边吃才地道。' },
  { id: 'rome_gelato', name: '意式冰淇淋', icon: '🍨', tag: '食', type: '美食', price: 18, desc: '开心果味Gelato绿得克制，两球三欧元。老店的冰淇淋低脂浓郁，"小铲子"插在蛋筒上。' },
  { id: 'rome_espresso', name: '意式浓缩·卡布奇诺', icon: '☕', tag: '食', type: '饮品', price: 10, desc: '吧台站着喝一欧元的浓缩，一口一口"意大利节奏"。本地人十点后不喝卡布奇诺，这是"乳制品潜规则"。' },
  { id: 'rome_aperol', name: 'Aperol 气泡酒', icon: '🍹', tag: '食', type: '饮品', price: 50, desc: '橙色开胃酒配橙片苏打，黄昏时配小碟小食。广场边的露天座一杯，看喷泉亮灯。' },
  { id: 'rome_olive_oil', name: '橄榄油·松露酱', icon: '🫒', tag: '食', type: '特产', price: 60, desc: '托斯卡纳橄榄油配罗马黑松露酱。一小瓶"液体黄金"，回家炒蛋都是意式。' },
  { id: 'rome_leather', name: '意大利皮具', icon: '👞', tag: '衣', type: '服饰', price: 200, desc: '手工皮鞋与皮包，"意大利制造"的底气。老作坊里皮匠现缝鞋底，一双鞋能穿十年。' },
  { id: 'rome_murano', name: '穆拉诺玻璃', icon: '🫧', tag: '衣', type: '文创', price: 100, desc: '威尼斯彩色玻璃的"意大利色彩"。玻璃戒指、酒杯，灯光下像凝固的彩虹。' },
  { id: 'rome_coin', name: '许愿池硬币周边', icon: '🪙', tag: '衣', type: '文创', price: 30, desc: '许愿池造型的冰箱贴、硬币巧克力。传说抛硬币会重返罗马，冰箱贴是"复制品的浪漫"。' },
  { id: 'rome_scooter', name: '黄蜂牌摩托巡游', icon: '🛵', tag: '行', type: '体验', price: 250, desc: '租一辆 Vespa 载着人钻巷子，"赫本同款"路线。后座抱紧、风声呼啸，石板路颠出笑声。' },
  { id: 'rome_cooking', name: '意面烹饪课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 180, desc: '意大利奶奶手把手教擀面，"面粉要过筛"与"眼泪不能加"是家训。做完一桌四人一起吃，配基安蒂红酒。' },
  { id: 'rome_hotel', name: '罗马民宿老楼', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '百年老楼没电梯但有大天台。晚上上去看斗兽场方向的灯火，"罗马假日"续集开拍。' },
  /* ---- 罗马其他菜（新增） ---- */
  { id: 'itg_cacio', name: 'Cacio e Pepe 芝士胡椒面', icon: '🧀', tag: '食', type: '美食', price: 45, desc: '三种原料：意面、罗马羊奶酪 Pecorino、黑胡椒。乳化的酱汁裹着每一根面条，"罗马最简也最难"。' },
  { id: 'itg_saltimbocca', name: 'Saltimbocca 罗马跳嘴肉', icon: '🥩', tag: '食', type: '美食', price: 90, desc: '小牛肉片包火腿与鼠尾草，黄油煎香。"Saltimbocca"在罗马方言里是"跳进嘴里"。' },
  { id: 'itg_carciofi', name: 'Carciofi alla Romana 朝鲜蓟', icon: '🌿', tag: '食', type: '美食', price: 50, desc: '罗马式朝鲜蓟：橄榄油、欧芹、薄荷慢炖。春天的罗马餐桌固定菜，"犹太区起源的素食名菜"。' },
  { id: 'itg_supplì', name: 'Supplì 罗马炸饭团', icon: '🍙', tag: '食', type: '美食', price: 15, desc: '番茄烩饭团裹面包糠炸透，中心有融化的马苏里拉。"罗马街头版炸丸子"。' },
  { id: 'itg_porchetta', name: 'Porchetta 烤乳猪三明治', icon: '🥪', tag: '食', type: '美食', price: 35, desc: '整只乳猪用迷迭香、蒜、茴香慢烤十二小时，削片塞面包。"罗马城外的周日美食"。' },
  { id: 'itg_fragolino', name: 'Fragolino 草莓酒', icon: '🍷', tag: '食', type: '饮品', price: 80, desc: '罗马近郊的甜草莓起泡酒，少女粉。圣诞与新年常客，"一杯就回童年"。' },
  { id: 'itg_grappa', name: 'Grappa 渣酿白兰地', icon: '🥃', tag: '食', type: '饮品', price: 100, desc: '葡萄皮渣蒸馏的高度酒，意大利饭后传统。罗马冬季的热饮 Grappa Calda 加柠檬皮与糖。' },
  /* ---- 美食体验 ---- */
  { id: 'itg_tartufo', name: 'Tartufo 黑松露冰淇淋', icon: '🍫', tag: '食', type: '美食', price: 25, desc: '两种口味：巧克力与榛子。罗马老店 Piazza Navona 的签名甜品，"全球最浓的一勺"。' },
  { id: 'itg_pizza_slice', name: '罗马方切披萨角', icon: '🍕', tag: '食', type: '美食', price: 12, desc: 'Pizza al taglio 切角按重量称。街边小窗口买了站着吃完，"穷游罗马"的标准动作。' },
  { id: 'itg_aperitivo', name: '意式黄昏小食 buffET', icon: '🍾', tag: '食', type: '体验', price: 60, desc: '十八点起买一杯 Aperol 就能吃自助小食。橄榄、火腿、奶酪、迷你帕尼尼，"罗马式社交"。' },
  /* ---- 文化与文创 ---- */
  { id: 'itg_vatican_post', name: '梵蒂冈邮筒明信片', icon: '🏤', tag: '衣', type: '文创', price: 20, desc: '梵蒂冈是独立国家，有自己的邮局。寄一张印着圣彼得大教堂的明信片，盖上"梵蒂冈城国"邮戳。' },
  { id: 'itg_rosary', name: '教皇念珠', icon: '📿', tag: '衣', type: '文创', price: 50, desc: '圣彼得广场旁小店的天主教念珠，紫檀木与橄榄木款。"梵蒂冈带回家的祝福"。' },
  { id: 'itg_pinocchio', name: '匹诺曹木偶', icon: '🎎', tag: '衣', type: '文创', price: 80, desc: '意大利托斯卡纳的匹诺曹是世界级木偶。罗马老店手工彩绘款，"意大利童年"。' },
  { id: 'itg_fiat', name: 'Fiat 500 复古模型', icon: '🚗', tag: '玩', type: '文创', price: 90, desc: '菲亚特 500 的复古小汽车模型，意大利工业设计的标志。摆在书架上是"罗马街头的微缩"。' },
  /* ---- 时尚与服饰 ---- */
  { id: 'itg_brunello', name: 'Brunello Cucinelli 毛衣', icon: '🧥', tag: '衣', type: '服饰', price: 800, desc: '索洛梅奥小镇的"山羊绒之王"。Rome 蒙特米尼亚诺街的旗舰店里看一件顶配，"低调的奢侈"。' },
  { id: 'itg_fendi', name: 'Fendi Baguette 手袋', icon: '👛', tag: '衣', type: '服饰', price: 1500, desc: '1997 年 Fendi 的"法棍包"，《欲望都市》带火。康多提大道旗舰店的限定色。' },
  { id: 'itg_pompeii', name: '庞贝壁画复制品', icon: '🖼️', tag: '衣', type: '文创', price: 150, desc: '庞贝古城的壁画复制品：花园、神话、宴会。挂在客厅是"罗马的窗"。' },
  /* ---- 体验课 ---- */
  { id: 'itg_espresso_lab', name: '意式咖啡拉花课', icon: '☕', tag: '玩', type: '体验', price: 120, desc: '意式浓缩的吧台手把手教你"打奶泡与拉花"。一杯自调的 latte art，"罗马式早晨"。' },
  { id: 'itg_gladiator', name: '角斗士学院体验', icon: '⚔️', tag: '玩', type: '体验', price: 200, desc: '在古罗马斗兽场附近的角斗士学校学剑术与盔甲穿戴。"两小时穿越回帝国时代"。' },
  /* ---- 住宿 ---- */
  { id: 'itg_hassler', name: '西班牙广场山顶酒店', icon: '🏨', tag: '住', type: '住宿', price: 1500, desc: 'Hassler 罗马酒店，俯瞰西班牙广场。教皇、好莱坞明星都住过的"罗马客厅"。' },
  { id: 'itg_bnb', name: '特拉斯提弗列民宿', icon: '🏠', tag: '住', type: '住宿', price: 320, desc: '老城区的窄楼民宿，鹅卵石巷子里。早餐在屋顶花园吃，"罗马的慢生活"。' }
);
