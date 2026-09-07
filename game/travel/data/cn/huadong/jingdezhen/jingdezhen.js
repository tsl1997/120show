/* ============ 江西·景德镇（千年瓷都·分册立体版） ============
 * 分册：jdz_01地点 / jdz_02周边 / jdz_03趣事。
 * 覆盖：窑址古迹（古窑/御窑/湖田/高岭/龙珠阁/祥集弄）、
 *      文创街区（陶溪川/三宝/乐天/陶艺街/名坊园/樊家井）、
 *      山水古镇（瑶里/瓷宫/汪湖/梅岭/洪岩）、瓷味食事与非遗体验。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'jingdezhen',
    name: '景德镇',
    country: '中国',
    cc: 'CN',
    province: '江西',
    flag: '🇨🇳',
    region: '华东',
    hero: '🏺',
    desc: '千年瓷都："工匠八方来，器成天下走"。御窑厂的青花瓷定义中国色，如今景漂青年把老瓷都玩成了"艺术乌托邦"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 300 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: (window.JDZ_SPOTS = window.JDZ_SPOTS || []),
    souvenirs: (window.JDZ_GIFTS = window.JDZ_GIFTS || []),
    stories: (window.JDZ_STORIES = window.JDZ_STORIES || []),
  });
})();
