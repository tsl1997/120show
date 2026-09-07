/* ============ 美国·纽约（完全版·分册组装） ============
 * 分册：ny_01地点 / ny_02周边 / ny_03趣事。
 * 叙事主线：自由女神与时代广场/百老汇与博物馆/布鲁克林与高线/嘻哈与街头。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'newyork',
    name: '纽约',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🗽',
    desc: '不夜城的大苹果：时代广场的霓虹永不熄灭，中央公园的松鼠比行人从容，百老汇幕布一拉开，整座城都亮了。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.NY_SPOTS = window.NY_SPOTS || []),
    souvenirs: (window.NY_GIFTS = window.NY_GIFTS || []),
    stories: (window.NY_STORIES = window.NY_STORIES || [])
  });
})();
