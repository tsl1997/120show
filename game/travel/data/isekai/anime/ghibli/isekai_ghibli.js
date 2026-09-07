/* ============ 异世界·吉卜力《龙猫》副本（森林完全版·分册组装） ============
 * 分册：ghi_01景点 / ghi_02剧情名场面 / ghi_03宝物 / ghi_series势力系列。
 * 世界构成：乡下老宅 → 龙猫森林 → 医院与稻田 → 云海之上
 * 主题：每个孩子心里都住着一只龙猫。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_ghibli', name: '龙猫·森林之乡', country: '异世界', cc: 'CN', flag: '🌳', region: 'isekai_anime', world: 'isekai', hero: '🌳',
    desc: '"像这样，我们一起散步吧。"昭和乡下的老宅与参天樟树，小月小梅遇见龙猫一家——只有孩子才看得到的森林魔法，献给最温柔的母亲。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.GHI_SPOTS || [],
    souvenirs: window.GHI_GIFTS || [],
    stories: window.GHI_STORIES || []
  });
})();
