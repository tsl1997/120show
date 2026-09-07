/* ============ 辽宁·沈阳（东北·分册立体版 v1·组装器） ============
 * 分册：sny_01_spots 景点 / sny_02_gifts 周边 / sny_03_stories 趣事。
 * 旧档全部条目原样迁入三个分册（shenyang_* 前缀 id 一字未改）；城市字段与旧档完全一致。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shenyang',
    name: '沈阳',
    country: '中国',
    cc: 'CN',
    province: '辽宁',
    flag: '🇨🇳',
    region: '东北',
    hero: '🏯',
    desc: '"一朝发祥地，两代帝王城"：沈阳故宫的红墙黄瓦藏着满清起家的故事，刘老根大舞台的笑声里全是东北的豪爽。',
    travel: [{ name: '高铁', icon: '🚄', cost: 800 }, { name: '飞机', icon: '✈️', cost: 1000 }],
    visa: null,
    spots: (window.SNY_SPOTS = window.SNY_SPOTS || []),
    souvenirs: (window.SNY_GIFTS = window.SNY_GIFTS || []),
    stories: (window.SNY_STORIES = window.SNY_STORIES || []),
  });
})();
