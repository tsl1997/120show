/* 两界搬运工 · 状态管理（存档/读档/迁移）
 * v5: 背包是两界唯一通道；家庭/仓库按世界隔离；市场饱和度经济；穿越7天冷却。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const SAVE_KEY = 'liangjie-banyungong-v5';

  function fresh() {
    return {
      version: 5,
      world: 'modern',
      city: 'beijing',
      location: 'home',
      time: { modern: 0, old: 0 },
      flags: {
        arrival: { modern: -7, old: -7 },  // 各世界上次到达时间（冷却基准）
        stockLimit: {},
        bagCap: 20,
        home: {
          modern: { cap: 30, name: '城中村出租屋' },
          old: { cap: 30, name: '南锣鼓巷四合院' }
        },
        registered: { modern: { beijing: true }, old: { beijing: true } }, // 经商登记（户籍城市默认登记）
        talkDay: {},
        booted: false
      },
      player: {
        name: '阿诚',
        energy: 100, hunger: 100, thirst: 100, spirit: 100,
        skills: { english: 0, japanese: 0, appraisal: 0, machinery: 0 },
        certs: [],
        job: null,
        reputation: 0,
        wanted: 0,
        passport: false,
        hkPermit: false,
        visited: {}
      },
      money: {
        modern: { CNY: 3000, USD: 0, HKD: 0, JPY: 0, EUR: 0, GBP: 0, KES: 0 },
        old: { CNY: 20, FEC: 0 },
        fxQuota: { USD: 0 }
      },
      bank: { modern: { CNY: 0 }, old: { CNY: 0 } },
      stock: { cash: 0, pos: {}, boughtAt: {} },
      bag: [],                     // 背包：两界唯一随身通道
      home: { modern: [], old: [] },// 家庭储物按世界隔离
      warehouses: { modern: {}, old: {} },
      deliveries: [],
      market: { modern: {}, old: {} }, // world -> city -> cat -> 饱和度0..1
      relationships: {},
      romance: {},
      ai: null,                    // { baseUrl, apiKey, model }
      stats: { trips: 0, trades: 0, daysOld: 0, earnModern: 0, earnOld: 0, taxPaid: 0 },
      log: []
    };
  }

  function migrate(s) {
    if (!s || typeof s !== 'object') return fresh();
    // 大版本不兼容：保留基础数据，重建结构
    const n = fresh();
    n.world = s.world === 'old' ? 'old' : 'modern';
    if (s.money) {
      if (s.money.modern) n.money.modern = Object.assign(n.money.modern, s.money.modern);
      if (s.money.old) n.money.old = Object.assign(n.money.old, s.money.old);
      if (s.money.fxQuota) n.money.fxQuota = s.money.fxQuota;
    }
    if (s.bank) {
      if (s.bank.modern) n.bank.modern = s.bank.modern;
      if (s.bank.old) n.bank.old = s.bank.old;
    }
    if (s.player) {
      n.player.name = s.player.name || n.player.name;
      n.player.certs = s.player.certs || [];
      n.player.skills = Object.assign(n.player.skills, s.player.skills);
      n.player.job = s.player.job || null;
      n.player.passport = !!s.player.passport;
      n.player.hkPermit = !!s.player.hkPermit;
      n.player.reputation = s.player.reputation || 0;
    }
    if (s.ai) n.ai = s.ai;
    return n;
  }

  let state = null;

  LJ.Sys = {
    fresh,
    load() {
      try {
        const raw = localStorage.getItem(SAVE_KEY);
        state = raw ? migrate(JSON.parse(raw)) : fresh();
      } catch (e) { state = fresh(); }
      return state;
    },
    get state() { return state; },
    set state(s) { state = s; },
    save() {
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) { /* 忽略 */ }
    },
    reset() {
      localStorage.removeItem(SAVE_KEY);
      state = fresh();
      return state;
    }
  };
})();
