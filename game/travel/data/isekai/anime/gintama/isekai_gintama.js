/* ============ 异世界·动漫《银魂》副本（江户万事屋版·分册组装） ============
 * 分册：gin_01景点 / gin_02剧情名场面 / gin_03宝物 / gin_series势力系列。
 * 世界构成：歌舞伎町与万事屋 → 真选组屯所 → 攘夷志士 → 松阳塾的过去
 * 主题：我的人生，就是要和你们一起疯到底——银魂。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_gintama', name: '银魂·江户万事屋', country: '异世界', cc: 'CN', flag: '🥢', region: 'isekai_anime', world: 'isekai', hero: '🥢',
    desc: '"万事屋，开张！"天人入侵后的江户，懒散武士坂田银时与新八、神乐开着万事屋——搞笑到极致，认真起来又能燃到骨子里的银魂日常。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.GIN_SPOTS || [],
    souvenirs: window.GIN_GIFTS || [],
    stories: window.GIN_STORIES || []
  });
})();
