/* ============ 埃及·开罗（完全版·分册组装） ============
 * 分册：eg_01地点 / eg_02周边 / eg_03趣事。
 * 叙事主线：吉萨金字塔/狮身人面像/埃及博物馆/尼罗河/老城集市/科普特。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'cairo',
    name: '开罗',
    country: '埃及',
    cc: 'EG',
    flag: '🇪🇬',
    region: '非洲',
    hero: '🐪',
    desc: '尼罗河畔的七千年：金字塔在天际线上矗立四千五百年，骆驼与汽车共堵一条路，博物馆里的法老至今"睡着"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 300, note: '落地签或电子签（约25美元）' },
    spots: (window.EG_SPOTS = window.EG_SPOTS || []),
    souvenirs: (window.EG_GIFTS = window.EG_GIFTS || []),
    stories: (window.EG_STORIES = window.EG_STORIES || [])
  });
})();
