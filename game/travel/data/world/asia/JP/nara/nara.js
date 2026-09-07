/* ============ 奈良（完全版·分册组装） ============
 * 分册：nar_01地点 / nar_02周边 / nar_03趣事。
 * 叙事主线：南都大寺 / 鹿与春日山 / 奈良町与庭园池影 / 若草山四季行事。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nara',
    name: '奈良',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '🦌',
    desc: '千年古都·平城京：奈良公园的鹿仙贝传说，东大寺大佛俯瞰众生，春日大社的灯与鹿，一座被鹿"接管"的千年古都。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.NAR_SPOTS = window.NAR_SPOTS || []),
    souvenirs: (window.NAR_GIFTS = window.NAR_GIFTS || []),
    stories: (window.NAR_STORIES = window.NAR_STORIES || [])
  });
})();
