/* ============ 大同（分册立体版·组装器） ============
 * 分册：dt_01地点 / dt_02周边 / dt_03趣事。
 * 叙事主线：北魏云冈 / 辽金古建 / 煤都转身 / 塞北味道。
 * 说明：由旧档 data/cn/huabei/datong.js 扩容而来，
 * 全部旧条目的 spots/souvenirs/stories 原样并入分册。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'datong',
    name: '大同',
    country: '中国',
    cc: 'CN',
    province: '山西',
    flag: '🇨🇳',
    region: '华北',
    hero: '🗿',
    desc: '北魏京华、辽金陪都：云冈石窟的大佛微笑千年，悬空寺挂在绝壁上，刀削面配黄花菜，一座厚重又好吃的煤都古城。',
    travel: [{ name: '高铁', icon: '🚄', cost: 650 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: (window.DT_SPOTS = window.DT_SPOTS || []),
    souvenirs: (window.DT_GIFTS = window.DT_GIFTS || []),
    stories: (window.DT_STORIES = window.DT_STORIES || []),
  });
})();
