/* ============ 名古屋（完全版·分册组装） ============
 * 分册：ngy_01地点 / ngy_02周边 / ngy_03趣事。
 * 叙事主线：名城天守与金鯱 / 热田神宫与犬山 / 名古屋めし与喫茶 / 制造与科技之都。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nagoya',
    name: '名古屋',
    country: '日本',
    cc: 'JP',
    flag: '🇨🇳',
    region: '日本·中部',
    hero: '🏯',
    desc: '中部霸主·"大名的厨房"：名古屋城的金鯱闪耀，味噌猪排与鳗鱼三吃自成一派，丰田汽车城的工业心脏在这里跳动。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2200 }, { name: '飞机', icon: '✈️', cost: 2400 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.NGY_SPOTS = window.NGY_SPOTS || []),
    souvenirs: (window.NGY_GIFTS = window.NGY_GIFTS || []),
    stories: (window.NGY_STORIES = window.NGY_STORIES || [])
  });
})();
