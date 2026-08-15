/* 两界搬运工 · UI 渲染核心 */
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

  function barHtml(label, val, max, color) {
    const pct = Math.max(0, Math.min(100, val / max * 100));
    const cls = pct < 25 ? 'low' : '';
    return `<div class="meter"><b>${label} ${Math.round(val)}/${max}</b><div class="bar ${cls}"><i style="width:${pct}%;background:${color || ''}"></i></div></div>`;
  }

  /* ========== 顶部 & 状态栏 ========== */
  function renderHeader() {
    const s = LJ.Sys.state;
    const E = LJ.Engine;
    const w = s.world;
    const o = w === 'modern' ? 'old' : 'modern';
    document.body.className = w === 'old' ? 'old-world' : 'modern-world';
    $('#topWealth').textContent = E.currentWorld() === 'modern'
      ? `现代资产 ${E.fmtMoney(s.money.modern.CNY + s.bank.modern.CNY)}`
      : `旧时资产 ${E.fmtMoney(s.money.old.CNY + s.bank.old.CNY)}`;
    $('#saveIndicator').textContent = `两界时间：${E.formatDate('modern')}　|　${E.formatDate('old')}`;
    // 世界选项卡
    $all('.world-tab').forEach((t) => t.classList.toggle('active', t.dataset.world === w));
  }

  function renderStatus() {
    const p = LJ.Sys.state.player;
    $('#statusLine').innerHTML =
      barHtml('体力', p.energy, 100, '#71b98b') +
      barHtml('饱腹', p.hunger, 100, '#e6b94d') +
      barHtml('口渴', p.thirst, 100, '#5aa9e6') +
      barHtml('心情', p.spirit, 100, '#c58bf0');
    // 生存预警
    const warn = [];
    if (p.thirst < 25) warn.push('💧 口干舌燥，快去找水喝！');
    if (p.hunger < 25) warn.push('🍚 肚子咕咕叫了。');
    if (p.energy < 25) warn.push('😴 筋疲力尽，该休息了。');
    $('#survivalWarn').innerHTML = warn.map((x) => `<span>${x}</span>`).join('') || '';
  }

  /* ========== 左侧地图 ========== */
  function renderMap() {
    const s = LJ.Sys.state;
    const E = LJ.Engine;
    const city = E.currentCityDef();
    const mapTitle = $('#mapTitle');
    const zoneNames = { north: '城北', south: '城南', east: '城东', west: '城西', center: '城区', far: '远郊', outer: '近郊' };
    mapTitle.textContent = `${city.name} · 街巷`;
    $('#mapCount').textContent = '';

    const list = $('#mapList');
    list.innerHTML = '';
    Object.keys(city.places).forEach((pid) => {
      const pl = city.places[pid];
      const locked = pl.locked && !s.flags[pl.locked];
      const btn = el(`<button class="map-btn ${s.location === pid ? 'active' : ''} ${locked ? 'locked' : ''}" data-pid="${pid}">
        <b>${pl[0]}${locked ? ' 🔒' : ''}</b>
        <small>${zoneNames[pl[4]] || ''}${locked ? ' · ' + (pl.lockHint || '未解锁') : ''}</small>
      </button>`);
      if (!locked) btn.addEventListener('click', () => E.gotoPlace(pid));
      list.appendChild(btn);
    });

    $('#homeText').textContent = `${city.name} · ${city.places.home ? city.places.home[0] : '落脚点'}`;
    $('#homeStats').textContent = `${city.intro || ''}`;
  }

  /* ========== 位置标题与操作 ========== */
  function renderLocationHead() {
    const E = LJ.Engine;
    const place = E.currentPlaceDef();
    $('#locationName').textContent = place[0];
    $('#locationDesc').textContent = place[1];
    const acts = $('#quickActions');
    acts.innerHTML = '';
    const type = place[2];
    if (type === 'station') {
      acts.appendChild(el(`<button data-nav="travel">🚂 前往其他城市</button>`)).addEventListener('click', () => LJ.Travel.renderIntercity());
    }
    if (type === 'airport') {
      acts.appendChild(el(`<button data-nav="fly">✈️ 国际航班</button>`)).addEventListener('click', () => LJ.Travel.renderFlights());
    }
    if (type === 'restaurant' || type === 'hotel') {
      acts.appendChild(el(`<button data-nav="eat">🍽️ 用餐喝水</button>`)).addEventListener('click', () => LJ.Survival.renderDining());
    }
    if (type === 'bank') {
      acts.appendChild(el(`<button data-nav="bank">🏦 银行服务</button>`)).addEventListener('click', () => LJ.Finance.renderBank());
    }
    if (type === 'home') {
      acts.appendChild(el(`<button data-nav="rest">😴 睡觉休息</button>`)).addEventListener('click', () => LJ.Survival.rest());
      acts.appendChild(el(`<button data-nav="eat">🍜 吃家里存粮</button>`)).addEventListener('click', () => LJ.Survival.renderHomeEating());
    }
    if (type === 'training') {
      acts.appendChild(el(`<button data-nav="train">🎓 职业培训</button>`)).addEventListener('click', () => LJ.Career.renderTraining());
    }
    if (type === 'office') {
      acts.appendChild(el(`<button data-nav="office">📋 街道办事务</button>`)).addEventListener('click', () => LJ.Career.renderOffice());
    }
    if (type === 'antique' || type === 'auction' || type === 'friendship') {
      acts.appendChild(el(`<button data-nav="antique">🔍 鉴定古玩</button>`)).addEventListener('click', () => LJ.Antique.renderAppraise());
    }
    if (type === 'blackmarket') {
      acts.appendChild(el(`<button data-nav="bm">🌙 黑市交易</button>`)).addEventListener('click', () => LJ.Trade.renderBlackMarket());
    }
    if (type === 'warehouse') {
      acts.appendChild(el(`<button data-nav="wh">📦 仓库与配送</button>`)).addEventListener('click', () => LJ.Trade.renderWarehouse());
    }
    if (type === 'service') {
      acts.appendChild(el(`<button data-nav="svc">🪪 行政服务</button>`)).addEventListener('click', () => LJ.Career.renderService());
    }
    if (type === 'stock') {
      acts.appendChild(el(`<button data-nav="stock">📈 证券交易</button>`)).addEventListener('click', () => LJ.Finance.renderStock());
    }
    if (type === 'culture' || type === 'park') {
      acts.appendChild(el(`<button data-nav="stroll">🚶 散步</button>`)).addEventListener('click', () => LJ.Survival.stroll());
    }
    if (type === 'street') {
      acts.appendChild(el(`<button data-nav="sell">🛒 兜售货物</button>`)).addEventListener('click', () => LJ.Trade.renderStreet());
    }
  }

  /* ========== 主内容 ========== */
  function renderContent() {
    const place = LJ.Engine.currentPlaceDef();
    const type = place[2];
    const content = $('#content');
    content.innerHTML = '';
    content.className = 'place-content ' + type;
    const r = LJ.PlaceRenderers[type];
    if (r) r(content, place);
    else content.appendChild(el(`<div class="empty">${place[1]}<br>（此地点暂无专属界面）</div>`));
  }

  /* ========== 背包 / 仓库 ========== */
  const INV_TABS = [
    ['bag', '背包'],
    ['home', '家仓'],
    ['warehouse', '货仓']
  ];
  let invTab = 'bag';

  function renderInventory() {
    const s = LJ.Sys.state;
    const E = LJ.Engine;
    const wrap = $('#inventory');
    wrap.innerHTML = '';
    const tabs = el(`<div class="inv-tabs">${INV_TABS.map(([k, n]) => `<button data-tab="${k}" class="${invTab === k ? 'active' : ''}">${n}</button>`).join('')}</div>`);
    $all('button', tabs).forEach((b) => b.addEventListener('click', () => { invTab = b.dataset.tab; LJ.UI.renderInventory(); }));
    wrap.appendChild(tabs);

    const list = el(`<div class="inv-list"></div>`);
    let items, cap, title;
    if (invTab === 'bag') {
      items = s.bag; cap = E.bagCap(); title = `背包 ${E.money(E.bagWeight())}/${E.money(cap)} kg`;
    } else if (invTab === 'home') {
      items = s.home; cap = E.homeCap(); title = `家仓 ${E.money(E.homeWeight())}/${E.money(cap)} kg`;
    } else {
      const city = s.city;
      s.warehouses[city] = s.warehouses[city] || [];
      items = s.warehouses[city];
      const wt = items.reduce((a, it) => a + (LJ.Items[it.id] ? LJ.Items[it.id].size * it.qty : 0), 0);
      cap = 500; title = `${currentCityName()}货仓 ${E.money(wt)}/${E.money(cap)} kg`;
    }
    $('#bagSummary').textContent = title;

    if (!items.length) {
      list.appendChild(el(`<div class="empty">空空如也</div>`));
    } else {
      items.forEach((it) => {
        const def = LJ.Items[it.id];
        if (!def) return;
        const row = el(`<div class="inv-row">
          <div><strong>${def.name}</strong><small>${LJ.catName(def.cat)} · ${def.size}kg · ${def.desc}</small></div>
          <div class="inv-ops">
            <span class="qty">×${it.qty}</span>
            ${invTab === 'bag' ? `<button data-i="${it.id}" data-a="tohome">→家</button><button data-i="${it.id}" data-a="tostore">→仓</button><button data-i="${it.id}" data-a="use" ${def.consume ? '' : 'style="display:none"'} data-consume="${!!def.consume}">使用</button>` : ''}
            ${invTab === 'home' ? `<button data-i="${it.id}" data-a="tobag">→背包</button><button data-i="${it.id}" data-a="drop">丢弃</button>` : ''}
            ${invTab === 'warehouse' ? `<button data-i="${it.id}" data-a="tobag">→背包</button>` : ''}
          </div>
        </div>`);
        $all('button', row).forEach((b) => b.addEventListener('click', () => LJ.Trade.invAction(b.dataset.i, b.dataset.a)));
        list.appendChild(row);
      });
    }
    wrap.appendChild(list);
  }

  /* ========== 日志 ========== */
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

  function currentCityName() {
    return LJ.Engine.currentCityDef().name;
  }

  function renderCross() {
    const s = LJ.Sys.state;
    const w = s.world;
    $('#crossTitle').textContent = w === 'modern' ? '衣柜后的门' : '回到2026的门';
    $('#crossHint').textContent = w === 'modern'
      ? '穿过门，踏入1980年的北京。现代相对静止，旧时岁月如梭。每次穿越消耗5点体力。'
      : '带着旧时的收获回到2026年变现。每一次穿越都消耗体力。';
    $('#crossBtn').textContent = w === 'modern' ? '穿越至 1980 年' : '穿越回 2026 年';
  }

  function renderAll() {
    renderHeader();
    renderStatus();
    renderMap();
    renderLocationHead();
    renderContent();
    renderInventory();
    renderLog();
    renderCross();
  }

  LJ.UI = {
    $, $all, el, toast, renderAll, renderHeader, renderStatus,
    renderMap, renderLocationHead, renderContent, renderInventory, renderLog,
    barHtml, currentCityName, get invTab() { return invTab; }, set invTab(v) { invTab = v; }
  };
})();
