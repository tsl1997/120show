(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;

  function anyNpc(id) {
    return R.npc(id) || (window.LJ.passers ? window.LJ.passers.get(id) : null);
  }

  function npcsInCity(cityId) {
    return R.npcList().filter((n) => n.city === cityId);
  }

  function npcAt(locId) {
    return R.npcList().filter((n) => {
      return n.schedule && (n.schedule["早"] === locId || n.schedule["午"] === locId || n.schedule["晚"] === locId);
    });
  }

  function relationship(npcId) {
    return S.get().player.relationships[npcId] || 0;
  }

  function adjustRelationship(npcId, delta) {
    const p = S.get().player;
    const cur = p.relationships[npcId] || 0;
    p.relationships[npcId] = U.clamp(cur + delta, -100, 100);
    return p.relationships[npcId];
  }

  function greeting(npc) {
    const rel = relationship(npc.id);
    if (rel >= 60) return "[" + npc.name + "] 老朋友，别来无恙！";
    if (rel >= 20) return "[" + npc.name + "] 哟，是你啊，进来坐。";
    if (rel <= -30) return "[" + npc.name + "] 你还敢来？";
    return "[" + npc.name + "] 你好，我是" + npc.role + "。";
  }

  function fallbackReply(npc, msg) {
    const rel = relationship(npc.id);
    if (/交易|买|卖|货/.test(msg)) return "[" + npc.name + "] 谈生意得看诚意，先说说你手上有什么好货。";
    if (/谁|你|介绍/.test(msg)) return "[" + npc.name + "] 我不过是个" + npc.role + "，在这" + ((R.cityById(npc.city) || {}).name || "北京") + "讨生活。";
    return "[" + npc.name + "] " + (rel >= 0 ? "有话直说。" : "我不太想搭理你。");
  }

  window.LJ.interaction = { anyNpc, npcsInCity, npcAt, relationship, adjustRelationship, greeting, fallbackReply };
})();
