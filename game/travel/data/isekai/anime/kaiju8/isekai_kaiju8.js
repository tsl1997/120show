/* ============ 异世界·动漫《怪兽8号》副本（东京防卫队版·分册组装） ============
 * 分册：kj8_01景点 / kj8_02剧情名场面 / kj8_03宝物 / kj8_series势力系列。
 * 世界构成：清扫队 → 防卫队第三部队 → 怪兽出没的东京 → 怪兽9号之暗
 * 主题：只要还能战斗，就想和你并肩——大叔变身怪兽的防卫物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_kaiju8', name: '怪兽8号·东京', country: '异世界', cc: 'CN', flag: '👹', region: 'isekai_anime', world: 'isekai', hero: '👹',
    desc: '"我想保护这座城市，和所有人。"32岁还在清扫怪兽残骸的日比野卡夫卡，意外觉醒为怪兽8号——一边隐藏身份，一边追逐着与米娜并肩的梦想。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.KJ8_SPOTS || [],
    souvenirs: window.KJ8_GIFTS || [],
    stories: window.KJ8_STORIES || []
  });
})();
