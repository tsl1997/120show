/* ============ 湖北·荆州（分册组装版） ============
 * 分册：jz_01地点 / jz_02周边 / jz_03趣事。
 * 主题：楚文化 / 三国 / 古城墙。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'jingzhou',
    name: '荆州',
    country: '中国',
    cc: 'CN',
    province: '湖北',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏯',
    desc: '"禹划九州，始有荆州"。三国故事最密集的古城，完好的城墙环着护城河，楚文化在这里埋着整座地下博物馆。',
    travel: [{ name: '高铁', icon: '🚄', cost: 150 }, { name: '汽车', icon: '🚌', cost: 90 }],
    visa: null,
    spots: (window.JZ_SPOTS = window.JZ_SPOTS || []),
    souvenirs: (window.JZ_GIFTS = window.JZ_GIFTS || []),
    stories: (window.JZ_STORIES = window.JZ_STORIES || []),
  });
})();
