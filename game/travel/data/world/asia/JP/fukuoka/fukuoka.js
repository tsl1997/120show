/* ============ 日本·福冈（完全版·分册组装） ============
 * 分册：fuk_01地点 / fuk_02周边 / fuk_03趣事。
 * 叙事主线：屋台豚骨拉面 / 太宰府天满宫 / 博多祭典与海湾 / 九州手工艺巡礼。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'fukuoka',
    name: '福冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🍜',
    desc: '九州门户·屋台之都：中洲屋台的小拉面摊飘着热气，豚骨拉面的故乡，太宰府的梅香与稻荷神社，九州美食的心脏。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.FUK_SPOTS = window.FUK_SPOTS || []),
    souvenirs: (window.FUK_GIFTS = window.FUK_GIFTS || []),
    stories: (window.FUK_STORIES = window.FUK_STORIES || [])
  });
})();
