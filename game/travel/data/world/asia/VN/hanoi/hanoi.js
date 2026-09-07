/* ============ 越南·河内（完全版·分册组装） ============
 * 分册：vn_01地点 / vn_02周边 / vn_03趣事。
 * 叙事主线：还剑湖/三十六行街/胡志明陵/河粉与滴漏咖啡/火车街/下龙湾。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hanoi',
    name: '河内',
    country: '越南',
    cc: 'VN',
    flag: '🇻🇳',
    region: '东南亚',
    hero: '🛵',
    desc: '千年升龙古城：摩托洪流穿过法式老街，街头塑料凳上的滴漏咖啡慢慢滴，一碗河粉的清晨就是河内的答案。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '火车', icon: '🚂', cost: 700 }],
    visa: { cost: 260, note: '电子签证（E-visa）' },
    spots: (window.VN_SPOTS = window.VN_SPOTS || []),
    souvenirs: (window.VN_GIFTS = window.VN_GIFTS || []),
    stories: (window.VN_STORIES = window.VN_STORIES || [])
  });
})();
