/* ============ 异世界·动漫《铁臂阿童木》副本（1963 手冢治虫·分册组装） ============
 * 分册：ast_01 未来都市地点 / ast_02 剧情名场面 / ast_03 特色宝物 / ast_series 势力系列收藏。
 * 世界构成：科学省 → 天马博士研究所 → 机器人工厂与学校 → 蓝天之城 → 月球与宇宙港
 * 主题："十万马力，冲呀！"机器人与人类学着同哭同笑的未来都市。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_astro', name: '铁臂阿童木·未来都市', country: '异世界', cc: 'CN', flag: '✨', region: 'isekai_anime', world: 'isekai', hero: '🤖',
    desc: '"十万马力，冲呀！"手冢治虫笔下的机器人理想国——胸口装着原子炉的小金刚在悬浮都市奔跑，机器人与人类在这里学着同哭同笑。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.AST_SPOTS || [],
    souvenirs: window.AST_GIFTS || [],
    stories: window.AST_STORIES || []
  });
})();
