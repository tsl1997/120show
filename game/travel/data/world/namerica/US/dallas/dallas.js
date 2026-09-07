/* ============ 美国·达拉斯（完全版·分册组装） ============
 * 分册：da_01地点 / da_02周边 / da_03趣事。
 * 叙事主线：JFK 迪利广场/牛仔队六旗/沃斯堡牲畜市场/Tex-Mex 烧烤/Reunion Tower。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dallas',
    name: '达拉斯',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🤠',
    desc: '牛仔与金融的德州心脏：JFK 被刺的迪利广场，牛仔竞技与达拉斯牛仔队，六大旗过山车，"big things happen in Texas"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.DA_SPOTS = window.DA_SPOTS || []),
    souvenirs: (window.DA_GIFTS = window.DA_GIFTS || []),
    stories: (window.DA_STORIES = window.DA_STORIES || [])
  });
})();
