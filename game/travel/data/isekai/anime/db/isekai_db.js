/* ============ 异世界·动漫《龙珠》超大副本（七龙珠完全版 v1·分册组装） ============
 * 分册：db_01地点 / db_02人物事件 / db_03宝物。
 * 世界构成：包子山 → 龟仙屋/加林塔 → 那美克星 → 沙鲁游戏 → 魔人布欧 → 界王神界
 * 主题：七颗龙珠与战斗力——"卡美哈美哈！"少年冒险与宇宙大战。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_db', name: '龙珠·七龙珠世界', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_anime', world: 'isekai', hero: '🐉',
    desc: '"卡——美——哈——美——哈！"野孩子悟空与布玛寻找七龙珠的冒险，最终成长为守护宇宙的超级赛亚人——战斗力只有五的渣滓？来试试就知道。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '人物相遇', spotB: '前往', souvenirB: '获取', storyB: '相遇' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.DB_SPOTS || [],
    souvenirs: window.DB_GIFTS || [],
    stories: window.DB_STORIES || []
  });
})();
