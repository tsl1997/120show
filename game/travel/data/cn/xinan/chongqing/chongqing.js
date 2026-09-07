/* ============ 重庆（完全版·分册组装） ============
 * 分册：cq_01地点 / cq_02周边 / cq_03趣事。
 * 叙事主线：两江四岸8D魔幻 / 老城上下半城 / 火锅码头江湖 / 巴渝耿直魂。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chongqing',
    name: '重庆',
    country: '中国',
    cc: 'CN',
    province: '重庆',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌶️',
    desc: '8D魔幻山城：轻轨穿楼、洪崖洞夜色如《千与千寻》，火锅的红油翻滚着江湖气，导航在这里都会迷路。',
    travel: [{ name: '高铁', icon: '🚄', cost: 280 }, { name: '飞机', icon: '✈️', cost: 600 }],
    visa: null,
    spots: (window.CQ_SPOTS = window.CQ_SPOTS || []),
    souvenirs: (window.CQ_GIFTS = window.CQ_GIFTS || []),
    stories: (window.CQ_STORIES = window.CQ_STORIES || []),
  });
})();
