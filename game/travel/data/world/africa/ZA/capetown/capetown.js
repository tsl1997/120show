/* ============ 南非·开普敦（完全版·分册组装） ============
 * 分册：za_01地点 / za_02周边 / za_03趣事。
 * 叙事主线：桌山/好望角/企鹅滩/罗本岛曼德拉/酒乡/两大洋/种族隔离。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'capetown',
    name: '开普敦',
    country: '南非',
    cc: 'ZA',
    flag: '🇿🇦',
    region: '非洲',
    hero: '⛰️',
    desc: '桌山脚下的"母亲城"：两大洋在好望角交汇，企鹅在沙滩上晒太阳，葡萄园铺满山谷，非洲的野性与欧式的悠闲共存。',
    travel: [{ name: '飞机', icon: '✈️', cost: 9500 }],
    visa: { cost: 500, note: '南非旅游签证' },
    spots: (window.ZA_SPOTS = window.ZA_SPOTS || []),
    souvenirs: (window.ZA_GIFTS = window.ZA_GIFTS || []),
    stories: (window.ZA_STORIES = window.ZA_STORIES || [])
  });
})();
