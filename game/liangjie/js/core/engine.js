/* 两界搬运工 · 核心引擎
 * 时间推进、生存衰减、地点导航（含到访消耗）、穿越（7天冷却）、日志。
 * 两界各自计时：现代相对静止；穿越只能随身携带背包。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  const BASE_DATE = { modern: Date.UTC(2026, 0, 1), old: Date.UTC(1980, 0, 1) };
  const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
  const PORTAL_COOLDOWN_DAYS = 7;

  function state() { return LJ.Sys.state; }
  function currentWorld() { return state().world; }

  function dayIndex(world) { return Math.floor(state().time[world]); }
  function timeOfDay(world) { return ((state().time[world] % 1) + 1) % 1 * 24; }

  function formatDate(world) {
    const days = state().time[world];
    const d = new Date(BASE_DATE[world] + days * 86400000);
    const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1, day = d.getUTCDate();
    const hh = String(d.getUTCHours()).padStart(2, '0');
    const mm = String(d.getUTCMinutes()).padStart(2, '0');
    const label = world === 'modern' ? '现代·2026' : '旧时·1980';
    return `${y}年${m}月${day}日 周${WEEK[d.getUTCDay()]} ${hh}:${mm} ${label}`;
  }

  function currentCityDef() {
    const w = currentWorld();
    const pool = w === 'modern' ? LJ.World.modern : LJ.World.old;
    const cid = state().city;
    let def = pool[cid];
    if (!def) def = (w === 'modern' ? LJ.World.intlModern : LJ.World.intlOld)[cid];
    return def || pool.beijing;
  }

  function currentPlaceDef() {
    const city = currentCityDef();
    return city.places[state().location] || city.places.home;
  }

  // —— 生存衰减（按小时） ——
  function drainSurvival(hours) {
    const p = state().player;
    const mul = 1 + (p.hunger < 25 ? 0.2 : 0) + (p.thirst < 25 ? 0.2 : 0);
    p.hunger = Math.max(0, p.hunger - hours * 1.0 * mul);
    p.thirst = Math.max(0, p.thirst - hours * 1.5 * mul);
    p.spirit = Math.max(0, p.spirit - hours * 0.3 * mul);
    p.energy = Math.max(0, p.energy - hours * 0.1 * mul);
    if (p.hunger <= 0 || p.thirst <= 0) p.energy = Math.max(0, p.energy - hours * 2);
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // —— 推进当前世界时间 ——
  function advance(hours, opts) {
    opts = opts || {};
    const w = currentWorld();
    const before = dayIndex(w);
    state().time[w] += hours / 24;
    drainSurvival(hours);
    if (opts.energy !== undefined) state().player.energy = Math.max(0, state().player.energy - opts.energy);
    const after = dayIndex(w);
    if (after > before) onDayRollover(w, after - before);
    if (LJ.Trade && LJ.Trade.driftMarket) LJ.Trade.driftMarket(hours);
    if (LJ.Trade && LJ.Trade.tickDeliveries) LJ.Trade.tickDeliveries(hours);
    LJ.Sys.save();
  }

  function onDayRollover(world, n) {
    const p = state().player;
    if (LJ.Finance && LJ.Finance.tickInterest) LJ.Finance.tickInterest(world);
    if (LJ.Career && LJ.Career.tickJob) LJ.Career.tickJob(world, n);
    if (world === 'old') {
      p.wanted = Math.max(0, p.wanted - 4 * n);
      state().stats.daysOld += n;
      state().flags.stockLimit = {};
      if (p.wanted >= 80) toast('⚠️ 你已被联防队盯上了！去街道办交代，或收敛些。');
    }
  }

  // —— 穿越（7天冷却；只带背包） ——
  function crossReady(world) {
    const f = state().flags.arrival;
    return state().time[world] - (f[world] === undefined ? -7 : f[world]) >= PORTAL_COOLDOWN_DAYS;
  }
  function cooldownLeft(world) {
    const f = state().flags.arrival;
    const base = f[world] === undefined ? -7 : f[world];
    return Math.max(0, Math.ceil(PORTAL_COOLDOWN_DAYS - (state().time[world] - base)));
  }
  function crossPortal() {
    const s = state();
    if (s.player.energy < 5) { toast('精力不足，无法穿越。'); return; }
    if (!crossReady(s.world)) {
      toast(`🌀 传送门在冷却中。还需 ${cooldownLeft(s.world)} 天才能再次穿越。`);
      return;
    }
    s.player.energy -= 5;
    s.world = s.world === 'modern' ? 'old' : 'modern';
    // 只有背包会跟着你走；家庭储物留在原来的世界
    const w = s.world;
    const target = (w === 'modern' ? LJ.World.modern : LJ.World.old)[s.city];
    if (!target) s.city = 'beijing';
    s.location = 'home';
    s.flags.arrival[w] = state().time[w];
    s.stats.trips++;
    log(s.world === 'modern'
      ? '你推开那扇门，回到了2026年。背包里的东西跟着你，家里的东西留在了1980。'
      : '你穿过衣柜后的门，站在1980年的院子里。背包是你仅有的行囊。');
    toast(s.world === 'modern' ? '🌐 你回到了现代（2026）' : '📻 你来到了旧时（1980）');
    visitCity(s.city);
    LJ.Sys.save();
    if (LJ.UI) LJ.UI.renderAll();
  }

  // —— 同城导航（含到访消耗） ——
  function gotoPlace(placeId) {
    const s = state();
    const place = currentCityDef().places[placeId];
    if (!place) { toast('找不到这个地方'); return; }
    if (s.location === placeId) { if (LJ.UI) LJ.UI.renderAll(); return; }
    const cost = place[6] || { time: 15, energy: 2, hunger: 0.6, thirst: 0.8 };
    if (s.player.energy < 2) { toast('你累得迈不开腿……先找个地方歇歇。'); return; }
    const moveHours = (cost.time / 60);
    advance(moveHours, { energy: cost.energy });
    s.player.hunger = Math.max(0, s.player.hunger - (cost.hunger || 0));
    s.player.thirst = Math.max(0, s.player.thirst - (cost.thirst || 0));
    s.location = placeId;
    triggerCulture(placeId);
    LJ.Sys.save();
    if (LJ.UI) LJ.UI.renderAll();
  }

  function triggerCulture(placeId) {
    const s = state();
    const w = currentWorld();
    const cityId = s.city;
    const place = currentCityDef().places[placeId];
    if (!place) return;
    const isCulture = place[2] === 'culture' || place[2] === 'park';
    if (!isCulture) return;
    const key = w + '|' + cityId + '|' + placeId;
    if (s.flags['culture_' + key]) return;
    s.flags['culture_' + key] = true;
    let entry = LJ.CULTURE['culture#' + cityId] || LJ.CULTURE[placeId] || (w === 'modern' ? LJ.CULTURE['park#modern'] : null);
    if (!entry) return;
    const line = entry.lines[Math.floor(Math.random() * entry.lines.length)];
    setTimeout(() => {
      toast('✒️ ' + entry.title + '：' + line, 6000);
      s.player.spirit = clamp(s.player.spirit + 6, 0, 100);
      if (LJ.UI) LJ.UI.renderAll();
    }, 300);
  }

  function visitCity(cityId) {
    const s = state();
    const w = currentWorld();
    const key = w + ':' + cityId;
    if (s.player.visited[key]) return;
    s.player.visited[key] = true;
    const flavor = LJ.CITY_FLAVOR[cityId];
    if (flavor) setTimeout(() => toast('🏙️ ' + flavor, 6000), 400);
  }

  const MAX_LOG = 60;
  function log(msg) {
    const s = state();
    s.log.unshift({ t: Date.now(), world: s.world, msg: msg });
    if (s.log.length > MAX_LOG) s.log.length = MAX_LOG;
    LJ.Sys.save();
  }
  function toast(msg, ms) {
    if (LJ.UI && LJ.UI.toast) LJ.UI.toast(msg, ms || 3200);
  }

  function money(n) {
    if (Math.abs(n) >= 10000) return (n / 10000).toFixed(2) + '万';
    return n.toLocaleString('zh-CN', { maximumFractionDigits: 2 });
  }
  function fmtMoney(n, unit) { return (unit || '¥') + money(n); }

  // 背包 / 家庭储物重量
  function bagWeight() {
    const s = state();
    return s.bag.reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
  }
  function homeWeight(world) {
    const s = state();
    const w = world || s.world;
    return s.home[w].reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
  }
  function bagCap() { return state().flags.bagCap || 20; }
  function homeCap(world) {
    const s = state();
    const w = world || s.world;
    return (s.flags.home[w] && s.flags.home[w].cap) || 30;
  }
  function homeName(world) {
    const s = state();
    const w = world || s.world;
    return (s.flags.home[w] && s.flags.home[w].name) || '住所';
  }

  /* —— 股票价格刷新 —— */
  LJ.EngineStocks = {
    prices: {},
    init() { LJ.Stocks.forEach((st) => { this.prices[st.id] = st.base * (0.9 + Math.random() * 0.2); }); },
    refresh() {
      LJ.Stocks.forEach((st) => {
        let p = this.prices[st.id] || st.base;
        p = p * (1 + (Math.random() - 0.48) * 0.04);
        p = Math.max(Math.min(p, (this.prices[st.id] || st.base) * 1.1), (this.prices[st.id] || st.base) * 0.9);
        if (p <= 0) p = 0.01;
        this.prices[st.id] = Math.round(p * 100) / 100;
      });
      LJ.Sys.save();
    }
  };

  LJ.Engine = {
    currentWorld, currentCityDef, currentPlaceDef,
    formatDate, timeOfDay, dayIndex,
    advance, gotoPlace, crossPortal, crossReady, cooldownLeft,
    visitCity, log, toast, money, fmtMoney,
    bagWeight, homeWeight, bagCap, homeCap, homeName,
    clamp, triggerCulture
  };
})();
