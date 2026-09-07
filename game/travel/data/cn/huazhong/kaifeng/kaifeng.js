/* ============ 河南·开封（分册组装·旧档扩容版） ============
 * 分册：kf_01景点 / kf_02周边 / kf_03趣事。
 * 城市字段沿用旧档，旧档条目原样并入各分册。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kaifeng',
    name: '开封',
    country: '中国',
    cc: 'CN',
    province: '河南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏯',
    desc: '八朝古都、北宋东京：清明上河图的实景现场，一城宋韵半城水，灌汤包小笼夜市喧，大宋的烟火气从未熄灭。',
    travel: [{ name: '高铁', icon: '🚄', cost: 300 }, { name: '飞机', icon: '✈️', cost: 720 }],
    visa: null,
    spots: (window.KF_SPOTS = window.KF_SPOTS || []),
    souvenirs: (window.KF_GIFTS = window.KF_GIFTS || []),
    stories: (window.KF_STORIES = window.KF_STORIES || []),
  });
})();
