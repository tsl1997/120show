/* ============ 苏州（完全版·分册组装） ============
 * 分册：suz_01地点 / suz_02周边 / suz_03趣事。
 * 叙事主线：江南园林 / 水巷人家 / 缂绣丝绸 / 太湖四时。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'suzhou',
    name: '苏州',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌉',
    desc: '"上有天堂，下有苏杭"：拙政园的移步换景，平江路的评弹吴语，一碗苏式汤面浇头讲究，园林之城把精致刻进了骨子里。',
    travel: [{ name: '高铁', icon: '🚄', cost: 380 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: (window.SUZ_SPOTS = window.SUZ_SPOTS || []),
    souvenirs: (window.SUZ_GIFTS = window.SUZ_GIFTS || []),
    stories: (window.SUZ_STORIES = window.SUZ_STORIES || []),
  });
})();
