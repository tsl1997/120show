/* ============ 山东·泰安（扩容版·分册组装） ============
 * 分册：ta_01景点 / ta_02周边 / ta_03趣事。
 * 主题：五岳独尊/封禅/登山朝圣。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'taian',
    name: '泰安',
    country: '中国',
    cc: 'CN',
    province: '山东',
    flag: '🇨🇳',
    region: '华东',
    hero: '⛰️',
    desc: '"泰山安则四海皆安"：五岳之首在此，帝王封禅之地。夜爬泰山看日出是每个旅行者的成人礼，山下的煎饼卷大葱同样豪迈。',
    travel: [{ name: '高铁', icon: '🚄', cost: 480 }, { name: '飞机', icon: '✈️', cost: 830 }],
    visa: null,
    spots: (window.TA_SPOTS = window.TA_SPOTS || []),
    souvenirs: (window.TA_GIFTS = window.TA_GIFTS || []),
    stories: (window.TA_STORIES = window.TA_STORIES || []),
  });
})();
