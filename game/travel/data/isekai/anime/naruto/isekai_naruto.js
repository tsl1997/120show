/* ============ 异世界·动漫《火影忍者》超大副本（忍者五大国完全版 v2·分册组装） ============
 * 数据分册位于本目录（na_00 大纲计划，na_01~na_09 内容分册）。
 * 世界构成：木叶忍者村 → 忍者五大国（砂/雾/云/岩/雨隐）→ 忍界大战战场 → 大筒木的月之彼端
 * 势力版图：第七班与木叶十二小强、历代火影、千手/宇智波/漩涡/日向一族、根与暗部、
 *           晓组织全员、鹰小队、音忍、五影与各村强者、九大尾兽、通灵兽、大筒木一族、壳组织（博人传）
 * 传说：查克拉之祖辉夜 · 六道仙人 · 十尾与神树 · 无限月读 · 楔（博人传）
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_naruto',
    name: '火影忍者·忍者五大国',
    country: '异世界',
    cc: 'CN',
    flag: '🍥',
    region: 'isekai_anime',
    world: 'isekai',
    hero: '🍥',
    desc: '"我可是要成为火影的男人！"木叶村的火影岩下，吊车尾鸣人喊出梦想。忍者五大国的羁绊与宿命，从第七班开始——"这就是我的忍道！"',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '人物相遇', spotB: '前往', souvenirB: '获取', storyB: '相遇' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }],
    visa: null,
    spots: window.NA_SPOTS || [],
    souvenirs: window.NA_GIFTS || [],
    stories: window.NA_STORIES || []
  });
})();
