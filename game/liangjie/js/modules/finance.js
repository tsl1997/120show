(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const W = window.LJ.wallet;

  function bank(world) {
    const w = S.world(world);
    if (!w.bank) w.bank = { deposits: {}, loans: 0 };
    if (!w.bank.deposits) w.bank.deposits = {};
    return w.bank;
  }

  function deposit(world, currency, amount) {
    amount = U.round(amount, 2);
    if (!W.spend(world, currency, amount)) return { ok: false, reason: "余额不足" };
    const b = bank(world);
    b.deposits[currency] = U.round((b.deposits[currency] || 0) + amount, 2);
    return { ok: true };
  }

  function withdraw(world, currency, amount) {
    const b = bank(world);
    amount = U.round(amount, 2);
    if ((b.deposits[currency] || 0) < amount) return { ok: false, reason: "存款不足" };
    b.deposits[currency] = U.round(b.deposits[currency] - amount, 2);
    W.add(world, currency, amount);
    return { ok: true };
  }

  function stockPrice(stockId, year) {
    const st = R.get("finance").stockMap[stockId];
    if (!st) return null;
    const ys = Object.keys(st.points).map(Number).sort((a, b) => a - b);
    if (year <= ys[0]) return st.points[ys[0]];
    if (year >= ys[ys.length - 1]) return st.points[ys[ys.length - 1]];
    for (let i = 0; i < ys.length - 1; i++) {
      if (year >= ys[i] && year <= ys[i + 1]) {
        const span = ys[i + 1] - ys[i];
        const k = span ? (year - ys[i]) / span : 0;
        return U.round(st.points[ys[i]] + (st.points[ys[i + 1]] - st.points[ys[i]]) * k, 2);
      }
    }
    return st.points[ys[ys.length - 1]];
  }

  function buyStock(world, stockId, shares) {
    const st = R.get("finance").stockMap[stockId];
    if (!st) return { ok: false, reason: "无此股票" };
    const year = S.clock(world).year;
    if (year < st.unlockYear) return { ok: false, reason: st.name + " 于 " + st.unlockYear + " 年才上市" };
    const price = stockPrice(stockId, year);
    const currency = st.market === "A股" ? "CNY" : st.market === "港股" ? "HKD" : st.market === "加密" ? "USD" : "USD";
    const cost = U.round(price * shares, 2);
    if (!W.spend(world, currency, cost)) return { ok: false, reason: "余额不足" };
    const w = S.world(world);
    if (!w.stocks) w.stocks = [];
    const hold = w.stocks.find((h) => h.id === stockId);
    if (hold) { hold.shares += shares; hold.cost += cost; }
    else w.stocks.push({ id: stockId, shares, cost });
    return { ok: true, cost, currency };
  }

  function sellStock(world, stockId, shares) {
    const w = S.world(world);
    const hold = (w.stocks || []).find((h) => h.id === stockId);
    if (!hold || hold.shares < shares) return { ok: false, reason: "持仓不足" };
    const st = R.get("finance").stockMap[stockId];
    const price = stockPrice(stockId, S.clock(world).year);
    const currency = st.market === "A股" ? "CNY" : st.market === "港股" ? "HKD" : "USD";
    const income = U.round(price * shares, 2);
    W.add(world, currency, income);
    hold.shares -= shares;
    if (hold.shares <= 0) w.stocks.splice(w.stocks.indexOf(hold), 1);
    return { ok: true, income, currency };
  }

  function exchange(world, from, to, amount) {
    if (from === to) return { ok: true };
    amount = U.round(amount, 2);
    if (!W.spend(world, from, amount)) return { ok: false, reason: "余额不足" };
    const year = S.clock(world).year;
    const out = U.round(R.get("currencies").convert(amount, from, to, year), 2);
    W.add(world, to, out);
    return { ok: true, out, to };
  }

  window.LJ.finance = { deposit, withdraw, buyStock, sellStock, stockPrice, exchange, bank };
})();
