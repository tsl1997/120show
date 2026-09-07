/* ============ 日本·箱根（完全版·分册组装） ============
 * 分册：hkn_01地点 / hkn_02周边 / hkn_03趣事。
 * 叙事主线：芦之湖海贼船与大涌谷 / 登山电车与缆车 / 温泉与美术馆巡礼。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hakone',
    name: '箱根',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '♨️',
    desc: '富士山下的温泉之乡：芦之湖海贼船、大涌谷的黑玉子、强罗公园与雕刻之森，EVA"第三新东京市"的原型地。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.HKN_SPOTS = window.HKN_SPOTS || []),
    souvenirs: (window.HKN_GIFTS = window.HKN_GIFTS || []),
    stories: (window.HKN_STORIES = window.HKN_STORIES || [])
  });
})();
