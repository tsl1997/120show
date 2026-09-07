/* ============ 日本·仙台（完全版·分册组装） ============
 * 分册：snd_01地点 / snd_02周边 / snd_03趣事。
 * 叙事主线：伊达政宗的青叶城与奥州藩史 / 松岛与三陆海湾 / 牛舌与乡土味 / 温泉乡与东北风土。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sendai',
    name: '仙台',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·东北',
    hero: '🍃',
    desc: '"杜之都"：独眼龙伊达政宗的青叶城，牛舌碳烤的香气，松岛千帆与瑞凤殿，东北第一城把武士魂与美食揉在一起。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.SND_SPOTS = window.SND_SPOTS || []),
    souvenirs: (window.SND_GIFTS = window.SND_GIFTS || []),
    stories: (window.SND_STORIES = window.SND_STORIES || [])
  });
})();
