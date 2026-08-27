(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;
  const S = window.LJ.state;
  const U = window.LJ.util;

  let itemMap = null;
  const itemColls = ["items_core", "items_consumable", "items_appliance", "items_luxury", "items_province", "items_commodity", "items_daily"];

  function buildItems() {
    if (itemMap) return itemMap;
    const all = [];
    itemColls.forEach((n) => {
      const c = R.get(n);
      if (c && c.items) all.push.apply(all, c.items);
    });
    itemMap = {};
    all.forEach((i) => { itemMap[i.id] = i; });
    R.register("items", { items: all, map: itemMap });
    return itemMap;
  }

  function getItem(id) {
    buildItems();
    return itemMap[id] || null;
  }

  function allItems() {
    buildItems();
    return R.get("items").items;
  }

  function cityMul(cityId, cat) {
    const city = R.cityById(cityId);
    if (!city || !city.priceMul) return 1;
    return city.priceMul[cat] != null ? city.priceMul[cat] : 1;
  }

  function catElasticity(cat, world) {
    const cats = R.get("categories");
    const c = (cats && cats.map && cats.map[cat]) || { elModern: 0.02, elOld: 0.35 };
    return world === "modern" ? (c.elModern || 0.02) : (c.elOld || 0.35);
  }

  function supplyKey(world, cityId, itemId) {
    return world + "|" + cityId + "|" + itemId;
  }

  function netSold(world, cityId, itemId) {
    const sc = S.get().supplyCache;
    const k = supplyKey(world, cityId, itemId);
    return (sc && sc[k]) || 0;
  }

  function adjustSupply(world, cityId, itemId, qty, isBuy) {
    const st = S.get();
    if (!st.supplyCache) st.supplyCache = {};
    const k = supplyKey(world, cityId, itemId);
    st.supplyCache[k] = (st.supplyCache[k] || 0) + (isBuy ? -qty : qty);
  }

  function supplyFactor(world, cityId, item) {
    const el = catElasticity(item.cat, world);
    const ns = netSold(world, cityId, item.id);
    const factor = 1 - ns * el * 0.02;
    return U.clamp(factor, 0.3, 3.0);
  }

  function channelMul(channel) {
    if (channel === "black") return 1.3;
    if (channel === "fec") return 1.15;
    return 1;
  }

  function price(itemId, world, cityId, channel, qty) {
    const item = getItem(itemId);
    if (!item) return null;
    const city = R.cityById(cityId) || {};
    const year = S.clock(world).year;
    if (world === "modern") {
      const base = item.pModern != null ? item.pModern : item.pOld;
      const amt = base * cityMul(cityId, item.cat) * supplyFactor(world, cityId, item);
      return {
        item, base, amount: U.round(amt, 2), currency: "CNY",
        ticket: null, channel, factor: supplyFactor(world, cityId, item)
      };
    }
    const base = item.pOld != null ? item.pOld : item.pModern;
    const mul = cityMul(cityId, item.cat) * channelMul(channel) * supplyFactor(world, cityId, item);
    const cny = base * mul;
    const currency = city.currency || "CNY";
    const amount = U.round(R.get("currencies").convert(cny, "CNY", currency, year), 2);
    const needTicket = window.LJ.engine && window.LJ.engine.ticketRequired(world);
    const ticket = (channel === "state" && needTicket) ? (item.ticket && item.ticket !== "none" ? item.ticket : null) : null;
    return {
      item, base, amount, currency, ticket, channel, factor: mul
    };
  }

  function buy(itemId, world, cityId, channel, qty, wallet) {
    const p = price(itemId, world, cityId, channel, qty);
    if (!p) return { ok: false, reason: "无此物品" };
    if (p.ticket) {
      const tickets = wallet.tickets || {};
      if (!tickets[p.ticket] || tickets[p.ticket] < qty) {
        return { ok: false, reason: "缺少" + p.ticket + "（国营商店凭票供应）", needTicket: p.ticket };
      }
    }
    const cost = p.amount * qty;
    if ((wallet.money[p.currency] || 0) < cost) {
      return { ok: false, reason: "余额不足" };
    }
    return { ok: true, price: p, cost: U.round(cost, 2), currency: p.currency, ticket: p.ticket };
  }

  window.LJ.economy = {
    buildItems, getItem, allItems, price, buy, adjustSupply, netSold,
    cityMul, catElasticity, supplyFactor
  };
})();
