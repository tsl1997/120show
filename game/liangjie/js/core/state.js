/* 两界搬运工 · 状态管理（存档/读档/迁移） */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const SAVE_KEY = 'liangjie-banyungong-v3';

  function fresh() {
    return {
      version: 3,
      world: 'modern',        // 当前世界 modern | old
      city: 'beijing',        // 当前城市
      location: 'home',       // 当前地点
      time: { modern: 0, old: 0 }, // 距基准日的天数
      player: {
        name: '阿诚',
        energy: 100, hunger: 100, thirst: 100, spirit: 100,
        skills: { english: 0, japanese: 0, appraisal: 0, machinery: 0 },
        certs: [],
        job: null,
        reputation: 0,   // 旧时社会声望
        wanted: 0,       // 治安风险
        passport: false, // 现代护照
        introLetter: false, // 1980 介绍信
        hkPermit: false, // 港澳通行证
        visited: {}      // 城市首次到访标记
      },
      money: {
        modern: { CNY: 3000, USD: 0, HKD: 0, JPY: 0, EUR: 0, GBP: 0, KES: 0 },
        old: { CNY: 20, FEC: 0 },   // 1980 起始 20 元
        fxQuota: { USD: 0 }         // 年度购汇额度已用（美元当量）
      },
      bank: {
        modern: { CNY: 0 }, // 现代活期存款
        old: { CNY: 0 }     // 旧时存款
      },
      stock: { cash: 0, pos: {}, boughtAt: {} },
      bag: [],              // [{id, qty}]
      home: [],             // 家储物
      warehouses: {},       // cityId -> [{id, qty}]
      deliveries: [],       // {id, fromCity, toCity, items, hoursLeft, world}
      relationships: {},    // npcId -> 好感度
      romance: {},          // romanceId -> {score, phase}
      flags: {},
      stats: { trips: 0, trades: 0, earnModern: 0, earnOld: 0, daysOld: 0 },
      log: []
    };
  }

  function migrate(s) {
    if (!s || typeof s !== 'object') return fresh();
    s.version = 3;
    s.time = s.time || { modern: 0, old: 0 };
    s.player = s.player || {};
    s.player.skills = s.player.skills || { english: 0, japanese: 0, appraisal: 0, machinery: 0 };
    s.player.certs = s.player.certs || [];
    s.player.visited = s.player.visited || {};
    s.money = s.money || {};
    s.money.modern = s.money.modern || { CNY: 3000, USD: 0, HKD: 0, JPY: 0, EUR: 0, GBP: 0, KES: 0 };
    s.money.old = s.money.old || { CNY: 20, FEC: 0 };
    s.money.fxQuota = s.money.fxQuota || { USD: 0 };
    s.bank = s.bank || { modern: { CNY: 0 }, old: { CNY: 0 } };
    s.stock = s.stock || { cash: 0, pos: {} };
    s.bag = s.bag || [];
    s.home = s.home || [];
    s.warehouses = s.warehouses || {};
    s.deliveries = s.deliveries || [];
    s.relationships = s.relationships || {};
    s.romance = s.romance || {};
    s.flags = s.flags || {};
    s.stats = s.stats || {};
    s.log = s.log || [];
    s.world = s.world || 'modern';
    s.city = s.city || 'beijing';
    s.location = s.location || 'home';
    return s;
  }

  let state = null;

  LJ.Sys = {
    fresh,
    load() {
      try {
        const raw = localStorage.getItem(SAVE_KEY);
        state = raw ? migrate(JSON.parse(raw)) : fresh();
      } catch (e) {
        state = fresh();
      }
      return state;
    },
    get state() { return state; },
    set state(s) { state = s; },
    save() {
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) { /* 忽略配额错误 */ }
    },
    reset() {
      localStorage.removeItem(SAVE_KEY);
      state = fresh();
      return state;
    }
  };
})();
