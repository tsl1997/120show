/* ============ 北海道（完全版·分册组装） ============
 * 分册：hkd_01地点 / hkd_02周边 / hkd_03趣事。
 * 叙事主线：雪国札幌都会 / 小樽函馆浪漫港町 / 登别湖泉与富良野美瑛。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hokkaido',
    name: '北海道',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·北海道',
    hero: '❄️',
    desc: '雪国腹地·北国风情：小樽的运河灯笼、札幌的雪祭、富良野的紫色花田，连奶酪和哈密瓜都自带奶油滤镜。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2600 }, { name: '高铁·新干线', icon: '🚄', cost: 2400 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.HKD_SPOTS = window.HKD_SPOTS || []),
    souvenirs: (window.HKD_GIFTS = window.HKD_GIFTS || []),
    stories: (window.HKD_STORIES = window.HKD_STORIES || [])
  });
})();
