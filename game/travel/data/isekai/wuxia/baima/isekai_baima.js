/* ============ 异世界·武侠《白马啸西风》超大副本 v2·分册组装 ============
 * 分册：BM_01全量（地点/人物事件/武功）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_baima', name: '白马啸西风·高昌迷宫', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '回疆草原上的白马与天铃鸟——李文秀的初恋、高昌迷宫的反讽宝藏，和那句“都是很好很好的，可是我偏不喜欢”。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.BM_SPOTS || [],
    souvenirs: window.BM_GIFTS || [],
    stories: window.BM_STORIES || []
  });
})();
