/* ============ 异世界·动漫《浪客剑心》副本（明治东京完全版·分册组装） ============
 * 分册：rkn_01景点 / rkn_02剧情名场面 / rkn_03宝物 / rkn_series势力系列。
 * 世界构成：神谷道场与明治东京 → 京都篇 → 志志雄一派 → 追忆的雪
 * 主题：从今以后，我不再杀人——逆刃刀的浪客物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_rurouni', name: '浪客剑心·明治东京', country: '异世界', cc: 'CN', flag: '🗡️', region: 'isekai_anime', world: 'isekai', hero: '🗡️',
    desc: '"虽然我逆着刃，但我的剑仍是活人剑。"曾以"拔刀斋"之名杀人的绯村剑心，在明治东京遇见神谷薰——从今以后，他只为守护而挥剑。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.RKN_SPOTS || [],
    souvenirs: window.RKN_GIFTS || [],
    stories: window.RKN_STORIES || []
  });
})();
