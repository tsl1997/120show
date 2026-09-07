/* ============ 新疆·乌鲁木齐（分册立体版 v2·分册组装） ============
 * 分册：wlmq_01景点 / wlmq_02周边 / wlmq_03趣事。
 * 主题：亚洲大陆中心 / 多民族 / 天山。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'wulumuqi',
    name: '乌鲁木齐',
    country: '中国',
    cc: 'CN',
    province: '新疆',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏔️',
    desc: '亚洲大陆地理中心：大巴扎的烤包子香飘满街，天山天池雪峰倒映博格达，离海最远的大城市却有最甜的瓜果。',
    travel: [{ name: '高铁', icon: '🚄', cost: 1200 }, { name: '飞机', icon: '✈️', cost: 1800 }],
    visa: null,
    spots: (window.WLMQ_SPOTS = window.WLMQ_SPOTS || []),
    souvenirs: (window.WLMQ_GIFTS = window.WLMQ_GIFTS || []),
    stories: (window.WLMQ_STORIES = window.WLMQ_STORIES || []),
  });
})();
