/* ============ 异世界·动漫《我的英雄学院》副本（雄英高中版·分册组装） ============
 * 分册：mha_01景点 / mha_02剧情名场面 / mha_03宝物 / mha_series势力系列。
 * 世界构成：雄英高中 → A班日常 → 职业英雄实习 → 敌联盟与全面战争
 * 主题：PLUS ULTRA！——继承者成为最棒英雄的物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_mha', name: '我的英雄学院·雄英高中', country: '异世界', cc: 'CN', flag: '🦸', region: 'isekai_anime', world: 'isekai', hero: '🦸',
    desc: '"PLUS ULTRA！"人人都有"个性"的时代，无个性的绿谷出久从偶像欧尔麦特那里继承One For All——在雄英A班向"最棒的英雄"冲刺。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.MHA_SPOTS || [],
    souvenirs: window.MHA_GIFTS || [],
    stories: window.MHA_STORIES || []
  });
})();
