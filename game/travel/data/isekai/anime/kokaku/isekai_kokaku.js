/* ============ 异世界·动漫《攻壳机动队》副本（新滨市完全版·分册组装） ============
 * 分册：kok_01景点 / kok_02剧情名场面 / kok_03宝物 / kok_series势力系列。
 * 世界构成：新滨市 → 公安九课 → 网络幽灵 → 政府与财团
 * 主题：GHOST IN THE SHELL——义体里的灵魂。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_kokaku', name: '攻壳机动队·新滨市', country: '异世界', cc: 'CN', flag: '🌐', region: 'isekai_anime', world: 'isekai', hero: '🌐',
    desc: '"网络是广阔的。"在义体与电子脑普及的近未来新滨市，公安九课草薙素子追猎网络幽灵——义体是壳，意识才是魂。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.KOK_SPOTS || [],
    souvenirs: window.KOK_GIFTS || [],
    stories: window.KOK_STORIES || []
  });
})();
