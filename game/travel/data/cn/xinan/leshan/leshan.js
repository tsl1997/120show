/* ============ 四川·乐山（分册组装版 v2） ============
 * 旧档 data/cn/xinan/leshan.js 拆分为三册：
 * les_01地点 / les_02周边 / les_03趣事。
 * 城市字段沿用旧档，spots/souvenirs/stories 分别取自全局
 * LES_SPOTS / LES_GIFTS / LES_STORIES。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'leshan',
    name: '乐山',
    country: '中国',
    cc: 'CN',
    province: '四川',
    flag: '🇨🇳',
    region: '西南',
    hero: '🗿',
    desc: '大佛脚下的小城：世界最大石刻坐佛守望三江，峨眉山金顶云海佛光，钵钵鸡与跷脚牛肉撑起"四川美食指数"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 330 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: (window.LES_SPOTS = window.LES_SPOTS || []),
    souvenirs: (window.LES_GIFTS = window.LES_GIFTS || []),
    stories: (window.LES_STORIES = window.LES_STORIES || []),
  });
})();
