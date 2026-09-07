/* ============ 京都府（完全版·分册组装） ============
 * 分册：kyo_01地点 / kyo_02周边 / kyo_03趣事。
 * 叙事主线：千年平安京 / 世界遗产社寺 / 花街与町家 / 宇治茶与大原。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kyoto',
    name: '京都府',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '⛩️',
    desc: '千年古都·平安京的遗韵：一千七百座寺庙静立山水间，祇园的花见小路摇曳着艺伎的裙裾，四季皆是画。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.KYO_SPOTS = window.KYO_SPOTS || []),
    souvenirs: (window.KYO_GIFTS = window.KYO_GIFTS || []),
    stories: (window.KYO_STORIES = window.KYO_STORIES || [])
  });
})();
