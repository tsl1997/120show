/* ============ 美国·拉斯维加斯（完全版·分册组装） ============
 * 分册：lv_01地点 / lv_02周边 / lv_03趣事。
 * 叙事主线：长街与喷泉/自助餐与名厨/赌场池畔/主题酒店/太阳马戏。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lasvegas',
    name: '拉斯维加斯',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🎰',
    desc: '沙漠中的不夜城：长街的巴黎铁塔与金字塔并立，赌场与演出彻夜灯火，"what happens in Vegas stays in Vegas"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.LV_SPOTS = window.LV_SPOTS || []),
    souvenirs: (window.LV_GIFTS = window.LV_GIFTS || []),
    stories: (window.LV_STORIES = window.LV_STORIES || [])
  });
})();
