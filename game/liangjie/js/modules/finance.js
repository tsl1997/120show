/* 两界搬运工 · 金融系统
 * 银行存取、多币种外汇（现代：年度5万美元购汇额度；旧时：官方汇率与外汇券）、
 * A股模拟（T+1、10%涨跌幅、交易时间）。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function tickInterest(world) {
    const s = LJ.Sys.state;
    const rate = world === 'modern' ? LJ.BankRates.modern.depositAnnual : LJ.BankRates.old.depositAnnual;
    const bal = s.bank[world].CNY || 0;
    const interest = Math.round(bal * rate / 365 * 100) / 100;
    if (interest > 0.001) {
      s.bank[world].CNY = Math.round((s.bank[world].CNY + interest) * 100) / 100;
    }
  }

  /* —— 银行界面 —— */
  function renderBank(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    content.appendChild(el(`<div class="panel-note">${w === 'modern' ? '2026年的银行。活期存款年利率' + (LJ.BankRates.modern.depositAnnual * 100).toFixed(2) + '%' : '1980年的中国银行。活期存款年利率' + (LJ.BankRates.old.depositAnnual * 100).toFixed(2) + '%。官方外汇牌价与外汇券在此办理。'}</div>`));

    const cash = w === 'modern' ? s.money.modern.CNY : s.money.old.CNY;
    const dep = s.bank[w].CNY || 0;
    content.appendChild(el(`<div class="cards">
      <div class="card"><h3>现金</h3><p>${LJ.Engine.fmtMoney(cash)}</p></div>
      <div class="card"><h3>存款</h3><p>${LJ.Engine.fmtMoney(dep)}（每日计息）</p></div>
    </div>`));

    const box = el(`<div class="bank-box">
      <h3>存 / 取</h3>
      <div class="row">
        <input type="number" id="bankAmt" min="0" value="100" style="width:140px">
        <button id="deposit">存入</button>
        <button id="withdraw">取出</button>
      </div>
    </div>`);
    $('#deposit', box).addEventListener('click', () => {
      const amt = parseFloat($('#bankAmt', box).value) || 0;
      if (amt <= 0 || cash < amt) { LJ.Engine.toast('金额不足。'); return; }
      if (w === 'modern') s.money.modern.CNY -= amt; else s.money.old.CNY -= amt;
      s.bank[w].CNY += amt;
      LJ.Engine.advance(0.1);
      LJ.Engine.log(`存款 ${amt}元。`);
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('#withdraw', box).addEventListener('click', () => {
      const amt = parseFloat($('#bankAmt', box).value) || 0;
      if (amt <= 0 || dep < amt) { LJ.Engine.toast('存款不足。'); return; }
      s.bank[w].CNY -= amt;
      if (w === 'modern') s.money.modern.CNY += amt; else s.money.old.CNY += amt;
      LJ.Engine.advance(0.1);
      LJ.Engine.log(`取款 ${amt}元。`);
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);

    if (w === 'modern') renderModernFX(content);
    else renderOldFX(content);
  }

  /* —— 现代外汇 —— */
  function renderModernFX(content) {
    const s = LJ.Sys.state;
    const quotaUsed = s.money.fxQuota.USD || 0;
    const quotaLeft = Math.max(0, 50000 - quotaUsed);
    content.appendChild(el(`<div class="panel-note">💱 结售汇（以人民币买卖外币）。年度购汇额度剩余约 <b>$${LJ.Engine.money(quotaLeft)}</b>（每年5万美元）。</div>`));
    const box = el(`<div class="fx-box">
      <h3>人民币 ⇄ 外币</h3>
      <div class="row">
        <select id="fxCur">${Object.keys(LJ.FX.CNY).map((c) => `<option value="${c}">${c}（1${c}≈${LJ.FX.CNY[c]}元）</option>`).join('')}</select>
        <input type="number" id="fxAmt" min="0" value="100" style="width:140px">
        <button id="fxBuy">用人民币购买</button>
        <button id="fxSell">卖出外币换人民币</button>
      </div>
      <div class="tiny">买入外币占用购汇额度；卖出外币不占额度。</div>
    </div>`);
    $('#fxBuy', box).addEventListener('click', () => {
      const cur = $('#fxCur', box).value;
      const amt = parseFloat($('#fxAmt', box).value) || 0;
      if (amt <= 0) return;
      const rate = LJ.FX.CNY[cur] * 1.01;
      const cny = amt * rate;
      if (s.money.modern.CNY < cny) { LJ.Engine.toast('人民币不足。'); return; }
      const usdEq = cny / 7.2;
      if (quotaUsed + usdEq > 50000) { LJ.Engine.toast('超过年度购汇额度（5万美元）。'); return; }
      s.money.modern.CNY -= cny;
      s.money.modern[cur] = (s.money.modern[cur] || 0) + amt;
      s.money.fxQuota.USD += usdEq;
      LJ.Engine.log(`用${LJ.Engine.money(cny)}元人民币购入 ${amt} ${cur}。`);
      LJ.Engine.toast(`💱 购入 ${amt} ${cur}`);
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('#fxSell', box).addEventListener('click', () => {
      const cur = $('#fxCur', box).value;
      const amt = parseFloat($('#fxAmt', box).value) || 0;
      if (amt <= 0 || (s.money.modern[cur] || 0) < amt) { LJ.Engine.toast('外币不足。'); return; }
      const rate = LJ.FX.CNY[cur] * 0.99;
      const cny = amt * rate;
      s.money.modern[cur] -= amt;
      s.money.modern.CNY += cny;
      LJ.Engine.log(`卖出 ${amt} ${cur}，换得${LJ.Engine.money(cny)}元人民币。`);
      LJ.Engine.toast(`💱 卖出 ${amt} ${cur}`);
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);
  }

  /* —— 旧时外汇 —— */
  function renderOldFX(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="fx-box">
      <h3>旧时外汇 · 1980</h3>
      <div class="panel-note">官方牌价：1美元≈1.5元人民币；外汇券1元≈1.28元人民币（友谊商店专用）。</div>
      <div class="row">
        <select id="fxOldCur">
          <option value="USD">美元（1.5元/美元）</option>
          <option value="HKD">港币（0.2元/港币）</option>
          <option value="JPY">日元（0.007元/日元）</option>
        </select>
        <input type="number" id="fxOldAmt" min="0" value="1" style="width:120px">
        <button id="fxOldToCny">外币→人民币</button>
      </div>
      <div class="row">
        用人民币买外汇券：<input type="number" id="fecAmt" min="0" value="10" style="width:120px">
        <button id="fecBuy">买外汇券</button>
        <button id="fecSell">外汇券→人民币</button>
        <span class="tiny">当前外汇券：${LJ.Engine.money(s.money.old.FEC)}</span>
      </div>
    </div>`));
    const OLD_FX = { USD: 1.5, HKD: 0.2, JPY: 0.007 };
    $('#fxOldToCny', content).addEventListener('click', () => {
      const cur = $('#fxOldCur', content).value;
      const amt = parseFloat($('#fxOldAmt', content).value) || 0;
      const have = s.money.modern[cur] || 0;
      if (amt <= 0 || have < amt) { LJ.Engine.toast('你持有的该外币不足（可在现代换汇后带现金过来）。'); return; }
      s.money.modern[cur] -= amt;
      s.money.old.CNY += Math.round(amt * OLD_FX[cur] * 100) / 100;
      LJ.Engine.log(`在1980年兑换 ${amt} ${cur} → 旧人民币${LJ.Engine.money(amt * OLD_FX[cur])}元。`);
      LJ.Engine.toast(`💰 兑换成功`);
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('#fecBuy', content).addEventListener('click', () => {
      const amt = parseFloat($('#fecAmt', content).value) || 0;
      const cost = amt * 1.28;
      if (s.money.old.CNY < cost) { LJ.Engine.toast('旧人民币不足。'); return; }
      s.money.old.CNY -= cost;
      s.money.old.FEC += amt;
      LJ.Engine.log(`用${LJ.Engine.money(cost)}元人民币买入${amt}元外汇券。`);
      LJ.Engine.toast('🪙 已兑换外汇券');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('#fecSell', content).addEventListener('click', () => {
      const amt = parseFloat($('#fecAmt', content).value) || 0;
      if (amt <= 0 || s.money.old.FEC < amt) { LJ.Engine.toast('外汇券不足。'); return; }
      s.money.old.FEC -= amt;
      s.money.old.CNY += amt * 1.28;
      LJ.Engine.log(`卖出${amt}元外汇券换回人民币。`);
      LJ.Engine.toast('🪙 外汇券已兑换');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
  }

  /* =============== A股 =============== */
  function marketOpen() {
    const s = LJ.Sys.state;
    const hour = LJ.Engine.timeOfDay('modern');
    const day = new Date(Date.UTC(2026, 0, 1) + s.time.modern * 86400000).getUTCDay();
    if (day === 0 || day === 6) return false;
    const open1 = hour >= 9.5 && hour <= 11.5;
    const open2 = hour >= 13 && hour <= 15;
    return open1 || open2;
  }

  function renderStock(content) {
    const s = LJ.Sys.state;
    const open = marketOpen();
    content.appendChild(el(`<div class="panel-note">📈 A股模拟交易。交易时间：周一至周五 9:30-11:30 / 13:00-15:00。实行T+1，单日涨跌幅±10%。${open ? '' : '（当前休市）'}</div>`));

    const box = el(`<div class="fx-box">
      <div class="row">
        股票账户资金：<b>${LJ.Engine.fmtMoney(s.stock.cash)}</b>
        <input type="number" id="stockAmt" min="0" value="100" style="width:120px">
        <button id="stockIn">转入</button>
        <button id="stockOut">转出</button>
      </div>
    </div>`);
    $('#stockIn', box).addEventListener('click', () => {
      const amt = parseFloat($('#stockAmt', box).value) || 0;
      if (amt <= 0 || s.money.modern.CNY < amt) { LJ.Engine.toast('现金不足。'); return; }
      s.money.modern.CNY -= amt; s.stock.cash += amt;
      LJ.Engine.toast('已转入股票账户'); LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('#stockOut', box).addEventListener('click', () => {
      const amt = parseFloat($('#stockAmt', box).value) || 0;
      if (amt <= 0 || s.stock.cash < amt) { LJ.Engine.toast('账户资金不足。'); return; }
      s.stock.cash -= amt; s.money.modern.CNY += amt;
      LJ.Engine.toast('已转出到现金'); LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);

    const grid = el(`<div class="goods-table">${LJ.Stocks.map((st) => {
      const price = LJ.EngineStocks.prices[st.id] || st.base;
      const pos = s.stock.pos[st.id] || 0;
      const boughtAt = s.stock.boughtAt && s.stock.boughtAt[st.id];
      const t1 = !boughtAt || LJ.Engine.dayIndex('modern') > boughtAt;
      return `<div class="goods-row">
        <div class="goods-name">${st.name}<small>${st.sector} · 持仓${pos}股</small></div>
        <div class="price">${price}元</div>
        <div class="qty-ctl"><input type="number" min="1" value="100" style="width:80px" data-stock-num="${st.id}"></div>
        <div class="trade-ops">
          <button data-stock-buy="${st.id}" ${open ? '' : 'disabled'}>买入</button>
          <button data-stock-sell="${st.id}" ${open && t1 && pos > 0 ? '' : 'disabled'}>卖出</button>
        </div>
      </div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => {
      if (!b.dataset.stockBuy && !b.dataset.stockSell) return;
      const id = b.dataset.stockBuy || b.dataset.stockSell;
      const row = b.closest('.goods-row');
      const qty = () => Math.max(1, parseInt($(`[data-stock-num="${id}"]`, row).value || '1', 10) || 1);
      b.addEventListener('click', () => {
        if (b.dataset.stockBuy) LJ.Finance.stockTrade(id, qty(), 'buy');
        else LJ.Finance.stockTrade(id, qty(), 'sell');
      });
    });
    content.appendChild(grid);
  }

  function stockTrade(id, qty, side) {
    const s = LJ.Sys.state;
    if (!marketOpen()) { LJ.Engine.toast('当前休市。'); return; }
    const price = LJ.EngineStocks.prices[id];
    if (side === 'buy') {
      const cost = price * qty;
      if (s.stock.cash < cost) { LJ.Engine.toast('股票账户资金不足。'); return; }
      s.stock.cash -= cost;
      s.stock.pos[id] = (s.stock.pos[id] || 0) + qty;
      s.stock.boughtAt = s.stock.boughtAt || {};
      s.stock.boughtAt[id] = LJ.Engine.dayIndex('modern');
      LJ.Engine.advance(0.1);
      LJ.Engine.log(`买入 ${LJ.Stocks.find((x) => x.id === id).name} ${qty}股 @ ${price}元。`);
    } else {
      const pos = s.stock.pos[id] || 0;
      const boughtAt = s.stock.boughtAt && s.stock.boughtAt[id];
      if (pos < qty) { LJ.Engine.toast('持仓不足。'); return; }
      if (boughtAt !== undefined && LJ.Engine.dayIndex('modern') <= boughtAt) { LJ.Engine.toast('T+1：当日买入不可卖出。'); return; }
      const gain = price * qty;
      s.stock.pos[id] -= qty;
      if (s.stock.pos[id] <= 0) delete s.stock.pos[id];
      s.stock.cash += gain;
      LJ.Engine.advance(0.1);
      LJ.Engine.log(`卖出 ${LJ.Stocks.find((x) => x.id === id).name} ${qty}股 @ ${price}元。`);
    }
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  LJ.Finance = { tickInterest, renderBank, renderStock, stockTrade, marketOpen, renderModernFX, renderOldFX };
})();
