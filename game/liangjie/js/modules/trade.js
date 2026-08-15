/* 两界搬运工 · 贸易系统
 * 买卖、批发、黑市、街头兜售、仓储配送。
 * 物价基准：现代价 = 2026零售；旧时价 = 1980购买/黑市价。
 * 跨城出售按城市“需求画像”加成，制造南粮北米式的倒爷利润。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function addItem(list, id, qty) {
    const slot = list.find((x) => x.id === id);
    if (slot) slot.qty += qty;
    else list.push({ id: id, qty: qty });
  }
  function removeItem(list, id, qty) {
    const slot = list.find((x) => x.id === id);
    if (!slot) return false;
    if (slot.qty < qty) return false;
    slot.qty -= qty;
    if (slot.qty <= 0) { const i = list.indexOf(slot); list.splice(i, 1); }
    return true;
  }

  /* —— 每日限量库存（稀缺品/邮票/谜团件） —— */
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
    const s = LJ.Sys.state;
    return s.flags.stockLimit[limitKey()][id] || 0;
  }
  function consumeStock(id, qty) {
    const lim = placeLimits();
    if (!lim || lim[id] === undefined) return;
    ensureLimits();
    const s = LJ.Sys.state;
    const key = limitKey();
    s.flags.stockLimit[key][id] = Math.max(0, (s.flags.stockLimit[key][id] || 0) - (qty || 1));
  }

  // 当前世界交易用的钱袋
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

  // 购买价（含批发折扣/黑市溢价）
  function buyPrice(itemId) {
    const s = LJ.Sys.state;
    const w = s.world;
    const base = basePrice(itemId, w);
    const type = LJ.Engine.currentPlaceDef()[2];
    if (type === 'wholesale') return Math.round(base * 0.85 * 100) / 100;
    if (type === 'blackmarket') return Math.round(base * 1.25 * 100) / 100;
    if (type === 'friendship') return Math.round(base * 1.15 * 100) / 100;
    return Math.round(base * 100) / 100;
  }

  // 稀缺度：旧时价/现代价比值高 => 该物品在1980年是稀罕的现代货
  // （如强光手电、尼龙绳、可乐），跨时代倒卖能换来可观旧币；
  // 比值低 => 1980本地产量充足（米面、海产、大闸蟹），是“从旧带回”的货。
  function scarcity(itemId) {
    const it = LJ.Items[itemId];
    if (!it || it.modern <= 0) return false;
    return (it.old / it.modern) >= 0.4;
  }

  // 卖出价
  function sellPrice(itemId) {
    const s = LJ.Sys.state;
    const w = s.world;
    const it = LJ.Items[itemId];
    const base = basePrice(itemId, w);
    const type = LJ.Engine.currentPlaceDef()[2];
    const demand = (LJ.CITY_DEMAND[s.city] && LJ.CITY_DEMAND[s.city][it.cat]) || 0;
    if (it && it.isMystery && w === 'modern') return 5; // 未鉴定旧货在现代只值废品钱
    if (it && it.isMystery) return Math.round(base * 0.5 * 100) / 100;
    let factor;
    if (type === 'blackmarket') factor = w === 'old' ? (scarcity(it.id) ? 1.8 : 1.3) : 1.5;
    else if (type === 'street') factor = 0.9 * (1 + demand);
    else if (w === 'modern') factor = 0.75;
    else factor = (scarcity(it.id) ? 1.2 : 0.7) * (1 + demand);
    return Math.round(base * factor * 100) / 100;
  }

  function buy(id, qty) {
    const s = LJ.Sys.state;
    const it = LJ.Items[id];
    if (!it || qty < 1) return;
    if (remaining(id) < qty) { LJ.Engine.toast(`今日仅剩 ${remaining(id)} 件，进不了这么多货。`); return; }
    const price = buyPrice(id);
    const w = wallet();
    if (w.get() < price * qty) { LJ.Engine.toast('钱不够。'); return; }
    const totalW = it.size * qty;
    const bag = s.bag;
    const bagW = LJ.Engine.bagWeight();
    if (bagW + totalW > LJ.Engine.bagCap()) { LJ.Engine.toast(`背包放不下了（容量${LJ.Engine.bagCap()}kg）。可少买些，或用「配送」。`); return; }
    w.set(w.get() - price * qty);
    consumeStock(id, qty);
    addItem(bag, id, qty);
    s.stats.trades++;
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}买入 ${it.name} ×${qty}，花${LJ.Engine.money(price * qty)}${w.key}。`);
    LJ.Engine.toast(`✅ 购入 ${it.name} ×${qty}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  function sell(id, qty) {
    const s = LJ.Sys.state;
    const it = LJ.Items[id];
    if (!it || qty < 1) return;
    if (!removeItem(s.bag, id, qty)) { LJ.Engine.toast('背包里没有这么多。'); return; }
    const price = sellPrice(id);
    const w = wallet();
    w.set(w.get() + price * qty);
    s.stats.trades++;
    // 黑市交易抬升治安风险；合法买卖积累社会声望（旧时）
    const type = LJ.Engine.currentPlaceDef()[2];
    if (type === 'blackmarket') s.player.wanted = Math.min(100, s.player.wanted + 6 * qty);
    if (s.world === 'old') {
      const repGain = (it.cat === 'antique' || it.cat === 'stamp') ? 1 : 0.3;
      s.player.reputation = Math.min(100, (s.player.reputation || 0) + repGain);
    }
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}卖出 ${it.name} ×${qty}，得${LJ.Engine.money(price * qty)}${w.key}${type === 'blackmarket' ? '（风险↑）' : ''}。`);
    LJ.Engine.toast(`💰 卖出 ${it.name} ×${qty}，入账 ${LJ.Engine.money(price * qty)}${w.key}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 配送（同城，货到直接进家仓） —— */
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
    addItem(s.home, id, qty);
    LJ.Engine.advance(0.3);
    LJ.Engine.log(`购入 ${it.name} ×${qty} 并配送至${LJ.Engine.currentCityDef().name}家中（运费${fee}元）。`);
    LJ.Engine.toast(`📦 ${it.name} ×${qty} 已配送到家`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 市场渲染 —— */
  function stockRows(place) {
    const s = LJ.Sys.state;
    const ids = place[3] || [];
    return ids.map((id) => LJ.Items[id]).filter(Boolean);
  }

  function renderMarket(content, place) {
    const s = LJ.Sys.state;
    const w = s.world;
    const stock = stockRows(place);
    content.appendChild(el(`<div class="panel-note">${place[1]}。在此可买入（行价）或卖出（商店收购）。${s.world === 'modern' ? '现代价' : '旧时价'}为准。</div>`));
    if (!stock.length) {
      content.appendChild(el(`<div class="empty">这里没有对外零售的货物。</div>`));
      return;
    }
    const grid = el(`<div class="goods-table">${stock.map((it) => {
      const bp = buyPrice(it.id);
      const rem = LJ.Trade.remaining(it.id);
      const remTxt = rem === Infinity ? '' : ` · 今日余 ${rem}`;
      return `<div class="goods-row">
        <div class="goods-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.size}kg · ${it.desc}${remTxt}</small></div>
        <div class="price">${bp}${wallet().key === 'CNY' ? '元' : ' ' + (LJ.Currencies[wallet().key] ? LJ.Currencies[wallet().key].name : wallet().key)}</div>
        <div class="qty-ctl"><input type="number" min="1" max="99" value="1" data-num="${it.id}"></div>
        <div class="trade-ops"><button data-buy="${it.id}">买入</button><button data-deliver="${it.id}">买&配送</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-num="${b.dataset.buy || b.dataset.deliver}"]`, row).value || '1', 10) || 1);
      if (b.dataset.buy) b.addEventListener('click', () => LJ.Trade.buy(b.dataset.buy, qty()));
      if (b.dataset.deliver) b.addEventListener('click', () => LJ.Trade.buyDelivered(b.dataset.deliver, qty()));
    });
    content.appendChild(grid);

    // 卖出区：列出背包中的货
    const bag = s.bag;
    const sellable = bag.filter((x) => LJ.Items[x.id] && !(LJ.Items[x.id].isMystery && s.world === 'old' && !LJ.Items[x.id].modern === false));
    if (bag.length) {
      content.appendChild(el(`<h3 class="sub">出售背包中的货物</h3><div class="goods-table">${bag.map((it) => {
        const def = LJ.Items[it.id];
        if (!def) return '';
        const sp = sellPrice(it.id);
        return `<div class="goods-row">
          <div class="goods-name">${def.name} ×${it.qty}<small>${LJ.catName(def.cat)}</small></div>
          <div class="price">${sp}${wallet().key === 'CNY' ? '元' : ''}</div>
          <div class="qty-ctl"><input type="number" min="1" max="${it.qty}" value="${it.qty}" data-sell-num="${it.id}"></div>
          <div class="trade-ops"><button data-sell="${it.id}">卖出</button></div>
        </div>`;
      }).join('')}</div>`));
      $all('button', content).forEach((b) => {
        if (!b.dataset.sell) return;
        const row = b.closest('.goods-row');
        const qty = () => Math.max(1, parseInt($(`[data-sell-num="${b.dataset.sell}"]`, row).value || '1', 10) || 1);
        b.addEventListener('click', () => LJ.Trade.sell(b.dataset.sell, qty()));
      });
    }
  }

  function renderWholesale(content, place) {
    const s = LJ.Sys.state;
    const stock = stockRows(place);
    content.appendChild(el(`<div class="panel-note">批发市场，量大价优（约85折），适合成箱倒卖。卖出也有收购价。</div>`));
    if (!stock.length) {
      content.appendChild(el(`<div class="empty">暂无批发货源。</div>`));
      return;
    }
    const grid = el(`<div class="goods-table">${stock.map((it) => {
      const bp = buyPrice(it.id);
      return `<div class="goods-row">
        <div class="goods-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.size}kg · ${it.desc}</small></div>
        <div class="price">${bp}元/件（批发价）</div>
        <div class="qty-ctl"><input type="number" min="1" max="99" value="5" data-num="${it.id}"></div>
        <div class="trade-ops"><button data-buy="${it.id}">批发</button><button data-deliver="${it.id}">批&配送</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-num="${b.dataset.buy || b.dataset.deliver}"]`, row).value || '1', 10) || 1);
      if (b.dataset.buy) b.addEventListener('click', () => LJ.Trade.buy(b.dataset.buy, qty()));
      if (b.dataset.deliver) b.addEventListener('click', () => LJ.Trade.buyDelivered(b.dataset.deliver, qty()));
    });
    content.appendChild(grid);
  }

  /* —— 街头兜售 —— */
  function renderStreet(content, place) {
    const s = LJ.Sys.state;
    const bag = s.bag;
    if (!bag.length) {
      content.appendChild(el(`<div class="empty">你两手空空，没什么可兜售的。</div>`));
      return;
    }
    content.appendChild(el(`<div class="panel-note">行人来来往往。${LJ.Engine.currentCityDef().name}人对不同货物有不同的需求，卖出价会随当地行情浮动。</div>`));
    const grid = el(`<div class="goods-table">${bag.map((it) => {
      const def = LJ.Items[it.id];
      if (!def) return '';
      const sp = sellPrice(it.id);
      return `<div class="goods-row">
        <div class="goods-name">${def.name} ×${it.qty}<small>${LJ.catName(def.cat)}</small></div>
        <div class="price">≈${sp}元/件</div>
        <div class="qty-ctl"><input type="number" min="1" max="${it.qty}" value="1" data-street-num="${it.id}"></div>
        <div class="trade-ops"><button data-street="${it.id}">叫卖</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.street) return;
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-street-num="${b.dataset.street}"]`, row).value || '1', 10) || 1);
      b.addEventListener('click', () => LJ.Trade.sell(b.dataset.street, qty()));
    });
    content.appendChild(grid);
    // 社交：与本地人物打交道
    if (LJ.Social) LJ.Social.renderSocial(content);
  }

  /* —— 黑市 —— */
  function renderBlackMarket(content, place) {
    const s = LJ.Sys.state;
    const hour = LJ.Engine.timeOfDay('old');
    const isNight = hour >= 21 || hour < 5;
    if (!isNight) {
      content.appendChild(el(`<div class="panel-note">🌙 鸽子市只在深夜开市（21点-凌晨5点）。现在没人。你可以去饭店/家里睡一觉等到深夜。</div>`));
      return;
    }
    content.appendChild(el(`<div class="panel-note">🌙 灯火昏暗的深夜黑市。价格高（买卖都有加成），但每一次交易都会让你的「治安风险」上升。联防队随时可能巡查。</div>`));
    const stock = stockRows(place);
    const grid = el(`<div class="goods-table">${stock.map((it) => {
      const bp = buyPrice(it.id);
      return `<div class="goods-row">
        <div class="goods-name">${it.name}<small>${LJ.catName(it.cat)} · ${it.desc}</small></div>
        <div class="price">${bp}元</div>
        <div class="qty-ctl"><input type="number" min="1" max="99" value="1" data-bm-num="${it.id}"></div>
        <div class="trade-ops"><button data-bm-buy="${it.id}">买入</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.bmBuy) return;
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-bm-num="${b.dataset.bmBuy}"]`, row).value || '1', 10) || 1);
      b.addEventListener('click', () => LJ.Trade.buy(b.dataset.bmBuy, qty()));
    });
    content.appendChild(grid);
    // 黑市卖货
    const bag = s.bag;
    if (bag.length) {
      content.appendChild(el(`<h3 class="sub">在黑市出手（价格高，风险高）</h3><div class="goods-table">${bag.map((it) => {
        const def = LJ.Items[it.id];
        if (!def) return '';
        const sp = sellPrice(it.id);
        return `<div class="goods-row">
          <div class="goods-name">${def.name} ×${it.qty}</div>
          <div class="price">${sp}元</div>
          <div class="qty-ctl"><input type="number" min="1" max="${it.qty}" value="1" data-bm-sell-num="${it.id}"></div>
          <div class="trade-ops"><button data-bm-sell="${it.id}">出手</button></div>
        </div>`;
      }).join('')}</div>`));
      $all('button', content).forEach((b) => {
        if (!b.dataset.bmSell) return;
        const row = b.closest('.goods-row');
        const qty = () => Math.max(1, parseInt($(`[data-bm-sell-num="${b.dataset.bmSell}"]`, row).value || '1', 10) || 1);
        b.addEventListener('click', () => LJ.Trade.sell(b.dataset.bmSell, qty()));
      });
    }
  }

  /* —— 仓库与配送 —— */
  function renderWarehouse(content, place) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">📦 仓储与配送中心。可把货仓的货物托运到其他城市的货仓，或查看在途货物。</div>`));

    // 在途
    const inTransit = s.deliveries.filter((d) => d.world === s.world);
    if (inTransit.length) {
      content.appendChild(el(`<h3 class="sub">在途货物</h3><div class="goods-table">${inTransit.map((d) =>
        `<div class="goods-row"><div class="goods-name">→ ${d.toName}<small>${d.items.map((x) => `${LJ.Items[x.id].name}×${x.qty}`).join('、')}</small></div><div class="price">约${Math.ceil(d.hoursLeft)}小时后到达</div><div class="trade-ops"><span class="qty"></span></div></div>`
      ).join('')}</div>`));
    }

    // 托运
    const wc = s.warehouses[s.city] || (s.warehouses[s.city] = []);
    if (!wc.length) {
      content.appendChild(el(`<div class="empty">${LJ.Engine.currentCityDef().name}货仓是空的。可在背包界面把货放进货仓。</div>`));
      return;
    }
    const cities = s.world === 'old'
      ? Object.keys(LJ.World.old).concat(Object.keys(LJ.World.intlOld))
      : Object.keys(LJ.World.modern).concat(Object.keys(LJ.World.intlModern));
    const options = cities.filter((c) => c !== s.city);
    content.appendChild(el(`<h3 class="sub">托运至其他城市货仓</h3>`));
    content.appendChild(el(`<div class="panel-note">每公斤运费：${s.world === 'modern' ? '2元' : '0.5元'}；运输时间取两地线路时间（无直达则72小时）。</div>`));
    const ship = el(`<div class="goods-table">${wc.map((it) => {
      const def = LJ.Items[it.id];
      return `<div class="goods-row">
        <div class="goods-name">${def.name} ×${it.qty}<small>${def.size}kg/件</small></div>
        <div class="qty-ctl"><input type="number" min="1" max="${it.qty}" value="${it.qty}" data-ship-num="${it.id}"></div>
        <div class="trade-ops">
          <select data-ship-to="${it.id}"><option value="">目标城市…</option>${options.map((c) => `<option value="${c}">${cityName(c)}</option>`).join('')}</select>
          <button data-ship="${it.id}">托运</button>
        </div>
      </div>`;
    }).join('')}</div>`);
    $all('button', ship).forEach((b) => {
      if (!b.dataset.ship) return;
      b.addEventListener('click', () => {
        const id = b.dataset.ship;
        const row = b.closest('.goods-row');
        const qty = Math.max(1, parseInt($(`[data-ship-num="${id}"]`, row).value || '1', 10) || 1);
        const to = $(`[data-ship-to="${id}"]`, row).value;
        if (!to) { LJ.Engine.toast('请选择目标城市。'); return; }
        LJ.Trade.ship(id, qty, to);
      });
    });
    content.appendChild(ship);
  }

  function cityName(cid) {
    const s = LJ.Sys.state;
    const w = s.world;
    const pool = w === 'old' ? (LJ.World.old[cid] || LJ.World.intlOld[cid]) : (LJ.World.modern[cid] || LJ.World.intlModern[cid]);
    return pool ? pool.name : cid;
  }

  function ship(id, qty, toCity) {
    const s = LJ.Sys.state;
    s.warehouses[s.city] = s.warehouses[s.city] || [];
    const wc = s.warehouses[s.city];
    if (!removeItem(wc, id, qty)) { LJ.Engine.toast('货仓里数量不足。'); return; }
    const def = LJ.Items[id];
    const feeRate = s.world === 'modern' ? 2 : 0.5;
    const fee = Math.round(def.size * qty * feeRate * 100) / 100;
    const w = wallet();
    if (w.get() < fee) { addItem(wc, id, qty); LJ.Engine.toast(`运费不够（${fee}元）。`); return; }
    w.set(w.get() - fee);
    let hours = 72;
    const key1 = s.city + '|' + toCity, key2 = toCity + '|' + s.city;
    const route = (s.world === 'old' ? LJ.World.oldRoutes : LJ.World.modernRoutes)[key1] || (s.world === 'old' ? LJ.World.oldRoutes : LJ.World.modernRoutes)[key2];
    if (route) hours = route.hours;
    s.deliveries.push({
      id: Date.now() + Math.random(),
      fromCity: s.city, toCity: toCity, toName: cityName(toCity),
      items: [{ id: id, qty: qty }],
      hoursLeft: hours, world: s.world
    });
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`从${cityName(s.city)}托运 ${def.name}×${qty} 至${cityName(toCity)}货仓，约${hours}小时到达。`);
    LJ.Engine.toast(`📦 已托运 ${def.name} ×${qty}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  // 递送在途货物（由引擎 advance 调用）
  function tickDeliveries(hours) {
    const s = LJ.Sys.state;
    s.deliveries.forEach((d) => { if (d.world === s.world) d.hoursLeft -= hours; });
    const done = s.deliveries.filter((d) => d.world === s.world && d.hoursLeft <= 0);
    if (!done.length) return;
    done.forEach((d) => {
      s.warehouses[d.toCity] = s.warehouses[d.toCity] || [];
      d.items.forEach((x) => addItem(s.warehouses[d.toCity], x.id, x.qty));
      LJ.Engine.log(`📦 货物已到达${d.toName}货仓：${d.items.map((x) => `${LJ.Items[x.id].name}×${x.qty}`).join('、')}。`);
    });
    s.deliveries = s.deliveries.filter((d) => !(d.world === s.world && d.hoursLeft <= 0));
    LJ.Sys.save();
  }

  /* —— 背包操作：转移/使用 —— */
  function invAction(id, action) {
    const s = LJ.Sys.state;
    if (action === 'use') { LJ.Survival.useItem(id); return; }
    if (action === 'tohome') {
      if (!removeItem(s.bag, id, 1)) return;
      addItem(s.home, id, 1);
      LJ.Engine.toast('已放入家中储物。');
    } else if (action === 'tostore') {
      if (!removeItem(s.bag, id, 1)) return;
      s.warehouses[s.city] = s.warehouses[s.city] || [];
      addItem(s.warehouses[s.city], id, 1);
      LJ.Engine.toast('已放入本地货仓。');
    } else if (action === 'tobag') {
      let src = action === 'tobag' ? null : null;
      // 依据来源区分：需要知道当前 tab
      const tab = LJ.UI.invTab;
      let ok = false;
      if (tab === 'home') ok = removeItem(s.home, id, 1);
      else if (tab === 'warehouse') {
        s.warehouses[s.city] = s.warehouses[s.city] || [];
        ok = removeItem(s.warehouses[s.city], id, 1);
      }
      if (!ok) { LJ.Engine.toast('取货失败。'); return; }
      if (LJ.Engine.bagWeight() + (LJ.Items[id] ? LJ.Items[id].size : 0) > LJ.Engine.bagCap()) {
        LJ.Engine.toast('背包空间不足。');
        // 退回
        if (tab === 'home') addItem(s.home, id, 1);
        else addItem(s.warehouses[s.city] || (s.warehouses[s.city] = []), id, 1);
        return;
      }
      addItem(s.bag, id, 1);
      LJ.Engine.toast('已放入背包。');
    } else if (action === 'drop') {
      if (!removeItem(s.home, id, 1)) return;
      LJ.Engine.toast('已丢弃。');
    }
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  LJ.Trade = {
    addItem, removeItem, wallet, buyPrice, sellPrice, buy, sell, buyDelivered,
    renderMarket, renderWholesale, renderStreet, renderBlackMarket, renderWarehouse,
    ship, tickDeliveries, invAction, stockRows, cityName,
    placeLimits, remaining, consumeStock
  };
})();
