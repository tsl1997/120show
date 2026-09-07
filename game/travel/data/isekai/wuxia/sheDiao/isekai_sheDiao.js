/* ============ 异世界·武侠《射雕英雄传》超大副本（华山论剑完全版 v2·分册组装） ============
 * 分册：sd_01地点 / sd_02人物事件 / sd_03武功神兵。
 * 世界构成：牛家村 → 蒙古大漠 → 江南/桃花岛 → 燕京/铁掌峰 → 华山之巅
 * 主题：侠之大者，为国为民——五绝江湖与九阴真经的争夺。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_sheDiao', name: '射雕英雄传·华山论剑', country: '异世界', cc: 'CN', flag: '🏹', region: 'isekai_wuxia', world: 'isekai', hero: '🏹',
    desc: '"侠之大者，为国为民。"东邪西毒南帝北丐中神通，一部九阴真经搅动江湖——傻小子郭靖弯弓射大雕，从大漠少年成长为一代大侠。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SD_SPOTS || [],
    souvenirs: window.SD_GIFTS || [],
    stories: window.SD_STORIES || []
  });
})();
