/* ============ 甘肃·兰州（分册版·组装器） ============
 * 分册：lz_01景点 / lz_02周边 / lz_03趣事。
 * 城市字段照抄旧档 data/cn/xibei/lanzhou.js，条目由三个分册文件汇总。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lanzhou',
    name: '兰州',
    country: '中国',
    cc: 'CN',
    province: '甘肃',
    flag: '🇨🇳',
    region: '西北',
    hero: '🌉',
    desc: '黄河穿城的牛肉面之乡：中山桥看百年铁桥，羊皮筏子漂在黄河上，一碗"一清二白三红四绿"的牛肉面唤醒清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 600 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: (window.LZ_SPOTS = window.LZ_SPOTS || []),
    souvenirs: (window.LZ_GIFTS = window.LZ_GIFTS || []),
    stories: (window.LZ_STORIES = window.LZ_STORIES || []),
  });
})();
