/* ============ 异世界·玄幻《大主宰》超大副本 v2·分册组装 ============
 * 分册：DZ_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_dazhuzai', name: '大主宰·北灵院', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '灵路毒瘤牧尘的逆袭：从北灵境到大千世界，九幽雀相伴、洛璃相守，集不朽金身成大主宰，率万族对抗圣族——少年主宰的万丈荣光。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DZ_SPOTS || [],
    souvenirs: window.DZ_GIFTS || [],
    stories: window.DZ_STORIES || []
  });
})();
