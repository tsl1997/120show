/* ============ 异世界·动漫《葬送的芙莉莲》副本（大陆版·分册组装） ============
 * 分册：fri_01景点 / fri_02剧情名场面 / fri_03宝物 / fri_series势力系列。
 * 世界构成：勇者出发的村庄 → 大陆市镇与魔导遗迹 → 魔族之地 → 灵魂栖息地
 * 主题：等花开时，我们还会再见——精灵魔法使的迟到之旅。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_frieren', name: '葬送的芙莉莲·大陆', country: '异世界', cc: 'CN', flag: '🌸', region: 'isekai_anime', world: 'isekai', hero: '🌸',
    desc: '"我想再多了解你一点。"讨伐魔王后五十年，勇者辛美尔在芙莉莲眼前离世——千年精灵魔法使这才踏上"理解人类"的迟到旅程，一路向北。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.FRI_SPOTS || [],
    souvenirs: window.FRI_GIFTS || [],
    stories: window.FRI_STORIES || []
  });
})();
