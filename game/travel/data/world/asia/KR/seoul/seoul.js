/* ============ 韩国·首尔（完全版·分册组装） ============
 * 分册：kr_01地点 / kr_02周边 / kr_03趣事。
 * 叙事主线：景福宫与北村/明洞与韩妆/汉江/汗蒸幕/KPOP/韩食。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'seoul',
    name: '首尔',
    country: '韩国',
    cc: 'KR',
    flag: '🇰🇷',
    region: '东亚',
    hero: '🏯',
    desc: '汉江奇迹的心脏：景福宫的韩服少女、北村的青瓦巷、江南的霓虹与明洞的烤肉香，K文化在这座城里昼夜不停。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1600 }, { name: '轮船', icon: '🛳️', cost: 900 }],
    visa: { cost: 280, note: '韩国旅游签证（C-3，旅行社代办）' },
    spots: (window.KR_SPOTS = window.KR_SPOTS || []),
    souvenirs: (window.KR_GIFTS = window.KR_GIFTS || []),
    stories: (window.KR_STORIES = window.KR_STORIES || [])
  });
})();
