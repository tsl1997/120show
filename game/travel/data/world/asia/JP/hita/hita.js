/* ============ 日本·日田（完全版·分册组装） ============
 * 分册：hit_01地点 / hit_02周边 / hit_03趣事。
 * 叙事主线：天领日田与豆田小京都 / 进击的巨人圣地 / 三隈川川物语 / 咸宜园学问与耶马溪温泉山野。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hita',
    name: '日田',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🏮',
    desc: '"九州小京都"：豆田町的江户白墙，咸屋酱与木屐声，咸水温泉与天领祭，进击的巨人作者谏山创的故乡。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.HIT_SPOTS = window.HIT_SPOTS || []),
    souvenirs: (window.HIT_GIFTS = window.HIT_GIFTS || []),
    stories: (window.HIT_STORIES = window.HIT_STORIES || [])
  });
})();
