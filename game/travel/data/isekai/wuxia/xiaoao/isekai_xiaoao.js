/* ============ 异世界·武侠《笑傲江湖》超大副本（五岳完全版 v2·分册组装） ============
 * 分册：xa_01地点 / xa_02人物事件 / xa_03武功神兵。
 * 世界构成：华山 → 福州/衡山/恒山 → 嵩山封禅台 → 黑木崖
 * 主题：正邪之辩与自由之魂——独孤九剑与《笑傲江湖》曲。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_xiaoao', name: '笑傲江湖·黑木崖', country: '异世界', cc: 'CN', flag: '🎶', region: 'isekai_wuxia', world: 'isekai', hero: '🎶',
    desc: '"有人就有恩怨，有恩怨就有江湖。"令狐冲的独孤九剑、东方不败的绣花针、岳不群的伪善与任盈盈的琴音——一曲《笑傲江湖》，道尽自由与权谋。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.XA_SPOTS || [],
    souvenirs: window.XA_GIFTS || [],
    stories: window.XA_STORIES || []
  });
})();
