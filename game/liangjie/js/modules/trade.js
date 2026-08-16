/* 两界搬运工 · 贸易与地方经济
 * 每个城市/类别有独立的市场饱和度：当地缺货→价涨，积压→价跌；
 * 食品/农产品有国家统购兜底价。买卖都会影响当地行情，杜绝"刷钱"。
 * 任何集市/黑市/街头都能出售背包里的所有物品。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function addItem(list, id, qty) {
    const slot = list.find((x) => x.id === id);
    if (slot) slot.qty += qty;
    else list.push({ id, qty });
  }
  function removeItem(list, id, qty) {
    const slot = list.find((x) => x.id === id);
    if (!slot || slot.qty < qty) return false;
    slot.qty -= qty;
    if (slot.qty <= 0) { const i = list.indexOf(slot); list.splice(i, 1); }
    return true;
  }

  /* ================ 市场饱和度经济 ================ */
  function satMap() {
    const s = LJ.Sys.state;
    return s.market;
  }
  function getSat(world, city, cat) {
    const m = satMap();
    m[world] = m[world] || {};
    m[world][city] = m[world][city] || {};
    if (m[world][city][cat] === undefined) m[world][city][cat] = 0.5;
    return m[world][city][cat];
  }
  function setSat(world, city, cat, v) {
    const m = satMap();
    m[world][city][cat] = Math.max(0.08, Math.min(0.95, v));
  }
  function equilibrium(city, cat) {
    const demand = (LJ.CITY_DEMAND[city] && LJ.CITY_DEMAND[city][cat]) || 0;
    return Math.max(0.22, Math.min(0.75, 0.5 - demand * 0.15));
  }
  function priceFactor(world, city, cat) {
    const sat = getSat(world, city, cat);
    const floor = LJ.PRICE_FLOOR[cat] || 0.4;
    return Math.max(floor, Math.min(2.5, 1 + (0.5 - sat) * 3));
  }
  // 每日向均衡点回归
  function driftMarket(hours) {
    const s = LJ.Sys.state;
    const days = hours / 24;
    if (days <= 0) return;
    const m = satMap();
    Object.keys(m).forEach((world) => {
      Object.keys(m[world]).forEach((city) => {
        Object.keys(m[world][city]).forEach((cat) => {
          const cur = m[world][city][cat];
          const eq = equilibrium(city, cat);
          m[world][city][cat] = Math.max(0.08, Math.min(0.95, cur + (eq - cur) * 0.06 * days));
        });
      });
    });
  }
  // 买卖影响当地行情（按"市场消化深度"缩放：人口越多越扛价；现代生产力恐怖，少量买卖几乎不影响价格）
  function affectMarket(cat, qty, size, sign) {
    const s = LJ.Sys.state;
    const depth = LJ.Pop ? LJ.Pop.marketDepth(s.world, s.city, cat) : 1000;
    const impact = (qty * (1 + (size || 0) * 0.2)) / depth;
    setSat(s.world, s.city, cat, getSat(s.world, s.city, cat) + sign * impact);
  }

  /* ================ 每日限量库存 ================ */
  function placeLimits() {
    const place = LJ.Engine.currentPlaceDef();
    return place[5] || null;
  }
  function limitKey() {
    const s = LJ.Sys.state;
    return s.world + '|' + s.city + '|' + s.location;
  }
  function ensureLimits() {
    const lim = placeLimits();
    if (!lim) return;
    const s = LJ.Sys.state;
    s.flags.stockLimit = s.flags.stockLimit || {};
    const key = limitKey();
    if (!s.flags.stockLimit[key]) {
      s.flags.stockLimit[key] = {};
      Object.keys(lim).forEach((k) => { s.flags.stockLimit[key][k] = lim[k]; });
    }
  }
  function remaining(id) {
    const lim = placeLimits();
    if (!lim || lim[id] === undefined) return Infinity;
    ensureLimits();
    return LJ.Sys.state.flags.stockLimit[limitKey()][id] || 0;
  }
  function consumeStock(id, qty) {
    const lim = placeLimits();
    if (!lim || lim[id] === undefined) return;
    ensureLimits();
    const s = LJ.Sys.state;
    s.flags.stockLimit[limitKey()][id] = Math.max(0, (s.flags.stockLimit[limitKey()][id] || 0) - (qty || 1));
  }

  /* ================ 货币 ================ */
  function wallet() {
    const s = LJ.Sys.state;
    if (s.world === 'modern') {
      const cur = LJ.CityCurrency[s.city] || 'CNY';
      return { get: () => s.money.modern[cur] || 0, set: (v) => { s.money.modern[cur] = Math.max(0, v); }, key: cur };
    }
    return { get: () => s.money.old.CNY, set: (v) => { s.money.old.CNY = Math.max(0, v); }, key: 'CNY' };
  }
  function basePrice(itemId, world) {
    const it = LJ.Items[itemId];
    if (!it) return 0;
    return world === 'modern' ? it.modern : it.old;
  }
  function scarcity(itemId) {
    const it = LJ.Items[itemId];
    if (!it || it.modern <= 0) return false;
    return (it.old / it.modern) >= 0.4;
  }

  function catFactor(itemId) {
    const it = LJ.Items[itemId];
    return priceFactor(LJ.Sys.state.world, LJ.Sys.state.city, it.cat);
  }

  function buyPrice(itemId) {
    const s = LJ.Sys.state;
    const base = basePrice(itemId, s.world);
    const f = catFactor(itemId);
    const type = LJ.Engine.currentPlaceDef()[2];
    let mult = 1;
    if (type === 'wholesale') mult = 0.85;
    else if (type === 'blackmarket') mult = 1.25;
    else if (type === 'friendship') mult = 1.15;
    return Math.round(base * f * mult * 100) / 100;
  }

  function isRegistered(city) {
    const s = LJ.Sys.state;
    s.flags.registered = s.flags.registered || { modern: {}, old: {} };
    return !!s.flags.registered[s.world][city];
  }
  // 登记不足折扣适用的场所
  const OFFICIAL_PLACES = ['market', 'wholesale', 'street', 'antique', 'friendship', 'auction', 'warehouse'];

  function sellPrice(itemId) {
    const s = LJ.Sys.state;
    const it = LJ.Items[itemId];
    const base = basePrice(itemId, s.world);
    const f = catFactor(itemId);
    const type = LJ.Engine.currentPlaceDef()[2];
    if (s.world === 'modern' && it.isMystery) return 5; // 未鉴定旧货现代只当废品
    if (it.isMystery) return Math.round(base * 0.5 * 100) / 100;
    // 已鉴定文物：古玩城/拍卖行按文物价收购
    if (it.appraised && s.world === 'modern') {
      const r = type === 'auction' ? 0.97 : (type === 'antique' ? 0.9 : 0.8);
      return Math.round(it.modern * r * 100) / 100;
    }
    let mult;
    if (type === 'pawn') mult = 0.6;
    else if (type === 'blackmarket') mult = s.world === 'old' ? (scarcity(itemId) ? 1.7 : 1.3) : 1.5;
    else if (type === 'street') mult = s.world === 'old' ? (scarcity(itemId) ? 1.25 : 0.95) : 1.0;
    else if (s.world === 'modern') mult = 0.8;
    else mult = scarcity(itemId) ? 1.25 : 0.85;
    // 阶层溢价（旧时人口阶层的购买力）
    const margin = (LJ.Pop && s.world === 'old') ? LJ.Pop.classMargin(s.city, it.cat) : 1;
    // 未登记折扣
    const reg = (OFFICIAL_PLACES.includes(type) && !isRegistered(s.city)) ? 0.8 : 1;
    return Math.round(base * f * mult * margin * reg * 100) / 100;
  }

  // 出售税率：现代6%增值税；旧时官方集市3%，文物2%，黑市逃税
  function taxRate(world, type) {
    if (world === 'modern') return 0.06;
    if (type === 'blackmarket') return 0;
    if (type === 'antique' || type === 'auction' || type === 'friendship') return 0.02;
    return 0.03;
  }

  function buy(id, qty) {
    const s = LJ.Sys.state;
    const it = LJ.Items[id];
    if (!it || qty < 1) return;
    if (remaining(id) < qty) { LJ.Engine.toast(`今日仅剩 ${remaining(id)} 件。`); return; }
    const price = buyPrice(id);
    const w = wallet();
    if (w.get() < price * qty) { LJ.Engine.toast('钱不够。'); return; }
    const bagW = LJ.Engine.bagWeight();
    if (bagW + it.size * qty > LJ.Engine.bagCap()) { LJ.Engine.toast(`背包放不下（容量${LJ.Engine.bagCap()}kg）。可少买些或用「配送」。`); return; }
    w.set(w.get() - price * qty);
    consumeStock(id, qty);
    affectMarket(it.cat, qty, it.size, -1); // 当地库存减少 → 价格趋升
    addItem(s.bag, id, qty);
    s.stats.trades++;
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}买入 ${it.name}×${qty}，花${LJ.Engine.money(price * qty)}${w.key}。`);
    LJ.Engine.toast(`✅ 购入 ${it.name}×${qty}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function buyDelivered(id, qty) {
    const s = LJ.Sys.state;
    const it = LJ.Items[id];
    if (!it || qty < 1) return;
    if (remaining(id) < qty) { LJ.Engine.toast(`今日仅剩 ${remaining(id)} 件。`); return; }
    const price = buyPrice(id);
    const w = wallet();
    const fee = Math.round(it.size * qty * (s.world === 'modern' ? 2 : 0.5) * 100) / 100;
    if (w.get() < price * qty + fee) { LJ.Engine.toast('钱不够（含运费）。'); return; }
    w.set(w.get() - price * qty - fee);
    consumeStock(id, qty);
    affectMarket(it.cat, qty, it.size, -1);
    addItem(s.home[s.world], id, qty);
    LJ.Engine.advance(0.3);
    LJ.Engine.log(`购入 ${it.name}×${qty} 并配送至家中（运费${fee}元）。`);
    LJ.Engine.toast(`📦 ${it.name}×${qty} 已配送到家`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function sell(id, qty) {
    const s = LJ.Sys.state;
    const it = LJ.Items[id];
    if (!it || qty < 1) return;
    if (!removeItem(s.bag, id, qty)) { LJ.Engine.toast('背包里没有这么多。'); return; }
    const price = sellPrice(id);
    const type = LJ.Engine.currentPlaceDef()[2];
    const rate = taxRate(s.world, type);
    const gross = price * qty;
    const tax = Math.round(gross * rate * 100) / 100;
    const w = wallet();
    w.set(w.get() + gross - tax);
    s.stats.trades++;
    s.stats.taxPaid = (s.stats.taxPaid || 0) + tax;
    if (type === 'blackmarket') s.player.wanted = Math.min(100, s.player.wanted + 5 * qty);
    affectMarket(it.cat, qty, it.size, +1); // 当地市场积压 → 价格趋跌
    if (s.world === 'old') s.player.reputation = Math.min(100, (s.player.reputation || 0) + ((it.cat === 'antique' || it.cat === 'stamp') ? 0.8 : 0.25));
    LJ.Engine.advance(0.2);
    const taxNote = tax > 0 ? `（含税${LJ.Engine.money(tax)}${w.key}）` : (type === 'blackmarket' ? '（逃税·风险↑）' : '');
    LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}卖出 ${it.name}×${qty}，得${LJ.Engine.money(gross - tax)}${w.key}${taxNote}。`);
    LJ.Engine.toast(`💰 卖出 ${it.name}×${qty}，入账 ${LJ.Engine.money(gross - tax)}${w.key}${taxNote}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  /* ================ 出售面板（只收对口类别；黑市/典当行兜底） ================ */
  function placeBuyCats() {
    const type = LJ.Engine.currentPlaceDef()[2];
    return LJ.BUY_CATS[type] === undefined ? null : LJ.BUY_CATS[type];
  }
  function renderSellPanel(content) {
    const s = LJ.Sys.state;
    const bag = s.bag;
    const type = LJ.Engine.currentPlaceDef()[2];
    const cats = placeBuyCats();
    const rate = taxRate(s.world, type);
    const regPenalty = OFFICIAL_PLACES.includes(type) && !isRegistered(s.city);
    content.appendChild(el(`<h3 class="sub">出售背包中的物品</h3>`));
    if (regPenalty) {
      content.appendChild(el(`<div class="panel-note warn">⚠️ 你在本城未办理<b>经商登记</b>，官方集市收购价打8折。<br>→ 可去「${s.world === 'old' ? '街道办' : '行政服务中心'}」办理本城登记。</div>`));
    }
    if (rate > 0) content.appendChild(el(`<div class="tiny">💰 本处出售需缴 ${Math.round(rate * 100)}% 交易税；黑市可逃税但有治安风险。</div>`));
    if (LJ.Pop && s.world === 'old') {
      const prof = LJ.Pop.profile(s.world, s.city);
      const cls = [];
      if (prof.classes.low) cls.push(`${LJ.Pop.fmt(prof.classes.low)}平民`);
      if (prof.classes.mid) cls.push(`${LJ.Pop.fmt(prof.classes.mid)}中产`);
      if (prof.classes.high) cls.push(`${LJ.Pop.fmt(prof.classes.high)}权贵`);
      content.appendChild(el(`<div class="tiny">🏙️ 本城人口 ${LJ.Pop.fmt(prof.pop)}（${cls.join(' · ')}）。${prof.lean}</div>`));
    }
    const sellable = bag.filter((it) => {
      const def = LJ.Items[it.id];
      return def && (cats === null || cats.includes(def.cat));
    });
    if (!sellable.length) {
      const hint = cats && cats.length
        ? `<br>此店只收：${cats.map(LJ.catName).join('、')}`
        : `<br>此店暂时什么都不收`;
      const fallback = s.world === 'old'
        ? `<br>若想出手其它货，可去<b>黑市</b>（什么都收，有风险）。`
        : `<br>可去<b>典当行/回收站</b>（什么都收）。`;
      content.appendChild(el(`<div class="empty">背包里没有这家店要收的货。${hint}${fallback}</div>`));
      return;
    }
    const grid = el(`<div class="sell-table">${sellable.map((it) => {
      const def = LJ.Items[it.id];
      const sp = sellPrice(it.id);
      return `<div class="sell-row">
        <div class="sell-name">${def.name} <span class="qty">×${it.qty}</span></div>
        <div class="sell-price"><b class="sp">${LJ.Engine.money(sp)}${wallet().key === 'CNY' ? '元' : ' ' + wallet().key}</b></div>
        <div class="sell-num"><input type="number" min="1" max="${it.qty}" value="${it.qty}" data-sell-num="${it.id}"></div>
        <div class="sell-op"><button data-sell="${it.id}">出售</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.sell) return;
      const row = b.closest('.sell-row');
      const qty = () => Math.max(1, parseInt($(`[data-sell-num="${b.dataset.sell}"]`, row).value || '1', 10) || 1);
      b.addEventListener('click', () => LJ.Trade.sell(b.dataset.sell, qty()));
    });
    content.appendChild(grid);
  }

  /* —— 现代典当行/回收站（兜底收购，什么都收） —— */
  function renderPawn(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🔁 典当行 · 旧货回收站：<b>什么都收</b>，但压价（约6折）。旧世界带回来的稀奇货都能在这里折现。</div>`));
    renderSellPanel(content);
  }

  /* ================ 市场渲染 ================ */
  function stockRows(place) { return (place[3] || []).map((id) => LJ.Items[id]).filter(Boolean); }

  function renderMarket(content, place) {
    const s = LJ.Sys.state;
    const stock = stockRows(place);
    content.appendChild(el(`<div class="panel-note">${place[1]}。当地行情随供需波动：缺货时涨价，积压时跌价。</div>`));
    if (stock.length) {
      const grid = el(`<div class="buy-table">${stock.map((it) => {
        const bp = buyPrice(it.id);
        const rem = LJ.Trade.remaining(it.id);
        const remTxt = rem === Infinity ? '' : ` · 今日余${rem}${rem === 0 ? '（已售罄，明日补货）' : ''}`;
        const max = rem === Infinity ? 99 : rem;
        const disabled = rem === 0 ? 'disabled' : '';
        return `<div class="buy-row">
          <div class="buy-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.size}kg · ${it.desc}${remTxt}</small></div>
          <div class="buy-price"><b>${bp}${wallet().key === 'CNY' ? '元' : ' ' + wallet().key}</b></div>
          <div class="buy-num"><input type="number" min="1" max="${max}" value="1" data-num="${it.id}"></div>
          <div class="buy-op"><button data-buy="${it.id}" ${disabled}>买入</button><button data-deliver="${it.id}" ${disabled}>买&配送</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => {
        const row = b.closest('.buy-row');
        const qty = () => Math.max(1, parseInt($(`[data-num="${b.dataset.buy || b.dataset.deliver}"]`, row).value || '1', 10) || 1);
        if (b.dataset.buy) b.addEventListener('click', () => LJ.Trade.buy(b.dataset.buy, qty()));
        if (b.dataset.deliver) b.addEventListener('click', () => LJ.Trade.buyDelivered(b.dataset.deliver, qty()));
      });
      content.appendChild(grid);
    } else {
      content.appendChild(el(`<div class="empty">这里没有对外零售的货。</div>`));
    }
    renderSellPanel(content);
  }

  function renderWholesale(content, place) {
    content.appendChild(el(`<div class="panel-note">批发市场：量大价优（约85折），成箱倒卖好去处。</div>`));
    const stock = stockRows(place);
    if (stock.length) {
      const grid = el(`<div class="buy-table">${stock.map((it) => {
        const bp = buyPrice(it.id);
        return `<div class="buy-row">
          <div class="buy-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.size}kg · ${it.desc}</small></div>
          <div class="buy-price"><b>${bp}${wallet().key === 'CNY' ? '元' : ' ' + wallet().key}</b></div>
          <div class="buy-num"><input type="number" min="1" max="99" value="5" data-num="${it.id}"></div>
          <div class="buy-op"><button data-buy="${it.id}">批发</button><button data-deliver="${it.id}">批&配送</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => {
        const row = b.closest('.buy-row');
        const qty = () => Math.max(1, parseInt($(`[data-num="${b.dataset.buy || b.dataset.deliver}"]`, row).value || '1', 10) || 1);
        if (b.dataset.buy) b.addEventListener('click', () => LJ.Trade.buy(b.dataset.buy, qty()));
        if (b.dataset.deliver) b.addEventListener('click', () => LJ.Trade.buyDelivered(b.dataset.deliver, qty()));
      });
      content.appendChild(grid);
    }
    renderSellPanel(content);
  }

  function renderStreet(content, place) {
    content.appendChild(el(`<div class="panel-note">行人来来往往。${LJ.Engine.currentCityDef().name}人按当地行情收你的货，也能结识街坊、兜售票证。</div>`));
    renderSellPanel(content);
    if (LJ.Social) LJ.Social.renderSocial(content);
  }

  function renderBlackMarket(content, place) {
    const s = LJ.Sys.state;
    const hour = LJ.Engine.timeOfDay('old');
    const isNight = hour >= 21 || hour < 5;
    if (!isNight) {
      content.appendChild(el(`<div class="panel-note">🌙 鸽子市只在深夜开市（21点-凌晨5点）。先歇一觉等入夜吧。</div>`));
      return;
    }
    content.appendChild(el(`<div class="panel-note">🌙 深夜黑市：买卖都有加成，也能高价收到票证；但每次交易都会涨治安风险。</div>`));
    const stock = stockRows(place);
    if (stock.length) {
      const grid = el(`<div class="buy-table">${stock.map((it) => {
        const bp = buyPrice(it.id);
        return `<div class="buy-row">
          <div class="buy-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.desc}</small></div>
          <div class="buy-price"><b>${bp}${wallet().key === 'CNY' ? '元' : ' ' + wallet().key}</b></div>
          <div class="buy-num"><input type="number" min="1" max="99" value="1" data-bm-num="${it.id}"></div>
          <div class="buy-op"><button data-bm-buy="${it.id}">买入</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => {
        if (!b.dataset.bmBuy) return;
        const row = b.closest('.buy-row');
        const qty = () => Math.max(1, parseInt($(`[data-bm-num="${b.dataset.bmBuy}"]`, row).value || '1', 10) || 1);
        b.addEventListener('click', () => LJ.Trade.buy(b.dataset.bmBuy, qty()));
      });
      content.appendChild(grid);
    }
    renderSellPanel(content);
  }

  /* ================ 仓储 / 配送 ================ */
  function renderWarehouse(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">📦 仓储与配送：把货仓的货物托运到其他城市，或查看在途。</div>`));
    const inTransit = s.deliveries.filter((d) => d.world === s.world);
    if (inTransit.length) {
      content.appendChild(el(`<h3 class="sub">在途货物</h3><div class="sell-table">${inTransit.map((d) =>
        `<div class="sell-row"><div class="sell-name">→ ${d.toName}<small>${d.items.map((x) => `${LJ.Items[x.id].name}×${x.qty}`).join('、')}</small></div><div class="sell-price">约${Math.ceil(d.hoursLeft)}h后</div></div>`
      ).join('')}</div>`));
    }
    const wc = s.warehouses[s.world][s.city] || (s.warehouses[s.world][s.city] = []);
    if (!wc.length) {
      content.appendChild(el(`<div class="empty">本地货仓是空的。可在背包界面把货放进货仓。</div>`));
      return;
    }
    const cities = s.world === 'old'
      ? Object.keys(LJ.World.old).concat(Object.keys(LJ.World.intlOld))
      : Object.keys(LJ.World.modern).concat(Object.keys(LJ.World.intlModern));
    const options = cities.filter((c) => c !== s.city);
    content.appendChild(el(`<h3 class="sub">托运至其他城市货仓</h3><div class="panel-note">每公斤运费：${s.world === 'modern' ? '2元' : '0.5元'}；到达时间取两地线路时长（无直达72h）。</div>`));
    const shipBox = el(`<div class="sell-table">${wc.map((it) => {
      const def = LJ.Items[it.id];
      return `<div class="sell-row">
        <div class="sell-name">${def.name} <span class="qty">×${it.qty}</span><small>${def.size}kg/件</small></div>
        <div class="sell-price"><select data-ship-to="${it.id}"><option value="">→ 城市…</option>${options.map((c) => `<option value="${c}">${LJ.Trade.cityName(c)}</option>`).join('')}</select></div>
        <div class="sell-num"><input type="number" min="1" max="${it.qty}" value="${it.qty}" data-ship-num="${it.id}"></div>
        <div class="sell-op"><button data-ship="${it.id}">托运</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', shipBox).forEach((b) => {
      if (!b.dataset.ship) return;
      b.addEventListener('click', () => {
        const id = b.dataset.ship;
        const row = b.closest('.sell-row');
        const qty = Math.max(1, parseInt($(`[data-ship-num="${id}"]`, row).value || '1', 10) || 1);
        const to = $(`[data-ship-to="${id}"]`, row).value;
        if (!to) { LJ.Engine.toast('请选择目标城市。'); return; }
        LJ.Trade.ship(id, qty, to);
      });
    });
    content.appendChild(shipBox);
    renderSellPanel(content);
  }

  function cityName(cid) {
    const s = LJ.Sys.state;
    const pool = s.world === 'old' ? (LJ.World.old[cid] || LJ.World.intlOld[cid]) : (LJ.World.modern[cid] || LJ.World.intlModern[cid]);
    return pool ? pool.name : cid;
  }

  function ship(id, qty, toCity) {
    const s = LJ.Sys.state;
    const wc = s.warehouses[s.world][s.city] || (s.warehouses[s.world][s.city] = []);
    if (!removeItem(wc, id, qty)) { LJ.Engine.toast('货仓数量不足。'); return; }
    const def = LJ.Items[id];
    const feeRate = s.world === 'modern' ? 2 : 0.5;
    const fee = Math.round(def.size * qty * feeRate * 100) / 100;
    const w = wallet();
    if (w.get() < fee) { addItem(wc, id, qty); LJ.Engine.toast(`运费不够（${fee}元）。`); return; }
    w.set(w.get() - fee);
    let hours = 72;
    const key1 = s.city + '|' + toCity, key2 = toCity + '|' + s.city;
    const routes = s.world === 'old' ? LJ.World.oldRoutes : LJ.World.modernRoutes;
    const route = routes[key1] || routes[key2];
    if (route) hours = route.hours;
    s.deliveries.push({ id: Date.now() + Math.random(), fromCity: s.city, toCity, toName: cityName(toCity), items: [{ id, qty }], hoursLeft: hours, world: s.world });
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`从${cityName(s.city)}托运 ${def.name}×${qty} 至${cityName(toCity)}货仓，约${hours}小时到达。`);
    LJ.Engine.toast(`📦 已托运 ${def.name}×${qty}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function tickDeliveries(hours) {
    const s = LJ.Sys.state;
    s.deliveries.forEach((d) => { if (d.world === s.world) d.hoursLeft -= hours; });
    const done = s.deliveries.filter((d) => d.world === s.world && d.hoursLeft <= 0);
    if (!done.length) return;
    done.forEach((d) => {
      s.warehouses[s.world][d.toCity] = s.warehouses[s.world][d.toCity] || [];
      d.items.forEach((x) => addItem(s.warehouses[s.world][d.toCity], x.id, x.qty));
      LJ.Engine.log(`📦 货物已到${d.toName}货仓：${d.items.map((x) => `${LJ.Items[x.id].name}×${x.qty}`).join('、')}。`);
    });
    s.deliveries = s.deliveries.filter((d) => !(d.world === s.world && d.hoursLeft <= 0));
    LJ.Sys.save();
  }

  /* ================ 背包操作（支持批量转移） ================ */
  function invAction(id, action, qty) {
    const s = LJ.Sys.state;
    const def = LJ.Items[id];
    if (action === 'use') { LJ.Survival.useItem(id); return; }
    const slot = s.bag.find((x) => x.id === id);
    const n = Math.min(Math.max(1, Math.floor(qty) || 1), slot ? slot.qty : (s.home[s.world].find(x => x.id === id) ? s.home[s.world].find(x => x.id === id).qty : (s.warehouses[s.world][s.city] || []).find(x => x.id === id) ? (s.warehouses[s.world][s.city] || []).find(x => x.id === id).qty : 1));
    if (n < 1) return;
    if (action === 'tohome') {
      if (LJ.Engine.homeWeight(s.world) + def.size * n > LJ.Engine.homeCap(s.world)) { LJ.Engine.toast(`家中储物放不下（余${LJ.Engine.homeCap(s.world) - LJ.Engine.homeWeight(s.world)}kg）。`); return; }
      if (!removeItem(s.bag, id, n)) { LJ.Engine.toast('背包里没有这么多。'); return; }
      addItem(s.home[s.world], id, n);
    } else if (action === 'tostore') {
      if (!removeItem(s.bag, id, n)) { LJ.Engine.toast('背包里没有这么多。'); return; }
      s.warehouses[s.world][s.city] = s.warehouses[s.world][s.city] || [];
      addItem(s.warehouses[s.world][s.city], id, n);
    } else if (action === 'tobag') {
      const tab = LJ.UI.invTab;
      const src = tab === 'home' ? s.home[s.world] : (s.warehouses[s.world][s.city] || (s.warehouses[s.world][s.city] = []));
      const avail = src.find((x) => x.id === id);
      const m = Math.min(n, avail ? avail.qty : 0);
      if (LJ.Engine.bagWeight() + def.size * m > LJ.Engine.bagCap()) { LJ.Engine.toast(`背包放不下（余${LJ.Engine.bagCap() - LJ.Engine.bagWeight()}kg）。`); return; }
      if (!removeItem(src, id, m)) { LJ.Engine.toast('取货失败。'); return; }
      addItem(s.bag, id, m);
    }
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  /* ================ 背包/住宅升级 ================ */
  function renderGear(content) {
    const s = LJ.Sys.state;
    const cap = LJ.Engine.bagCap();
    content.appendChild(el(`<div class="panel-note">🎒 行者装备店。穿越只能带背包里的东西——容量就是你的命。<br>当前容量：<b>${cap}kg</b></div>`));
    const upgrades = [
      { cap: 35, cost: 600, name: '帆布登山包' },
      { cap: 55, cost: 2000, name: '战术背囊' },
      { cap: 80, cost: 6000, name: '旅行拉杆箱' },
      { cap: 120, cost: 16000, name: '空间扩展背囊' },
      { cap: 180, cost: 40000, name: '越野装备套装' }
    ];
    const next = upgrades.find((u) => u.cap > cap);
    const grid = el(`<div class="cards">${upgrades.map((u) => {
      const done = cap >= u.cap;
      const afford = s.money.modern.CNY >= u.cost;
      return `<div class="card"><h3>${done ? '✅' : ''}${u.name}</h3><p>容量 ${u.cap}kg</p><div class="trade-ops"><button data-bag="${u.cap}" ${done || !afford ? 'disabled' : ''}>${done ? '已装备' : u.cost + '元升级'}</button></div></div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.bag) return;
      b.addEventListener('click', () => {
        const u = upgrades.find((x) => x.cap === Number(b.dataset.bag));
        if (!u || cap >= u.cap) return;
        if (s.money.modern.CNY < u.cost) { LJ.Engine.toast('钱不够。'); return; }
        s.money.modern.CNY -= u.cost;
        s.flags.bagCap = u.cap;
        LJ.Engine.log(`升级背包至「${u.name}」，容量 ${u.cap}kg。`);
        LJ.Engine.toast(`🎒 背包升级：${u.cap}kg`);
        LJ.Sys.save(); LJ.UI.renderAll();
      });
    });
    content.appendChild(grid);
  }

  const HOME_UPGRADES = [
    { name: '近郊公寓', cap: 100, cost: 180000 },
    { name: '城区大平层', cap: 220, cost: 850000 },
    { name: '独栋豪宅', cap: 400, cost: 3600000 }
  ];
  function renderProperty(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const home = s.flags.home[w];
    content.appendChild(el(`<div class="panel-note">🏠 房屋中介。升级住宅，扩大${w === 'modern' ? '2026' : '1980'}家里的储物容量。当前：<b>${home.name}</b>（${home.cap}kg）</div>`));
    const grid = el(`<div class="cards">${HOME_UPGRADES.map((u) => {
      const done = home.cap >= u.cap;
      const afford = (w === 'modern' ? s.money.modern.CNY : s.money.old.CNY) >= u.cost;
      return `<div class="card"><h3>${done ? '✅' : ''}${u.name}</h3><p>储物容量 ${u.cap}kg</p><div class="trade-ops"><button data-home="${u.cap}" ${done || !afford ? 'disabled' : ''}>${done ? '已拥有' : LJ.Engine.money(u.cost) + '元'}</button></div></div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.home) return;
      b.addEventListener('click', () => {
        const u = HOME_UPGRADES.find((x) => x.cap === Number(b.dataset.home));
        if (!u || home.cap >= u.cap) return;
        const wallet = w === 'modern' ? s.money.modern : s.money.old;
        if (wallet.CNY < u.cost) { LJ.Engine.toast('钱不够。'); return; }
        wallet.CNY -= u.cost;
        home.cap = u.cap; home.name = u.name;
        LJ.Engine.log(`升级了${w === 'modern' ? '现代' : '旧时'}住宅为「${u.name}」，容量 ${u.cap}kg。`);
        LJ.Engine.toast(`🏠 ${u.name}`);
        LJ.Sys.save(); LJ.UI.renderAll();
      });
    });
    content.appendChild(grid);
  }

  LJ.Trade = {
    addItem, removeItem, wallet, basePrice, buyPrice, sellPrice,
    buy, sell, buyDelivered, renderMarket, renderWholesale, renderStreet,
    renderBlackMarket, renderWarehouse, renderGear, renderProperty, renderSellPanel, renderPawn,
    ship, tickDeliveries, invAction, stockRows, cityName,
    getSat, priceFactor, driftMarket, affectMarket, equilibrium,
    placeLimits, remaining, consumeStock, isRegistered, taxRate, placeBuyCats
  };
})();
