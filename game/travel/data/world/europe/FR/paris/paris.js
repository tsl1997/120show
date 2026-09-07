/* ============ 法国·巴黎（完全版·分册组装） ============
 * 分册：fr_01地点 / fr_02周边 / fr_03趣事。
 * 叙事主线：塞纳河光之城/卢浮奥赛印象派/左岸咖啡与玛黑/法餐法棍与香水/法国大革命。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'paris',
    name: '巴黎',
    country: '法国',
    cc: 'FR',
    flag: '🇫🇷',
    region: '欧洲',
    hero: '🗼',
    desc: '光之城：埃菲尔铁塔在塞纳河畔闪灯，卢浮宫的蒙娜丽莎排队三小时，转角面包房的法棍香就是巴黎的呼吸。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6000 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.FR_SPOTS = window.FR_SPOTS || []),
    souvenirs: (window.FR_GIFTS = window.FR_GIFTS || []),
    stories: (window.FR_STORIES = window.FR_STORIES || [])
  });
})();
