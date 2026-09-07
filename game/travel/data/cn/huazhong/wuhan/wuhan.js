/* ============ 武汉（初始城市·完全版 v2·分册组装） ============
 * 分册：wh_01地点 / wh_02周边 / wh_03趣事。计划见 wh_00_plan.md。
 * 四条叙事线：两江三镇 / 历史文脉 / 市井烟火 / 当代江湖。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'wuhan',
    name: '武汉',
    country: '中国',
    cc: 'CN',
    province: '湖北',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏯',
    desc: '九省通衢，两江交汇，三镇鼎立。长江与汉江在此相拥，黄鹤楼与此城相守一千七百年，热干面的芝麻香唤醒每个清晨。',
    labels: { spotL: '景点打卡', souvenirL: '特色周边', storyL: '城市故事', spotB: '打卡', souvenirB: '买下', storyB: '听闻' },
    travel: [{ name: '在家门口', icon: '🏠', cost: 0 }],
    visa: null,
    spots: (window.WH_SPOTS = window.WH_SPOTS || []),
    souvenirs: (window.WH_GIFTS = window.WH_GIFTS || []),
    stories: (window.WH_STORIES = window.WH_STORIES || []),
  });
})();
