/* ============ 内蒙古·呼和浩特（分册立体版·组装器） ============
 * 分册：hhht_01景点 / hhht_02周边 / hhht_03趣事。
 * 叙事主线：青城召庙 / 蒙元文化 / 敕勒草原 / 昭君出塞。
 * 说明：由旧档 data/cn/saibei/huhehaote.js 扩容而来，
 * 全部旧条目的 spots/souvenirs/stories 原样并入分册。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'huhehaote',
    name: '呼和浩特',
    country: '中国',
    cc: 'CN',
    province: '内蒙古',
    flag: '🇨🇳',
    region: '塞北',
    hero: '🐎',
    desc: '"青城"：召城苍穹下烧麦飘香，大青山下的马头琴声悠扬，这里是最容易触达草原生活的省会，连空气都自带奶香。',
    travel: [{ name: '高铁', icon: '🚄', cost: 700 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: (window.HHHT_SPOTS = window.HHHT_SPOTS || []),
    souvenirs: (window.HHHT_GIFTS = window.HHHT_GIFTS || []),
    stories: (window.HHHT_STORIES = window.HHHT_STORIES || []),
  });
})();
