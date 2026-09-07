/* ============ 异世界·动漫《圣斗士星矢》副本（圣域完全版·分册组装） ============
 * 分册：sei_01景点 / sei_02剧情名场面 / sei_03宝物 / sei_series势力系列。
 * 世界构成：圣域十二宫 → 五老峰/西伯利亚 → 海底神殿 → 冥界与极乐净土
 * 主题：燃烧吧小宇宙！——守护女神的圣战物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_saintseiya', name: '圣斗士星矢·圣域十二宫', country: '异世界', cc: 'CN', flag: '🌟', region: 'isekai_anime', world: 'isekai', hero: '🌟',
    desc: '"燃烧吧，小宇宙！"孤儿天马座星矢穿上圣衣，与紫龙、冰河、瞬、一辉守护女神雅典娜——从十二宫圣战到海皇冥王的史诗。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SEI_SPOTS || [],
    souvenirs: window.SEI_GIFTS || [],
    stories: window.SEI_STORIES || []
  });
})();
