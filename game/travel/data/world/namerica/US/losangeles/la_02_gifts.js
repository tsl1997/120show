/* 洛杉矶 分册02：特色周边（In-N-Out/塔可/波奇饭/球鞋/街头艺术/海滩生活） */
window.LA_GIFTS = window.LA_GIFTS || [];
window.LA_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'losangeles_innout', name: 'In-N-Out 汉堡', icon: '🍔', tag: '食', type: '美食', price: 35, desc: '加州汉堡界"初恋"，现切土豆现炸薯条。暗号菜单"Animal Style"肉香加倍，餐盘纸印着圣经章节。' },
  { id: 'losangeles_tacos', name: '墨西哥塔可', icon: '🌮', tag: '食', type: '美食', price: 20, desc: '餐车塔可两美元一个，香菜洋葱青柠汁。深夜的"塔可车"是洛杉矶灵魂，排队的人比车还多。' },
  { id: 'losangeles_poke', name: '加州波奇饭', icon: '🍣', tag: '食', type: '美食', price: 65, desc: '夏威夷生鱼饭在加州进化成"健身餐之王"。牛油果金枪鱼配糙米，阳光味的健康。' },
  { id: 'losangeles_smoothie', name: '巴西莓果碗', icon: '🍓', tag: '食', type: '饮品', price: 45, desc: '紫色的 açaí 打底铺满水果椰片。海滩边的"晒碗文化"，先拍照再吃是默认流程。' },
  { id: 'losangeles_coffee', name: '加州精品咖啡', icon: '☕', tag: '食', type: '饮品', price: 30, desc: 'Intelligentsia 等精品咖啡店带动"第三波咖啡"。燕麦拿铁加一分甜，配上洛杉矶的阳光刚刚好。' },
  { id: 'losangeles_sneaker', name: '球鞋与潮牌', icon: '👟', tag: '衣', type: '服饰', price: 320, desc: '梅尔罗斯大道的潮牌店与球鞋店，"街头文化货舱"。限量款要摇号，逛一圈了解整个潮流圈。' },
  { id: 'losangeles_vinyl', name: '黑胶唱片', icon: '💿', tag: '衣', type: '文创', price: 120, desc: 'Amoeba 唱片店百万张黑胶淘到腿软。洛杉矶的摇滚灵魂，一张老唱片就是一个年代。' },
  { id: 'losangeles_star', name: '好莱坞周边', icon: '🎬', tag: '衣', type: '文创', price: 50, desc: '奥斯卡小金人摆件、电影场记板钥匙扣。"好莱坞"三个字的魔力，从纪念品店开始。' },
  { id: 'losangeles_bike', name: '海滨骑行', icon: '🚲', tag: '玩', type: '体验', price: 60, desc: '从圣莫尼卡骑到威尼斯海滩，一路海风与棕榈。租辆单车两小时，"加州式"运动日常。' },
  { id: 'losangeles_surf', name: '马里布冲浪', icon: '🏄', tag: '玩', type: '体验', price: 160, desc: '《海滩游侠》的浪点，教练带着追第一道浪。上岸后看太平洋落日，"加州梦"具象化。' },
  { id: 'losangeles_hike', name: '鲁尼恩峡谷徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '本地人的晨跑圣地，半山腰与好莱坞标志合影。偶遇遛狗的明星，洛杉矶人早已见怪不怪。' },
  { id: 'losangeles_hotel', name: '海滨汽车旅馆风酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '加州风泳池酒店，棕榈树影落在白墙上。晚上泳池边烧烤，"美式度假片"现场。' },
  /* ---- LA其他菜 ---- */
  { id: 'lag_egg_sandwich', name: '洛杉矶三明治', icon: '🥪', tag: '食', type: '美食', price: 35, desc: '鸡蛋芝士培根配牛油果酱是 LA 早餐经典。Sqirl 的米饭碗也是 Instagram 顶流。' },
  { id: 'lag_ice_cream', name: 'Salt & Straw 冰淇淋', icon: '🍦', tag: '食', type: '美食', price: 30, desc: 'Portland 起家的手工冰淇淋，味道脑洞大开：薰衣草蜂蜜培根。"潮人冰淇淋"。' },
  { id: 'lag_vegan', name: 'Vegan 素食', icon: '🥗', tag: '食', type: '美食', price: 50, desc: 'LA 是全美最 Vegan 的城市。植物汉堡与燕麦拿铁，"健康饮食圣地"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'lag_fred_seg', name: 'Fred Segal 设计师', icon: '👕', tag: '衣', type: '服饰', price: 600, desc: '西好莱坞传奇精品店。"Californian cool"的发源地，"明星的街拍源头"。' },
  { id: 'lag_lakers', name: '湖人队周边', icon: '🏀', tag: '衣', type: '文创', price: 120, desc: '紫金球衣与 24 号 Kobe 周边。"Showtime Lakers" 的斯台普斯中心时代。' },
  { id: 'lag_hollywood_walk', name: '星光大道文创', icon: '⭐', tag: '衣', type: '文创', price: 40, desc: '星星路牌复刻、明星周边徽章。"好莱坞的官方纪念"。' },
  /* ---- 体验课 ---- */
  { id: 'lag_griffith2', name: '格里菲斯天文台观星夜', icon: '🔭', tag: '玩', type: '体验', price: 0, desc: '每月满月夜用 12 寸望远镜看土星环。志愿者讲解"行星步道"免费。' },
  { id: 'lag_warner', name: '华纳兄弟影城 VIP 之旅', icon: '🎬', tag: '玩', type: '体验', price: 550, desc: '大巴进入真实摄影棚，看《老友记》咖啡馆与《哈利波特》戏服间。"好莱坞后台"。' },
  /* ---- 住宿 ---- */
  { id: 'lag_beverly', name: '比佛利山庄酒店', icon: '🏨', tag: '住', type: '住宿', price: 1200, desc: '罗迪欧大道旁，"名流聚居地"酒店。棕榈树下的泳池，"LA 的钱味"在比佛利。' },
  { id: 'lag_venice_bnb', name: '威尼斯海滩 B&B', icon: '🏠', tag: '住', type: '住宿', price: 600, desc: '海景民宿，阳台看自行车道。楼下是肌肉海滩的"奇人秀"。' }
);
