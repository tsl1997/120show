/* ============ 异世界·玄幻《斗罗大陆》超大副本 v2·分册组装 ============
 * 分册：DL_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_douluo', name: '斗罗大陆·史莱克学院', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '唐门外门弟子唐三穿越斗罗大陆：蓝银草觉醒昊天锤，史莱克七怪闯大陆——海神九考、双神之战，一代海神的成神之路。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DL_SPOTS || [],
    souvenirs: window.DL_GIFTS || [],
    stories: window.DL_STORIES || []
  });
})();
