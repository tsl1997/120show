/* ============ 美国·旧金山（完全版·分册组装） ============
 * 分册：sf_01地点 / sf_02周边 / sf_03趣事。
 * 叙事主线：金门大桥与叮当车/渔人码头与恶魔岛/九曲花街与彩绘女士/酸面包与咖啡。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sanfrancisco',
    name: '旧金山',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🌉',
    desc: '金门大桥与丘陵之城：叮当车爬上陡坡，渔人码头晒海狮，硅谷就在南边，雾中的红色大桥是西海岸的门面。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6900 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: (window.SF_SPOTS = window.SF_SPOTS || []),
    souvenirs: (window.SF_GIFTS = window.SF_GIFTS || []),
    stories: (window.SF_STORIES = window.SF_STORIES || [])
  });
})();
