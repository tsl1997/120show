/* ============ 黑龙江·漠河（分册组装·moh_01/02/03） ============
 * 分册：moh_01地点 / moh_02周边 / moh_03趣事。
 * 三册数据分别挂到 window.MOH_SPOTS / MOH_GIFTS / MOH_STORIES。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'mohe',
    name: '漠河',
    country: '中国',
    cc: 'CN',
    province: '黑龙江',
    flag: '🇨🇳',
    region: '东北',
    hero: '🌌',
    desc: '中国最北的城市：北极村的"找北"之旅，零下50度的极寒体验，白夜的星空与可能的极光，"去漠河，找到北"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1900 }, { name: '火车', icon: '🚂', cost: 900 }],
    visa: null,
    spots: (window.MOH_SPOTS = window.MOH_SPOTS || []),
    souvenirs: (window.MOH_GIFTS = window.MOH_GIFTS || []),
    stories: (window.MOH_STORIES = window.MOH_STORIES || []),
  });
})();
