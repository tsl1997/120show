/* ============ 异世界·武侠《碧血剑》超大副本 v2·分册组装 ============
 * 分册：bx_01全量（地点/人物事件/武功）。
 * 主题：袁崇焕之子的乱世复仇——金蛇剑与明亡清兴。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_bixue', name: '碧血剑·华山', country: '异世界', cc: 'CN', flag: '🐍', region: 'isekai_wuxia', world: 'isekai', hero: '🐍',
    desc: '"碧血染山河"：袁崇焕之子袁承志承金蛇郎君遗泽，金蛇剑法对决温家五行阵——明末乱世的江湖恩仇与家国之痛。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.BX_SPOTS || [],
    souvenirs: window.BX_GIFTS || [],
    stories: window.BX_STORIES || []
  });
})();
