/* ============ 美国·芝加哥（完全版·分册组装） ============
 * 分册：ch_01地点 / ch_02周边 / ch_03趣事。
 * 叙事主线：云门与建筑游船/深盘披萨与蓝调/威利斯大厦/1871大火/公牛王朝。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chicago',
    name: '芝加哥',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🌆',
    desc: '风城·摩天大楼的故乡：云门"银豆子"倒映天际线，深盘披萨与芝加哥式热狗，密歇根湖畔的建筑游船，爵士与蓝调的老巢。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7200 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.CH_SPOTS = window.CH_SPOTS || []),
    souvenirs: (window.CH_GIFTS = window.CH_GIFTS || []),
    stories: (window.CH_STORIES = window.CH_STORIES || [])
  });
})();
