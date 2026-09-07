/* ============ 异世界·动漫《美少女战士》超大副本（银河完全版 v2·分册组装） ============
 * 分册：sm_01地点 / sm_02剧情名场面 / sm_03宝物 / sm_series势力系列收藏。
 * 世界构成：麻布十番 → 黑暗王国 → 黑月亮/水晶东京 → 无限学园 → 死亡月亮 → 银河
 * 主题："我要代表月亮消灭你！"爱与正义的月光传说。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_sailormoon', name: '美少女战士·月野兔东京', country: '异世界', cc: 'CN', flag: '🌙', region: 'isekai_anime', world: 'isekai', hero: '🌙',
    desc: '"我要代表月亮消灭你！"爱哭鬼月野兔变身水手月亮，与内部五战士、外部四战士守护银水晶的月光传说——从麻布十番到银河尽头。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SM_SPOTS || [],
    souvenirs: window.SM_GIFTS || [],
    stories: window.SM_STORIES || []
  });
})();
