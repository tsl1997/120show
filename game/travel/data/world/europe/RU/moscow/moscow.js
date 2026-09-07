/* ============ 俄罗斯·莫斯科（完全版·分册组装） ============
 * 分册：ru_01地点 / ru_02周边 / ru_03趣事。
 * 叙事主线：红场与克里姆林宫/莫斯科地铁宫殿/金环小镇/伏特加与红菜汤/沙俄与苏联/航天。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'moscow',
    name: '莫斯科',
    country: '俄罗斯',
    cc: 'RU',
    flag: '🇷🇺',
    region: '欧洲',
    hero: '⛪',
    desc: '红场上的洋葱顶彩如童话，地铁宫殿深藏地下百米。零下二十度咬一口冰淇淋，战斗民族的浪漫自成一派。',
    travel: [{ name: '飞机', icon: '✈️', cost: 3500 }, { name: '火车·西伯利亚线', icon: '🚂', cost: 4200 }],
    visa: { cost: 550, note: '电子签证或旅行社邀请函' },
    spots: (window.RU_SPOTS = window.RU_SPOTS || []),
    souvenirs: (window.RU_GIFTS = window.RU_GIFTS || []),
    stories: (window.RU_STORIES = window.RU_STORIES || [])
  });
})();
