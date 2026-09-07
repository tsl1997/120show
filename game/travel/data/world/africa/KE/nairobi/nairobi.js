/* ============ 肯尼亚·内罗毕（完全版·分册组装） ============
 * 分册：ke_01地点 / ke_02周边 / ke_03趣事。
 * 叙事主线：内罗毕国家公园/小象孤儿/马赛马拉/赤道/肯尼亚咖啡/红格毯。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nairobi',
    name: '内罗毕',
    country: '肯尼亚',
    cc: 'KE',
    flag: '🇰🇪',
    region: '非洲',
    hero: '🦁',
    desc: '"东非小巴黎"：城市里的国家公园有狮子散步，马赛马拉的动物大迁徙在两小时车程外，赤道上的日出是金色的。',
    travel: [{ name: '飞机', icon: '✈️', cost: 8000 }],
    visa: { cost: 450, note: '电子旅行授权（eTA）' },
    spots: (window.KE_SPOTS = window.KE_SPOTS || []),
    souvenirs: (window.KE_GIFTS = window.KE_GIFTS || []),
    stories: (window.KE_STORIES = window.KE_STORIES || [])
  });
})();
