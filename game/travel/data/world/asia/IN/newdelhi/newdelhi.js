/* ============ 印度·新德里（完全版·分册组装） ============
 * 分册：in_01地点 / in_02周边 / in_03趣事。
 * 叙事主线：红堡与清真寺/印度门与莲花寺/香料市场与纱丽/恒河/泰姬陵一日。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'newdelhi',
    name: '新德里',
    country: '印度',
    cc: 'IN',
    flag: '🇮🇳',
    region: '南亚',
    hero: '🕌',
    desc: '七城叠加的首都：莫卧儿红堡与英式大道相邻，香料市场的色彩浓得化不开，一座把信仰、混乱与灿烂揉在一起的城市。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 400, note: '电子旅游签证（E-Visa）' },
    spots: (window.IN_SPOTS = window.IN_SPOTS || []),
    souvenirs: (window.IN_GIFTS = window.IN_GIFTS || []),
    stories: (window.IN_STORIES = window.IN_STORIES || [])
  });
})();
