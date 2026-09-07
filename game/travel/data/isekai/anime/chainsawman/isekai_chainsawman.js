/* ============ 异世界·动漫《电锯人》副本（东京版·分册组装） ============
 * 分册：csm_01景点 / csm_02剧情名场面 / csm_03宝物 / csm_series势力系列。
 * 世界构成：破公寓与公安特课 → 恶魔横行的东京 → 玛奇玛的支配
 * 主题：想吃普通的饭，想被平等地爱——链锯人的物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_chainsawman', name: '电锯人·东京', country: '异世界', cc: 'CN', flag: '⚙️', region: 'isekai_anime', world: 'isekai', hero: '⚙️',
    desc: '"波奇塔，变身！"穷到吃烟的少年电次与链锯恶魔融合成为电锯人，加入公安对魔特异课——在恶魔横行的东京，他只想吃一顿普通的热饭。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.CSM_SPOTS || [],
    souvenirs: window.CSM_GIFTS || [],
    stories: window.CSM_STORIES || []
  });
})();
