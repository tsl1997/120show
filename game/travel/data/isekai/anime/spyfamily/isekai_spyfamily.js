/* ============ 异世界·动漫《间谍过家家》副本（佛杰家版·分册组装） ============
 * 分册：spy_01景点 / spy_02剧情名场面 / spy_03宝物 / spy_series势力系列。
 * 世界构成：佛杰家 → 伊甸学园 → 东国街道 → 情报机构与暗杀组织
 * 主题：为了世界和平——一个"假"家庭的真情物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_spyfamily', name: '间谍过家家·佛杰家', country: '异世界', cc: 'CN', flag: '🕵️', region: 'isekai_anime', world: 'isekai', hero: '🕵️',
    desc: '"为了世界的和平。"间谍黄昏、暗杀者约尔与读心少女阿尼亚组成临时家庭——各自藏着惊天秘密，却在一张餐桌上越吃越像真家人。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.SPY_SPOTS || [],
    souvenirs: window.SPY_GIFTS || [],
    stories: window.SPY_STORIES || []
  });
})();
