/* 阿姆斯特丹 分册01：景点圣地（运河带/博物馆/约旦区/风车村/梵高/海与花） */
window.NL_SPOTS = window.NL_SPOTS || [];
window.NL_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'amsterdam_canal', name: '运河游船（Herengracht）', icon: '⛵', price: 90, desc: '2010年世界遗产运河带，山形墙房子歪歪斜斜。夜游灯光，"黄金时代的黄金水道"。' },
  { id: 'amsterdam_vangogh', name: '梵高博物馆', icon: '🌻', price: 110, desc: '梵高真迹最多：向日葵、杏花、自画像。从灰暗到明亮的十年，"用颜色燃烧的画家"。' },
  { id: 'amsterdam_rijks', name: '荷兰国立博物馆', icon: '🖼️', price: 110, desc: '伦勃朗《夜巡》专属展厅，维米尔《倒牛奶的女仆》。荷兰黄金时代的"国家相册"。' },
  { id: 'amsterdam_anne', name: '安妮·弗兰克故居', icon: '🕯️', price: 50, desc: '《安妮日记》的秘密附楼原址。书架后的暗门仍在，"人类黑暗与希望的记录"。' },
  { id: 'amsterdam_jordaan', name: '约旦区·九街', icon: '🛍️', price: 0, desc: '文艺街区：古着店、咖啡馆、辛格花市。辛格花市是"唯一的浮动花市"。' },
  { id: 'amsterdam_keukenhof', name: '库肯霍夫郁金香公园（3-5月）', icon: '🌷', price: 90, desc: '世界最大花园：700万株球茎花卉。郁金香田从空中看是"彩色条纹"，"春天的荷兰 = 花的海洋"。' },
  { id: 'amsterdam_zaanse', name: '赞斯堡风车村', icon: '🌬️', price: 70, desc: '绿色木屋风车群，芝士与木鞋工坊。风车还能磨颜料，"荷兰的明信片"。' },
  /* ---- 博物馆延伸 ---- */
  { id: 'nlp_stedelijk', name: '阿姆斯特丹市立美术馆', icon: '🎨', price: 80, desc: '现代艺术馆：蒙德里安、康定斯基、巴斯奎特。"梵高馆"的好邻居。' },
  { id: 'nlp_anne_2', name: '安妮·弗兰克雕像·西教堂', icon: '⛪', price: 0, desc: '安妮一家被捕前最后一次去的就是西教堂。门口安妮雕像，"自由的小女孩"。' },
  { id: 'nlp_foam', name: 'Foam 摄影博物馆', icon: '📷', price: 60, desc: '运河边老建筑改的摄影美术馆。世界顶级摄影师个展，' +
  '免费杂志 Foam 杂志都从这里发。' },
  { id: 'nlp_rembrandt', name: '伦勃朗故居博物馆', icon: '🏛️', price: 60, desc: '犹太巷的画家故居，工作室与画室复原。' +
  '《夜巡》就是从这里走出去的。' },
  /* ---- 运河带与其他 ---- */
  { id: 'nlp_nine_streets', name: '九条小街购物区', icon: '🛍️', price: 0, desc: '九条小街横切在三大运河上，独立设计师店与古着店。' +
  '"阿姆斯特丹的银座缩小版"。' },
  { id: 'nlp_bloemenmarkt', name: '辛格花市·浮动花市', icon: '🌷', price: 0, desc: '运河上的浮动花市，世界唯一。球茎、郁金香、纪念品一船接一船。' },
  { id: 'nlp_albert', name: 'Albert Cuyp 市场', icon: '🥬', price: 0, desc: '阿姆斯特丹最大的露天市集，芝士、鲱鱼、stroopwafel 一站吃齐。' +
  '"荷兰的菜市场宇宙"。' },
  { id: 'nlp_dam', name: '水坝广场·王宫', icon: '🏛️', price: 50, desc: '阿姆斯特丹名字来源地。17 世纪水坝建起，' +
  '如今是王宫与国家纪念碑的中心广场。' },
  /* ---- 公园与自然 ---- */
  { id: 'nlp_vondel', name: '冯德尔公园', icon: '🌳', price: 0, desc: '阿姆斯特丹最大的市内公园。露天剧场、玫瑰园、' +
  '夏日音乐会。荷兰人在这里慢下来。' },
  { id: 'nlp_amstel', name: '阿姆斯特尔河两岸', icon: '🌊', price: 0, desc: '蓝桥 Magere Brug 是日落黄金机位。河水倒映山形墙房子，"运河之城的呼吸"。' },
  { id: 'nlp_westerpark', name: '韦斯特公园', icon: '🌿', price: 0, desc: '老工业区的"绿色转型"。周末食品市集、' +
  '艺术工作室、城市农场。' },
  /* ---- 现代与特色 ---- */
  { id: 'nlp_noord', name: '阿姆斯特丹北区·ADAM 观景台', icon: '🌆', price: 80, desc: '渡轮过 IJ 河到北区。塔顶秋千可以"荡出 100 米悬崖"，俯瞰全城港口。' },
  { id: 'nlp_redlight', name: '红灯区与玻璃窗博物馆', icon: '💃', price: 30, desc: '德瓦伦最"成人"街区，橱窗女郎到性博物馆。' +
  '玻璃窗背后是阿姆斯特丹的"自由与争议"。' },
  { id: 'nlp_coffeeshop', name: 'Coffee Shop 文化探访', icon: '🌿', price: 30, desc: '荷兰特有的"咖啡馆"文化，软性毒品合法销售。与街角咖啡完全不同的"另一种咖啡"。' },
  { id: 'nlp_bijenkorf', name: 'Bijenkorf 百货·女王百货', icon: '🛍️', price: 0, desc: '阿姆斯特丹最高档百货，' +
  '水坝广场旁 1870 年起营业。"荷兰的哈罗德"。' },
  /* ---- 周边与远郊 ---- */
  { id: 'nlp_zuider', name: '南海博物馆·Zuiderzeemuseum', icon: '⛵', price: 90, desc: '火车半小时到恩克赫伊曾，露天博物馆重现 19 世纪渔村。' +
  '荷兰木屐与干酪的"原乡"。' },
  { id: 'nlp_utrecht', name: '乌得勒支一日', icon: '⛪', price: 80, desc: '半小时火车。运河码头低于街道的"双层水城"，' +
  '米菲兔作者的故乡。' },
  { id: 'nlp_hague', name: '海牙·莫瑞泰斯皇家美术馆', icon: '🖼️', price: 90, desc: '火车一小时。维米尔《戴珍珠耳环的少女》真迹馆藏，' +
  '海牙也是荷兰王宫与议会所在地。' },
  { id: 'nlp_kinder', name: '小孩堤防风车群', icon: '🌬️', price: 0, desc: '19 座风车排成一线，世界遗产。' +
  '免费参观，' +
  '比赞斯堡更"原生态"。' },
  { id: 'nlp_pampus', name: 'Pampus 岛堡垒', icon: '🏰', price: 100, desc: '阿姆斯特丹港口的堡垒岛，' +
  '19 世纪荷兰防线的一部分。渡轮前往，' +
  '"海上要塞博物馆"。' },
  { id: 'nlp_miffy', name: '乌得勒支·米菲兔博物馆', icon: '🐰', price: 60, desc: '迪克·布鲁纳的米菲兔作者故乡。' +
  '博物馆展出原画与手稿，"荷兰的儿童文化偶像"。' }
);
