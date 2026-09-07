/* ============ 异世界·动漫《咒术回战》超大副本（分册组装） ============
 * 分册：jjk_01地点 / jjk_02剧情名场面 / jjk_03宝物 / jjk_series势力系列收藏。
 * 世界构成：东京咒术高专 → 涩谷事变 → 死灭回游 → 新宿决战
 * 主题："领域展开！"少年咒术师以羸弱肉身对抗诅咒与命运的咒术回战。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_jujutsu', name: '咒术回战·咒术高专', country: '异世界', cc: 'CN', flag: '🔮', region: 'isekai_anime', world: 'isekai', hero: '⚡',
    desc: '"领域展开！"吞下宿傩手指的咒术高专少年们，从涩谷到新宿，在诅咒与咒灵的洪流中守护人间的咒术回战。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.JJK_SPOTS || [],
    souvenirs: window.JJK_GIFTS || [],
    stories: window.JJK_STORIES || []
  });
})();
