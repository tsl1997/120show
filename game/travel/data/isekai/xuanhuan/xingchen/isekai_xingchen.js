/* ============ 异世界·玄幻《星辰变》超大副本 v2·分册组装 ============
 * 分册：XC_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_xingchen', name: '星辰变·潜龙大陆', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '无法修炼内功的少年秦羽以流星泪脱胎换骨，《星辰变》外功入圣——凡人界、仙魔妖界、神界三级飞升，一本童年修真的热血启蒙。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.XC_SPOTS || [],
    souvenirs: window.XC_GIFTS || [],
    stories: window.XC_STORIES || []
  });
})();
