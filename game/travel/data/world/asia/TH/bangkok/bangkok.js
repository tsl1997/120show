/* ============ 泰国·曼谷（完全版·分册组装） ============
 * 分册：th_01地点 / th_02周边 / th_03趣事。
 * 叙事主线：大皇宫与郑王庙/卧佛寺/湄南河/考山路/夜市/泰式按摩。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'bangkok',
    name: '曼谷',
    country: '泰国',
    cc: 'TH',
    flag: '🇹🇭',
    region: '东南亚',
    hero: '🛕',
    desc: '"天使之城"：金顶寺庙与摩天楼贴肩而立，嘟嘟车在热浪里穿梭，芒果糯米饭的甜香混着河岸的香料气。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1800 }, { name: '高铁·中老铁路', icon: '🚄', cost: 1500 }],
    visa: { cost: 0, note: '中泰互免签证（停留不超过30天）' },
    spots: (window.TH_SPOTS = window.TH_SPOTS || []),
    souvenirs: (window.TH_GIFTS = window.TH_GIFTS || []),
    stories: (window.TH_STORIES = window.TH_STORIES || [])
  });
})();
