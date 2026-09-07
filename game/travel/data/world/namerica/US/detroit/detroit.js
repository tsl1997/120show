/* ============ 美国·底特律（完全版·分册组装） ============
 * 分册：de_01地点 / de_02周边 / de_03趣事。
 * 叙事主线：亨利福特与流水线/Motown 音乐/汽车工厂/废墟重生/Coney Dog 披萨。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'detroit',
    name: '底特律',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🚗',
    desc: '汽车城：福特、通用、克莱斯勒三巨头的故乡，摩城音乐从这里响起，废墟与复兴并存，底特律人更努力。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7300 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.DE_SPOTS = window.DE_SPOTS || []),
    souvenirs: (window.DE_GIFTS = window.DE_GIFTS || []),
    stories: (window.DE_STORIES = window.DE_STORIES || [])
  });
})();
