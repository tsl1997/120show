/* ============ 异世界·动漫《幽游白书》副本（灵界侦探完全版·分册组装） ============
 * 分册：yyh_01景点 / yyh_02剧情名场面 / yyh_03宝物 / yyh_series势力系列。
 * 世界构成：人间 → 灵界 → 暗黑武术会 → 魔界
 * 主题：灵丸发射！灵界侦探的妖怪大冒险。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yuuyu', name: '幽游白书·灵界侦探', country: '异世界', cc: 'CN', flag: '👻', region: 'isekai_anime', world: 'isekai', hero: '👻',
    desc: '"我可不是什么善人！"不良少年浦饭幽助为救人而死，却在小阎王考验下复活成为灵界侦探——与桑原、藏马、飞影一路打进魔界的格斗物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YYH_SPOTS || [],
    souvenirs: window.YYH_GIFTS || [],
    stories: window.YYH_STORIES || []
  });
})();
