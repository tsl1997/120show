/* ============ 广州（完全版·分册组装） ============
 * 分册：gz_01地点 / gz_02周边 / gz_03趣事。
 * 叙事主线：千年商都海丝 / 西关骑楼市井 / 叹茶食在广州 / 花城四季。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'guangzhou',
    name: '广州',
    country: '中国',
    cc: 'CN',
    province: '广东',
    flag: '🇨🇳',
    region: '华南',
    hero: '🗼',
    desc: '两千年的商都，骑楼下飘着肠粉和靓汤香。"小蛮腰"亮灯时珠江生辉，早茶桌上的虾饺永远是第一主角。',
    travel: [{ name: '高铁', icon: '🚄', cost: 460 }, { name: '飞机', icon: '✈️', cost: 780 }],
    visa: null,
    spots: (window.GZ_SPOTS = window.GZ_SPOTS || []),
    souvenirs: (window.GZ_GIFTS = window.GZ_GIFTS || []),
    stories: (window.GZ_STORIES = window.GZ_STORIES || []),
  });
})();
