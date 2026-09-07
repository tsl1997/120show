/* ============ 成都（完全版·分册组装） ============
 * 分册：cd_01地点 / cd_02周边 / cd_03趣事。
 * 叙事主线：古蜀文明 / 三国蜀汉与诗圣 / 川菜小吃江湖 / 茶馆慢生活。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chengdu',
    name: '成都',
    country: '中国',
    cc: 'CN',
    province: '四川',
    flag: '🇨🇳',
    region: '西南',
    hero: '🐼',
    desc: '"一座来了就不想走的城市"：盖碗茶泡一下午，火锅涮到深夜，连大熊猫都懒洋洋地诠释什么叫巴适。',
    travel: [{ name: '高铁', icon: '🚄', cost: 380 }, { name: '飞机', icon: '✈️', cost: 650 }],
    visa: null,
    spots: (window.CD_SPOTS = window.CD_SPOTS || []),
    souvenirs: (window.CD_GIFTS = window.CD_GIFTS || []),
    stories: (window.CD_STORIES = window.CD_STORIES || []),
  });
})();
