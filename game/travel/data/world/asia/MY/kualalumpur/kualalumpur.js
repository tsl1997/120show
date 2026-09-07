/* ============ 马来西亚·吉隆坡（完全版·分册组装） ============
 * 分册：my_01地点 / my_02周边 / my_03趣事。
 * 叙事主线：双子塔/黑风洞/肉骨茶与椰浆饭/马六甲海峡/多元文化。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kualalumpur',
    name: '吉隆坡',
    country: '马来西亚',
    cc: 'MY',
    flag: '🇲🇾',
    region: '东南亚',
    hero: '🕌',
    desc: '双塔之下的多元之城：清真寺圆顶、印度庙彩塔、华人骑楼在同一街角相遇，榴莲香与肉骨茶汤气一起升腾。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1900 }],
    visa: { cost: 0, note: '中马互免签证（停留不超过30天）' },
    spots: (window.MY_SPOTS = window.MY_SPOTS || []),
    souvenirs: (window.MY_GIFTS = window.MY_GIFTS || []),
    stories: (window.MY_STORIES = window.MY_STORIES || [])
  });
})();
