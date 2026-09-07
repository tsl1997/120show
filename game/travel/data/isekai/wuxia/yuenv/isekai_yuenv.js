/* ============ 异世界·武侠《越女剑》超大副本 v2·分册组装 ============
 * 分册：YE_01全量（地点/人物事件/武功）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yuenv', name: '越女剑·会稽山', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '春秋吴越争霸：牧羊女阿青一根竹棒胜千军，白猿授剑、西子捧心——金庸最短最美的武侠。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YE_SPOTS || [],
    souvenirs: window.YE_GIFTS || [],
    stories: window.YE_STORIES || []
  });
})();
