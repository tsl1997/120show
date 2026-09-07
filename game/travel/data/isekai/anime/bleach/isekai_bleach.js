/* ============ 异世界·动漫《死神BLEACH》副本（尸魂界版·分册组装） ============
 * 分册：blc_01景点 / blc_02剧情名场面 / blc_03宝物 / blc_series势力系列。
 * 世界构成：空座町 → 尸魂界与瀞灵廷 → 虚圈 → 千年血战
 * 主题：卍解！——死神与虚的斩魄刀物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_bleach', name: '死神BLEACH·尸魂界', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_anime', world: 'isekai', hero: '⚔️',
    desc: '"我是要成为死神的男人！"能看见幽灵的高中生黑崎一护，为守护家人继承了死神之力——斩魄刀卍解，与虚、蓝染、护廷十三队的魂魄物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.BLC_SPOTS || [],
    souvenirs: window.BLC_GIFTS || [],
    stories: window.BLC_STORIES || []
  });
})();
