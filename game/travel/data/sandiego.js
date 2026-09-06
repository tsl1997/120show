/* ============ 美国·圣迭戈 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sandiego',
    name: '圣迭戈',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🐬',
    desc: '加州的阳光后花园：圣地亚哥动物园的世界级保育，中途岛航母与胜利之吻，拉霍亚的海豹滩，墨西哥风情的边境之城。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'sandiego_zoo', name: '圣地亚哥动物园', icon: '🐨', price: 380, desc: '全球最佳动物园之一，保育界的传奇。雪豹、考拉、加州秃鹫，"动物的乐土"。' },
      { id: 'sandiego_midway', name: '中途岛号航母', icon: '⚓', price: 250, desc: '服役47年的传奇航母，"胜利之吻"雕像就在岸边。机库与甲板全面开放，"海权时代"。' },
      { id: 'sandiego_lajolla', name: '拉霍亚海豹滩', icon: '🦭', price: 0, desc: '海豹在儿童池沙滩产崽晒太阳。悬崖别墅与蔚蓝海湾，"加州最贵海景"。' },
      { id: 'sandiego_balboa', name: '巴尔博亚公园', icon: '🏛️', price: 0, desc: '城市文化公园之王：17座博物馆+植物园。西班牙殖民复兴建筑，"西海岸的普拉多"。' },
      { id: 'sandiego_coronado', name: '科罗纳多岛·红木酒店', icon: '🏝️', price: 0, desc: '1888年"木质公主"酒店，《Some Like It Hot》取景。渡轮或大桥上岛，"维多利亚的海滨梦"。' },
      { id: 'sandiego_oldtown', name: '老城·墨西哥风情', icon: '🌵', price: 0, desc: '加州诞生地，墨西哥边境文化。Taco 店与龙舌兰博物馆，"离墨西哥最近的美国"。' },
      { id: 'sandiego_torrey', name: '多利松高尔夫·日落崖', icon: '⛳', price: 0, desc: '美巡赛多利松球场就在悬崖上。Sunset Cliffs 日落悬崖，"太平洋的金色谢幕"。' },
    ],
    souvenirs: [
      { id: 'sandiego_fish', name: '加州卷·鱼塔可', icon: '🌮', tag: '食', type: '美食', price: 60, desc: '圣迭戈是加州卷发源地争议方之一。 fish taco 配青柠辣酱，"边境的美味"。' },
      { id: 'sandiego_burger', name: 'In-N-Out 汉堡（加州血统）', icon: '🍔', tag: '食', type: '美食', price: 45, desc: '暗号"3x3"三层肉。"Animal Style"薯条加酱，"加州人的信仰"。' },
      { id: 'sandiego_burrito', name: 'Carne Asada 薯条', icon: '🍟', tag: '食', type: '美食', price: 70, desc: '圣迭戈发明 Carne Asada Fries：薯条盖牛肉酪梨酱。"热量炸弹"，夜宵之王。' },
      { id: 'sandiego_craftbeer', name: '精酿啤酒 Stone', icon: '🍺', tag: '食', type: '饮品', price: 50, desc: '圣迭戈是"精酿啤酒之都"，Stone Brewing 花园总部。IPA 天堂，"啤酒爱好者的麦加"。' },
      { id: 'sandiego_zoo_wen', name: '动物园文创', icon: '🐼', tag: '衣', type: '文创', price: 40, desc: '考拉与雪豹玩偶、保育纪念徽章。"拯救物种"的纪念品。' },
      { id: 'sandiego_navy', name: '海军文创', icon: '⚓', tag: '衣', type: '文创', price: 45, desc: '中途岛航母模型、海军徽章。"军港之城"的硬核纪念。' },
      { id: 'sandiego_surf2', name: '拉霍亚浮潜看豹鲨', icon: '🤿', tag: '玩', type: '体验', price: 250, desc: '夏天 Leopard Shark 群在浅水游弋。"与鲨共泳"其实很温柔。' },
      { id: 'sandiego_whale', name: '出海观灰鲸', icon: '🐋', tag: '玩', type: '体验', price: 300, desc: '12-4月灰鲸迁徙经过。带娃友好，"全家看鲸"。' },
      { id: 'sandiego_kayak', name: '拉霍亚洞穴皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 250, desc: '划进海蚀洞与悬崖缝。"七洞穴"探险，"加州最酷的水上运动"。' },
      { id: 'sandiego_mexico', name: '蒂华纳一日游', icon: '🇲🇽', tag: '玩', type: '体验', price: 150, desc: '步行过境到墨西哥蒂华纳吃 Taco。"一脚墨西哥"，护照别忘了。' },
      { id: 'sandiego_minsu', name: '科罗纳多岛民宿', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '海岛维多利亚民宿，骑自行车环岛。"加州最悠闲的角落"。' },
    ],
    stories: [
      { id: 'sandiego_story_zoo2', name: '动物园的" open cage 哲学"', icon: '🐨', desc: '圣地亚哥动物园首创"无笼开放式"展区。1972年起救回22个物种免于灭绝，"诺亚方舟"。' },
      { id: 'sandiego_story_kiss', name: '"胜利之吻"的真实', icon: '💋', desc: '1945年二战结束，水兵在时代广场亲吻护士。雕像立在航母旁，"战争结束的照片"。' },
      { id: 'sandiego_story_weather', name: '全球最佳气候', icon: '☀️', desc: '圣迭戈年均21度，晴天300天。"天气预报员是最闲的工作"。' },
      { id: 'sandiego_story_border', name: '离墨西哥最近的美国大城', icon: '🇲🇽', desc: '市中心到边境只20分钟。墨西哥文化浸透食物与语言，"双城生活"。' },
      { id: 'sandiego_story_shark', name: '豹鲨的"温柔产房"', icon: '🦈', desc: '每年夏天数千条豹鲨聚在拉霍亚浅水产卵。它们对人类无害，"浮潜者的惊喜"。' },
      { id: 'sandiego_story_craft', name: '精酿啤酒的"西海岸风味"', icon: '🍺', desc: '西海岸 IPA 的"酒花炸弹"风格源于圣迭戈。Stone 的标语曾经很凶："F*** You, I’m drinking"。' },
    ],
  });
})();
