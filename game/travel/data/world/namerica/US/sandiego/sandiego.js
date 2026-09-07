/* ============ 美国·圣迭戈（完全版·分册组装） ============
 * 分册：sd_01地点 / sd_02周边 / sd_03趣事。
 * 叙事主线：圣地亚哥动物园/中途岛航母/拉霍亚海豹滩/墨西哥边境/精酿啤酒。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sandiego',
    name: '圣迭戈',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🐬',
    desc: '加州的阳光后花园：圣地亚哥动物园的世界级保育，中途岛航母与胜利之吻，拉霍亚的海豹滩，墨西哥风情的边境之城。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.SD_SPOTS = window.SD_SPOTS || []),
    souvenirs: (window.SD_GIFTS = window.SD_GIFTS || []),
    stories: (window.SD_STORIES = window.SD_STORIES || [])
  });
})();
