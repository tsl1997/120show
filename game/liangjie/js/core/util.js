(function () {
  "use strict";
  window.LJ = window.LJ || {};

  const uid = (p) => (p || "id") + "_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  const round = (v, d) => {
    const m = Math.pow(10, d == null ? 2 : d);
    return Math.round((v + Number.EPSILON) * m) / m;
  };

  const fmtMoney = (v, cur) => {
    if (v == null || isNaN(v)) return "—";
    const c = cur || "¥";
    const neg = v < 0 ? "-" : "";
    const abs = Math.abs(v);
    if (abs >= 1e12) return neg + c + (abs / 1e12).toFixed(2) + "万亿";
    if (abs >= 1e8) return neg + c + (abs / 1e8).toFixed(2) + "亿";
    if (abs >= 1e4) return neg + c + (abs / 1e4).toFixed(2) + "万";
    return neg + c + abs.toFixed(2);
  };

  const fmtInt = (v) => (v == null || isNaN(v) ? "—" : Math.round(v).toLocaleString("zh-CN"));

  const fmtNum = (v, d) => (v == null || isNaN(v) ? "—" : Number(v).toFixed(d == null ? 2 : d));

  const pad = (n, len) => String(n).padStart(len || 2, "0");

  const deepClone = (o) => {
    if (o == null || typeof o !== "object") return o;
    if (Array.isArray(o)) return o.map(deepClone);
    const out = {};
    for (const k of Object.keys(o)) out[k] = deepClone(o[k]);
    return out;
  };

  const rng = (seed) => {
    let s = seed >>> 0 || 123456789;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  };

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const weightedPick = (pairs) => {
    const total = pairs.reduce((s, p) => s + (p[1] || 0), 0);
    if (total <= 0) return null;
    let r = Math.random() * total;
    for (const p of pairs) {
      r -= p[1];
      if (r <= 0) return p[0];
    }
    return pairs[pairs.length - 1][0];
  };

  const sum = (arr, fn) => arr.reduce((s, x) => s + (fn ? fn(x) : x), 0);

  const byId = (arr, id) => (arr || []).find((x) => x.id === id);

  const has = (obj, key) => obj != null && Object.prototype.hasOwnProperty.call(obj, key);

  const hashCode = (str) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) | 0;
    }
    return h >>> 0;
  };

  const monthName = (m) => ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"][m - 1];

  window.LJ.util = {
    uid,
    clamp,
    round,
    fmtMoney,
    fmtInt,
    fmtNum,
    pad,
    deepClone,
    rng,
    pick,
    shuffle,
    weightedPick,
    sum,
    byId,
    has,
    hashCode,
    monthName
  };
})();
