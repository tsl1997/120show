/* 异世界·精灵宝可梦 势力系列收藏 */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({ id: 'sr_pkm_hero', cat: 'isekai', name: '小智与伙伴们', color: '#d4a017',
    years: '1997-至今', author: '田尻智·Game Freak', theme: '主角团收藏',
    background: '真新镇少年小智与皮卡丘，加上小霞、小刚等旅行同伴——口袋妖怪的冒险主角们。',
    story: '我得到宝可梦了！——与伙伴一起的旅程不会结束。',
    protagonist: '小智与皮卡丘', slogan: '就决定是你了！',
    cities: ['isekai_pokemon'], items: [
      { id: 'pkmc_satoshi', name: '小智', icon: '👦', type: '主角卡', city: 'isekai_pokemon', price: 200, desc: '真新镇出身的热血训练家，永不放弃、永远年轻——宝可梦大师之路。' },
      { id: 'pkmc_pikachu', name: '皮卡丘', icon: '⚡', type: '主角卡', city: 'isekai_pokemon', price: 260, desc: '不进化、不进球的小智挚友——十万伏特的主人，人气之神。' },
      { id: 'pkmc_misty', name: '小霞', icon: '👧', type: '主角卡', city: 'isekai_pokemon', price: 160, desc: '华蓝道馆的水系训练家，爱吵架又心软——"皮卡丘可爱啦"。' },
      { id: 'pkmc_brock', name: '小刚', icon: '👨', type: '主角卡', city: 'isekai_pokemon', price: 150, desc: '尼比道馆的岩石系馆主，兼职厨师的可靠大哥哥。' },
      { id: 'pkmc_gary', name: '小茂', icon: '🧑', type: '主角卡', city: 'isekai_pokemon', price: 160, desc: '小智的劲敌与青梅竹马，大木博士的孙子——嘴硬心软的好对手。' },
      { id: 'pkmc_team', name: '小智的宝可梦们', icon: '🐦', type: '主角卡', city: 'isekai_pokemon', price: 170, desc: '妙蛙种子、杰尼龟、喷火龙等一路并肩的伙伴——旅途的家人。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_pkm_rival', cat: 'isekai', name: '劲敌与伙伴训练家', color: '#2e86c1',
    years: '1997-至今', author: '田尻智·Game Freak', theme: '劲敌收藏',
    background: '小茂、小遥、小刚……以及各地区的劲敌与同行的训练家们。',
    story: '劲敌不是敌人，是让自己变强的镜子。',
    protagonist: '各代主角与劲敌', slogan: '来一场痛快的对战吧',
    cities: ['isekai_pokemon'], items: [
      { id: 'pkmc_haruka', name: '小遥', icon: '👧', type: '劲敌卡', city: 'isekai_pokemon', price: 140, desc: '丰缘之旅的女主角，从新手成长为华丽大赛之星。' },
      { id: 'pkmc_hikari', name: '小光', icon: '👧', type: '劲敌卡', city: 'isekai_pokemon', price: 140, desc: '神奥地区的新人协调训练家，与小智并肩的活泼女孩。' },
      { id: 'pkmc_joey', name: '小哲', icon: '🧒', type: '劲敌卡', city: 'isekai_pokemon', price: 100, desc: '自称"劲敌"的小哲，被小智鼓励着走出新手村。' },
      { id: 'pkmc_richie', name: '阿弘', icon: '🧒', type: '劲敌卡', city: 'isekai_pokemon', price: 110, desc: '石英联盟的对手，用皮卡丘"雷恩"打动人心的善良训练家。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_pkm_rocket', cat: 'isekai', name: '火箭队', color: '#c0392b',
    years: '1997-至今', author: '田尻智·Game Freak', theme: '反派收藏',
    background: '武藏、小次郎与喵喵组成的火箭队，梦想抓走皮卡丘献给老大——却总被十万伏特打飞。',
    story: '"好讨厌的感觉~"——被打飞的火箭队才是童年真谛。',
    protagonist: '火箭队三人组', slogan: '既然你诚心诚意地发问了',
    cities: ['isekai_pokemon'], items: [
      { id: 'pkmc_musashi', name: '武藏', icon: '👩', type: '火箭队卡', city: 'isekai_pokemon', price: 150, desc: '火箭队大姐头，爱漂亮爱耍帅，被打飞前总说"好讨厌的感觉"。' },
      { id: 'pkmc_kojiro', name: '小次郎', icon: '🧑', type: '火箭队卡', city: 'isekai_pokemon', price: 140, desc: '被家庭抛弃的贵公子，火箭队的"绅士"——偶尔认真却总是吃瘪。' },
      { id: 'pkmc_meowth', name: '喵喵', icon: '🐱', type: '火箭队卡', city: 'isekai_pokemon', price: 150, desc: '会说人话的喵喵，火箭队的吐槽担当——会说话的代价是学不会聚宝功。' },
      { id: 'pkmc_sakaki', name: '坂木老大', icon: '🧔', type: '火箭队卡', city: 'isekai_pokemon', price: 200, desc: '火箭队首领、常磐道馆馆主——深不可测的大地之王。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_pkm_legend', cat: 'isekai', name: '传说宝可梦', color: '#8e44ad',
    years: '1997-至今', author: '田尻智·Game Freak', theme: '神兽收藏',
    background: '超梦、凤王、烈空坐、盖欧卡与固拉多——掌管世界的传说宝可梦。',
    story: '每个传说背后，都藏着守护世界的愿望。',
    protagonist: '超梦·凤王·烈空坐', slogan: '传说的力量',
    cities: ['isekai_pokemon'], items: [
      { id: 'pkmc_mewtwo', name: '超梦', icon: '🧬', type: '传说卡', city: 'isekai_pokemon', price: 320, desc: '由梦幻基因创造的最强宝可梦，追问自己存在的意义。' },
      { id: 'pkmc_mew', name: '梦幻', icon: '💖', type: '传说卡', city: 'isekai_pokemon', price: 300, desc: '传说中的幻之宝可梦，能学会所有招式——淘气的粉色精灵。' },
      { id: 'pkmc_ho_oh', name: '凤王', icon: '🌈', type: '传说卡', city: 'isekai_pokemon', price: 300, desc: '彩虹之鸟，据说只有真心的人才能看见它。' },
      { id: 'pkmc_lugia', name: '洛奇亚', icon: '🌊', type: '传说卡', city: 'isekai_pokemon', price: 300, desc: '海之神，吹动洋流守护海洋的传说之鸟。' },
      { id: 'pkmc_rayquaza', name: '烈空坐', icon: '🐉', type: '传说卡', city: 'isekai_pokemon', price: 320, desc: '天空之龙，平息固拉多与盖欧卡之战的和平使者。' },
    ]});
})();
