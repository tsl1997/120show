/* ============ 美国·洛杉矶（完全版·分册组装） ============
 * 分册：la_01地点 / la_02周边 / la_03趣事。
 * 叙事主线：好莱坞与迪士尼/海滨与阳光/墨西哥风情/球鞋与街头文化/电影梦。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'losangeles',
    name: '洛杉矶',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🌴',
    desc: '天使之城：好莱坞山下的棕榈大道，圣莫尼卡的日落摩天轮，随便一个街角都像电影布景，阳光全年不打烊。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6800 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.LA_SPOTS = window.LA_SPOTS || []),
    souvenirs: (window.LA_GIFTS = window.LA_GIFTS || []),
    stories: (window.LA_STORIES = window.LA_STORIES || [])
  });
})();
