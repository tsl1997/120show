/* ============ 美国·奥斯汀（完全版·分册组装） ============
 * 分册：au_01地点 / au_02周边 / au_03趣事。
 * 叙事主线：州议会与蝙蝠桥/SXSW 音乐节/Franklin BBQ/Keep Austin Weird/硅丘科技。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'austin',
    name: '奥斯汀',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🦇',
    desc: '"硅丘"·现场音乐之都：德州首府，SXSW 与奥斯汀限定的"Keep Austin Weird"，国会大道桥下150万只蝙蝠起飞。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.AU_SPOTS = window.AU_SPOTS || []),
    souvenirs: (window.AU_GIFTS = window.AU_GIFTS || []),
    stories: (window.AU_STORIES = window.AU_STORIES || [])
  });
})();
