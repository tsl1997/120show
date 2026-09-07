/* ============ 异世界·动漫《鬼灭之刃》超大副本（分册组装） ============
 * 分册：kmt_01地点 / kmt_02剧情名场面 / kmt_03宝物 / kmt_series势力系列收藏。
 * 世界构成：狭雾山 → 藤袭山 → 浅草 → 那田蜘蛛山 → 无限列车 → 吉原游郭 → 刀锻冶之里 → 产屋敷宅邸 → 无限城
 * 主题：大正时代的斩鬼物语——兄妹并肩对抗无惨与十二鬼月，为人间斩出黎明。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_kimetsu', name: '鬼灭之刃·大正斩鬼录', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_anime', world: 'isekai', hero: '🗡️',
    desc: '"全集中·水之呼吸！"卖炭少年竈门炭治郎为救回化作鬼的妹妹祢豆子加入鬼杀队，与九柱、十二鬼月乃至鬼舞辻无惨纠缠到底——大正时代的斩鬼史诗。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.KMT_SPOTS || [],
    souvenirs: window.KMT_GIFTS || [],
    stories: window.KMT_STORIES || []
  });
})();
