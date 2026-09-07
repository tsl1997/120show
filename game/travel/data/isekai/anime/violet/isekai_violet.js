/* ============ 异世界·动漫《紫罗兰永恒花园》副本（C·H邮政版·分册组装） ============
 * 分册：vio_01景点 / vio_02剧情名场面 / vio_03宝物 / vio_series势力系列。
 * 世界构成：C·H邮政公司 → 大陆铁路与村庄 → 战场的回忆 → 花田与永恒花园
 * 主题：我爱你——自动手记人偶的代笔物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_violet', name: '紫罗兰永恒花园·C·H邮政', country: '异世界', cc: 'CN', flag: '💌', region: 'isekai_anime', world: 'isekai', hero: '💌',
    desc: '"你愿意学习，什么是爱吗？"战场归来的少女薇尔莉特成为代笔人偶，为说不出口的人写信——每一封信，都让她离少佐那句"我爱你"更近一步。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.VIO_SPOTS || [],
    souvenirs: window.VIO_GIFTS || [],
    stories: window.VIO_STORIES || []
  });
})();
