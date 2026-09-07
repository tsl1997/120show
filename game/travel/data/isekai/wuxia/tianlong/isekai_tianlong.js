/* ============ 异世界·武侠《天龙八部》超大副本（中原武林完全版 v2·分册组装） ============
 * 分册：tl_01地点 / tl_02人物事件 / tl_03武功神兵。
 * 世界构成：大理 → 中原丐帮/少林 → 缥缈峰 → 西夏/辽国 → 雁门关
 * 主题：无人不冤、有情皆孽——乔峰、段誉、虚竹三兄弟的悲欢众生。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_tianlong', name: '天龙八部·雁门关', country: '异世界', cc: 'CN', flag: '🕌', region: 'isekai_wuxia', world: 'isekai', hero: '🕌',
    desc: '无人不冤、有情皆孽：契丹人乔峰的雁门关之殇、段誉的凌波微步、虚竹的珍珑棋局——三兄弟结义改写天下。扫地僧一掌定乾坤，降龙十八掌对六脉神剑。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.TL_SPOTS || [],
    souvenirs: window.TL_GIFTS || [],
    stories: window.TL_STORIES || []
  });
})();
