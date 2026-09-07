/* ============ 异世界·武侠《连城诀》超大副本 v2·分册组装 ============
 * 分册：LC_01全量（地点/人物事件/武功）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_liancheng', name: '连城诀·大雪山谷', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '《连城诀》：人心最贪的江湖——狄云被师门构陷，丁典的神照经，雪谷的落花流水，与满地毒金银的人性寓言。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.LC_SPOTS || [],
    souvenirs: window.LC_GIFTS || [],
    stories: window.LC_STORIES || []
  });
})();
