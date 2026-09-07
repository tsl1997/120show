/* ============ 南京（完全版·分册组装） ============
 * 分册：nj_01地点 / nj_02周边 / nj_03趣事。
 * 叙事主线：钟山龙蟠 / 秦淮烟水 / 六朝十都 / 民国记忆。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nanjing',
    name: '南京',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🏮',
    desc: '六朝古都、十朝都会：秦淮河的桨声灯影，梧桐掩映的民国风情，鸭血粉丝汤配盐水鸭，金陵的厚重与温柔都在。',
    travel: [{ name: '高铁', icon: '🚄', cost: 350 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: (window.NJ_SPOTS = window.NJ_SPOTS || []),
    souvenirs: (window.NJ_GIFTS = window.NJ_GIFTS || []),
    stories: (window.NJ_STORIES = window.NJ_STORIES || []),
  });
})();
