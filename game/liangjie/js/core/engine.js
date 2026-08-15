/* 两界搬运工 · 核心引擎
 * 时间推进、世界切换、生存衰减、地点导航、日志。
 * 设计：现代相对静止——在两个世界各自独立计时，任何行动只推进当前世界的时间。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  const BASE_DATE = {
    modern: Date.UTC(2026, 0, 1),
    old: Date.UTC(1980, 0, 1)
  };

  const WEEK = ['日', '一', '二', '三', '四', '五', '六'];

  function state() { return LJ.Sys.state; }
  function currentWorld() { return state().world; }

  function dayIndex(world) {
    return Math.floor(state().time[world]);
  }

  function timeOfDay(world) {
    return ((state().time[world] % 1) + 1) % 1 * 24;
  }

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
    if (!def) {
      // 国际枢纽
      def = (w === 'modern' ? LJ.World.intlModern : LJ.World.intlOld)[cid];
    }
    return def || pool.beijing;
  }

  function currentPlaceDef() {
    const city = currentCityDef();
    return city.places[state().location] || city.places.home;
  }

  // 生存衰减（按小时）
  function drainSurvival(hours) {
    const p = state().player;
    const mul = 1 + (p.hunger < 25 ? 0.2 : 0) + (p.thirst < 25 ? 0.2 : 0);
    p.hunger = Math.max(0, p.hunger - hours * 1.0 * mul);
    p.thirst = Math.max(0, p.thirst - hours * 1.5 * mul);
    p.spirit = Math.max(0, p.spirit - hours * 0.3 * mul);
    p.energy = Math.max(0, p.energy - hours * 0.1 * mul);
    // 极端饥饿/口渴：精力快速流失
    if (p.hunger <= 0 || p.thirst <= 0) {
      p.energy = Math.max(0, p.energy - hours * 2);
    }
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // 推进当前世界时间
  function advance(hours, opts) {
    opts = opts || {};
    const w = currentWorld();
    const before = dayIndex(w);
    state().time[w] += hours / 24;
    drainSurvival(hours);
    if (opts.energy !== undefined) {
      state().player.energy = Math.max(0, state().player.energy - opts.energy);
    }
    const after = dayIndex(w);
    if (after > before) {
      onDayRollover(w, after - before);
    }
    // 在途货物推进
    if (LJ.Trade && LJ.Trade.tickDeliveries) LJ.Trade.tickDeliveries(hours);
    LJ.Sys.save();
  }

  function onDayRollover(world, n) {
    const p = state().player;
    // 存款利息
    if (LJ.Finance && LJ.Finance.tickInterest) LJ.Finance.tickInterest(world);
    // 工资
    if (LJ.Career && LJ.Career.tickJob) LJ.Career.tickJob(world, n);
    if (world === 'old') {
      // 治安值缓慢下降
      p.wanted = Math.max(0, p.wanted - 4 * n);
      state().stats.daysOld += n;
      // 每日限量库存刷新
      state().flags.stockLimit = {};
      // 高治安风险：被联防队盯上
      if (p.wanted >= 80) {
        LJ.Engine.toast('⚠️ 你已被联防队盯上了！请尽快去街道办交代清楚，或降低风险。');
      }
    }
    if (world === 'modern') {
      LJ.EngineStocks.refresh && LJ.EngineStocks.refresh();
    }
  }

  // —— 地点导航（同城移动） ——
  function gotoPlace(placeId) {
    const s = state();
    const city = currentCityDef();
    const place = city.places[placeId];
    if (!place) { LJ.Engine.toast('找不到这个地方'); return; }
    if (s.location === placeId) { return; }
    if (s.player.energy < 3) { LJ.Engine.toast('你累得迈不开腿……勉强挪动，找个地方歇歇吧。'); }
    advance(s.player.energy < 3 ? 0.5 : 0.25, { energy: 2 });
    s.location = placeId;
    LJ.Engine.triggerCulture(placeId);
    LJ.Sys.save();
    LJ.UI && LJ.UI.renderAll();
  }

  // 触发文化诗词
  function triggerCulture(placeId) {
    const s = state();
    const w = currentWorld();
    const cityId = s.city;
    const place = currentCityDef().places[placeId];
    if (!place) return;
    const isCulture = place[2] === 'culture' || place[2] === 'park';
    if (!isCulture) return;
    const key = w + '|' + cityId + '|' + placeId;
    if (s.flags['culture_' + key]) return; // 每个地标只触发一次
    s.flags['culture_' + key] = true;

    let entry = LJ.CULTURE['culture#' + cityId] || LJ.CULTURE[placeId] || (w === 'modern' ? LJ.CULTURE['park#modern'] : null);
    if (!entry) return;
    const line = entry.lines[Math.floor(Math.random() * entry.lines.length)];
    setTimeout(() => {
      LJ.Engine.toast('✒️ ' + entry.title + '：' + line, 6000);
      s.player.spirit = clamp(s.player.spirit + 6, 0, 100);
      LJ.UI && LJ.UI.renderAll();
    }, 300);
  }

  // 首次到访城市弹时代扉页
  function visitCity(cityId) {
    const s = state();
    const w = currentWorld();
    const key = w + ':' + cityId;
    if (s.player.visited[key]) return;
    s.player.visited[key] = true;
    const flavor = LJ.CITY_FLAVOR[cityId];
    if (flavor) {
      setTimeout(() => LJ.Engine.toast('🏙️ ' + flavor, 6000), 400);
    }
  }

  /* —— 穿越 —— */
  function crossPortal() {
    const s = state();
    if (s.player.energy < 5) { LJ.Engine.toast('精力不足，无法穿越。'); return; }
    s.player.energy -= 5;
    s.world = s.world === 'modern' ? 'old' : 'modern';
    // 穿越后落脚在目标世界的"家"
    const w = s.world;
    const city = s.city;
    const target = (w === 'modern' ? LJ.World.modern : LJ.World.old)[city];
    // 旧时/现代的对应城市若不存在则回北京
    if (!target) {
      s.city = 'beijing';
    }
    s.location = 'home';
    s.stats.trips++;
    LJ.Engine.log(s.world === 'modern'
      ? '你推开那扇门，回到了2026年的北京。'
      : '你穿过衣柜后的门，站在了1980年的院子里。');
    LJ.Engine.toast(s.world === 'modern' ? '🌐 你回到了现代（2026）' : '📻 你来到了旧时（1980）');
    LJ.Engine.visitCity(s.city);
    LJ.Sys.save();
    LJ.UI && LJ.UI.renderAll();
  }

  /* —— 日志与提示 —— */
  const MAX_LOG = 60;
  function log(msg) {
    const s = state();
    s.log.unshift({ t: Date.now(), world: s.world, msg: msg });
    if (s.log.length > MAX_LOG) s.log.length = MAX_LOG;
    LJ.Sys.save();
  }
  function toast(msg, ms) {
    LJ.UI && LJ.UI.toast(msg, ms || 3200);
  }

  // 财格式
  function money(n) {
    if (Math.abs(n) >= 10000) return (n / 10000).toFixed(2) + '万';
    return n.toLocaleString('zh-CN', { maximumFractionDigits: 2 });
  }
  function fmtMoney(n, unit) {
    return (unit || '¥') + money(n);
  }

  // 背包重量
  function bagWeight() {
    const s = state();
    return s.bag.reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
  }
  function homeWeight() {
    const s = state();
    return s.home.reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
  }
  function bagCap() {
    const s = state();
    // 现代住宅升级提升容量
    return (s.flags.bagCap || 0) + 30;
  }
  function homeCap() {
    const s = state();
    return (s.flags.homeCap || 0) + 200;
  }

  /* —— 股票价格刷新（现代，按交易日随机漫步） —— */
  LJ.EngineStocks = {
    prices: {},
    init() {
      LJ.Stocks.forEach((st) => {
        this.prices[st.id] = st.base * (0.9 + Math.random() * 0.2);
      });
    },
    refresh() {
      const s = state();
      LJ.Stocks.forEach((st) => {
        let p = this.prices[st.id] || st.base;
        const drift = (Math.random() - 0.48) * 0.04;
        p = p * (1 + drift);
        const prev = this.prices[st.id];
        const limit = Math.max(prev * 0.9, prev * 1.1);
        p = Math.max(Math.min(p, prev * 1.1), prev * 0.9);
        if (p <= 0) p = 0.01;
        this.prices[st.id] = Math.round(p * 100) / 100;
      });
      LJ.Sys.save();
    }
  };

  LJ.Engine = {
    currentWorld,
    currentCityDef,
    currentPlaceDef,
    formatDate,
    timeOfDay,
    dayIndex,
    advance,
    gotoPlace,
    crossPortal,
    visitCity,
    log,
    toast,
    money,
    fmtMoney,
    bagWeight,
    homeWeight,
    bagCap,
    homeCap,
    triggerCulture,
    clamp
  };
})();
