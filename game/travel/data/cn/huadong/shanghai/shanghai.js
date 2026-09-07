/* ============ 上海（完全版·分册组装） ============
 * 分册：sh_01地点 / sh_02周边 / sh_03趣事。
 * 叙事主线：外滩浦江 / 石库门人家 / 梧桐区摩登 / 海派腔调。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shanghai',
    name: '上海',
    country: '中国',
    cc: 'CN',
    province: '上海',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌃',
    desc: '外滩的百年万国建筑对望陆家嘴的摩天森林，梧桐区的午后藏着咖啡香，一座把精致与市井拧在一起的魔都。',
    travel: [{ name: '高铁', icon: '🚄', cost: 460 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: (window.SH_SPOTS = window.SH_SPOTS || []),
    souvenirs: (window.SH_GIFTS = window.SH_GIFTS || []),
    stories: (window.SH_STORIES = window.SH_STORIES || []),
  });
})();
