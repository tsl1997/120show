/* ============ 异世界·武侠《鸳鸯刀》超大副本 v2·分册组装 ============
 * 分册：YY_01全量（地点/人物事件/武功）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yuanyang', name: '鸳鸯刀·太岳四侠', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '一部轻喜剧武侠：一对鸳鸯刀、一对吵闹夫妻、四个不靠谱大侠——双刀合璧的秘密竟刻着“仁者无敌”四个字。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YY_SPOTS || [],
    souvenirs: window.YY_GIFTS || [],
    stories: window.YY_STORIES || []
  });
})();
