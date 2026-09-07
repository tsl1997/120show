/* ============ 大阪府（完全版·分册组装） ============
 * 分册：osa_01地点 / osa_02周边 / osa_03趣事。
 * 叙事主线：天下厨房 / 太阁之城 / 水都与南町北町 / 粉もん与笑点。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'osaka',
    name: '大阪府',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '🐙',
    desc: '"天下厨房"的烟火之都：道顿堀的格力高跑者霓虹、章鱼烧的锅铲声、大阪人自来熟的笑，热闹是这座城的方言。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2000 }, { name: '高铁·新干线', icon: '🚄', cost: 2200 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.OSA_SPOTS = window.OSA_SPOTS || []),
    souvenirs: (window.OSA_GIFTS = window.OSA_GIFTS || []),
    stories: (window.OSA_STORIES = window.OSA_STORIES || [])
  });
})();
