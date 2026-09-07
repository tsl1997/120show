/* ============ 桂林（完全版·分册组装） ============
 * 分册：gl_01地点 / gl_02周边 / gl_03趣事。
 * 叙事主线：漓江山水甲天下 / 城在山中画卷 / 桂香与市井烟火 / 民族与户外活力。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'guilin',
    name: '桂林',
    country: '中国',
    cc: 'CN',
    province: '广西',
    flag: '🇨🇳',
    region: '华南',
    hero: '🏞️',
    desc: '"桂林山水甲天下"：漓江竹筏穿行喀斯特峰林，二十元人民币背面的风景就在眼前，阳朔西街的啤酒鱼香飘四季。',
    travel: [{ name: '高铁', icon: '🚄', cost: 350 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: (window.GL_SPOTS = window.GL_SPOTS || []),
    souvenirs: (window.GL_GIFTS = window.GL_GIFTS || []),
    stories: (window.GL_STORIES = window.GL_STORIES || []),
  });
})();
