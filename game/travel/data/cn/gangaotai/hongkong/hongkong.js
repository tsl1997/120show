/* ============ 香港（东方之珠·分册组装版） ============
 * 分册：hk_01景点 / hk_02周边 / hk_03趣事。
 * 叙事主题：维港灯火 / 茶餐厅情结 / 影视江湖 / 购物扫街。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hongkong',
    name: '香港',
    country: '中国',
    cc: 'CN',
    province: '香港',
    flag: '🇭🇰',
    region: '港澳台',
    hero: '🌆',
    desc: '东方之珠，霓虹与摩天楼贴着山海生长。叮叮车穿过百年街巷，茶餐厅的冻柠茶续着一整个江湖的传说。',
    travel: [{ name: '高铁', icon: '🚄', cost: 580 }, { name: '飞机', icon: '✈️', cost: 1000 }, { name: '轮船', icon: '⛴️', cost: 260 }],
    visa: null,
    spots: (window.HK_SPOTS = window.HK_SPOTS || []),
    souvenirs: (window.HK_GIFTS = window.HK_GIFTS || []),
    stories: (window.HK_STORIES = window.HK_STORIES || []),
  });
})();
