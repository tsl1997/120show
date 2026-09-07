/* ============ 异世界·动漫《石纪元》副本（石之世界版·分册组装） ============
 * 分册：sto_01景点 / sto_02剧情名场面 / sto_03宝物 / sto_series势力系列。
 * 世界构成：石神村与科学王国 → 司帝国 → 宝岛远航 → 重返月球
 * 主题：科学就是力量——从石头里重燃文明。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_drstone', name: '石纪元·石之世界', country: '异世界', cc: 'CN', flag: '🔬', region: 'isekai_anime', world: 'isekai', hero: '🔬',
    desc: '"这个世界的规则，由科学来重写！"全人类石化3700年后，天才少年千空醒来，用火、绳与科学重建文明——石器时代到现代科学的超脑力冒险。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.STO_SPOTS || [],
    souvenirs: window.STO_GIFTS || [],
    stories: window.STO_STORIES || []
  });
})();
