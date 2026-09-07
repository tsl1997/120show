/* ============ 美国·明尼阿波利斯 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'minneapolis',
    name: '明尼阿波利斯（双子城）',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🌊',
    desc: '千湖之城·双子星：与圣保罗并称双子城，美国最大购物中心Mall of America，鲍勃迪伦与王子（Prince）的音乐故乡。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7300 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'minneapolis_moa', name: 'Mall of America', icon: '🛍️', price: 0, desc: '美国最大购物中心，520家店+室内游乐园。 Nickelodeon 宇宙过山车在商场里，"购物即游乐园"。' },
      { id: 'minneapolis_chain', name: '石拱桥·河滨磨坊区', icon: '🌉', price: 0, desc: '1883年石拱桥横跨密西西比。磨坊城博物馆讲"面粉之都"历史，"曾经的世界磨坊"。' },
      { id: 'minneapolis_art', name: '沃克艺术中心·勺子桥', icon: '🎨', price: 0, desc: '勺子与樱桃雕塑是城市标志。明尼阿波利斯雕塑花园，"明尼苏达的明信片"。' },
      { id: 'minneapolis_prince', name: '王子（Prince）故居 Paisley Park', icon: '💜', price: 300, desc: '王子的工作室与住宅开放参观。《Purple Rain》的紫色调，"音乐天才的秘密世界"。' },
      { id: 'minneapolis_dylan', name: '迪伦故乡希宾（Hibbing）', icon: '🎸', price: 0, desc: '鲍勃迪伦出生地，"迪伦之路"自驾线。他的高中教室还原，"民谣之王的起点"。' },
      { id: 'minneapolis_lakes', name: '千湖链·明尼哈哈瀑布', icon: '🏞️', price: 0, desc: '"Land of 10,000 Lakes"，城市里湖泊相连。明尼哈哈瀑布与长屋，"朗费罗的诗"。' },
      { id: 'minneapolis_saintpaul', name: '圣保罗·州议会大厦', icon: '🏛️', price: 0, desc: '双子城的另一半：圣保罗大教堂金顶。 Summit Avenue 维多利亚豪宅街，菲茨杰拉德故居。' },
    ],
    souvenirs: [
      { id: 'minneapolis_hotdish', name: 'Hotdish 焗菜', icon: '🥘', tag: '食', type: '美食', price: 60, desc: '明尼苏达灵魂菜：肉、蔬菜、罐头汤焗一起。"中西部妈妈的 comfort food"。' },
      { id: 'minneapolis_juicy', name: 'Juicy Lucy 爆浆芝士堡', icon: '🍔', tag: '食', type: '美食', price: 70, desc: '芝士"包在肉饼里面"的汉堡，咬开会爆浆烫嘴。Mat’ 与 5-8 Club 双雄之争。' },
      { id: 'minneapolis_wild', name: '野米汤·湖鱼', icon: '🍲', tag: '食', type: '美食', price: 50, desc: '明尼苏达是"野米之乡"，野米奶油汤。湖钓鲈鱼与白斑狗鱼，"北地的湖味"。' },
      { id: 'minneapolis_prince_wen', name: '王子（Prince）周边', icon: '💜', tag: '衣', type: '文创', price: 80, desc: 'Purple Rain 黑胶、紫雨 T恤。"Prince4Ever"的紫色纪念。' },
      { id: 'minneapolis_dylan_wen', name: '迪伦周边', icon: '🎸', tag: '衣', type: '文创', price: 80, desc: 'Bob Dylan 黑胶与歌词手稿复刻。希宾访客中心限定款。' },
      { id: 'minneapolis_mall_wen', name: 'MOA 限定周边', icon: '🧸', tag: '衣', type: '文创', price: 50, desc: 'Mall of America 限定玩偶与徽章。 Nickelodeon 角色商品，"最大商场"的证明。' },
      { id: 'minneapolis_mall_rides', name: 'MOA 游乐园通票', icon: '🎢', tag: '玩', type: '体验', price: 300, desc: 'Nickelodeon Universe 27项游乐设施。"商场里的过山车"从天花板穿过。' },
      { id: 'minneapolis_lake2', name: '千湖划船·冬季冰钓', icon: '🛶', tag: '玩', type: '体验', price: 120, desc: '夏天划船帆船，冬天冰屋冰钓。"湖是明尼苏达人的后院"。' },
      { id: 'minneapolis_skyway', name: '空中步道穿城', icon: '🏙️', tag: '行', type: '体验', price: 0, desc: '双子城11公里"skyway"空中连廊防寒。"冬天不用出门"的城市设计。' },
      { id: 'minneapolis_bike', name: 'Chain of Lakes 骑行', icon: '🚲', tag: '玩', type: '体验', price: 60, desc: '沿湖骑行22公里绿道。夏天人人下水，"明尼苏达的夏天很珍贵"。' },
      { id: 'minneapolis_minsu', name: '河滨 Loft 酒店', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '磨坊区老厂房改造酒店，石拱桥窗景。"面粉之都的工业浪漫"。' },
    ],
    stories: [
      { id: 'minneapolis_story_prince2', name: '王子是"一个人的乐队"', icon: '💜', desc: 'Prince 首专27种乐器全自己演奏。Paisley Park 里的紫雨摩托，"Purple Rain"永远37岁。' },
      { id: 'minneapolis_story_moa2', name: 'MOA建在"棒球场遗址"上', icon: '🛍️', desc: 'Mall of America 建在原大都会球场旧址，本垒板保留在商场里。"在垒上购物"的冷知识。' },
      { id: 'minneapolis_story_flour', name: '"面粉之都"的过去', icon: '🌾', desc: '1880年明尼阿波利斯是世界最大面粉产地，Gold Medal 面粉发家于此。磨坊爆炸史上最惨，如今是博物馆。' },
      { id: 'minneapolis_story_winter', name: '零下40度的"冰城日常"', icon: '❄️', desc: '明尼苏达冬天能到零下40度，冰洞与冰钓是日常。"南边的朋友以为我们住冰屋"。' },
      { id: 'minneapolis_story_dylan2', name: '迪伦的"北地民谣"', icon: '🎸', desc: '鲍勃迪伦在希宾矿区长大，铁锈地带塑造他的嗓音。诺贝尔文学奖得主，"民谣诗人"。' },
      { id: 'minneapolis_story_nice', name: '"明尼苏达式友善"', icon: '🤝', desc: 'Minnesota Nice 是全国闻名的地方性格。客气、内敛、帮助陌生人 shove snow。' },
    ],
  });
})();
