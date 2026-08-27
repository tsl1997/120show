/* ================================================================
   两界人生 · 黑市配置（HEISHI）+ 物品估值（ITEM_REF）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 黑市配置 ----------------
   黑市（强子）：80年代夜场，18点到次日6点开门。
   分区（门口/中间/里面）有不同的价格浮动 mult 与买家数 buyerN。
   goods/tickets/exchange 是各类型摊贩的可能货源。 */
const HEISHI = {
  openHour:18, closeHour:6,
  zones: [
    { id:"gate",  name:"门口摊", slots:4,  buyerN:5, mult:1.20 },
    { id:"mid",   name:"中间摊", slots:12, buyerN:3, mult:1.05 },
    { id:"inner", name:"里面摊", slots:4,  buyerN:1, mult:0.90 },
  ],
  /* 商品贩子货源（黑市高价，均无票） */
  goods: [
    { item:"corn",         qty:[20,50], price:0.3 },
    { item:"pork",         qty:[1,5],   price:1.5 },
    { item:"stamp_monkey", qty:[0,1],   price:0.2 },
    { item:"guantou",      qty:[0,1],   price:10 },
    { item:"malrjing",     qty:[0,1],   price:20 },
  ],
  /* 票据贩子货源（价格=每显示单位） */
  tickets: [
    { type:"grain",  qty:[5,50], price:0.2 },
    { type:"smoke",  qty:[1,3],  price:0.5 },
    { type:"cloth",  qty:[1,3],  price:0.5 },
    { type:"meat",   qty:[2,5],  price:0.8 },
    { type:"sgrain", qty:[0,1],  price:2 },
    { type:"scloth", qty:[0,1],  price:2 },
    { type:"ssmoke", qty:[0,1],  price:20 },
    { type:"swine",  qty:[0,1],  price:25 },
  ],
  /* 交换商人货源（value=该货估值，用于和玩家出价比较） */
  exchange: [
    { item:"corn",     qty:[20,50], value:0.15 },
    { item:"pork",     qty:[1,5],   value:2 },
    { item:"guantou",  qty:[0,1],   value:15 },
    { item:"malrjing", qty:[0,1],   value:30 },
  ],
};

/* 黑市交换估值参考价（元/件，用于判断玩家出价是否≥货值80%） */
const ITEM_REF = {
  corn:0.1, noodle:0.3, cabbage:0.02, pork:0.1, guantou:3, malrjing:8,
  maotai:7, zhonghua:0.5, liquor:0.1, tobacco:0.06, cotton:0.25, dacron:1,
  soda:2, latiao:0.5, flashlight:10, battery:1, sugar:3,
  stamp_monkey:0.08, stamp_bj:0.08, stamp_sheet:5.12, book_tang:3, book_pri:1,
  jyhls:10, lgm:5, dhp:100, nrg:10, agang:10, donge:50, gouqi:20, ciqi:3,
  longquan:200, xuanzhi:50, dahuoji:2, yanhua:1, renzao:100000, xiongmao:20,
};
