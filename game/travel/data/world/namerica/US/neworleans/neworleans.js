/* ============ 美国·新奥尔良（完全版·分册组装） ============
 * 分册：no_01地点 / no_02周边 / no_03趣事。
 * 叙事主线：法国区与波旁街/爵士乐诞生地/Gumbo 美食/狂欢节/巫毒文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'neworleans',
    name: '新奥尔良',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🎺',
    desc: '爵士乐的诞生地：法国区的铁艺阳台与街头铜管乐，贝尼特甜甜圈与秋葵浓汤，巫毒文化与狂欢节。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.NO_SPOTS = window.NO_SPOTS || []),
    souvenirs: (window.NO_GIFTS = window.NO_GIFTS || []),
    stories: (window.NO_STORIES = window.NO_STORIES || [])
  });
})();
