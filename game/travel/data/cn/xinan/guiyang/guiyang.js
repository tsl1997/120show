/* ============ 贵州·贵阳（分册组装版） ============
 * 分册：gy_01景点 / gy_02周边 / gy_03趣事。
 * 旧档 data/cn/xinan/guiyang.js 全部条目保留并扩容至此。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'guiyang',
    name: '贵阳',
    country: '中国',
    cc: 'CN',
    province: '贵州',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌉',
    desc: '"爽爽的贵阳"：高原凉都夏天20度，酸汤鱼开胃醒神，黄果树瀑布与千户苗寨从这里出发，大数据之城也有最辣的烟火。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: (window.GY_SPOTS = window.GY_SPOTS || []),
    souvenirs: (window.GY_GIFTS = window.GY_GIFTS || []),
    stories: (window.GY_STORIES = window.GY_STORIES || []),
  });
})();
