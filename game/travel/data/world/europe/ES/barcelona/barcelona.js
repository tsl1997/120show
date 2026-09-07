/* ============ 西班牙·巴塞罗那（完全版·分册组装） ============
 * 分册：es_01地点 / es_02周边 / es_03趣事。
 * 叙事主线：高迪建筑三件套/哥特区/加泰罗尼亚/地中海与海鲜饭/弗拉明戈/诺坎普。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'barcelona',
    name: '巴塞罗那',
    country: '西班牙',
    cc: 'ES',
    flag: '🇪🇸',
    region: '欧洲',
    hero: '⛪',
    desc: '高迪的奇幻之城：圣家堂的彩色光柱、米拉之家的波浪外墙，哥特老街尽头就是海滩，弗拉明戈裙摆扫过午夜。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6300 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.ES_SPOTS = window.ES_SPOTS || []),
    souvenirs: (window.ES_GIFTS = window.ES_GIFTS || []),
    stories: (window.ES_STORIES = window.ES_STORIES || [])
  });
})();
