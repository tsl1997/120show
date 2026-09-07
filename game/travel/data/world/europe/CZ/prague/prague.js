/* ============ 捷克·布拉格（完全版·分册组装） ============
 * 分册：cz_01地点 / cz_02周边 / cz_03趣事。
 * 叙事主线：百塔城堡与查理大桥/卡夫卡犹太区/伏尔塔瓦河/慕夏新艺术/天鹅绒革命/啤酒文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'prague',
    name: '布拉格',
    country: '捷克',
    cc: 'CZ',
    flag: '🇨🇿',
    region: '欧洲',
    hero: '🌉',
    desc: '"百塔之城"：查理大桥的圣像与伏尔塔瓦河，天文钟的整点游行，卡夫卡与昆德拉的城市，波西米亚的黄金。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6400 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.CZ_SPOTS = window.CZ_SPOTS || []),
    souvenirs: (window.CZ_GIFTS = window.CZ_GIFTS || []),
    stories: (window.CZ_STORIES = window.CZ_STORIES || [])
  });
})();
