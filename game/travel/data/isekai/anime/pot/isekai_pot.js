/* ============ 异世界·动漫《网球王子》副本（青学全国版·分册组装） ============
 * 分册：pot_01景点 / pot_02剧情名场面 / pot_03宝物 / pot_series势力系列。
 * 世界构成：青春学园 → 关东大赛 → 全国大会 → 世界网坛
 * 主题：まだまだだね！——越前龙马的网球之魂。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_pot', name: '网球王子·青春学园', country: '异世界', cc: 'CN', flag: '🎾', region: 'isekai_anime', world: 'isekai', hero: '🎾',
    desc: '"还差得远呢！"天才少年越前龙马加入青学网球部，与手冢、不二等正选向全国大赛冲刺——少年们的汗水、网球与青春。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.POT_SPOTS || [],
    souvenirs: window.POT_GIFTS || [],
    stories: window.POT_STORIES || []
  });
})();
