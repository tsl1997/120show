/* ============ 日本·鸟取（分册组装） ============
 * 分册：ttr_01景点 / ttr_02周边 / ttr_03趣事。
 * 城市字段沿用旧档 tottori.js 原样。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'tottori',
    name: '鸟取',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·中国地方',
    hero: '🏜️',
    desc: '柯南之父的故乡：鸟取沙丘的沙漠幻想，青山刚昌博物馆的推理宇宙，全日本人口最少的县藏着最多的"名场面"。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2600 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.TTR_SPOTS = window.TTR_SPOTS || []),
    souvenirs: (window.TTR_GIFTS = window.TTR_GIFTS || []),
    stories: (window.TTR_STORIES = window.TTR_STORIES || [])
  });
})();
