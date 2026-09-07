/* ============ 福建·泉州（分册立体版·组装器） ============
 * 泉州旧档已扩容为分册：qz_01_spots景点 / qz_02_gifts周边 / qz_03_stories趣事。
 * 本文件保留旧档城市字段，仅将内联数据替换为分册数组引用。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'quanzhou',
    name: '泉州',
    country: '中国',
    cc: 'CN',
    province: '福建',
    flag: '🇨🇳',
    region: '东南',
    hero: '⛵',
    desc: '宋元中国的世界海洋商贸中心：开元寺东西塔刺桐红，蟳埔村的簪花围，半城烟火半城仙，"此地古称佛国，满街都是圣人"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 560 }, { name: '飞机', icon: '✈️', cost: 830 }],
    visa: null,
    spots: (window.QZ_SPOTS = window.QZ_SPOTS || []),
    souvenirs: (window.QZ_GIFTS = window.QZ_GIFTS || []),
    stories: (window.QZ_STORIES = window.QZ_STORIES || []),
  });
})();
