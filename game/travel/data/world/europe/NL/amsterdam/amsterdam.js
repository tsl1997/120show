/* ============ 荷兰·阿姆斯特丹（完全版·分册组装） ============
 * 分册：nl_01地点 / nl_02周边 / nl_03趣事。
 * 叙事主线：黄金时代运河带/梵高与伦勃朗/郁金香与风车/自行车王国/红灯区。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'amsterdam',
    name: '阿姆斯特丹',
    country: '荷兰',
    cc: 'NL',
    flag: '🇳🇱',
    region: '欧洲',
    hero: '🚲',
    desc: '北方威尼斯：165条运河围出半圆城，梵高的向日葵与《夜巡》，郁金香与自行车王国，黄金时代的自由之城。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6300 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.NL_SPOTS = window.NL_SPOTS || []),
    souvenirs: (window.NL_GIFTS = window.NL_GIFTS || []),
    stories: (window.NL_STORIES = window.NL_STORIES || [])
  });
})();
