/* ============ 异世界·玄幻《完美世界·圣墟》超大副本 v2·分册组装 ============
 * 分册：WM_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_wanmei_shengxu', name: '完美世界·石村', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '从石村走出的荒天帝石昊：至尊骨被夺、以身为种，独断万古护苍生；再到圣墟时代楚风的阳气复苏——辰东双璧合璧的世界。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.WM_SPOTS || [],
    souvenirs: window.WM_GIFTS || [],
    stories: window.WM_STORIES || []
  });
})();
