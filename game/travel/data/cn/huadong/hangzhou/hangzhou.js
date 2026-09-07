/* ============ 杭州（完全版·分册组装） ============
 * 分册：hz_01地点 / hz_02周边 / hz_03趣事。
 * 叙事主线：西湖湖山 / 南宋遗梦 / 茶禅一味 / 数字新城。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hangzhou',
    name: '杭州',
    country: '中国',
    cc: 'CN',
    province: '浙江',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌉',
    desc: '人间天堂：西湖十景四季如画，龙井茶山飘着清香，数字之城与千年古都共存，一碗片儿川开启杭州的清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 390 }, { name: '飞机', icon: '✈️', cost: 720 }],
    visa: null,
    spots: (window.HZ_SPOTS = window.HZ_SPOTS || []),
    souvenirs: (window.HZ_GIFTS = window.HZ_GIFTS || []),
    stories: (window.HZ_STORIES = window.HZ_STORIES || []),
  });
})();
