/* ============ 拉萨（分册组装版） ============
 * 分册：lha_01地点 / lha_02周边 / lha_03趣事。
 * 城市字段沿用旧档原样；条目由三个分册数组拼装，旧档条目全部保留。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lasa',
    name: '拉萨',
    country: '中国',
    cc: 'CN',
    province: '西藏',
    flag: '🇨🇳',
    region: '青藏',
    hero: '🏔️',
    desc: '"日光城"海拔3650米：布达拉宫在玛布日山上守望三百年，八廓街转经的人流从不间断，甜茶馆里藏着拉萨所有的下午。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1500 }, { name: '火车', icon: '🚂', cost: 550 }],
    visa: null,
    spots: (window.LHA_SPOTS = window.LHA_SPOTS || []),
    souvenirs: (window.LHA_GIFTS = window.LHA_GIFTS || []),
    stories: (window.LHA_STORIES = window.LHA_STORIES || []),
  });
})();
