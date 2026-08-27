(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const U = window.LJ.util;

  const SAVE_KEY = "liangjie_save_v1";
  const VERSION = 8;

  function defaultWorld(which) {
    return {
      id: which,
      clock: {
        year: which === "modern" ? 2026 : 1980,
        month: 1,
        day: 1,
        hour: 8,
        minute: 0
      },
      paused: false,
      cityId: which === "modern" ? "bj_modern" : "bj_1980",
      districtId: "south",
      locationId: which === "modern" ? "bj_modern_chengyuan" : "bj_1980_dazayuan",
      wallet: {},
      bank: {},
      stocks: [],
      properties: [],
      warehouse: {},
      queued: []
    };
  }

  function defaultPlayer() {
    return {
      name: "主角",
      gender: "男",
      age: 28,
      hometown: "北京",
      inventory: [],
      carryWeight: 30,
      carryVolume: 60,
      skills: {},
      certificates: {},
      reputation: {},
      relationships: {},
      flags: {},
      quests: [],
      stats: {
        energy: 100,
        satiety: 100,
        health: 100,
        mood: 80
      }
    };
  }

  function defaultState() {
    return {
      version: VERSION,
      seed: Math.floor(Math.random() * 1e9),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      player: defaultPlayer(),
      worlds: {
        modern: defaultWorld("modern"),
        old: defaultWorld("old")
      },
      travel: {
        level: "7d",
        cooldownDays: 7,
        lastCrossOld: null,
        crossCount: 0
      },
      settings: {
        ai: {
          enabled: true,
          url: "https://api.siliconflow.cn",
          model: "deepseek-ai/DeepSeek-V4-Flash",
          key: "sk-ugfucoamcdqueicunqhqugynccatnllxksdmmsfucbatpdbt",
          temperature: 0.8,
          maxTokens: 400
        },
        pace: "normal",
        tutorials: true,
        autosave: true
      },
      log: [],
      priceCache: {},
      supplyCache: {}
    };
  }

  let _state = null;

  function get() {
    if (!_state) {
      _state = load() || defaultState();
    }
    return _state;
  }

  function set(s) {
    _state = s;
  }

  function save() {
    const s = get();
    s.updatedAt = Date.now();
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(s));
      return true;
    } catch (e) {
      return false;
    }
  }

  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (s && s.version === VERSION) return s;
      return migrate(s);
    } catch (e) {
      return null;
    }
  }

  function migrate(old) {
    return old || defaultState();
  }

  function newGame(opts) {
    const s = defaultState();
    s.seed = Math.floor(Math.random() * 1e9);
    if (opts) {
      if (opts.name) s.player.name = opts.name;
      if (opts.gender) s.player.gender = opts.gender;
      if (opts.age) s.player.age = opts.age;
      if (opts.travelLevel) {
        s.travel.level = opts.travelLevel;
        s.travel.cooldownDays = opts.travelLevel === "15d" ? 15 : opts.travelLevel === "30d" ? 30 : 7;
      }
      if (opts.ai) Object.assign(s.settings.ai, opts.ai);
    }
    _state = s;
    save();
    return s;
  }

  function reset() {
    localStorage.removeItem(SAVE_KEY);
    _state = null;
  }

  function hasSave() {
    try {
      return !!localStorage.getItem(SAVE_KEY);
    } catch (e) {
      return false;
    }
  }

  function world(which) {
    return get().worlds[which];
  }

  function clock(which) {
    return world(which).clock;
  }

  function pushLog(s) {
    const g = get();
    g.log.unshift({ t: Date.now(), s: s });
    if (g.log.length > 500) g.log.length = 500;
  }

  window.LJ.state = {
    get,
    set,
    save,
    load,
    newGame,
    reset,
    hasSave,
    world,
    clock,
    pushLog,
    VERSION
  };
})();
