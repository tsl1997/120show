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
    unlockText: "试玩版后续开放：独孤求败的传承等着你",
    events: [],
  },
  luding: {
    name: "鹿鼎记世界", emoji: "🏯",
    desc: "韦小宝的江湖，四十二章经、龙脉宝藏……",
    unlock: () => false,
    unlockText: "试玩版后续开放：小宝已经在攒路费了",
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
