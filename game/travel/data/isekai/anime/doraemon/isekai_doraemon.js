/* ============ 异世界·动漫《哆啦A梦》副本（四次元口袋分册组装） ============
 * 分册：dor_01地点 / dor_02剧情名场面 / dor_03宝物 / dor_series势力系列收藏。
 * 世界构成：野比家 → 空地街道 → 22世纪未来 → 任意门外的天空海洋与远古。
 * 主题："大雄，你又惹祸啦！"——四次元口袋里装着最温柔的童年冒险。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_doraemon', name: '哆啦A梦·四次元口袋', country: '异世界', cc: 'CN', flag: '📦', region: 'isekai_anime', world: 'isekai', hero: '🐱',
    desc: '"帮我实现梦想吧，哆啦A梦！"蓝色猫型机器人从抽屉里钻出，四次元口袋中藏着通往过去未来与任何角落的道具——这是全日本最温柔的童年冒险。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DOR_SPOTS || [],
    souvenirs: window.DOR_GIFTS || [],
    stories: window.DOR_STORIES || []
  });
})();
