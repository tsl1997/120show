/* ================================================================
   两界人生 · 任务表（QUESTS）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 任务表 ----------------
   id: 唯一标识（英文，不改）
   name/desc: 任务名称与说明
   npc: 发布与提交的NPC（只能在NPC所在地点接取/提交）
   target: { item, qty } 交指定物品 | { tag, qty } 交任意带该标签的物品
           | { targets:[{item,qty},...] } 多物品全交 | { check:"bank_live_min", amtFen, days } 条件型
   rewards: { aff, money, exp, item, itemQty, trust(钱家信任) }
            aff好感 / money现金（NPC所在世界的货币）/ exp经验 / item物品奖励
   deadline: 接取后 N 天内交付，逾期触发 onFail（信任惩罚，可重接）
   minTrust / reqUnlock: 接取门槛（钱家信任 / 前置任务 unlock 标记）
   unlock: 完成后置 S.unlocks[key]（identity2/3/4、factory 等带副作用，见 engine.applyUnlocks）
   onFail: { trust:-15, retry:true }
   等级：1级0-99 / 2级100-499 / 3级500-1999 / 4级2000-9999
   规则：同一NPC同时只能接取1个任务；任务一次性完成；有多个任务只显示序号最前面的。
----------------------------------------------- */
const QUESTS = [
  { id:"wt_tobacco", name:"老王头的嘴馋-旱烟", desc:"老王头喜欢抽旱烟，请从80年代带回1根旱烟给他。", npc:"老王头",
    target:{ item:"tobacco", qty:1 }, rewards:{ aff:5, money:100, exp:5 } },
  { id:"wt_liquor",  name:"老王头的嘴馋-散酒", desc:"老王头喜欢喝散酒，请从80年代带回1两散酒给他。", npc:"老王头",
    target:{ item:"liquor",  qty:1 }, rewards:{ aff:5, money:100, exp:5 } },
  { id:"wt_corn",    name:"老王头的嘴馋-棒子面", desc:"老王头喜欢吃棒子面，请从80年代带回1斤棒子面给他。", npc:"老王头",
    target:{ item:"corn",    qty:1 }, rewards:{ aff:5, money:100, exp:5 } },
  { id:"wt_noodle",  name:"老王头的嘴馋-挂面", desc:"老王头喜欢吃挂面，请从80年代带回1斤挂面给他。", npc:"老王头",
    target:{ item:"noodle",  qty:1 }, rewards:{ aff:5, money:100, exp:5, item:"sugar", itemQty:1 } },
  { id:"xr_book",    name:"喜欢学习的虾仁", desc:"虾仁最近喜欢上了学习，请购买一本《唐诗三百首》给他。", npc:"虾仁",
    target:{ item:"book_tang", qty:1 }, rewards:{ aff:5, money:100, exp:5 } },
  { id:"zy_liuxing", name:"张姨的好奇心", desc:"张姨喜欢一些流行的东西，请给予1件符合条件的物品给她。", npc:"张姨",
    target:{ tag:"流行", qty:1 }, rewards:{ aff:5, money:2, exp:5 } },

  /* ================ 钱家任务链（第一章主线，doc/8） ================
     钱家信任(S.qianTrust)独立于好感：好感=他喜不喜欢你，信任=他敢不敢担保你。
     失败只扣信任不扣好感，逾期可重接。 */
  /* 阶段0 · 落脚（李婶·街道办） */
  { id:"qj_luojiao", name:"落脚城南", desc:"李婶要查外来人口。送她 1 罐黄桃罐头（她喜欢这个），把落脚登记办了。", npc:"李婶",
    target:{ item:"guantou", qty:1 }, rewards:{ aff:5, exp:5 },
    unlock:["luojiao","identity2"],
    note:"完成获得街道办登记：身份升为「有住址」，可以租砖瓦房了。" },
  /* 阶段1 · 钱老大爷（国营饭店） */
  { id:"qj_xiliang", name:"老爷子的细粮", desc:"钱老大爷牙口不好，粮店细粮又断货了。3天内给他带 2 斤挂面。", npc:"钱老大爷",
    target:{ item:"noodle", qty:2 }, deadline:3, reqUnlock:"luojiao",
    rewards:{ aff:8, trust:10, exp:10 }, onFail:{ trust:-5, retry:true } },
  { id:"qj_guantou", name:"老爷子的存货", desc:"钱老大爷想囤些黄桃罐头过冬，要 5 罐。一次带不了那么多——多跑一趟，或去黑市调货。", npc:"钱老大爷",
    target:{ item:"guantou", qty:5 }, reqUnlock:"luojiao",
    rewards:{ aff:5, trust:15, exp:15 }, unlock:"dashuo",
    note:"完成后老爷子愿意替你在钱所长面前说话。" },
  /* 阶段2 · 钱所长（储蓄所） */
  { id:"qj_kaihu", name:"开户存钱", desc:"钱所长说：钱放在我这里才算数。办一本活期存折，存入至少 50 元并保持 7 天。", npc:"钱所长",
    target:{ check:"bank_live_min", amtFen:5000, days:7 }, reqUnlock:"dashuo",
    rewards:{ trust:15, exp:10 }, unlock:"kaihu",
    note:"存款就是关系押金——钱放在钱所长那里，他才信你。" },
  { id:"qj_maotai", name:"所长的应酬", desc:"钱所长要宴请上级，需要 2 瓶红星茅台（供销社要特殊酒票，黑市贵三成但不用票）。7天内交货。", npc:"钱所长",
    target:{ item:"maotai", qty:2 }, deadline:7, reqUnlock:"dashuo",
    rewards:{ aff:5, trust:20, exp:20 }, onFail:{ trust:-10, retry:true },
    unlock:["danbao","identity3"],
    note:"完成后获得资金担保资格：身份升为「有担保」。" },
  /* 阶段3 · 钱厂长（红星食品厂） */
  { id:"qj_dingdan1", name:"第一张订单", desc:"钱厂长的第一张拉货单：7天内交 20 个手电筒。携带量不够一趟——分多趟运，或找别的路子。", npc:"钱厂长",
    target:{ item:"flashlight", qty:20 }, deadline:7, reqUnlock:"danbao",
    rewards:{ aff:5, trust:20, money:1200, exp:30 }, onFail:{ trust:-15, retry:true },
    unlock:["factory","dingdan1"],
    note:"按时交付即成为食品厂的合作对象。" },
  { id:"qj_dingdan2", name:"紧急补单", desc:"食品厂赶工，3天内要 30 节电池和 2 块电子表。先囤货再接单的玩家才接得住。", npc:"钱厂长",
    target:{ targets:[ {item:"battery",qty:30}, {item:"ebwatch",qty:2} ] }, deadline:3, reqUnlock:"dingdan1",
    rewards:{ trust:15, money:800, exp:30 }, onFail:{ trust:-10, retry:true },
    unlock:"dingdan2",
    note:"完成后食品厂货架直连：厂价收购你的电子类货物（渠道建设中）。" },
  { id:"qj_dingdan3", name:"连续合作", desc:"钱厂长要下大单：30天内交 30 罐黄桃罐头和 10 罐麦乳精。这是长期合作的资格单。", npc:"钱厂长",
    target:{ targets:[ {item:"guantou",qty:30}, {item:"malrjing",qty:10} ] }, deadline:30, reqUnlock:"dingdan2",
    rewards:{ aff:10, trust:20, money:3000, exp:50 }, onFail:{ trust:-15, retry:true },
    unlock:["changqihezuo","identity4"],
    note:"完成后成为厂里的关系户：身份升为「有单位」，可租小楼房。" },
];
