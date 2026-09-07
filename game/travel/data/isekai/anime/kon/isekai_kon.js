/* ============ 异世界·动漫《轻音少女》副本（樱丘高中版·分册组装） ============
 * 分册：kon_01景点 / kon_02剧情名场面 / kon_03宝物 / kon_series势力系列。
 * 世界构成：轻音部活动室 → 樱丘高中 → 文化祭舞台 → 毕业后的樱丘
 * 主题：红茶、点心与合奏——放课後ティータイム的青春。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_kon', name: '轻音少女·樱丘高中', country: '异世界', cc: 'CN', flag: '🎸', region: 'isekai_anime', world: 'isekai', hero: '🎸',
    desc: '"练习五分钟，喝茶两小时。"把"轻音"听成"轻音"的平泽唯误入樱丘高中轻音部，与澪、律、紬、梓度过泡红茶、吃点心、偶尔合奏的青春日常。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.KON_SPOTS || [],
    souvenirs: window.KON_GIFTS || [],
    stories: window.KON_STORIES || []
  });
})();
