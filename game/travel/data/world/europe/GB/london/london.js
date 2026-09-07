/* ============ 英国·伦敦（完全版·分册组装） ============
 * 分册：gb_01地点 / gb_02周边 / gb_03趣事。
 * 叙事主线：泰晤士河/大本钟塔桥白金汉宫/大英博物馆/西区音乐剧/披头士/英伦文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'london',
    name: '伦敦',
    country: '英国',
    cc: 'GB',
    flag: '🇬🇧',
    region: '欧洲',
    hero: '🎡',
    desc: '雾都变晴空：大本钟敲响泰晤士河畔，红电话亭与双层巴士穿行街巷，博物馆免费开放，英伦绅士与摇滚同台。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6200 }, { name: '高铁·欧洲之星', icon: '🚄', cost: 6800 }],
    visa: { cost: 1100, note: '英国标准访客签证' },
    spots: (window.GB_SPOTS = window.GB_SPOTS || []),
    souvenirs: (window.GB_GIFTS = window.GB_GIFTS || []),
    stories: (window.GB_STORIES = window.GB_STORIES || [])
  });
})();
