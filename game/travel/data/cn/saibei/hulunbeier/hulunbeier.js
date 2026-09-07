/* ============ 呼伦贝尔（分册立体版·组装器） ============
 * 分册：hlbe_01地点 / hlbe_02周边 / hlbe_03趣事。
 * 叙事主线：草原游牧 / 那达慕 / 边境风情 / 森林湖畔。
 * 说明：由旧档 data/cn/saibei/hulunbeier.js 扩容而来，
 * 全部旧条目的 spots/souvenirs/stories 原样并入分册。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hulunbeier',
    name: '呼伦贝尔',
    country: '中国',
    cc: 'CN',
    province: '内蒙古',
    flag: '🇨🇳',
    region: '塞北',
    hero: '🐎',
    desc: '中国最美草原，天下第一曲水蜿蜒其间。牛羊像散落的珍珠，马蹄踏碎晨雾，蒙古包的炊烟是草原唯一的路标。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '火车', icon: '🚂', cost: 700 }],
    visa: null,
    spots: (window.HLBE_SPOTS = window.HLBE_SPOTS || []),
    souvenirs: (window.HLBE_GIFTS = window.HLBE_GIFTS || []),
    stories: (window.HLBE_STORIES = window.HLBE_STORIES || []),
  });
})();
