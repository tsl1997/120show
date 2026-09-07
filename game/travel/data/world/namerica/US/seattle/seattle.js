/* ============ 美国·西雅图（完全版·分册组装） ============
 * 分册：se_01地点 / se_02周边 / se_03趣事。
 * 叙事主线：派克市场/太空针/雷尼尔山/奇胡利玻璃/科技双雄/垃圾摇滚。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'seattle',
    name: '西雅图',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🏔️',
    desc: '翡翠之城：雷尼尔雪山做背景，派克市场抛鱼表演与第一间星巴克，微软亚马逊的科技心脏，咖啡与雨是这座城的浪漫。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.SE_SPOTS = window.SE_SPOTS || []),
    souvenirs: (window.SE_GIFTS = window.SE_GIFTS || []),
    stories: (window.SE_STORIES = window.SE_STORIES || [])
  });
})();
