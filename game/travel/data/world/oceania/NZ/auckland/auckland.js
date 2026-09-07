/* ============ 新西兰·奥克兰（完全版·分册组装） ============
 * 分册：nz_01地点 / nz_02周边 / nz_03趣事。
 * 叙事主线：千帆之城/天空塔/霍比屯/萤火虫洞/毛利文化/麦卢卡蜂蜜/中土世界。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'auckland',
    name: '奥克兰',
    country: '新西兰',
    cc: 'NZ',
    flag: '🇳🇿',
    region: '大洋洲',
    hero: '⛵',
    desc: '"千帆之城"：五十多座死火山锥长满绿草，天空塔俯瞰两个海湾，霍比屯的圆门木屋与萤火虫洞，中土世界就在隔壁。',
    travel: [{ name: '飞机', icon: '✈️', cost: 4500 }],
    visa: { cost: 950, note: '新西兰访客签证' },
    spots: (window.NZ_SPOTS = window.NZ_SPOTS || []),
    souvenirs: (window.NZ_GIFTS = window.NZ_GIFTS || []),
    stories: (window.NZ_STORIES = window.NZ_STORIES || [])
  });
})();
