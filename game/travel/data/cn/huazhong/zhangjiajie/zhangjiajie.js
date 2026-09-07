/* ============ 湖南·张家界（分册组装版） ============
 * 分册：zjj_01景点 / zjj_02周边 / zjj_03趣事。
 * 主题：三千奇峰 / 土家族 / 森林。旧条目原样保留，分册扩容。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'zhangjiajie',
    name: '张家界',
    country: '中国',
    cc: 'CN',
    province: '湖南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏔️',
    desc: '《阿凡达》悬浮山的原型：三千奇峰拔地而起，玻璃桥上心惊肉跳，土家族的吊脚楼里歌声不断，湘西的神秘都在这里。',
    travel: [{ name: '飞机', icon: '✈️', cost: 850 }, { name: '火车', icon: '🚂', cost: 400 }],
    visa: null,
    spots: (window.ZJJ_SPOTS = window.ZJJ_SPOTS || []),
    souvenirs: (window.ZJJ_GIFTS = window.ZJJ_GIFTS || []),
    stories: (window.ZJJ_STORIES = window.ZJJ_STORIES || []),
  });
})();
