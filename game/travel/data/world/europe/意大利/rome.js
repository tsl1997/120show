/* ============ 意大利·罗马 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'rome',
    name: '罗马',
    country: '意大利',
    cc: 'SCH',
    flag: '🇮🇹',
    region: '欧洲',
    hero: '🏟️',
    desc: '永恒之城：斗兽场的石拱历经两千年，许愿池的硬币替全人类许愿，一口意式浓缩配一球开心果冰淇淋，就是罗马的下午。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5800 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'rome_colosseum', name: '罗马斗兽场', icon: '🏟️', price: 130, desc: '公元80年建成的五万人竞技场，地下机关还能看到。站在看台上想象角斗士入场，石缝里的猫都自带历史感。' },
      { id: 'rome_foro', name: '古罗马广场·帕拉蒂尼山', icon: '🏛️', price: 110, desc: '凯撒演讲的废墟、神庙的石柱与凯旋门。行走其间像翻一册断代的帝国相册，随手一指都是两千年。' },
      { id: 'rome_fontana', name: '特雷维喷泉', icon: '⛲', price: 0, desc: '巴洛克许愿池，背对池水抛一枚硬币"还会再来"。人山人海的十八世纪"露天剧场"，夜景灯光比白天更惊艳。' },
      { id: 'rome_vaticano', name: '梵蒂冈·圣彼得大教堂', icon: '⛪', price: 130, desc: '世界最大的教堂，米开朗基罗的《圣殇》在侧。登顶551级台阶俯瞰"钥匙孔广场"，梵蒂冈博物馆里西斯廷穹顶仰断脖子。' },
      { id: 'rome_pantheon', name: '万神殿', icon: '🏛️', price: 20, desc: '两千年前的混凝土穹顶至今无钢筋，中央圆孔洒下"神光"。拉斐尔长眠于此，雨天光柱里的雨丝像香水喷雾。' },
      { id: 'rome_trastevere', name: '特拉斯提弗列', icon: '🍷', price: 0, desc: '罗马人的老城生活区，鹅卵石巷子飘着意面香。日落时分爬上雅尼库伦山，全城屋顶镀上金色。' },
      { id: 'rome_spagna', name: '西班牙广场·孔多蒂街', icon: '🪜', price: 0, desc: '《罗马假日》赫本吃冰淇淋的台阶。坐在阶梯上吃Gelato虽被禁止，但买一支到巷子里吃才是"正确姿势"。' },
    ],
    souvenirs: [
      { id: 'rome_pasta', name: '手工意面', icon: '🍝', tag: '食', type: '美食', price: 80, desc: 'Carbonara用蛋黄培根罗马式做法，意面煮到弹牙。老馆子里主厨用叉子卷面，转出"罗马风情"。' },
      { id: 'rome_pizza', name: '罗马披萨', icon: '🍕', tag: '食', type: '美食', price: 60, desc: '薄脆方切披萨按重量称卖，玛格丽特是试金石。面包房窗口直接"称一角"，边走边吃才地道。' },
      { id: 'rome_gelato', name: '意式冰淇淋', icon: '🍨', tag: '食', type: '美食', price: 25, desc: '开心果味Gelato绿得克制，两球三欧元。老店的冰淇淋低脂浓郁，"小铲子"插在蛋筒上。' },
      { id: 'rome_espresso', name: '意式浓缩·卡布奇诺', icon: '☕', tag: '食', type: '饮品', price: 15, desc: '吧台站着喝一欧元的浓缩，一口一口"意大利节奏"。本地人十点后不喝卡布奇诺，这是"乳制品潜规则"。' },
      { id: 'rome_aperol', name: 'Aperol 气泡酒', icon: '🍹', tag: '食', type: '饮品', price: 70, desc: '橙色开胃酒配橙片苏打，黄昏时配小碟小食。广场边的露天座一杯，看喷泉亮灯。' },
      { id: 'rome_olive_oil', name: '橄榄油·松露酱', icon: '🫒', tag: '食', type: '特产', price: 90, desc: '托斯卡纳橄榄油配罗马黑松露酱。一小瓶"液体黄金"，回家炒蛋都是意式。' },
      { id: 'rome_leather', name: '意大利皮具', icon: '👞', tag: '衣', type: '服饰', price: 280, desc: '手工皮鞋与皮包，"意大利制造"的底气。老作坊里皮匠现缝鞋底，一双鞋能穿十年。' },
      { id: 'rome_murano', name: '穆拉诺玻璃', icon: '🫧', tag: '衣', type: '文创', price: 150, desc: '威尼斯彩色玻璃的"意大利色彩"。玻璃戒指、酒杯，灯光下像凝固的彩虹。' },
      { id: 'rome_coin', name: '许愿池硬币周边', icon: '🪙', tag: '衣', type: '文创', price: 40, desc: '许愿池造型的冰箱贴、硬币巧克力。传说抛硬币会重返罗马，冰箱贴是"复制品的浪漫"。' },
      { id: 'rome_scooter', name: '黄蜂牌摩托巡游', icon: '🛵', tag: '行', type: '体验', price: 350, desc: '租一辆 Vespa 载着人钻巷子，"赫本同款"路线。后座抱紧、风声呼啸，石板路颠出笑声。' },
      { id: 'rome_cooking', name: '意面烹饪课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 250, desc: '意大利奶奶手把手教擀面，"面粉要过筛"与"眼泪不能加"是家训。做完一桌四人一起吃，配基安蒂红酒。' },
      { id: 'rome_hotel', name: '罗马民宿老楼', icon: '🏨', tag: '住', type: '住宿', price: 650, desc: '百年老楼没电梯但有大天台。晚上上去看斗兽场方向的灯火，"罗马假日"续集开拍。' },
    ],
    stories: [
      { id: 'rome_story_coin', name: '许愿池的硬币去哪了', icon: '🪙', desc: '特雷维喷泉每年捞起上百万欧硬币，全部捐给慈善机构。抛硬币许愿的浪漫，最后变成了真实的善款。' },
      { id: 'rome_story_cat', name: '废墟上的"猫主管"', icon: '🐈', desc: '银塔广场的恺撒遇刺废墟成了流浪猫保护区，猫在两千年石柱上晒太阳。志愿者轮流投喂，"罗马的猫也有编制"。' },
      { id: 'rome_story_concrete', name: '两千年不倒的穹顶', icon: '🏛️', desc: '万神殿穹顶用火山灰混凝土浇筑，比现代混凝土更耐久。工程师研究多年仍说："我们还在学。"' },
      { id: 'rome_story_coat', name: '穿短裙进教堂被拦', icon: '⛪', desc: '圣彼得大教堂门口有"着装检查"，短裤短裙不让进。游客学会带一条围巾，"入乡随俗"的第一课。' },
      { id: 'rome_story_fountain_lunch', name: '广场上的"三欧元午餐"', icon: '🍕', desc: '面包房窗口一角披萨三欧元，广场台阶坐下就开吃。罗马人的"平价美食哲学"，游客称"最幸福的省钱"。' },
      { id: 'rome_story_traffic', name: '罗马的"无规则路口"', icon: '🚗', desc: '罗马司机变道全靠眼神与手势，行人过马路要"自信"。游客攻略：跟本地人一起过，脚步同步就是通行证。' },
    ],
  });
})();
