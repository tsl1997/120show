/* ============ 奥地利·维也纳（完全版·分册组装） ============
 * 分册：at_01地点 / at_02周边 / at_03趣事。
 * 叙事主线：哈布斯堡茜茜/金色大厅音乐/维也纳咖啡文化/美泉宫/联合国城/华尔兹。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'vienna',
    name: '维也纳',
    country: '奥地利',
    cc: 'AT',
    flag: '🇦🇹',
    region: '欧洲',
    hero: '🎻',
    desc: '音乐之都：金色大厅的新年音乐会，茜茜公主的美泉宫，茨威格笔下的昨日世界，一杯维也纳咖啡配萨赫蛋糕。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6600 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.AT_SPOTS = window.AT_SPOTS || []),
    souvenirs: (window.AT_GIFTS = window.AT_GIFTS || []),
    stories: (window.AT_STORIES = window.AT_STORIES || [])
  });
})();
