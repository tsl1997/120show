/* ============ 异世界·玄幻《武动乾坤》超大副本 v2·分册组装 ============
 * 分册：WD_01全量（地点/人物事件/功法至宝）。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_wudong', name: '武动乾坤·青阳镇', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '青阳镇庶子林动捡到一枚神秘石符：吞噬祖符、大荒囚天指、天鳞戟法——从家族废柴到对抗异魔皇的武祖传人，武动乾坤，一手掌天！',
    labels: { spotL: '仙境圣地', souvenirL: '功法至宝', storyL: '强者相遇', spotB: '前往', souvenirB: '获取', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.WD_SPOTS || [],
    souvenirs: window.WD_GIFTS || [],
    stories: window.WD_STORIES || []
  });
})();
