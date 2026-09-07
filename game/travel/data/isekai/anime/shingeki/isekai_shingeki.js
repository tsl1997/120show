/* ============ 异世界·动漫《进击的巨人》超大副本（分册组装） ============
 * 分册：aot_01地点 / aot_02剧情名场面 / aot_03宝物 / aot_series势力系列收藏。
 * 世界构成：希干希纳 → 玛利亚之墙 → 罗塞之墙 → 希纳之墙王都 → 马莱雷贝利欧 → 海的那边
 * 主题：墙内与墙外，自由与诅咒——"献出你的心脏！"
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_shingeki', name: '进击的巨人·墙内与墙外', country: '异世界', cc: 'CN', flag: '🧱', region: 'isekai_anime', world: 'isekai', hero: '⚔️',
    desc: '"献出你的心脏！"人类在高墙内苟活百年，少年艾伦为夺回自由踏出城墙——从希干希纳废墟到海的另一边，与九大巨人共舞的命运之旅。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.AOT_SPOTS || [],
    souvenirs: window.AOT_GIFTS || [],
    stories: window.AOT_STORIES || []
  });
})();
