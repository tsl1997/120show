/* ============ 美国·奥兰多（完全版·分册组装） ============
 * 分册：or_01地点 / or_02周边 / or_03趣事。
 * 叙事主线：迪士尼世界四园/环球影城哈利波特/肯尼迪航天中心/主题度假别墅。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'orlando',
    name: '奥兰多',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🏰',
    desc: '世界主题公园之都：迪士尼世界四园一水，环球影城哈利波特魔法世界，地球上最快乐的地方就在佛州中部。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.OR_SPOTS = window.OR_SPOTS || []),
    souvenirs: (window.OR_GIFTS = window.OR_GIFTS || []),
    stories: (window.OR_STORIES = window.OR_STORIES || [])
  });
})();
