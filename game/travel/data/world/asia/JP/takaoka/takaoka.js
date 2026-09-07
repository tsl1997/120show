/* ============ 日本·高冈（完全版·分册组装） ============
 * 分册：tka_01景点 / tka_02周边 / tka_03趣事。
 * 叙事主线：高冈大佛与瑞龙寺 / 山町筋土藏与铜锡工艺 / 哆啦A梦故乡 / 富山湾·冰见与万叶故里。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'takaoka',
    name: '高冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·北陆',
    hero: '🔔',
    desc: '哆啦A梦之父的故乡：加贺藩二代前田利长开城，铜器与漆器之乡，大佛与瑞龙寺，雨天的富山湾配一杯冰见寒鰤。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.TKA_SPOTS = window.TKA_SPOTS || []),
    souvenirs: (window.TKA_GIFTS = window.TKA_GIFTS || []),
    stories: (window.TKA_STORIES = window.TKA_STORIES || [])
  });
})();
