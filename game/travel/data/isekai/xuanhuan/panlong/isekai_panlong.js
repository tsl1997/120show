/* ============ 异世界·玄幻《盘龙》超大副本 v2·分册组装 ============
 * 分册：PL_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_panlong', name: '盘龙·玉兰大陆', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '一枚盘龙戒指开启的传奇：石雕少年林雷在魔法与斗气的玉兰大陆崛起，龙血战士血脉觉醒，从圣域到主神再到鸿蒙掌控者——还有一只叫贝贝的噬神鼠。',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.PL_SPOTS || [],
    souvenirs: window.PL_GIFTS || [],
    stories: window.PL_STORIES || []
  });
})();
