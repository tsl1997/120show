/* ============ 异世界·动漫《精灵宝可梦》副本（关都完全版·分册组装） ============
 * 分册：pkm_01景点 / pkm_02剧情名场面 / pkm_03宝物 / pkm_series势力系列。
 * 世界构成：真新镇 → 关都道路与道馆 → 石英联盟 → 传说的宝可梦
 * 主题：就决定是你了！——皮卡丘，十万伏特！
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_pokemon', name: '精灵宝可梦·关都', country: '异世界', cc: 'CN', flag: '⚡', region: 'isekai_anime', world: 'isekai', hero: '⚡',
    desc: '"皮卡丘，就决定是你了！"真新镇少年小智踏上收集徽章、收服宝可梦的旅程，皮卡丘的十万伏特与火箭队的"好讨厌的感觉"——冒险永不完结。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.PKM_SPOTS || [],
    souvenirs: window.PKM_GIFTS || [],
    stories: window.PKM_STORIES || []
  });
})();
