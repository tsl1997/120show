/* ============ 异世界·动漫《药屋少女的呢喃》副本（后宫版·分册组装） ============
 * 分册：kus_01景点 / kus_02剧情名场面 / kus_03宝物 / kus_series势力系列。
 * 世界构成：后宫女官住处 → 御膳房与御花园 → 药铺街的过去 → 朝堂阴谋
 * 主题：毒药与解药——药商少女的后宫推理物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_kusuriya', name: '药屋少女的呢喃·后宫', country: '异世界', cc: 'CN', flag: '🧪', region: 'isekai_anime', world: 'isekai', hero: '🧪',
    desc: '"我不是侦探，我是药师。"被卖进后宫的猫猫靠药草与嗅觉，一次次揭开宫里最深的秘密——毒药、解药与那个总找她麻烦的壬氏。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.KUS_SPOTS || [],
    souvenirs: window.KUS_GIFTS || [],
    stories: window.KUS_STORIES || []
  });
})();
