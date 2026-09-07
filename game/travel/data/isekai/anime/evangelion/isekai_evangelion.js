/* ============ 异世界·动漫《新世纪福音战士》副本（第三新东京市完全版·分册组装） ============
 * 分册：eva_01景点 / eva_02剧情名场面 / eva_03宝物 / eva_series势力系列。
 * 世界构成：第三新东京市 → NERV总部 → 中央教条 → 人类补完
 * 主题：不能逃——少年与EVA与人类补完计划。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_evangelion', name: '新世纪福音战士·第三新东京市', country: '异世界', cc: 'CN', flag: '🤖', region: 'isekai_anime', world: 'isekai', hero: '🤖',
    desc: '"不能逃，不能逃！"14岁的碇真嗣坐上EVA初号机迎击使徒，在NERV、AT力场与人类补完计划的漩涡中——少年与"大人"的福音战士。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.EVA_SPOTS || [],
    souvenirs: window.EVA_GIFTS || [],
    stories: window.EVA_STORIES || []
  });
})();
