/* ============ 宁夏·银川（分册组装·扩容版） ============
 * 旧档 data/cn/xibei/yinchuan.js 扩容为分册：
 *   yc_01 景点圣地 / yc_02 特色周边 / yc_03 奇闻趣事。
 * 主题：塞上江南 / 西夏 / 回乡。城市 id/字段与既有条目原样保留。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yinchuan',
    name: '银川',
    country: '中国',
    cc: 'CN',
    province: '宁夏',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏜️',
    desc: '"塞上江南"：贺兰山下西夏王陵神秘矗立，沙湖一半沙漠一半湖水，葡萄酒庄与枸杞田让黄河灌出的绿洲格外甜美。',
    travel: [{ name: '高铁', icon: '🚄', cost: 800 }, { name: '飞机', icon: '✈️', cost: 1000 }],
    visa: null,
    spots: (window.YC_SPOTS = window.YC_SPOTS || []),
    souvenirs: (window.YC_GIFTS = window.YC_GIFTS || []),
    stories: (window.YC_STORIES = window.YC_STORIES || []),
  });
})();
