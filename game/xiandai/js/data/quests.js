/* ================================================================
   两界人生 · 任务表（QUESTS）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 任务表 ----------------
   id: 唯一标识（英文，不改）
   name/desc: 任务名称与说明
   npc: 发布与提交的NPC（只能在NPC所在地点接取/提交）
   target: { item, qty } 交指定物品 | { tag, qty } 交任意带该标签的物品
   rewards: { aff, money, exp, item, itemQty }
            aff好感 / money现金（NPC所在世界的货币）/ exp经验 / item物品奖励
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
];
