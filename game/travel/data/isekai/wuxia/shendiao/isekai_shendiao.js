/* ============ 异世界·武侠《神雕侠侣》超大副本（绝情谷完全版 v2·分册组装） ============
 * 分册：st_01地点 / st_02人物事件 / st_03武功神兵。
 * 世界构成：终南山古墓 → 大胜关/襄阳 → 绝情谷 → 断肠崖 → 华山
 * 主题：问世间情为何物——神雕侠侣十六年生死之约。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_shendiao', name: '神雕侠侣·绝情谷', country: '异世界', cc: 'CN', flag: '🕊️', region: 'isekai_wuxia', world: 'isekai', hero: '🕊️',
    desc: '"问世间情为何物，直教生死相许。"断臂少年与古墓姑姑的十六年之约——玄铁重剑、黯然销魂掌与襄阳城头的飞石一击。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.ST_SPOTS || [],
    souvenirs: window.ST_GIFTS || [],
    stories: window.ST_STORIES || []
  });
})();
