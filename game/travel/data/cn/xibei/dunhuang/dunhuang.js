/* ============ 甘肃·敦煌（分册立体版 v2·分册组装） ============
 * 分册：dh_01景点 / dh_02周边 / dh_03趣事。
 * 主题：莫高窟 / 大漠 / 丝路。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dunhuang',
    name: '敦煌',
    country: '中国',
    cc: 'CN',
    province: '甘肃',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏜️',
    desc: '丝绸之路的咽喉：莫高窟的飞天壁画千年不褪色，鸣沙山下月牙泉碧了一千年，"敦，大也；煌，盛也"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1300 }, { name: '火车', icon: '🚂', cost: 900 }],
    visa: null,
    spots: (window.DH_SPOTS = window.DH_SPOTS || []),
    souvenirs: (window.DH_GIFTS = window.DH_GIFTS || []),
    stories: (window.DH_STORIES = window.DH_STORIES || []),
  });
})();
