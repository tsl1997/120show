/* ============ 吉林·长春（分册立体版·组装器） ============
 * 分册：cc_01_spots 景点 / cc_02_gifts 周边 / cc_03_stories 趣事。
 * 旧档 changchun_* 条目全部原样迁入三分册；城市字段与旧档完全一致；
 * 另新增 ccp_ / ccg_ / ccs_ 前缀条目，主题：电影城 / 汽车城 / 北国春城。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'changchun',
    name: '长春',
    country: '中国',
    cc: 'CN',
    province: '吉林',
    flag: '🇨🇳',
    region: '东北',
    hero: '🎬',
    desc: '"北国春城"：新中国电影与汽车的摇篮，伪满皇宫藏着沉重历史，净月潭的林海雪原，冬天还有世界级冰雪新天地。',
    travel: [{ name: '高铁', icon: '🚄', cost: 900 }, { name: '飞机', icon: '✈️', cost: 1200 }],
    visa: null,
    spots: (window.CC_SPOTS = window.CC_SPOTS || []),
    souvenirs: (window.CC_GIFTS = window.CC_GIFTS || []),
    stories: (window.CC_STORIES = window.CC_STORIES || []),
  });
})();
