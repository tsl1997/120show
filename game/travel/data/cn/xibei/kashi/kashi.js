/* ============ 新疆·喀什（分册组装版·丝路明珠/西域风情/巴扎） ============
 * 分册：ks_01地点 / ks_02周边 / ks_03趣事。
 * 城市字段沿用旧档原样；条目由三个分册数组拼装，旧档条目全部保留。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kashi',
    name: '喀什',
    country: '中国',
    cc: 'CN',
    province: '新疆',
    flag: '🇨🇳',
    region: '西北',
    hero: '🕌',
    desc: '"不到喀什，不算到过新疆"：两千年丝路古城，高台民居层叠如迷宫，艾提尕尔清真寺的月塔下，时光慢得像手作的铜壶。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2400 }, { name: '火车', icon: '🚂', cost: 1600 }],
    visa: null,
    spots: (window.KS_SPOTS = window.KS_SPOTS || []),
    souvenirs: (window.KS_GIFTS = window.KS_GIFTS || []),
    stories: (window.KS_STORIES = window.KS_STORIES || []),
  });
})();
