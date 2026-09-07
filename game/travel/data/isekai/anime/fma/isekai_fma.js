/* ============ 异世界·动漫《钢之炼金术师》副本（亚美斯特利斯版·分册组装） ============
 * 分册：fma_01景点 / fma_02剧情名场面 / fma_03宝物 / fma_series势力系列。
 * 世界构成：利森布尔 → 中央市 → 东国沙漠 → 真理之门
 * 主题：等价交换——人没有牺牲就得不到任何东西。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_fma', name: '钢之炼金术师·亚美斯特利斯', country: '异世界', cc: 'CN', flag: '⚙️', region: 'isekai_anime', world: 'isekai', hero: '⚙️',
    desc: '"人没有牺牲就得不到任何东西，想要得到什么，就必须付出同等的代价。"为找回失去的身体，爱德华与阿尔踏上追查贤者之石的旅程——钢之炼金术师。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.FMA_SPOTS || [],
    souvenirs: window.FMA_GIFTS || [],
    stories: window.FMA_STORIES || []
  });
})();
