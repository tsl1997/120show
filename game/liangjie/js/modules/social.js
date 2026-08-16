/* 两界搬运工 · 社交与路人系统
 * 静态 NPC（好感度）、动态路人（每张街景不同）、票证以物易物（贪财机制）。
 * 「深谈」可接入 AI 大模型，让 NPC 真正开口。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function npcsInCity(cityId, world) {
    const out = [];
    LJ.Npcs.forEach((n) => { if (n.city === cityId && (n.era || 'old') === world) out.push(n); });
    LJ.Romances.forEach((r) => { if (r.city === cityId && r.era === world) out.push({ id: r.id, name: r.name, city: r.city, role: '恋爱对象', likes: r.likes, romance: true, persona: r.persona }); });
    return out;
  }

  function relationOf(npcId) { return LJ.Sys.state.relationships[npcId] || 0; }

  function talk(npcId) {
    const s = LJ.Sys.state;
    const npc = npcsInCity(s.city, s.world).find((n) => n.id === npcId);
    if (!npc) return;
    if (s.player.energy < 2) { LJ.Engine.toast('太累了，没力气聊天。'); return; }
    // 每天只能寒暄一次
    const day = LJ.Engine.dayIndex(s.world);
    s.flags.talkDay = s.flags.talkDay || {};
    if (s.flags.talkDay[npcId] === day) {
      LJ.Engine.toast(`你和${npc.name}今天已经聊过了，明天再来吧。`);
      return;
    }
    s.flags.talkDay[npcId] = day;
    const gain = 2 + Math.round(s.player.spirit / 30);
    s.relationships[npcId] = Math.min(100, (s.relationships[npcId] || 0) + gain);
    if (npc.romance) s.romance[npcId] = Math.min(100, (s.romance[npcId] || 0) + gain);
    LJ.Engine.advance(0.25, { energy: 2 });
    const line = (npc.lines && npc.lines[Math.floor(Math.random() * npc.lines.length)]) || '“你好啊，同志。”';
    LJ.Engine.log(`与${npc.name}闲聊（好感+${gain}）：${line}`);
    LJ.Engine.toast(`💬 ${npc.name}：${line}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function gift(npcId, itemId) {
    const s = LJ.Sys.state;
    const npc = npcsInCity(s.city, s.world).find((n) => n.id === npcId);
    if (!npc) { LJ.Engine.toast('对方不在这里。'); return; }
    const def = LJ.Items[itemId];
    if (!def) return;
    if (!LJ.Trade.removeItem(s.bag, itemId, 1)) { LJ.Engine.toast('背包里没有这件东西。'); return; }
    const liked = npc.likes.includes(itemId);
    const gain = liked ? 14 : 4;
    s.relationships[npcId] = Math.min(100, (s.relationships[npcId] || 0) + gain);
    if (npc.romance) s.romance[npcId] = Math.min(100, (s.romance[npcId] || 0) + gain);
    LJ.Engine.advance(0.25);
    LJ.Engine.log(`送给${npc.name}「${def.name}」${liked ? '——正中下怀！（好感+14）' : '，他客气地收下了。（好感+4）'}`);
    LJ.Engine.toast(liked ? `🎁 ${npc.name}很喜欢！好感+${gain}` : `🎁 送出${def.name}，好感+${gain}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function deepTalk(npc) {
    if (!LJ.AI || !LJ.AI.enabled()) { LJ.Engine.toast('未接入AI。请在设置中配置模型。'); LJ.UI.openSettings && LJ.UI.openSettings(); return; }
    LJ.UI.openChat && LJ.UI.openChat(npc);
  }

  /* —— 动态路人 —— */
  const TICKET_POOL = ['foodTicket', 'meatTicket', 'clothTicket', 'oilTicket', 'sugarTicket', 'cigaretteTicket', 'wineTicket'];
  function passersby() {
    const s = LJ.Sys.state;
    const key = s.world + '|' + s.city + '|' + LJ.Engine.dayIndex(s.world);
    if (s.flags._passerby === key) return s.flags._passerbyList || [];
    const P = LJ.Passerby;
    const n = 4 + Math.floor(Math.random() * 4);
    const list = [];
    for (let i = 0; i < n; i++) {
      list.push({
        name: P.first[Math.floor(Math.random() * P.first.length)] + P.last[Math.floor(Math.random() * P.last.length)],
        role: P.roles[Math.floor(Math.random() * P.roles.length)],
        intro: P.intros[Math.floor(Math.random() * P.intros.length)],
        ticket: Math.random() < 0.45 ? TICKET_POOL[Math.floor(Math.random() * TICKET_POOL.length)] : null
      });
    }
    s.flags._passerby = key;
    s.flags._passerbyList = list;
    LJ.Sys.save();
    return list;
  }

  function renderPassersby(content) {
    const s = LJ.Sys.state;
    const folks = passersby();
    content.appendChild(el(`<h3 class="sub">街坊路人（${LJ.Engine.currentCityDef().name}）</h3>`));
    const box = el(`<div class="passerby-list">${folks.map((f, i) => {
      const tk = f.ticket ? LJ.Items[f.ticket] : null;
      return `<div class="passerby">
        <div class="pb-head"><b>${f.name}</b><small>${f.role}</small></div>
        <p>${f.intro}</p>
        <div class="pb-ops">
          <button data-pb-talk="${i}">搭话</button>
          ${tk ? `<select data-pb-barter="${i}"><option value="">给TA点东西换${tk.name}…</option>${s.bag.map((b) => `<option value="${b.id}">${LJ.Items[b.id].name}×${b.qty}</option>`).join('')}</select><button data-pb-trade="${i}">以物易物</button>` : ''}
        </div>
      </div>`;
    }).join('')}</div>`);
    $all('button', box).forEach((b) => {
      const idx = Number(b.dataset.pbTalk || b.dataset.pbTrade);
      const f = folks[idx];
      if (!f) return;
      if (b.dataset.pbTalk) b.addEventListener('click', () => {
        LJ.Engine.advance(0.15, { energy: 1 });
        LJ.Engine.toast(`${f.name}（${f.role}）：${f.intro}`);
        LJ.Sys.save(); LJ.UI.renderAll();
      });
      if (b.dataset.pbTrade) b.addEventListener('click', () => {
        const sel = $(`[data-pb-barter="${idx}"]`, box).value;
        if (!sel) { LJ.Engine.toast('先选一件要给的物品。'); return; }
        LJ.Social.barterTicket(idx, sel);
      });
    });
    content.appendChild(box);
  }

  // 贪财机制：对方只接受价值 ≥ 2× 票证价值的物品
  function barterTicket(idx, itemId) {
    const s = LJ.Sys.state;
    const f = passersby()[idx];
    if (!f || !f.ticket) { LJ.Engine.toast('对方并没有票。'); return; }
    const def = LJ.Items[itemId];
    if (!def || !LJ.Trade.removeItem(s.bag, itemId, 1)) { LJ.Engine.toast('背包里没有这样东西。'); return; }
    const tk = LJ.Items[f.ticket];
    const need = tk.old * 2;
    // 用旧时本地行情估值所给物品
    const value = def.old * LJ.Trade.priceFactor('old', s.city, def.cat);
    if (value >= need) {
      LJ.Trade.addItem(s.bag, f.ticket, 1);
      LJ.Engine.advance(0.2);
      LJ.Engine.log(`以「${def.name}」（值约${LJ.Engine.money(value)}元）向${f.name}换得${tk.name}——贪财的路人见利眼开。`);
      LJ.Engine.toast(`🤝 ${f.name}：${tk.name} 到手！`);
    } else {
      LJ.Trade.addItem(s.bag, itemId, 1);
      LJ.Engine.advance(0.1);
      LJ.Engine.toast(`🙅 ${f.name}摇头：这点东西不值当。（需 ≥ ${LJ.Engine.money(need)}元的货，你给的约值${LJ.Engine.money(value)}元）`);
    }
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function renderSocial(content) {
    const s = LJ.Sys.state;
    const npcs = npcsInCity(s.city, s.world);
    if (!npcs.length) { renderPassersby(content); return; }
    content.appendChild(el(`<h3 class="sub">这里的人</h3>`));
    npcs.forEach((npc) => {
      const rel = relationOf(npc.id);
      const box = el(`<div class="npc-card">
        <div class="npc-head"><b>${npc.name}</b><small>${npc.role}${npc.romance ? ' 💕' : ''}</small>
          <div class="relation"><i style="width:${rel}%"></i></div><span class="tiny">好感 ${Math.round(rel)}/100</span></div>
        <div class="npc-ops">
          <button data-talk="${npc.id}">寒暄</button>
          <button data-deep="${npc.id}">💬 深谈</button>
          <select data-gift-sel="${npc.id}"><option value="">送礼…</option>${s.bag.map((x) => `<option value="${x.id}">${LJ.Items[x.id].name}×${x.qty}</option>`).join('')}</select>
          <button data-gift="${npc.id}">送</button>
        </div>
      </div>`);
      $('button[data-talk]', box).addEventListener('click', () => LJ.Social.talk(npc.id));
      $('button[data-deep]', box).addEventListener('click', () => LJ.Social.deepTalk(npc));
      $('button[data-gift]', box).addEventListener('click', () => {
        const item = $('[data-gift-sel="' + npc.id + '"]', box).value;
        if (!item) { LJ.Engine.toast('先选择要送的礼物。'); return; }
        LJ.Social.gift(npc.id, item);
      });
      content.appendChild(box);
    });
    LJ.Romances.forEach((r) => {
      if (r.city === s.city && r.era === s.world) content.appendChild(el(`<div class="panel-note">💕 ${r.desc}<br>${r.tips}</div>`));
    });
    renderPassersby(content);
  }

  LJ.Social = { talk, gift, deepTalk, barterTicket, renderSocial, renderPassersby, passersby, relationOf, npcsInCity };
})();
