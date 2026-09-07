/* ============ 巴西·里约热内卢（完全版·分册组装） ============
 * 分册：br_01地点 / br_02周边 / br_03趣事。
 * 叙事主线：基督像/面包山/科帕卡巴纳/狂欢节/桑巴足球/亚马逊与里约。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'rio',
    name: '里约热内卢',
    country: '巴西',
    cc: 'BR',
    flag: '🇧🇷',
    region: '南美',
    hero: '🏖️',
    desc: '"一月的河"：基督像张开双臂俯瞰海湾，科帕卡巴纳的白沙滩上桑巴不停，一座把热情写进基因的城市。',
    travel: [{ name: '飞机', icon: '✈️', cost: 11000 }],
    visa: { cost: 350, note: '巴西旅游签证（电子签）' },
    spots: (window.BR_SPOTS = window.BR_SPOTS || []),
    souvenirs: (window.BR_GIFTS = window.BR_GIFTS || []),
    stories: (window.BR_STORIES = window.BR_STORIES || [])
  });
})();
