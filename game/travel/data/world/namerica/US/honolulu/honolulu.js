/* ============ 美国·檀香山（完全版·分册组装） ============
 * 分册：hl_01地点 / hl_02周边 / hl_03趣事。
 * 叙事主线：威基基与钻石头山/珍珠港/波奇饭/草裙舞与花环/Aloha 精神。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'honolulu',
    name: '檀香山',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·夏威夷',
    hero: '🌺',
    desc: '太平洋明珠·夏威夷：威基基海滩的浪一年四季温柔，钻石头山看日出，花环与草裙舞把 Aloha 变成一种生活方式。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.HL_SPOTS = window.HL_SPOTS || []),
    souvenirs: (window.HL_GIFTS = window.HL_GIFTS || []),
    stories: (window.HL_STORIES = window.HL_STORIES || [])
  });
})();
