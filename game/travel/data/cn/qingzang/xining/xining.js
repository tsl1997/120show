/* ============ 西宁（分册组装版） ============
 * 分册：xn_01地点 / xn_02周边 / xn_03趣事。
 * 城市字段沿用旧档原样；条目由三个分册数组拼装，旧档条目全部保留。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xining',
    name: '西宁',
    country: '中国',
    cc: 'CN',
    province: '青海',
    flag: '🇨🇳',
    region: '青藏',
    hero: '🕌',
    desc: '"夏都"：高原古城凉爽宜人，塔尔寺的酥油花精美绝伦，青海湖与茶卡盐湖从这里出发，一碗手抓羊肉配酸奶就是高原的滋味。',
    travel: [{ name: '高铁', icon: '🚄', cost: 550 }, { name: '飞机', icon: '✈️', cost: 950 }],
    visa: null,
    spots: (window.XN_SPOTS = window.XN_SPOTS || []),
    souvenirs: (window.XN_GIFTS = window.XN_GIFTS || []),
    stories: (window.XN_STORIES = window.XN_STORIES || []),
  });
})();
