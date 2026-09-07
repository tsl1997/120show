/* ============ 异世界·动漫《夏目友人帐》副本（八原版·分册组装） ============
 * 分册：nat_01景点 / nat_02剧情名场面 / nat_03宝物 / nat_series势力系列。
 * 世界构成：夏目的家与八原 → 妖怪森林神社 → 友人帐归还之旅
 * 主题：你的名字，我还给你——温柔得能治愈妖怪的少年。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_natsume', name: '夏目友人帐·八原', country: '异世界', cc: 'CN', flag: '🐈', region: 'isekai_anime', world: 'isekai', hero: '🐈',
    desc: '"虽然我看得见妖怪，但他们从来都不是可怕的。"少年夏目贵志继承祖母玲子的友人帐，与猫咪老师一起把名字归还给妖怪们——一场温柔得让人想哭的旅程。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.NAT_SPOTS || [],
    souvenirs: window.NAT_GIFTS || [],
    stories: window.NAT_STORIES || []
  });
})();
