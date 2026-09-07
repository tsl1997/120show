/* ============ 江苏·扬州（完全版·分册组装） ============
 * 由旧档 data/cn/huadong/yangzhou.js 拆分为册扩容而来。
 * 分册：yz_01地点 / yz_02周边 / yz_03趣事。城市字段沿旧档。
 * 叙事主线：烟花三月 / 运河繁华 / 园林盐商 / 淮扬风物。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yangzhou',
    name: '扬州',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌸',
    desc: '"烟花三月下扬州"：瘦西湖的二十四桥明月夜，早茶 culture 一吃半天，三把刀的技艺，慢城扬州把生活过成了诗。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: (window.YZ_SPOTS = window.YZ_SPOTS || []),
    souvenirs: (window.YZ_GIFTS = window.YZ_GIFTS || []),
    stories: (window.YZ_STORIES = window.YZ_STORIES || []),
  });
})();
