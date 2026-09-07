/* ============ 新加坡（完全版·分册组装） ============
 * 分册：sg_01地点 / sg_02周边 / sg_03趣事。
 * 叙事主线：鱼尾狮/滨海湾/金沙/圣淘沙/小贩米其林/罚款之国。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'singapore',
    name: '新加坡',
    country: '新加坡',
    cc: 'SG',
    flag: '🇸🇬',
    region: '东南亚',
    hero: '🦁',
    desc: '花园城市国家：鱼尾狮口喷清泉，滨海湾的超级树夜里发光，小贩中心里藏着米其林，一座把规则与浪漫都写进城市的国家。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2000 }],
    visa: { cost: 0, note: '中新互免签证（停留不超过30天）' },
    spots: (window.SG_SPOTS = window.SG_SPOTS || []),
    souvenirs: (window.SG_GIFTS = window.SG_GIFTS || []),
    stories: (window.SG_STORIES = window.SG_STORIES || [])
  });
})();
