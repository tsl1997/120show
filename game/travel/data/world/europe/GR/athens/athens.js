/* ============ 希腊·雅典（完全版·分册组装） ============
 * 分册：gr_01地点 / gr_02周边 / gr_03趣事。
 * 叙事主线：卫城与古市集/民主哲学摇篮/爱琴海跳岛/拜占庭与现代奥运/橄榄与希腊菜。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'athens',
    name: '雅典',
    country: '希腊',
    cc: 'GR',
    flag: '🇬🇷',
    region: '欧洲',
    hero: '🏛️',
    desc: '西方文明摇篮：卫城的帕特农神庙俯瞰2500年， Democracy 与哲学的出生地，普拉卡老街的烤肉香与爱琴海的风。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6400 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.GR_SPOTS = window.GR_SPOTS || []),
    souvenirs: (window.GR_GIFTS = window.GR_GIFTS || []),
    stories: (window.GR_STORIES = window.GR_STORIES || [])
  });
})();
