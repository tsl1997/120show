/* ============ 异世界·玄幻《佛本是道》超大副本 v2·分册组装 ============
 * 分册：fd_01_spots / fd_02_stories / fd_03_gifts。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_fo', name: '佛本是道·蜀山', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '现代都市修真者周青卷入封神余波：阐教截教的恩怨、佛门东进的算计、洪荒圣人棋局——佛本是道，道法自然。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.FD_SPOTS || [],
    souvenirs: window.FD_GIFTS || [],
    stories: window.FD_STORIES || []
  });
})();
