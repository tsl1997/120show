/* ============ 日本·松山（完全版·分册组装） ============
 * 分册：mys_01地点 / mys_02周边 / mys_03趣事。
 * 叙事主线：道后三千年温泉/松山城天守/子规漱石文学城/濑户内岛波海道/爱媛蜜柑之里。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'matsuyama',
    name: '松山',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·四国',
    hero: '♨️',
    desc: '"少爷"的故乡：道后温泉本馆3000年历史，松山城天守看濑户内海，正冈子规与夏目漱石的文学之城，柑橘之岛爱媛。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2600 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: (window.MYS_SPOTS = window.MYS_SPOTS || []),
    souvenirs: (window.MYS_GIFTS = window.MYS_GIFTS || []),
    stories: (window.MYS_STORIES = window.MYS_STORIES || [])
  });
})();
