/* ============ 异世界·动漫《犬夜叉》副本（战国完全版·分册组装） ============
 * 分册：inu_01景点 / inu_02剧情名场面 / inu_03宝物 / inu_series势力系列。
 * 世界构成：食骨之井与御神木 → 战国枫之村 → 四魂之玉与奈落 → 现代与战国的彼岸
 * 主题：坐下！——半妖与巫女的三百年物语。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_inuyasha', name: '犬夜叉·战国时代', country: '异世界', cc: 'CN', flag: '🐕', region: 'isekai_anime', world: 'isekai', hero: '🐕',
    desc: '"坐——下！"被封印五十年后苏醒的半妖犬夜叉，与穿越时空的戈薇踏上寻找四魂之玉碎片的旅程——战国妖怪与爱的传奇。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.INU_SPOTS || [],
    souvenirs: window.INU_GIFTS || [],
    stories: window.INU_STORIES || []
  });
})();
