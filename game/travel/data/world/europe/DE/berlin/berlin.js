/* ============ 德国·柏林（完全版·分册组装） ============
 * 分册：de_01地点 / de_02周边 / de_03趣事。
 * 叙事主线：柏林墙与冷战/勃兰登堡门/博物馆岛/Techno夜生活/包豪斯。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'berlin',
    name: '柏林',
    country: '德国',
    cc: 'DE',
    flag: '🇩🇪',
    region: '欧洲',
    hero: '🐻',
    desc: '把历史写在墙上的城市：柏林墙残段与博物馆岛比邻，街头涂鸦、 techno 音乐与烤香肠一起，构成这座自由之城的心跳。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5800 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.DE_SPOTS = window.DE_SPOTS || []),
    souvenirs: (window.DE_GIFTS = window.DE_GIFTS || []),
    stories: (window.DE_STORIES = window.DE_STORIES || [])
  });
})();
