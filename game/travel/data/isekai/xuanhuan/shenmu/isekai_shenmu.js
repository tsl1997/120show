/* ============ 异世界·玄幻《神墓》超大副本 v2·分册组装 ============
 * 分册：SM2_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_shenmu', name: '神墓·神魔陵园', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '神魔陵园中醒来的一具尸体：失落战神辰南万年后复活，失忆寻找记忆，战神图录重修，揭开神魔大战与天地棋局的万年真相——我命由我不由天。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SM2_SPOTS || [],
    souvenirs: window.SM2_GIFTS || [],
    stories: window.SM2_STORIES || []
  });
})();
