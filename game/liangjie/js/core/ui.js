/* 两界搬运工 · UI 渲染（新：明亮、响应式、任何设备可见金额） */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  function $(s, root) { return (root || document).querySelector(s); }
  function $all(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  let toastTimer = null;
  function toast(msg, ms) {
    const node = $('#toast');
    if (!node) return;
    node.innerHTML = msg;
    node.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('show'), ms || 3200);
  }

  function bar(label, val, color) {
    const pct = Math.max(0, Math.min(100, val));
    const low = pct < 25;
    return `<div class="stat ${low ? 'low' : ''}">
      <span class="stat-label">${label}</span>
      <div class="stat-track"><i style="width:${pct}%;background:${color}"></i></div>
      <b>${Math.round(val)}</b>
    </div>`;
  }

  /* ============ 顶栏：金额永远可见 ============ */
  function renderTop() {
    const s = LJ.Sys.state;
    const w = s.world;
    const E = LJ.Engine;
    document.body.className = w === 'old' ? 'old-world' : 'modern-world';
    // 当前世界现金 + 存款
    const m = w === 'modern' ? s.money.modern : s.money.old;
    const bank = s.bank[w].CNY || 0;
    const cur = LJ.CityCurrency[s.city] || 'CNY';
    const curName = cur === 'CNY' ? '元' : cur;
    $('#cashChip').innerHTML = `现金 <b>${E.money(m.CNY || 0)}</b>${curName === '元' ? '' : ' (' + curName + ')'}`;
    $('#bankChip').innerHTML = `存款 <b>${E.money(bank)}</b>元`;
    const extra = [];
    if (w === 'old' && s.money.old.FEC > 0) extra.push(`外汇券 <b>${E.money(s.money.old.FEC)}</b>`);
    if (w === 'modern' && (m.USD || m.HKD || m.JPY || m.EUR || m.GBP || m.KES)) {
      const has = ['USD', 'HKD', 'JPY', 'EUR', 'GBP', 'KES'].filter((c) => (m[c] || 0) > 0);
      extra.push('外币 ' + has.map((c) => `${c}${E.money(m[c])}`).join(' '));
    }
    $('#extraChip').innerHTML = extra.join(' · ') || '';
    $('#worldTab').textContent = w === 'modern' ? '🌐 现代 · 2026' : '📻 旧时 · 1980';
    // 时间条
    $('#timebar').textContent = `${E.formatDate(w)}　·　另一界：${E.formatDate(w === 'modern' ? 'old' : 'modern')}`;
    // 穿越冷却
    if (!LJ.Engine.crossReady(w)) {
      $('#cooldownChip').textContent = `🌀 穿越冷却：还需 ${LJ.Engine.cooldownLeft(w)} 天`;
      $('#cooldownChip').classList.add('on');
    } else {
      $('#cooldownChip').textContent = '🌀 传送门就绪';
      $('#cooldownChip').classList.remove('on');
    }
  }

  function renderStatus() {
    const p = LJ.Sys.state.player;
    $('#statusline').innerHTML =
      bar('体力', p.energy, '#2fa46a') +
      bar('饱腹', p.hunger, '#c98a16') +
      bar('口渴', p.thirst, '#2b8fd6') +
      bar('心情', p.spirit, '#8b5cc7');
    const warn = [];
    if (p.thirst < 25) warn.push('💧 口干舌燥，快去找水！');
    if (p.hunger < 25) warn.push('🍚 肚子咕咕叫了。');
    if (p.energy < 25) warn.push('😴 筋疲力尽，该歇歇了。');
    $('#survivalWarn').innerHTML = warn.join('　') || '&nbsp;';
  }

  /* ============ 地图（街巷列表，含到访消耗） ============ */
  function renderMap() {
    const s = LJ.Sys.state;
    const city = LJ.Engine.currentCityDef();
    const list = $('#placeList');
    list.innerHTML = '';
    $('#cityName').textContent = `${city.name} · ${s.world === 'modern' ? '2026' : '1980'}`;
    let intro = city.intro || '';
    if (LJ.Pop) {
      const prof = LJ.Pop.profile(s.world, s.city);
      intro = `👥 人口 ${LJ.Pop.fmt(prof.pop)}（${LJ.Pop.fmt(prof.classes.low)}平民 / ${LJ.Pop.fmt(prof.classes.mid)}中产 / ${LJ.Pop.fmt(prof.classes.high)}权贵）· ${prof.lean}`;
    }
    $('#cityIntro').textContent = intro;
    Object.keys(city.places).forEach((pid) => {
      const pl = city.places[pid];
      const cost = pl[6] || { time: 15, energy: 2 };
      const active = s.location === pid ? 'active' : '';
      const btn = el(`<button class="place-btn ${active}" data-pid="${pid}">
        <span class="pb-name">${pl[0]}</span>
        <span class="pb-cost">${cost.time}分 · 体力-${cost.energy}${cost.hunger ? ' · 饿' : ''}${cost.thirst ? ' · 渴' : ''}</span>
      </button>`);
      btn.addEventListener('click', () => LJ.Engine.gotoPlace(pid));
      list.appendChild(btn);
    });
  }

  /* ============ 位置标题与内容 ============ */
  function renderPlace() {
    const place = LJ.Engine.currentPlaceDef();
    const cost = place[6] || {};
    $('#placeName').textContent = place[0];
    $('#placeDesc').textContent = place[1];
    $('#placeCost').textContent = cost.time
      ? `到访：${cost.time}分钟 · 体力-${cost.energy} · 饥饿-${cost.hunger} · 口渴-${cost.thirst}`
      : '';
    const content = $('#content');
    content.innerHTML = '';
    const r = LJ.PlaceRenderers[place[2]];
    if (r) r(content, place);
    else content.appendChild(el(`<div class="empty">${place[1]}</div>`));
  }

  /* ============ 背包 / 家中 / 货仓 ============ */
  const INV_TABS = ['bag', 'home', 'warehouse'];
  let invTab = 'bag';
  function setTab(t) { invTab = t; }

  function renderInventory() {
    const s = LJ.Sys.state;
    const w = s.world;
    const wrap = $('#inventory');
    wrap.innerHTML = '';
    const homeName = LJ.Engine.homeName(w);
    const tabs = el(`<div class="inv-tabs">
      <button data-tab="bag" class="${invTab === 'bag' ? 'active' : ''}">🎒 背包</button>
      <button data-tab="home" class="${invTab === 'home' ? 'active' : ''}">🏠 ${homeName}</button>
      <button data-tab="warehouse" class="${invTab === 'warehouse' ? 'active' : ''}">📦 货仓</button>
    </div>`);
    $all('button', tabs).forEach((b) => b.addEventListener('click', () => { invTab = b.dataset.tab; LJ.UI.renderInventory(); }));
    wrap.appendChild(tabs);

    let items = [], cap, title;
    if (invTab === 'bag') {
      items = s.bag; cap = LJ.Engine.bagCap();
      title = `背包 ${LJ.Engine.money(LJ.Engine.bagWeight())}/${LJ.Engine.money(cap)} kg`;
    } else if (invTab === 'home') {
      items = s.home[w]; cap = LJ.Engine.homeCap(w);
      title = `${homeName} ${LJ.Engine.money(LJ.Engine.homeWeight(w))}/${LJ.Engine.money(cap)} kg（按世界隔离）`;
    } else {
      const city = s.city;
      s.warehouses[w][city] = s.warehouses[w][city] || [];
      items = s.warehouses[w][city];
      const wt = items.reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
      cap = 500; title = `${LJ.Engine.currentCityDef().name}货仓 ${LJ.Engine.money(wt)}/${LJ.Engine.money(cap)} kg`;
    }
    $('#bagSummary').textContent = title;

    const list = el(`<div class="inv-list"></div>`);
    if (!items.length) {
      list.appendChild(el(`<div class="empty">空空如也</div>`));
    } else {
      items.forEach((it) => {
        const def = LJ.Items[it.id];
        if (!def) return;
        const mvBtns = invTab === 'bag'
          ? `<button data-a="tohome" title="转移输入的数量到家中">→家</button><button data-a="tostore" title="转移输入的数量到货仓">→仓</button>${def.consume ? `<button data-a="use">使用1</button>` : ''}`
          : `<button data-a="tobag" title="转移输入的数量到背包">→背包</button>`;
        const row = el(`<div class="inv-row">
          <div class="inv-main"><strong>${def.name} <span class="qty">×${it.qty}</span></strong>
            <small>${LJ.catName(def.cat)} · ${def.size}kg/件 · ${def.desc}</small></div>
          <div class="inv-ops">
            ${invTab === 'bag' || invTab === 'home' || invTab === 'warehouse' ? `<input type="number" min="1" max="${it.qty}" value="${it.qty}" data-mv="${it.id}" title="要转移的数量（留空=全部）">` : ''}
            ${mvBtns}
          </div>
        </div>`);
        $all('button', row).forEach((b) => b.addEventListener('click', () => {
          const qtyInput = $(`[data-mv="${it.id}"]`, row);
          let q = 0;
          if (qtyInput) q = parseInt(qtyInput.value, 10);
          LJ.Trade.invAction(it.id, b.dataset.a, (q && q > 0) ? q : 9999);
        }));
        list.appendChild(row);
      });
    }
    wrap.appendChild(list);
  }

  /* ============ 日志 ============ */
  function renderLog() {
    const logs = $('#logs');
    const s = LJ.Sys.state;
    logs.innerHTML = '';
    const shown = s.log.slice(0, 30);
    if (!shown.length) { logs.innerHTML = '<li>旅程尚未开始……</li>'; return; }
    shown.forEach((l) => {
      const d = new Date(l.t);
      logs.appendChild(el(`<li><time>${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</time> [${l.world === 'old' ? '旧' : '现'}] ${l.msg}</li>`));
    });
  }

  function renderAll() {
    renderTop();
    renderStatus();
    renderMap();
    renderPlace();
    renderInventory();
    renderLog();
    if (LJ.AI) LJ.AI.renderStatus && LJ.AI.renderStatus();
  }

  LJ.UI = {
    $, $all, el, toast, renderAll, renderTop, renderStatus,
    renderMap, renderPlace, renderInventory, renderLog, bar,
    setTab, get invTab() { return invTab; }, set invTab(v) { invTab = v; }
  };
})();
