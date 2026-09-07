/* ============ 云南·西双版纳（西南·分册立体版 v1·组装器） ============
 * 分册：xsbn_01_spots 景点 / xsbn_02_gifts 周边 / xsbn_03_stories 趣事。
 * 旧档全部条目原样迁入三个分册（banna_* 前缀 id 一字未改）；城市字段与旧档完全一致。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xishuangbanna',
    name: '西双版纳',
    country: '中国',
    cc: 'CN',
    province: '云南',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌴',
    desc: '"理想而神奇的乐土"：热带雨林里大象散步，泼水节的水花带着祝福，傣族园的孔雀舞与星光夜市，"小泰国"的风情。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1300 }, { name: '火车', icon: '🚂', cost: 700 }],
    visa: null,
    spots: (window.XSBN_SPOTS = window.XSBN_SPOTS || []),
    souvenirs: (window.XSBN_GIFTS = window.XSBN_GIFTS || []),
    stories: (window.XSBN_STORIES = window.XSBN_STORIES || []),
  });
})();
