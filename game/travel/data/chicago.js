/* ============ 美国·芝加哥 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chicago',
    name: '芝加哥',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🌆',
    desc: '风城·摩天大楼的故乡：云门"银豆子"倒映天际线，深盘披萨与芝加哥式热狗，密歇根湖畔的建筑游船，爵士与蓝调的老巢。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7200 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'chicago_bean', name: '千禧公园·云门', icon: '🫘', price: 0, desc: '"银豆子"云门映着天际线与人群。皇冠喷泉吐水，"芝加哥的自拍圣地"。' },
      { id: 'chicago_willis', name: '威利斯大厦 Skydeck', icon: '🏙️', price: 200, desc: '442米"西尔斯大厦"，玻璃悬空盒 The Ledge。脚下412米，"腿软观景台"。' },
      { id: 'chicago_architecture', name: '建筑游船', icon: '⛵', price: 250, desc: '芝加哥是"现代建筑学之父城"。游船讲解50+地标，"最棒的城市导览"。' },
      { id: 'chicago_art', name: '芝加哥艺术博物馆', icon: '🖼️', price: 220, desc: '美国第二大艺术馆：《大碗岛的星期天》与美国哥特式。莫奈展厅奢华，"中西部的大都会"。' },
      { id: 'chicago_navy', name: '海军码头·摩天轮', icon: '🎡', price: 0, desc: '密歇根湖畔的娱乐码头，摩天轮与莎士比亚剧院。夏日烟花周三周六，"湖滨的欢乐"。' },
      { id: 'chicago_riverwalk', name: '芝加哥河滨步道', icon: '🌉', price: 0, desc: '圣帕特里克节整条河被染绿。河畔酒吧与桥塔，"美国最漂亮的河岸"。' },
      { id: 'chicago_field', name: '菲尔德自然史博物馆', icon: '🦖', price: 200, desc: '最大霸王龙化石"Sue"镇馆。地球与环境厅，"恐龙迷圣地"。' },
    ],
    souvenirs: [
      { id: 'chicago_pizza', name: '深盘披萨', icon: '🍕', tag: '食', type: '美食', price: 150, desc: '芝士湖+厚饼边，"叉子吃的披萨"。焦尔达诺与卢马尔纳蒂双雄。' },
      { id: 'chicago_hotdog', name: '芝加哥式热狗', icon: '🌭', tag: '食', type: '美食', price: 40, desc: '芥末、洋葱、番茄、腌辣椒、芹菜盐——"但绝不能加番茄酱"。七宗罪式的配料。' },
      { id: 'chicago_popcorn', name: 'Garrett 焦糖芝士爆米花', icon: '🍿', tag: '食', type: '特产', price: 60, desc: '焦糖+芝士双拼混着吃，"上瘾配方"。芝加哥人看球标配。' },
      { id: 'chicago_italian', name: '意式牛肉三明治', icon: '🥖', tag: '食', type: '美食', price: 45, desc: '牛肉汁浸透面包加辣椒。"Dipped"全浸版，"芝加哥的湿面包勇气"。' },
      { id: 'chicago_bean_wen', name: '云门文创', icon: '🫘', tag: '衣', type: '文创', price: 40, desc: '银豆子冰箱贴、明信片。"The Bean"是城市昵称。' },
      { id: 'chicago_blues', name: '蓝调酒吧之夜', icon: '🎸', tag: '玩', type: '体验', price: 150, desc: 'Kingston Mines 双舞台蓝调到凌晨。芝加哥是电声蓝调的故乡，"蓝调的回家路"。' },
      { id: 'chicago_cruise', name: '密歇根湖帆船', icon: '⛵', tag: '玩', type: '体验', price: 200, desc: '湖上看天际线，"城市在湖里倒影"。夏天帆船赛周末。' },
      { id: 'chicago_fireworks', name: '海军码头烟花夜', icon: '🎆', tag: '玩', type: '体验', price: 0, desc: '周三周六晚湖上烟花。摩天轮上看最棒，"湖滨的夏夜仪式"。' },
      { id: 'chicago_river2', name: '染绿河·圣帕特里克节', icon: '🍀', tag: '玩', type: '体验', price: 0, desc: '每年3月17日芝加哥河被染成绿色。"全世界只有芝加哥这么干"。' },
      { id: 'chicago_trolley', name: '高架环线 Loop 步行', icon: '🚆', tag: '行', type: '体验', price: 30, desc: '百年高架铁路环绕市中心，钢铁咆哮。《蝙蝠侠》取景地，"钢铁环城的工业浪漫"。' },
      { id: 'chicago_minsu', name: '河景酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '河滨步道旁酒店，窗看游船与桥梁。冬天看雪落河面，"风城的四季"。' },
    ],
    stories: [
      { id: 'chicago_story_burn', name: '大火烧出的"建筑之城"', icon: '🔥', desc: '1871年芝加哥大火烧毁全城，重建催生了摩天大楼。"世界第一座钢结构高楼"诞生于此。' },
      { id: 'chicago_story_reversed', name: '芝加哥河被"倒流"', icon: '🌊', desc: '1900年工程师把河倒流向密西西比，保护湖水源。"人类工程史上的任性"。' },
      { id: 'chicago_story_gangster', name: '黑帮的"禁酒之城"', icon: '🕵️', desc: '卡彭在禁酒令时代统治芝加哥。蓝调酒吧、地下酒吧 Speakeasy 都源于那个年代。' },
      { id: 'chicago_story_wind', name: '"风城"的真相', icon: '🌬️', desc: 'Windy City 不是因为风大，而是源于政客的"吹牛"（windy）。结果风真的大了。' },
      { id: 'chicago_story_nopi', name: '披萨大战的"深盘派"', icon: '🍕', desc: '纽约人说深盘是"派"，芝加哥人回怼。"披萨战争"打了半个世纪。' },
      { id: 'chicago_story_green', name: '染绿一条河要多少染料', icon: '🍀', desc: '圣帕特里克节只用约18公斤环保橙色染料就染绿整条河。"绿色可持续持续一周"。' },
    ],
  });
})();
