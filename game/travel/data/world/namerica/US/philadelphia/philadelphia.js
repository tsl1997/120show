/* ============ 美国·费城（完全版·分册组装） ============
 * 分册：ph_01地点 / ph_02周边 / ph_03趣事。
 * 叙事主线：自由钟与独立宫/洛奇台阶/芝士牛肉三明治/壁画之城/建国历史。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'philadelphia',
    name: '费城',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🔔',
    desc: '独立宣言诞生地：自由钟与独立宫诉说着建国故事，费城牛肉芝士三明治的江湖，兄弟之爱之城。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }, { name: '高铁', icon: '🚄', cost: 7700 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.PH_SPOTS = window.PH_SPOTS || []),
    souvenirs: (window.PH_GIFTS = window.PH_GIFTS || []),
    stories: (window.PH_STORIES = window.PH_STORIES || [])
  });
})();
