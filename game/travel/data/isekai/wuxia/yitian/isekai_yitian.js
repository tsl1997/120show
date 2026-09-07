/* ============ 异世界·武侠《倚天屠龙记》超大副本（屠龙刀完全版 v2·分册组装） ============
 * 分册：yt_01地点 / yt_02人物事件 / yt_03武功神兵。
 * 世界构成：武当山 → 蝴蝶谷/昆仑 → 光明顶 → 元大都/万安寺 → 灵蛇岛 → 少林屠狮大会
 * 主题：武林至尊，宝刀屠龙——张无忌与赵敏周芷若小昭殷离的四段情缘。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_yitian', name: '倚天屠龙记·光明顶', country: '异世界', cc: 'CN', flag: '⚔️', region: 'isekai_wuxia', world: 'isekai', hero: '⚔️',
    desc: '"武林至尊，宝刀屠龙，号令天下，莫敢不从！"九阳神功与乾坤大挪移——张无忌的光明顶一战，明教与六大派的恩怨，屠龙刀里的天下大秘密。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.YT_SPOTS || [],
    souvenirs: window.YT_GIFTS || [],
    stories: window.YT_STORIES || []
  });
})();
