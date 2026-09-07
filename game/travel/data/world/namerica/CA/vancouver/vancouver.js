/* ============ 加拿大·温哥华（完全版·分册组装） ============
 * 分册：ca2_01地点 / ca2_02周边 / ca2_03趣事。
 * 叙事主线：斯坦利公园/吊桥/唐人街/观鲸/原住民艺术/滑雪与海/原住民文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'vancouver',
    name: '温哥华',
    country: '加拿大',
    cc: 'CA',
    flag: '🇨🇦',
    region: '加拿大·西部',
    hero: '🏔️',
    desc: '山海之间的宜居之城：斯坦利公园的环岛海堤、雪山下的唐人街，上午滑雪下午出海看鲸，自然与都市无缝切换。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5500 }],
    visa: { cost: 750, note: '加拿大访客签证' },
    spots: (window.CA2_SPOTS = window.CA2_SPOTS || []),
    souvenirs: (window.CA2_GIFTS = window.CA2_GIFTS || []),
    stories: (window.CA2_STORIES = window.CA2_STORIES || [])
  });
})();
