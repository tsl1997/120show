/* ================================================================
   两界人生 · 商店表（SHOPS）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 商店表 ----------------
   id: 唯一标识（英文）
   name, world, npc(店主，用于好感), icon
   kind: market(普通买卖) | home(家) | meal(饭店) | movie(电影院) | tailor(裁缝) | post(邮电) | bank(储蓄)
         | housing(街道办) | factory(食品厂) | collector(收藏家) | junk(回收站) | black(黑市)
         | lottery(彩票店) | express(快递站) | street(热闹街区)
   hours: 营业时间（不写=全天；[[9,15]] 或 [[9,11],[14,17]]，黑市走夜间规则）
   visitPerDay: 已不再限制进入次数（保留字段）
   refreshDays/refreshUnit: 进货间隔（day/week/month）
   discountAt/discountRate: 好感打折；hiddenAt: 好感解锁隐藏货
   restock: 'smart' 智能补货
   stock/hiddenStock: 普通/隐藏货架 [{item,min,max,price(或priceMin/Max/priceCode),ticket,unit,use,staple,...}]
   clothes: 裁缝专用 [{material,item,name,fee,charm}]
   rent/stalls: 热闹街区专用（租摊费/固定摊贩模板）
----------------------------------------------- */
const SHOPS = {
  /* ================= 现代世界 ================= */
  home26: { id:"home26", name:"郊区老家", world:"26", kind:"home", icon:"🏠" },
  wangtou:{ id:"wangtou", name:"小卖铺（老王头）", world:"26", npc:"老王头", kind:"market",
            refreshDays:3, discountAt:60, discountRate:0.9, hiddenAt:80, restock:"smart",
            stock:[
              {item:"soda",   min:10, max:20, price:2},
              {item:"latiao", min:20, max:30, price:0.5},
              {item:"flashlight", min:1, max:5, price:10},
              {item:"battery",min:10, max:50, price:1},
            ],
            hiddenStock:[ {item:"sugar", min:1, max:10, price:3} ] },
  wangfugui:{ id:"wangfugui", name:"收藏家（王富贵）", world:"26", npc:"王富贵", kind:"collector" },
  caipiao: { id:"caipiao", name:"福利彩票（顾老板）", world:"26", npc:"顾老板", kind:"lottery" },
  kuaidi: { id:"kuaidi", name:"快递站（马总）", world:"26", npc:"马总", kind:"express",
            hours:[[8,20]],
            note:"收网购包裹、发网店订单" },
  xiaren: { id:"xiaren", name:"废品回收站（虾仁）", world:"26", npc:"虾仁", kind:"junk",
            refreshUnit:"month", refreshDays:1,
            stock:[
              {item:"cap",    min:1, max:3, price:null, priceMin:1000,   priceMax:10000},
              {item:"beauty", min:1, max:2, price:null, priceMin:10000,  priceMax:1000000},
            ] },

  /* ================= 80年代世界 ================= */
  home80: { id:"home80", name:"城南四合院", world:"80", kind:"home", icon:"🏚" },
  heishi: { id:"heishi", name:"黑市（强子）", world:"80", npc:"强子", kind:"black",
            note:"设计稿预留NPC，暂提供票据买卖与收货" },
  rejie:  { id:"rejie", name:"热闹街区（周大哥）", world:"80", npc:"周大哥", kind:"street",
            hours:[[6,18]],
            rent:0.1,   // 租摊位每天1角
            stalls:[
              { npc:"农村老农", goods:[ {item:"cabbage", qty:[1,5], price:0.01} ] },
              { npc:"农村老农", goods:[ {item:"cabbage", qty:[1,5], price:0.01} ] },
              { npc:"工厂职工", goods:[ {type:"grain", qty:[5,15], price:0.16}, {type:"cloth", qty:[1,4], price:0.4} ] },
              { npc:"工厂职工", goods:[ {type:"grain", qty:[5,15], price:0.16}, {type:"cloth", qty:[1,4], price:0.4} ] },
            ] },
  liangdian:{ id:"liangdian", name:"粮店（张姨）", world:"80", npc:"张姨", kind:"market", hours:[[9,15]],
              refreshUnit:"month", refreshDays:1,
              stock:[
                {item:"corn",   min:50, max:100, price:0.1, ticket:"grain"},
                {item:"noodle", min:1,  max:5,   price:0.3, ticket:"sgrain"},
              ] },
  fandian:{ id:"fandian", name:"国营饭店（何雨柱）", world:"80", npc:"何雨柱", kind:"meal", hours:[[8,22]],
            refreshUnit:"week", refreshDays:1, visitPerDay:3, hiddenAt:80,
            stock:[
              {item:"mantou",  min:10,max:50, price:0.05, ticket:"grain", unit:"两", use:{hp:10}, staple:true},
              {item:"yangchun",min:10,max:25, price:0.2,  ticket:"grain", unit:"两", use:{hp:20,mood:10}, staple:true},
              {item:"caiba",   min:10,max:20, price:0.2,  unit:"两", use:{hp:20,mood:5}},
              {item:"guobao",  min:0, max:3,  price:1.5,  unit:"两", use:{hp:30,mood:20}},
            ],
            hiddenStock:[
              {item:"jiyu", min:0,max:3, price:1.2, unit:"两", use:{hp:20,mood:30}, note:"孕妇食用，张姨好感+5"},
            ] },
  cai:    { id:"cai", name:"菜市场（李叔）", world:"80", npc:"李叔", kind:"market", hours:[[6,12]],
            refreshDays:1,
            stock:[
              {item:"cabbage", min:5,max:10, price:0.02, use:{hp:10,mood:1}, unit:"斤"},
              {item:"pork",    min:0,max:1,  price:0.1,  ticket:"meat", use:{hp:10,mood:10}, unit:"两"},
            ] },
  gongxiao:{ id:"gongxiao", name:"供销社（王大姐）", world:"80", npc:"王大姐", kind:"market", hours:[[9,11],[14,17]],
             refreshDays:1, hiddenAt:80, hiddenRefresh:7,
             stock:[
               {item:"cotton",  min:1,max:8,  price:0.25, ticket:"cloth"},
               {item:"dacron",  min:0,max:2,  price:1,    ticket:"scloth"},
               {item:"liquor",  min:5,max:20, price:0.1,  ticket:"wine"},
               {item:"tobacco", min:5,max:20, price:0.06, ticket:"smoke"},
             ],
             hiddenStock:[
               {item:"maotai",  min:0,max:1, price:null, priceCode:"maotai", ticket:"swine"},
               {item:"zhonghua",min:0,max:1, price:null, priceCode:"zhonghua", ticket:"ssmoke"},
             ] },
  caifeng:{ id:"caifeng", name:"裁缝铺（周奶奶）", world:"80", npc:"周奶奶", kind:"tailor", hours:[[10,16]],
            refreshUnit:"week", refreshDays:1,
            clothes:[
              {material:"cotton", item:"cloth_plain",  name:"普通棉服",   fee:1, charm:1},
              {material:"dacron", item:"cloth_dacron", name:"的确良时装", fee:3, charm:5},
            ] },
  youdian:{ id:"youdian", name:"邮电局（孙悟空）", world:"80", npc:"孙悟空", kind:"post", hours:[[9,11],[14,17]],
            refreshUnit:"month", refreshDays:1, hiddenAt:80,
            stock:[
              {item:"stamp_bj",   min:100,max:300, price:0.08},
              {item:"stamp_monkey",min:0, max:5,   price:0.08},
            ],
            hiddenStock:[ {item:"stamp_sheet", min:1, max:1, price:5.12} ] },
  dianying:{ id:"dianying", name:"电影院（张一冇）", world:"80", npc:"张一冇", kind:"movie",
             refreshUnit:"week", refreshDays:1,
             stock:[
               {item:"movie_lushan", min:1,max:5,  price:0.1, name:"《庐山恋》", tags:["爱情"], mood:10, inv:["female"], invAff:5},
               {item:"movie_shaolin",min:0,max:5,  price:0.1, name:"《少林寺》", tags:["动作"], mood:10, inv:["male"], invAff:5},
               {item:"movie_rail",   min:5,max:10, price:0.1, name:"《铁道游击队》", tags:["抗战"], mood:5, invAff:2},
             ] },
  chuxu:  { id:"chuxu", name:"储蓄所（钱所长）", world:"80", npc:"钱所长", kind:"bank", hours:[[9,11],[14,17]] },
  shudian:{ id:"shudian", name:"新华书店（李清照）", world:"80", npc:"李清照", kind:"market", hours:[[10,16]],
            refreshUnit:"month", refreshDays:1,
            stock:[
              {item:"book_pri",  min:0,max:1, price:1},
              {item:"book_tang", min:0,max:1, price:3},
            ] },
  jiedao: { id:"jiedao", name:"街道办（李婶）", world:"80", npc:"李婶", kind:"housing", hours:[[9,11],[14,17]] },
  shipinchang:{ id:"shipinchang", name:"红星食品厂（钱厂长）", world:"80", npc:"钱厂长", kind:"factory", hours:[[9,11],[14,17]],
             refreshUnit:"month", refreshDays:1,
             stock:[
               {item:"guantou", min:10,max:20, price:3},
               {item:"maotai",  min:1, max:10, price:7},
               {item:"malrjing",min:2, max:8,  price:8},
             ] },
};
