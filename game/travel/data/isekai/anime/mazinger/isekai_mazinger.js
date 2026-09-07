/* ============ 异世界·动漫《魔神Z》副本（超级机器人始祖·光子力研究所） ============
 * 分册：maz_01地点 / maz_02剧情名场面 / maz_03宝物 / maz_series势力系列收藏。
 * 世界构成：光子力研究所 → 机械兽袭击的东京 → 巴多斯岛要塞 → 未来科技都市大铁城
 * 主题："魔神Z，出击！"光子力驱动的超级机器人神话。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_mazinger', name: '魔神Z·光子力研究所', country: '异世界', cc: 'CN', flag: '⚙️', region: 'isekai_anime', world: 'isekai', hero: '🦾',
    desc: '"魔神Z，出击！"少年兜甲儿乘上祖父留下的钢铁巨人，以光子力迎战地狱军团的机械兽洪流——超级机器人的神话从这里开始。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.MAZ_SPOTS || [],
    souvenirs: window.MAZ_GIFTS || [],
    stories: window.MAZ_STORIES || []
  });
})();
