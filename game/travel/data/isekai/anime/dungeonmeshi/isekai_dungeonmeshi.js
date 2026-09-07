/* ============ 异世界·动漫《迷宫饭》副本（地下城版·分册组装） ============
 * 分册：dum_01景点 / dum_02剧情名场面 / dum_03宝物 / dum_series势力系列。
 * 世界构成：迷宫入口城镇 → 上层/中层/深层 → 龙之巢与迷宫的真相
 * 主题：边吃边冒险——"迷宫饭"的物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_dungeonmeshi', name: '迷宫饭·地下城', country: '异世界', cc: 'CN', flag: '🍲', region: 'isekai_anime', world: 'isekai', hero: '🍲',
    desc: '"这个魔物，该怎么吃？"为救被炎龙吞下的妹妹，剑士莱欧斯带着队伍边吃魔物边攻略迷宫——把冒险与美食煮成一锅的异世界奇谭。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DUM_SPOTS || [],
    souvenirs: window.DUM_GIFTS || [],
    stories: window.DUM_STORIES || []
  });
})();
