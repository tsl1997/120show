/* ============ 西安（完全版·分册组装） ============
 * 分册：xa_01地点 / xa_02周边 / xa_03趣事。
 * 叙事主线：十三朝古都 / 周秦汉唐遗址 / 回坊碳水江湖 / 当代网红长安。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xian',
    name: '西安',
    country: '中国',
    cc: 'CN',
    province: '陕西',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏮',
    desc: '长安十二时辰永不散场：城墙根下听秦腔，大唐不夜城提灯夜游，一口肉夹馍咬下十三朝古都的碳水江湖。',
    travel: [{ name: '高铁', icon: '🚄', cost: 460 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: (window.XIA_SPOTS = window.XIA_SPOTS || []),
    souvenirs: (window.XIA_GIFTS = window.XIA_GIFTS || []),
    stories: (window.XIA_STORIES = window.XIA_STORIES || []),
  });
})();
