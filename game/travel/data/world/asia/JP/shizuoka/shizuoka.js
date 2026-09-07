/* ============ 日本·静冈（完全版·分册组装） ============
 * 分册：szo_01景点 / szo_02周边 / szo_03趣事。
 * 叙事主线：富士山与富士宫 / 清水·骏河湾·茶田 / 伊豆半岛。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shizuoka',
    name: '静冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·中部',
    hero: '🗻',
    desc: '富士之国·小丸子的故乡：清水港的金枪鱼与樱虾，骏府城的家康，三保松地的羽衣传说，茶田与富士山同框。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.SZO_SPOTS = window.SZO_SPOTS || []),
    souvenirs: (window.SZO_GIFTS = window.SZO_GIFTS || []),
    stories: (window.SZO_STORIES = window.SZO_STORIES || [])
  });
})();
