/* ============ 北京（完全版·分册组装） ============
 * 分册：bj_01地点 / bj_02周边 / bj_03趣事。
 * 叙事主线：中轴线 / 皇家园林 / 胡同市井 / 当代新都。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'beijing',
    name: '北京',
    country: '中国',
    cc: 'CN',
    province: '北京',
    flag: '🇨🇳',
    region: '华北',
    hero: '🛕',
    desc: '六朝古都，红墙黄瓦。胡同里飘着豆汁的酸香，中轴线上钟鼓楼遥望鸟巢，一座把历史与潮流都酿进城墙根的城市。',
    travel: [{ name: '高铁', icon: '🚄', cost: 520 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: (window.BJ_SPOTS = window.BJ_SPOTS || []),
    souvenirs: (window.BJ_GIFTS = window.BJ_GIFTS || []),
    stories: (window.BJ_STORIES = window.BJ_STORIES || []),
  });
})();
