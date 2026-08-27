(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const CL = window.LJ.clock;

  function applyTimeline(year, month) {
    const key = year + "-" + U.pad(month);
    const tl = R.get("timeline").map[key];
    if (!tl) return;
    S.pushLog("【" + tl.y + "年" + U.monthName(tl.m) + "】" + tl.t);
    if (tl.fx && tl.fx.note) {
      S.pushLog("世界变化：" + tl.fx.note);
    }
    if (tl.fx && tl.fx.unlock) {
      tl.fx.unlock.forEach((u) => {
        if (u === "market_economy") {
          S.get().player.flags.marketEconomy = true;
        }
      });
    }
    window.LJ.events.emit("timeline", tl);
  }

  function init() {
    window.LJ.economy.buildItems();
    const st = S.get();
    const ai = st.settings.ai;
    if (!ai || !ai.url) {
      Object.assign(ai, {
        enabled: true,
        url: "https://api.siliconflow.cn",
        model: "deepseek-ai/DeepSeek-V4-Flash",
        key: "sk-ugfucoamcdqueicunqhqugynccatnllxksdmmsfucbatpdbt"
      });
    }
    if (!st.inited) {
      st.inited = true;
      const m = window.LJ.wallet.get("modern").money;
      if (!m.CNY) window.LJ.wallet.add("modern", "CNY", 10000);
      const o = window.LJ.wallet.get("old").money;
      if (!o.CNY) window.LJ.wallet.add("old", "CNY", 50);
      if (!st.player.documents) st.player.documents = { intro: {}, passport: {}, batch: {} };
      st.currentWorld = st.currentWorld || "modern";
      S.pushLog("欢迎来到两界搬运工。现代大本营：先囤货，再穿越到1980。");
      S.pushLog("旧世界新手路线：街道办办户口 → 领定量票 → 国营商店凭票购物 / 鸽子市黑市交易。");
      S.save();
    }
  }

  function ticketRequired(world) {
    if (world !== "old") return false;
    const w = S.clock("old");
    return (w.year < 1992) || (w.year === 1992 && w.month < 5);
  }

  window.LJ.engine = { applyTimeline, init, ticketRequired };
})();
