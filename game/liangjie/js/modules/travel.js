(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const CL = window.LJ.clock;

  function current() {
    const st = S.get();
    if (!st.currentWorld) st.currentWorld = "modern";
    return st.currentWorld;
  }

  function other(w) { return w === "modern" ? "old" : "modern"; }

  function cooldownInfo() {
    const st = S.get();
    const w = S.world("old").clock;
    const last = st.travel.lastEnterOld;
    const now = { year: w.year, month: w.month, day: w.day };
    if (!last) return { ready: true, remain: 0, days: st.travel.cooldownDays };
    const elapsed = CL.elapsedDays(last, now);
    const remain = Math.max(0, st.travel.cooldownDays - elapsed);
    return { ready: remain <= 0, remain, days: st.travel.cooldownDays, elapsed };
  }

  function crossWorld() {
    const st = S.get();
    const from = current();
    const to = other(from);
    if (from === "old") {
      const cd = cooldownInfo();
      if (!cd.ready) {
        return { ok: false, reason: "穿越冷却中：还需在旧世界待 " + cd.remain + " 天（共 " + cd.days + " 天）" };
      }
    }
    st.currentWorld = to;
    st.travel.crossCount = (st.travel.crossCount || 0) + 1;
    if (to === "old") {
      const w = S.world("old").clock;
      st.travel.lastEnterOld = { year: w.year, month: w.month, day: w.day };
    }
    S.pushLog("穿越到" + (to === "old" ? "1980年代旧世界" : "2026现代世界"));
    return { ok: true, to };
  }

  function hasDoc(docKind, id) {
    const p = S.get().player;
    if (!p.documents) p.documents = { intro: {}, passport: {}, batch: {} };
    return p.documents[docKind] && !!p.documents[docKind][id];
  }

  function grantDoc(docKind, id, kind) {
    const p = S.get().player;
    if (!p.documents) p.documents = { intro: {}, passport: {}, batch: {} };
    p.documents[docKind][id] = kind || "once";
  }

  function cityUnlock(city) {
    if (!city) return { ok: true };
    if (city.era === "modern") return { ok: true };
    const u = city.unlock || {};
    if (u.type === "open" || u.type === "none") return { ok: true };
    if (u.type === "event") {
      const y = S.clock("old").year;
      const m = S.clock("old").month;
      const [ey, em] = (u.event || "1980-01").split("-").map(Number);
      if (y * 100 + m < ey * 100 + em) {
        return { ok: false, reason: u.desc || ("该地需在 " + u.event + " 后解锁") };
      }
      return { ok: true };
    }
    if (u.type === "intro") {
      if (hasDoc("intro", city.id)) return { ok: true };
      return { ok: false, reason: "需要介绍信才能前往" + city.name + "。" + (u.desc || "") };
    }
    if (u.type === "passport") {
      if (hasDoc("passport", city.id)) return { ok: true };
      return { ok: false, reason: "需要公派护照/批文才能出国。" + (u.desc || "") };
    }
    return { ok: true };
  }

  function travelCity(destCityId) {
    return { ok: false, reason: "跨城运输体系暂未开放，目前只在北京市内测试公交系统" };
  }

  function busTo(destDistrict) {
    const w = current();
    const world = S.world(w);
    const cityId = world.cityId;
    const dists = R.get("districts");
    const cityDists = dists && dists[cityId];
    if (!cityDists || !cityDists[destDistrict]) return { ok: false, reason: "无此片区" };
    if (destDistrict === world.districtId) return { ok: false, reason: "你已在该片区" };
    const cost = w === "old" ? 0.1 : 2;
    if (!window.LJ.wallet.spend(w, "CNY", cost)) return { ok: false, reason: "现金不足" };
    const CL = window.LJ.clock;
    CL.advance(w, 30 + Math.round(Math.random() * 20));
    world.districtId = destDistrict;
    const busStop = window.LJ.reg.locationList().find((l) => l.city === cityId && l.district === destDistrict && l.type === "bus_stop");
    world.locationId = busStop ? busStop.id : world.locationId;
    const p = S.get().player;
    p.stats.energy = window.LJ.util.clamp((p.stats.energy || 100) - 3, 0, 100);
    S.pushLog("乘公交抵达" + cityDists[destDistrict].name + "（车费" + (w === "old" ? "¥0.1" : "¥2") + "）");
    return { ok: true, dest: destDistrict };
  }

  function setLocation(locId) {
    const w = current();
    const loc = R.locationById(locId);
    if (!loc) return { ok: false, reason: "无此地点" };
    S.world(w).locationId = locId;
    S.world(w).cityId = loc.city;
    if (loc.district) S.world(w).districtId = loc.district;
    return { ok: true };
  }

  window.LJ.travel = {
    current, other, crossWorld, cooldownInfo, travelCity, setLocation, busTo,
    hasDoc, grantDoc, cityUnlock
  };
})();
