(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const U = window.LJ.util;
  const E = window.LJ.economy;

  function weight(itemId, qty) {
    const it = E.getItem(itemId);
    return it ? (it.weight || 1) * qty : qty;
  }
  function volume(itemId, qty) {
    const it = E.getItem(itemId);
    return it ? (it.volume || 1) * qty : qty;
  }

  function invTotal(entries) {
    let w = 0, v = 0;
    (entries || []).forEach((e) => { w += weight(e.id, e.qty); v += volume(e.id, e.qty); });
    return { weight: U.round(w, 2), volume: U.round(v, 2) };
  }

  function find(entries, id) {
    return (entries || []).find((e) => e.id === id);
  }

  function add(entries, id, qty) {
    if (qty <= 0) return;
    const e = find(entries, id);
    if (e) e.qty += qty;
    else entries.push({ id, qty });
  }

  function remove(entries, id, qty) {
    const e = find(entries, id);
    if (!e || e.qty < qty) return false;
    e.qty -= qty;
    if (e.qty <= 0) entries.splice(entries.indexOf(e), 1);
    return true;
  }

  function count(entries, id) {
    const e = find(entries, id);
    return e ? e.qty : 0;
  }

  function backpack() {
    return S.get().player.inventory;
  }

  function bpCapacity() {
    const p = S.get().player;
    return { weight: p.carryWeight, volume: p.carryVolume };
  }

  function bpTotal() {
    return invTotal(backpack());
  }

  function canAddBackpack(id, qty) {
    const cap = bpCapacity();
    const t = bpTotal();
    const w = weight(id, qty);
    const v = volume(id, qty);
    return { ok: (t.weight + w <= cap.weight + 1e-6) && (t.volume + v <= cap.volume + 1e-6), weight: w, volume: v, remainWeight: cap.weight - t.weight, remainVolume: cap.volume - t.volume };
  }

  function addBackpack(id, qty) {
    const chk = canAddBackpack(id, qty);
    if (!chk.ok) return { ok: false, reason: "背包超重/超容" };
    add(backpack(), id, qty);
    return { ok: true };
  }

  function removeBackpack(id, qty) {
    return { ok: remove(backpack(), id, qty) };
  }

  function warehouse(world, locId) {
    const w = S.world(world);
    if (!w.warehouse) w.warehouse = {};
    if (!w.warehouse[locId]) w.warehouse[locId] = [];
    return w.warehouse[locId];
  }

  function addWarehouse(world, locId, id, qty) {
    add(warehouse(world, locId), id, qty);
  }

  function removeWarehouse(world, locId, id, qty) {
    return remove(warehouse(world, locId), id, qty);
  }

  function tickets(world) {
    const w = S.world(world);
    if (!w.tickets) w.tickets = { 粮票: 0, 布票: 0, 肉票: 0, 油票: 0, 副食票: 0, 工业券: 0 };
    return w.tickets;
  }

  function spendTickets(world, kind, qty) {
    const t = tickets(world);
    if (!t[kind] || t[kind] < qty) return false;
    t[kind] -= qty;
    return true;
  }

  function grantTickets(world, kind, qty) {
    const t = tickets(world);
    t[kind] = (t[kind] || 0) + qty;
  }

  function wallet(world) {
    const w = S.world(world);
    if (!w.wallet) w.wallet = {};
    if (!w.wallet.money) w.wallet.money = {};
    return w.wallet;
  }
  function money(world, cur) {
    return wallet(world).money[cur] || 0;
  }
  function addMoney(world, cur, amt) {
    const w = wallet(world);
    w.money[cur] = U.round((w.money[cur] || 0) + amt, 2);
  }
  function spendMoney(world, cur, amt) {
    const w = wallet(world);
    if ((w.money[cur] || 0) < amt) return false;
    w.money[cur] = U.round(w.money[cur] - amt, 2);
    return true;
  }
  function walletList(world) {
    const w = wallet(world).money;
    return Object.keys(w).filter((k) => w[k] !== 0).map((k) => ({ cur: k, amt: w[k] }));
  }

  window.LJ.inventory = {
    weight, volume, invTotal, find, add, remove, count,
    backpack, bpCapacity, bpTotal, canAddBackpack, addBackpack, removeBackpack,
    warehouse, addWarehouse, removeWarehouse,
    tickets, spendTickets, grantTickets,
    wallet, money, addMoney, spendMoney, walletList
  };
  window.LJ.wallet = {
    money, add: addMoney, spend: spendMoney, list: walletList, get: wallet
  };
})();
