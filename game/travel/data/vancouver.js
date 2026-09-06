/* ============ 加拿大·温哥华 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'vancouver',
    name: '温哥华',
    country: '加拿大',
    cc: 'CA',
    flag: '🇨🇦',
    region: '加拿大·西部',
    hero: '🏔️',
    desc: '山海之间的宜居之城：斯坦利公园的环岛海堤、雪山下的唐人街，上午滑雪下午出海看鲸，自然与都市无缝切换。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5500 }],
    visa: { cost: 750, note: '加拿大访客签证' },
    spots: [
      { id: 'vancouver_stanley', name: '斯坦利公园', icon: '🌳', price: 0, desc: '北美最大城市公园，10公里海堤环岛步道。图腾柱与玫瑰园，骑一圈海堤是"温哥华人的周日"。' },
      { id: 'vancouver_suspension', name: '卡皮拉诺吊桥公园', icon: '🌉', price: 380, desc: '137米的悬索桥横跨峡谷，桥下是雨林与河流。悬崖步道和树屋栈道，"脚软但值回票价"。' },
      { id: 'vancouver_gastown', name: '煤气镇·蒸汽钟', icon: '⏰', price: 0, desc: '百年蒸汽钟每15分钟鸣笛，红砖老街铺着鹅卵石。枫叶国旗下的咖啡馆与画廊，"温哥华的老灵魂"。' },
      { id: 'vancouver_grouse', name: '松鸡山', icon: '🚡', price: 350, desc: '缆车十分钟登顶，俯瞰全城与太平洋。冬天滑雪、夏天看伐木工人秀与棕熊保护区，"一座山的四季"。' },
      { id: 'vancouver_granville', name: '格兰维尔岛', icon: '🎨', price: 0, desc: '旧工厂改造的艺术岛，公共市场的水果堆成山。玻璃工坊与啤酒厂并存，周末的水上巴士排起队。' },
      { id: 'vancouver_whale', name: '观鲸之旅', icon: '🐋', price: 800, desc: '快艇出海追虎鲸与座头鲸，向导用对讲机共享"鲸讯"。鲸尾拍出水面的瞬间，全船屏息。' },
      { id: 'vancouver_canada_place', name: '加拿大广场·五帆', icon: '⛵', price: 0, desc: '五面白帆的邮轮码头，像停泊在市中心的大船。 flyover 加拿大4D飞行影院，"全国风光一网打尽"。' },
    ],
    souvenirs: [
      { id: 'vancouver_sushi', name: '加州卷发源地寿司', icon: '🍣', tag: '食', type: '美食', price: 90, desc: '加州卷其实是温哥华寿司师傅发明的。牛油果蟹肉卷配味噌汤，" Vancouver 式"午餐。' },
      { id: 'vancouver_salmon', name: '烟熏三文鱼', icon: '🐟', tag: '食', type: '特产', price: 150, desc: 'BC省野生三文鱼烟熏切片，真空包装。原住民的"生命之鱼"，枫糖腌制的口味最经典。' },
      { id: 'vancouver_japadog', name: '日式热狗', icon: '🌭', tag: '食', type: '美食', price: 45, desc: 'Japadog 餐车把海苔柴鱼放上火狗，"温哥华融合味"。章鱼烧酱热狗是招牌，排队三十分钟。' },
      { id: 'vancouver_maple_latte', name: '枫糖爆米花', icon: '🍿', tag: '食', type: '特产', price: 50, desc: '枫糖浆熬出的爆米花，"加拿大味"零食。市场里现炒现装，甜到打包。' },
      { id: 'vancouver_bubble', name: '翡翠奶茶（Bubble tea 之城）', icon: '🧋', tag: '食', type: '饮品', price: 40, desc: '温哥华是北美奶茶密度最高的城市之一。台式奶茶配"港式"菠萝油，多元文化的胃。' },
      { id: 'vancouver_poutine', name: '普丁配枫糖培根', icon: '🍟', tag: '食', type: '美食', price: 70, desc: '肉汁奶酪薯条加枫糖培根碎，"西海岸改良版"。滑雪后的一碗，热量就是正义。' },
      { id: 'vancouver_first_nation', name: '原住民艺术', icon: '🪶', tag: '衣', type: '文创', price: 180, desc: '原住民图腾木雕与版画，每一道纹路都有故事。乌鸦与雷鸟图案的挂毯，"太平洋西北的灵魂"。' },
      { id: 'vancouver_jade', name: 'BC玉', icon: '🟢', tag: '衣', type: '特产', price: 260, desc: '加拿大 BC 省出产的碧玉，深绿沉稳。玉手镯与平安扣，唐人街老铺可选。' },
      { id: 'vancouver_bike_seawall', name: '海堤骑行', icon: '🚲', tag: '玩', type: '体验', price: 80, desc: '租单车环斯坦利公园海堤，山海城市一线。十公里骑下来，"温哥华生活方式"入门。' },
      { id: 'vancouver_ski', name: '赛普里斯滑雪', icon: '🎿', tag: '玩', type: '体验', price: 450, desc: '2010冬奥赛场，从山顶看温哥华夜景。上午滑雪下午回城喝咖啡，"只有温哥华能做到"。' },
      { id: 'vancouver_kayak', name: '印第安湾皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 200, desc: '划进 Deep Cove 峡湾，水面平静如镜。海上森林里划两小时，偶遇海豹探头。' },
      { id: 'vancouver_hotel', name: '煤港景酒店', icon: '🏨', tag: '住', type: '住宿', price: 750, desc: '煤港的酒店窗外是雪山与游艇港。清晨薄雾从水面升起，"城市在画里醒来"。' },
    ],
    stories: [
      { id: 'vancouver_story_rain', name: '"雨哥华"的昵称', icon: '🌧️', desc: '温哥华冬天连绵细雨四个月，华人给它起名"雨哥华"。本地人不打伞——"雨太大，伞没用"。' },
      { id: 'vancouver_story_green', name: '全球最绿的城市实验', icon: '🌱', desc: '温哥华立过"2020全球最绿城市"目标，垃圾分类严格到咖啡杯材质。城市被山海森林包裹，政策与自然较劲。' },
      { id: 'vancouver_story_stanley', name: '公园比市中心大', icon: '🌳', desc: '斯坦利公园面积比温哥华市中心还大，1888年就立法保护。"先有公园，后有高楼"。' },
      { id: 'vancouver_story_bear', name: '城市里的"熊出没"', icon: '🐻', desc: '北温住宅区垃圾箱要"防熊锁"，夏季棕熊进城找吃的。新闻里"熊被困在垃圾桶"，消防员来救熊。' },
      { id: 'vancouver_story_ski_sea', name: '上午滑雪下午冲浪', icon: '🏄', desc: '温哥华是全球少有的"同一天可滑雪+出海"的城市。本地人引以为傲的周末：山与海各半天。' },
      { id: 'vancouver_story_chinatown', name: '加拿大"第一唐人街"', icon: '🏮', desc: '温哥华唐人街是加拿大最老的华人街区，千禧门牌坊是地标。中山公园的苏州园林，砖瓦从中国运来。' },
    ],
  });
})();
