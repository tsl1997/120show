/* ============ 美国·纽约 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'newyork',
    name: '纽约',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🗽',
    desc: '不夜城的大苹果：时代广场的霓虹永不熄灭，中央公园的松鼠比行人从容，百老汇幕布一拉开，整座城都亮了。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'newyork_statue', name: '自由女神像', icon: '🗽', price: 180, desc: '渡轮驶向自由岛，铜像举火炬迎了一百多年风浪。登基座远眺曼哈顿天际线，"移民的灯塔"名不虚传。' },
      { id: 'newyork_times_square', name: '时代广场', icon: '🎆', price: 0, desc: '"世界的十字路口"，巨幅广告屏亮到没有夜晚。跨年夜百万人挤在这里等水晶球落下，平时也是人浪如潮。' },
      { id: 'newyork_central_park', name: '中央公园', icon: '🌳', price: 0, desc: '341公顷的城市绿肺，松鼠在草坪上跳来跳去。划船湖、草莓园、绵羊草坪，四季都有电影取景机位。' },
      { id: 'newyork_met', name: '大都会艺术博物馆', icon: '🏛️', price: 200, desc: '两百万件藏品走不完：埃及神庙整座搬进来。屋顶花园看中央公园全景，"一天看遍五千年"。' },
      { id: 'newyork_empire', name: '帝国大厦', icon: '🏢', price: 250, desc: '1931年的钢铁传奇，86层观景台看纽约层层铺开。夜里塔身变色灯光，"金刚爬过的楼"依然坚挺。' },
      { id: 'newyork_broadway', name: '百老汇', icon: '🎭', price: 400, desc: '《狮子王》《汉密尔顿》连演几十年。当天抽"Lottery折扣票"，前排座位几十美元就能拿下。' },
      { id: 'newyork_highline', name: '高线公园', icon: '🚂', price: 0, desc: '废弃高架铁路改成空中花园，穿过旧仓库与公寓。走到尽头是哈德逊广场的"大松果"雕塑，新旧纽约一线牵。' },
    ],
    souvenirs: [
      { id: 'newyork_pizza', name: '纽约披萨', icon: '🍕', tag: '食', type: '美食', price: 40, desc: '薄片披萨对折着吃，芝士拉丝半米长。街角"一块披萨"文化，站着吃完才地道。' },
      { id: 'newyork_bagel', name: '贝果配奶油芝士', icon: '🥯', tag: '食', type: '美食', price: 35, desc: '水煮再烤的贝果外韧内软，抹厚厚奶油芝士。加烟熏三文鱼是"纽约早晨的仪式"。' },
      { id: 'newyork_hotdog', name: '街头热狗', icon: '🌭', tag: '食', type: '美食', price: 25, desc: '路边餐车热狗加芥末酸菜，两三美元一管。中央公园长椅上啃热狗喂松鼠，美剧同款。' },
      { id: 'newyork_steak', name: '纽约客牛排', icon: '🥩', tag: '食', type: '美食', price: 350, desc: '老牌牛排馆炭烤带骨纽约客，配波本威士忌。木桌上一刀切开，肉汁与烟雾齐飞。' },
      { id: 'newyork_cheesecake', name: '纽约芝士蛋糕', icon: '🍰', tag: '食', type: '美食', price: 60, desc: '厚重扎实的重乳酪，配草莓酱。朱尼尔斯老店一块传三代，"芝士界的纪念碑"。' },
      { id: 'newyork_coffee', name: '街头咖啡车咖啡', icon: '☕', tag: '食', type: '饮品', price: 15, desc: '"Coffee regular"（加奶加糖）是纽约早晨暗号。两美元一杯，站在路边三口喝完去赶地铁。' },
      { id: 'newyork_moma', name: 'MoMA 文创', icon: '🎨', tag: '衣', type: '文创', price: 120, desc: '现代艺术博物馆的设计商店全球闻名。梵高《星月夜》丝巾、毕加索马克杯，"把艺术带回家"。' },
      { id: 'newyork_cap', name: 'NY 棒球帽', icon: '🧢', tag: '衣', type: '服饰', price: 180, desc: '洋基队 NY 帽是全球街头的硬通货。球场里的正版与时代广场的平价款，各取所需。' },
      { id: 'newyork_subway', name: '纽约地铁体验', icon: '🚇', tag: '行', type: '体验', price: 20, desc: '24小时运营的百年地铁，站台上有乐队也有鼠。Uptown/Downtown 别坐反，"纽约生存第一课"。' },
      { id: 'newyork_ferry', name: '史泰登岛渡轮', icon: '⛴️', tag: '行', type: '体验', price: 0, desc: '免费渡轮往返曼哈顿与史泰登岛，经过自由女神正面。本地通勤、游客巡游，"全纽约性价比之王"。' },
      { id: 'newyork_nba', name: 'NBA 现场观赛', icon: '🏀', tag: '玩', type: '体验', price: 600, desc: '麦迪逊花园广场看尼克斯主场，山呼海啸。中场秀、T恤炮、"Kiss Cam"，美式体育的沉浸体验。' },
      { id: 'newyork_hotel', name: '曼哈顿景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 1000, desc: '纽约酒店贵到出名，但窗外是帝国大厦就值。夜里数着楼灯入睡，"住在电影里"。' },
    ],
    stories: [
      { id: 'newyork_story_squirrel', name: '中央公园的"松鼠居民"', icon: '🐿️', desc: '中央公园松鼠不怕人，会凑到野餐毯边"讨饭"。游客攻略：别喂，它们只是演技好。' },
      { id: 'newyork_story_lottery', name: '百老汇的"抽票文化"', icon: '🎟️', desc: '热门剧当天抽签卖几十美元前排票，粉丝凌晨排队摇号。有人连抽七天中一次，"纽约的运气考试"。' },
      { id: 'newyork_story_pizza', name: '对折吃披萨的物理学', icon: '🍕', desc: '纽约人把薄披萨对折成"U形"防止下垂，还被写成了数学论文。科学解释：折痕增加刚性。' },
      { id: 'newyork_story_subway', name: '地铁里的"自由演出"', icon: '🎺', desc: '纽约地铁艺人要考试拿执照，水平参差到"一个是交响乐、一个是电钻"。偶尔遇到神级演出，全车厢鼓掌。' },
      { id: 'newyork_story_rush', name: '"纽约分钟"', icon: '⏱️', desc: '"纽约分钟"是俚语，指这里一切都快：走路快、说话快、翻脸也快。外地人第一次过马路就懂了。' },
      { id: 'newyork_story_bagel', name: '贝果的"水之谜"', icon: '🥯', desc: '都说纽约自来水让贝果格外好吃，科学家研究多年无定论。纽约人不在乎：好吃就完事了。' },
    ],
  });
})();
