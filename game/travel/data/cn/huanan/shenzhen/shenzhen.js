/* ============ 深圳（完全版·分册组装） ============
 * 分册：szn_01地点 / szn_02周边 / szn_03趣事。
 * 叙事主线：特区之路 / 科技之城 / 山海深圳 / 打工人烟火。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shenzhen',
    name: '深圳',
    country: '中国',
    cc: 'CN',
    province: '广东',
    flag: '🇨🇳',
    region: '华南',
    hero: '🏙️',
    desc: '"深圳速度"的奇迹之城：从小渔村到摩天森林只用四十年，主题乐园与科技展馆并存，海风里都是年轻的闯劲。',
    travel: [{ name: '高铁', icon: '🚄', cost: 550 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: (window.SZN_SPOTS = window.SZN_SPOTS || []),
    souvenirs: (window.SZN_GIFTS = window.SZN_GIFTS || []),
    stories: (window.SZN_STORIES = window.SZN_STORIES || []),
  });
})();
