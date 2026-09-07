/* ============ 异世界·玄幻《莽荒纪》超大副本 v2·分册组装 ============
 * 分册：MH_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_manghuang', name: '莽荒纪·纪氏部落', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '带着前世记忆转世莽荒的纪宁：炼气炼体、剑修问道，从部落少年到三界最强——一部东方洪荒版的少年修行史诗。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.MH_SPOTS || [],
    souvenirs: window.MH_GIFTS || [],
    stories: window.MH_STORIES || []
  });
})();
