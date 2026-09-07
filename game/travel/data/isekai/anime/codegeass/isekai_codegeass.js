/* ============ 异世界·动漫《反叛的鲁路修》副本（第11区版·分册组装） ============
 * 分册：cgx_01景点 / cgx_02剧情名场面 / cgx_03宝物 / cgx_series势力系列。
 * 世界构成：阿什弗德学园 → 东京租界 → 黑色骑士团 → 不列颠帝国
 * 主题：我，将毁灭世界，再创造世界——Zero的反叛。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_codegeass', name: '反叛的鲁路修·第11区', country: '异世界', cc: 'CN', flag: '♟️', region: 'isekai_anime', world: 'isekai', hero: '♟️',
    desc: '"我，以Zero之名下令！"被流放的帝国皇子鲁路修获得Geass之瞳，化身Zero领导黑色骑士团反抗不列颠尼亚——为妹妹许下温柔世界的棋局。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.CGX_SPOTS || [],
    souvenirs: window.CGX_GIFTS || [],
    stories: window.CGX_STORIES || []
  });
})();
