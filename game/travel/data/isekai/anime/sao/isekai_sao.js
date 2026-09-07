/* ============ 异世界·动漫《刀剑神域》副本（艾恩葛朗特版·分册组装） ============
 * 分册：sao_01景点 / sao_02剧情名场面 / sao_03宝物 / sao_series势力系列。
 * 世界构成：艾恩葛朗特一百层 → 攻略组前线 → 微笑棺木的暗面 → UW世界
 * 主题：这不是游戏，是现实——要活下去。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_sao', name: '刀剑神域·艾恩葛朗特', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_anime', world: 'isekai', hero: '⚔️',
    desc: '"这不是游戏，是现实。"万名玩家被困死亡游戏SAO，独行剑士桐人用双剑一步步攻略一百层——在浮游城遇见亚丝娜，也找回活下去的意义。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SAO_SPOTS || [],
    souvenirs: window.SAO_GIFTS || [],
    stories: window.SAO_STORIES || []
  });
})();
