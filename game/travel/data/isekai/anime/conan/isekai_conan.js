/* ============ 异世界·动漫《名侦探柯南》超大副本（真相完全版 v2·分册组装） ============
 * 数据分册位于本目录（co_00 大纲计划，co_01~co_08 内容分册）。
 * 世界构成：米花町 → 东京警视厅 → 大阪/京都 → 海外舞台（伦敦/纽约/新加坡）→ 黑衣组织的暗处
 * 势力版图：江户川柯南与少年侦探团、FBI（赤井家）、公安（降谷零）、警视厅全员、
 *           黑衣组织全员（乌丸莲耶/琴酒/贝尔摩德/朗姆三候选）、怪盗基德一伙、剧场版群像
 * 传说：APTX4869 · A药解药 · 乌丸莲耶的半世纪 · "真相永远只有一个"
 * 联动系列：少年侦探团系列 / 黑衣组织代号系列（series_isekai_a.js）
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_conan',
    name: '名侦探柯南·米花町',
    country: '异世界',
    cc: 'CN',
    flag: '🔍',
    region: 'isekai_anime',
    world: 'isekai',
    hero: '🔍',
    desc: '图鉴系统连接的第一个故事世界：东京湾边的米花町，真相永远只有一个。戴上蝴蝶结，坐上滑板，黑衣组织就在暗处注视着你。',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '人物相遇', spotB: '前往', souvenirB: '获取', storyB: '相遇' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }],
    visa: null,
    spots: window.CO_SPOTS || [],
    souvenirs: window.CO_GIFTS || [],
    stories: window.CO_STORIES || []
  });
})();
