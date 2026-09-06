/* ============ 山东·泰安 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'taian',
    name: '泰安',
    country: '中国',
    cc: 'CN',
    province: '山东',
    flag: '🇨🇳',
    region: '华东',
    hero: '⛰️',
    desc: '"泰山安则四海皆安"：五岳之首在此，帝王封禅之地。夜爬泰山看日出是每个旅行者的成人礼，山下的煎饼卷大葱同样豪迈。',
    travel: [{ name: '高铁', icon: '🚄', cost: 480 }, { name: '飞机', icon: '✈️', cost: 830 }],
    visa: null,
    spots: [
      { id: 'taian_taishan', name: '泰山', icon: '⛰️', price: 115, desc: '五岳之首，"会当凌绝顶，一览众山小"。6660级台阶从红门到玉皇顶，夜爬看日出是经典玩法。' },
      { id: 'taian_daimiao', name: '岱庙', icon: '🛕', price: 30, desc: '历代帝王封禅泰山前祭拜的行宫，与故宫齐名的三大宫殿式建筑群。汉柏唐槐千年犹在。' },
      { id: 'taian_riguang', name: '玉皇顶日出', icon: '🌄', price: 0, desc: '凌晨四点山顶挤满军大衣，云海之上金光乍现。"泰山日出"是中国人的一生心愿清单。' },
      { id: 'taian_shibapan', name: '十八盘·南天门', icon: '🧱', price: 0, desc: '最陡处坡度70度的"天梯"，1600级石阶直上南天门。爬完腿抖三天，"过了十八盘，天上一重天"。' },
      { id: 'taian_houshiwu', name: '后石坞·桃花峪', icon: '🌲', price: 0, desc: '泰山"幽区"，古松林立人少景美。天烛峰路线是户外党最爱，"泰山的前世"。' },
      { id: 'taian_wenquan', name: '泰山温泉城', icon: '♨️', price: 128, desc: '下山后的犒劳，硫磺泉泡到通体舒泰。"爬山泡汤"是泰安周末的标准流程。' },
      { id: 'taian_fangte', name: '泰安方特欢乐世界', icon: '🎢', price: 280, desc: '泰山脚下的主题乐园，"飞跃极限"球幕飞车。带孩子家庭的缓冲站，刺激项目不少。' },
    ],
    souvenirs: [
      { id: 'taian_jianbing', name: '泰山煎饼卷大葱', icon: '🌯', tag: '食', type: '美食', price: 12, desc: '薄脆煎饼卷章丘大葱蘸酱，"山东的豪迈卷"。甜面酱一点，山东人的乡愁。' },
      { id: 'taian_sanmei', name: '泰山三美：白菜豆腐水', icon: '🍲', tag: '食', type: '美食', price: 40, desc: '泰安三美宴听着朴素吃着鲜。山泉水点的豆腐嫩到颤，"皇帝封禅也吃这个"。' },
      { id: 'taian_chishan', name: '赤鳞鱼', icon: '🐟', tag: '食', type: '美食', price: 100, desc: '泰山溪流里的"赤鳞鱼"，古代贡品。油炸酥到连刺都能吃，稀罕着呢。' },
      { id: 'taian_zhuo', name: '肥城桃', icon: '🍑', tag: '食', type: '特产', price: 30, desc: '"中国桃子之乡"肥城的佛桃，一个管饱。香甜多汁，九月的泰安水果顶流。' },
      { id: 'taian_yao', name: '泰山何首乌·四叶参', icon: '🌿', tag: '食', type: '特产', price: 80, desc: '泰山四大名药之首，炖汤滋补。"何首乌"名字就来自泰山人何首乌的传说。' },
      { id: 'taian_shike', name: '泰山石敢当文创', icon: '🪨', tag: '衣', type: '文创', price: 60, desc: '"石敢当"镇宅石的小摆件，泰山石辟邪传千年。文创新形态：钥匙扣与车挂。' },
      { id: 'taian_bi', name: '泰山玉·五岳独尊文创', icon: '💚', tag: '衣', type: '文创', price: 120, desc: '泰山玉手串温润墨绿。"五岳独尊"石刻冰箱贴，登山打卡的"官方纪念"。' },
      { id: 'taian_shouzhang', name: '登山杖与军大衣', icon: '🦯', tag: '衣', type: '服饰', price: 30, desc: '夜爬标配：竹杖5元、军大衣租30元。山顶"军大衣海洋"是泰安冬季名场面。' },
      { id: 'taian_yepa', name: '夜爬泰山', icon: '🌙', tag: '玩', type: '体验', price: 115, desc: '晚上十点从红门出发，凌晨登顶等日出。手电筒长龙蜿蜒如星河，"体力与意志的成人礼"。' },
      { id: 'taian_suo', name: '中天门索道·桃花峪索道', icon: '🚡', tag: '行', type: '体验', price: 100, desc: '体力不够索道来凑，十分钟直达月观峰。缆车里看"十八盘如天梯倒挂"。' },
      { id: 'taian_fengshan', name: '封禅大典实景演出', icon: '🎭', tag: '玩', type: '体验', price: 198, desc: '山体为幕的实景演出，重现帝王封禅。灯光洒在真实的泰山岩壁上，气势逼人。' },
      { id: 'taian_minsu', name: '红门民宿', icon: '🏨', tag: '住', type: '住宿', price: 200, desc: '红门登山口的老院民宿，老板帮你规划夜爬路线。存行李、寄明信片，服务贴心。' },
    ],
    stories: [
      { id: 'taian_story_fengshan', name: '为什么皇帝都爱泰山', icon: '👑', desc: '秦皇汉武唐宗宋祖都来封禅，"受命于天"的认证仪式。泰山是"直通帝座"的天堂，石刻两千多处。' },
      { id: 'taian_story_yepa', name: '夜爬大军的"星河"', icon: '🌌', desc: '凌晨的泰山石阶上全是手电光点，像一条星河。素不相识的爬友互相喊"加油"，到顶就成战友。' },
      { id: 'taian_story_gandayi', name: '山顶军大衣经济学', icon: '🧥', desc: '山顶温度比山下低10度，军大衣租赁成产业。披绿大衣看日出，是几代中国人的共同记忆。' },
      { id: 'taian_story_shigandang', name: '石敢当的降妖传说', icon: '🪨', desc: '泰山石敢当能降妖除魔，全国宅院立石以求平安。一块石头的"全民信仰"从泰山出发。' },
      { id: 'taian_story_yi', name: '挑山工的"慢哲学"', icon: '🧗', desc: '泰山挑山工肩挑百斤走"之"字，走得慢却总先到。冯骥才的文章让这种精神全国闻名。' },
      { id: 'taian_story_yunhai', name: '"云海玉盘"奇观', icon: '☁️', desc: '夏季雨后泰山云海如白玉盘铺满山谷。老人说："看云海要靠缘分，缘分是凌晨四点起床。"' },
    ],
  });
})();
