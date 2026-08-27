(function () {
  "use strict";
  window.LJ = window.LJ || {};
  window.LJ.data = window.LJ.data || {};

  const registry = {};

  function register(name, value) {
    registry[name] = value;
    window.LJ.data[name] = value;
  }

  function get(name) {
    return registry[name] || window.LJ.data[name] || null;
  }

  function list(name) {
    const v = get(name);
    return v && v.items ? v.items : v || [];
  }

  function listAll(name, colls) {
    const seen = {};
    const out = [];
    colls.forEach((c) => {
      const v = get(c);
      if (v && v.items) v.items.forEach((x) => {
        if (seen[x.id] != null) { out[seen[x.id]] = x; return; }
        seen[x.id] = out.length;
        out.push(x);
      });
    });
    return out;
  }

  function mapAll(name, colls) {
    const m = {};
    listAll(name, colls).forEach((x) => { m[x.id] = x; });
    return m;
  }

  const LOC_COLLS = ["locations", "locations_bj"];
  const NPC_COLLS = ["npcs", "npcs_bj"];

  const locMap = () => mapAll("locations", LOC_COLLS);
  const npcMap = () => mapAll("npcs", NPC_COLLS);

  function locationById(id) {
    return locMap()[id] || null;
  }
  function locationList() {
    return listAll("locations", LOC_COLLS);
  }
  function cityById(id) {
    const cities = get("cities") || {};
    return (cities.map || {})[id] || null;
  }
  function npc(id) {
    return npcMap()[id] || null;
  }
  function npcList() {
    return listAll("npcs", NPC_COLLS);
  }

  window.LJ.reg = {
    register,
    get,
    list,
    listAll,
    locationById,
    locationList,
    cityById,
    npc,
    npcList
  };
})();
