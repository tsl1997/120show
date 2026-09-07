/* ============ 日本·镰仓（完全版·分册组装） ============
 * 分册：kam_01景点 / kam_02周边 / kam_03趣事。
 * 叙事主线：镰仓大佛与禅寺 / 江之岛与江之电 / 灌篮高手圣地与湘南海。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kamakura',
    name: '镰仓',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🌊',
    desc: '灌篮高手的圣地：镰仓高校前平交道口的海景，镰仓大佛的慈悲，江之电车摇过紫阳花，《灌篮高手》青春的海岸线。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.KAM_SPOTS = window.KAM_SPOTS || []),
    souvenirs: (window.KAM_GIFTS = window.KAM_GIFTS || []),
    stories: (window.KAM_STORIES = window.KAM_STORIES || [])
  });
})();
