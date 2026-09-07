/* ============ 意大利·罗马（完全版·分册组装） ============
 * 分册：it_01地点 / it_02周边 / it_03趣事。
 * 叙事主线：古罗马帝国遗址/梵蒂冈教廷/万神殿与喷泉/特拉斯提弗列/意面与披萨。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'rome',
    name: '罗马',
    country: '意大利',
    cc: 'IT',
    flag: '🇮🇹',
    region: '欧洲',
    hero: '🏟️',
    desc: '永恒之城：斗兽场的石拱历经两千年，许愿池的硬币替全人类许愿，一口意式浓缩配一球开心果冰淇淋，就是罗马的下午。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5800 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.IT_SPOTS = window.IT_SPOTS || []),
    souvenirs: (window.IT_GIFTS = window.IT_GIFTS || []),
    stories: (window.IT_STORIES = window.IT_STORIES || [])
  });
})();
