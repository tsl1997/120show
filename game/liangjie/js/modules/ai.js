(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;

  function cfg() {
    return S.get().settings.ai;
  }

  function isEnabled() {
    const c = cfg();
    return !!c && c.enabled && !!c.url && !!c.key && !!c.model;
  }

  function endpoint() {
    const c = cfg();
    let u = (c.url || "").trim().replace(/\/+$/, "");
    if (!/\/chat\/completions$/.test(u)) u += "/v1/chat/completions";
    return u;
  }

  function recentHistory(world, year, month) {
    const tl = R.get("timeline").items;
    const cur = year * 100 + month;
    return tl.filter((e) => e.y * 100 + e.m <= cur).slice(-12).map((e) => e.y + "年" + e.m + "月：" + e.t);
  }

  function buildSystem(npc) {
    const w = S.clock("old");
    const history = recentHistory("old", w.year, w.month).join("\n");
    return "你正在一个以1980年代中国为起点的跨时代模拟游戏中扮演角色。\n\n" +
      "【你的身份】" + npc.name + "，" + npc.role + "，性别" + npc.gender + "。\n" +
      "【你的性格与立场】" + (npc.persona || "") + "\n" +
      "【你所在的地点】" + (R.cityById(npc.city) || {}).name + "。\n" +
      "【当前时间】" + w.year + "年" + w.month + "月。\n" +
      "【你已知晓的历史】\n" + (history || "（暂无）") + "\n\n" +
      "规则：\n" +
      "1. 你只能用第一人称，语气自然，符合你的身份、性格和时代背景。\n" +
      "2. 你只能依据当前时间点之前已发生的历史作判断，绝不能提及或暗示任何尚未发生的未来事件、未来科技或未来结果。\n" +
      "3. 如果对方（玩家）拿出超乎时代的物品或信息，你会惊讶、警惕、试探，但不会点破「穿越」。\n" +
      "4. 回答简短，一般不超过三句话。";
  }

  async function chat(npc, history) {
    if (!isEnabled()) {
      return window.LJ.interaction.fallbackReply(npc, history && history.length ? history[history.length - 1].content : "");
    }
    const c = cfg();
    const body = {
      model: c.model,
      temperature: c.temperature != null ? c.temperature : 0.8,
      max_tokens: c.maxTokens || 400,
      messages: [
        { role: "system", content: buildSystem(npc) },
        { role: "system", content: "当前与你的关系（好感度）：" + (window.LJ.interaction.relationship(npc.id)) + "。" },
        { role: "system", content: "当玩家给你送礼时，你会根据礼物是否合你心意给出自然反应，并适度影响好感。" }
      ].concat((history || []).slice(-10).map((h) => ({ role: h.role || "user", content: h.content })))
    };
    try {
      const resp = await fetch(endpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + c.key },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        throw new Error("AI请求失败：" + resp.status);
      }
      const data = await resp.json();
      const txt = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      return txt ? txt.trim() : "（无回应）";
    } catch (e) {
      return "（AI连接失败，已转为默认对话）";
    }
  }

  window.LJ.ai = { cfg, isEnabled, endpoint, buildSystem, chat };
})();
