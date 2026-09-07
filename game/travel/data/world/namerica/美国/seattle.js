/* ============ 美国·西雅图 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'seattle',
    name: '西雅图',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🏔️',
    desc: '翡翠之城：雷尼尔雪山做背景，派克市场抛鱼表演与第一间星巴克，微软亚马逊的科技心脏，咖啡与雨是这座城的浪漫。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'seattle_pike', name: '派克市场', icon: '🐟', price: 0, desc: '1907年的百年市场，"飞鱼表演"叫卖声震天。全球第一家星巴克（1971）排队打卡，口香糖墙猎奇。' },
      { id: 'seattle_space', name: '太空针塔', icon: '🗼', price: 250, desc: '1962年世博会建筑，184米飞碟观景台。旋转玻璃地板"The Loupe"，"西雅图的标志"。' },
      { id: 'seattle_rainier', name: '雷尼尔山国家公园', icon: '🏔️', price: 200, desc: '4392米的活火山，"西雅图的背景墙"。七月野花铺满山坡，"彩虹山"。' },
      { id: 'seattle_chihuly', name: '奇胡利玻璃艺术园', icon: '🔮', price: 220, desc: '玻璃大师戴尔奇胡利的"玻璃花园"。西雅图是玻璃艺术重镇，"玻璃在跳舞"。' },
      { id: 'seattle_fremont', name: '弗里蒙特 weird 区', icon: '🚀', price: 0, desc: '冷战真火箭竖在街头，"弗里蒙特巨魔"藏桥下。列宁像与稀有恐龙雕塑，"宇宙中心的怪"。' },
      { id: 'seattle_waterfront', name: '海滨渡轮·大摩天轮', icon: '⛴️', price: 50, desc: '渡轮去 Bainbridge 岛看天际线回望。52米摩天轮看 Elliott 湾，"海上日落"。' },
      { id: 'seattle_mopop', name: 'MoPOP 流行文化博物馆', icon: '🎸', price: 220, desc: '盖里设计的"熔岩吉他"建筑。Nirvana 与星战展厅，"摇滚之城"的记忆。' },
    ],
    souvenirs: [
      { id: 'seattle_salmon', name: '烟熏三文鱼', icon: '🐟', tag: '食', type: '美食', price: 150, desc: '派克市场真空装烟熏鲑鱼，"西北太平洋的味道"。市场可直邮。' },
      { id: 'seattle_coffee', name: '星巴克烘焙工坊豆', icon: '☕', tag: '食', type: '特产', price: 120, desc: '第一间星巴克保留原logo（裸女版）。"Starbucks Reserve"烘焙工坊限定的豆子。' },
      { id: 'seattle_throw', name: '飞鱼体验·市场文创', icon: '🐟', tag: '玩', type: '体验', price: 0, desc: '摊主把十几斤三文鱼抛过柜台，"鱼会飞"。游客也能被"邀请"接鱼。' },
      { id: 'seattle_gumwall', name: '口香糖墙打卡', icon: '🟢', tag: '玩', type: '体验', price: 0, desc: '市场后巷的墙贴满百万口香糖，"全球最细菌最多的景点"。贴自己的"贡献"。' },
      { id: 'seattle_amazon', name: '亚马逊 Spheres 参观', icon: '🟢', tag: '玩', type: '体验', price: 0, desc: '亚马逊总部的"玻璃雨林球"。300种热带植物，"上班像进热带雨林"。' },
      { id: 'seattle_boeing', name: '波音工厂参观', icon: '✈️', tag: '玩', type: '体验', price: 200, desc: '全球最大建筑里看777总装线。"飞机制造现场"，航空迷必来。' },
      { id: 'seattle_minsu', name: '海湾民宿', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: ' Capitol Hill 的公寓民宿，看雷尼尔山日出。咖啡香里的早晨，"西雅图的节奏"。' },
    ],
    stories: [
      { id: 'seattle_story_starbucks', name: '第一间星巴克的"原味"', icon: '☕', desc: '1971年派克市场开店只卖豆子。现在的原logo是"双尾裸身美人鱼"，咖啡因与传说齐飞。' },
      { id: 'seattle_story_rain', name: '雨城的"咖啡密码"', icon: '🌧️', desc: '西雅图年雨150天，所以咖啡店密度全美第一。"不喝咖啡怎么活"，是本地哲学。' },
      { id: 'seattle_story_tech', name: '微软与亚马逊的"双雄"', icon: '💻', desc: '比尔盖茨从西雅图郊区起步，贝索斯在车库创办亚马逊。西雅图人均工程师浓度全美第一。' },
      { id: 'seattle_story_grunge', name: '垃圾摇滚的诞生地', icon: '🎸', desc: 'Nirvana、Pearl Jam 都从西雅图起家。"Grunge"音乐改写90年代，MoPOP 有专厅。' },
      { id: 'seattle_story_fish', name: '飞鱼的"管理学"', icon: '🐟', desc: '派克市场鱼摊的"抛鱼工作法"被写成管理学畅销书《Fish!》。快乐工作=把鱼抛起来。' },
      { id: 'seattle_story_troll', name: '桥下巨魔的"都市传说"', icon: '👹', desc: '1990年用废铁丝和水泥做的巨魔雕像，抓着一辆真甲壳虫。传说摸鼻子会好运。' },
    ],
  });
})();
