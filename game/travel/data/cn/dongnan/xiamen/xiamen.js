/* ============ 厦门（完全版·分册组装） ============
 * 分册：xm_01地点 / xm_02周边 / xm_03趣事。
 * 叙事主线：鼓浪屿琴岛 / 闽南古早味 / 华侨故里 / 山海慢生活。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xiamen',
    name: '厦门',
    country: '中国',
    cc: 'CN',
    province: '福建',
    flag: '🇨🇳',
    region: '东南',
    hero: '🏝️',
    desc: '海风把三角梅吹上骑楼老墙，鼓浪屿的琴声混着浪声，一座慢悠悠的"鹭岛"，连时间都愿意在这里排队。',
    travel: [{ name: '高铁', icon: '🚄', cost: 580 }, { name: '飞机', icon: '✈️', cost: 820 }],
    visa: null,
    spots: (window.XM_SPOTS = window.XM_SPOTS || []),
    souvenirs: (window.XM_GIFTS = window.XM_GIFTS || []),
    stories: (window.XM_STORIES = window.XM_STORIES || []),
  });
})();
