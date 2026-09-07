/* ============ 异世界·动漫《魔法少女小圆》副本（见泷原版·分册组装） ============
 * 分册：mdk_01景点 / mdk_02剧情名场面 / mdk_03宝物 / mdk_series势力系列。
 * 世界构成：见泷原市 → 魔女结界 → 时间回廊 → 圆环之理
 * 主题：以愿望为代价的魔法少女，最终会走向哪里？
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_madoka', name: '魔法少女小圆·见泷原', country: '异世界', cc: 'CN', flag: '💠', region: 'isekai_anime', world: 'isekai', hero: '💠',
    desc: '"和我签订契约，成为魔法少女吧！"神秘丘比的出现，把温柔少女鹿目圆卷入灵魂宝石与魔女的真相——最甜美的设定，最残酷的物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.MDK_SPOTS || [],
    souvenirs: window.MDK_GIFTS || [],
    stories: window.MDK_STORIES || []
  });
})();
