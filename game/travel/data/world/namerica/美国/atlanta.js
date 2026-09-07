/* ============ 美国·亚特兰大 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'atlanta',
    name: '亚特兰大',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🍑',
    desc: '新南方之都：可口可乐与CNN总部，马丁路德金的家乡，《飘》的故事舞台， peach 州的现代奇迹。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'atlanta_cocacola', name: '可口可乐世界', icon: '🥤', price: 200, desc: '品尝全球100种可口可乐产品（有怪味！）。秘密配方保险库，"快乐水的总部"。' },
      { id: 'atlanta_cnn', name: 'CNN 全球总部', icon: '📺', price: 100, desc: '24小时新闻电视台的"直播现场"导览。看主播台与控制室，"新闻行业的后台"。' },
      { id: 'atlanta_mlk', name: '马丁路德金国家历史遗址', icon: '🕊️', price: 0, desc: 'MLK 出生老屋、教堂与墓地。Ebenezer 浸信会教堂，"我有一个梦想"的起点。' },
      { id: 'atlanta_aquarium', name: '乔治亚水族馆', icon: '🐋', price: 280, desc: '曾是世界最大水族馆，鲸鲨四条同游。海底隧道穿过"鲸鲨风暴"，"内海的震撼"。' },
      { id: 'atlanta_margaret', name: '玛格丽特米切尔故居·《飘》', icon: '📖', price: 40, desc: '《飘》（Gone with the Wind）作者故居。作者写完就"再也不写"的传奇。' },
      { id: 'atlanta_ponce', name: 'Ponce City 市场· BeltLine', icon: '🛍️', price: 0, desc: '1926年西尔斯仓库改的美食市场。屋顶游乐园与天际线，"亚特兰大的高线公园"。' },
      { id: 'atlanta_stone', name: '石山公园', icon: '⛰️', price: 80, desc: '世界最大整块裸露花岗岩浮雕。山顶日落+激光秀，"乔治亚的巨石"。' },
    ],
    souvenirs: [
      { id: 'atlanta_bbq4', name: '南方烧烤与炸鸡', icon: '🍗', tag: '食', type: '美食', price: 80, desc: '南方炸鸡配蜜糖，"soul food"经典。GAP 酱（biscuit 配肉汁）早餐。' },
      { id: 'atlanta_peach', name: '桃子甜品· Peach Cobbler', icon: '🍑', tag: '食', type: '美食', price: 40, desc: '乔治亚是"桃州"（Peach State）。桃子冰淇淋与 cobbler，"南方甜"。' },
      { id: 'atlanta_coke_wen', name: '可口可乐文创', icon: '🥤', tag: '衣', type: '文创', price: 40, desc: '可乐玻璃瓶、北极熊玩偶、全球限量罐。"可口可乐"的出生地纪念。' },
      { id: 'atlanta_gone', name: '《飘》文创', icon: '📖', tag: '衣', type: '文创', price: 45, desc: '《飘》书籍与"Frankly my dear"T恤。塔拉庄园的纪念。' },
      { id: 'atlanta_mlk_wen', name: '民权运动文创', icon: '🕊️', tag: '衣', type: '文创', price: 40, desc: '"I have a dream"海报、MLK 徽章。"民权圣地"的纪念。' },
      { id: 'atlanta_movie', name: '影视打卡之旅', icon: '🎬', tag: '玩', type: '体验', price: 120, desc: '《行尸走肉》《复仇者联盟》取景地巡礼。"南方好莱坞"的片场。' },
      { id: 'atlanta_beltline', name: 'BeltLine 东线骑行', icon: '🚲', tag: '玩', type: '体验', price: 50, desc: '旧铁路环线改的绿道，壁画+公园。"城市更新的样本"。' },
      { id: 'atlanta_whale', name: '水族馆"鲸鲨潜水"', icon: '🤿', tag: '玩', type: '体验', price: 400, desc: '在鲸鲨池里浮潜/潜水。"与鲸鲨同游"的震撼（需要预约）。' },
      { id: 'atlanta_foodhall', name: 'Krog Street 市场觅食', icon: '🍢', tag: '玩', type: '体验', price: 60, desc: '1920年代仓库改的美食市场。"亚特兰大的胃"。' },
      { id: 'atlanta_minsu', name: 'Inman Park 民宿', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '维多利亚老宅民宿，BeltLine 旁。南方门廊摇椅的傍晚。' },
    ],
    stories: [
      { id: 'atlanta_story_coke2', name: '可口可乐的"药房出身"', icon: '🥤', desc: '1886年药剂师彭伯顿在亚特兰大发明可乐，最初是"头痛药水"。秘密配方存在太阳信托银行保险库。' },
      { id: 'atlanta_story_mlk2', name: 'MLK 的"亚特兰大"', icon: '🕊️', desc: '马丁路德金出生、布道、安葬都在 Sweet Auburn 区。全家三代牧师同一座教堂。' },
      { id: 'atlanta_story_gone2', name: '《飘》与"南方的骄傲"', icon: '📖', desc: '米切尔1936年在家写完《飘》，普利策奖+奥斯卡。亚特兰大被"火烧"的场景就是1864年真实历史。' },
      { id: 'atlanta_story_airport', name: '世界最忙机场', icon: '✈️', desc: '哈茨菲尔德机场连续20+年全球客流第一。"在美国转机必经亚特兰大"。' },
      { id: 'atlanta_story_movie2', name: '"南方好莱坞"的税收魔法', icon: '🎬', desc: '乔治亚州30%影视税收优惠，漫威片都来拍。Yogi Bear："我们这天天有明星。"' },
      { id: 'atlanta_story_peach2', name: '桃州其实产桃不多', icon: '🍑', desc: '乔治亚桃子产量加州之后。"Peach State"是营销的胜利，但桃子甜品确实好吃。' },
    ],
  });
})();
