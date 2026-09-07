/* ============ 美国·迈阿密 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'miami',
    name: '迈阿密',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🌴',
    desc: '魔法之城：南海滩的Art Deco彩楼与白色细沙，小哈瓦那的雪茄与萨尔萨，拉丁风情与美国海滩文化的融合体。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'miami_southbeach', name: '南海滩（South Beach）', icon: '🏖️', price: 0, desc: '全球最著名的海滩之一，白沙滩+Art Deco 彩楼。救生亭是"粉彩积木"，"迈阿密的脸面"。' },
      { id: 'miami_deco', name: '装饰艺术区（Art Deco District）', icon: '🏛️', price: 0, desc: '世界最大 Art Deco 建筑群（800栋）。粉蓝粉黄的"糖色建筑"，霓虹灯夜游。' },
      { id: 'miami_littlehavana', name: '小哈瓦那', icon: '🎺', price: 0, desc: '古巴流亡者的家园：雪茄工坊、多米诺公园。Calle Ocho 街的萨尔萨与 cafe cubano，"古巴不在古巴"。' },
      { id: 'miami_wynwood', name: '温伍德墙（Wynwood Walls）', icon: '🎨', price: 40, desc: '全球顶级街头艺术园区。Basquiat 风格大墙，"街头艺术的卢浮宫"。' },
      { id: 'miami_vizcaya', name: '维兹卡亚博物馆花园', icon: '🏰', price: 150, desc: '1916年意大利文艺复兴风庄园。花园面海，"迈阿密的凡尔赛"。' },
      { id: 'miami_everglades', name: '大沼泽地国家公园', icon: '🐊', price: 200, desc: '"草之河"湿地，短吻鳄与美洲豹。气垫船飙进芦苇荡，"佛罗里达的原始"。' },
      { id: 'miami_keys', name: '一号公路去 Key West', icon: '🏝️', price: 200, desc: '跨海公路42座桥通向美国最南端。海明威故居与日落庆典，"天涯海角"。' },
    ],
    souvenirs: [
      { id: 'miami_cuban', name: '古巴三明治·咖啡', icon: '🥪', tag: '食', type: '美食', price: 40, desc: '压烤的古巴三明治配 cafe cubano 小杯浓咖啡。"Ventanita"窗口点单文化。' },
      { id: 'miami_ceviche', name: '秘鲁酸橘汁腌鱼', icon: '🐟', tag: '食', type: '美食', price: 80, desc: '迈阿密的 ceviche 融合拉美风味。"柠檬汁煮熟"的鲜甜。' },
      { id: 'miami_croquetas', name: '古巴可乐饼（Croquetas）', icon: '🧆', tag: '食', type: '美食', price: 20, desc: '火腿芝士炸可乐饼，"古巴早餐标配"。Versailles 餐厅的老味道。' },
      { id: 'miami_cigars', name: '雪茄', icon: '🚬', tag: '食', type: '特产', price: 150, desc: '小哈瓦那手工卷雪茄，El Titan 现场卷制。"古巴手艺的美国延续"。' },
      { id: 'miami_pastelitos', name: '古巴酥点（Pastelitos）', icon: '🥟', tag: '食', type: '特产', price: 20, desc: 'Guava 酪梨酱酥点，甜到心口。配 cafe con leche，"迈阿密的早晨"。' },
      { id: 'miami_deco_wen', name: 'Art Deco 文创', icon: '🏛️', tag: '衣', type: '文创', price: 40, desc: 'Art Deco 火烈鸟、粉彩建筑冰箱贴。"迈阿密的粉彩美学"。' },
      { id: 'miami_flamingo', name: '火烈鸟周边', icon: '🦩', tag: '衣', type: '文创', price: 35, desc: '火烈鸟泳圈、T恤、充气玩具。"佛罗里达的粉色符号"。' },
      { id: 'miami_airboat', name: '大沼泽气垫船', icon: '🚤', tag: '玩', type: '体验', price: 250, desc: '气垫船飙进湿地找鳄鱼。船头牛仔讲解，"沼泽速度与激情"。' },
      { id: 'miami_boat', name: '比斯坎湾明星豪宅游', icon: '🛥️', tag: '玩', type: '体验', price: 250, desc: '游船看明星岛豪宅与邮轮港。特朗普、JLo 的房子，"海上看财富"。' },
      { id: 'miami_nightclub', name: '南海滩夜店巡礼', icon: '🕺', tag: '玩', type: '体验', price: 300, desc: 'LIV、Story 全球 DJ 驻场。"迈阿密的夜晚是拉丁节奏"。' },
      { id: 'miami_paddle', name: '海上桨板看海豚', icon: '🏄', tag: '玩', type: '体验', price: 200, desc: '桨板穿红树林水道，海豚常出现。"佛罗里达的野生南"。' },
      { id: 'miami_minsu', name: '南海滩 Art Deco 酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: 'Ocean Drive 的 Art Deco 酒店直面海滩。粉色外墙泳池，"迈阿密的经典"。' },
    ],
    stories: [
      { id: 'miami_story_cuban', name: '古巴流亡者的"新故乡"', icon: '🎺', desc: '1959年古巴革命后80万古巴人来迈阿密。如今这里"西班牙语第一"，"古巴的二都"。' },
      { id: 'miami_story_deco2', name: 'Art Deco 差点被拆光', icon: '🏛️', desc: '70年代开发商要推平老楼，保护运动救下800栋。如今是全球最大 Art Deco 区。' },
      { id: 'miami_story_alligator', name: '鳄鱼与鳄尾蜥的"邻居"', icon: '🐊', desc: '大沼泽是唯一短吻鳄与鳄鱼共存之地。社区里也常有鳄鱼"散步"，"佛罗里达日常"。' },
      { id: 'miami_story_wynwood2', name: '温伍德的"废墟变艺术"', icon: '🎨', desc: '2009年这里还是仓库废区。Art Basel 带火 Wynwood Walls，"街头艺术的金融化"。' },
      { id: 'miami_story_latin', name: '"拉丁美洲的首都"', icon: '🌎', desc: '迈阿密是拉美商业与媒体的总部。哥伦比亚人、委内瑞拉人、阿根廷人的"美国门户"。' },
      { id: 'miami_story_keys', name: '一号公路的"42座桥"', icon: '🏝️', desc: '去 Key West 要跨42座桥，七英里桥最长。海明威在这里写下《老人与海》。' },
    ],
  });
})();
