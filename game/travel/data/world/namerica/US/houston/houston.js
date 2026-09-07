/* ============ 美国·休斯敦（完全版·分册组装） ============
 * 分册：ho_01地点 / ho_02周边 / ho_03趣事。
 * 叙事主线：NASA 航天中心/德州 BBQ/医学中心/越南城/Kemah 海湾。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'houston',
    name: '休斯敦',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🚀',
    desc: '太空城：NASA 任务控制中心"休斯敦，我们有麻烦了"，能源与医疗之都，德州最大的多元美食江湖。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.HO_SPOTS = window.HO_SPOTS || []),
    souvenirs: (window.HO_GIFTS = window.HO_GIFTS || []),
    stories: (window.HO_STORIES = window.HO_STORIES || [])
  });
})();
