/* ============ 西班牙·巴塞罗那 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'barcelona',
    name: '巴塞罗那',
    country: '西班牙',
    cc: 'SCH',
    flag: '🇪🇸',
    region: '欧洲',
    hero: '⛪',
    desc: '高迪的奇幻之城：圣家堂的彩色光柱、米拉之家的波浪外墙，哥特老街尽头就是海滩，弗拉明戈裙摆扫过午夜。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6300 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'barcelona_sagrada', name: '圣家堂', icon: '⛪', price: 200, desc: '高迪建了43年至今未完工的"石头圣经"。阳光穿过彩色玻璃把中殿染成森林，塔尖上的"从天而降"让所有人失语。' },
      { id: 'barcelona_casa_mila', name: '米拉之家·巴特罗之家', icon: '🏠', price: 180, desc: '波浪形石砌外墙配锻铁阳台，屋顶烟囱像"戴头盔的士兵"。高迪说"直线属于人类，曲线属于上帝"。' },
      { id: 'barcelona_park_guell', name: '古埃尔公园', icon: '🦎', price: 100, desc: '马赛克蜥蜴与波浪长椅把公园变成童话。从山腰观景台俯瞰全城与地中海，"高迪的糖果城堡"。' },
      { id: 'barcelona_gothic', name: '哥特区·兰布拉大道', icon: '🏛️', price: 0, desc: '两千年老城墙与窄巷，大教堂的鹅在回廊里踱步。兰布拉大道上"活雕塑"一动不动，被逗笑就算他赢。' },
      { id: 'barcelona_campnou', name: '诺坎普球场', icon: '⚽', price: 180, desc: '九万九千人的"足球圣殿"，梅西的外号刻在草坪边上。博物馆里的奖杯墙，巴萨球迷进去会哭。' },
      { id: 'barcelona_beach', name: '巴塞罗内塔海滩', icon: '🏖️', price: 0, desc: '城市地铁直达的海滩，沙滩排球场一排十个。金色沙滩配海鲜饭老店，午后阳光把海面烫成碎金。' },
      { id: 'barcelona_montjuic', name: '蒙特惠奇山·魔幻喷泉', icon: '⛲', price: 90, desc: '山顶的奥运场馆与城堡缆车。夜里魔幻喷泉随音乐变色起舞，水幕灯光秀免费看了百年。' },
    ],
    souvenirs: [
      { id: 'barcelona_paella', name: '西班牙海鲜饭', icon: '🥘', tag: '食', type: '美食', price: 150, desc: '藏红花焖出金黄锅巴，虾、青口、鱿鱼铺满。两人份大铁锅端上桌，柠檬一挤"地中海"就到位。' },
      { id: 'barcelona_tapas', name: '塔帕斯小吃', icon: '🍢', tag: '食', type: '美食', price: 80, desc: '牙签小食按签计数结账：辣土豆、蒜虾、火腿面包。"站着吃"是加泰罗尼亚的社交运动。' },
      { id: 'barcelona_jamon', name: '伊比利亚火腿', icon: '🍖', tag: '食', type: '美食', price: 130, desc: '黑蹄猪火腿切到透光，油花香在舌尖化开。现切师的手艺比刀更稳，"西班牙的钻石"。' },
      { id: 'barcelona_sangria', name: '桑格利亚果酒', icon: '🍷', tag: '食', type: '饮品', price: 45, desc: '红酒泡橙子苹果肉桂，冰镇微甜。海滩边一壶，"日落配酒"的标准操作。' },
      { id: 'barcelona_churros', name: '吉拿棒配热巧克力', icon: '🍩', tag: '食', type: '美食', price: 30, desc: '现炸吉拿棒撒糖粉，蘸浓到能立勺子的热巧。早餐"甜到心口"，是西班牙人的能量站。' },
      { id: 'barcelona_cava', name: '卡瓦气泡酒', icon: '🍾', tag: '食', type: '特产', price: 100, desc: '加泰罗尼亚的"平价香槟"，气泡细腻。酒庄参观地下酒窖，上万瓶倒挂在架上。' },
      { id: 'barcelona_mosaic', name: '高迪马赛克文创', icon: '🦎', tag: '衣', type: '文创', price: 60, desc: '彩色碎瓷拼成的蜥蜴摆件、杯垫、手镯。高迪的"碎片美学"，摆在桌上就是一道阳光。' },
      { id: 'barcelona_fan', name: '西班牙折扇·弗拉明戈裙', icon: '🪭', tag: '衣', type: '服饰', price: 90, desc: '手工折扇与红裙，扇子一开"西班牙式优雅"。老店里的手绘扇面，每一把都是画。' },
      { id: 'barcelona_metro', name: '地铁与城市卡', icon: '🚇', tag: '行', type: '体验', price: 40, desc: '地铁直达海滩与球场，T10 次票划算。加泰罗尼亚语与西语双语报站，听不懂也没关系。' },
      { id: 'barcelona_flamenco', name: '弗拉明戈表演', icon: '💃', tag: '玩', type: '体验', price: 250, desc: '小酒馆里舞裙旋转、鞋跟击地，吉他与嗓音在燃烧。前排能感觉到地板震动，"灵魂的踢踏"。' },
      { id: 'barcelona_boat', name: '日落帆船出海', icon: '⛵', tag: '玩', type: '体验', price: 220, desc: '两小时帆船绕地中海看日落，含一杯卡瓦。城市在船尾亮灯，"巴塞罗那的天际线最佳观众位"。' },
      { id: 'barcelona_hotel', name: '老城公寓酒店', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: '哥特区里的天台公寓，晾衣绳上飘着衬衫。清晨被教堂钟声叫醒，下楼就是咖啡馆。' },
    ],
    stories: [
      { id: 'barcelona_story_sagrada', name: '建了143年的"烂尾楼"', icon: '⛪', desc: '圣家堂1882年动工至今未完工，官方预计2026年基本建成。高迪葬在教堂地下，"他还在监工"。' },
      { id: 'barcelona_story_gaudi', name: '高迪被电车撞了', icon: '🚋', desc: '1926年高迪被电车撞倒，路人以为是乞丐延误救治。这位一生简朴的建筑大师，出殡时全城送行。' },
      { id: 'barcelona_story_messi', name: '诺坎普的"安静13万人"', icon: '⚽', desc: '诺坎普能容纳近十万人，进球瞬间声浪像起飞。梅 西离队那天，五万人戴口罩在球场外默立。' },
      { id: 'barcelona_story_siasta', name: '午休"siesta"还在吗', icon: '😴', desc: '小商店下午两点到五点关门是常态，游客常吃"闭门羹"。本地人理直气壮：太阳太晒，人在休息。' },
      { id: 'barcelona_story_tapas', name: '牙签计价的"塔帕斯哲学"', icon: '🍢', desc: '吃完把牙签丢在餐盘里，老板数签结账。一顿下来十几根签，"快乐是可以计数的"。' },
      { id: 'barcelona_story_castell', name: '人塔叠到九层', icon: '🧱', desc: '加泰罗尼亚传统"叠人塔"（Castellers）最高能叠十层。最上面的小孩爬塔时全场屏息，"勇敢从娃娃开始"。' },
    ],
  });
})();
