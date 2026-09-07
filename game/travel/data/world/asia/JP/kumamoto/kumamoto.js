/* ============ 熊本（完全版·分册组装） ============
 * 分册：kum_01景点 / kum_02周边 / kum_03趣事。
 * 叙事主线：熊本城与清正公 / 阿苏火山与火之国 / 熊本熊与温泉海角。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kumamoto',
    name: '熊本',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🐻',
    desc: '熊本熊的老家：黑色的阿苏火山口冒着烟气，熊本城"武者返"石垣巍峨，还有吉祥物收入冠军 KUMAMON 的幽默老家。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.KUM_SPOTS = window.KUM_SPOTS || []),
    souvenirs: (window.KUM_GIFTS = window.KUM_GIFTS || []),
    stories: (window.KUM_STORIES = window.KUM_STORIES || [])
  });
})();
