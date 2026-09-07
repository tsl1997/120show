/* ============ 美国·迈阿密（完全版·分册组装） ============
 * 分册：mi_01地点 / mi_02周边 / mi_03趣事。
 * 叙事主线：南海滩/Art Deco/小哈瓦那/大沼泽/Key West/古巴文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'miami',
    name: '迈阿密',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🌴',
    desc: '魔法之城：南海滩的Art Deco彩楼与白色细沙，小哈瓦那的雪茄与萨尔萨，拉丁风情与美国海滩文化的融合体。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.MI_SPOTS = window.MI_SPOTS || []),
    souvenirs: (window.MI_GIFTS = window.MI_GIFTS || []),
    stories: (window.MI_STORIES = window.MI_STORIES || [])
  });
})();
