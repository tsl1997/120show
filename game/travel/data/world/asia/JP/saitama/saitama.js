/* ============ 日本·埼玉（完全版·分册组装） ============
 * 分册：sta_01地点 / sta_02周边 / sta_03趣事。
 * 旧档条目与城市字段原样保留；本文件为组装器，须在三个分册之后加载。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'saitama',
    name: '埼玉',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🌸',
    desc: '蜡笔小新的故乡：春日部的野原家，秩父的温泉与芝樱，铁道博物馆的火车迷天堂，东京近郊的"日常系圣地"。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.STA_SPOTS = window.STA_SPOTS || []),
    souvenirs: (window.STA_GIFTS = window.STA_GIFTS || []),
    stories: (window.STA_STORIES = window.STA_STORIES || [])
  });
})();
