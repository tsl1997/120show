/* ============ 澳门（分册版·分册组装） ============
 * 分册：am_01景点 / am_02周边 / am_03趣事。
 * 三条叙事线：中西合璧 / 葡式风情 / 街头小吃。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'macau',
    name: '澳门',
    country: '中国',
    cc: 'CN',
    province: '澳门',
    flag: '🇲🇴',
    region: '港澳台',
    hero: '🎰',
    desc: '四百年中葡交融的小城：大三巴牌坊俯瞰石板街，葡挞香气飘过议事亭前地，一夜之间能从欧陆小镇走到度假村宇宙。',
    travel: [{ name: '轮船', icon: '⛴️', cost: 180 }, { name: '高铁', icon: '🚄', cost: 620 }, { name: '飞机', icon: '✈️', cost: 950 }],
    visa: null,
    spots: (window.AM_SPOTS = window.AM_SPOTS || []),
    souvenirs: (window.AM_GIFTS = window.AM_GIFTS || []),
    stories: (window.AM_STORIES = window.AM_STORIES || []),
  });
})();
