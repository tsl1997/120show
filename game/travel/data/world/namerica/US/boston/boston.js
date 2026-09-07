/* ============ 美国·波士顿（完全版·分册组装） ============
 * 分册：bo_01地点 / bo_02周边 / bo_03趣事。
 * 叙事主线：哈佛与 MIT/自由之路/龙虾卷与蛤蜊浓汤/倾茶事件/红袜队。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'boston',
    name: '波士顿',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🎓',
    desc: '美国的精神古城：哈佛与 MIT 的学霸之城，自由之路串起独立战争，龙虾卷与蛤蜊浓汤，查尔斯河畔的赛艇清晨。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }, { name: '高铁', icon: '🚄', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.BO_SPOTS = window.BO_SPOTS || []),
    souvenirs: (window.BO_GIFTS = window.BO_GIFTS || []),
    stories: (window.BO_STORIES = window.BO_STORIES || [])
  });
})();
