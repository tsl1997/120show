/* ============ 天津（华北·分册版 v1·分册组装） ============
 * 分册：tj_01 景点打卡 / tj_02 特色周边 / tj_03 城市趣事。
 * 主题线：洋楼建筑 / 海河文脉 / 津味市井 / 哏都相声。
 * 旧档条目已原样并入各分册，本文件为组装器。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'tianjin',
    name: '天津',
    country: '中国',
    cc: 'CN',
    province: '天津',
    flag: '🇨🇳',
    region: '华北',
    hero: '🎡',
    desc: '九河下梢的哏都：五大道的小洋楼、海河上的摩天轮、茶馆里的相声，天津把幽默过成了日常。',
    travel: [{ name: '高铁', icon: '🚄', cost: 540 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: (window.TJ_SPOTS = window.TJ_SPOTS || []),
    souvenirs: (window.TJ_GIFTS = window.TJ_GIFTS || []),
    stories: (window.TJ_STORIES = window.TJ_STORIES || []),
  });
})();
