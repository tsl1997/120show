/* ============ 异世界·动漫《Overlord》副本（纳萨力克版·分册组装） ============
 * 分册：ovl_01景点 / ovl_02剧情名场面 / ovl_03宝物 / ovl_series势力系列。
 * 世界构成：纳萨力克大坟墓 → 耶兰提尔 → 魔导国 → 异世界征服
 * 主题：为陛下鞠躬尽瘁——白骨之王的异世界君临。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_overlord', name: 'Overlord·纳萨力克', country: '异世界', cc: 'CN', flag: '💀', region: 'isekai_anime', world: 'isekai', hero: '💀',
    desc: '"欢迎来到我的国家。"游戏关服之夜，公会会长安兹坠入异世界成为白骨之王——统治纳萨力克大坟墓，以绝对力量君临人类与异种共存的魔导国。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.OVL_SPOTS || [],
    souvenirs: window.OVL_GIFTS || [],
    stories: window.OVL_STORIES || []
  });
})();
