/* ============ 东京都（完全版·分册组装） ============
 * 分册：tyo_01地点 / tyo_02周边 / tyo_03趣事。
 * 叙事主线：江户下町 / 涩谷新宿银座 / 二次元圣地 / 皇居与近郊山野。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'tokyo',
    name: '东京都',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🗼',
    desc: '首善之都·都道府县之首：涩谷的人潮、浅草的雷门、晴空塔下的天空树与烟火气，一座把未来与江户叠在一起的城市。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2200 }, { name: '邮轮', icon: '🛳️', cost: 3800 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.TYO_SPOTS = window.TYO_SPOTS || []),
    souvenirs: (window.TYO_GIFTS = window.TYO_GIFTS || []),
    stories: (window.TYO_STORIES = window.TYO_STORIES || [])
  });
})();
