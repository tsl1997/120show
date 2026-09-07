/* ============ 美国·亚特兰大（完全版·分册组装） ============
 * 分册：at_01地点 / at_02周边 / at_03趣事。
 * 叙事主线：可口可乐与 CNN/MLK 与飘/BeltLine 骑行/石山/南方烧烤。
 */
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
    spots: (window.AT_SPOTS = window.AT_SPOTS || []),
    souvenirs: (window.AT_GIFTS = window.AT_GIFTS || []),
    stories: (window.AT_STORIES = window.AT_STORIES || [])
  });
})();
