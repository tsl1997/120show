/* ============ 异世界·动漫《全职猎人》副本（猎人世界版·分册组装） ============
 * 分册：hxh_01景点 / hxh_02剧情名场面 / hxh_03宝物 / hxh_series势力系列。
 * 世界构成：鲸鱼岛 → 猎人考试 → 天空竞技场 → 友克鑫 → 嵌合蚁与暗黑大陆
 * 主题：我要当猎人！——寻找父亲与世界的冒险。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_hxh', name: '全职猎人·猎人世界', country: '异世界', cc: 'CN', flag: '🎣', region: 'isekai_anime', world: 'isekai', hero: '🎣',
    desc: '"我要当猎人！"鲸鱼岛少年小杰为寻找猎人父亲金，与奇犽、酷拉皮卡、雷欧力踏上世界最严苛的猎人考试——念能力、幻影旅团与嵌合蚁的冒险。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.HXH_SPOTS || [],
    souvenirs: window.HXH_GIFTS || [],
    stories: window.HXH_STORIES || []
  });
})();
