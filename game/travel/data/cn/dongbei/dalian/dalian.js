/* ============ 辽宁·大连（分册版 v2·分册组装） ============
 * 分册：dla_01景点 / dla_02周边 / dla_03趣事。
 * 主题：浪漫之都 / 海滨之城 / 广场之城。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dalian',
    name: '大连',
    country: '中国',
    cc: 'CN',
    province: '辽宁',
    flag: '🇨🇳',
    region: '东北',
    hero: '🌊',
    desc: '北方的海滨浪漫之都：广场与欧式建筑铺满丘陵，星海广场看海鸥，金石滩的海蚀奇观，海鲜配啤酒才是大连的夏天。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1100 }, { name: '高铁', icon: '🚄', cost: 900 }],
    visa: null,
    spots: (window.DLA_SPOTS = window.DLA_SPOTS || []),
    souvenirs: (window.DLA_GIFTS = window.DLA_GIFTS || []),
    stories: (window.DLA_STORIES = window.DLA_STORIES || []),
  });
})();
