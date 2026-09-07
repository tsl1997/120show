/* ============ 浙江·绍兴（完全版·分册组装） ============
 * 分册：sx_01地点 / sx_02周边 / sx_03趣事。
 * 叙事主线：鲁迅故里 / 黄酒 / 水乡 / 名人荟萃。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shaoxing',
    name: '绍兴',
    country: '中国',
    cc: 'CN',
    province: '浙江',
    flag: '🇨🇳',
    region: '华东',
    hero: '🛶',
    desc: '鲁迅笔下的水乡：乌篷船摇过八字桥，孔乙己的茴香豆温两碗黄酒，书圣故里与千年古城墙，一座可以"读"的城市。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 730 }],
    visa: null,
    spots: (window.SX_SPOTS = window.SX_SPOTS || []),
    souvenirs: (window.SX_GIFTS = window.SX_GIFTS || []),
    stories: (window.SX_STORIES = window.SX_STORIES || []),
  });
})();
