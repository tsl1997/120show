/* ============ 异世界·动漫《航海王》超大副本（伟大航路完全版 v3·分册组装） ============
 * 数据分册位于 data/op/ 目录（op_00 大纲计划，op_01~op_10 内容分册）。
 * 世界构成：东西南北四海 → 伟大航路（前半段·乐园）→ 红土大陆 → 新世界 → 拉夫坦路
 * 势力版图：世界政府（伊姆·五老星·天龙人·CP0-9·神之骑士团）、海军本部（元帅·新旧三大将·英雄卡普）、
 *           四皇（红发·白胡子·凯多·BIG MOM·黑胡子）及各团全干部、王下七武海、最恶世代超新星、
 *           革命军、罗杰海贼团·洛克斯海贼团·金狮子飞空海贼团·红伯爵、推进城·黑暗势力·剧场版强者
 * 传说：三大古代兵器（冥王·海王·天王）· ONE PIECE · 空白一百年 · D之一族
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_onepiece',
    name: '航海王·伟大航路',
    country: '异世界',
    cc: 'CN',
    flag: '🏴‍☠️',
    region: 'isekai_anime',
    world: 'isekai',
    hero: '🏴‍☠️',
    desc: '"财富、名声、权力，曾拥有一切的海贼王哥尔·D·罗杰，临刑前的一句话让人们涌向大海——『我的财宝吗？想要的话就给你好了。去找吧！我把世界上的一切都放在了那里。』"伟大航路，启航！',
    labels: { spotL: '景点圣地', souvenirL: '特色宝物', storyL: '人物相遇', spotB: '前往', souvenirB: '获取', storyB: '相遇' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }],
    visa: null,
    spots: window.OP_SPOTS || [],
    souvenirs: window.OP_GIFTS || [],
    stories: window.OP_STORIES || []
  });
})();
