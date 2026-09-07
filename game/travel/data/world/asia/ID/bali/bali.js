/* ============ 印度尼西亚·巴厘岛（完全版·分册组装） ============
 * 分册：id_01地点 / id_02周边 / id_03趣事。
 * 叙事主线：海神庙/乌布/火山/悬崖/数字游民/印度教仪式/巴厘SPA。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'bali',
    name: '巴厘岛',
    country: '印度尼西亚',
    cc: 'ID',
    flag: '🇮🇩',
    region: '东南亚',
    hero: '🌺',
    desc: '"众神之岛"：梯田叠着火山、海神庙立在潮间，乌布的艺术家巷子与库塔的浪，把浪漫与野性装进同一座岛。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 250, note: '落地签（VoA，35万印尼盾约250元）' },
    spots: (window.ID_SPOTS = window.ID_SPOTS || []),
    souvenirs: (window.ID_GIFTS = window.ID_GIFTS || []),
    stories: (window.ID_STORIES = window.ID_STORIES || [])
  });
})();
