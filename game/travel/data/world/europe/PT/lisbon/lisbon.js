/* ============ 葡萄牙·里斯本（完全版·分册组装） ============
 * 分册：pt_01地点 / pt_02周边 / pt_03趣事。
 * 叙事主线：贝伦塔与大发现/28路电车/阿尔法玛/法朵之夜/辛特拉/七丘日落。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lisbon',
    name: '里斯本',
    country: '葡萄牙',
    cc: 'PT',
    flag: '🇵🇹',
    region: '欧洲',
    hero: '🚋',
    desc: '七丘之城·大航海的起点：28路黄色电车爬过石板坡，蛋挞的甜香混着法朵的忧伤，贝伦塔见证"地理大发现"的启航。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6200 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: (window.PT_SPOTS = window.PT_SPOTS || []),
    souvenirs: (window.PT_GIFTS = window.PT_GIFTS || []),
    stories: (window.PT_STORIES = window.PT_STORIES || [])
  });
})();
