/* ================================================================
   两界人生 · 物品表（ITEMS）+ 图鉴分类（CATS）
   来源：game/xiandai/doc/2用户设计初稿.md
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 物品表 ----------------
   id: 唯一标识（英文，不改）
   name/unit/tags 同前
   cat: 图鉴分类（见 CATS）
   use: 自用效果（背包里查看才显示）{hp,mood,charm,cap}
   exp: true=消耗品/食物，背包显示"用"按钮
   hidden: 仅隐藏商店出售
   ticket: 80年代购买所需票据
   tickNeed: 饭店主食粮票消耗量
   strong: 黑市强子收购价 {price,priceHi}
   sell/sellHi: 现代收藏价（当天随机）
   material: true=布料
   charm: 服装成品魅力加成
   nation/origin: 国籍/产地
   modern: 现代网购价（阿狸bb）；price80: 80年代参考价
   note: 说明文字
   属性标签带数字=等级（如"奢侈品3"），决定物品名颜色
----------------------------------------------- */
const ITEMS = {
  /* ---------- 现代 · 小卖铺（老王头） ---------- */
  soda:   { name:"汽水",   unit:"瓶", cat:"食物", tags:["食物","流行"], use:{hp:20,mood:10}, exp:true, strong:{price:5, priceHi:8}, note:"解渴提神；80年代流行饮料" },
  latiao: { name:"辣条",   unit:"包", cat:"食物", tags:["食物","稀奇"], use:{hp:10,mood:5},  exp:true, strong:{price:3, priceHi:5}, note:"麻辣解馋；80年代稀奇零食" },
  flashlight:{ name:"手电筒", unit:"个", cat:"电子", tags:["日用品","电子"], use:{note:"带回80年代卖给黑市"}, exp:false, strong:{price:25, priceHi:35}, note:"80年代电子紧俏货，卖给黑市" },
  battery:{ name:"电池",   unit:"个", cat:"电子", tags:["日用品","电子"], use:{note:"与手电筒配套，卖给黑市"}, exp:false, strong:{price:3, priceHi:5}, note:"和手电筒搭配出售" },
  sugar:  { name:"白糖",   unit:"斤", cat:"补品", tags:["食物","补品"], use:{hp:40,mood:35}, exp:true, hidden:true, strong:{price:15, priceHi:20}, note:"可卖黑市，或送孕妇张姨/王大姐" },

  /* ---------- 80年代 · 粮店（张姨） ---------- */
  corn:   { name:"棒子面", unit:"斤", cat:"食物", tags:["粗粮","食物"], use:{hp:10,mood:-5}, exp:true, ticket:"grain", sell:3,note:"粗粮；只吃粗粮会营养不良" },
  noodle: { name:"挂面",   unit:"斤", cat:"食物", tags:["细粮","食物"], use:{hp:50,mood:30}, exp:true, ticket:"sgrain", sell:10,note:"细粮，好吃" },

  /* ---------- 80年代 · 供销社（王大姐） ---------- */
  cotton: { name:"棉布",   unit:"0.5米", cat:"布料", tags:["基础物质"], material:true, ticket:"cloth", sell:2,exp:false, note:"1块=0.5米，做衣服用（做一身约需4块）" },
  dacron: { name:"的确良", unit:"0.5米", cat:"布料", tags:["流行"], material:true, ticket:"scloth",sell:20, exp:false, note:"1块=0.5米，流行布料，做时装用" },
  liquor: { name:"散酒",   unit:"两", cat:"酒类", tags:["食物"], use:{hp:10,mood:3}, exp:true, sell:10,ticket:"wine", note:"粮食酒" },
  tobacco:{ name:"旱烟",   unit:"卷", cat:"烟草", tags:["食物"], use:{hp:5,mood:5}, exp:true, sell:8,ticket:"smoke", note:"老旱烟叶" },

  /* ---------- 80年代 · 供销社隐藏商店 ---------- */
  maotai: { name:"红星茅台", unit:"斤", cat:"奢侈品", tags:["食物","奢侈品3"], use:{hp:30,mood:100}, exp:true, hidden:true, ticket:"swine", sell:15000, sellHi:30000, note:"高溢价！带回现代卖给收藏家" },
  zhonghua:{ name:"中华香烟", unit:"包", cat:"烟草", tags:["奢侈品3"], use:{hp:20,mood:50}, exp:true, hidden:true, ticket:"ssmoke", sell:200, sellHi:220, note:"有保质期，1年内出手" },

  /* ---------- 80年代 · 红星食品厂（钱厂长） ---------- */
  guantou:{ name:"黄桃罐头", unit:"斤", cat:"补品", tags:["补品2","食物"], use:{hp:20,mood:35},sell:15, exp:true, note:"送孩童/老人/孕妇；自用回体力" },
  malrjing:{ name:"麦乳精", unit:"罐", cat:"补品", tags:["食物","补品"], use:{hp:30,mood:50}, sell:300,exp:true, note:"送礼好感+5；自用回体力心情" },

  /* ---------- 80年代 · 邮电局（孙悟空） ---------- */
  stamp_bj:   { name:"北京风景邮票", unit:"张", cat:"邮票收藏", tags:["收藏品"], exp:false, sell:5, sellHi:8, note:"寄信用，或带回现代出售" },
  stamp_monkey:{ name:"生肖猴票", unit:"张", cat:"邮票收藏", tags:["收藏品"], exp:false, sell:3000, sellHi:5000, note:"现代抢手货！" },
  stamp_sheet:{ name:"整版猴票(64张)", unit:"套", cat:"邮票收藏", tags:["收藏品"], exp:false, sell:300000, sellHi:800000, note:"难得的整版" },

  /* ---------- 废品回收站（虾仁） · 特殊物品 ---------- */
  cap:    { name:"扩容胶囊", unit:"粒", cat:"特殊道具", tags:["科技","空间"], use:{cap:1}, exp:true, note:"自用：穿越携带容量+1" },
  beauty: { name:"美颜丹", unit:"粒", cat:"特殊道具", tags:["玄幻","美容"], use:{charm:10}, exp:true, note:"自用魅力+10；送年轻女性好感+30" },

  /* ---------- 新华书店（李清照） ---------- */
  book_pri:{ name:"《小学辅导教材》", unit:"本", cat:"书籍", tags:["教材"],sell:80, exp:false, note:"送学龄孩童（如胖丫）学业+5" },
  book_tang:{ name:"《唐诗三百首》", unit:"本", cat:"书籍", tags:["诗歌"],sell:8, exp:false, note:"送爱诗的NPC，诗词+5" },

  /* ---------- 国营饭店 · 堂食（不占背包） ---------- */
  mantou:   { name:"白面馒头", unit:"个", cat:"食物", tags:["主食","食物"], use:{hp:10}, exp:true, tickNeed:1 },
  yangchun: { name:"阳春面",   unit:"碗", cat:"食物", tags:["主食","食物"], use:{hp:20,mood:10}, exp:true, tickNeed:2 },
  caiba:    { name:"白菜豆腐", unit:"盘", cat:"食物", tags:["菜","食物"], use:{hp:20,mood:5}, exp:true },
  guobao:   { name:"锅包肉",   unit:"盘", cat:"食物", tags:["菜","食物"], use:{hp:30,mood:20}, exp:true },
  jiyu:     { name:"红烧鲫鱼", unit:"盘", cat:"食物", tags:["菜","补品","食物"], use:{hp:20,mood:30}, exp:true },

  /* ---------- 菜市场 ---------- */
  cabbage:  { name:"白菜", unit:"斤", cat:"食物", tags:["菜","食物"],sell:1, use:{hp:10,mood:1}, exp:true, note:"蔬菜，防营养不良" },
  pork:     { name:"猪肉", unit:"两", cat:"食物", tags:["菜","食物"],sell:8, use:{hp:10,mood:10}, exp:true },

  /* ---------- 裁缝铺成品 · 衣服（可穿上/脱下） ---------- */
  cloth_plain:  { name:"普通棉服",   unit:"件", cat:"服装", tags:["服装"],sell:15, charm:1, exp:false, note:"周奶奶做的棉衣，穿上魅力+1，穿久会磨损" },
  cloth_dacron: { name:"的确良时装", unit:"件", cat:"服装", tags:["服装"],sell:25,charm:5, exp:false, note:"的确良时装，穿上魅力+5，穿久会磨损" },

  /* ---------- 网购各省特产（阿狸bb平台 · 现代网购，可带往80年代） ----------
     modern: 现代网购价；price80: 80年代参考价（热闹街区/黑市） */
  jyhls:   { name:"金银花露水", unit:"瓶", cat:"食物", tags:["补品"], use:{hp:30,mood:10}, exp:true, nation:"中国", origin:"武汉", modern:3.5, price80:10, note:"自用回体力；送礼通用+5（仅首次）" },
  lgm:     { name:"老干妈",   unit:"瓶", cat:"食物", tags:["调味料"], use:{hp:30,mood:-10}, exp:true, nation:"中国", origin:"贵州", modern:8, price80:5, note:"自用；送喜欢做菜的NPC（何雨柱）+5" },
  dhp:     { name:"大红袍",   unit:"罐", cat:"食物", tags:["茶叶","奢侈品3"], use:{hp:100,mood:100}, exp:true, nation:"中国", origin:"福建", modern:1000, price80:100, note:"送成年男性或喜茶女性+20（仅首次）" },
  nrg:     { name:"牛肉干",   unit:"袋", cat:"食物", tags:["能量"], use:{hp:30,mood:15}, exp:true, nation:"中国", origin:"内蒙古", modern:50, price80:10, note:"任务专用能量道具" },
  agang:   { name:"鞍山钢铁", unit:"斤", cat:"工业", tags:["钢铁"], exp:false, nation:"中国", origin:"辽宁", modern:5, price80:10, note:"任务专用钢铁道具" },
  donge:   { name:"东阿阿胶", unit:"盒", cat:"食物", tags:["补品3"], use:{hp:50,mood:80}, exp:true, nation:"中国", origin:"山东", modern:300, price80:50, note:"送成年女性+20、孕妇+25（仅首次）" },
  gouqi:   { name:"枸杞",     unit:"袋", cat:"食物", tags:["补品2"], use:{hp:20,mood:80}, exp:true, nation:"中国", origin:"宁夏", modern:50, price80:20, note:"送已婚男性+20（仅首次）" },
  ciqi:    { name:"瓷器",     unit:"个", cat:"工业", tags:["家用"], exp:false, nation:"中国", origin:"景德镇", modern:20, price80:3, note:"任务专用瓷器/家用道具" },
  longquan:{ name:"龙泉宝剑", unit:"把", cat:"工业", tags:["武器2"], exp:false, nation:"中国", origin:"浙江", modern:2000, price80:200, note:"任务道具；防身（后续开放打斗）" },
  xuanzhi: { name:"宣纸",     unit:"打", cat:"文化", tags:["传统3"], exp:false, nation:"中国", origin:"安徽", modern:200, price80:50, note:"任务道具" },
  dahuoji: { name:"打火机",   unit:"个", cat:"工业", tags:["家用2","流行"], exp:false, nation:"中国", origin:"义乌", modern:1, price80:2, note:"送流行NPC+3；黑市可卖；拉货单任务" },
  yanhua:  { name:"烟花",     unit:"个", cat:"工业", tags:["节日2"], exp:false, nation:"中国", origin:"浏阳", modern:10, price80:1, note:"过年/节日专用" },
  renzao:  { name:"人造钻石", unit:"个", cat:"工业", tags:["奢侈品4"], use:{charm:20}, exp:true, nation:"中国", origin:"河南", modern:5000, price80:100000, note:"80年代巨无霸奢侈品；送成年女性+50（仅首次）；自用魅力+20（可穿戴）" },
  xiongmao:{ name:"熊猫周边", unit:"个", cat:"玩具", tags:["动物2"], use:{charm:2}, exp:true, nation:"中国", origin:"四川", modern:200, price80:20, note:"送读书小孩+10、喜动物女性+5；自用魅力+2（挂件位）" },

  /* ---------- 电影院 · 场次（不占背包） ---------- */
  movie_lushan:  { name:"《庐山恋》", unit:"场", cat:"娱乐", tags:["爱情"], exp:false },
  movie_shaolin: { name:"《少林寺》", unit:"场", cat:"娱乐", tags:["动作"], exp:false },
  movie_rail:    { name:"《铁道游击队》", unit:"场", cat:"娱乐", tags:["抗战"], exp:false },
};

/* 图鉴分类（顺序即展示顺序） */
const CATS = ["食物","补品","日用品","电子","布料","服装","奢侈品","酒类","烟草","邮票收藏","特殊道具","书籍","娱乐","工业","文化","玩具"];
