/* ============ 美国·华盛顿特区（完全版·分册组装） ============
 * 分册：dc_01地点 / dc_02周边 / dc_03趣事。
 * 叙事主线：白宫与国会山/林肯纪念堂/史密森尼博物馆/潮汐湖樱花/政治文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'washington',
    name: '华盛顿特区',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🏛️',
    desc: '政治心脏：白宫与国会山之间，史密森尼博物馆群全部免费，樱花季的潮汐湖粉白一片，"权力的游戏"实景地。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }, { name: '高铁', icon: '🚄', cost: 7800 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.DC_SPOTS = window.DC_SPOTS || []),
    souvenirs: (window.DC_GIFTS = window.DC_GIFTS || []),
    stories: (window.DC_STORIES = window.DC_STORIES || [])
  });
})();
