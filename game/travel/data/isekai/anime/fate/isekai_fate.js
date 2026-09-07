/* ============ 异世界·动漫《Fate 圣杯战争》副本（冬木完全版·分册组装） ============
 * 分册：fate_01地点 / fate_02剧情名场面 / fate_03宝物 / fate_series势力系列收藏。
 * 世界构成：冬木市 → 柳洞寺/圆藏山(大圣杯) → 远坂/间桐/爱因兹贝伦 → 英灵之座
 * 主题：围绕能实现一切愿望的圣杯，七组主从相互厮杀的冬木圣杯战争。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_fate', name: 'Fate·圣杯战争·冬木', country: '异世界', cc: 'CN', flag: '🏆', region: 'isekai_anime', world: 'isekai', hero: '⚔️',
    desc: '七天七夜、七骑从者，围绕万能的许愿机相互厮杀的冬木圣杯战争——追逐理想的少年与骑士王缔结契约，三条命运交织的夜就此开幕。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.FATE_SPOTS || [],
    souvenirs: window.FATE_GIFTS || [],
    stories: window.FATE_STORIES || []
  });
})();
