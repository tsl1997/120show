/* ============ 横滨（完全版·分册组装） ============
 * 分册：yok_01景点 / yok_02周边 / yok_03趣事。
 * 叙事主线：横滨港·山下公园 / 中华街·元町·山手 / 港未来21·临海乐园。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yokohama',
    name: '横滨',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🎡',
    desc: '港口之都·中华街的故乡：港未来21的摩天轮与红砖仓库，中华街的肉包子香气，实物大高达矗立在这里。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.YOK_SPOTS = window.YOK_SPOTS || []),
    souvenirs: (window.YOK_GIFTS = window.YOK_GIFTS || []),
    stories: (window.YOK_STORIES = window.YOK_STORIES || [])
  });
})();
