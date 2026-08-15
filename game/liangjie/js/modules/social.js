/* 两界搬运工 · 社交与恋爱系统
 * 与NPC寒暄、投其所好送礼培养好感；好感高了，人脉就是最大的财富。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function npcsInCity(cityId, world) {
    const out = [];
    LJ.Npcs.forEach((n) => { if (n.city === cityId && (n.era || 'old') === world) out.push(n); });
    LJ.Romances.forEach((r) => { if (r.city === cityId && r.era === world) out.push({ id: r.id, name: r.name, city: r.city, role: '恋爱对象', likes: r.likes, romance: true }); });
    return out;
  }

  function relationOf(npcId) {
    return LJ.Sys.state.relationships[npcId] || 0;
  }

  function talk(npcId) {
    const s = LJ.Sys.state;
    const npc = npcsInCity(s.city, s.world).find((n) => n.id === npcId);
    if (!npc) return;
    if (s.player.energy < 2) { LJ.Engine.toast('太累了，没力气聊天。'); return; }
    const spirit = s.player.spirit;
    const gain = 2 + Math.round(spirit / 30);
    s.relationships[npcId] = Math.min(100, (s.relationships[npcId] || 0) + gain);
    if (npc.romance) {
      s.romance[npcId] = Math.min(100, (s.romance[npcId] || 0) + gain);
    }
    LJ.Engine.advance(0.25, { energy: 2 });
    const line = LJ.NPC_LINES[Math.floor(Math.random() * LJ.NPC_LINES.length)];
    LJ.Engine.log(`与${npc.name}闲聊：${line}`);
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
    LJ.Engine.log(`送给${npc.name}「${def.name}」${liked ? '——正中下怀，他眼睛都亮了！' : '，他客气地收下了。'}（好感+${gain}）`);
    LJ.Engine.toast(liked ? `🎁 ${npc.name}很喜欢！好感+${gain}` : `🎁 送出了${def.name}，好感+${gain}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function renderSocial(content) {
    const s = LJ.Sys.state;
    const npcs = npcsInCity(s.city, s.world);
    if (!npcs.length) return;
    content.appendChild(el(`<h3 class="sub">这里的人</h3>`));
    npcs.forEach((npc) => {
      const rel = relationOf(npc.id);
      const box = el(`<div class="npc-card">
        <div class="npc-head"><b>${npc.name}</b><small>${npc.role}${npc.romance ? ' 💕' : ''}</small>
          <div class="relation"><i style="width:${rel}%"></i></div>
          <span class="tiny">好感 ${Math.round(rel)}/100</span>
        </div>
        <div class="npc-ops">
          <button data-talk="${npc.id}">寒暄</button>
          <select data-gift-sel="${npc.id}"><option value="">送礼…</option>${s.bag.map((x) => `<option value="${x.id}">${LJ.Items[x.id] ? LJ.Items[x.id].name : x.id}×${x.qty}</option>`).join('')}</select>
          <button data-gift="${npc.id}">送</button>
        </div>
      </div>`);
      $('button[data-talk]', box).addEventListener('click', () => LJ.Social.talk(npc.id));
      $('button[data-gift]', box).addEventListener('click', () => {
        const item = $('[data-gift-sel="' + npc.id + '"]', box).value;
        if (!item) { LJ.Engine.toast('先选择要送的礼物。'); return; }
        LJ.Social.gift(npc.id, item);
      });
      content.appendChild(box);
    });
    // 恋爱提示
    const romances = npcs.filter((n) => n.romance);
    if (romances.length) {
      romances.forEach((r) => {
        const rc = LJ.Romances.find((x) => x.id === r.id);
        if (rc) content.appendChild(el(`<div class="panel-note">💕 ${rc.desc}<br>${rc.tips}</div>`));
      });
    }
  }

  LJ.Social = { talk, gift, renderSocial, relationOf, npcsInCity };
})();
