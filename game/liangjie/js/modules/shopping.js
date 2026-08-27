(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const E = window.LJ.economy;
  const INV = window.LJ.inventory;
  const W = window.LJ.wallet;
  const TR = window.LJ.travel;

  function locStock(locId) {
    const loc = R.locationById(locId);
    return loc ? (loc.stock || []) : [];
  }

  function listOffers(locId) {
    const loc = R.locationById(locId);
    if (!loc) return [];
    const w = TR.current();
    const cityId = loc.city;
    return locStock(locId).map((s) => {
      const p = E.price(s.i, w, cityId, s.ch, 1);
      return p ? { id: s.i, item: p.item, qty: s.q, channel: s.ch, price: p.amount, currency: p.currency, ticket: p.ticket } : null;
    }).filter(Boolean);
  }

  function riskRoll(loc) {
    if (!loc || loc.type !== "black_market") return null;
    const st = S.get();
    const year = S.clock("old").year;
    const tl = R.get("timeline").map[year + "-" + "08"];
    const base = 0.12;
    const mul = tl && tl.fx && tl.fx.risk ? tl.fx.risk : 1;
    if (Math.random() < base * mul) {
      const fine = Math.round(10 + Math.random() * 50);
      if (W.spend("old", "CNY", fine)) {
        S.pushLog("联防队突袭鸽子市，你被罚款 " + fine + " 元。");
        return { caught: true, fine };
      }
      S.pushLog("联防队突袭，你趁乱逃脱，但惊出一身冷汗。");
      return { caught: true, fine: 0 };
    }
    return { caught: false };
  }

  function buyAt(locId, itemId, qty) {
    const loc = R.locationById(locId);
    if (!loc) return { ok: false, reason: "无此地点" };
    const w = TR.current();
    const s = locStock(locId).find((x) => x.i === itemId);
    if (!s) return { ok: false, reason: "此处不出售该物品" };
    if (s.q < qty) return { ok: false, reason: "库存不足" };
    qty = Math.floor(qty);
    if (qty <= 0) return { ok: false, reason: "数量无效" };
    const res = E.buy(itemId, w, loc.city, s.ch, qty, { money: W.get(w).money, tickets: S.world(w).tickets });
    if (!res.ok) return res;
    const add = INV.addBackpack(itemId, qty);
    if (!add.ok) return add;
    if (!W.spend(w, res.currency, res.cost)) return { ok: false, reason: "余额不足" };
    if (res.ticket) INV.spendTickets(w, res.ticket, qty);
    E.adjustSupply(w, loc.city, itemId, qty, true);
    s.q -= qty;
    TR.setLocation(locId);
    const risk = riskRoll(loc);
    S.pushLog("购买 " + R.get("items").map[itemId].name + " x" + qty + "，花费 " + U.fmtMoney(res.cost, res.currency));
    return { ok: true, cost: res.cost, currency: res.currency, risk };
  }

  function canSellAt(loc, item) {
    if (loc.buyCat == null) return true;
    if (!loc.buyCat || !loc.buyCat.length) return false;
    return loc.buyCat.indexOf(item.cat) >= 0;
  }

  function sellAt(locId, itemId, qty) {
    const loc = R.locationById(locId);
    if (!loc) return { ok: false, reason: "无此地点" };
    const w = TR.current();
    qty = Math.floor(qty);
    if (qty <= 0) return { ok: false, reason: "数量无效" };
    const held = INV.count(INV.backpack(), itemId);
    if (held < qty) return { ok: false, reason: "背包中数量不足" };
    const item = R.get("items").map[itemId];
    if (!item) return { ok: false, reason: "未知物品" };
    if (!canSellAt(loc, item)) {
      const cats = R.get("categories").map;
      const cname = cats[item.cat] ? cats[item.cat].name : item.cat;
      return { ok: false, reason: "此处不收「" + cname + "」类物品" };
    }
    const ch = loc.type === "black_market" ? "black" : loc.type === "friend_store" ? "fec" : "free";
    const p = E.price(itemId, w, loc.city, ch, 1);
    if (!p) return { ok: false, reason: "此处不收该物品" };
    const unit = p.amount * 0.6;
    const total = U.round(unit * qty, 2);
    INV.removeBackpack(itemId, qty);
    W.add(w, p.currency, total);
    E.adjustSupply(w, loc.city, itemId, qty, false);
    TR.setLocation(locId);
    const risk = riskRoll(loc);
    S.pushLog("出售 " + item.name + " x" + qty + "，收入 " + U.fmtMoney(total, p.currency));
    return { ok: true, income: total, currency: p.currency, risk };
  }

  window.LJ.shopping = { listOffers, buyAt, sellAt, locStock, canSellAt };
})();
