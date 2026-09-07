/* ============ 异世界·动漫《宇宙战舰大和号》副本（伊斯坎达尔之路·分册组装） ============
 * 分册：ymt_01地点 / ymt_02剧情名场面 / ymt_03宝物 / ymt_series势力系列收藏。
 * 世界构成：辐射地球 → 地球轨道 → 冥王星战线 → 麦哲伦星云 → 伊斯坎达尔 → 加米拉斯帝都 → 白色彗星帝国
 * 主题："大和号，出发！"一年、二十九万光年、一艘船与人类的黎明。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yamato', name: '宇宙战舰大和号·伊斯坎达尔之路', country: '异世界', cc: 'CN', flag: '🌌', region: 'isekai_anime', world: 'isekai', hero: '🚀',
    desc: '"大和号，出发！"辐射笼罩地球的最后一年，沉眠海底的旧战列舰改装成宇宙战舰，载着少年们跨越近三十万光年，去伊斯坎达尔取回拯救人类的净化之光。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YMT_SPOTS || [],
    souvenirs: window.YMT_GIFTS || [],
    stories: window.YMT_STORIES || []
  });
})();
