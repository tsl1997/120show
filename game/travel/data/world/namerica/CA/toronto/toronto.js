/* ============ 加拿大·多伦多（完全版·分册组装） ============
 * 分册：ca_01地点 / ca_02周边 / ca_03趣事。
 * 叙事主线：CN塔/湖心岛/卡萨罗马/尼亚加拉/枫糖/多元文化/冰球。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'toronto',
    name: '多伦多',
    country: '加拿大',
    cc: 'CA',
    flag: '🇨🇦',
    region: '加拿大·东部',
    hero: '🍁',
    desc: '枫叶国的多元之都：CN塔上俯瞰安大略湖，百个民族的美食挤在一条街，秋天枫红时整座城都在燃烧。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7800 }],
    visa: { cost: 750, note: '加拿大访客签证' },
    spots: (window.CA_SPOTS = window.CA_SPOTS || []),
    souvenirs: (window.CA_GIFTS = window.CA_GIFTS || []),
    stories: (window.CA_STORIES = window.CA_STORIES || [])
  });
})();
