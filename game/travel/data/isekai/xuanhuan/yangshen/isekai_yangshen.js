/* ============ 异世界·玄幻《阳神》超大副本 v2·分册组装 ============
 * 分册：YS_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yangshen', name: '阳神·大干王朝', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '庶子洪易以文道养神魂、武道炼肉身：出窍、阴神、阳神、粉碎真空——人仙武道开创者对抗魔主，读书人也能成仙的东方玄学。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YS_SPOTS || [],
    souvenirs: window.YS_GIFTS || [],
    stories: window.YS_STORIES || []
  });
})();
