/* ============ 台北（完全版 v2·分册组装） ============
 * 分册：tb_01地点 / tb_02周边 / tb_03趣事。
 * 主题：夜市 / 故宫文物 / 淡水 / 都市。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'taibei',
    name: '台北',
    country: '中国',
    cc: 'CN',
    province: '台湾',
    flag: '🇹🇼',
    region: '港澳台',
    hero: '🌃',
    desc: '101大楼撑起天际线，夜市烟火暖着人间。骑楼下的奶茶店与旧书摊比邻，温柔的说"谢谢"声是这座城市的背景音。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '轮船', icon: '⛴️', cost: 500 }],
    visa: null,
    spots: (window.TB_SPOTS = window.TB_SPOTS || []),
    souvenirs: (window.TB_GIFTS = window.TB_GIFTS || []),
    stories: (window.TB_STORIES = window.TB_STORIES || []),
  });
})();
