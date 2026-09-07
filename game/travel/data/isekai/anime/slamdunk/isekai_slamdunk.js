/* ============ 异世界·动漫《灌篮高手》超大副本（全国大会完全版 v2·分册组装） ============
 * 分册：sl_01地点 / sl_02人物事件 / sl_03宝物。
 * 世界构成：湘北 → 神奈川（陵南/海南/翔阳）→ 全国大会（丰玉/山王/爱和/名朋）
 * 主题：喜欢篮球吗？——教练，我想打篮球。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_slamdunk', name: '灌篮高手·湘北高中', country: '异世界', cc: 'CN', flag: '🏀', region: 'isekai_anime', world: 'isekai', hero: '🏀',
    desc: '井上雄彦的青春圣经：问题儿童樱木花道加入湘北篮球部，"教练，我想打篮球"——向全国大赛，冲刺！神奈川四大强队与山王的世纪之战等你见证。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SL_SPOTS || [],
    souvenirs: window.SL_GIFTS || [],
    stories: window.SL_STORIES || []
  });
})();
