/* ============ 异世界·动漫《Re:从零开始的异世界生活》副本（露格尼卡版·分册组装） ============
 * 分册：rez_01景点 / rez_02剧情名场面 / rez_03宝物 / rez_series势力系列。
 * 世界构成：罗兹瓦尔宅邸 → 王都王选 → 圣域与魔女教 → 死亡回归
 * 主题：就算重来一百次，我也要救你们——从零开始的异世界生活。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_rezero', name: 'Re:从零开始·露格尼卡', country: '异世界', cc: 'CN', flag: '🌑', region: 'isekai_anime', world: 'isekai', hero: '🌑',
    desc: '"从零开始吧。"被召唤到异世界的普通少年菜月昴，拥有死亡回归的能力——每一次死去都重来，只为守护银发少女爱蜜莉雅与所爱之人。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.REZ_SPOTS || [],
    souvenirs: window.REZ_GIFTS || [],
    stories: window.REZ_STORIES || []
  });
})();
