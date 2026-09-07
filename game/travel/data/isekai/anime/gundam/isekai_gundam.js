/* ============ 异世界·动漫《机动战士高达》副本（宇宙世纪·分册组装） ============
 * 分册：gnd_01地点 / gnd_02剧情名场面 / gnd_03宝物 / gnd_series势力系列收藏。
 * 世界构成：Side7 → 白色基地 → 地球圈战线 → 所罗门 → 阿·巴瓦·库。
 * 主题：宇宙世纪0079，一年战争——少年阿姆罗登上高达，与吉翁公国死战到底。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_gundam', name: '机动战士高达·宇宙世纪', country: '异世界', cc: 'CN', flag: '🌠', region: 'isekai_anime', world: 'isekai', hero: '🤖',
    desc: '"高达屹立于大地之上！"宇宙世纪0079，一年战争席卷整个地球圈——少年阿姆罗登上白色恶魔，从Side7到阿·巴瓦·库的传奇就此展开。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.GND_SPOTS || [],
    souvenirs: window.GND_GIFTS || [],
    stories: window.GND_STORIES || []
  });
})();
