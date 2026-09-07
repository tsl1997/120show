/* ============ 日本·冲绳县（完全版·分册组装） ============
 * 分册：okn_01景点 / okn_02周边 / okn_03趣事。
 * 叙事主线：那霸与首里 / 本岛中北部 / 离岛与南部半岛。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'okinawa',
    name: '冲绳县',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·冲绳',
    hero: '🐠',
    desc: '日本最南端的群岛天堂：珊瑚礁泻湖蓝得发光，琉球文化带着南国松弛感，一颗香檬配一碗冲绳荞麦面就是海岛日常。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2400 }, { name: '邮轮', icon: '🛳️', cost: 3200 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.OKN_SPOTS = window.OKN_SPOTS || []),
    souvenirs: (window.OKN_GIFTS = window.OKN_GIFTS || []),
    stories: (window.OKN_STORIES = window.OKN_STORIES || [])
  });
})();
