/* ============ 长沙（完全版·分册组装） ============
 * 分册：cs_01地点 / cs_02周边 / cs_03趣事。
 * 叙事主线：湘江橘子洲 / 岳麓千年文脉 / 湖湘红色 / 不夜娱乐之都。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'changsha',
    name: '长沙',
    country: '中国',
    cc: 'CN',
    province: '湖南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🌶️',
    desc: '娱乐之都、快乐星城：橘子洲头的焰火，文和友的市井江湖，茶颜悦色排长队，凌晨三点的解放西路依然人声鼎沸。',
    travel: [{ name: '高铁', icon: '🚄', cost: 160 }, { name: '飞机', icon: '✈️', cost: 600 }],
    visa: null,
    spots: (window.CS_SPOTS = window.CS_SPOTS || []),
    souvenirs: (window.CS_GIFTS = window.CS_GIFTS || []),
    stories: (window.CS_STORIES = window.CS_STORIES || []),
  });
})();
