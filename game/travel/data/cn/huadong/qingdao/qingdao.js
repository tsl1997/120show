/* ============ 青岛（完全版·分册组装） ============
 * 分册：qd_01景点 / qd_02周边 / qd_03趣事。
 * 城市字段沿用旧档 qingdao.js，仅将 spots/souvenirs/stories 改为分册挂载。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'qingdao',
    name: '青岛',
    country: '中国',
    cc: 'CN',
    province: '山东',
    flag: '🇨🇳',
    region: '华东',
    hero: '🍺',
    desc: '红瓦绿树、碧海蓝天：八大关的万国建筑，栈桥的海鸥，啤酒屋的塑料袋打酒，青岛把德式风情与山东豪爽酿成一体。',
    travel: [{ name: '高铁', icon: '🚄', cost: 600 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: (window.QD_SPOTS = window.QD_SPOTS || []),
    souvenirs: (window.QD_GIFTS = window.QD_GIFTS || []),
    stories: (window.QD_STORIES = window.QD_STORIES || []),
  });
})();
