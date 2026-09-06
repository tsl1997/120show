/* ============ 德国·柏林 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'berlin',
    name: '柏林',
    country: '德国',
    cc: 'SCH',
    flag: '🇩🇪',
    region: '欧洲',
    hero: '🐻',
    desc: '把历史写在墙上的城市：柏林墙残段与博物馆岛比邻，街头涂鸦、 techno 音乐与烤香肠一起，构成这座自由之城的心跳。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5800 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'berlin_wall', name: '东边画廊·柏林墙', icon: '🧱', price: 0, desc: '1.3公里柏林墙残段，105幅涂鸦画在墙上。"兄弟之吻"和"破墙之车"，历史的伤口开出了艺术。' },
      { id: 'berlin_brandenburg', name: '勃兰登堡门', icon: '🏛️', price: 0, desc: '新古典主义的"和平之门"，见证了分裂与统一。门上的四马战车铜像历经劫掠与归还，柏林的国家名片。' },
      { id: 'berlin_museum_island', name: '博物馆岛', icon: '🏺', price: 100, desc: '五座世界遗产博物馆挤在一座岛上：佩加蒙祭坛、娜芙蒂蒂胸像。一票难求的"文化航母群"。' },
      { id: 'berlin_reichstag', name: '国会大厦玻璃穹顶', icon: '🏛️', price: 0, desc: '诺曼·福斯特的玻璃穹顶把"透明政治"具象化。免费预约登顶，旋转坡道俯瞰全城，议员们在脚下开会。' },
      { id: 'berlin_checkpoint', name: '查理检查站', icon: '🚧', price: 0, desc: '冷战时期东西柏林的通关口岸，美军岗亭复原如初。旁边的柏林墙博物馆讲述越墙者的故事，看完心里发紧。' },
      { id: 'berlin_east_side', name: '亚历山大广场·电视塔', icon: '🗼', price: 130, desc: '368米东德电视塔，球形观景台旋转一圈一小时。下面的世界时钟一转，全城时间尽在指间。' },
      { id: 'berlin_memorial', name: '欧洲被害犹太人纪念碑', icon: '🕯️', price: 0, desc: '2711块灰色石碑如波涛起伏，走在其间逐渐"下沉"。没有说明文字，历史自己会说话。' },
    ],
    souvenirs: [
      { id: 'berlin_currywurst', name: '咖喱香肠', icon: '🌭', tag: '食', type: '美食', price: 45, desc: '切块香肠淋咖喱番茄酱，配薯条和面包。柏林街头"国民小吃"，专门有香肠博物馆为它立传。' },
      { id: 'berlin_doner', name: '土耳其烤肉卷', icon: '🌯', tag: '食', type: '美食', price: 40, desc: '柏林人改良的土耳其卷饼，烤肉蔬菜酱料塞满面饼。凌晨两点的大份卷饼，是"柏林夜生活的终点站"。' },
      { id: 'berlin_beer', name: '德国啤酒·啤酒花园', icon: '🍺', tag: '食', type: '饮品', price: 40, desc: '纯净法酿造的啤酒只有水麦芽啤酒花。树下长桌一坐，一升扎杯配椒盐卷饼，"德式社交"。' },
      { id: 'berlin_brezel', name: '碱水结面包', icon: '🥨', tag: '食', type: '美食', price: 15, desc: 'Brezel 外皮碱香有嚼劲，蘸黄油或芝士酱。面包店门口一篮，配咖啡是"柏林早晨"。' },
      { id: 'berlin_kaffee', name: '黑森林蛋糕', icon: '🍰', tag: '食', type: '美食', price: 45, desc: '樱桃酒奶油蛋糕层层分明，巧克力屑铺满。百年咖啡馆里一茶一蛋糕，"慢得理直气壮"。' },
      { id: 'berlin_wall_piece', name: '柏林墙碎片', icon: '🧱', tag: '衣', type: '文创', price: 120, desc: '真墙碎片装在亚克力盒里附证书。一块混凝土带一小片涂鸦，"自由的价格"可以揣回家。' },
      { id: 'berlin_ampelmann', name: '小人红绿灯文创', icon: '🚦', tag: '衣', type: '文创', price: 50, desc: '东德礼帽小人 Ampelmann 成了城市 IP。交通灯形象做成果酱、马克杯、T恤，"社会主义美学复活"。' },
      { id: 'berlin_bear', name: '柏林熊', icon: '🐻', tag: '衣', type: '文创', price: 60, desc: '城市吉祥物柏林熊做成玩偶与徽章。市政厅前的联合熊雕塑，是游客合影的"熊抱点"。' },
      { id: 'berlin_bike', name: '街头涂鸦导览骑行', icon: '🚲', tag: '玩', type: '体验', price: 150, desc: '骑行穿过涂鸦巷与废弃厂房，"柏林的颓废美学"。向导讲每一幅墙画的故事，比画廊生动十倍。' },
      { id: 'berlin_bunker', name: '地下掩体参观', icon: '🕳️', tag: '玩', type: '体验', price: 130, desc: '二战防空洞与秘密地堡改的博物馆。阴冷灯光下听讲解，出地面那一刻阳光格外珍贵。' },
      { id: 'berlin_club', name: 'Techno 俱乐部夜', icon: '🎧', tag: '玩', type: '体验', price: 180, desc: '柏林是 Techno 圣地，仓库俱乐部通宵营业。"门口排队被DJ选人"，进去就是十二小时的低音轰炸。' },
      { id: 'berlin_hotel', name: '米特区设计酒店', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '老工厂改造的阁楼酒店，天台看柏林墙方向。柏林住宿性价比欧洲最高，工业风房间里睡个好觉。' },
    ],
    stories: [
      { id: 'berlin_story_1989', name: '一夜之间墙开了', icon: '🎉', desc: '1989年11月9日新闻发布会口误宣布"立即生效"，数千市民涌向检查站，哨兵最终放行。柏林墙就这样"含糊地"倒了。' },
      { id: 'berlin_story_bear', name: '熊是柏林的"老市长"', icon: '🐻', desc: '柏林城市徽章是一头站立的熊，800年没换过。游客问"为什么是熊"，柏林人答：因为它比墙活得久。' },
      { id: 'berlin_story_ampel', name: '红绿灯小人的存亡战', icon: '🚦', desc: '两德统一后东德小红人差点被撤换，市民请愿保住它。如今它成了柏林最成功的"文创出口"。' },
      { id: 'berlin_story_doner', name: '烤肉卷是"柏林发明"', icon: '🌯', desc: '土耳其烤肉卷Döner Kebab的现代吃法由柏林土耳其移民发明。柏林人骄傲：我们的国民小吃是"移民融合菜"。' },
      { id: 'berlin_story_free', name: '免费的国会与"玻璃民主"', icon: '🏛️', desc: '国会大厦参观免费但要提前数周预约。玻璃穹顶下走一圈，头顶云朵脚踩议员——"透明"二字被做成了建筑。' },
      { id: 'berlin_story_tech', name: 'Techno 与"不关门的周末"', icon: '🎧', desc: '柏林俱乐部周日早上还在营业，地铁里全是去"续场"的人。这座城市的周末从周五晚开始、周一早晨结束。' },
    ],
  });
})();
