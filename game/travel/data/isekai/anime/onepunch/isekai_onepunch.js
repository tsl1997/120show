/* ============ 异世界·动漫《一拳超人》副本（Z市版·分册组装） ============
 * 分册：opm_01景点 / opm_02剧情名场面 / opm_03宝物 / opm_series势力系列。
 * 世界构成：Z市 → 英雄协会 → 怪人协会 → 宇宙战场
 * 主题：一拳就够了——最强英雄的平凡日常。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_onepunch', name: '一拳超人·Z市', country: '异世界', cc: 'CN', flag: '👊', region: 'isekai_anime', world: 'isekai', hero: '👊',
    desc: '"我当英雄，只是因为我喜欢。"练到秃头的最强男人埼玉，一拳解决一切怪人——然后在超市特卖和房租里继续普通人生。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.OPM_SPOTS || [],
    souvenirs: window.OPM_GIFTS || [],
    stories: window.OPM_STORIES || []
  });
})();
