/* ============ 异世界·动漫《北斗神拳》副本（世纪末完全版·分册组装） ============
 * 分册：hok_01景点 / hok_02剧情名场面 / hok_03宝物 / hok_series势力系列。
 * 世界构成：废土荒野 → 南斗圣都 → 拳王军要塞 → 修罗之国
 * 主题："你已经死了！"——北斗神拳的兄弟与爱恨。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_hokuto', name: '北斗神拳·世纪末', country: '异世界', cc: 'CN', flag: '👊', region: 'isekai_anime', world: 'isekai', hero: '👊',
    desc: '"你已经死了！"核战后的废土，北斗神拳第64代继承者拳四郎流浪四方，以北斗百裂拳对抗拳王军与修罗之国——兄弟相争、爱恨交错的世纪末物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.HOK_SPOTS || [],
    souvenirs: window.HOK_GIFTS || [],
    stories: window.HOK_STORIES || []
  });
})();
