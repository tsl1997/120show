(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const INV = window.LJ.inventory;
  const INT = window.LJ.interaction;

  function npcTagSet(npc) {
    const s = new Set();
    (npc.tags || []).forEach((t) => s.add(t));
    if (npc.prefer) npc.prefer.forEach((t) => s.add(t));
    if (npc.temperament) s.add(npc.temperament);
    if (npc.wealth) s.add(npc.wealth);
    if (npc.gender) s.add(npc.gender);
    return s;
  }

  function matchScore(item, npcTags) {
    let n = 0;
    (item.tags || []).forEach((t) => { if (npcTags.has(t)) n++; });
    return n;
  }

  function matchGifts(npcId) {
    const npc = INT.anyNpc(npcId);
    if (!npc) return [];
    const npcTags = npcTagSet(npc);
    const bp = INV.backpack();
    const counts = {};
    bp.forEach((e) => { counts[e.id] = e.qty; });
    const res = [];
    Object.keys(counts).forEach((id) => {
      const item = R.get("items").map[id];
      if (!item) return;
      const score = matchScore(item, npcTags);
      if (score <= 0) return;
      const price = item.pModern != null ? item.pModern : item.pOld || 0;
      res.push({ id, name: item.name, score, price, qty: counts[id], tier: item.tier || 3 });
    });
    res.sort((a, b) => (b.score - a.score) || (b.price - a.price));
    return res;
  }

  function giftValue(item, npc) {
    const score = matchScore(item, npcTagSet(npc));
    const tier = item.tier || 3;
    const wealth = npc.wealth;
    const wealthTiers = { 赤贫: 1, 温饱: 1, 小康: 2, 中产: 3, 富裕: 4, 富豪: 5, 巨富: 5, 权贵: 5 };
    const need = wealthTiers[wealth] || 2;
    let base = 5 + score * 8;
    if (tier < need) base *= 0.3;
    else if (tier >= need) base *= 1 + (tier - need) * 0.4;
    return Math.round(base);
  }

  function giveGift(npcId, itemId, qty) {
    const npc = INT.anyNpc(npcId);
    const item = R.get("items").map[itemId];
    if (!npc || !item) return { ok: false, reason: "参数错误" };
    qty = qty || 1;
    if (INV.count(INV.backpack(), itemId) < qty) return { ok: false, reason: "背包中数量不足" };
    const npcTags = npcTagSet(npc);
    const score = matchScore(item, npcTags);
    if (score <= 0) return { ok: false, reason: "这件礼物与对方并不相称" };
    const val = giftValue(item, npc) * qty;
    INV.removeBackpack(itemId, qty);
    const newRel = INT.adjustRelationship(npcId, val);
    return { ok: true, value: val, relation: newRel, itemName: item.name };
  }

  window.LJ.gift = { matchGifts, giftValue, giveGift, matchScore };
})();
