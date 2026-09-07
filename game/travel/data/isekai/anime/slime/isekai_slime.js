/* ============ 异世界·动漫《转生史莱姆》副本（魔国联邦版·分册组装） ============
 * 分册：trs_01景点 / trs_02剧情名场面 / trs_03宝物 / trs_series势力系列。
 * 世界构成：封魔洞窟 → 哥布林村庄 → 魔国联邦 → 魔王会议
 * 主题：从史莱姆到魔王——捕食与进化的异世界建国记。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_slime', name: '转生史莱姆·魔国联邦', country: '异世界', cc: 'CN', flag: '🔵', region: 'isekai_anime', world: 'isekai', hero: '🔵',
    desc: '"捕食，进化，建国。"意外转生成最弱魔物史莱姆的利姆鲁，吞噬风暴龙与静之火，一步步把哥布林村庄建成魔物与人共存的魔国联邦——美食外交与魔王之争的异世界建国物语。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '剧情名场面', spotB: '前往', souvenirB: '获取', storyB: '见证' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: window.TRS_SPOTS || [],
    souvenirs: window.TRS_GIFTS || [],
    stories: window.TRS_STORIES || []
  });
})();
