/* ============ 美国·明尼阿波利斯（完全版·分册组装） ============
 * 分册：mn_01地点 / mn_02周边 / mn_03趣事。
 * 叙事主线：Mall of America/王子与迪伦/千湖之城/磨坊区/爆浆芝士堡。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'minneapolis',
    name: '明尼阿波利斯（双子城）',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🌊',
    desc: '千湖之城·双子星：与圣保罗并称双子城，美国最大购物中心 Mall of America，鲍勃迪伦与王子（Prince）的音乐故乡。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7300 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.MN_SPOTS = window.MN_SPOTS || []),
    souvenirs: (window.MN_GIFTS = window.MN_GIFTS || []),
    stories: (window.MN_STORIES = window.MN_STORIES || [])
  });
})();
