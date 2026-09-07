/* ============ 三亚（完全版·分册组装） ============
 * 分册：sya_01地点 / sya_02周边 / sya_03趣事。
 * 三条叙事线：热带海岛 / 黎苗风情 / 度假天堂。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sanya',
    name: '三亚',
    country: '中国',
    cc: 'CN',
    province: '海南',
    flag: '🇨🇳',
    region: '华南',
    hero: '🌴',
    desc: '中国的热带天堂：椰风、白沙、碧海。潜入蜈支洲的珊瑚花园，赶一次退潮的海，傍晚捧一颗现开的椰青看日落。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1100 }, { name: '高铁', icon: '🚄', cost: 690 }],
    visa: null,
    spots: (window.SYA_SPOTS = window.SYA_SPOTS || []),
    souvenirs: (window.SYA_GIFTS = window.SYA_GIFTS || []),
    stories: (window.SYA_STORIES = window.SYA_STORIES || []),
  });
})();
