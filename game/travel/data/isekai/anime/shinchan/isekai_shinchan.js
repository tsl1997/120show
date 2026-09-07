/* ============ 异世界·动漫《蜡笔小新》副本（春日部完全版·分册组装） ============
 * 分册：sin_01景点 / sin_02剧情名场面 / sin_03宝物 / sin_series势力系列。
 * 世界构成：野原家 → 双叶幼稚园 → 春日部街道 → 剧场版世界
 * 主题：动感光波——哔哔哔哔！五岁小孩的宇宙。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_shinchan', name: '蜡笔小新·春日部', country: '异世界', cc: 'CN', flag: '🖍️', region: 'isekai_anime', world: 'isekai', hero: '🖍️',
    desc: '"我叫野原新之助，今年五岁。"在埼玉县春日部，小新用屁股舞和动感光波把全家与街坊搅得天翻地覆——一家四口加小白的爆笑日常。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SIN_SPOTS || [],
    souvenirs: window.SIN_GIFTS || [],
    stories: window.SIN_STORIES || []
  });
})();
