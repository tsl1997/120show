/* 漠河 分册02：特色周边（旧档全保留 + 冻梨/铁锅炖/文创/体验等新增） */
window.MOH_GIFTS = window.MOH_GIFTS || [];
window.MOH_GIFTS.push(
  /* ---- 旧档保留 ---- */
  { id: 'mohe_dongbei_cai', name: '小鸡炖蘑菇·杀猪菜', icon: '🍲', tag: '食', type: '美食', price: 60, desc: '东北菜在漠河格外香，铁锅炖江鱼配贴饼子。零下30度屋里20多度，"屋里穿短袖吃锅"。' },
  { id: 'mohe_lengmian', name: '冷水鱼·江鱼宴', icon: '🐟', tag: '食', type: '美食', price: 120, desc: '黑龙江冷水鱼肉紧味鲜，"炖江鱼"是待客硬菜。鱼籽酱蘸饼，北国江鲜。' },
  { id: 'mohe_lie', name: '蓝莓·红豆制品', icon: '🫐', tag: '食', type: '特产', price: 50, desc: '大兴安岭野生蓝莓与北国红豆。蓝莓酒、蓝莓干，"极地浆果"。' },
  { id: 'mohe_mogu', name: '榛蘑·灵芝', icon: '🍄', tag: '食', type: '特产', price: 80, desc: '大兴安岭野生榛蘑炖小鸡是"东北名菜之源"。灵芝与黑木耳，山货 hardened。' },
  { id: 'mohe_xunlu', name: '驯鹿周边·鄂温克文创', icon: '🦌', tag: '衣', type: '文创', price: 60, desc: '驯鹿角（合法工艺制品）钥匙扣、鄂温克桦树皮画。最后的驯鹿部落手作。' },
  { id: 'mohe_beiji', name: '"找北"文创', icon: '🧭', tag: '衣', type: '文创', price: 35, desc: '最北邮局明信片、"我找到北了"T恤。北极村限定，"北"字冰箱贴全家桶。' },
  { id: 'mohe_guang', name: '极光主题文创', icon: '🌠', tag: '衣', type: '文创', price: 40, desc: '极光配色围巾、星空星空瓶。"没看到极光？把极光戴走"。' },
  { id: 'mohe_bingxue', name: '泼水成冰体验', icon: '❄️', tag: '玩', type: '体验', price: 30, desc: '零下40度泼热水成冰雾，"东北魔法"。视频一定要慢动作，"泼水成冰教学现场"。' },
  { id: 'mohe_xuexiang', name: '马拉爬犁·雪地摩托', icon: '🛷', tag: '玩', type: '体验', price: 150, desc: '马拉爬犁穿林海，铃铛叮当。雪地摩托冲雪原，"北国雪原拉力赛"。' },
  { id: 'mohe_yuzhuo', name: '凿冰捕鱼体验', icon: '🎣', tag: '玩', type: '体验', price: 100, desc: '黑龙江冰面凿洞下网，"冬捕"。拉网出水鱼瞬间冻住，"最北的渔猎"。' },
  { id: 'mohe_hong', name: '圣诞村滑雪', icon: '🎿', tag: '玩', type: '体验', price: 180, desc: '最北滑雪场雪期长达8个月。圣诞老人陪你滑雪，"极地滑雪初体验"。' },
  { id: 'mohe_minsu', name: '东北火炕民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '火炕烧得热热乎乎，"上炕唠嗑"。窗外零下40度，屋里睡得香甜。' },
  /* ---- 新增周边 ---- */
  { id: 'mohg_dongli', name: '冻梨·冻柿子', icon: '🍐', tag: '食', type: '美食', price: 20, desc: '冻梨要在凉水里"缓"着吃，等冰壳褪去咬开满口甜汁。极寒里冻出的梨，是东北冬天最提神的零嘴。' },
  { id: 'mohg_tieguoe', name: '铁锅炖大鹅', icon: '🍲', tag: '食', type: '美食', price: 180, desc: '大鹅排骨豆角土豆一锅乱炖，锅边贴上玉米饼子。柴火把铁锅烧得滋滋响，一群人围着锅抢食最是热闹。' },
  { id: 'mohg_lanmeizhi', name: '北极蓝莓汁', icon: '🥤', tag: '食', type: '饮品', price: 25, desc: '大兴安岭野生蓝莓榨成的果汁，颜色浓得像墨。酸甜里带一点野果清香，冰镇之后喝起来最解腻。' },
  { id: 'mohg_baihuarong', name: '白桦茸茶', icon: '🍵', tag: '食', type: '饮品', price: 90, desc: '长在白桦树干上的珍稀菌类，切片煮水有淡淡木质香。林区人当养生茶喝了一辈子，被人称为森林软黄金。' },
  { id: 'mohg_shanzhen', name: '猴头菇·山珍礼盒', icon: '🍄', tag: '食', type: '特产', price: 95, desc: '猴头菇形似猴头长在柞树干上，与熊掌燕窝齐名。配上榛蘑木耳装进礼盒，把兴安岭的鲜美打包带走。' },
  { id: 'mohg_songxiang', name: '松针香包', icon: '🌲', tag: '闻', type: '特产', price: 30, desc: '用樟子松松针晾晒缝制的香包，揉一揉满手都是林间气息。挂在床头或者衣柜里，仿佛把大兴安岭带回了家。' },
  { id: 'mohg_mingxinpian', name: '最北明信片套组', icon: '📮', tag: '玩', type: '文创', price: 28, desc: '手绘北极村雪景的明信片套装，白桦与木刻楞小屋跃然纸上。挑几张盖上最北邮戳，寄给远方的人很有仪式感。' },
  { id: 'mohg_zhaobei', name: '找北盖章护照', icon: '📕', tag: '玩', type: '文创', price: 45, desc: '一本印着打卡地图的找北护照，北极村里十几处地标都能盖章。集齐所有印章，就是一趟完整的找北纪念。' },
  { id: 'mohg_tshirt', name: '神州北极文化衫', icon: '👕', tag: '衣', type: '服饰', price: 65, desc: '纯棉白底，胸前印着"神州北极"与极光图案，打卡拍照特别上镜。冬夏都能穿，把北方的豪迈穿在身上。' },
  { id: 'mohg_huayao', name: '东北大花袄', icon: '🧥', tag: '衣', type: '服饰', price: 150, desc: '红绿撞色的大花棉袄是东北冬天的顶流战袍，拍照保暖两不误。穿上它往雪地里一站，年味立刻拉满。' },
  { id: 'mohg_mukeleng', name: '木刻楞火炕民宿', icon: '🛖', tag: '住', type: '住宿', price: 320, desc: '整栋原木搭起的木刻楞小屋，屋内盘着火炕烧得热乎。窗外是零下四十度的雪原，屋里暖得只想赖床。' },
  { id: 'mohg_xunlupali', name: '驯鹿拉雪橇', icon: '🦌', tag: '玩', type: '体验', price: 120, desc: '乘上驯鹿拉的雪橇在林中穿行，铃铛声一路叮当作响。眼前是圣诞村的白桦与雪路，童话感直接拉满。' },
  { id: 'mohg_xueguo', name: '雪国列车车票', icon: '🚂', tag: '行', type: '体验', price: 280, desc: '从哈尔滨一路向北的绿皮火车，窗外从城市渐变到林海雪原。备好棉衣与冻梨，终点是最北的浪漫。' },
  { id: 'mohg_binghuatong', name: '冰滑梯·雪圈联票', icon: '🛝', tag: '玩', type: '体验', price: 60, desc: '北极冰雪乐园的冰滑梯足有几十米长，坐上雪圈一冲到底。耳边是风声与尖叫，玩一遍根本不过瘾。' }
);
