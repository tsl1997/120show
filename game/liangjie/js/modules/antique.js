/* 两界搬运工 · 古玩鉴定系统
 * 1980淘到的“谜团件”→ 依鉴定技能揭示真实器物 → 带回2026拍卖变现。
 * 技能越高，越不易“打眼”，越可能开出重器。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  let relicNo = 0;

  const PERIOD_TIERS = {
    '近现代名家': { region: 'china', modern: [3000, 80000], old: 8 },
    '元明清': { region: 'china', modern: [12000, 600000], old: 30 },
    '唐宋': { region: 'china', modern: [60000, 4000000], old: 60 },
    '秦汉': { region: 'china', modern: [150000, 8000000], old: 100 },
    '商周': { region: 'china', modern: [400000, 22000000], old: 200 },
    '日本': { region: 'japan', modern: [30000, 3000000], old: 40 },
    '欧洲': { region: 'europe', modern: [40000, 5000000], old: 80 },
    '古埃及': { region: 'egypt', modern: [150000, 9000000], old: 150 }
  };

  // 依据鉴定技能挑选年代（越强越敢开出重器）
  function pickPeriod(skill) {
    const r = Math.random();
    const roll = skill / 100;
    const pool = [];
    const add = (p, w) => { for (let i = 0; i < w; i++) pool.push(p); };
    add('近现代名家', 8 - Math.floor(roll * 3));
    add('元明清', 6);
    add('唐宋', 2 + Math.floor(roll * 3));
    add('秦汉', 1 + Math.floor(roll * 3));
    add('商周', 0 + Math.floor(roll * 3));
    if (roll > 0.5) add('日本', 2);
    if (roll > 0.6) add('欧洲', 2);
    if (roll > 0.75) add('古埃及', 2);
    if (r < 0.03) return '商周'; // 极小概率开出顶级
    return pool[Math.floor(Math.random() * pool.length)] || '元明清';
  }

  function rollModern(period, name) {
    const t = PERIOD_TIERS[period];
    if (!t) return 5000;
    if (LJ.TopPrices[name]) return LJ.TopPrices[name];
    const [lo, hi] = t.modern;
    const v = lo + Math.random() * (hi - lo);
    return Math.round(v);
  }

  function makeRelic(period) {
    const series = LJ.RelicSeries.find((s) => s.period === period);
    if (!series) return makeRelic('元明清');
    const name = series.list[Math.floor(Math.random() * series.list.length)];
    relicNo++;
    const id = 'relic_' + relicNo;
    const modern = rollModern(period, name);
    const t = PERIOD_TIERS[period];
    LJ.Items[id] = {
      id, name, cat: 'antique', size: 1 + Math.random() * 3,
      modern, old: t.old,
      desc: `${period} · ${series.region === 'china' ? '中国' : series.region}文物一件；现代价为同类拍品2026参考区间（游戏设定，非具体拍品）。`,
      action: 'trade', consume: null, isMystery: false,
      region: series.region, period, appraised: true
    };
    return id;
  }

  function successChance() {
    const skill = LJ.Sys.state.player.skills.appraisal || 0;
    return Math.min(0.93, 0.25 + skill / 100 * 0.68);
  }

  function appraise(itemId) {
    const s = LJ.Sys.state;
    const slot = s.bag.find((x) => x.id === itemId);
    if (!slot) { LJ.Engine.toast('背包里没有这件东西。'); return; }
    if (s.player.energy < 3) { LJ.Engine.toast('太累了，集中不了精神。'); return; }
    const chance = successChance();
    LJ.Engine.advance(0.5, { energy: 3 });
    s.player.skills.appraisal = Math.min(100, (s.player.skills.appraisal || 0) + 1);
    const def = LJ.Items[itemId];
    if (Math.random() < chance) {
      const period = pickPeriod(s.player.skills.appraisal);
      const rid = makeRelic(period);
      const relic = LJ.Items[rid];
      removeOne(s.bag, itemId);
      LJ.Trade.addItem(s.bag, rid, 1);
      LJ.Engine.log(`你仔细端详「${def.name}」，竟开出一件${period}器物：${relic.name}！（估值¥${LJ.Engine.money(relic.modern)}）`);
      LJ.Engine.toast(`🔍 鉴定成功！开出一件${relic.name}`, 4200);
    } else {
      removeOne(s.bag, itemId);
      const rid = makeRelic('近现代名家');
      const fake = LJ.Items[rid];
      fake.name = '仿古工艺品（打眼货）';
      fake.modern = Math.round(200 + Math.random() * 800);
      fake.old = 1;
      fake.desc = '走眼了——这只是一件普通的仿古工艺品。';
      LJ.Trade.addItem(s.bag, rid, 1);
      LJ.Engine.log(`你打眼了！「${def.name}」只是仿古工艺品，不值钱。`);
      LJ.Engine.toast('😅 打眼了，是仿古货。', 3500);
    }
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function removeOne(list, id) {
    const slot = list.find((x) => x.id === id);
    if (slot) { slot.qty -= 1; if (slot.qty <= 0) { const i = list.indexOf(slot); list.splice(i, 1); } }
  }

  /* —— 文物/古玩店 + 拍卖行渲染 —— */
  function renderAppraise(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const type = LJ.Engine.currentPlaceDef()[2];
    const place = LJ.Engine.currentPlaceDef();

    if (type === 'friendship') { renderFriendship(content, place); return; }

    const skill = s.player.skills.appraisal || 0;
    content.appendChild(el(`<div class="panel-note">🔍 鉴定能力：${Math.round(skill)}/100 · 本次鉴定成功率 ≈ ${Math.round(successChance() * 100)}%<br>鉴定消耗精力，并小幅度提升能力。${w === 'old' ? '在1980年，可以从这里买到泥垢未除的“谜团件”，带回2026年鉴定后可能价值连城。' : '在2026年，把从旧时淘来的谜团件鉴定开箱，或出售已鉴定的文物。'}</div>`));

    // 卖文物（现代古玩城/拍卖行 / 旧时文物商店）
    const relics = s.bag.filter((x) => LJ.Items[x.id] && LJ.Items[x.id].appraised && !LJ.Items[x.id].isMystery);
    if (relics.length) {
      content.appendChild(el(`<h3 class="sub">出售已鉴定文物</h3>`));
      const grid = el(`<div class="goods-table">${relics.map((x) => {
        const def = LJ.Items[x.id];
        const price = relicSellPrice(def);
        return `<div class="goods-row">
          <div class="goods-name">${def.name} ×${x.qty}<small>${def.period} · ${def.desc}</small></div>
          <div class="price">≈${LJ.Engine.money(price)}元</div>
          <div class="qty-ctl"><input type="number" min="1" max="${x.qty}" value="${x.qty}" data-relic-sell-num="${x.id}"></div>
          <div class="trade-ops"><button data-relic-sell="${x.id}">出售</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => {
        if (!b.dataset.relicSell) return;
        const row = b.closest('.goods-row');
        const qty = () => Math.max(1, parseInt($(`[data-relic-sell-num="${b.dataset.relicSell}"]`, row).value || '1', 10) || 1);
        b.addEventListener('click', () => LJ.Antique.sellRelic(b.dataset.relicSell, qty()));
      });
      content.appendChild(grid);
    }

    // 买谜团件（旧时）
    if (w === 'old' && type === 'antique') {
      const stock = place[3] || [];
      content.appendChild(el(`<h3 class="sub">买入“谜团件”（未鉴定）</h3>`));
      const grid = el(`<div class="goods-table">${stock.map((id) => {
        const def = LJ.Items[id];
        return `<div class="goods-row">
          <div class="goods-name">${def.name}<small>${def.desc}</small></div>
          <div class="price">${def.old}元</div>
          <div class="qty-ctl"><input type="number" min="1" max="20" value="1" data-mystery-num="${id}"></div>
          <div class="trade-ops"><button data-mystery-buy="${id}">买入</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => {
        if (!b.dataset.mysteryBuy) return;
        const row = b.closest('.goods-row');
        const qty = () => Math.max(1, parseInt($(`[data-mystery-num="${b.dataset.mysteryBuy}"]`, row).value || '1', 10) || 1);
        b.addEventListener('click', () => LJ.Antique.buyMystery(b.dataset.mysteryBuy, qty()));
      });
      content.appendChild(grid);
    }

    // 鉴定背包谜团件
    const mysteries = s.bag.filter((x) => LJ.Items[x.id] && LJ.Items[x.id].isMystery);
    if (mysteries.length) {
      content.appendChild(el(`<h3 class="sub">鉴定背包中的谜团件</h3>`));
      const grid = el(`<div class="goods-table">${mysteries.map((x) => {
        const def = LJ.Items[x.id];
        return `<div class="goods-row">
          <div class="goods-name">${def.name} ×${x.qty}<small>${def.desc}</small></div>
          <div class="price">——</div>
          <div class="qty-ctl"></div>
          <div class="trade-ops"><button data-appraise="${x.id}">🔍 鉴定</button></div>
        </div>`;
      }).join('')}</div>`);
      $all('button', grid).forEach((b) => b.addEventListener('click', () => LJ.Antique.appraise(b.dataset.appraise)));
      content.appendChild(grid);
    }

    if (!relics.length && !mysteries.length && !(w === 'old' && type === 'antique')) {
      content.appendChild(el(`<div class="empty">没有可鉴定的谜团件，也没有已鉴定的文物。<br>（去1980年的文物商店淘些谜团件吧）</div>`));
    }
  }

  function relicSellPrice(def) {
    const s = LJ.Sys.state;
    const type = LJ.Engine.currentPlaceDef()[2];
    if (s.world === 'modern') {
      if (type === 'auction') return Math.round(def.modern * 0.98);
      return Math.round(def.modern * 0.88);
    }
    return def.old;
  }

  function sellRelic(id, qty) {
    const s = LJ.Sys.state;
    const def = LJ.Items[id];
    if (!def) return;
    if (!LJ.Trade.removeItem(s.bag, id, qty)) { LJ.Engine.toast('数量不足。'); return; }
    const price = relicSellPrice(def);
    const w = s.world === 'modern' ? s.money.modern : s.money.old;
    w.CNY = (w.CNY || 0) + price * qty;
    if (s.world === 'modern') s.stats.earnModern += price * qty;
    else s.stats.earnOld += price * qty;
    LJ.Engine.advance(0.3);
    LJ.Engine.log(`出售「${def.name}」×${qty}，得${LJ.Engine.money(price * qty)}元${s.world === 'modern' ? '（现代）' : '（旧时）'}。`);
    LJ.Engine.toast(`💰 售出 ${def.name}，入账 ${LJ.Engine.money(price * qty)}元`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function buyMystery(id, qty) {
    const s = LJ.Sys.state;
    const def = LJ.Items[id];
    if (LJ.Trade.remaining(id) < qty) { LJ.Engine.toast(`今日仅剩 ${LJ.Trade.remaining(id)} 件谜团货。`); return; }
    const cost = def.old * qty;
    if (s.money.old.CNY < cost) { LJ.Engine.toast('钱不够。'); return; }
    const bagW = LJ.Engine.bagWeight();
    if (bagW + def.size * qty > LJ.Engine.bagCap()) { LJ.Engine.toast('背包放不下了。'); return; }
    s.money.old.CNY -= cost;
    LJ.Trade.consumeStock(id, qty);
    LJ.Trade.addItem(s.bag, id, qty);
    LJ.Engine.advance(0.2);
    LJ.Engine.log(`买入「${def.name}」×${qty}（${cost}元），等待鉴定。`);
    LJ.Engine.toast(`🔮 购入谜团件 ×${qty}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  /* —— 友谊商店（只收外汇券） —— */
  function renderFriendship(content, place) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🏛️ 友谊商店。只收<b>外汇券</b>（可在银行兑换）。进口稀罕货——万宝路、可口可乐、索尼收录机……这里的库存与外面完全不同。</div>`));
    content.appendChild(el(`<div class="tiny">当前外汇券：${LJ.Engine.money(s.money.old.FEC)} 元</div>`));
    const stock = place[3] || [];
    if (!stock.length) { content.appendChild(el(`<div class="empty">柜台空着。</div>`)); return; }
    const grid = el(`<div class="goods-table">${stock.map((id) => {
      const def = LJ.Items[id];
      const price = Math.round(def.old * 1.15 * 100) / 100;
      return `<div class="goods-row">
        <div class="goods-name">${def.name}<small>${LJ.catName(def.cat)} · ${def.desc}</small></div>
        <div class="price">${price} 外汇券</div>
        <div class="qty-ctl"><input type="number" min="1" max="20" value="1" data-fs-num="${id}"></div>
        <div class="trade-ops"><button data-fs-buy="${id}">购入</button></div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.fsBuy) return;
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-fs-num="${b.dataset.fsBuy}"]`, row).value || '1', 10) || 1);
      b.addEventListener('click', () => {
        const id = b.dataset.fsBuy;
        const def = LJ.Items[id];
        if (LJ.Trade.remaining(id) < qty()) { LJ.Engine.toast(`友谊商店今日仅剩 ${LJ.Trade.remaining(id)} 件。`); return; }
        const price = Math.round(def.old * 1.15 * 100) / 100 * qty();
        if (s.money.old.FEC < price) { LJ.Engine.toast('外汇券不足。'); return; }
        const bagW = LJ.Engine.bagWeight();
        if (bagW + def.size * qty() > LJ.Engine.bagCap()) { LJ.Engine.toast('背包放不下了。'); return; }
        s.money.old.FEC -= price;
        LJ.Trade.consumeStock(id, qty());
        LJ.Trade.addItem(s.bag, id, qty());
        LJ.Engine.advance(0.2);
        LJ.Engine.log(`在友谊商店购入「${def.name}」×${qty()}，花${price}外汇券。`);
        LJ.Engine.toast(`🏛️ 购入 ${def.name}`);
        LJ.Sys.save(); LJ.UI.renderAll();
      });
    });
    content.appendChild(grid);
  }

  LJ.Antique = { appraise, renderAppraise, sellRelic, buyMystery, renderFriendship, successChance, makeRelic };
})();
