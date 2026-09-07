/* ============ 洛阳（完全版·分册组装） ============
 * 分册：ly_01地点 / ly_02周边 / ly_03趣事。
 * 叙事主线：河洛之源 / 龙门与武圣 / 神都隋唐 / 汤城牡丹。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'luoyang',
    name: '洛阳',
    country: '中国',
    cc: 'CN',
    province: '河南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🌸',
    desc: '十三朝古都：龙门石窟的卢舍那大佛微笑千年，四月满城牡丹动京城，一碗牛肉汤配饼丝，神都的早晨就此开启。',
    travel: [{ name: '高铁', icon: '🚄', cost: 280 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: (window.LY_SPOTS = window.LY_SPOTS || []),
    souvenirs: (window.LY_GIFTS = window.LY_GIFTS || []),
    stories: (window.LY_STORIES = window.LY_STORIES || []),
  });
})();
