/* ================================================================
   两界人生 · 票据表（TICKETS）
   每种票据存于 S.walletT/S.pigT，key 见下。
   最小单位：money=分(scale100)，grain/sgrain=两(scale10)，cloth/scloth=分米(scale10)，其余=张(scale1)。
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 票据表（80年代） ----------------
   每种票据存于 S.walletT/S.pigT，key 见下
   其中 money=现金（元，最小面值1分，最大10元纸币），也走票据系统
   其余票据单位见 TICK_UNIT
----------------------------------------------- */
const TICKETS = {
  money:  { name:"现金", unit:"元" },
  grain:  { name:"粮票", unit:"斤" },
  cloth:  { name:"布票", unit:"米" },
  meat:   { name:"肉票", unit:"张" },
  wine:   { name:"酒票", unit:"张" },
  smoke:  { name:"烟票", unit:"张" },
  sgrain: { name:"特殊粮票", unit:"斤" },
  scloth: { name:"特殊布票", unit:"米" },
  swine:  { name:"特殊酒票", unit:"张" },
  ssmoke: { name:"特殊烟票", unit:"张" },
};
