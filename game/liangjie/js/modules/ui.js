(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const R = window.LJ.reg;
  const U = window.LJ.util;
  const CL = window.LJ.clock;
  const E = window.LJ.economy;
  const INV = window.LJ.inventory;
  const W = window.LJ.wallet;
  const TR = window.LJ.travel;
  const SH = window.LJ.shopping;
  const FIN = window.LJ.finance;
  const INT = window.LJ.interaction;
  const GIFT = window.LJ.gift;

  const $ = (id) => document.getElementById(id);
  let activeTab = "travel";
  let selectedNpc = null;

  const TYPE_NAME = {
    residence: "住处", state_store: "国营商店", market: "市场", black_market: "黑市",
    friend_store: "友谊商店", antique_market: "古玩/文物", government: "政府机构",
    bank: "银行", tourism: "景点", hotel: "旅馆", food: "食宿", freight: "货运",
    factory: "工厂/单位", school: "学校", hospital: "医院", culture: "文化"
  };
  function typeName(t) { return TYPE_NAME[t] || t; }

  function catName(c) {
    const cm = R.get("categories") && R.get("categories").map;
    return (cm && cm[c]) ? cm[c].name : (c || "");
  }

  const SERVICES = {
    hukou: ["办理户口登记", "¥5"],
    tickets: ["领取本月定量票", "每月一次"],
    intro: ["开具介绍信", "¥1/城"],
    hotel: ["住宿一晚", "恢复体力"],
    hospital: ["看病", "恢复健康"],
    work: ["找活干(1天)", "挣钱糊口"],
    bank: ["存取款", ""],
    sight: ["游览", ""],
    tkt_black: ["黑市买票证", ""],
    big_black: ["黑市买大件票", ""],
    training: ["技能培训", "考证"],
    online: ["网购特产", "全国发货"],
    daigou: ["海外代购", "奢侈品"],
    property: ["购房", "扩充载荷"],
    company: ["注册公司", "¥10万"],
    dmv: ["驾照·上牌", ""],
    buycar: ["购买载具", ""],
    barber: ["理发", "¥0.2"],
    bath: ["泡澡", "¥0.3"],
    security: ["治安查询", ""],
    batch: ["申请批文", "需关系"],
    train: ["查看火车时刻", ""],
    bus: ["乘公交", "¥0.1跨片区"],
    farm: ["购置农场", "¥50万"],
    openshop: ["租下门店", "¥20万"]
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  function toast(msg, type) {
    let root = document.querySelector(".toast-root");
    if (!root) {
      root = document.createElement("div");
      root.className = "toast-root";
      document.body.appendChild(root);
    }
    const el = document.createElement("div");
    el.className = "toast" + (type ? " " + type : "");
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(() => { el.remove(); }, 3000);
  }

  function curEnergy() { return S.get().player.stats.energy || 0; }
  function curSatiety() { return S.get().player.stats.satiety || 0; }

  function costEnergy(c, satCost) {
    const p = S.get().player;
    if ((p.stats.energy || 0) < c) {
      toast("体力不足，请先「进食」或「下一天(睡觉)」恢复", "err");
      return false;
    }
    p.stats.energy = U.clamp((p.stats.energy || 0) - c, 0, 100);
    p.stats.satiety = U.clamp((p.stats.satiety || 0) - (satCost || 0), 0, 100);
    return true;
  }

  function foodRestore(item) {
    const map = {
      food_staple: { sat: 40, energy: 12 },
      food_fresh: { sat: 25, energy: 18 },
      food_processed: { sat: 20, energy: 10 }
    };
    const base = map[item.cat] || { sat: 15, energy: 5 };
    const tier = item.tier || 1;
    return {
      sat: Math.min(100, base.sat + (tier - 1) * 5),
      energy: Math.min(30, base.energy + (tier - 1) * 3)
    };
  }

  function getQty(id) {
    const inp = document.querySelector('input[data-qty="' + id + '"]');
    let q = 1;
    if (inp) {
      q = parseInt(inp.value, 10);
      if (isNaN(q) || q < 1) q = 1;
    }
    return q;
  }

  function hud() {
    const w = TR.current();
    const st = S.get();
    const cl = S.clock(w);
    const city = R.cityById(S.world(w).cityId);
    const wallet = W.list(w);
    const moneyStr = wallet.length ? wallet.map((x) => U.fmtMoney(x.amt, R.get("currencies").map[x.cur] ? R.get("currencies").map[x.cur].symbol : x.cur)).join(" / ") : "¥0";
    const p = st.player;
    const cd = TR.cooldownInfo();
    const era = w === "old";
    return `
      <div class="stat"><small>世界</small><b class="${era ? "t5" : "t4"}">${era ? "1980旧世界" : "2026现代"}</b></div>
      <div class="stat"><small>时间</small><b>${CL.dateShort(w)} ${U.pad(cl.hour)}:${U.pad(cl.minute)}</b></div>
      <div class="stat"><small>地点</small><b>${esc(city ? city.name : "")}</b></div>
      <div class="stat"><small>现金</small><b class="t2 mono">${moneyStr}</b></div>
      <div class="stat"><small>体力</small><b class="${p.stats.energy < 30 ? "bad" : "t3"}">${Math.round(p.stats.energy)}</b></div>
      <div class="stat"><small>饱腹</small><b class="${p.stats.satiety < 30 ? "bad" : "t3"}">${Math.round(p.stats.satiety)}</b></div>
      <div class="stat"><small>穿越冷却</small><b class="${cd.ready ? "t3" : "bad"}">${cd.ready ? "就绪" : "还需" + cd.remain + "天"}</b></div>`;
  }

  function cultureText(loc) {
    if (!loc || !loc.culture) return "";
    const C = R.get("culture");
    return loc.culture.map((c) => {
      const v = C[c];
      if (!v) return "";
      return `<p class="muted">「${esc(v.text)}」${v.author ? " ——" + esc(v.author) : ""}</p>`;
    }).join("");
  }

  function districtInfo(cityId, districtId) {
    const dists = R.get("districts");
    if (dists && dists[cityId] && dists[cityId][districtId]) return dists[cityId][districtId];
    return { name: districtId || "", tag: "", desc: "" };
  }

  function sceneActions() {
    const w = TR.current();
    const world = S.world(w);
    const loc = R.locationById(world.locationId);
    const city = R.cityById(world.cityId);
    const dInfo = districtInfo(world.cityId, world.districtId);
    const locs = R.locationList().filter((l) => l.city === world.cityId && (l.district || "south") === (world.districtId || "south"));
    const npcs = INT.npcAt(world.locationId);
    let html = "";

    if (locs.length > 1) {
      html += `<div class="divider"></div><div class="bold">${esc(dInfo.name)}片区 · ${esc(dInfo.tag)} <span class="muted">（片区内可步行前往，体力-4）</span></div><div class="muted" style="font-size:12.5px">${esc(dInfo.desc)}</div><div class="actions">`;
      locs.forEach((l) => {
        const act = l.id === world.locationId ? " active" : "";
        html += `<button class="btn${act}" data-act="goto" data-loc="${l.id}">${esc(l.name)}<span class="muted"> · ${esc(typeName(l.type))}</span></button>`;
      });
      html += `</div>`;
    }

    if (loc.services && loc.services.length) {
      html += `<div class="divider"></div><div class="bold">此处服务</div><div class="actions">`;
      loc.services.forEach((s) => {
        const def = SERVICES[s] || [s, ""];
        html += `<button class="btn" data-act="svc" data-svc="${s}">${esc(def[0])}<span class="muted">${def[1] ? " · " + def[1] : ""}</span></button>`;
      });
      html += `</div>`;
    }

    const offers = SH.listOffers(world.locationId);
    if (offers.length) {
      html += `<div class="divider"></div><div class="bold">${esc(loc.name)} · 可购买</div><div class="card-grid">`;
      offers.forEach((o) => {
        const needTicket = o.ticket ? `<div class="sub red">需${esc(o.ticket)}</div>` : "";
        html += `<div class="item-card">
          <div class="nm">${esc(o.item.name)}</div>
          <div class="pc">${U.fmtMoney(o.price, R.get("currencies").map[o.currency].symbol)}</div>
          <div class="sub">${esc(catName(o.item.cat))} · ${U.fmtNum(o.item.volume, 1)}L/${U.fmtNum(o.item.weight, 1)}kg · 库存${o.qty}</div>
          ${needTicket}
          <div class="card-buy">
            <input type="number" class="qty-input" data-qty="${o.id}" value="1" min="1" max="${o.qty}">
            <button class="btn sm primary" data-act="buy" data-id="${o.id}">买入</button>
          </div>
        </div>`;
      });
      html += `</div>`;
    }

    html += `<div class="divider"></div><div class="bold">出售背包物品${loc.buyCat && loc.buyCat.length ? `<span class="muted">（此处收购：${loc.buyCat.map((c) => catName(c)).join("、")}）</span>` : (loc.buyCat === null ? `<span class="muted">（黑市来者不拒）</span>` : `<span class="muted">（此处不收任何物品）</span>`)}</div>`;
    const bp = INV.backpack();
    const sellable = bp.filter((e) => {
      const item = E.getItem(e.id);
      return item && SH.canSellAt(loc, item);
    });
    if (sellable.length) {
      html += `<div class="card-grid">`;
      sellable.forEach((e) => {
        const item = E.getItem(e.id);
        const ch = loc.type === "black_market" ? "black" : loc.type === "friend_store" ? "fec" : "free";
        const p = E.price(e.id, w, world.cityId, ch, 1);
        if (!p) return;
        html += `<div class="item-card">
          <div class="nm">${esc(item.name)} <span class="muted">x${e.qty}</span></div>
          <div class="pc green">${U.fmtMoney(U.round(p.amount * 0.6, 2), R.get("currencies").map[p.currency].symbol)}</div>
          <div class="sub">${esc(catName(item.cat))} · ${U.fmtNum(item.volume, 1)}L/${U.fmtNum(item.weight, 1)}kg</div>
          <div class="card-buy">
            <input type="number" class="qty-input" data-qty="${e.id}" value="1" min="1" max="${e.qty}">
            <button class="btn sm" data-act="sell" data-id="${e.id}">卖出</button>
          </div>
        </div>`;
      });
      html += `</div>`;
    } else {
      html += `<p class="empty">背包空空如也，或此处不收购你背包里的物品。</p>`;
    }

    if (npcs.length) {
      html += `<div class="divider"></div><div class="bold">此地人物</div><div class="actions stack">`;
      npcs.forEach((n) => {
        const rel = INT.relationship(n.id);
        html += `<button class="btn" data-act="talk" data-npc="${n.id}">${esc(n.name)} <span class="muted">· ${esc(n.role)} · 好感 ${rel}</span></button>`;
      });
      html += `</div>`;
    }

    if (w === "old" && window.LJ.passers) {
      const ps = window.LJ.passers.at(world.locationId, w);
      if (ps.length) {
        html += `<div class="divider"></div><div class="bold">街上的路人</div><div class="actions">`;
        ps.forEach((p) => {
          const rel = INT.relationship(p.id);
          html += `<button class="btn" data-act="talk" data-npc="${p.id}">${esc(p.name)}<span class="muted"> · ${esc(p.role)}${rel ? " · " + rel : ""}</span></button>`;
        });
        html += `</div>`;
      }
    }

    return html;
  }

  function renderScene() {
    const w = TR.current();
    const world = S.world(w);
    const loc = R.locationById(world.locationId);
    const city = R.cityById(world.cityId);
    const dInfo = districtInfo(world.cityId, world.districtId);
    const era = w === "old";
    $("sceneHead").innerHTML = `<span>${esc(city ? city.name : "")}·${esc(dInfo.name)} · ${esc(loc ? loc.name : "")}</span><span class="era-badge ${era ? "old" : "modern"}">${era ? "1980年代" : "2026现代"}</span>`;
    const desc = loc ? esc(loc.desc || "") : "";
    $("sceneBody").innerHTML = `
      <div class="scene-text"><p>${desc}</p>${cultureText(loc)}</div>
      <div class="actions">
        <button class="btn primary" data-act="cross">${era ? "回到2026现代" : "穿越到1980"}</button>
        <button class="btn" data-act="rest">休息(1小时)</button>
        <button class="btn" data-act="eat">进食</button>
        <button class="btn" data-act="nextDay">下一天(睡觉)</button>
      </div>
      ${sceneActions()}`;
  }

  function renderLog() {
    const log = S.get().log.slice(0, 80);
    $("logList").innerHTML = log.map((l) => `<div><span class="t">${new Date(l.t).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}</span>${esc(l.s)}</div>`).join("") || `<div class="empty">暂无记录</div>`;
  }

  function sideTravel() {
    const w = TR.current();
    const cd = TR.cooldownInfo();
    const st = S.get();
    return `
      <div class="bold">两界穿越</div>
      <p class="muted">冷却档位：${st.travel.cooldownDays} 天</p>
      <p>当前在：<b>${w === "old" ? "1980旧世界" : "2026现代"}</b></p>
      <div class="list-row"><span class="grow">穿越冷却</span><b class="${cd.ready ? "green" : "red"}">${cd.ready ? "就绪" : "还需" + cd.remain + "天"}</b></div>
      <div class="list-row"><span class="grow">累计穿越</span><b>${st.travel.crossCount || 0} 次</b></div>
      <div class="actions stack" style="margin-top:10px">
        <button class="btn primary" data-act="cross">${w === "old" ? "回到2026现代" : "穿越到1980"}</button>
      </div>
      <p class="muted" style="margin-top:8px">规则：进入旧世界后须待满冷却天数才能返回现代；现代为相对静止的大本营。</p>`;
  }

  function sideBackpack() {
    const bp = INV.backpack();
    const t = INV.bpTotal();
    const cap = INV.bpCapacity();
    const w = TR.current();
    const tk = w === "old" ? INV.tickets("old") : null;
    let tkHtml = "";
    if (tk) {
      tkHtml = `<div class="divider"></div><div class="bold">票证（旧世界）</div>`;
      tkHtml += Object.keys(tk).filter((k) => tk[k] > 0).map((k) => `<span class="tag">${esc(k)} ${tk[k]}</span>`).join("") || `<p class="empty">无票证（去街道办领定量票或黑市购买）</p>`;
    }
    return `
      <div class="bold">背包</div>
      <div class="list-row"><span class="grow muted">负重</span><b>${t.weight} / ${cap.weight} kg</b></div>
      <div class="list-row"><span class="grow muted">容积</span><b>${t.volume} / ${cap.volume} L</b></div>
      ${tkHtml}
      <div class="divider"></div>
      ${bp.length ? bp.map((e) => {
        const it = E.getItem(e.id);
        return it ? `<div class="list-row"><span class="grow"><span class="name">${esc(it.name)}</span><span class="sub"> x${e.qty} · ${esc(catName(it.cat))} · ${U.fmtNum(it.weight, 1)}kg/${U.fmtNum(it.volume, 1)}L</span></span></div>` : "";
      }).join("") : `<p class="empty">背包空空如也</p>`}`;
  }

  function sideWallet() {
    const w = TR.current();
    const list = W.list(w);
    const b = FIN.bank(w);
    const dep = b.deposits || {};
    return `
      <div class="bold">资金（${w === "old" ? "旧世界" : "现代"}）</div>
      <div class="divider"></div>
      ${list.length ? list.map((x) => `<div class="list-row"><span class="grow">${esc((R.get("currencies").map[x.cur] || {}).name || x.cur)}</span><b class="mono">${U.fmtMoney(x.amt, (R.get("currencies").map[x.cur] || {}).symbol || x.cur)}</b></div>`).join("") : `<p class="empty">无现金</p>`}
      <div class="divider"></div><div class="bold">银行存款</div>
      ${Object.keys(dep).length ? Object.keys(dep).map((k) => `<div class="list-row"><span class="grow">${esc(k)}</span><b class="mono">${U.fmtMoney(dep[k], k)}</b></div>`).join("") : `<p class="empty">无存款</p>`}
      <div class="divider"></div>
      <p class="muted">存取款与外汇兑换请前往银行机构办理（${w === "old" ? "城西·人民银行储蓄所" : "城东·CBD金融区"}）。股票与公司系统暂未开放。</p>`;
  }

  function sideBus() {
    const w = TR.current();
    const world = S.world(w);
    const dists = R.get("districts");
    const cityDists = dists && dists[world.cityId] ? dists[world.cityId] : {};
    const keys = Object.keys(cityDists);
    const fare = w === "old" ? "¥0.1" : "¥2";
    return `
      <div class="bold">公交出行</div>
      <p class="muted">当前在：<b>${esc(cityDists[world.districtId] ? cityDists[world.districtId].name : "")}片区</b></p>
      <div class="actions stack" style="margin-top:8px">
      ${keys.map((k) => {
        const d = cityDists[k];
        const active = k === world.districtId;
        return `<button class="btn${active ? " active" : ""}" data-act="bus" data-district="${k}" ${active ? "disabled" : ""}>${esc(d.name)} <span class="muted">· ${esc(d.tag)} · ${fare}</span></button>`;
      }).join("")}
      </div>
      <div class="divider"></div>
      <p class="muted">跨城交通暂未开放，目前只在北京城内测试公交体系。</p>`;
  }

  function sideNpc() {
    const w = TR.current();
    const city = S.world(w).cityId;
    const npcs = INT.npcsInCity(city);
    return `
      <div class="bold">人脉（本城）</div>
      <div class="actions stack" style="margin-top:8px">
      ${npcs.length ? npcs.map((n) => `<button class="btn" data-act="talk" data-npc="${n.id}">${esc(n.name)} <span class="muted">· ${esc(n.role)} · ${INT.relationship(n.id)}</span></button>`).join("") : `<p class="empty">本城暂无结识的人物</p>`}
      </div>`;
  }

  function renderSide() {
    const map = { travel: sideTravel, backpack: sideBackpack, wallet: sideWallet, bus: sideBus, npc: sideNpc };
    $("sidePanel").innerHTML = (map[activeTab] || sideTravel)();
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === activeTab));
  }

  function render() {
    $("hud").innerHTML = hud();
    renderScene();
    renderLog();
    renderSide();
  }

  function openModal(title, bodyHtml, footHtml) {
    const root = $("modalRoot");
    root.hidden = false;
    root.innerHTML = `
      <div class="modal">
        <div class="modal-head"><span>${esc(title)}</span><button class="modal-close" data-close>×</button></div>
        <div class="modal-body">${bodyHtml}</div>
        ${footHtml ? `<div class="modal-foot">${footHtml}</div>` : ""}
      </div>`;
  }

  function closeModal() { $("modalRoot").hidden = true; $("modalRoot").innerHTML = ""; }

  function talkModal(npcId) {
    selectedNpc = npcId;
    const npc = INT.anyNpc(npcId);
    if (!npc) return;
    const rel = INT.relationship(npcId);
    let profileHtml = "";
    if (npc.passerby && window.LJ.passers) {
      const prof = window.LJ.passers.profile(npcId);
      const tkTxt = prof && prof.tickets ? Object.keys(prof.tickets).filter((k) => prof.tickets[k] > 0).map((k) => k + prof.tickets[k]).join("、") : "无";
      profileHtml = `
        <div class="divider"></div><div class="bold">他的档案</div>
        <div class="list-row"><span class="grow muted">手头现金</span><b>¥${prof ? U.fmtMoney(prof.cash) : "—"}</b></div>
        <div class="list-row"><span class="grow muted">持有票据</span><span>${esc(tkTxt)}</span></div>
        ${npc.link ? `<div class="list-row"><span class="grow muted">关系</span><span>${esc(npc.link)}</span></div>` : ""}`;
    }
    openModal(npc.name + " · " + npc.role, `
      <div class="list-row"><span class="grow">好感度</span><b>${rel}</b></div>
      <div class="list-row"><span class="grow">身份</span><span>${esc(npc.role)} · ${esc(npc.wealth)}</span></div>
      <div class="list-row"><span class="grow">标签</span><span>${(npc.tags || []).slice(0, 10).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</span></div>
      ${profileHtml}
      <div class="divider"></div>
      <div id="chatBox" class="muted" style="min-height:60px">${esc(INT.greeting(npc))}</div>
      <div class="actions" style="margin-top:8px">
        <button class="btn" data-act="gift">送礼</button>
        ${npc.passerby ? `<button class="btn gold" data-act="trade">私下交易</button>` : `<button class="btn" data-act="bribe">贿赂(¥1000)</button>`}
      </div>
      <div class="field" style="margin-top:8px">
        <input id="chatInput" placeholder="说点什么…（按回车发送）">
      </div>`, `<button class="btn" data-close>离开</button>`);
    const inp = $("chatInput");
    if (inp) inp.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") sendChat(npcId);
    });
  }

  async function sendChat(npcId) {
    const inp = $("chatInput");
    if (!inp || !inp.value.trim()) return;
    const msg = inp.value.trim();
    inp.value = "";
    const box = $("chatBox");
    if (box) box.innerHTML = "…";
    const npc = INT.anyNpc(npcId);
    if (!npc) return;
    const reply = await window.LJ.ai.chat(npc, [{ role: "user", content: msg }]);
    if (box) box.textContent = reply;
  }

  function giftModal(npcId) {
    const npc = INT.anyNpc(npcId);
    if (!npc) return;
    const matches = GIFT.matchGifts(npcId);
    openModal("给 " + npc.name + " 送礼", `
      <p class="muted">系统已自动匹配与你相称的物品（标签最合、价格最高者优先）。</p>
      <div class="actions stack">
      ${matches.length ? matches.slice(0, 12).map((m) => `<button class="btn" data-act="give" data-npc="${npcId}" data-id="${m.id}">${esc(m.name)} <span class="muted">x${m.qty} · 匹配${m.score}</span></button>`).join("") : `<p class="empty">背包中没有适合此人的礼物。</p>`}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function eatModal() {
    const bp = INV.backpack();
    const foods = bp.map((e) => ({ e, item: E.getItem(e.id) }))
      .filter((f) => f.item && ["food_staple", "food_fresh", "food_processed"].indexOf(f.item.cat) >= 0);
    openModal("进食恢复体力", `
      <p class="muted">吃背包里的食物可恢复饱腹与体力。当前饱腹 ${Math.round(curSatiety())}，体力 ${Math.round(curEnergy())}。</p>
      <div class="actions stack">
      ${foods.length ? foods.map((f) => {
        const rv = foodRestore(f.item);
        return `<button class="btn" data-act="consume" data-id="${f.e.id}">${esc(f.item.name)} <span class="muted">x${f.e.qty}</span> → 饱腹+${rv.sat} 体力+${rv.energy}</button>`;
      }).join("") : `<p class="empty">背包里没有吃的（粮油主食/生鲜副食/加工食品）。</p>`}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function busModal() {
    const w = TR.current();
    const world = S.world(w);
    const dists = R.get("districts");
    const cityDists = dists && dists[world.cityId] ? dists[world.cityId] : {};
    const fare = w === "old" ? "¥0.1" : "¥2";
    const curName = cityDists[world.districtId] ? cityDists[world.districtId].name : "";
    openModal("乘公交（" + fare + "）", `
      <p class="muted">从${esc(curName)}出发，选择目的地片区。</p>
      <div class="actions stack">
      ${Object.keys(cityDists).map((k) => {
        const d = cityDists[k];
        return `<button class="btn" data-act="bus" data-district="${k}" ${k === world.districtId ? "disabled" : ""}>${esc(d.name)} · ${esc(d.tag)}</button>`;
      }).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function tradeModal(npcId) {
    const npc = INT.anyNpc(npcId);
    if (!npc || !window.LJ.passers) return;
    const cityId = S.world(TR.current()).cityId;
    const as = window.LJ.passers.assets(npcId);
    const tkTxt = Object.keys(as.tickets).filter((k) => as.tickets[k] > 0).map((k) => k + as.tickets[k]).join("、") || "无";
    const bp = INV.backpack();
    const seen = {};
    const scarce = [];
    bp.forEach((e) => {
      const item = E.getItem(e.id);
      if (item && window.LJ.passers.wantsItem(item) && !seen[e.id]) {
        seen[e.id] = 1;
        scarce.push({ id: e.id, item, qty: e.qty });
      }
    });
    openModal("与 " + npc.name + " 私下交易", `
      <p class="muted">他手头有 <b>¥${U.fmtMoney(as.cash)}</b> 现金，持有票据：${esc(tkTxt)}。稀缺货他愿意按略高于市价的价格收。</p>
      <div class="actions stack">
      ${scarce.length ? scarce.map((s) => {
        const offer = window.LJ.passers.tradeOffer(npcId, s.id, 1, cityId);
        if (!offer.ok) return `<div class="list-row"><span class="grow">${esc(s.item.name)} x${s.qty}</span><span class="muted">${esc(offer.reason)}</span></div>`;
        return `<div class="list-row">
          <span class="grow"><span class="name">${esc(s.item.name)}</span> <span class="muted">x${s.qty} · 市价${U.fmtMoney(offer.unit)}/件</span></span>
          <span class="green bold">出价${U.fmtMoney(offer.ask)}</span>
          <input type="number" class="qty-input" data-qty="${s.id}" value="1" min="1" max="${s.qty}">
          <button class="btn sm gold" data-act="doTrade" data-npc="${npcId}" data-id="${s.id}">成交</button>
        </div>`;
      }).join("") : `<p class="empty">你背包里没有他看得上的稀缺货（电子表、尼龙袜、蛤蟆镜、随身听、红白机、麦乳精、巧克力等）。</p>`}
      </div>`, `<button class="btn" data-close>离开</button>`);
  }

  function newGameModal() {
    openModal("新游戏 · 两界搬运工", `
      <p>选择穿越冷却档位（决定每次进入旧世界需待满多少天才能返回，调节游戏节奏）：</p>
      <div class="actions stack">
        <button class="btn" data-start="7d">7天 · 快节奏</button>
        <button class="btn" data-start="15d">15天 · 标准</button>
        <button class="btn" data-start="30d">30天 · 慢节奏</button>
      </div>`, "");
  }

  function settingsModal() {
    const ai = S.get().settings.ai;
    openModal("设置", `
      <div class="field"><label>角色名</label><input id="setName" value="${esc(S.get().player.name)}"></div>
      <div class="field"><label>AI 接入（OpenAI 通用协议）</label>
        <input id="setAiUrl" placeholder="接口地址" value="${esc(ai.url || "")}">
        <input id="setAiKey" placeholder="API Key" value="${esc(ai.key || "")}" style="margin-top:6px">
        <input id="setAiModel" placeholder="模型名" value="${esc(ai.model || "")}" style="margin-top:6px">
        <div class="hint">填好 URL/Key/模型后勾选启用，NPC 将以 AI 驱动；未启用时用内置脚本对话。</div>
      </div>
      <label><input type="checkbox" id="setAiEnabled" ${ai.enabled ? "checked" : ""}> 启用 AI 驱动 NPC</label>`, `
      <button class="btn" data-close>取消</button>
      <button class="btn primary" id="saveSettings">保存</button>`);
    $("saveSettings").onclick = () => {
      const st = S.get();
      st.player.name = $("setName").value || "主角";
      st.settings.ai.url = $("setAiUrl").value.trim();
      st.settings.ai.key = $("setAiKey").value.trim();
      st.settings.ai.model = $("setAiModel").value.trim();
      st.settings.ai.enabled = $("setAiEnabled").checked;
      S.save();
      closeModal();
      render();
      toast("设置已保存", "ok");
    };
  }

  function helpModal() {
    openModal("玩法说明", `
      <p><b>核心</b>：两界搬运工——在现代(2026北京)购买廉价物资，穿越到1980旧世界高价卖出；再把旧世界的古董、票证、特产带回现代变现。</p>
      <p><b>穿越冷却</b>：进入旧世界后须待满 7/15/30 天才能返回现代。</p>
      <p><b>票证</b>：先到街道办办户口，再每月领取定量票；国营商店凭票购买，黑市可买票证和不要票的交易。</p>
      <p><b>体力</b>：行动消耗体力；体力不足可「进食」或「下一天(睡觉)」恢复。</p>
      <p><b>动态物价</b>：同一物品不同城市价格不同；大量出货压低价格，大量买入推高价格。</p>
      <p><b>售卖地点</b>：物品只能在相应地方出售——古玩字画去文物商店/古玩城，粮食副食去菜市场，药材去药店，黑市什么都收。</p>
      <p><b>送礼</b>：系统自动匹配背包中适合当前人物的礼物，标签最合、价格最高者优先。</p>
      <p><b>AI</b>：已预置 SiliconFlow 接口(DeepSeek)，NPC 与路人由 AI 驱动；AI 只能读历史，不能读未来。</p>`, `<button class="btn" data-close>知道了</button>`);
  }

  function introModal() {
    const st = S.get();
    const cities = R.get("cities").items.filter((c) => c.era === "old" && c.unlock && c.unlock.type === "intro" && c.id !== "bj_1980");
    openModal("开具介绍信（¥1/城）", `
      <p class="muted">一次性介绍信，凭它可坐火车前往目标城市。想办永久介绍信需要与官方人物搞好关系。</p>
      <div class="actions stack">
      ${cities.map((c) => {
        const has = TR.hasDoc("intro", c.id);
        return `<button class="btn" data-act="buyIntro" data-city="${c.id}" ${has ? "disabled" : ""}>${esc(c.name)} ${has ? "（已持有）" : "¥1"}</button>`;
      }).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function ticketModal() {
    const prices = [["粮票", 0.25], ["布票", 2.0], ["肉票", 1.5], ["油票", 1.0], ["副食票", 0.6], ["工业券", 0.5]];
    openModal("黑市购买票证", `
      <p class="muted">鸽子市倒爷手里什么票都有，价格按黑市行情。</p>
      <div class="actions stack">
      ${prices.map(([k, p]) => `<div class="list-row"><span class="grow">${esc(k)} · ¥${p}/张</span><input type="number" class="qty-input" data-tktqty="${k}" value="0" min="0" max="999"><button class="btn sm" data-act="buyTicket" data-kind="${k}">买</button></div>`).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function bigTicketModal() {
    const prices = [["自行车票", 60], ["缝纫机票", 50], ["彩电票", 120], ["手表票", 40], ["烟票", 2], ["特供票", 10]];
    openModal("黑市购买大件票", `
      <p class="muted">大件票金贵，黑市上更是一票难求。</p>
      <div class="actions stack">
      ${prices.map(([k, p]) => `<div class="list-row"><span class="grow">${esc(k)} · ¥${p}</span><button class="btn sm" data-act="buyBigTicket" data-kind="${k}">买</button></div>`).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function trainingModal() {
    const w = TR.current();
    const courses = [
      { id: "english", name: "英语培训", cost: 5000, days: 10, cert: "雅思" },
      { id: "japanese", name: "日语培训", cost: 5000, days: 10, cert: "JLPT" },
      { id: "russian", name: "俄语培训", cost: 5000, days: 10, cert: "俄语等级" },
      { id: "appraisal", name: "文物鉴定班", cost: 8000, days: 15, cert: "文物鉴定师证" },
      { id: "computer", name: "计算机培训", cost: 6000, days: 12, cert: "软考" },
      { id: "finance", name: "金融培训", cost: 5000, days: 10, cert: "证券从业" },
      { id: "driving", name: "驾驶培训", cost: 4000, days: 7, cert: "驾照" }
    ];
    const p = S.get().player;
    openModal("技能培训（" + (w === "old" ? "旧世界" : "现代") + "）", `
      <p class="muted">现代培训更系统，通过后获得证书，在旧世界解锁职业与特权。</p>
      <div class="actions stack">
      ${courses.map((c) => {
        const lv = p.skills[c.id] || 0;
        return `<button class="btn" data-act="train" data-id="${c.id}">${esc(c.name)} <span class="muted">¥${c.cost} · ${c.days}天</span> ${lv ? `<span class="green">已学${lv}级</span>` : ""}</button>`;
      }).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function onlineModal() {
    const items = R.get("items_province").items;
    openModal("网购全国特产", `
      <p class="muted">下单后约2天送达工业园区仓储提货，结算用现代人民币。</p>
      <div class="card-grid">
      ${items.map((it) => `<div class="item-card">
        <div class="nm">${esc(it.name)}</div>
        <div class="pc">${U.fmtMoney(it.pModern)}</div>
        <div class="sub">${esc(catName(it.cat))}</div>
        <div class="card-buy"><input type="number" class="qty-input" data-qty="${it.id}" value="1" min="1"><button class="btn sm primary" data-act="orderOnline" data-id="${it.id}">下单</button></div>
      </div>`).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function daigouModal() {
    const items = R.get("items_luxury").items;
    openModal("海外代购奢侈品（" + items.length + " 种）", `
      <p class="muted">日欧美港直邮，约5天送达大兴机场国际仓储提货。</p>
      <div class="card-grid">
      ${items.map((it) => `<div class="item-card">
        <div class="nm">${esc(it.name)}</div>
        <div class="pc">${U.fmtMoney(it.pModern)}</div>
        <div class="sub">${esc(catName(it.cat))} · ${it.tier === 5 ? "顶级" : "高级"}</div>
        <div class="card-buy"><input type="number" class="qty-input" data-qty="${it.id}" value="1" min="1"><button class="btn sm primary" data-act="orderDaigou" data-id="${it.id}">下单</button></div>
      </div>`).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function propertyModal() {
    const props = [
      { id: "apt_suburb", name: "近郊公寓", cost: 2000000, carry: 20 },
      { id: "flat_city", name: "城区大平层", cost: 8000000, carry: 60 },
      { id: "mansion", name: "独栋豪宅", cost: 30000000, carry: 200 }
    ];
    const held = S.get().worlds.modern.properties || [];
    openModal("购房", `
      <p class="muted">房产扩充背包载荷，是现代资产的压舱石。</p>
      <div class="actions stack">
      ${props.map((p) => {
        const has = held.some((h) => h.id === p.id);
        return `<button class="btn" data-act="buyProperty" data-id="${p.id}" ${has ? "disabled" : ""}>${esc(p.name)} <span class="muted">¥${U.fmtMoney(p.cost)} · 载荷+${p.carry}kg</span> ${has ? "（已持有）" : ""}</button>`;
      }).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function carModal() {
    const vehs = R.get("vehicles").items.filter((v) => v.era === "modern");
    openModal("购买现代载具", `
      <div class="actions stack">
      ${vehs.map((v) => `<button class="btn" data-act="buyCar" data-id="${v.id}">${esc(v.name)} <span class="muted">¥${U.fmtMoney(v.price)} · 载${v.cargoWeight}kg</span></button>`).join("")}
      </div>`, `<button class="btn" data-close>关闭</button>`);
  }

  function bankModal() {
    openModal("银行 · 存取款与外汇兑换", `
      <div class="field"><label>存入金额(CNY)</label><input id="depAmt" type="number" value="100"></div>
      <div class="field"><label>取出金额(CNY)</label><input id="wdAmt" type="number" value="100"></div>
      <div class="divider"></div>
      <div class="field"><label>外汇兑换金额(CNY)</label><input id="fxAmt" type="number" value="100"></div>
      <div class="field"><label>兑换目标币种</label>
        <select id="fxCur">
          <option value="USD">美元 USD</option>
          <option value="HKD">港币 HKD</option>
          <option value="JPY">日元 JPY</option>
          <option value="RUB">苏联卢布 RUB</option>
          <option value="GBP">英镑 GBP</option>
          <option value="DEM">西德马克 DEM</option>
          <option value="FEC">外汇券 FEC</option>
        </select>
      </div>`, `
      <button class="btn" data-close>关闭</button>
      <button class="btn" id="doFx">兑换</button>
      <button class="btn" id="doWd">取出</button>
      <button class="btn primary" id="doDep">存入</button>`);
    $("doDep").onclick = () => {
      const amt = parseFloat($("depAmt").value);
      const r = FIN.deposit(TR.current(), "CNY", amt);
      toast(r.ok ? "已存入" : r.reason, r.ok ? "ok" : "err");
      S.save(); render();
    };
    $("doWd").onclick = () => {
      const amt = parseFloat($("wdAmt").value);
      const r = FIN.withdraw(TR.current(), "CNY", amt);
      toast(r.ok ? "已取出" : r.reason, r.ok ? "ok" : "err");
      S.save(); render();
    };
    $("doFx").onclick = () => {
      const cur = $("fxCur").value;
      const amt = parseFloat($("fxAmt").value);
      const r = FIN.exchange(TR.current(), "CNY", cur, amt);
      toast(r.ok ? "已兑换" : r.reason, r.ok ? "ok" : "err");
      S.save(); render();
    };
  }

  function doService(svc, w) {
    const st = S.get();
    const p = st.player;
    if (svc === "hukou") {
      if (p.flags.hukou) { toast("你已有户口", "err"); return; }
      if (!W.spend(w, "CNY", 5)) { toast("现金不足", "err"); return; }
      p.flags.hukou = true;
      toast("户口登记完成！现在可以去领本月定量票了。", "ok");
      S.pushLog("在街道办办理了户口登记");
    } else if (svc === "tickets") {
      if (!p.flags.hukou) { toast("没有户口不能领定量票", "err"); return; }
      const mk = CL.monthKey("old");
      if (p.flags.lastTicketMonth === mk) { toast("本月的定量票已经领过了", "err"); return; }
      p.flags.lastTicketMonth = mk;
      const grant = { 粮票: 28, 布票: 5, 肉票: 2, 油票: 1, 副食票: 10, 工业券: 5 };
      Object.keys(grant).forEach((k) => INV.grantTickets("old", k, grant[k]));
      toast("领到本月定量票：粮票28 布票5 肉票2 油票1 副食票10 工业券5", "ok");
      S.pushLog("领取本月定量票");
    } else if (svc === "intro") {
      introModal(); return;
    } else if (svc === "hotel") {
      const loc = R.locationById(S.world(w).locationId);
      if (w === "old" && !p.flags.hukou && !TR.hasDoc("intro", S.world(w).cityId)) {
        toast("住店需要介绍信或本地户口", "err"); return;
      }
      const cost = loc && loc.id === "bj_1980_hotel_bf" ? 10 : (w === "old" ? 1.5 : 200);
      if (!W.spend(w, "CNY", cost)) { toast("现金不足", "err"); return; }
      CL.advance(w, 12 * 60);
      p.stats.energy = 100;
      p.stats.satiety = U.clamp((p.stats.satiety || 0) - 10, 0, 100);
      toast("住宿一晚，体力恢复满格。", "ok");
    } else if (svc === "hospital") {
      const cost = w === "old" ? 2 : 50;
      if (!W.spend(w, "CNY", cost)) { toast("现金不足", "err"); return; }
      CL.advance(w, 2 * 60);
      p.stats.health = U.clamp((p.stats.health || 100) + 30, 0, 100);
      toast("看诊完毕，健康恢复。", "ok");
    } else if (svc === "work") {
      if (!costEnergy(50, 20)) return;
      const wage = w === "old" ? 3 : 300;
      CL.advance(w, 24 * 60);
      W.add(w, "CNY", wage);
      p.flags.workDays = (p.flags.workDays || 0) + 1;
      toast("干了一整天活，挣了 ¥" + wage + "。", "ok");
    } else if (svc === "bank") {
      bankModal(); return;
    } else if (svc === "sight") {
      if (!costEnergy(5, 2)) return;
      CL.advance(w, 2 * 60);
      p.stats.mood = U.clamp((p.stats.mood || 80) + 10, 0, 100);
      toast("游览一番，心情舒畅。", "ok");
    } else if (svc === "tkt_black") {
      ticketModal(); return;
    } else if (svc === "big_black") {
      bigTicketModal(); return;
    } else if (svc === "training") {
      trainingModal(); return;
    } else if (svc === "online") {
      onlineModal(); return;
    } else if (svc === "daigou") {
      daigouModal(); return;
    } else if (svc === "property") {
      propertyModal(); return;
    } else if (svc === "company") {
      if (p.flags.company) { toast("你已注册公司", "err"); return; }
      if (!W.spend(w, "CNY", 100000)) { toast("现金不足（需¥10万）", "err"); return; }
      p.flags.company = true;
      toast("公司注册成功！", "ok");
    } else if (svc === "dmv") {
      if (!p.certificates["驾照"]) {
        if (!W.spend(w, "CNY", 4000)) { toast("现金不足（需¥4000）", "err"); return; }
        p.certificates["驾照"] = true;
        toast("驾照考取成功！", "ok");
      } else {
        toast("你已有驾照。", "err");
      }
    } else if (svc === "buycar") {
      carModal(); return;
    } else if (svc === "barber") {
      if (!W.spend(w, "CNY", 0.2)) { toast("现金不足", "err"); return; }
      CL.advance(w, 60);
      p.stats.mood = U.clamp((p.stats.mood || 80) + 5, 0, 100);
      toast("理发刮脸，神清气爽。", "ok");
    } else if (svc === "bath") {
      if (!W.spend(w, "CNY", 0.3)) { toast("现金不足", "err"); return; }
      CL.advance(w, 2 * 60);
      p.stats.energy = U.clamp((p.stats.energy || 0) + 20, 0, 100);
      p.stats.satiety = U.clamp((p.stats.satiety || 0) - 5, 0, 100);
      toast("泡了个热水澡，体力+20。", "ok");
    } else if (svc === "security") {
      toast("当前治安良好，没有不良记录。", "ok");
    } else if (svc === "batch") {
      const rel = INT.relationship("qian_jingli");
      if (rel < 40) { toast("需要先与外贸总公司钱经理搞好关系（好感≥40）", "err"); return; }
      p.flags.batch = true;
      toast("钱经理给你批下了计划内批文！", "ok");
    } else if (svc === "train") {
      activeTab = "bus";
      toast("查看公交出行。", "ok");
    } else if (svc === "bus") {
      busModal(); return;
    } else if (svc === "farm") {
      if (p.flags.farm) { toast("你已有农场", "err"); return; }
      if (!W.spend(w, "CNY", 500000)) { toast("现金不足（需¥50万）", "err"); return; }
      p.flags.farm = true;
      toast("农场购置成功，可交给AI打理。", "ok");
    } else if (svc === "openshop") {
      if (p.flags.shop) { toast("你已租下门店", "err"); return; }
      if (!W.spend(w, "CNY", 200000)) { toast("现金不足（需¥20万）", "err"); return; }
      p.flags.shop = true;
      toast("门店租下，开店生意逐步开放。", "ok");
    }
    S.save(); render();
  }

  function doAction(act, data) {
    const w = TR.current();
    const p = S.get().player;
    if (act === "cross") {
      if (!costEnergy(5, 0)) return;
      const r = TR.crossWorld();
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("穿越成功：" + (r.to === "old" ? "1980旧世界" : "2026现代"), "ok");
      S.save(); render();
    } else if (act === "goto") {
      if (!costEnergy(4, 1)) return;
      CL.advance(w, 30);
      const r = TR.setLocation(data.loc);
      if (r.ok) { S.save(); render(); }
    } else if (act === "rest") {
      CL.advance(w, 60);
      p.stats.energy = U.clamp((p.stats.energy || 100) + 5, 0, 100);
      p.stats.satiety = U.clamp((p.stats.satiety || 100) - 3, 0, 100);
      toast("休息了一小时，体力+5", "ok");
      S.save(); render();
    } else if (act === "nextDay") {
      CL.advance(w, 24 * 60);
      if ((p.stats.satiety || 0) <= 0) {
        p.stats.energy = U.clamp((p.stats.energy || 0) + 40, 0, 100);
        toast("饥肠辘辘地睡了一天，体力恢复有限，建议先吃东西。");
      } else {
        p.stats.energy = 100;
        p.stats.satiety = U.clamp((p.stats.satiety || 0) - 25, 0, 100);
        toast("睡了一整天，体力恢复满格，饱腹-25。", "ok");
      }
      S.save(); render();
    } else if (act === "eat") {
      eatModal();
    } else if (act === "consume") {
      const item = E.getItem(data.id);
      const r = INV.removeBackpack(data.id, 1);
      if (!r.ok) { toast("背包中没有该食物", "err"); return; }
      const fv = foodRestore(item);
      p.stats.satiety = U.clamp((p.stats.satiety || 0) + fv.sat, 0, 100);
      p.stats.energy = U.clamp((p.stats.energy || 0) + fv.energy, 0, 100);
      toast("吃下「" + item.name + "」，饱腹+" + fv.sat + "，体力+" + fv.energy, "ok");
      S.save(); render();
      eatModal();
    } else if (act === "buy") {
      if (!costEnergy(1, 1)) return;
      const qty = getQty(data.id);
      const r = SH.buyAt(S.world(w).locationId, data.id, qty);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("买入成功" + (r.risk && r.risk.caught ? "（遭遇联防队！）" : ""), "ok");
      S.save(); render();
    } else if (act === "sell") {
      if (!costEnergy(1, 1)) return;
      const qty = getQty(data.id);
      const r = SH.sellAt(S.world(w).locationId, data.id, qty);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("卖出成功，+ " + U.fmtMoney(r.income, r.currency), "ok");
      S.save(); render();
    } else if (act === "talk") {
      talkModal(data.npc);
    } else if (act === "trade") {
      tradeModal(selectedNpc);
    } else if (act === "doTrade") {
      const qty = getQty(data.id);
      const r = window.LJ.passers.doTrade(data.npc, data.id, qty, S.world(w).cityId);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("成交！收到 ¥" + U.fmtMoney(r.payCash) + (Object.keys(r.payTickets).length ? " 和票据 " + Object.keys(r.payTickets).map((k) => k + r.payTickets[k]).join("、") : ""), "ok");
      S.save(); render();
      tradeModal(data.npc);
    } else if (act === "bus") {
      if (!costEnergy(3, 0)) return;
      const r = TR.busTo(data.district);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("公交抵达", "ok");
      S.save(); render();
    } else if (act === "gift") {
      giftModal(selectedNpc);
    } else if (act === "bribe") {
      if (!W.spend(w, "CNY", 1000)) { toast("现金不足", "err"); return; }
      const v = INT.adjustRelationship(selectedNpc, 8);
      toast("送出 ¥1000，好感提升（当前 " + v + "）", "ok");
      S.save(); render();
      talkModal(selectedNpc);
    } else if (act === "give") {
      const r = GIFT.giveGift(data.npc, data.id, 1);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("送出「" + r.itemName + "」，好感 +" + r.value + "（当前 " + r.relation + "）", "ok");
      S.save(); render();
      giftModal(data.npc);
    } else if (act === "travelCity") {
      if ((p.stats.energy || 0) < 15) { toast("体力不足，长途跋涉需要先恢复", "err"); return; }
      const r = TR.travelCity(data.city);
      if (!r.ok) { toast(r.reason, "err"); return; }
      toast("抵达新城市", "ok");
      S.save(); render();
    } else if (act === "svc") {
      doService(data.svc, w);
    } else if (act === "buyIntro") {
      if (!W.spend(w, "CNY", 1)) { toast("现金不足", "err"); return; }
      TR.grantDoc("intro", data.city, "once");
      toast("开具了前往" + (R.cityById(data.city) || {}).name + "的介绍信", "ok");
      S.save(); introModal();
    } else if (act === "buyTicket") {
      const priceMap = { 粮票: 0.25, 布票: 2.0, 肉票: 1.5, 油票: 1.0, 副食票: 0.6, 工业券: 0.5 };
      const qty = parseInt((document.querySelector('input[data-tktqty="' + data.kind + '"]') || {}).value || "0", 10);
      if (!qty || qty <= 0) { toast("数量无效", "err"); return; }
      const cost = priceMap[data.kind] * qty;
      if (!W.spend(w, "CNY", cost)) { toast("现金不足", "err"); return; }
      INV.grantTickets("old", data.kind, qty);
      toast("买到了" + data.kind + " x" + qty, "ok");
      S.save(); ticketModal();
    } else if (act === "buyBigTicket") {
      const priceMap = { 自行车票: 60, 缝纫机票: 50, 彩电票: 120, 手表票: 40, 烟票: 2, 特供票: 10 };
      if (!W.spend(w, "CNY", priceMap[data.kind])) { toast("现金不足", "err"); return; }
      INV.grantTickets("old", data.kind, 1);
      toast("买到了" + data.kind, "ok");
      S.save(); bigTicketModal();
    } else if (act === "train") {
      const courses = {
        english: [5000, 10, "雅思"], japanese: [5000, 10, "JLPT"], russian: [5000, 10, "俄语等级"],
        appraisal: [8000, 15, "文物鉴定师证"], computer: [6000, 12, "软考"], finance: [5000, 10, "证券从业"], driving: [4000, 7, "驾照"]
      };
      const c = courses[data.id];
      if (!c) return;
      if (!W.spend(w, "CNY", c[0])) { toast("现金不足", "err"); return; }
      CL.advance(w, c[1] * 24 * 60);
      p.skills[data.id] = (p.skills[data.id] || 0) + 1;
      p.certificates[c[2]] = true;
      toast("培训完成！获得证书：" + c[2], "ok");
      S.save(); render();
    } else if (act === "orderOnline") {
      const it = E.getItem(data.id);
      if (!it) return;
      const qty = getQty(data.id);
      const cost = it.pModern * qty;
      if (!W.spend("modern", "CNY", cost)) { toast("现金不足", "err"); return; }
      CL.advance("modern", 2 * 24 * 60);
      INV.addWarehouse("modern", "bj_modern_industrial", data.id, qty);
      toast("下单成功，2天后到工业园区仓储提货。", "ok");
      S.save(); render();
    } else if (act === "orderDaigou") {
      const it = E.getItem(data.id);
      if (!it) return;
      const qty = getQty(data.id);
      const cost = it.pModern * qty;
      if (!W.spend("modern", "CNY", cost)) { toast("现金不足", "err"); return; }
      CL.advance("modern", 5 * 24 * 60);
      INV.addWarehouse("modern", "bj_modern_airport", data.id, qty);
      toast("代购下单成功，约5天后到大兴机场国际仓储提货。", "ok");
      S.save(); render();
    } else if (act === "buyProperty") {
      const props = { apt_suburb: [2000000, 20], flat_city: [8000000, 60], mansion: [30000000, 200] };
      const c = props[data.id];
      if (!c) return;
      if (!W.spend("modern", "CNY", c[0])) { toast("现金不足", "err"); return; }
      const mp = S.world("modern");
      if (!mp.properties) mp.properties = [];
      mp.properties.push({ id: data.id });
      p.carryWeight += c[1];
      toast("购房成功！背包载荷 +" + c[1] + "kg", "ok");
      S.save(); render();
    } else if (act === "buyCar") {
      const v = (R.get("vehicles").map || {})[data.id];
      if (!v) return;
      if (!W.spend("modern", "CNY", v.price)) { toast("现金不足", "err"); return; }
      p.vehicle = v.id;
      toast("购买成功：" + v.name, "ok");
      S.save(); render();
    } else if (act === "deposit") {
      const amt = parseFloat(prompt("存入金额（当前现金币种为 CNY）：", "100"));
      if (!isNaN(amt) && amt > 0) { const r = FIN.deposit(w, "CNY", amt); toast(r.ok ? "已存入" : r.reason, r.ok ? "ok" : "err"); S.save(); render(); }
    } else if (act === "withdraw") {
      const amt = parseFloat(prompt("取出金额（CNY）：", "100"));
      if (!isNaN(amt) && amt > 0) { const r = FIN.withdraw(w, "CNY", amt); toast(r.ok ? "已取出" : r.reason, r.ok ? "ok" : "err"); S.save(); render(); }
    } else if (act === "exchange") {
      const cur = w === "old" ? prompt("兑换目标币种（USD/HKD/JPY/RUB/FEC…）：", "USD") : prompt("兑换目标币种（USD/HKD…）：", "USD");
      if (cur) { const amt = parseFloat(prompt("兑换金额（CNY）：", "100")); if (!isNaN(amt) && amt > 0) { const r = FIN.exchange(w, "CNY", cur, amt); toast(r.ok ? "已兑换" : r.reason, r.ok ? "ok" : "err"); S.save(); render(); } }
    } else if (act === "stocks") {
      stockModal();
    }
  }

  function stockModal() {
    const w = TR.current();
    const year = S.clock(w).year;
    const stocks = R.get("finance").stocks.filter((s) => s.unlockYear <= year);
    const held = S.world(w).stocks || [];
    openModal("股票交易 · " + year + "年", `
      <div class="actions stack">
      ${stocks.map((s) => {
        const pr = FIN.stockPrice(s.id, year);
        const h = held.find((x) => x.id === s.id);
        return `<div class="list-row"><span class="grow"><span class="name">${esc(s.name)}</span><span class="sub">${esc(s.market)} · ${esc(s.code)}</span></span><b class="mono">${U.fmtMoney(pr)}</b>${h ? `<span class="muted">持仓${h.shares}</span>` : ""}</div>`;
      }).join("")}
      </div>
      <div class="field" style="margin-top:8px"><label>股票代码</label><input id="stockCode" placeholder="如 stk_apple"></div>
      <div class="field"><label>数量</label><input id="stockQty" value="10"></div>`, `
      <button class="btn" data-close>关闭</button>
      <button class="btn" data-stock="buy">买入</button>
      <button class="btn danger" data-stock="sell">卖出</button>`);
    $("modalRoot").querySelectorAll("[data-stock]").forEach((b) => {
      b.onclick = () => {
        const code = $("stockCode").value.trim();
        const qty = parseInt($("stockQty").value, 10);
        const r = b.dataset.stock === "buy" ? FIN.buyStock(w, code, qty) : FIN.sellStock(w, code, qty);
        toast(r.ok ? "交易成功" : r.reason, r.ok ? "ok" : "err");
        S.save(); closeModal(); render();
      };
    });
  }

  function bindEvents() {
    document.addEventListener("click", (ev) => {
      const t = ev.target.closest("[data-act], [data-close], [data-start], [data-tab], [data-stock]");
      if (!t) return;
      if (t.hasAttribute("data-close")) { closeModal(); return; }
      if (t.dataset.start) {
        S.newGame({ travelLevel: t.dataset.start });
        window.LJ.engine.init();
        closeModal();
        render();
        toast("新游戏开始", "ok");
        return;
      }
      if (t.dataset.tab) {
        activeTab = t.dataset.tab;
        render();
        return;
      }
      doAction(t.dataset.act, { id: t.dataset.id, npc: t.dataset.npc, loc: t.dataset.loc, city: t.dataset.city, svc: t.dataset.svc, kind: t.dataset.kind, district: t.dataset.district });
    });
    $("btnSettings").onclick = settingsModal;
    $("btnHelp").onclick = helpModal;
  }

  window.LJ.ui = { render, toast, openModal, closeModal, bindEvents, newGameModal };
})();
