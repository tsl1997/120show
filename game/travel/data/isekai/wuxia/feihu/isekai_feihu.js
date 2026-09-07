/* ============ 异世界·武侠《飞狐外传》超大副本 v2·分册组装 ============
 * 分册：fh_01全量（地点/人物事件/武功）。
 * 主题：为素不相识的人讨公道——雪山飞狐前传。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_feihu', name: '飞狐外传·商家堡', country: '异世界', cc: 'CN', flag: '🗡️', region: 'isekai_wuxia', world: 'isekai', hero: '🗡️',
    desc: '"路见不平，拔刀相助。"辽东大侠胡斐：为钟阿四讨公道千里追凶，程灵素的七心海棠与袁紫衣的空门初恋——雪山飞狐的前传。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.FH_SPOTS || [],
    souvenirs: window.FH_GIFTS || [],
    stories: window.FH_STORIES || []
  });
})();
