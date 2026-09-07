/* ============ 异世界·动漫《星际牛仔》副本（Bebop 号完全版·分册组装） ============
 * 分册：cbb_01景点 / cbb_02剧情名场面 / cbb_03宝物 / cbb_series势力系列。
 * 世界构成：Bebop号 → 小行星带 → 火星/金星 → 星际旧日
 * 主题：See you, Space Cowboy——流浪者的爵士安魂曲。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_cowboy', name: '星际牛仔·Bebop号', country: '异世界', cc: 'CN', flag: '🎷', region: 'isekai_anime', world: 'isekai', hero: '🎷',
    desc: '"无论走到哪里，人都会遇见自己。"在爵士乐与硝烟弥漫的星际，赏金猎人斯派克与伙伴们乘Bebop号流浪——追猎悬赏，也追不回过去。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.CBB_SPOTS || [],
    souvenirs: window.CBB_GIFTS || [],
    stories: window.CBB_STORIES || []
  });
})();
