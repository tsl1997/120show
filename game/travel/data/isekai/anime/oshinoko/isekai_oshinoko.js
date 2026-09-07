/* ============ 异世界·动漫《我推的孩子》副本（演艺圈版·分册组装） ============
 * 分册：osh_01景点 / osh_02剧情名场面 / osh_03宝物 / osh_series势力系列。
 * 世界构成：妇产科与偶像舞台 → 演艺公司 → 选秀与片场 → 寻父的真相
 * 主题：这一世，换我来守护你——偶像与转生的物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_oshinoko', name: '我推的孩子·演艺圈', country: '异世界', cc: 'CN', flag: '⭐', region: 'isekai_anime', world: 'isekai', hero: '⭐',
    desc: '"妈妈不在了，但她的光还在我们眼里。"医生吾郎与患者纱利奈转生为偶像星野爱的双子，阿库亚为追查母亲之死潜入演艺圈，露比在舞台上接过母亲的光——偶像与复仇、爱与黑暗的物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.OSH_SPOTS || [],
    souvenirs: window.OSH_GIFTS || [],
    stories: window.OSH_STORIES || []
  });
})();
