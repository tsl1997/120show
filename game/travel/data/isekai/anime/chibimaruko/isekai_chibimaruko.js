/* ============ 异世界·动漫《樱桃小丸子》副本（清水市完全版·分册组装） ============
 * 分册：cbm_01景点 / cbm_02剧情名场面 / cbm_03宝物 / cbm_series势力系列。
 * 世界构成：小丸子的家 → 清水小学 → 商店街与安倍川 → 四季的日常
 * 主题：爷爷最疼我啦——昭和小镇的温柔日常。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_chibimaruko', name: '樱桃小丸子·清水市', country: '异世界', cc: 'CN', flag: '🌸', region: 'isekai_anime', world: 'isekai', hero: '🌸',
    desc: '"爷爷，我最喜欢你了！"三年级的小丸子与唠叨的妈妈、宠她的爷爷、爱捉弄人的同学——在清水市鸡飞狗跳又暖洋洋的每一天。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.CBM_SPOTS || [],
    souvenirs: window.CBM_GIFTS || [],
    stories: window.CBM_STORIES || []
  });
})();
