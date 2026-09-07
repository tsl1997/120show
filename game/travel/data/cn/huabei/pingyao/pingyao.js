/* ============ 山西·平遥（分册组装版） ============
 * 分册：py_01地点 / py_02周边 / py_03趣事。
 * 城市字段与旧档 data/cn/huabei/pingyao.js 一致，旧条目原样迁入并扩容。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'pingyao',
    name: '平遥',
    country: '中国',
    cc: 'CN',
    province: '山西',
    flag: '🇨🇳',
    region: '华北',
    hero: '🏦',
    desc: '世界遗产古城：2700年的城墙围住明清街巷，日昇昌票号开中国银行之先河，一座"活着"的古代县城。',
    travel: [{ name: '高铁', icon: '🚄', cost: 560 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: (window.PY_SPOTS = window.PY_SPOTS || []),
    souvenirs: (window.PY_GIFTS = window.PY_GIFTS || []),
    stories: (window.PY_STORIES = window.PY_STORIES || []),
  });
})();
