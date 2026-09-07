/* ============ 安徽·黄山（分册版·组装器） ============
 * 分册：hs_01_spots景点 / hs_02_gifts周边 / hs_03_stories趣事。
 * 城市字段照抄旧档 data/cn/huadong/huangshan.js（旧文件保留未删），
 * 数据由三个分册全局数组组装。加载顺序：先01/02/03，再本文件。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'huangshan',
    name: '黄山',
    country: '中国',
    cc: 'CN',
    province: '安徽',
    flag: '🇨🇳',
    region: '华东',
    hero: '⛰️',
    desc: '"五岳归来不看山，黄山归来不看岳"：奇松怪石云海温泉四绝齐备，山脚下的徽州古村白墙黛瓦，一城揽尽安徽之美。',
    travel: [{ name: '高铁', icon: '🚄', cost: 330 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: (window.HS_SPOTS = window.HS_SPOTS || []),
    souvenirs: (window.HS_GIFTS = window.HS_GIFTS || []),
    stories: (window.HS_STORIES = window.HS_STORIES || []),
  });
})();
