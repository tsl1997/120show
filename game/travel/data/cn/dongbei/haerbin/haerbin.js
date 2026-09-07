/* ============ 哈尔滨（东北·分册立体版 v1·组装器） ============
 * 分册：heb_01_spots 景点 / heb_02_gifts 周边 / heb_03_stories 趣事。
 * 旧档全部条目原样迁入三个分册（haerbin_* 前缀 id 一字未改）；城市字段与旧档完全一致。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'haerbin',
    name: '哈尔滨',
    country: '中国',
    cc: 'CN',
    province: '黑龙江',
    flag: '🇨🇳',
    region: '东北',
    hero: '❄️',
    desc: '"尔滨"的雪是会宠人的：冰雪大世界的冰砖垒成宫殿，中央大街的面包石踏过百年，零下二十度也要举着一根马迭尔冰棍。',
    travel: [{ name: '高铁', icon: '🚄', cost: 760 }, { name: '飞机', icon: '✈️', cost: 950 }],
    visa: null,
    spots: (window.HEB_SPOTS = window.HEB_SPOTS || []),
    souvenirs: (window.HEB_GIFTS = window.HEB_GIFTS || []),
    stories: (window.HEB_STORIES = window.HEB_STORIES || []),
  });
})();
