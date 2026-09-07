/* ============ 异世界·玄幻《雪鹰领主》超大副本 v2·分册组装 ============
 * 分册：XY_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_xueying', name: '雪鹰领主·夏族边陲', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '少年领主东伯雪鹰：枪道天才守护领地，血脉觉醒对抗毁灭魔族——从夏族边陲到混沌虚空的至高之路。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.XY_SPOTS || [],
    souvenirs: window.XY_GIFTS || [],
    stories: window.XY_STORIES || []
  });
})();
