/* ============ 异世界·玄幻《遮天》超大副本 v2·分册组装 ============
 * 分册：ZT_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_zhetian', name: '遮天·北斗星域', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '九龙拉棺拉出一场万古大戏：荒古圣体叶凡自地球起步，狠人大帝、无始大帝的传说，七大生命禁区与成仙路的终极梦想——吾为天帝，当镇世间一切敌！',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.ZT_SPOTS || [],
    souvenirs: window.ZT_GIFTS || [],
    stories: window.ZT_STORIES || []
  });
})();
