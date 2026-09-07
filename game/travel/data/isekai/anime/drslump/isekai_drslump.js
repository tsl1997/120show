/* ============ 异世界·动漫《阿拉蕾》副本（企鹅村完全版·分册组装） ============
 * 分册：drs_01景点 / drs_02剧情名场面 / drs_03宝物 / drs_series势力系列。
 * 世界构成：企鹅村 → 则卷家/小学/怪兽山 → 大都会与宇宙
 * 主题：最强机器少女的荒诞日常——"阿拉蕾，出发！"
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_drslump', name: '阿拉蕾·企鹅村', country: '异世界', cc: 'CN', flag: '🤖', region: 'isekai_anime', world: 'isekai', hero: '🤖',
    desc: '"阿拉蕾，出发！"天才博士则卷千兵卫造出的超强机器少女，与企鹅村村民们过着鸡飞狗跳的日子——村外怪兽排队挨揍，外星人排队观光。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DRS_SPOTS || [],
    souvenirs: window.DRS_GIFTS || [],
    stories: window.DRS_STORIES || []
  });
})();
