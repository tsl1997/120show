/* ============ 丽江（分册立体版·组装） ============
 * 分册：lj_01景点 / lj_02周边 / lj_03趣事。
 * 数据挂载：LJ_SPOTS / LJ_GIFTS / LJ_STORIES。
 * 主题：古城水巷 / 玉龙雪山 / 纳西东巴 / 茶马古道。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lijiang',
    name: '丽江',
    country: '中国',
    cc: 'CN',
    province: '云南',
    flag: '🇨🇳',
    region: '西南',
    hero: '🏔️',
    desc: '雪山下的柔软时光：大研古城的水巷酒吧，玉龙雪山的十三峰银光，纳西古乐与东巴文字，丽江是"发呆"的代名词。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '火车', icon: '🚂', cost: 650 }],
    visa: null,
    spots: (window.LJ_SPOTS = window.LJ_SPOTS || []),
    souvenirs: (window.LJ_GIFTS = window.LJ_GIFTS || []),
    stories: (window.LJ_STORIES = window.LJ_STORIES || []),
  });
})();
