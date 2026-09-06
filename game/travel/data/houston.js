/* ============ 美国·休斯敦 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'houston',
    name: '休斯敦',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🚀',
    desc: '太空城：NASA 任务控制中心"休斯敦，我们有麻烦了"，能源与医疗之都，德州最大的多元美食江湖。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'houston_nasa', name: 'NASA 约翰逊航天中心', icon: '🚀', price: 200, desc: '"太空城"心脏：任务控制中心与航天员训练中心。摸真月球岩石，看火箭公园的土星5号，"人类登月的地面大脑"。' },
      { id: 'houston_spacecenter', name: '独立广场·航天之旅', icon: '🛰️', price: 250, desc: 'Space Center Houston 官方游客中心。穿梭机搬运机 Independence 搭载真 NASA 747，"坐上真飞机"。' },
      { id: 'houston_medical', name: '德州医学中心·休斯顿美术馆', icon: '🖼️', price: 0, desc: '全球最大医学中心，"器官移植之都"。休斯顿美术馆莫奈与埃及馆，"德州的文艺"。' },
      { id: 'houston_bayou', name: '水牛河公园·地下隧道', icon: '🌉', price: 0, desc: '市中心9.6公里地下隧道避暑通道。"全球最大地下城"之一。' },
      { id: 'houston_galleria', name: '盖勒里亚购物中心', icon: '🛍️', price: 0, desc: '德州最大商场，室内滑冰场在中央。奢侈品旗舰店云集，"石油美元的商场"。' },
      { id: 'houston_kemah', name: 'Kemah 海滨木板路', icon: '🎡', price: 0, desc: '伽尔维斯顿湾的游乐园码头。游船看日落，"墨西哥湾的傍晚"。' },
      { id: 'houston_johnson', name: '林登约翰逊航天中心·NASA 樱桃', icon: '🌸', price: 0, desc: '休斯顿也有樱花季，日式花园 Hermann Park。日本花园与野牛，"德州的温柔角落"。' },
    ],
    souvenirs: [
      { id: 'houston_bbq', name: '德州烧烤（Brisket）', icon: '🍖', tag: '食', type: '美食', price: 150, desc: '烟熏牛胸肉16小时，"德州 BBQ 三巨头之一"。Corkscrew BBQ 排队王，配白面包与酸黄瓜。' },
      { id: 'houston_texmex', name: 'Tex-Mex 德墨菜', icon: '🌮', tag: '食', type: '美食', price: 70, desc: '德州墨西哥菜：辣酱玉米片、fajita 铁板。"Houston-style fajita"发源地。' },
      { id: 'houston_vietnamese', name: '越南粉（Pho）', icon: '🍜', tag: '食', type: '美食', price: 50, desc: '休斯顿越南社区全美第二，Pho 浓度爆表。Banh Mi 法棍三明治，"越南的第二故乡"。' },
      { id: 'houston_crawfish', name: '凯金小龙虾', icon: '🦞', tag: '食', type: '美食', price: 90, desc: '路易斯安那凯金风味小龙虾配蒜蓉黄油。"越南-凯金 fusion"，春天最肥。' },
      { id: 'houston_nasa_wen', name: 'NASA 文创', icon: '🚀', tag: '衣', type: '文创', price: 80, desc: '任务控制徽章、宇航员冰淇淋（冻干）。"Houston, we have a problem"T恤。' },
      { id: 'houston_oil', name: '石油能源文创', icon: '🛢️', tag: '衣', type: '文创', price: 40, desc: '油井模型、能源城纪念品。"石油之城"的硬核纪念。' },
      { id: 'houston_nasa_tour', name: '任务控制中心导览', icon: '🎙️', tag: '玩', type: '体验', price: 300, desc: '进真正的 Apollo 任务控制厅（历史复原）。坐登月指挥席，"人类一大步的地面现场"。' },
      { id: 'houston_astro', name: 'Minute Maid 棒球观赛', icon: '⚾', tag: '玩', type: '体验', price: 250, desc: '太空人队主场，有可开合屋顶。"2017/2022 双冠王"的球场。' },
      { id: 'houston_rodeo', name: '休斯顿牲畜展（Rodeo）', icon: '🐂', tag: '玩', type: '体验', price: 200, desc: '全球最大牲畜展与牛仔竞技（2-3月）。骑牛与concert，"德州精神"全景。' },
      { id: 'houston_kemah2', name: 'Kemah 海滨游乐园', icon: '🎡', tag: '玩', type: '体验', price: 150, desc: '海滨过山车与摩天轮，海风凉爽。"德州人的周末海滨"。' },
      { id: 'houston_minsu', name: 'Montrose 文艺民宿', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: 'Montrose 区艺术民宿，壁画街区。多样性之城的核心区。' },
    ],
    stories: [
      { id: 'houston_story_problem', name: '"休斯敦，我们有麻烦了"', icon: '🎙️', desc: '阿波罗13号的真实台词（电影改编省略了the）。这句话让休斯敦成了"太空危机"的代名词。' },
      { id: 'houston_story_oil2', name: '石油带来的一切', icon: '🛢️', desc: '1901年 Spindletop 油井喷发，德州石油时代开始。休斯敦从木材城变能源首都。' },
      { id: 'houston_story_medical', name: '全球最大医学城', icon: '🏥', desc: '德州医学中心10万员工，心脏移植数量全球第一。"来这里续命"是真实说法。' },
      { id: 'houston_story_viet', name: '越南城的"第二故乡"', icon: '🍜', desc: '1975年后越南难民聚居休斯顿。Bellaire 街的 Pho 香气，"战争后的和平滋味"。' },
      { id: 'houston_story_heat', name: '休斯顿的"桑拿天"', icon: '🔥', desc: '夏天体感温度超43度还带湿度。所以有地下隧道——"德州人也在逃"。' },
      { id: 'houston_story_space2', name: '为什么是休斯敦', icon: '🚀', desc: '1961年肯尼迪选航天中心：要临水（运大火箭）、气候好、有大学。德州议员约翰逊是副总统——"政治也是科学"。' },
    ],
  });
})();
