/* ============ 异世界·武侠《侠客行》超大副本 v2·分册组装 ============
 * 分册：XK_01全量（地点/人物事件/武功）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_xiake', name: '侠客行·侠客岛', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '十年一度的腊八粥之约，二十四间石壁的太玄经——不识字的傻小子石破天反而参透绝世武功，我是谁的哲学之问。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.XK_SPOTS || [],
    souvenirs: window.XK_GIFTS || [],
    stories: window.XK_STORIES || []
  });
})();
