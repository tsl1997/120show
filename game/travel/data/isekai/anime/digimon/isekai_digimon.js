/* ============ 异世界·动漫《数码宝贝》副本（数码世界完全版·分册组装） ============
 * 分册：dgm_01景点 / dgm_02剧情名场面 / dgm_03宝物 / dgm_series势力系列。
 * 世界构成：文件岛 → 服务器大陆 → 东京御台场 → 数码世界重启
 * 主题：进化！——被选召的孩子与数码兽的冒险。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_digimon', name: '数码宝贝·数码世界', country: '异世界', cc: 'CN', flag: '🦖', region: 'isekai_anime', world: 'isekai', hero: '🦖',
    desc: '"亚古兽，进化！"八个被选召的孩子在夏令营被卷入数码世界，与伙伴数码兽并肩进化——勇气、友情与希望的冒险物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DGM_SPOTS || [],
    souvenirs: window.DGM_GIFTS || [],
    stories: window.DGM_STORIES || []
  });
})();
