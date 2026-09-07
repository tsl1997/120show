/* ============ 异世界·武侠《鹿鼎记》超大副本（通吃岛完全版 v2·分册组装） ============
 * 分册：ld_01地点 / ld_02人物事件 / ld_03宝物。
 * 世界构成：扬州丽春院 → 北京紫禁城 → 五台山/少林 → 神龙岛 → 云南/罗刹国 → 通吃岛
 * 主题：一部不以武功论英雄的江湖——韦小宝的官场、情场与市井智慧。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_luding', name: '鹿鼎记·通吃岛', country: '异世界', cc: 'CN', flag: '🪙', region: 'isekai_wuxia', world: 'isekai', hero: '🪙',
    desc: '"做人要快活！"丽春院的小痞子韦小宝：擒鳌拜、当香主、护老皇爷、娶七位夫人——一部反武侠的武侠，市井智慧胜过盖世神功。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.LD_SPOTS || [],
    souvenirs: window.LD_GIFTS || [],
    stories: window.LD_STORIES || []
  });
})();
