/* 两界搬运工 · 主入口
 * 绑定事件、注册地点渲染器、设置与 AI 聊天弹窗、初始化。
 */
(function () {
  'use strict';
  const LJ = window.LJ;
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  /* —— 家 —— */
  function renderHome(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const home = LJ.Engine.currentCityDef().places.home;
    content.appendChild(el(`<div class="home-panel">
      <h3>${home[0]}</h3><p>${home[1]}</p>
      <div class="panel-note">🚪 ${w === 'modern'
        ? '衣柜后的门通向1980年。注意：穿越只能带背包，家里和仓库的东西都留在原世界。每7天才能穿越一次。'
        : '这扇门通向2026年。淘到的文物、邮票、老酒，带回现代就能变现；每7天可穿越一次。'}</div>
    </div>`));
    content.appendChild(el(`<h3 class="sub">家中的事</h3><div class="cards">
      <div class="card"><h3>😴 睡觉</h3><p>睡8小时，恢复体力。</p><div class="trade-ops"><button data-do="rest">睡觉</button></div></div>
      <div class="card"><h3>🍜 吃喝</h3><p>吃家里的存粮、喝开水。</p><div class="trade-ops"><button data-do="eat">看看有什么</button></div></div>
    </div>`));
    $all('button', content).forEach((b) => {
      if (b.dataset.do === 'rest') b.addEventListener('click', () => LJ.Survival.rest());
      if (b.dataset.do === 'eat') b.addEventListener('click', () => LJ.Survival.renderHomeEating($('#content')));
    });
  }

  function renderHotel(content) {
    const s = LJ.Sys.state;
    const city = LJ.Engine.currentCityDef().name;
    content.appendChild(el(`<div class="panel-note">🏨 ${city}的旅馆。</div>`));
    content.appendChild(el(`<div class="cards"><div class="card"><h3>😴 住一晚</h3><p>${s.world === 'old' ? '2元/晚' : '200元/晚'}，睡8小时。</p><div class="trade-ops"><button data-do="hotel-rest">住宿</button></div></div></div>`));
    $('button[data-do="hotel-rest"]', content).addEventListener('click', () => {
      const s = LJ.Sys.state;
      const cost = s.world === 'old' ? 2 : 200;
      const wallet = s.world === 'modern' ? s.money.modern : s.money.old;
      if (wallet.CNY < cost) { LJ.Engine.toast('住不起。'); return; }
      wallet.CNY -= cost;
      s.player.energy = 100;
      LJ.Engine.advance(8, {});
      LJ.Engine.log(`在${city}的旅馆住了一晚（${cost}元）。`);
      LJ.Engine.toast('😴 一夜安眠，体力恢复。');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    LJ.Survival.renderDining(content);
  }

  function renderCulture(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const cityId = s.city;
    const placeKey = s.location;
    const entry = LJ.CULTURE['culture#' + cityId] || LJ.CULTURE[placeKey] || (w === 'modern' ? LJ.CULTURE['park#modern'] : null);
    const lines = entry ? entry.lines : ['此地风光正好，且行且看。'];
    content.appendChild(el(`<div class="culture-card">${lines.map((l) => `<p>${l}</p>`).join('')}</div>`));
    content.appendChild(el(`<div class="cards"><div class="card"><h3>🚶 散步</h3><p>走走看看，恢复心情。</p><div class="trade-ops"><button data-do="stroll">散步</button></div></div></div>`));
    $('button[data-do="stroll"]', content).addEventListener('click', () => LJ.Survival.stroll());
  }

  /* —— 设置弹窗（AI 接入） —— */
  function openSettings() {
    const s = LJ.Sys.state;
    s.ai = s.ai || { baseUrl: LJ.AI_DEFAULTS.baseUrl, apiKey: LJ.AI_DEFAULTS.apiKey, model: LJ.AI_DEFAULTS.model };
    $('#setBaseUrl').value = s.ai.baseUrl;
    $('#setKey').value = s.ai.apiKey;
    $('#setModel').value = s.ai.model;
    $('#settingsModal').showModal();
  }
  function saveSettings() {
    const s = LJ.Sys.state;
    s.ai = {
      baseUrl: $('#setBaseUrl').value.trim() || LJ.AI_DEFAULTS.baseUrl,
      apiKey: $('#setKey').value.trim() || LJ.AI_DEFAULTS.apiKey,
      model: $('#setModel').value.trim() || LJ.AI_DEFAULTS.model
    };
    LJ.Sys.save();
    $('#settingsModal').close();
    LJ.Engine.toast(LJ.AI.enabled() ? '✅ AI 已接入' : '⚠️ AI 未完整配置');
    LJ.UI.renderAll();
  }

  /* —— AI 聊天弹窗 —— */
  let chatNpc = null;
  let chatHistory = [];
  function openChat(npc) {
    chatNpc = npc;
    chatHistory = [];
    const box = $('#chatBox');
    box.innerHTML = '';
    const intro = el(`<div class="chat-intro"><b>${npc.name} · ${npc.role}</b><p>${npc.persona || npc.desc || ''}</p></div>`);
    box.appendChild(intro);
    $('#chatModal').showModal();
    $('#chatInput').value = '';
    $('#chatSend').disabled = false;
    setTimeout(() => $('#chatInput').focus(), 50);
  }
  async function sendChat() {
    const input = $('#chatInput');
    const text = input.value.trim();
    if (!text || !chatNpc) return;
    input.value = '';
    const box = $('#chatBox');
    box.appendChild(el(`<div class="msg me">${text.replace(/</g, '&lt;')}</div>`));
    const typing = el(`<div class="msg npc typing">${chatNpc.name}正在思索…</div>`);
    box.appendChild(typing);
    box.scrollTop = box.scrollHeight;
    $('#chatSend').disabled = true;
    try {
      const reply = await LJ.AI.chat(chatNpc, text, chatHistory);
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'assistant', content: reply });
      typing.outerHTML = `<div class="msg npc">${reply.replace(/</g, '&lt;').replace(/\n/g, '<br>')}</div>`;
      // 深谈也可提升好感
      LJ.Sys.state.relationships[chatNpc.id] = Math.min(100, (LJ.Sys.state.relationships[chatNpc.id] || 0) + 1);
      if (chatNpc.romance) LJ.Sys.state.romance[chatNpc.id] = Math.min(100, (LJ.Sys.state.romance[chatNpc.id] || 0) + 1);
      LJ.Sys.save(); LJ.UI.renderAll();
    } catch (e) {
      typing.outerHTML = `<div class="msg npc err">（AI 连接失败：${String(e.message || e)}）</div>`;
    }
    $('#chatSend').disabled = false;
    box.scrollTop = box.scrollHeight;
  }

  function init() {
    const s = LJ.Sys.load();
    LJ.EngineStocks.init();

    if (!s.flags.booted) {
      s.flags.booted = true;
      LJ.Engine.log('你站在2026年的出租屋里，衣柜后那扇斑驳的门，通向1980年。');
      LJ.Engine.log('新手：去「批发市场」买点尼龙绳/手电筒/可乐——这些在1980年都是稀罕物；记得备水备粮（人会饿，更会渴）。');
      LJ.Engine.log('穿越只能带背包里的东西，且每7天一次。在1980年卖货换旧币，去「文物商店」淘谜团罐、去黑市囤老茅台，带回2026变现。');
      LJ.Engine.log('想跑外地？在「街道办」办介绍信（需职业或声望8+）。票证来自单位发放、黑市高价、路人以物易物。');
      LJ.Sys.save();
      LJ.Engine.toast('欢迎来到《两界搬运工》重制版');
    }

    // 应用默认 AI 配置（旧配置/空配置一律替换为当前默认接口）
    if (!s.ai || !s.ai.apiKey || s.ai.baseUrl === 'https://tokenrhythm.studio/v1') {
      s.ai = { baseUrl: LJ.AI_DEFAULTS.baseUrl, apiKey: LJ.AI_DEFAULTS.apiKey, model: LJ.AI_DEFAULTS.model };
      LJ.Sys.save();
    }

    // 首启提示接入 AI
    if (!LJ.AI.enabled()) setTimeout(() => {
      openSettings();
      LJ.Engine.toast('💬 建议接入 AI 大模型，NPC 就能真正开口聊天了。');
    }, 600);

    LJ.PlaceRenderers = {
      home: renderHome,
      hotel: renderHotel,
      culture: renderCulture,
      park: renderCulture,
      market: (c, p) => LJ.Trade.renderMarket(c, p),
      wholesale: (c, p) => LJ.Trade.renderWholesale(c, p),
      street: (c) => LJ.Trade.renderStreet(c),
      blackmarket: (c, p) => LJ.Trade.renderBlackMarket(c, p),
      warehouse: (c) => LJ.Trade.renderWarehouse(c),
      gear: (c) => LJ.Trade.renderGear(c),
      property: (c) => LJ.Trade.renderProperty(c),
      restaurant: (c) => LJ.Survival.renderDining(c),
      station: (c) => LJ.Travel.renderIntercity(c),
      airport: (c) => LJ.Travel.renderFlights(c),
      bank: (c) => LJ.Finance.renderBank(c),
      stock: (c) => LJ.Finance.renderStock(c),
      training: (c) => LJ.Career.renderTraining(c),
      office: (c) => LJ.Career.renderOffice(c),
      service: (c) => LJ.Career.renderService(c),
      antique: (c, p) => LJ.Antique.renderAppraise(c, p),
      auction: (c, p) => LJ.Antique.renderAppraise(c, p),
      friendship: (c, p) => LJ.Antique.renderAppraise(c, p),
      pawn: (c) => LJ.Trade.renderPawn(c)
    };

    $('#crossBtn').addEventListener('click', () => LJ.Engine.crossPortal());
    // 全局休息 / 跳过时间
    $('#sleepBtn').addEventListener('click', () => LJ.Survival.rest());
    $('#restBtn').addEventListener('click', () => LJ.Survival.nap());
    $('#waitBtn').addEventListener('click', () => {
      const h = window.prompt('等待多少小时？（1-72，可用于跳过时间到深夜黑市、凑穿越冷却）', '12');
      const n = parseInt(h, 10);
      if (isNaN(n) || n < 1) return;
      LJ.Survival.waitHours(Math.min(n, 72));
    });
    $('#settingsBtn').addEventListener('click', openSettings);
    $('#settingsSave').addEventListener('click', saveSettings);
    $('#settingsCancel').addEventListener('click', () => $('#settingsModal').close());
    $('#chatSend').addEventListener('click', sendChat);
    $('#chatInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChat(); });
    $('#chatClose').addEventListener('click', () => $('#chatModal').close());
    $('#manualSave').addEventListener('click', () => { LJ.Sys.save(); LJ.Engine.toast('✅ 已手动存档'); });
    $('#resetGame').addEventListener('click', () => {
      if (window.confirm('确定要重置《两界搬运工》的全部存档吗？此操作无法撤销。')) { LJ.Sys.reset(); window.location.reload(); }
    });

    LJ.UI.openSettings = openSettings;
    LJ.UI.openChat = openChat;
    LJ.UI.sendChat = sendChat;
    LJ.UI.renderAll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
