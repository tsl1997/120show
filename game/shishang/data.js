/* ============================================================
 * 万界楼 · 史上最强店主（试玩版）
 * data.js —— 静态数据：商品 / 客户 / 位面世界 / 任务链
 * 改编自南极烈日《史上最强店主》前期剧情（第1~13章）
 * ============================================================ */

"use strict";

/* ---------------- 商品 ----------------
 * value: 系统定价（价值点）
 * cost : 现代采购价（华夏币），位面商品无 cost
 * tags : 需求标签，用于匹配客户的"意念"
 * grade: 秘籍品阶（决定修炼获得的境界点）
 * lvls : 秘籍总重数
 * auction: 能否送拍卖行变现（位面古物才行）
 */
const ITEMS = {
  /* ---- 现代商品（华夏币采购）---- */
  noodle:    { name: "红烧牛肉泡面", emoji: "🍜", cost: 5,    value: 10,  tags: ["食物"], desc: "买一送一囤来的口粮，两个星期的伙食。", modern: true },
  kfc:       { name: "肯德基全家桶", emoji: "🍗", cost: 30,   value: 40,  tags: ["食物"], desc: "一百份外卖的兄弟，赛亚人认证美味。", modern: true },
  laoganma:  { name: "老干妈",       emoji: "🌶️", cost: 15,   value: 50,  tags: ["食物"], desc: "让一切食物变得下饭的神器。", modern: true },
  baijiu:    { name: "高度白酒",     emoji: "🍶", cost: 20,   value: 60,  tags: ["美酒"], desc: "五十三度，古人喝一口能烧到脚后跟。", modern: true },
  lighter:   { name: "防风打火机",   emoji: "🔥", cost: 3,    value: 15,  tags: ["奇物"], desc: "拇指大小的'火折子'，一按就着。", modern: true },
  torch:     { name: "强光手电筒",   emoji: "🔦", cost: 15,   value: 40,  tags: ["奇物"], desc: "掌中白日，夜行利器。", modern: true },
  musicbox:  { name: "玻璃音乐盒",   emoji: "🎵", cost: 100,  value: 300, tags: ["奇物"], desc: "会自己唱歌的水晶宝盒，古人眼中的仙家神器。", modern: true },
  medicine:  { name: "阿司匹林",     emoji: "💊", cost: 10,   value: 30,  tags: ["丹药"], desc: "白色小药丸，退热镇痛，号称'西界灵丹'。", modern: true },
  toy:       { name: "遥控赛车",     emoji: "🚗", cost: 50,   value: 100, tags: ["奇物"], desc: "不用马拉自己跑的Mini车驾。", modern: true },
  book:      { name: "现代诗集",     emoji: "📕", cost: 30,   value: 80,  tags: ["奇书"], desc: "印刷精美的诗赋文集，古人梦寐以求的'名士手札'。", modern: true },
  phone:     { name: "智能手机",     emoji: "📱", cost: 3000, value: 800, tags: ["奇物", "奇书"], desc: "千里传音、万卷藏书，尽在一方黑镜之中。", modern: true },

  /* ---- 位面商品（采购 / 客户支付获得）---- */
  saiyan:    { name: "低级赛亚人血脉", emoji: "🩸", value: 500, tags: ["血脉", "丹药"], desc: "战斗民族的血液，可强化天赋，越战越强。", grade: 0 },
  xiantou:   { name: "仙豆",         emoji: "🟢", value: 2000, tags: ["丹药"], desc: "龙珠位面卡林塔圣物，一颗饱腹、重伤立愈。", grade: 0 },
  capsule:   { name: "万能胶囊",     emoji: "💊", value: 500, tags: ["奇物"], desc: "布尔玛的杰作，房屋汽车都能塞进口袋。", grade: 0 },

  zixia:     { name: "紫霞神功",     emoji: "📜", value: 200,  tags: ["秘籍"], grade: 2, lvls: 9, desc: "华山掌门专修内功，霞光万道。" },
  hunyuan:   { name: "混元功",       emoji: "📜", value: 100,  tags: ["秘籍"], grade: 2, lvls: 6, desc: "华山派绝学，混然一体。" },
  duoming:   { name: "夺命连环三仙剑", emoji: "🗡️", value: 80, tags: ["秘籍"], grade: 2, lvls: 5, desc: "华山剑宗绝学，连环三剑夺人性命。" },
  huashan:   { name: "华山剑法",     emoji: "🗡️", value: 10,   tags: ["秘籍"], grade: 1, lvls: 4, desc: "华山派基础剑法。" },
  jiuyang:   { name: "九阳真经",     emoji: "📖", value: 1000, tags: ["秘籍"], grade: 4, lvls: 5, desc: "斗酒僧所创顶级内功，阴阳调和，附金刚不坏。" },
  jinzhong:  { name: "金钟罩",       emoji: "📖", value: 1000, tags: ["秘籍"], grade: 4, lvls: 12, desc: "达摩四大神功之一，十二道玄关，成就金刚不坏。" },
  yijin:     { name: "易筋经",       emoji: "📖", value: 1000, tags: ["秘籍"], grade: 4, lvls: 7, desc: "达摩四大神功之一，打通隐脉，进境神速。" },
  shaolin_quan:  { name: "少林长拳",   emoji: "📜", value: 5,   tags: ["秘籍"], grade: 1, lvls: 3, desc: "少林基础拳法。" },
  jingang_zhang: { name: "大力金刚掌", emoji: "📜", value: 80,  tags: ["秘籍"], grade: 2, lvls: 5, desc: "七十二绝技之一，至刚至强。" },
  tiebu:     { name: "铁布衫",       emoji: "📜", value: 120,  tags: ["秘籍"], grade: 2, lvls: 6, desc: "七十二绝技之一，横练外功。" },
  shenzhang: { name: "神掌八打",     emoji: "📜", value: 100,  tags: ["秘籍"], grade: 2, lvls: 5, desc: "七十二绝技之一。" },
  tongzi:    { name: "少林童子功",   emoji: "📜", value: 350,  tags: ["秘籍"], grade: 3, lvls: 8, desc: "达摩四大神功之一，常保童子之身方可大成。" },
  henglian:  { name: "横炼十三太保捷径", emoji: "📄", value: 300, tags: ["秘籍"], grade: 2, lvls: 5, desc: "少林十代高僧整理的横练心得。" },
  Boxin:     { name: "般若掌详解",   emoji: "📄", value: 120,  tags: ["秘籍"], grade: 2, lvls: 4, desc: "少林第七代主持所著武道心得。" },

  bixie:     { name: "辟邪剑谱",     emoji: "🗡️", value: 400, tags: ["秘籍"], grade: 3, lvls: 6, noStudy: true, desc: "葵花宝典残篇。欲练此功，必先自宫——你确定？", cursed: true },
  meijiu:    { name: "百年古方美酒", emoji: "🍾", value: 80,  tags: ["美酒"], desc: "祖传古方所酿，开坛十里香。" },
  yaocai:    { name: "百年灵芝",     emoji: "🍄", value: 150, tags: ["丹药", "药材"], desc: "深山灵药，炼丹入药皆可。" },
  yishu:     { name: "医仙药典",     emoji: "📚", value: 300, tags: ["奇书", "秘籍"], grade: 2, lvls: 4, desc: "蝴蝶谷不传之秘，解毒疗伤圣典。" },
  shenghuo:  { name: "圣火令",       emoji: "🔱", value: 800, tags: ["神兵", "奇物"], desc: "波斯明教圣物，诡异武学刻于其上。" },
  zhubao:    { name: "汉宫珍宝",     emoji: "💎", value: 1500, tags: ["珍宝"], desc: "皇帝私库里的稀世奇珍，现代拍卖行的最爱。" },
  gold_ingot:{ name: "金锭",         emoji: "💰", value: 200, tags: ["珍宝"], desc: "沉甸甸的金元宝，硬通货。" },
  pearl:     { name: "东珠首饰",     emoji: "📿", value: 150, tags: ["珍宝", "奇物"], desc: "黄蓉眼里的稀罕玩意儿。" },
};

/* ---------------- 客户 ----------------
 * need: 意念需求标签（售卖商品至少包含其一）
 * budget: 携带价值点（成交上限）
 * first: 剧情首单（特殊支付）
 * unlock: 出现条件 fn(state)
 */
const CUSTOMERS = {
  goku: {
    name: "孙悟空", emoji: "🐵", world: "龙珠位面 · 赛亚人", budget: 60,
    need: ["食物"],
    intro: "店主，还有吃的东西吗？俺老孙好饿啊！",
    special: "goku",
    unlock: () => true,
  },
  yue: {
    name: "岳不群", emoji: "🧝", world: "笑傲江湖 · 华山派掌门", budget: 2500,
    need: ["血脉", "丹药", "秘籍"],
    intro: "在下岳不群，愿以求增大力的宝物，换华山基业兴旺。",
    first: { needItem: "saiyan", pay: ["zixia", "hunyuan", "duoming", "huashan", "henglian", "shenzhang", "jingang_zhang", "tiebu", "Boxin"] },
    unlock: (s) => s.quests[1].done,
  },
  guojing: {
    name: "郭靖", emoji: "🐎", world: "射雕英雄传 · 大侠", budget: 1200,
    need: ["食物", "美酒", "奇物"],
    intro: "周大哥，我师父让我去嘉兴，路上想带些干粮好酒。",
    pay: ["gold_ingot"],
    unlock: (s) => s.stats.worldTrips.shaDiao > 0,
  },
  huangrong: {
    name: "黄蓉", emoji: "🌸", world: "射雕英雄传 · 丐帮小叫花", budget: 1500,
    need: ["奇物", "食物"],
    intro: "喂，你这店里有什么好玩意儿？本姑娘可不好糊弄。",
    loves: ["musicbox"],
    pay: ["pearl"],
    unlock: (s) => s.stats.worldTrips.shaDiao > 0,
  },
  linghu: {
    name: "令狐冲", emoji: "🍶", world: "笑傲江湖 · 华山大弟子", budget: 600,
    need: ["美酒", "丹药", "秘籍"],
    intro: "店、店主，有没有酒？有酒咱什么都好商量！",
    loves: ["baijiu"],
    pay: ["Boxin"],
    unlock: (s) => s.stats.worldTrips.xiaoao > 0 || s.quests[5].done,
  },
  bulma: {
    name: "布尔玛", emoji: "🔬", world: "龙珠位面 · 天才科学家", budget: 2500,
    need: ["奇物", "奇书"],
    intro: "这里是万能胶囊公司布尔玛！你们的科技我要全部研究一遍！",
    pay: ["capsule"],
    unlock: (s) => s.stats.worldTrips.longzhu > 0,
  },
  zhangwuji: {
    name: "张无忌（少年）", emoji: "🧒", world: "倚天屠龙记 · 中寒毒的少年", budget: 400,
    need: ["丹药", "食物", "秘籍"],
    intro: "老爷爷说……这里或许有能压制我体内寒毒的东西……",
    pay: ["yaocai"],
    unlock: (s) => s.shopLevel >= 2,
  },
  caocao: {
    name: "曹操", emoji: "👑", world: "三国演义 · 曹丞相", budget: 5000,
    need: ["奇书", "美酒", "奇物"],
    intro: "孟德闻此楼藏天下奇书，特来一观。对酒当歌，人生几何！",
    loves: ["book", "phone", "baijiu"],
    pay: ["zhubao"],
    unlock: (s) => s.stats.worldTrips.sanguo > 0,
  },
  lvbu: {
    name: "吕布", emoji: "⚔️", world: "三国演义 · 飞将", budget: 6000,
    need: ["美酒", "丹药", "神兵", "秘籍"],
    intro: "吾乃吕奉先！听说此地有宝酒宝药？拿来！金子管够！",
    pay: ["gold_ingot", "gold_ingot"],
    unlock: (s) => s.stats.worldTrips.sanguo > 1,
  },
  dongzhuo: {
    name: "董卓", emoji: "🐻", world: "三国演义 · 太师", budget: 12000,
    need: ["丹药", "奇物"],
    intro: "老夫近来体虚，听闻此楼有延寿之宝……黄金、珍宝，随你挑！",
    pay: ["zhubao"],
    unlock: (s) => s.stats.worldTrips.sanguo > 0,
  },
  weixiaobao: {
    name: "韦小宝", emoji: "🎭", world: "鹿鼎记 · 钦差大臣", budget: 5000,
    need: ["奇物", "奇书", "美酒"],
    intro: "哎呀妈呀！这楼里的宝贝，比皇宫里还多！小桂子服了！",
    pay: ["zhubao"],
    unlock: (s) => s.shopLevel >= 2,
  },
};

/* ---------------- 位面世界（位面采购）----------------
 * trip = 3 天，每天从事件池抽取（剧情事件优先且不重复）
 * option result: { text, items:[[id,count]], cny, vp, remove:[[id,count]], goto:'end', once }
 */
const WORLDS = {
  shaDiao: {
    name: "射雕英雄传世界", emoji: "🏹",
    desc: "临近中武的世界，金宋无大战。少林九阳、幽谷神雕、古墓九阴，三处宝地。",
    unlock: (s) => s.quests[2].done,
    unlockText: "完成首笔交易后开启时空定位",
    events: [
      {
        id: "zhangjiakou", title: "张家口 · 集市", story: true, quest: 3,
        text: "张家口街头，一个浓眉大眼、身披貂裘的憨厚少年牵着小红马，正和一个黑煤球似的小乞丐谈笑风生——正是郭靖与女扮男装的黄蓉。",
        options: [
          {
            label: "卖出音乐盒（需库存音乐盒）",
            cond: (s) => countItem("musicbox") > 0,
            result: { text: "郭靖豪爽地掏出两锭黄金换走音乐盒，黄蓉爱不释手。回到现代，这两锭黄金足以让拍卖行疯抢。", remove: [["musicbox", 1]], cny: 60000, quest: 3 },
          },
          {
            label: "请二人吃饭，结个善缘",
            result: { text: "一顿大餐下来，郭靖拍着胸脯：'周大哥有事尽管开口！'多了一个免费保镖，稳。", cny: 30, buff: "guojing" },
          },
          { label: "低调离开，直奔目标", result: { text: "你按住火热的内心：九阳真经要紧，儿女情长先放一放。" } },
        ],
      },
      {
        id: "shaolin", title: "少林寺 · 藏经阁", story: true, quest: 4,
        text: "藏经阁书香扑面，一楼是万卷佛经，觉远大师正在扫地。钟声骤响，僧人们尽数涌出寺门——二楼，整层少林武学，无人看守！",
        options: [
          {
            label: "只取《楞伽经》中的九阳真经（稳）",
            result: { text: "你颤着手取下四卷楞伽经，夹层里密密麻麻的蝇头小字正是九阳真经！八成把握，十成到手。", items: [["jiuyang", 1]], quest: 4 },
          },
          {
            label: "搬空二楼！（风险，境界越高越稳）",
            risk: { power: 1, failText: "武僧发现藏经阁有异，你只好提前收手，只带走了一半收成，狼狈闪人。", failHalf: true },
            result: { text: "一本、两本……十几个书架尽数扫空！七十二绝技、达摩四大神功、数百年武学心得——这下真的发财了！", items: [["jiuyang", 1], ["jinzhong", 1], ["yijin", 1], ["tongzi", 1], ["henglian", 1], ["tiebu", 1], ["jingang_zhang", 1], ["shenzhang", 1], ["Boxin", 1], ["shaolin_quan", 2]], quest: 4 },
          },
          { label: "安心抄佛经（怂）", result: { text: "你老老实实抄了一下午《金刚经》，觉远大师夸你心诚。", items: [["shaolin_quan", 1]] } },
        ],
      },
      {
        id: "huogong", title: "少室山道 · 对峙", story: true,
        text: "半山腰树荫下，满脸疤痕的黑和尚火工头陀力战少林武僧，郭靖和黄蓉被波及，眼看要遭殃！",
        options: [
          {
            label: "出手相救",
            risk: { power: 2, failText: "火工头陀一掌震得你气血翻涌，亏得系统把你闪回现代，怀里还攥着半袖刚买的酒。", loseCny: 200 },
            result: { text: "你一拳砸出，九阳真气震得黑和尚虎口迸裂，抱头鼠窜。郭靖对你佩服得五体投地。", vp: 200 },
          },
          { label: "系统闪人，保命要紧", result: { text: "你默念'回去'，瞬间回到出租房。就是有点对不住郭靖兄弟……" } },
        ],
      },
      {
        id: "taohua", title: "桃花岛外 · 采买药材",
        text: "东海之滨，药农兜售深山采来的百年灵芝。",
        options: [
          { label: "全买了", cost: 2000, result: { text: "两株百年灵芝到手，回去能卖个好价钱。", items: [["yaocai", 2]] } },
          { label: "砍价买一株", cost: 800, result: { text: "你成功砍到半价，药农直呼遇上行家。", items: [["yaocai", 1]] } },
          { label: "看看就走", result: { text: "囊中羞涩，还是先去做生意吧。" } },
        ],
      },
    ],
  },
  xiaoao: {
    name: "笑傲江湖世界", emoji: "🗡️",
    desc: "五岳剑派、魔教纷争的江湖。华山秘籍、福州古宅、衡山美酒。",
    unlock: (s) => s.quests[5].done,
    unlockText: "修炼至后天境后开启时空定位",
    events: [
      {
        id: "huashan", title: "华山 · 思过崖",
        text: "华山之巅，当年剑气二宗比武的洞窟里，石壁上刻满了五岳剑派的绝学招式。",
        options: [
          { label: "拓印石壁剑招", risk: { power: 1, failText: "被巡山弟子发现，你谎称来祭拜祖师，仓皇下山，只拓了半壁。", }, result: { text: "满壁五岳剑招尽入囊中，回现代慢慢整理成册。", items: [["duoming", 1], ["huashan", 2]] } },
          { label: "拜访岳掌门收书", result: { text: "岳不群为了'支持万界楼'，忍痛割爱数册华山武学。", items: [["zixia", 1], ["hunyuan", 1]] } },
        ],
      },
      {
        id: "linfu", title: "福州 · 林家老宅",
        text: "向阳巷老宅深处，据说藏着林远图留下的袈裟——辟邪剑谱。",
        options: [
          { label: "取剑谱（闹出动静会引来麻烦）", risk: { power: 2, failText: "你刚翻到袈裟，木高峰和余沧海的人就杀到了！你闪回现代，只来得及抓一把金叶子。", items: [["gold_ingot", 1]] }, result: { text: "袈裟到手！'欲练此功，必先自宫'……嗯，还是转手卖掉比较合适。", items: [["bixie", 1]] } },
          { label: "只搜搜值钱物件", result: { text: "镖局老宅翻出些金器细软，也算不虚此行。", items: [["gold_ingot", 1]] } },
        ],
      },
      {
        id: "hengshan", title: "衡山城 · 酒楼",
        text: "回雁楼里酒香四溢，掌柜的声称有祖传古方。",
        options: [
          { label: "买断古方美酒", cost: 1000, result: { text: "十坛百年古方美酒装车——令狐冲闻到味儿能追出三条街。", items: [["meijiu", 10]] } },
          { label: "尝两杯就走", cost: 100, result: { text: "好酒！就是囊中……咳。", items: [["meijiu", 1]] } },
        ],
      },
    ],
  },
  longzhu: {
    name: "龙珠世界", emoji: "🐉",
    desc: "高武位面，战力爆炸。仙豆、胶囊科技，遍地是宝——前提是你别惹弗利萨。",
    unlock: (s) => s.stats.servedGoku >= 2,
    unlockText: "与孙悟空交易两次后开启时空定位",
    events: [
      {
        id: "baozishan", title: "包子山 · 悟空的家",
        text: "包子山深处，悟空的爷爷孙悟饭的遗物旁，有一个小袋子里装着几颗绿色的豆子。",
        options: [
          { label: "用美食换仙豆", cond: (s) => countItem("kfc") > 0 || countItem("noodle") > 2, result: { text: "悟空抱着全家桶吃得不亦乐乎，大手一挥：'仙豆给你几颗！这豆子可管饱啦！'", remove: [["kfc", 1]], items: [["xiantou", 2]] } },
          { label: "想直接拿（会被一拳打飞）", risk: { power: 4, failText: "悟空歪着头一拳挥来，你被系统紧急传送回现代，躺在地上半天缓不过劲。", loseCny: 0 }, result: { text: "你试图偷拿，悟空的速度快得你看不清——幸好系统把你闪了回来，双方友谊的小船没翻。", items: [["xiantou", 1]] } },
        ],
      },
      {
        id: "xidu", title: "西都 · 万能胶囊公司",
        text: "布尔玛对'另一个世界的科技'兴趣盎然，眼睛发光。",
        options: [
          { label: "用智能手机换胶囊科技", cond: (s) => countItem("phone") > 0, result: { text: "布尔玛抱着手机研究了一整晚，第二天塞给你一大把胶囊：'以后常来！'", remove: [["phone", 1]], items: [["capsule", 3]] } },
          { label: "用现代小玩意换零花钱", cond: (s) => countItem("lighter") + countItem("torch") > 0, result: { text: "布尔玛收下了打火机和手电，回赠几个试验品胶囊。", remove: [["lighter", 1]], items: [["capsule", 1]], items2: [["torch", 1]] } },
          { label: "只是参观", result: { text: "你逛了逛这座未来都市，眼界大开。" } },
        ],
      },
    ],
  },
  sanguo: {
    name: "三国演义世界", emoji: "🐎",
    desc: "汉末乱世，龙蛇并起。皇帝私库、曹府夜宴、西凉铁骑。",
    unlock: (s) => distinctItems() >= 12 && s.stats.trades >= 12,
    unlockText: "商品种类≥12 且 交易≥12 笔后开启时空定位",
    events: [
      {
        id: "siku", title: "洛阳 · 皇宫私库", story: true, quest: 7,
        text: "夜色掩护下，你站在皇帝私库门前。守库太监喝得烂醉如泥。库中金玉珠宝堆山填海——这可是要载入史册的一票。",
        options: [
          {
            label: "搬空私库！",
            result: { text: "你把这些年在万界楼收的空箱子全用上了。回现代变卖这批古董，直接在报纸头条上挂了一周。（拍卖行：9.8亿成交！）", items: [["zhubao", 3], ["gold_ingot", 3]], cny: 980000000, quest: 7 },
          },
          { label: "只拿几件，细水长流", result: { text: "你克制地拿了几件不起眼的小件，细水长流才是经营之道。", items: [["zhubao", 1], ["gold_ingot", 1]], cny: 3000000 } },
        ],
      },
      {
        id: "caofu", title: "许都 · 曹府夜宴",
        text: "曹操设宴相邀：'闻先生胸藏万卷奇书，今夜与孤对饮论诗！'",
        options: [
          { label: "献上现代诗集", cond: (s) => countItem("book") > 0, result: { text: "曹操读到'老骥伏枥，志在千里'拍案而起：此等好诗！孤出重金求之！", remove: [["book", 1]], items: [["zhubao", 1]], vp: 500 } },
          { label: "对饮论英雄", cond: (s) => countItem("baijiu") > 0, result: { text: "'天下英雄，唯使君与操耳！'你借着酒劲忽悠了一整晚，曹操大喜赠宝。", remove: [["baijiu", 1]], items: [["gold_ingot", 1]], vp: 200 } },
          { label: "婉拒赴宴", result: { text: "伴君如伴虎，你选择在城外茶棚里观星。" } },
        ],
      },
      {
        id: "xiliang", title: "西凉 · 军马市",
        text: "西凉马市，战马嘶鸣，也有马贩子私卖军中金器。",
        options: [
          { label: "收购金器", cost: 5000, result: { text: "一批西凉金器入手，回现代都是文物价。", items: [["gold_ingot", 3]] } },
          { label: "牵两匹好马（没地方养）", result: { text: "你摸了摸战马，想起自己出租房连阳台都没有，默默走开。" } },
        ],
      },
    ],
  },
  yitian: {
    name: "倚天屠龙记世界", emoji: "🔥",
    desc: "明教、六大派、朝廷三方角力。蝴蝶谷医书、光明顶圣火令。",
    unlock: (s) => s.shopLevel >= 2,
    unlockText: "二星店主后开启时空定位",
    events: [
      {
        id: "hudiegu", title: "蝴蝶谷 · 谷主药庐",
        text: "蝴蝶纷飞的谷中，药圃连绵，谷主正为医书无人传承发愁。",
        options: [
          { label: "重金求购医书", cost: 3000, result: { text: "《医仙药典》到手，外加一篓上好药材。", items: [["yishu", 1], ["yaocai", 2]] } },
          { label: "以现代医书相赠换药材", cond: (s) => countItem("book") > 0, result: { text: "谷主对着人体解剖图如痴如醉，回赠了你满满一车药材。", remove: [["book", 1]], items: [["yaocai", 4]] } },
        ],
      },
      {
        id: "guangmingding", title: "光明顶 · 秘道",
        text: "明教总坛秘道深处，阳顶天的遗书旁挂着两枚金色铁片——圣火令。",
        options: [
          { label: "取走圣火令", risk: { power: 3, failText: "秘道机关发动，你抱头逃出，只在洞口捡到些散碎金子。", items: [["gold_ingot", 1]] }, result: { text: "圣火令到手！上面刻着诡异武功，明教上下怕是要翻天了。", items: [["shenghuo", 1]] } },
          { label: "抄录心法就走", result: { text: "你抄了些残篇心法，也算有所得。", vp: 300 } },
        ],
      },
    ],
  },
  shendiao: {
    name: "神雕侠侣世界", emoji: "🦅",
    desc: "独孤求败剑冢、古墓九阴、菩斯曲蛇养殖基地……",
    unlock: () => false,
    unlockText: "后续版本开放：独孤求败的传承等着你",
    events: [],
  },
  luding: {
    name: "鹿鼎记世界", emoji: "🏯",
    desc: "韦小宝的江湖，四十二章经、龙脉宝藏……",
    unlock: () => false,
    unlockText: "后续版本开放：小宝已经在攒路费了",
    events: [],
  },
};

/* ---------------- 现代采购清单 ---------------- */
const SHOP_GOODS = ["noodle", "kfc", "laoganma", "baijiu", "lighter", "torch", "musicbox", "medicine", "toy", "book", "phone"];

/* ---------------- 武道境界 ---------------- */
const REALMS = [
  { name: "凡人", pts: 0 },
  { name: "后天初期", pts: 1 },
  { name: "后天中期", pts: 3 },
  { name: "后天后期", pts: 6 },
  { name: "后天大圆满", pts: 8 },
  { name: "先天初期", pts: 14 },
  { name: "先天中期", pts: 22 },
  { name: "先天大圆满", pts: 34 },
  { name: "宗师", pts: 50 },
];

/* ---------------- 任务链（对应原作前期章节）---------------- */
const QUESTS = [
  { id: 0, chapter: "第1章", title: "万界商铺系统", desc: "紫色流星划过夜空，万界商铺系统绑定成功，出租房成为万界楼。", reward: { tokens: 1 } },
  { id: 1, chapter: "第2章", title: "孙悟空和岳不群", desc: "喂饱从龙珠位面来的孙悟空（完成一次接待）。", reward: { vp: 50 } },
  { id: 2, chapter: "第2章", title: "首笔跨位面交易", desc: "接待岳不群，用赛亚人血脉换华山秘籍（完成与岳不群的交易）。", reward: { vp: 100 } },
  { id: 3, chapter: "第4章", title: "郭靖与黄蓉", desc: "位面采购首站：射雕英雄传世界，在张家口卖掉音乐盒。", reward: { tokens: 2 } },
  { id: 4, chapter: "第6章", title: "搬空藏经阁", desc: "在少林寺藏经阁带走九阳真经与满楼武学。", reward: { vp: 500 } },
  { id: 5, chapter: "第7章", title: "九阳真经", desc: "修炼武学至【后天大圆满】境界。", reward: { vp: 300 } },
  { id: 6, chapter: "第9章", title: "万界楼初具规模", desc: "累计上架过 12 种商品，并完成 12 笔交易。", reward: { tokens: 2 } },
  { id: 7, chapter: "第12章", title: "搬空皇帝私库", desc: "位面采购前往三国演义世界，搬空汉末皇帝私库。", reward: {} },
  { id: 8, chapter: "第13章", title: "二星店主", desc: "花 9.8 亿华夏币买下明雅小区，绑定新的万界楼。", reward: {} },
];

/* ---------------- 开场剧情 ---------------- */
const INTRO_STEPS = [
  { emoji: "🏢", text: "淮安市，天海集团。你（周阳）刚被面试官叫到47号——不对，你已经很久没有工作了。一个月前，你还是公司明日之星。" },
  { emoji: "☄️", text: "那个加完班的深夜，你看到一颗闪着诡异紫光的流星。闭目许愿的瞬间，一道流光钻进了你的身体。从那以后，你一集中注意力就昏睡。" },
  { emoji: "🔊", text: "「万界商铺系统融合成功！」「系统绑定成功！」——冰冷的机械音在你脑海中炸响。你的出租房，已成为连通万千位面的……万界楼！" },
  { emoji: "🏪", text: "系统会捕捉万千位面生灵的「意念」，把有需求的客户直接送进你的店。他们可能是侠客、皇帝、妖怪，也可能是赛亚人。经营它，让所有人给你打工！" },
];
/* ============================================================
 * 三星 ~ 六星 扩展内容（第142章~第938章）
 * ============================================================ */

/* ---------------- 新增商品 ---------------- */
Object.assign(ITEMS, {
  /* 修真玉简（主神空间） */
  peiyuan:  { name: "培元功",       emoji: "📜", value: 3000,  tags: ["秘籍"], grade: 3, lvls: 6, desc: "主神空间修真功法，猪妖拍出天价的白月光。" },
  qingmu:   { name: "青木诀",       emoji: "📜", value: 2000,  tags: ["秘籍"], grade: 3, lvls: 5, desc: "木属性修真功法。" },
  lianling: { name: "炼灵诀",       emoji: "📜", value: 2000,  tags: ["秘籍"], grade: 3, lvls: 5, desc: "妖族修炼功法。" },
  guisha:   { name: "鬼煞功",       emoji: "📜", value: 1500,  tags: ["秘籍"], grade: 3, lvls: 5, desc: "鬼修功法，兰若寺限定。" },
  danlu:    { name: "修真丹录大全", emoji: "📚", value: 4000,  tags: ["秘籍"], grade: 3, lvls: 6, desc: "炼丹入门宝典。" },
  fajue:    { name: "修真法诀大全", emoji: "📚", value: 4000,  tags: ["秘籍"], grade: 3, lvls: 6, desc: "修真法诀一网打尽。" },
  xisui:    { name: "洗髓经残篇",   emoji: "📖", value: 5000,  tags: ["秘籍"], grade: 4, lvls: 6, desc: "扫地僧押上全部身家也没换到的东西。" },
  rulai:    { name: "如来神掌",     emoji: "🖐️", value: 10000, tags: ["秘籍"], grade: 4, lvls: 5, desc: "佛光普照，朱无视的底牌。" },
  jinglei:  { name: "先天惊雷功",   emoji: "⚡", value: 12000, tags: ["秘籍"], grade: 3, lvls: 9, desc: "第九重标价二十万的雷法。" },

  /* 妖怪 / 倩女幽魂 */
  huoli:    { name: "狐妖妖力结晶", emoji: "🦊", value: 5000,  tags: ["丹药"], desc: "二百年狐妖毕生修为，妖怪们排队抢购。" },
  huoli2:   { name: "千年妖力结晶", emoji: "🦊", value: 80000, tags: ["丹药"], desc: "拍卖会天价成交的传说级商品。" },
  lingmu:   { name: "千年灵木剑",   emoji: "🗡️", value: 5000,  tags: ["神兵"], desc: "小蟠桃树枝干所制，专克妖邪。燕赤霞的心头好。" },
  fulu:     { name: "朱砂符箓",     emoji: "🧧", value: 200,   tags: ["神兵", "丹药"], desc: "茅山正宗，一张顶三天。" },
  dahuan:   { name: "少林大还丹",   emoji: "💊", value: 1000,  tags: ["丹药"], desc: "和珅一次买了十颗保命。" },

  /* 海贼王 */
  mumu:      { name: "木木果实",   emoji: "🍎", value: 10000, tags: ["奇物"], desc: "恶魔果实，蒙哥大汗三万点拍走。" },
  yanjiang:  { name: "岩浆果实",   emoji: "🌋", value: 30000, tags: ["奇物"], desc: "从赤犬身上提取的自然系果实。" },
  shuangshuang: { name: "霜霜果实", emoji: "❄️", value: 30000, tags: ["奇物"], desc: "白胡子海贼团的谢礼。" },
  xianxian:  { name: "线线果实",   emoji: "🧵", value: 12000, tags: ["奇物"], desc: "从七武海处没收。" },

  /* 风云 */
  longyuan:  { name: "龙元",       emoji: "🐲", value: 60000,  tags: ["丹药"], desc: "八千年神龙的四分之一元，长生之基。" },
  fengxue:   { name: "凤血",       emoji: "🦩", value: 30000,  tags: ["丹药"], desc: "帝释天千年不死的老本。" },
  longgui:   { name: "龙龟之血",   emoji: "🐢", value: 15000,  tags: ["丹药"], desc: "笑三笑四千年寿元的秘密。" },
  jueshao:   { name: "绝世好剑",   emoji: "⚔️", value: 120000, tags: ["神兵"], desc: "风云十大神兵之首，拜剑山庄镇庄之宝。" },
  dagou:     { name: "打狗棒法",   emoji: "🥢", value: 8000,   tags: ["秘籍"], grade: 3, lvls: 5, desc: "丐帮帮主信物武学。" },
  yingshen: { name: "多重影分身之术", emoji: "👥", value: 5000, tags: ["秘籍"], grade: 2, lvls: 3, desc: "万界楼必修的'无耻'战技，玉皇大帝也在用。" },

  /* 秦始皇陵 / 西游降魔篇 */
  xuanyuan: { name: "轩辕剑",     emoji: "🗡️", value: 180000, tags: ["神兵"], desc: "人皇典传承之剑，秦始皇陵出土。" },
  tiandao:  { name: "天道德经",   emoji: "📖", value: 80000,  tags: ["秘籍"], grade: 5, lvls: 5, desc: "太清圣人手泽，天帝、如来、冥王三家各持一份。" },
  sangshi:  { name: "丧尸晶体",   emoji: "🧊", value: 3000,   tags: ["奇物"], desc: "提高精神力的末日特产。" },
  wangling: { name: "亡灵圣经",   emoji: "📕", value: 100000, tags: ["奇书"], desc: "复活血肉，每人限一次。杰尔夫百万点拍走过名额。" },

  /* 漫威 / 白蛇传 / 葫芦娃 */
  yumo:     { name: "宇宙魔方",   emoji: "🔷", value: 500000, tags: ["神兵", "奇物"], desc: "空间宝石，赵攀培养特能队的本钱。" },
  fenjue:   { name: "焚诀",       emoji: "🔥", value: 200000, tags: ["秘籍"], grade: 5, lvls: 8, desc: "可进化的异火功法。" },
  tuntian:  { name: "吞天魔功",   emoji: "🖤", value: 300000, tags: ["秘籍"], grade: 5, lvls: 8, desc: "狠人大帝的成名帝经。" },
  bumie:    { name: "不灭天功",   emoji: "🤍", value: 300000, tags: ["秘籍"], grade: 5, lvls: 8, desc: "与吞天魔功并称的帝经。" },
  longding: { name: "龙纹黑金鼎", emoji: "🏺", value: 500000, tags: ["神兵"], desc: "帝道神兵，陈列四楼无人敢近。" },
  shenge:   { name: "火系神格",   emoji: "🔆", value: 1000000, tags: ["奇物"], desc: "神格入体，立地成神。玄阶拍卖会压轴。" },
  pantao:   { name: "蟠桃",       emoji: "🍑", value: 80000,  tags: ["丹药"], desc: "假扮玉帝摘回来的，天庭气运都分了家。" },
  sannian:  { name: "三千年蟠桃", emoji: "🍑", value: 300000, tags: ["丹药"], desc: "延寿三千年，大帝家族的硬通货。" },
  hulu:     { name: "七色葫芦",   emoji: "🌈", value: 3000,   tags: ["奇物"], desc: "连藤挖来的宝葫芦，蛇精蝎子精的传家宝。" },
  kaijia:   { name: "钢铁侠铠甲", emoji: "🦾", value: 5000,   tags: ["珍宝", "奇物"], desc: "现代拍卖行的抢手货，一套提成够吃十年。" },
  luoji:    { name: "洛基心法",   emoji: "😈", value: 30000,  tags: ["秘籍"], grade: 4, lvls: 5, noStudy: true, cursed: true, desc: "改版北冥神功，全球灾难的源头。谁买谁背锅。" },

  /* 遮天 / 完美世界 / 飞升之后 */
  tuntianGuan: { name: "吞天魔罐", emoji: "🏺", value: 1000000, tags: ["神兵"], desc: "完全复苏的极道帝兵，九龙拉棺带回。" },
  zhoutian: { name: "周天星斗大阵", emoji: "✨", value: 600000, tags: ["秘籍"], grade: 5, lvls: 6, desc: "两名至尊+365神级+14800帝级可战主神。" },
  faxue:    { name: "法术圣殿武学", emoji: "🔯", value: 1000000, tags: ["秘籍"], grade: 5, lvls: 9, desc: "飞升之后世界全部法术传承，六星之兆。" },
  sixiang:  { name: "四象大阵",   emoji: "🐯", value: 800000,  tags: ["秘籍"], grade: 5, lvls: 6, desc: "太古人族的镇族底牌。" },
  zhangliu: { name: "丈六金身",   emoji: "🙏", value: 400000,  tags: ["秘籍"], grade: 5, lvls: 6, desc: "佛教至高神通，投资人契约附赠。" },
  zhenlong: { name: "真龙奶",     emoji: "🥛", value: 200000,  tags: ["丹药"], desc: "石村的硬通货，朱雀喝了都上瘾。" },
});

/* ---------------- 新增客户 ---------------- */
Object.assign(CUSTOMERS, {
  yingzheng: {
    name: "嬴政", emoji: "🐉", world: "秦时明月 · 千古一帝", budget: 20000,
    need: ["神兵", "丹药", "秘籍"],
    intro: "孤闻万界楼有长生之药、诛神之剑？开个价，孤有的是价值点。",
    loves: ["xuanyuan", "dahuan"],
    pay: ["zhubao"],
    unlock: (s) => s.shopLevel >= 3,
  },
  saodi: {
    name: "扫地僧", emoji: "🧘", world: "天龙八部 · 少林藏经阁", budget: 12000,
    need: ["秘籍", "丹药"],
    intro: "老衲一百多岁了……不能再等了。施主，那卷培元功可否卖老衲？",
    loves: ["peiyuan"],
    pay: ["xisui"],
    unlock: (s) => s.shopLevel >= 3,
  },
  heshen: {
    name: "和珅", emoji: "🪙", world: "清朝 · 内务府总管", budget: 20000,
    need: ["丹药", "秘籍"],
    intro: "和某别的不多，就是钱多！正德皇帝出多少，我加一成！",
    loves: ["dahuan"],
    pay: ["zhubao"],
    unlock: (s) => s.shopLevel >= 3,
  },
  yanchixia: {
    name: "燕赤霞", emoji: "🧙", world: "倩女幽魂 · 游方道士", budget: 6000,
    need: ["神兵", "丹药"],
    intro: "兰若寺妖气冲天，道爷我需要把称手的家伙什。",
    loves: ["lingmu"],
    pay: ["fulu", "fulu"],
    unlock: (s) => s.shopLevel >= 3,
  },
  kaite: {
    name: "迈特凯", emoji: "💪", world: "火影忍者 · 木叶苍蓝野兽", budget: 20000,
    need: ["丹药", "食物"],
    intro: "青春就是热血！这瓶强化药液，我用八门遁甲的秘诀跟你换！",
    loves: ["medicine"],
    pay: ["yingshen"],
    unlock: (s) => s.shopLevel >= 3,
  },
  xiongba: {
    name: "雄霸", emoji: "🌪️", world: "风云 · 天下会帮主", budget: 30000,
    need: ["丹药", "秘籍", "神兵"],
    intro: "我雄霸想要的，从来没有得不到的！金子？管够！",
    loves: ["longyuan"],
    pay: ["gold_ingot", "gold_ingot"],
    unlock: (s) => s.shopLevel >= 4,
  },
  qiaofeng: {
    name: "乔峰", emoji: "🍷", world: "天龙八部 · 丐帮帮主", budget: 12000,
    need: ["美酒", "食物"],
    intro: "大碗喝酒，大块吃肉！乔某生平就好这一口，痛快！",
    loves: ["baijiu"],
    pay: ["dagou"],
    unlock: (s) => s.shopLevel >= 4,
  },
  mingren: {
    name: "漩涡鸣人", emoji: "🍜", world: "火影忍者 · 下忍", budget: 6000,
    need: ["食物"],
    intro: "我要吃一乐拉面！大叔被你们美食街挖走了，我要吃个够再说！",
    loves: ["laoganma", "noodle"],
    pay: ["yingshen"],
    unlock: (s) => s.shopLevel >= 4,
  },
  yangguang: {
    name: "隋炀帝杨广", emoji: "🏛️", world: "大唐双龙传 · 大隋皇帝", budget: 60000,
    need: ["丹药", "神兵", "美酒"],
    intro: "朕要慈航静斋好看！这些内库珍宝，换你楼里的神药神剑。",
    loves: ["jinglei"],
    pay: ["zhubao", "zhubao"],
    unlock: (s) => s.shopLevel >= 4,
  },
  yuhuang: {
    name: "玉皇大帝", emoji: "☁️", world: "西游 · 三界之主", budget: 300000,
    need: ["丹药", "奇书", "秘籍"],
    intro: "朕的蟠桃园都保不住了……爱卿，可还有保命的法子？",
    loves: ["sannian", "yingshen"],
    pay: ["sannian"],
    unlock: (s) => s.shopLevel >= 5,
  },
  gangtiexia: {
    name: "钢铁侠", emoji: "🤖", world: "漫威 · 复仇者", budget: 150000,
    need: ["奇物", "丹药", "秘籍"],
    intro: "I am Iron Man. 听说你们这里能复活人？价格好商量，铠甲管够。",
    loves: ["wangling"],
    pay: ["kaijia", "kaijia"],
    unlock: (s) => s.shopLevel >= 5,
  },
  huluwa: {
    name: "葫芦娃", emoji: "🌈", world: "葫芦娃 · 爷爷的救兵", budget: 2000,
    need: ["食物", "丹药"],
    intro: "爷爷！爷爷被妖精抓走啦！这葫芦跟你换吃的！",
    loves: ["kfc"],
    pay: ["hulu"],
    unlock: (s) => s.shopLevel >= 5,
  },
  shihao: {
    name: "石昊", emoji: "👶", world: "完美世界 · 荒天帝（童年）", budget: 100000,
    need: ["食物", "丹药"],
    intro: "兽奶换情报，纯天然无污染。大哥哥，要买四楼优惠商品的位置吗？",
    loves: ["laoganma"],
    pay: ["zhenlong"],
    unlock: (s) => s.shopLevel >= 6,
  },
  yefan: {
    name: "叶凡", emoji: "🚐", world: "遮天 · 未来天帝", budget: 500000,
    need: ["秘籍", "丹药"],
    intro: "我想签一份投资人契约——遮天世界的宝物，五五分成，怎么样？",
    loves: ["tuntian", "bumie"],
    pay: ["sannian"],
    unlock: (s) => s.shopLevel >= 6,
  },
});

/* ---------------- 新增位面世界 ---------------- */
Object.assign(WORLDS, {
  zhushen: {
    name: "主神空间", emoji: "🌀",
    desc: "无限恐怖的世界。轮回者的奖励点，能兑换各种修真功法玉简。",
    unlock: (s) => s.shopLevel >= 2,
    unlockText: "二星店主后开启时空定位",
    events: [
      {
        id: "yujian", title: "主神广场 · 兑换大厅", story: true, quest: 11,
        text: "轮回者李萧毅签订了保命契约：万界楼保他不死，奖励点九成归万界楼。兑换大厅的玉简架上，修真功法琳琅满目。",
        options: [
          {
            label: "全套兑换：培元功、青木诀、炼灵诀、鬼煞功（-5600 价值点）",
            vpCost: 5600,
            result: { text: "四卷玉简到手！系统突然响起：'万界楼商品已经满足系统需求……'升级的种子埋下了。", items: [["peiyuan", 1], ["qingmu", 1], ["lianling", 1], ["guisha", 1]], quest: 11 },
          },
          { label: "只换两本（-3000 价值点）", vpCost: 3000, result: { text: "培元功与青木诀到手，细水长流。", items: [["peiyuan", 1], ["qingmu", 1]] } },
          { label: "再看看", result: { text: "兑换大厅里轮回者们进进出出，都在为万界楼打工。" } },
        ],
      },
      {
        id: "shiwang", title: "丧尸世界 · 支线任务",
        text: "借道主神空间来到丧尸世界，街角横七竖八的丧尸晶体无人问津。",
        options: [
          { label: "捡晶石（有风险）", risk: { power: 2, failText: "尸群暴动！你被系统闪回，鞋都跑掉了一只。" }, result: { text: "丧尸晶体到手，精神力微微一涨。", items: [["sangshi", 2]] } },
          { label: "收队", result: { text: "安全第一。" } },
        ],
      },
    ],
  },
  yinv: {
    name: "倩女幽魂世界", emoji: "👻",
    desc: "兰若寺的夜，树妖姥姥与聂小倩。道士、妖怪、符箓的市场。",
    unlock: (s) => s.shopLevel >= 3,
    unlockText: "三星店主后开启时空定位",
    events: [
      {
        id: "lanruosi", title: "兰若寺 · 树妖姥姥", story: true,
        text: "夜宿兰若寺，燕赤霞正与树妖姥姥对峙，千年树妖的枝条遮天蔽日。",
        options: [
          { label: "助燕赤霞除妖", risk: { power: 3, failText: "树妖枝条如龙，你被抽飞出墙，亏得系统闪人。" }, result: { text: "树妖灰飞烟灭，一团精纯的千年妖力被你收入囊中！燕赤霞抱拳：'道友高义！'", items: [["huoli2", 1]], vp: 2000 } },
          { label: "低价收妖力结晶", cost: 3000, result: { text: "你从小妖手里批量收购妖力结晶，转手就是三倍价。", items: [["huoli", 3]] } },
          { label: "夜路不好走", result: { text: "你退回万界楼，只留下一句'告辞'。" } },
        ],
      },
      {
        id: "chenghuang", title: "郭北县 · 城隍庙会",
        text: "庙会夜市上，游方道士兜售朱砂符箓。",
        options: [
          { label: "包圆符箓", cost: 2000, result: { text: "一百张符箓到手，妖怪们的抢手货。", items: [["fulu", 10]] } },
          { label: "看看就走", result: { text: "夜风吹过，纸钱纷飞。" } },
        ],
      },
    ],
  },
  haizeiwang: {
    name: "海贼王世界", emoji: "🏴",
    desc: "顶上战争时期，大海贼时代。恶魔果实遍地是天价。",
    unlock: (s) => s.shopLevel >= 3,
    unlockText: "三星店主后开启时空定位",
    events: [
      {
        id: "dingzhan", title: "马林梵多 · 顶上战争", story: true, quest: 14,
        text: "宙斯号战舰降临海军总部。天龙人皮里修斯圣宣读审判：缉拿七武海，就地格杀赤犬！",
        options: [
          { label: "宣读审判，提取果实（风险大）", risk: { power: 3, failText: "大将们全力反击！你带着半船收成仓皇撤离。", failHalf: true }, result: { text: "赤犬倒下，岩浆果实从他体内提取而出；白胡子海贼团还送来了谢礼霜霜果实！万界楼威名响彻大海！", items: [["yanjiang", 1], ["shuangshuang", 1]], quest: 14 } },
          { label: "中立采买果实（-3000 价值点）", vpCost: 3000, result: { text: "你从黑市收了一颗线线果实，闷声发财。", items: [["xianxian", 1]] } },
          { label: "围观就好", result: { text: "白胡子震碎海面的画面，值回票价。" } },
        ],
      },
    ],
  },
  fengyun: {
    name: "风云世界", emoji: "🌪️",
    desc: "高武世界，灵气远超武侠。绝世好剑、四大瑞兽、长生千年的老怪物们。",
    unlock: (s) => s.shopLevel >= 3,
    unlockText: "三星店主后开启时空定位",
    events: [
      {
        id: "shenlong", title: "神州 · 神龙契约", story: true, quest: 13,
        text: "八千年神龙盘踞深渊。你开出条件：龙元与龙血，换妖族功法与万界楼VIP。",
        options: [
          { label: "签订契约（稳）", result: { text: "神龙吐出龙元与龙血！'一千年后，我等你带我去别的世界。'", items: [["longyuan", 1], ["fengxue", 1]], quest: 13 } },
          { label: "硬抢（很大风险）", risk: { power: 5, failText: "神龙一摆尾，你直接被打出了位面，还倒贴了医药费。", loseCny: 10000 }, result: { text: "你竟然真的从龙口下抢到了一枚龙元！", items: [["longyuan", 1]] } },
        ],
      },
      {
        id: "jianzhong", title: "拜剑山庄 · 绝世好剑", story: true,
        text: "绝世好剑出世，天下英雄齐聚。你摸了摸口袋里的价值点。",
        options: [
          { label: "豪掷两万点竞得（-20000 价值点）", vpCost: 20000, result: { text: "绝世好剑到手！顺路还挖走了铸剑师。", items: [["jueshao", 1]] } },
          { label: "结交铸剑师（-3000 价值点）", vpCost: 3000, result: { text: "铸剑师为万界楼打了一把上品灵剑。", items: [["lingmu", 1]] } },
          { label: "看看热闹", result: { text: "步惊云一身黑衣立在雨中，帅是挺帅的。" } },
        ],
      },
      {
        id: "dishitian", title: "天山 · 帝释天", story: true,
        text: "活了一千七百年的帝释天被灰太狼和光头强追得满山跑——万界初级学府的围剿还在继续。",
        options: [
          { label: "联合围剿", risk: { power: 2, failText: "帝释天圣心诀爆发，你被冰封了半天。" }, result: { text: "坦克穿山弹+十万伏特+平底锅，帝释天含泪交出凤血：'别追了！我给还不行吗！'", items: [["fengxue", 1]] } },
          { label: "高价收凤血（-10000 价值点）", vpCost: 10000, result: { text: "帝释天看着价值点，叹了口气交出凤血。", items: [["fengxue", 1]] } },
        ],
      },
    ],
  },
  huoying: {
    name: "火影世界", emoji: "🍥",
    desc: "五大忍村，查克拉与忍术。一乐拉面与大蛇丸的实验室。",
    unlock: (s) => s.shopLevel >= 3,
    unlockText: "三星店主后开启时空定位",
    events: [
      {
        id: "muye", title: "木叶村 · 一乐拉面", story: true,
        text: "鸣人抱着你的腿：'把一乐大叔还给我！'——美食街确实把他挖来了。",
        options: [
          { label: "请鸣人吃顿好的换忍术", result: { text: "鸣人吃饱后大笔一挥：'影分身之术，教你了！这可是万界楼必修无耻战技！'", items: [["yingshen", 1]] } },
          { label: "与大蛇丸合作（-2000 价值点）", vpCost: 2000, result: { text: "大蛇丸以'终身免费实验'入职。影分身之术顺便搞到了。", items: [["yingshen", 1]] } },
          { label: "吃碗面就走", cost: 50, result: { text: "一乐拉面，天下第一。" } },
        ],
      },
    ],
  },
  qinling: {
    name: "秦始皇陵", emoji: "🏺",
    desc: "水银河九层地宫，历代皇帝们围观'自己'陵墓的吃瓜现场。",
    unlock: (s) => s.shopLevel >= 4,
    unlockText: "四星店主后开启时空定位",
    events: [
      {
        id: "daodou", title: "骊山 · 九层地宫", story: true,
        text: "十八铜人挖开盗洞，青铜棺静静停在水银河中央。嬴政在万界楼直播里沉默不语。",
        options: [
          { label: "搬空地宫（风险大）", risk: { power: 4, failText: "机关齐发，水银毒雾弥漫！你抱着半箱文物跑路。", failHalf: true }, result: { text: "轩辕剑出鞘，寒光慑人——'凡帝者持之，可获黄帝传承！'", items: [["xuanyuan", 1], ["gold_ingot", 3]] } },
          { label: "只取轩辕剑（小风险）", risk: { power: 2, failText: "机关暗弩齐发，你只来得及割破袍袖。", loseCny: 5000 }, result: { text: "轩辕剑到手！", items: [["xuanyuan", 1]] } },
        ],
      },
    ],
  },
  xiyuxm: {
    name: "西游降魔篇世界", emoji: "🐒",
    desc: "仙侠世界，灵气远超诛仙。太清圣人、大日如来、灵族天帝在此封圣。",
    unlock: (s) => s.shopLevel >= 4,
    unlockText: "四星店主后开启时空定位",
    events: [
      {
        id: "lingshan", title: "灵山 · 妖王之王", story: true,
        text: "妖王之王孙悟空一巴掌拍碎如来金身，七色山峰镇压五百万年——万界楼的规矩，便是天规。",
        options: [
          { label: "抄录天道德经（-30000 价值点）", vpCost: 30000, result: { text: "天帝、如来、冥王三家各持一份的天道德经，你拿到了拷贝权。", items: [["tiandao", 1]] } },
          { label: "与妖王之王喝一杯", result: { text: "矮矬猴子跟你碰了碰碗：'这酒不错，比灵山的琼浆好喝。'", vp: 3000 } },
        ],
      },
    ],
  },
  manwei: {
    name: "漫威世界", emoji: "🛡️",
    desc: "超级英雄与外星威胁。复仇者联盟正在被洛基心法修炼者追杀。",
    unlock: (s) => s.shopLevel >= 5,
    unlockText: "五星店主后开启时空定位",
    events: [
      {
        id: "fuchouzhe", title: "纽约 · 复仇者求救", story: true,
        text: "洛基心法祸乱全球，复仇者联盟被政府悬赏，走投无路之下敲开了万界楼的门。",
        options: [
          { label: "出手平乱（收益巨大）", risk: { power: 3, failText: "洛基的幻术让你栽了个跟头，赔了不少医药费。", loseCny: 20000 }, result: { text: "你一篇《冰心诀》稳住绿巨人，一篇治愈洛基乱局。钢铁侠当场转账：'一千套铠甲，交个朋友！'", items: [["kaijia", 5]], vp: 50000 } },
          { label: "收下宇宙魔方", result: { text: "特能队队长赵攀抱来宇宙魔方：'用它换一支能压制美国队长的队伍！'", items: [["yumo", 1]] } },
        ],
      },
      {
        id: "luoji", title: "全球 · 洛基心法之乱",
        text: "免费发布的洛基心法让全球疯狂，修炼者正在猎杀超级英雄。",
        options: [
          { label: "顺势兜售解法（-10000 价值点）", vpCost: 10000, result: { text: "你发布克制心法，顺便大赚一笔声望与价值点。", vp: 80000 } },
          { label: "看戏", result: { text: "新闻里，纽约上空又炸出了一朵蘑菇云。" } },
        ],
      },
    ],
  },
  baishe: {
    name: "白蛇传世界", emoji: "🐍",
    desc: "仙侠世界，天界冥界俱全。白素贞的报恩与天庭的蟠桃园。",
    unlock: (s) => s.shopLevel >= 5,
    unlockText: "五星店主后开启时空定位",
    events: [
      {
        id: "pantaoyuan", title: "天庭 · 蟠桃园", story: true,
        text: "你假扮玉帝混入蟠桃园，七仙女还喊你'陛下'。天庭气运因此一分为二。",
        options: [
          { label: "扫荡蟠桃园（风险大）", risk: { power: 4, failText: "真玉帝驾到！你抱着几个桃子狼狈闪人。", failHalf: true }, result: { text: "九千年蟠桃扫荡一空！临走还替玉帝立了个要命的誓。", items: [["pantao", 3], ["sannian", 1]] } },
          { label: "摘几颗就跑", risk: { power: 2, failText: "被巡园仙官发现，只留下两个桃核。" }, result: { text: "几颗蟠桃到手。", items: [["pantao", 1]] } },
        ],
      },
      {
        id: "duanqiao", title: "西湖 · 断桥报恩", story: true,
        text: "白素贞携小青找到你：'救我之人已轮回转世，我还要报恩吗？'",
        options: [
          { label: "助她找到许仙", result: { text: "药铺学徒许仙的人生，即将被打造为巅峰模板。白娘娘含泪奉上谢礼。", items: [["pearl", 3]], vp: 20000 } },
          { label: "婉拒", result: { text: "千里姻缘一线牵，恕不代劳。" } },
        ],
      },
    ],
  },
  zhetian: {
    name: "遮天大世界", emoji: "🚐",
    desc: "九龙拉棺、北斗星域、禁区至尊。万界楼门票最贵的世界。",
    unlock: (s) => s.shopLevel >= 5,
    unlockText: "五星店主后开启时空定位",
    events: [
      {
        id: "jiulong", title: "泰山 · 九龙拉棺", story: true, quest: 16,
        text: "九条龙尸拉着青铜古棺划破天际。你贴出通告：进入吞天魔罐与不灭天功的世界，三万灵点一个名额，生死概不负责。",
        options: [
          { label: "发售棺材票，亲自带队（-30000 价值点）", vpCost: 30000, result: { text: "近百顾客挤进青铜古棺：'希望棺材装得下！'北斗之行满载而归——吞天魔罐与不灭天功入库！", items: [["tuntianGuan", 1], ["tuntian", 1], ["bumie", 1]], quest: 16 } },
          { label: "单独潜入北斗（风险极大）", risk: { power: 5, failText: "禁区至尊睁开了眼！你被吓得当场传送回万界楼。", loseCny: 50000 }, result: { text: "你在荒古禁区边缘捡到了一部不灭天功。", items: [["bumie", 1]] } },
        ],
      },
      {
        id: "yefanq", title: "地球 · 叶凡的契约", story: true,
        text: "叶凡摸着后脑勺走进万界楼：'我想签一份投资人契约。'",
        options: [
          { label: "签投资人契约", result: { text: "契约落笔：红尘仙之前的收获，复制类商品无偿回收，非复制类五五分成。附赠丈六金身一部。", items: [["zhangliu", 1]], vp: 100000 } },
          { label: "再考虑考虑", result: { text: "叶凡挠挠头走了，背影写满了'格局小了'。" } },
        ],
      },
    ],
  },
  wanmei: {
    name: "完美大世界", emoji: "🥛",
    desc: "石村的应劫之人还只是个喝兽奶的娃娃。真龙奶是这里的硬通货。",
    unlock: (s) => s.shopLevel >= 5,
    unlockText: "五星店主后开启时空定位",
    events: [
      {
        id: "shicun", title: "石村 · 兽奶换情报", story: true,
        text: "四五岁的石昊抱着陶碗，眼睛亮晶晶：'四楼优惠商品的位置，换兽奶，童叟无欺！'",
        options: [
          { label: "成交！情报换真龙奶", result: { text: "石昊把万界楼的底细倒背如流。异魔皇与东海龙王为抢你这场拍卖会差点打起来。", items: [["zhenlong", 2]], vp: 50000 } },
          { label: "送他一堆美食", result: { text: "小家伙吃得满嘴流油，临走塞给你一瓶真龙奶：'下次带老的来！'", items: [["zhenlong", 1]] } },
        ],
      },
    ],
  },
  feisheng: {
    name: "飞升之后世界", emoji: "🌌",
    desc: "太古人族与诸神的世界。风云无忌正在这里创造修炼奇迹。",
    unlock: (s) => s.shopLevel >= 5,
    unlockText: "五星店主后开启时空定位",
    events: [
      {
        id: "taigu", title: "太古 · 白虎至尊", story: true,
        text: "太古人族的镇族底牌是四象大阵。你亮出自己的周天星斗大阵：'先体验，后付款。'",
        options: [
          { label: "以阵换阵（-100000 价值点）", vpCost: 100000, result: { text: "四象大阵到手！太古人族惊为天人，生意从此做大了。", items: [["sixiang", 1]] } },
          { label: "只卖不买", result: { text: "周天星斗大阵的图纸拍出天价，太古人族排队下单。", vp: 200000 } },
        ],
      },
      {
        id: "fashu", title: "万界楼 · 法术圣殿", story: true, quest: 17,
        text: "风云无忌把法术圣殿的全部武学刻录在魔幻手机里，郑重放在交易台上：'店主，这是我的投名状。'",
        options: [
          { label: "全盘接收（-200000 价值点）", vpCost: 200000, result: { text: "法术圣殿全部武学入库！就在这一刻——「叮咚！系统满足升级需求，是否升级？」", items: [["faxue", 1]], quest: 17 } },
          { label: "分批收购", result: { text: "你收了三成武学，剩下的等下次。" } },
        ],
      },
    ],
  },
});

/* ---------------- 任务链扩展（9~17）---------------- */
QUESTS.push(
  { id: 9,  chapter: "第21章",  title: "万界拍卖会", desc: "举办一场万界拍卖会，让全万界的顾客为你抬价。", reward: { vp: 500 } },
  { id: 10, chapter: "第142章", title: "三星店主·万界商城", desc: "累计上架 25 种商品、完成 35 笔交易后，响应系统升级。", reward: { tokens: 2 } },
  { id: 11, chapter: "第138章", title: "主神空间·修真玉简", desc: "在主神空间兑换修真功法玉简。", reward: { vp: 2000 } },
  { id: 12, chapter: "第69章",  title: "位面代理人", desc: "招募全部四位掌柜伙计。", reward: { vp: 3000 } },
  { id: 13, chapter: "第289章", title: "风云·神龙契约", desc: "前往风云世界，取得神龙馈赠的龙元。", reward: { vp: 10000 } },
  { id: 14, chapter: "第220章", title: "恶魔果实", desc: "从海贼王世界带回恶魔果实。", reward: { vp: 10000 } },
  { id: 15, chapter: "第528章", title: "五星店主·天晶之心", desc: "累计上架 58 种商品、完成 120 笔交易，并与系统摊牌后升级。", reward: { tokens: 2 } },
  { id: 16, chapter: "第723章", title: "遮天·九龙拉棺", desc: "发售棺材票，带队前往遮天大世界淘宝。", reward: { vp: 50000 } },
  { id: 17, chapter: "第938章", title: "六星店主·万道盟约", desc: "累计上架 68 种商品、完成 160 笔交易，取得法术圣殿武学后升级。", reward: {} }
);

/* ---------------- 境界扩展 ---------------- */
REALMS.push(
  { name: "大宗师", pts: 70 },
  { name: "陆地神仙", pts: 95 },
  { name: "洞天境", pts: 125 },
  { name: "涅槃境", pts: 160 },
  { name: "渡劫境", pts: 200 },
  { name: "真仙", pts: 250 },
  { name: "金仙", pts: 310 },
  { name: "大罗", pts: 380 },
  { name: "混元大罗", pts: 460 }
);

/* ---------------- 员工（位面代理人）---------------- */
const WORKERS = {
  fanli:      { name: "范蠡",   emoji: "🧮", cost: 8000,  desc: "商圣坐镇，卖货议价 +8%。" },
  micu:       { name: "糜竺",   emoji: "🎪", cost: 5000,  desc: "徐州首富任拍卖师，拍卖会抽成 +15%。" },
  buma:       { name: "布玛",   emoji: "🔬", cost: 3000,  desc: "天才科学家管采购，现代进货半价。" },
  shenwansan: { name: "沈万三", emoji: "🚚", cost: 6000,  desc: "首富管家理外交，客流 +30%，快递订单更多。" },
};

/* ---------------- 拍卖会买家（按星级）---------------- */
const AUCTION_BUYERS = {
  2: ["鳌拜", "东方不败", "韦小宝", "康熙"],
  3: ["秦始皇嬴政", "和珅", "成吉思汗", "燕赤霞", "千年猪妖王", "正德皇帝朱厚照"],
  4: ["雄霸", "帝释天", "宇智波带土", "杰尔夫", "隋炀帝杨广", "艾斯德斯"],
  5: ["玉皇大帝", "钢铁侠", "狠人大帝", "杀阡陌", "玉皇大天尊", "郑吒"],
  6: ["石昊", "叶凡", "辰战", "风云无忌", "太古人族白虎至尊", "三界混元集团"],
};
const AUCTION_EVENTS = [
  "台下两位李世民争相抬价，一个说'给承乾买的'，一个说'双重命格才能保命'！",
  "'你是猪吗？！'——蒙哥大汗话音未落，台下真的坐着一头猪妖，他爹是千年妖王。",
  "和珅与美国副总统当场斗富，金砖雨落满大堂！",
  "四五十位皇帝齐刷刷起立——原来是潜龙命格上场了。",
  "扫地僧暗中抬价：'老衲不能再等了！'",
  "玉皇大帝掏出影分身，14800 个分身同时举牌！",
];

/* ---------------- 万界楼等级 ---------------- */
const SHOP_LEVELS = {
  1: { name: "万界楼 · 出租房（20㎡）", emoji: "🏠", desc: "不足二十平的出租房，泡面箱子还没搬走。" },
  2: { name: "万界楼 · 明雅别墅", emoji: "🏯", desc: "巍峨楼阁，八根雕龙玉柱，水晶柜台琳琅满目。" },
  3: { name: "万界商城 · 虚空之城", emoji: "🏙️", desc: "城高十二丈、长宽千丈，白云环绕。美食街与娱乐广场开业了。" },
  4: { name: "万界商城 · 四层楼阁", emoji: "🏬", desc: "万界楼拔高至四层，天地元气与诸界相连。" },
  5: { name: "万界楼 · 五层洞天", emoji: "🗼", desc: "五层楼阁，灵气不下于仙侠洞天福地。天晶悬于顶层。" },
  6: { name: "万界楼 · 万道盟约", emoji: "🌌", desc: "六层楼阁直入云霄。万界楼连通诸天，再无超限人物。" },
};
const STAR_CONDITIONS = {
  3: { known: 25, trades: 35 },
  4: { known: 40, trades: 70, story: "fengyun:shenlong" },
  5: { known: 58, trades: 120, choice: true },
  6: { known: 68, trades: 160, story: "feisheng:fashu" },
};
const STAR_PERKS = {
  3: "三星店主权限：售出抽成提升、位面采购每百天开辟新世界、实习员工名额增至十人、虚空之中凝聚万界商城（美食街+娱乐广场），可举办黄级拍卖会。",
  4: "四星店主权限：万界楼内天地元气与任一连通世界相同；售出抽成提升至4%，回收可得四成；连通诛仙、龙珠、西游降魔篇世界；可凝聚万界信息平台（快递通道）。",
  5: "五星店主权限：一、可以随时解除和系统的绑定关系；二、回收商品可得五成价值；三、获得交易总额利润的十分之一；四、超限人物进楼，可花费价值点进入其世界采购。员工名额不再限定，万界楼升至五层，灵气如洞天福地。",
  6: "六星店主权限：一、回收商品可得六成价值；二、获得交易总额利润的八分之一；三、任何世界人物进入万界楼，万界楼即连通该世界——再无超限人物；四、时间加速：每年一个世界名额。",
};

/* ---------------- 缺失商品来源补充（可重复事件）---------------- */
WORLDS.zhushen.events.push({
  id: "danfa", title: "兑换大厅 · 丹法双修",
  text: "兑换大厅深处还摆着两套大部头：修真丹录与法诀大全。",
  options: [
    { label: "打包兑换（-6000 价值点）", vpCost: 6000, result: { text: "炼丹与法诀的入门大道，到手。", items: [["danlu", 1], ["fajue", 1]] } },
    { label: "只看不换", result: { text: "轮回者们的奖励点，终究要给万界楼打工。" } },
  ],
});
WORLDS.yinv.events.push({
  id: "leifa", title: "城隍庙 · 雷法残卷",
  text: "一位渡劫失败的老道士在庙后摆摊，兜售自创的先天惊雷功。",
  options: [
    { label: "重金求购（-8000 价值点）", vpCost: 8000, result: { text: "老道士捧着价值点老泪纵横：'知音啊！'", items: [["jinglei", 1]] } },
    { label: "点头致意", result: { text: "深藏功与名。" } },
  ],
});
WORLDS.haizeiwang.events.push({
  id: "heishi", title: "香波地群岛 · 黑市果实贩子",
  text: "人口拍卖场的后巷，一个形迹可疑的贩子压低声音：'恶魔果实，要吗？'",
  options: [
    { label: "买下两颗（-8000 价值点）", vpCost: 8000, result: { text: "木木果实与线线果实到手——蒙哥要是知道这价格，能气死。", items: [["mumu", 1], ["xianxian", 1]] } },
    { label: "摇头离开", result: { text: "贩子嘟囔着'不识货'缩回了巷子里。" } },
  ],
});
WORLDS.fengyun.events.push({
  id: "xiaosanxiao", title: "风云 · 笑三笑",
  text: "活了四千年的笑三笑主动找上门：'龙龟之血，换一个加入万界楼的机会。'",
  options: [
    { label: "成交（-10000 价值点）", vpCost: 10000, result: { text: "龙龟之血入手，笑三笑成为万界楼在风云世界的眼睛。", items: [["longgui", 1]] } },
    { label: "婉拒", result: { text: "老者笑笑，飘然而去。此人果然姓笑。" } },
  ],
});
WORLDS.qinling.events.push({
  id: "cedian", title: "地宫 · 侧殿密藏",
  text: "侧殿的经架上，一册黑皮书《亡灵圣经》散发着幽光。",
  options: [
    { label: "取走圣经（有风险）", risk: { power: 3, failText: "圣经理的亡灵发出低语，你头疼欲裂地退了出去。" }, result: { text: "亡灵圣经到手——复活血肉，每人限一次。", items: [["wangling", 1]] } },
    { label: "敬而远之", result: { text: "有些书，不看也罢。" } },
  ],
});
WORLDS.xiyuxm.events.push({
  id: "canzhao", title: "五指山 · 残页",
  text: "山脚下捡到一册残破掌法，封皮上依稀可辨'如来神掌'四字。",
  options: [
    { label: "抄录全本（-8000 价值点）", vpCost: 8000, result: { text: "如来神掌，佛光普照——朱无视看了都要喊祖师。", items: [["rulai", 1]] } },
    { label: "只拍张照片", result: { text: "山风吹过，残页哗哗作响。" } },
  ],
});
WORLDS.shaDiao.events.push({
  id: "yaoju", title: "少林寺 · 药局",
  text: "少林药局对外开放，大还丹限量供应——和珅听说后已经连来了三趟。",
  options: [
    { label: "扫货大还丹（-3000 价值点）", vpCost: 3000, result: { text: "十颗大还丹到手，武林人士的续命神药。", items: [["dahuan", 10]] } },
    { label: "算了", result: { text: "药香扑鼻，你深吸一口气走了。" } },
  ],
});
/* ============================================================
 * 大重构：物品分类 / 世界偏好 / 随机NPC / 限购规则
 * ============================================================ */

/* ---------------- 物品分类 ---------------- */
const CATS = {
  gongfa:  { name: "功法",     emoji: "📜" },
  wuqi:    { name: "武器",     emoji: "⚔️" },
  danyao:  { name: "丹药",     emoji: "💊" },
  xuemai:  { name: "血脉",     emoji: "🩸" },
  tiancai: { name: "天材地宝", emoji: "🌿" },
  kuangshi:{ name: "矿石",     emoji: "💎" },
  shiwu:   { name: "食物",     emoji: "🍖" },
  meijiu:  { name: "美酒",     emoji: "🍶" },
  xiandai: { name: "现代物品", emoji: "📱" },
  qiwu:    { name: "奇物",     emoji: "🔮" },
  zhenbao: { name: "珍宝",     emoji: "🏆" },
};

/* 每件物品的归类 */
const ITEM_CAT = {
  noodle: "shiwu", kfc: "shiwu", laoganma: "shiwu", baijiu: "meijiu",
  lighter: "qiwu", torch: "qiwu", musicbox: "qiwu", medicine: "danyao",
  toy: "qiwu", book: "gongfa", phone: "qiwu",
  saiyan: "xuemai", xiantou: "danyao", capsule: "qiwu",
  zixia: "gongfa", hunyuan: "gongfa", duoming: "gongfa", huashan: "gongfa",
  jiuyang: "gongfa", jinzhong: "gongfa", yijin: "gongfa",
  shaolin_quan: "gongfa", jingang_zhang: "gongfa", tiebu: "gongfa",
  shenzhang: "gongfa", tongzi: "gongfa", henglian: "gongfa", Boxin: "gongfa",
  bixie: "gongfa", peiyuan: "gongfa", qingmu: "gongfa", lianling: "gongfa",
  guisha: "gongfa", danlu: "gongfa", fajue: "gongfa", xisui: "gongfa",
  rulai: "gongfa", jinglei: "gongfa", dagou: "gongfa", yingshen: "gongfa",
  tiandao: "gongfa", fenjue: "gongfa", tuntian: "gongfa", bumie: "gongfa",
  zhoutian: "gongfa", faxue: "gongfa", sixiang: "gongfa", zhangliu: "gongfa",
  luoji: "gongfa",
  lingmu: "wuqi", jueshao: "wuqi", xuanyuan: "wuqi", shenghuo: "wuqi",
  tuntianGuan: "wuqi", longding: "wuqi", yumo: "qiwu", shenge: "qiwu",
  huoli: "danyao", huoli2: "danyao", dahuan: "danyao",
  longyuan: "tiancai", fengxue: "tiancai", longgui: "tiancai",
  pantao: "tiancai", sannian: "tiancai", zhenlong: "tiancai", yaocai: "tiancai",
  sangshi: "kuangshi",
  mumu: "qiwu", yanjiang: "qiwu", shuangshuang: "qiwu", xianxian: "qiwu",
  fulu: "qiwu", hulu: "qiwu", wangling: "gongfa",
  gold_ingot: "zhenbao", zhubao: "zhenbao", pearl: "zhenbao", kaijia: "zhenbao",
};
/* 功法/武器/奇物/现代物品：每位 NPC 限购 1 份 */
const ONCE_CATS = { gongfa: 1, wuqi: 1, qiwu: 1, xiandai: 1 };
Object.keys(ITEMS).forEach(id => {
  const it = ITEMS[id];
  it.cat = ITEM_CAT[id] || "qiwu";
  it.once = !!ONCE_CATS[it.cat]; /* 仅功法/武器/奇物限购；现代食物丹药可重复购买 */
});

/* ---------------- 新增矿石类商品 ---------------- */
Object.assign(ITEMS, {
  zhenjin:  { name: "振金矿石",   emoji: "🪨", value: 60000,  tags: ["矿石"], desc: "漫威世界最硬的金属，吸收动能。科技与炼器两界疯抢。" },
  nengliang:{ name: "能量晶体",   emoji: "💠", value: 8000,   tags: ["矿石"], desc: "龙珠位面的高纯度能源，机器与修士都爱。" },
  xuantie:  { name: "玄铁矿石",   emoji: "⛰️", value: 5000,   tags: ["矿石"], desc: "武侠世界铸剑圣材，玄铁重剑的原料。" },
});
ITEMS.zhenjin.cat = "kuangshi"; ITEMS.nengliang.cat = "kuangshi"; ITEMS.xuantie.cat = "kuangshi";

/* 补矿石来源事件（可重复） */
WORLDS.manwei.events.push({
  id: "zhenjinkuang", title: "瓦坎达边境 · 振金矿脉",
  text: "瓦坎达的边境矿脉在夜色下泛着幽紫的光。",
  options: [
    { label: "盗采振金（风险大）", risk: { power: 4, failText: "瓦坎达卫队的能量矛差点把你留在原地。", loseCny: 30000 }, result: { text: "一批振金矿石到手！全宇宙的科技势力都想要的硬通货。", items: [["zhenjin", 2]] } },
    { label: "以物易物（-20000 价值点）", vpCost: 20000, result: { text: "用两部功法换到了矿石开采权。", items: [["zhenjin", 1]] } },
  ],
});
WORLDS.longzhu.events.push({
  id: "nengliangjing", title: "西都 · 能源公司",
  text: "胶囊公司的地下仓库里堆着高纯度能量晶体。",
  options: [
    { label: "批量收购（-5000 价值点）", vpCost: 5000, result: { text: "能量晶体十枚入手，末日世界和科技世界的硬通货。", items: [["nengliang", 10]] } },
    { label: "交换现代电池（-20 华夏币）", cost: 20, result: { text: "几节五号电池换来两枚晶体，布尔玛直呼暴利。", items: [["nengliang", 2]] } },
  ],
});
WORLDS.shaDiao.events.push({
  id: "xuantiek", title: "大漠 · 铁矿行商",
  text: "大漠商队里有人兜售深山挖出的玄铁矿石。",
  options: [
    { label: "买下矿石（-2000 华夏币）", cost: 2000, result: { text: "几块玄铁矿石到手，铸剑师们看了走不动路。", items: [["xuantie", 5]] } },
    { label: "砍价失败", result: { text: "行商咬死价格，一分不让。" } },
  ],
});

/* ---------------- 客户世界偏好 ---------------- */
const CUST_PREF = {
  goku: ["shiwu", "danyao", "xuemai", "kuangshi"],
  yue: ["gongfa", "danyao", "xuemai", "tiancai"],
  guojing: ["shiwu", "meijiu", "gongfa", "wuqi"],
  huangrong: ["qiwu", "shiwu", "zhenbao", "meijiu"],
  linghu: ["meijiu", "danyao", "gongfa"],
  bulma: ["xiandai", "qiwu", "kuangshi"],
  zhangwuji: ["danyao", "shiwu", "gongfa", "tiancai"],
  caocao: ["gongfa", "meijiu", "qiwu", "zhenbao"],
  lvbu: ["meijiu", "danyao", "wuqi"],
  dongzhuo: ["danyao", "qiwu", "zhenbao"],
  weixiaobao: ["qiwu", "gongfa", "meijiu", "zhenbao"],
  yingzheng: ["wuqi", "danyao", "gongfa", "zhenbao"],
  saodi: ["gongfa", "danyao", "tiancai"],
  heshen: ["danyao", "gongfa", "zhenbao"],
  yanchixia: ["wuqi", "danyao", "qiwu"],
  kaite: ["danyao", "shiwu", "gongfa"],
  xiongba: ["danyao", "gongfa", "wuqi", "tiancai"],
  qiaofeng: ["meijiu", "shiwu", "gongfa"],
  mingren: ["shiwu", "gongfa", "danyao"],
  yangguang: ["danyao", "wuqi", "meijiu", "zhenbao"],
  yuhuang: ["danyao", "gongfa", "tiancai", "qiwu"],
  gangtiexia: ["qiwu", "danyao", "kuangshi", "xiandai"],
  huluwa: ["shiwu", "danyao", "qiwu"],
  shihao: ["shiwu", "danyao", "tiancai", "xuemai"],
  yefan: ["gongfa", "danyao", "tiancai", "wuqi"],
};
Object.keys(CUSTOMERS).forEach(id => {
  CUSTOMERS[id].pref = CUST_PREF[id] || ["qiwu", "danyao"];
  CUSTOMERS[id].main = true; // 命名客户均为剧情NPC（功法限购豁免）
});

/* ---------------- 随机NPC池（按世界类型）---------------- */
const RANDOM_GROUPS = [
  {
    key: "wuxia", name: "武侠江湖", emoji: ["🗡️", "🥋", "🧗"],
    names: ["华山弟子", "丐帮七袋弟子", "镖头", "游侠", "青城派剑客", "铸剑师", "药铺掌柜"],
    pref: ["gongfa", "tiancai", "wuqi", "danyao", "meijiu"],
    unlock: (s) => s.shopLevel >= 2,
    budget: [200, 2000],
  },
  {
    key: "xiuxian", name: "修真界", emoji: ["🧝", "🧙", "☯️"],
    names: ["青云门弟子", "炼气期修士", "散修", "炼丹师", "宗门执事"],
    pref: ["tiancai", "danyao", "gongfa", "kuangshi"],
    unlock: (s) => s.shopLevel >= 3,
    budget: [2000, 30000],
  },
  {
    key: "keji", name: "科技世界", emoji: ["🔬", "🧑‍🚀", "🛠️"],
    names: ["科学家", "工程师", "能源公司采购", "收藏家"],
    pref: ["xiandai", "qiwu", "kuangshi"],
    unlock: (s) => s.shopLevel >= 3,
    budget: [1000, 20000],
  },
  {
    key: "mori", name: "末日世界", emoji: ["🧟", "🪖", "🚧"],
    names: ["幸存者", "佣兵队长", "难民营管事", "拾荒者"],
    pref: ["shiwu", "kuangshi", "xiandai", "danyao"],
    unlock: (s) => s.shopLevel >= 3,
    budget: [300, 8000],
  },
  {
    key: "yaoguai", name: "妖界", emoji: ["🦊", "🐍", "👺"],
    names: ["小妖", "狐妖", "山精", "鼠妖商贩", "树妖分身"],
    pref: ["danyao", "xuemai", "tiancai", "qiwu"],
    unlock: (s) => s.shopLevel >= 3,
    budget: [500, 10000],
  },
  {
    key: "chaoting", name: "古代朝廷", emoji: ["👑", "🏛️", "🪙"],
    names: ["内库太监", "户部侍郎", "古董商", "郡王"],
    pref: ["zhenbao", "danyao", "gongfa", "meijiu"],
    unlock: (s) => s.stats.worldTrips.sanguo > 0,
    budget: [3000, 80000],
  },
  {
    key: "gaowu", name: "高武位面", emoji: ["🐒", "🍥", "🏴"],
    names: ["赛亚人战士", "海贼船长", "上忍", "武道家"],
    pref: ["shiwu", "danyao", "xuemai", "wuqi"],
    unlock: (s) => s.shopLevel >= 4,
    budget: [5000, 120000],
  },
  {
    key: "xianjie", name: "仙界", emoji: ["☁️", "🌠", "🕉️"],
    names: ["天兵什长", "仙官", "巡山力士", "蟠桃园仙娥"],
    pref: ["tiancai", "danyao", "gongfa", "qiwu"],
    unlock: (s) => s.shopLevel >= 5,
    budget: [20000, 500000],
  },
];
const RANDOM_SURNAMES = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "胡", "马", "郭", "白"];

/* ---------------- 货架配置 ---------------- */
const SHELF_CONFIG = {
  unlockLevel: 3,
  slots: 4,
  baseChance: 0.5,      // 定价=系统估价时的每跳成交率
  tickMs: 15000,        // 货架结算间隔
};
