/* ================================================================
   两界人生 · 界面（渲染 + 交互）
   ================================================================ */

/* 物品效果描述（仅拥有后可见） */
function itemDesc(it){
  const parts=[];
  if(it.use){
    if(it.use.hp) parts.push("体力+"+it.use.hp);
    if(it.use.mood) parts.push("心情+"+it.use.mood);
    if(it.use.charm) parts.push("魅力+"+it.use.charm);
    if(it.use.cap) parts.push("穿越容量+"+it.use.cap);
  }
  if(it.charm) parts.push("魅力+"+it.charm);
  if(it.note) parts.push(it.note);
  return parts.join(" · ");
}

const U = {
  el(id){ return document.getElementById(id); },

  toast(msg, cls){
    const t = this.el("toast");
    t.textContent = msg;
    t.className = "toast show " + (cls||"");
    clearTimeout(this._tt);
    this._tt = setTimeout(()=> t.className = "toast", 2000);
  },

  init(){
    document.addEventListener("click", e => this.onClick(e));
    this.render();
    if(S.crossCd === null) this.showCdPick();
  },

  /* ---------------- 状态栏（仅显示当前世界） ---------------- */
  renderTop(){
    const d = dateOf(S.world);
    const worn = S.worn ? ITEMS[S.worn].name + (S.wornBroken?"(破)":"") : "无";
    const charm = S.charmBase + S.beautyBonus + (S.worn && !S.wornBroken ? (ITEMS[S.worn].charm||0) : 0);
    const cd = cdRemain();
    const cdTxt = S.crossCd===null ? "未设定冷却" : (cd>0 ? "冷却剩余 "+cd+" 天" : "可穿越");
    const cashTxt = S.world==="26" ? `¥${fmtMoney(S.money["26"])}` : `¥${fmtFen(moneyWallet())}${moneyPig()?`·家¥${fmtFen(moneyPig())}`:""}`;
    this.el("topbar").innerHTML = `
      <div class="brand">两界人生 <small>${S.world==="26"?"2026·现代":"1980·旧时"}</small></div>
      <div class="stat"><b>${S.world==="26"?"2026":"1980"}</b> ${d.y}年${d.m}月${d.d}日 ${nowClock()}</div>
      <div class="stat"><span class="lbl">${S.world==="26"?"现代现金":"随身现金"}</span><b>${cashTxt}</b></div>
      <div class="stat"><span class="lbl">体力</span><b>${Math.round(S.hp)}/100</b></div>
      <div class="stat"><span class="lbl">心情</span><b>${Math.round(S.mood)}</b></div>
      <div class="stat"><span class="lbl">魅力</span><b>${charm}</b></div>
      <div class="stat"><span class="lbl">等级</span><b>Lv${levelOf(S.exp)}</b> <span class="lbl">经验</span><b>${S.exp}</b></div>
      <div class="stat"><span class="lbl">穿越容量</span><b>${travelCap()}</b></div>
      <div class="stat"><span class="lbl">冷却</span><b>${cdTxt}</b></div>
      <button class="btn ghost" data-codex="1">图鉴</button>
      <button class="btn ghost" data-wait="1">⏳ 等待1小时</button>
      <button class="btn ghost" id="resetGame">重开</button>`;
  },

  /* ---------------- 左侧地点导航 ---------------- */
  renderNav(){
    const w = WORLDS[S.world];
    this.el("navlist").innerHTML = `
      <div class="navgrp">${w.name} · ${nowClock()}</div>
      ${w.locs.map(l=>{
        const sh = SHOPS[l];
        const cur = S.loc===l ? "on" : "";
        const open = shopOpen(l);
        const hrs = l==="heishi" ? "18点-次日6点" : hoursText(sh.hours);
        return `<button class="loc ${cur}" data-loc="${l}" title="${open?"营业中":"已打烊"} · ${hrs}" style="${open?"":"opacity:.55"}">${sh.icon||""} ${sh.name}${open?"":" 🔒"}</button>`;
      }).join("")}`;
  },

  /* ---------------- 右侧背包 / 票据 / 好感 ---------------- */
  renderSide(){
    const pack = S.backpack.length ? S.backpack.map(it=>{
      const d = ITEMS[it.id];
      const desc = itemDesc(d);
      const isCloth = d.charm !== undefined;
      const wearing = S.worn === it.id;
      const broken = wearing && S.wornBroken;
      const wearBtn = isCloth ? (wearing
        ? `<button class="btn sm" data-takeoff="1">脱下</button>`
        : `<button class="btn sm" data-wear="${it.id}">穿上</button>`) : "";
      const discBtn = isCloth ? `<button class="btn sm" data-discard="${it.id}">丢弃</button>` : "";
      return `<div class="row">
        <span class="nm">${itemNameHtml(it.id)} <small>×${it.qty}${desc?" · "+desc:""}${wearing?" · "+(broken?"已破损":"已穿上一件"):""}</small></span>
        ${d.use && d.exp && (d.use.hp||d.use.mood)?`<button class="btn sm" data-use="${it.id}">用</button>`:""}
        ${d.use && !d.exp && d.use.cap?`<button class="btn sm" data-use="${it.id}">用</button>`:""}
        ${wearBtn}${discBtn}
      </div>`;
    }).join("") : `<div class="empty">背包空空</div>`;

    let tickets = "";
    if(S.world==="80"){
      const has = Object.keys(TICKETS).filter(k=>tValue("wallet",k)>0 || tValue("pig",k)>0);
      if(has.length){
        tickets = `<div class="mini-h"><span class="lbl">随身票据（${tTotalCount("wallet")}/${tCap("wallet")}张）</span></div>` +
          has.map(k=>{
            const w = tValue("wallet",k)>0 ? `${tPieceList("wallet",k)}` : "";
            const p = tValue("pig",k)>0 ? `家中:${tPieceList("pig",k)}` : "";
            return `<div class="tk"><span>${TICK_NAME[k]}</span><b>${[w,p].filter(Boolean).join(" / ")||""}</b></div>`;
          }).join("") +
          `<div class="row"><span class="nm">⚠随身票据过多有被劫风险</span></div>`;
      }
    }

    let bankHtml = "";
    if(S.world==="80" && S.bank.length){
      bankHtml = `<div class="mini-h"><span class="lbl">我的存折</span></div>` +
        S.bank.map((b,i)=>`<div class="tk"><span>${b.name}</span><b>${fmtFen(b.amt)}</b><button class="btn sm" data-brec="${i}">明细</button></div>`).join("");
    }

    const affHtml = Object.entries(S.aff)
      .filter(([k,v])=>(NPCS[k]||{}).world === S.world)
      .map(([k,v])=>{
        const g = Math.min(100,v)/100;
        return `<div class="affrow"><span>${k}</span><div class="bar"><i style="width:${g*100}%"></i></div><b>${v}</b></div>`;
      }).join("");

    let questHtml = "";
    if(S.quests.length){
      questHtml = `<div class="mini-h"><span class="lbl">进行中的任务（${S.quests.length}）</span></div>` +
        S.quests.map(x=>{
          const q = questById(x.qid);
          if(!q) return "";
          const pr = questProgress(q);
          const t = q.target.item ? ITEMS[q.target.item].name : "「"+q.target.tag+"」物品";
          const done = pr.have >= pr.need;
          return `<div class="tk"><span>${q.name}<small>${t} ${pr.have}/${pr.need}</small></span><b class="${done?"good":"lbl"}">${done?"可交付":"进行中"}</b></div>`;
        }).join("");
    }

    this.el("side").innerHTML = `
      <div class="panel"><h3>背包 (${packWeight()}/${backpackCap()})</h3><div class="pd">${pack}</div></div>
      ${questHtml?`<div class="panel"><div class="pd">${questHtml}</div></div>`:""}
      ${tickets?`<div class="panel"><div class="pd">${tickets}</div></div>`:""}
      ${bankHtml?`<div class="panel"><div class="pd">${bankHtml}</div></div>`:""}
      <div class="panel"><h3>好感度</h3><div class="pd">${affHtml||'<div class="empty">—</div>'}</div></div>`;
  },

  /* ---------------- 主面板 ---------------- */
  renderMain(){
    const sh = SHOPS[S.loc];
    if(sh.kind === "home") this.renderHome(sh);
    else if(sh.kind === "market") this.renderMarket(sh);
    else if(sh.kind === "meal") this.renderMeal(sh);
    else if(sh.kind === "movie") this.renderMovie(sh);
    else if(sh.kind === "tailor") this.renderTailor(sh);
    else if(sh.kind === "post") this.renderPost(sh);
    else if(sh.kind === "bank") this.renderBank(sh);
    else if(sh.kind === "housing") this.renderHousing(sh);
    else if(sh.kind === "factory") this.renderFactory(sh);
    else if(sh.kind === "collector") this.renderCollector(sh);
    else if(sh.kind === "junk") this.renderJunk(sh);
    else if(sh.kind === "black") this.renderBlack(sh);
    else if(sh.kind === "lottery") this.renderLottery(sh);
    else if(sh.kind === "express") this.renderExpress(sh);
    else if(sh.kind === "street") this.renderRejie(sh);
    else this.el("main").innerHTML = `<div class="empty">（待开放）</div>`;
  },

  /* ---------------- 家：睡觉/存取/穿越/票据管理 ---------------- */
  renderHome(sh){
    const is80 = S.world==="80";
    const houseName = is80 ? (HOUSES[S.housing]||{}).name : "郊区老家";
    const cap = homeCap();
    const store = S.storage[S.world].map(it=>{
      const d = ITEMS[it.id];
      return `<div class="row"><span class="nm">${itemNameHtml(it.id)} <small>×${it.qty}</small></span>
        <input class="qty" id="htake-${it.id}" type="number" min="1" max="${it.qty}" value="1" style="width:54px">
        <button class="btn sm" data-take="${it.id}">取出</button></div>`;
    }).join("") || `<div class="empty">仓库空 (${storageWeight(S.world)}/${cap})</div>`;

    const pack = S.backpack.map(it=>{
      const d = ITEMS[it.id];
      return `<div class="row"><span class="nm">${itemNameHtml(it.id)} <small>×${it.qty}</small></span>
        <input class="qty" id="hstore-${it.id}" type="number" min="1" max="${it.qty}" value="1" style="width:54px">
        <button class="btn sm" data-store="${it.id}">存入</button></div>`;
    }).join("") || `<div class="empty">背包空</div>`;

    /* 穿越选品（选择持久化在 S.carrySel，防止刷新后被清空） */
    const carrySel = S.backpack.map(it=>{
      const d = ITEMS[it.id];
      return `<div class="row"><span class="nm">${itemNameHtml(it.id)} <small>×${it.qty}</small></span>
        <input class="qty" id="carry-${it.id}" type="number" min="0" max="${it.qty}" value="${Math.min(S.carrySel[it.id]||0, it.qty)}" oninput="U.setCarry('${it.id}', this.value)">
        <span class="lbl">带</span></div>`;
    }).join("") || `<div class="empty">背包空，无法携带</div>`;

    /* 80年代：存钱罐/钱包 = 两个容器（在家/随身），像背包和仓库一样存取 */
    let tickets = "";
    if(is80){
      const tRow = (container, act) => {
        const rows = [];
        for(const k of Object.keys(TICKETS)){
          for(const g of tGroups(container, k)){
            rows.push(`<div class="row"><span class="nm">${TICK_NAME[k]} <small>${tPieceText(k,g.v)} ×${g.n}</small></span>
              <input class="qty" id="tm-${container}-${k}-${g.v}" type="number" min="1" max="${g.n}" value="1" style="width:46px">
              <button class="btn sm" data-tmove2="${container}|${k}|${g.v}">${act}</button></div>`);
          }
        }
        return rows.join("") || `<div class="empty">空</div>`;
      };
      tickets = `<div class="grid2">
        <div class="panel"><h3>🏺 存钱罐（家） ${tTotalCount("pig")}/${tCap("pig")}张</h3><div class="pd">${tRow("pig","取出")}</div></div>
        <div class="panel"><h3>👛 钱包（随身） ${tTotalCount("wallet")}/${tCap("wallet")}张</h3><div class="pd">${tRow("wallet","存入")}</div></div>
      </div>
      <div class="note">钱包=随身携带，买东西、吃饭只能花钱包里的现金/票据；存钱罐放在家里。出门前记得带上够用的钱票。</div>`;
    }

    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.icon} ${houseName}</h2><div class="pd">
        <div class="btnrow">
          <button class="btn prim" data-sleep="1">💤 睡觉（结算→下一天）</button>
          <button class="btn warn" data-rent="1" ${is80?"":"hidden"}>缴纳房租</button>
        </div>
        <div class="note">今天已吃饭：${S.ateToday?"✓":"✗"}${S.ateToday?"":"（不吃东西不能睡）"}${S.mal?" · ⚠营养不良":""}</div>
      </div></div>
      <div class="grid2">
        <div class="panel"><h3>仓库 (${storageWeight(S.world)}/${cap})</h3><div class="pd">${store}</div></div>
        <div class="panel"><h3>背包</h3><div class="pd">${pack}</div></div>
      </div>
      ${tickets}
      ${!is80 ? `<div class="panel"><h3>🌐 网络系统</h3><div class="pd">
          <div class="btnrow"><button class="btn prim" data-netopen="1">网购 / 网店（阿狸bb）</button></div>
          <div class="note">网购下单→3天到快递站领取；网店上架→去快递站发货。${S.net.bought.filter(p=>nowDay()<p.arriveDay).length ? `🕐 ${S.net.bought.filter(p=>nowDay()<p.arriveDay).length} 笔网购在途中。` : ""}</div>
        </div></div>` : ""}
      <div class="panel"><h3>🕰 穿越时空之门（携带≤${travelCap()}）</h3><div class="pd">
        ${carrySel}
        <div class="btnrow">
          <button class="btn ghost" data-carryall="1">一键携带全部</button>
          <button class="btn danger" data-cross="1">穿越到 ${S.world==="26"?"1980年·城南四合院":"2026年·郊区老家"}</button>
        </div>
        <div class="note">${S.crossCd===null?"尚未设定穿越冷却":`穿越冷却：${S.crossCd}天，${(cdRemain()>0)?`还需 ${cdRemain()} 天`:"可以穿越"}`}</div>
        <div class="note">未选中的物品会自动存入本世界仓库；随身票据太多容易被坏人盯上。</div>
      </div></div>`;
  },

  /* 网络系统（现代老家）：阿狸bb网购 + 网店 */
  netPanel(){
    netRefreshGoods(false);
    const net = S.net;
    const buyRows = (net.goods||[]).map(g=>{
      const it = ITEMS[g.item];
      return `<div class="row net-row"><span class="nm">${itemNameHtml(g.item)} <small>${g.shop} · ${it.unit}</small></span>
        <span class="price">${fmtMoney(it.modern)}元</span>
        <input class="qty" id="nbq-${g.item}" type="number" min="1" max="${g.qty}" value="1">
        <button class="btn" data-nbuy="${g.item}" ${g.qty>0?"":"disabled"}>网购</button></div>`;
    }).join("") || `<div class="empty">平台暂时没货，明天再来或花1万手动刷新。</div>`;
    let shopHtml = "";
    if(net.shopOpen){
      const listed = net.listings.map(l=>`
         <div class="row net-row"><span class="nm">${itemNameHtml(l.item)} ×${l.qty} <small>${fmtMoney(l.price)}元 ${l.postpaid?"包邮":"不包邮"}</small></span>
          <button class="btn sm" data-nunlist="${l.lid}">下架</button></div>`).join("") || `<div class="empty">暂无在售</div>`;
       const listable = S.backpack.map(it=>`
        <div class="row net-row"><span class="nm">${itemNameHtml(it.id)} <small>×${it.qty} · 市场价约 ${fmtMoney(modernValue(it.id))}</small></span>
          <input class="qty" id="nlq-${it.id}" type="number" min="1" max="${it.qty}" value="1" style="width:50px">
          <input class="qty" id="nlp-${it.id}" type="number" min="0.01" step="0.01" value="${fmtMoney(modernValue(it.id))}" style="width:70px">
          <label class="ck"><input type="checkbox" id="nlpst-${it.id}">包邮</label>
          <button class="btn sm" data-nlist="${it.id}">上架</button></div>`).join("") || `<div class="empty">背包空</div>`;
      const orders = net.orders.filter(o=>o.state!=="done").map(o=>`
        <div class="row net-row"><span class="nm">${itemNameHtml(o.item)} ×${o.qty} <small>${fmtMoney(o.price)}元 ${o.postpaid?"包邮":"不包邮"} · ${o.state==="new"?"待发货":o.state==="ship"?"运输中("+(nowDay()-o.arriveDay+NET.arriveDays)+"/"+NET.arriveDays+")":"已收货"}</small></span>
          <button class="btn sm" data-nship="${o.oid}" ${o.state==="new"?"":"disabled"}>发货</button></div>`).join("") || `<div class="empty">暂无新订单</div>`;
      shopHtml = `
        <div class="panel"><h3>🛒 我的网店（${net.shopLevel}级 · 上架 ${net.listings.length}/${3+net.shopLevel}）</h3><div class="pd">
          <div class="note">总销量 ${net.soldAll} · 月销量 ${net.soldMonth} · 总收益 ¥${fmtMoney(net.earnAll)} · 月收益 ¥${fmtMoney(net.earnMonth)}</div>
          <div class="note">在售：</div>${listed}
          <div class="note">订单：</div>${orders}
          <div class="note">上架（从背包选，标价、数量、是否包邮，全国邮费5元）：</div>${listable}
        </div></div>`;
    } else {
      shopHtml = `<div class="panel"><h3>🛒 网店</h3><div class="pd"><button class="btn prim" data-nopen="1">开启网店</button><div class="note">开启后可上架商品卖给全国买家，靠发货量提升店铺等级。</div></div></div>`;
    }
    const bought = net.bought.filter(p=>nowDay()<p.arriveDay);
    return `<div class="panel"><h3>🌐 网络系统（阿狸bb）</h3><div class="pd">
      <div class="note">网购下单后约 ${NET.arriveDays} 天到快递站；上架商品在快递站发货。</div>
      <div class="btnrow"><button class="btn ghost" data-nref="1">手动刷新货源（1万）</button>
        <button class="btn ghost" data-ngotoexpress="1">去快递站领货/发货</button></div>
      ${bought.length?`<div class="note">🕐 有 ${bought.length} 笔网购在途中（${NET.arriveDays} 天内到）。</div>`:""}
    </div></div>
    <div class="panel"><h3>阿狸bb 网购</h3><div class="pd">${buyRows}</div></div>
    ${shopHtml}`;
  },

  /* 网络系统弹窗（网购 + 网店） */
  showNet(){
    this._netOpen = true;
    this.el("modal").innerHTML = `
      <div class="modal codex" style="width:min(820px,94vw);max-height:88vh">
        <div class="codex-scroll">${this.netPanel()}</div>
        <div class="btnrow" style="justify-content:flex-end;padding:10px 2px 0"><button class="btn prim" data-close="1">关闭</button></div>
      </div>`;
    this.el("modal").classList.add("show");
  },

  setCarry(id, v){
    const it = S.backpack.find(x=>x.id===id);
    if(!it) return;
    let n = Math.max(0, Math.floor(Number(v)||0));
    n = Math.min(n, it.qty);
    if(n > 0) S.carrySel[id] = n; else delete S.carrySel[id];
  },

  /* ---------------- 普通商店 ---------------- */
  renderMarket(sh){
    const npc = sh.npc;
    const aff = affOf(npc);
    const disc = sh.discountAt!==undefined && aff>=sh.discountAt;
    const hidden = isHiddenOpen(sh.id);
    const goods = sh.stock.map(s=>{
      const it = ITEMS[s.item];
      if(!it) return "";
      const p = stockPrice(sh.id, s);
      const st = shopStockOf(sh.id, s.item);
      return `<div class="row"><span class="nm">${itemNameHtml(s.item)}<small>${it.cat} · 库存${st}</small></span>
        <span class="price">${fmtMoney(p.price)}元/${it.unit}</span>
        <input class="qty" id="qty-${s.item}" type="number" min="1" value="1">
        <button class="btn" data-buy="${s.item}">买</button></div>`;
    }).join("");
    const hid = sh.hiddenStock && hidden ? sh.hiddenStock.map(s=>{
      const it = ITEMS[s.item];
      const p = stockPrice(sh.id, s);
      const st = shopStockOf(sh.id, s.item);
      return `<div class="row"><span class="nm">${itemNameHtml(s.item)}<small>${it.cat} · 库存${st}</small></span>
        <span class="price">${fmtMoney(p.price)}元/${it.unit}</span>
        <input class="qty" id="qty-${s.item}" type="number" min="1" value="1">
        <button class="btn" data-buy="${s.item}">买</button></div>`;
    }).join("") : "";

    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">店主 ${npc}</span></h2><div class="pd">
        ${disc?`<div class="note good">熟客价：九折</div>`:""}
      </div></div>
      <div class="panel"><h3>货架</h3><div class="pd">${goods}</div></div>
      ${hid?`<div class="panel"><h3>柜台里</h3><div class="pd">${hid}</div></div>`:""}` +
      this.giftBlock(sh.npc) + this.questBlock(sh.npc);
  },

  /* ---------------- 饭店（外卖式点餐） ---------------- */
  renderMeal(sh){
    const hidden = isHiddenOpen(sh.id);
    const week = Math.floor(S.day/7);
    this.cart = this.cart || {};
    const row = (s, extra) => `
      <div class="dish">
        <div class="dish-name">${ITEMS[s.item].name} <small>${ITEMS[s.item].unit}${extra||""}</small></div>
        <div class="dish-price">${fmtMoney(s.price)}元${s.ticket?"<em>粮票</em>":""}</div>
        <div class="dish-qty">
          <button class="btn sm" data-step="-1" data-item="${s.item}">−</button>
          <span id="dishc-${s.item}">${this.cart[s.item]||0}</span>
          <button class="btn sm" data-step="1" data-item="${s.item}">+</button>
        </div>
      </div>`;
    const staples = sh.stock.filter(s=>s.staple).map(s=>row(s,"·主食")).join("");
    const dishes = sh.stock.filter(s=>!s.staple).map(s=>row(s)).join("");
    const hidDish = hidden && sh.hiddenStock ? sh.hiddenStock.map(s=>row(s)).join("") : "";
    const guests = ["", ...Object.keys(NPCS).filter(k=>NPCS[k].world==="80")].map(g=>{
      const used = S.inviteWeek[g]===week;
      return `<option value="${g}" ${used?"disabled":""}>${g||"独自吃饭"}${used?"（本周已约）":""}</option>`;
    }).join("");
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        <div class="note">堂食不占背包；一顿约1小时；必须点主食（粮票）。</div>
        <div class="row"><span class="nm">邀请谁一起吃</span><select id="mealGuest">${guests}</select></div>
      </div></div>
      <div class="panel"><h3>主食</h3><div class="pd">${staples}</div></div>
      <div class="panel"><h3>配菜</h3><div class="pd">${dishes}${hidDish}</div></div>
      <div class="panel"><h3>饮品</h3><div class="pd"><div class="empty">（暂时没有供应）</div></div></div>
      <div class="panel"><h3>下单</h3><div class="pd">
        <div class="row"><span class="nm">合计</span><b id="mealTotal">¥0.00</b></div>
        <div class="row"><span class="nm">需粮票</span><b id="mealGrain">0 两</b></div>
        <button class="btn prim" data-meal="1">下单吃饭（1小时）</button>
      </div></div>` +
      this.giftBlock(sh.npc);
    this.updMealTotal();
  },

  updMealTotal(){
    const sh = SHOPS["fandian"];
    let total = 0, grain = 0;
    for(const [item, q] of Object.entries(this.cart||{})){
      if(q<=0) continue;
      const sDef = sh.stock.find(x=>x.item===item);
      const sHid = isHiddenOpen("fandian") && sh.hiddenStock ? sh.hiddenStock.find(x=>x.item===item) : null;
      const s = sDef || sHid;
      if(!s) continue;
      total += s.price*q;
      if(s.staple && s.ticket) grain += (ITEMS[item].tickNeed||1)*q;
      const el = this.el("dishc-"+item); if(el) el.textContent = q;
    }
    const t = this.el("mealTotal"); if(t) t.textContent = "¥"+fmtMoney(total);
    const g = this.el("mealGrain"); if(g) g.textContent = grain+" 两";
  },

  cartStep(item, d){
    this.cart = this.cart || {};
    const sh = SHOPS["fandian"];
    const stock = shopStockOf("fandian", item);
    const cur = this.cart[item] || 0;
    let nv = cur + d;
    if(nv < 0) nv = 0;
    if(nv > stock) nv = stock;
    this.cart[item] = nv;
    if(nv === 0) delete this.cart[item];
    this.updMealTotal();
  },

  renderMovie(sh){
    const list = sh.stock.map(s=>{
      const it = ITEMS[s.item];
      return `<div class="row"><span class="nm">${s.name}<small>${s.tags.join("/")} · 心情+${s.mood}</small></span>
        <span class="price">${fmtMoney(s.price)}元</span><button class="btn" data-movie="${s.item}">买票</button></div>`;
    }).join("");
    const d80t = today80(); const mkt = d80t.y+"-"+d80t.m;
    const guests = ["", ...Object.keys(NPCS).filter(k=>NPCS[k].world==="80")].map(g=>{
      const seen = S.movieMonth[g]===mkt;
      const label = g || "独自";
      return `<option value="${g}" ${seen?"disabled":""}>${label}${seen?"（本月已看）":""}</option>`;
    }).join("");
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">张一冇好感 ${affOf("张一冇")}</span></h2><div class="pd">
        <div class="note">每场2小时；可邀请NPC同看（已婚女性不看爱情片）。</div>
        <div class="row"><span class="nm">邀请谁</span><select id="movieGuest">${guests}</select></div>
      </div></div>
      <div class="panel"><h3>今日排片</h3><div class="pd">${list}</div></div>` +
      this.giftBlock(sh.npc);
  },

  renderTailor(sh){
    const opts = sh.clothes.map(c=>{
      const m = ITEMS[c.material];
      return `<option value="${c.item}">${c.name}（需${m.name}，手工费${c.fee}元）</option>`;
    }).join("");
    const wornHtml = S.worn ? `<div class="row"><span class="nm">现穿：${ITEMS[S.worn].name}${S.wornBroken?"（已破旧，魅力失效）":""}</span>
      <button class="btn sm" data-takeoff="1">脱下</button>
      <button class="btn sm" data-donate="1">捐给山区（爱心+1）</button></div>` : `<div class="empty">你现在没穿衣服</div>`;
    const garments = S.backpack.filter(it=>ITEMS[it.id].charm !== undefined);
    const myHtml = garments.length ? garments.map(it=>{
      const d = ITEMS[it.id];
      const wearing = S.worn === it.id;
      const broken = wearing && S.wornBroken;
      return `<div class="row"><span class="nm">${d.name} <small>×${it.qty}${wearing?" · "+(broken?"已破损":"已穿上一件"):" · 未穿"}</small></span>
        <button class="btn sm" data-wear="${it.id}" ${wearing?"disabled":""}>穿上</button>
        <button class="btn sm" data-takeoff="1" ${wearing?"":"disabled"}>脱下</button>
        <button class="btn sm" data-discard="${it.id}">丢弃</button></div>`;
    }).join("") : `<div class="empty">背包里还没有做好的衣服，先去供销社买布料再来做。</div>`;
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        <div class="row"><span class="nm">款式</span><select id="tailorType" onchange="U.updTailorNeed()">${opts}</select></div>
        <div class="row"><span class="nm">身高(分米)</span><input class="qty" id="tailorH" type="number" value="18" min="10" max="25" oninput="U.updTailorNeed()"></div>
        <div class="row"><span class="nm">需布料</span><b id="tailorNeed"></b></div>
        <div class="note">布料 1 块 = 0.5 米；1.8米做一身约需 4 块。做好的衣服放进背包，可随时穿上/脱下。</div>
        <button class="btn prim" data-tailor="1">做衣服（1小时）</button>
      </div></div>
      <div class="panel"><h3>当前穿着</h3><div class="pd">${wornHtml}</div></div>
      <div class="panel"><h3>我的衣服</h3><div class="pd">${myHtml}</div></div>` +
      this.giftBlock(sh.npc) + this.questBlock(sh.npc);
    this.updTailorNeed();
  },

  updTailorNeed(){
    const sel = this.el("tailorType");
    const h = this.el("tailorH");
    const out = this.el("tailorNeed");
    if(!sel || !out) return;
    const c = SHOPS["caifeng"].clothes.find(x=>x.item===sel.value);
    const hdm = Math.max(10, Math.floor(Number(h&&h.value)||18));
    const need = clothNeed(hdm);
    if(c){ out.textContent = need+" 块"+(ITEMS[c.material].name)+"（"+(need*0.5).toFixed(1)+"米） · 手工费 "+c.fee+" 元"; }
  },

  renderPost(sh){
    const stamps = sh.stock.map(s=>{
      const it = ITEMS[s.item];
      const st = shopStockOf(sh.id,s.item);
      return `<div class="row"><span class="nm">${it.name}<small>${it.cat} · 库存${st}</small></span>
        <span class="price">${fmtMoney(s.price)}元/${it.unit}</span>
        <input class="qty" id="qty-${s.item}" type="number" min="1" value="1">
        <button class="btn" data-buy="${s.item}">买</button></div>`;
    }).join("");
    const hidden = isHiddenOpen(sh.id) ? sh.hiddenStock.map(s=>{
      const it = ITEMS[s.item];
      return `<div class="row"><span class="nm">${it.name}<small>${it.cat} · 库存1</small></span>
        <span class="price">${fmtMoney(s.price)}元/${it.unit}</span><button class="btn" data-buy="${s.item}">买</button></div>`;
    }).join("") : "";
    const letterSt = S.letters.sent ? (S.letters.received ? "回信已到，可领取" : "信件在路上") : "可以寄信";
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        <div class="btnrow">
          <button class="btn" data-letter="1">📮 寄信给大姑</button>
          <button class="btn" data-mail="1">收信（${letterSt}）</button>
        </div>
      </div></div>
      <div class="panel"><h3>邮票</h3><div class="pd">${stamps}</div></div>
      ${hidden?`<div class="panel"><h3>柜台里</h3><div class="pd">${hidden}</div></div>`:""}` +
      this.giftBlock(sh.npc);
  },

  renderBank(sh){
    const books = S.bank.map((b,i)=>{
      return `<div class="row"><span class="nm">${b.name}<small>余额 ${fmtFen(b.amt)} · 共${b.records.length}笔</small></span>
        <button class="btn" data-bdep="${i}">存钱</button>
        <button class="btn warn" data-bwd="${i}">取钱</button>
        <button class="btn ghost" data-brec="${i}">明细</button></div>`;
    }).join("") || `<div class="empty">还没有存折，先在柜台免费办一本</div>`;
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">钱所长好感 ${affOf("钱所长")}</span></h2><div class="pd">
        <div class="row"><span class="nm">办理存折（免费）</span>
          <select id="bkType"><option value="live">活期存折</option><option value="fixed">定期存折</option></select>
          <button class="btn prim" data-bopen="1">办理</button></div>
        <div class="note">存钱把钱包里的纸币存进银行；取钱可自选面额；每笔交易都记在存折上（含时间），也可在钱包里随时查看。</div>
      </div></div>
      <div class="panel"><h3>我的存折</h3><div class="pd">${books}</div></div>` +
      this.giftBlock(sh.npc);
  },

  renderHousing(sh){
    const h = HOUSES[S.housing];
    const list = Object.entries(HOUSES).map(([k,v])=>{
      const lock = k!==S.housing && (k==="brick"||k==="building") ? "（未开放）" : "";
      return `<div class="row"><span class="nm">${v.name}<small>月租${v.rent}元 · 容量${v.cap} · 条件：${v.cond}</small></span>
        ${k===S.housing?`<span class="lbl">当前住所</span>`:`<button class="btn" data-house="${k}" ${lock?"disabled":""}>搬入</button>`}</div>`;
    }).join("");
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">李婶好感 ${affOf("李婶")}</span></h2><div class="pd">
        <div class="row"><span class="nm">现住房：${h.name}（${S.rentOwed?"⚠欠租":"租金已缴至本月"}）</span>
        <button class="btn warn" data-rentpay="1">缴租</button></div>
        <div class="note">每月1号收租，最迟10号结清，否则无法安睡。</div>
      </div></div>
      <div class="panel"><h3>住房选择</h3><div class="pd">${list}</div></div>
      <div class="panel"><h3>介绍信（预留）</h3><div class="pd"><div class="empty">出城地图未开放，介绍信功能暂空。</div></div></div>` +
      this.giftBlock(sh.npc);
  },

  renderFactory(sh){
    const open = factoryIntro();
    let inner = "";
    if(!open){
      inner = `<div class="empty">门卫拦住了你：「闲杂人等不得入内！」</div>`;
    } else {
      const goods = sh.stock.map(s=>{
        const it = ITEMS[s.item];
        const p = stockPrice(sh.id,s);
        const st = shopStockOf(sh.id,s.item);
        return `<div class="row"><span class="nm">${it.name}<small>${it.cat} · 库存${st}</small></span>
          <span class="price">${fmtMoney(p.price)}元/${it.unit}</span>
          <input class="qty" id="qty-${s.item}" type="number" min="1" value="1">
          <button class="btn" data-buy="${s.item}">买</button></div>`;
      }).join("");
      inner = `<div class="panel"><h3>厂内商品</h3><div class="pd">${goods}</div></div>`;
    }
    this.el("main").innerHTML = `<div class="panel"><h2>${sh.name}</h2><div class="pd">${inner}</div></div>` +
      this.giftBlock(sh.npc);
  },

  renderCollector(sh){
    const sellable = S.backpack.filter(it=>ITEMS[it.id].sell!==undefined).map(it=>{
      const d = ITEMS[it.id];
      const p = dayPrice(d);
      const tier = apprTier(p);
      const isZhen = d.zhenOf !== undefined;
      let row;
      if(isZhen){
        row = `<span class="price">真品 · 今日 ${fmtMoney(p)}元/${d.unit}</span>
          <input class="qty" id="sell-${it.id}" type="number" min="1" max="${it.qty}" value="1">
          <button class="btn" data-sell="${it.id}">卖（原价）</button>`;
      } else if(!tier){
        row = `<span class="price">免鉴定 · 今日 ${fmtMoney(p)}元/${d.unit}</span>
          <input class="qty" id="sell-${it.id}" type="number" min="1" max="${it.qty}" value="1">
          <button class="btn" data-sell="${it.id}">卖</button>`;
      } else {
        row = `<span class="price">今日 ${fmtMoney(p)}元/${d.unit}<small>鉴定费 ${fmtMoney(tier.fee)}元/件 · 成功率 ${apprSuccess(tier)}%</small></span>
          <input class="qty" id="appr-${it.id}" type="number" min="1" max="${it.qty}" value="1">
          <button class="btn" data-appr="${it.id}">鉴定</button>`;
      }
      return `<div class="row"><span class="nm">${d.name}<small>×${it.qty}</small></span>${row}</div>`;
    }).join("") || `<div class="empty">没有可出售的收藏品</div>`;
    const fakeN = fakeCount();
    const zhenN = zhenCount();
    const plead = S.blacklisted ? `<button class="btn danger" data-plead="1">（找人从中说情）</button>` : "";
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        ${S.blacklisted?`<div class="note bad">这里不欢迎你。${plead}</div>`:""}
        <div class="note">500元以下免鉴定；500-1万鉴定费500元/件（成功率=好感-5%）；1万以上鉴定费1万元/件（成功率=好感-10%）。先「鉴定」，真品才可原价卖出；假货只能去虾仁 1 元卖。</div>
        ${zhenN?`<div class="note good">背包里有 ${zhenN} 件真品，可原价卖给王富贵，或 10% 卖给虾仁。</div>`:""}
        ${fakeN?`<div class="note bad">背包里有 ${fakeN} 件假货，只能去废品回收站卖 1 元/件。</div>`:""}
      </div></div>
      <div class="panel"><h3>收购</h3><div class="pd">${sellable}</div></div>` +
      this.giftBlock(sh.npc) + this.questBlock(sh.npc);
  },

  renderJunk(sh){
    const goods = sh.stock.map(s=>{
      const it = ITEMS[s.item];
      const p = stockPrice(sh.id,s);
      const st = shopStockOf(sh.id,s.item);
      return `<div class="row"><span class="nm">${it.name}<small>${it.cat} · 库存${st}</small></span>
        <span class="price">${fmtMoney(p.price)}元/${it.unit}</span>
        <button class="btn" data-buy="${s.item}" ${st>0?"":"disabled"}>买</button></div>`;
    }).join("");
    const sell = S.backpack.filter(it=>ITEMS[it.id].sell!==undefined || it.id.indexOf("fake_")===0).map(it=>{
      const d = ITEMS[it.id];
      let p, lbl;
      if(d.junkPrice !== undefined){ p = d.junkPrice; lbl = "假货 · 1元"; }
      else if(d.zhenOf !== undefined){ p = Math.round(dayPrice(d)*0.1*100)/100; lbl = "真品 · 10%价"; }
      else if(apprTier(dayPrice(d))){ p = 1; lbl = "未鉴定 · 按假货 1元"; }
      else { p = Math.round(dayPrice(d)*0.1*100)/100; lbl = "真品 · 10%价"; }
      return `<div class="row"><span class="nm">${d.name} <small>×${it.qty}（${lbl}）</small></span>
        <span class="price">${fmtMoney(p)}元/${d.unit}</span>
        <input class="qty" id="sq-${it.id}" type="number" min="1" max="${it.qty}" value="1">
        <button class="btn" data-sell="${it.id}">卖</button></div>`;
    }).join("") || `<div class="empty">无</div>`;
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd"><div class="note">虾仁只收真品（收藏品按王富贵价 10% 收）；未鉴定的高价值物品和假货一律按 1 元收。</div></div></div>
      <div class="panel"><h3>神奇货物</h3><div class="pd">${goods}</div></div>
      <div class="panel"><h3>收购（真品10% / 未鉴定及假货1元）</h3><div class="pd">${sell}</div></div>` +
      this.giftBlock(sh.npc) + this.questBlock(sh.npc);
  },

  renderBlack(sh){
    if(!hsOpen()){
      this.el("main").innerHTML = `
        <div class="panel"><h2>${sh.name}</h2><div class="pd">
          <div class="note">黑市只在夜里开门（18点～次日6点）。现在是 ${hsNow()}。</div>
          <div class="note">去做点别的事、或者逛到天黑再来吧。</div>
        </div></div>`;
      return;
    }
    if(S.hs.entry === null){ this.renderHsEnter(sh); return; }

    const entryTxt = S.hs.entry==="sneak" ? "溜进去（无望风）"
      : S.hs.entry==="ticket2" ? "买门票2角（可买卖·有望风）" : "买门票1角（只买·有望风）";
    let body = "";
    let sellStrong = "";
    if(S.hs.cur === null || S.hs.cur === undefined){
      sellStrong = this.renderHsSellStrong();
      body = this.renderHsGrid();
    } else if(S.hs.cur === -1){
      body = this.renderHsMine();
    } else {
      body = this.renderHsStall(S.hs.cur);
    }
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        <div class="note">${hsNow()} · ${entryTxt}</div>
        ${S.hs.cur!==null && S.hs.cur!==undefined ? `<div class="btnrow"><button class="btn ghost" data-hsback="1">← 返回摊位</button></div>` : ""}
      </div></div>` + sellStrong + body;
  },

  renderHsEnter(sh){
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name}</h2><div class="pd">
        <div class="note">黑市夜里开门。现在 ${hsNow()}。选一种方式进去：</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn prim" data-hsenter="ticket2">缴门票 2 角 —— 可买卖，有专人望风（检查时 70% 提前示警）</button>
          <button class="btn prim" data-hsenter="ticket1">缴门票 1 角 —— 只买不卖，有专人望风</button>
          <button class="btn warn" data-hsenter="sneak">偷偷溜进去 —— 免费，买卖随意，但没人望风</button>
        </div>
        <div class="note">门票从随身的 80 年代现金里扣。</div>
      </div></div>`;
  },

  renderHsSellStrong(){
    if(hsBuyOnly()) return "";
    const sell = S.backpack.filter(it=>ITEMS[it.id].strong!==undefined).map(it=>{
      const d = ITEMS[it.id];
      return `<div class="row"><span class="nm">${d.name}<small>×${it.qty}（强子收 ${d.strong.price}-${d.strong.priceHi} 元）</small></span>
        <input class="qty" id="sq-${it.id}" type="number" min="1" max="${it.qty}" value="1">
        <button class="btn" data-sell="${it.id}">卖</button></div>`;
    }).join("");
    if(!sell) return "";
    return `<div class="panel"><h3>卖货给强子（掌柜收货）</h3><div class="pd">${sell}</div></div>`;
  },

  hsZoneHint(z){ const p = ((z.mult-1)*100).toFixed(0); return "买卖价"+(z.mult>=1?"+":"")+p+"%"; },

  renderHsGrid(){
    let html = "";
    for(const z of HEISHI.zones){
      const stalls = S.hs.stalls.filter(s=>s.zone===z.id);
      const cards = stalls.map(st=>{
        const s = `text-align:center;padding:6px 4px;font-size:12px;white-space:normal`;
        if(st.npc){
          const t = st.npc.type==="ticket"?"票据贩子":st.npc.type==="goods"?"商品贩子":"交换商人";
          return `<button class="loc" data-hsstall="${st.i}" style="${s}">${st.npc.name}<br><small>${t}</small></button>`;
        }
        if(S.hs.mine.slot===st.i) return `<button class="loc" data-hsmine="1" style="${s};background:#fef3c7">我的摊位</button>`;
        if(hsBuyOnly()) return `<button class="loc" disabled style="${s};opacity:.35">空摊</button>`;
        return `<button class="loc" data-hsmine="1" data-slot="${st.i}" style="${s}">空摊<br><small>摆摊</small></button>`;
      }).join("");
      html += `<div class="panel"><h3>${z.name}（${this.hsZoneHint(z)}）</h3><div class="pd"><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">${cards}</div></div></div>`;
    }
    html += `<div class="note" style="padding:0 12px">${hsBuyOnly() ? "你买的「只买」门票，不能摆摊。" : "点「空摊·摆摊」占一个空摊卖货；20个摊每天刷新路人摊贩。"}</div>`;
    return html;
  },

  renderHsStall(slot){
    const st = S.hs.stalls.find(x=>x.i===slot);
    if(!st || !st.npc){ S.hs.cur = null; return ""; }
    const z = hsZoneDef(st.zone);
    const head = `<div class="panel"><h2>${hsStallName(slot)} <span class="lbl">${this.hsZoneHint(z)}</span></h2><div class="pd">
      <div class="note">${st.npc.name} · ${st.npc.type==="ticket"?"票据贩子":st.npc.type==="goods"?"商品贩子":"交换商人"}（进摊已耗时30分钟）</div></div></div>`;
    if(st.npc.type==="ticket"){
      const rows = st.npc.goods.map(g=>{
        const p = Math.round(g.price*z.mult*100)/100;
        return `<div class="row"><span class="nm">${TICK_NAME[g.type]}<small>剩 ${g.qty} · ${fmtMoney(p)}元/${TICK_UNIT[g.type]||"张"}</small></span>
          <input class="qty" id="hsbq-${g.type}" type="number" min="1" max="${g.qty}" value="1">
          <button class="btn" data-hsbuy="${g.type}" ${g.qty>0?"":"disabled"}>买</button></div>`;
      }).join("") || `<div class="empty">卖光了</div>`;
      return head + `<div class="panel"><h3>票据贩子</h3><div class="pd">${rows}</div></div>`;
    }
    if(st.npc.type==="goods"){
      const rows = st.npc.goods.map(g=>{
        const p = Math.round(g.price*z.mult*100)/100;
        return `<div class="row"><span class="nm">${ITEMS[g.item].name}<small>剩 ${g.qty} · ${fmtMoney(p)}元/${ITEMS[g.item].unit}</small></span>
          <input class="qty" id="hsbq-${g.item}" type="number" min="1" max="${g.qty}" value="1">
          <button class="btn" data-hsbuy="${g.item}" ${g.qty>0?"":"disabled"}>买</button></div>`;
      }).join("") || `<div class="empty">卖光了</div>`;
      return head + `<div class="panel"><h3>商品贩子</h3><div class="pd">${rows}</div></div>`;
    }
    const opts = st.npc.goods.filter(g=>g.qty>0).map(g=>
      `<option value="${g.item}">${ITEMS[g.item].name}×${g.qty}（货值 ${fmtMoney(g.value*g.qty)} 元）</option>`).join("");
    const offerOpts = S.backpack.map(it=>
      `<option value="${it.id}">${ITEMS[it.id].name}×${it.qty}（估 ${fmtMoney(itemRefValue(it.id))} 元/件）</option>`).join("");
    return head + `<div class="panel"><h3>交换商人</h3><div class="pd">
      <div class="note">他想出手：<select id="hsxWant" style="max-width:100%">${opts}</select></div>
      <div class="row"><span class="nm">用我的物品换</span><select id="hsxOffer" style="max-width:60%">${offerOpts||'<option value="">（背包装）</option>'}</select></div>
      <div class="row"><span class="nm">数量</span><input class="qty" id="hsxQty" type="number" min="1" value="1"></div>
      <div class="note">你的出价若低于对方货值 80%，会被识破并赶出摊子。</div>
      <button class="btn prim" data-hsex="1" ${opts?"":"disabled"}>交换</button>
    </div></div>`;
  },

  renderHsMine(){
    const m = S.hs.mine;
    if(m.slot < 0){
      const empties = S.hs.stalls.filter(s=>!s.npc).map(s=>
        `<button class="loc" data-hsmine="1" data-slot="${s.i}" style="text-align:center;padding:6px 4px;font-size:12px">${hsStallName(s.i)}</button>`).join("");
      return `<div class="panel"><h3>摆摊</h3><div class="pd">
        ${hsBuyOnly()?'<div class="note">你买的「只买」门票，不能摆摊。</div>':""}
        <div class="note">选一个空摊位开始摆摊：</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">${empties||'<div class="empty">今天没有空摊子了</div>'}</div>
      </div></div>`;
    }
    const hint = "买卖价"+(hsZoneDef(hsZone(m.slot)).mult>=1?"+":"")+((hsZoneDef(hsZone(m.slot)).mult-1)*100).toFixed(0)+"%";
    const listed = m.items.map((it,i)=>
      `<div class="row"><span class="nm">${ITEMS[it.id].name} ×${it.qty} <small>标价 ${fmtMoney(it.price)} 元/件</small></span>
        <button class="btn sm" data-hsunlist="${i}">下架</button></div>`).join("") || `<div class="empty">还没上货</div>`;
    const listable = S.backpack.map(it=>
      `<div class="row"><span class="nm">${ITEMS[it.id].name} <small>×${it.qty}</small></span>
        <input class="qty" id="hslq-${it.id}" type="number" min="1" max="${it.qty}" value="1" style="width:52px">
        <input class="qty" id="hslp-${it.id}" type="number" min="0.01" step="0.01" value="${fmtMoney(Math.max(0.01, itemRefValue(it.id)))}" style="width:70px">
        <button class="btn sm" data-hslist="${it.id}">上架</button></div>`).join("") || `<div class="empty">背包空了</div>`;
    return `<div class="panel"><h2>我的摊位 · ${hsStallName(m.slot)} <span class="lbl">${hint}</span></h2><div class="pd"></div></div>
      <div class="panel"><h3>已上架</h3><div class="pd">${listed}</div></div>
      <div class="btnrow" style="padding:0 12px 12px">
        <button class="btn prim" data-hsopen="1" ${m.items.length? "":"disabled"}>开张</button>
        <button class="btn warn" data-hsdown="1">收摊</button>
      </div>
      <div class="panel"><h3>从背包上货</h3><div class="pd">${listable}
        <div class="note">单价已按参考价预填；标得比参考价高太多会没人买（买家按参考价 ±30% 出价）。</div></div></div>`;
  },

  /* ---------------- 福利彩票（刮刮乐） ---------------- */
  renderLottery(sh){
    const list = S.lottery.slice().reverse().map((t, idx)=>{
      const realIdx = S.lottery.length - 1 - idx;
      const cells = [0,1,2].map(k=>{
        if(t.scratch[k]) return `<span class="lotto-num lotto-reveal">${t.num[k]}</span>`;
        return `<button class="lotto-cell" data-lscratch="${realIdx}|${k}" title="点击刮开"></button>`;
      }).join("");
      let result = "";
      if(t.done){
        const type = lottoType(t.num);
        result = t.prize>0
          ? `<span class="lotto-result win">中奖 ${fmtMoney(t.prize)} 元（${type}）</span>`
          : `<span class="lotto-result lose">未中奖（${type}）</span>`;
      }
      return `<div class="lotto-ticket">
        <div class="lotto-id">第${realIdx+1}张 · ${t.cost}元档</div>
        <div class="lotto-cells">${cells}</div>
        ${result}
      </div>`;
    }).join("") || `<div class="empty">还没有买刮刮乐，来一张试试手气吧。</div>`;

    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">店主 ${sh.npc}</span></h2><div class="pd">
        <div class="note">刮刮乐：每张 3 个数字，逐个刮开看号码。豹子20倍 / 顺子5倍 / 对子、幸运号回本 / 其余不中。</div>
        <div class="row"><span class="nm">档位</span>
          <select id="lottoTier" class="qty" style="width:90px"><option value="5">5元</option><option value="10">10元</option><option value="20">20元</option><option value="50">50元</option></select>
        </div>
        <div class="row"><span class="nm">张数</span><input class="qty" id="lottoN" type="number" min="1" value="1">
          <button class="btn prim" data-lotterybuy="1">购买刮刮乐</button></div>
      </div></div>
      <div class="panel"><h3>我的彩票（${S.lottery.length}张）</h3><div class="pd">${list}</div></div>` +
      this.giftBlock(sh.npc);
  },

  /* ---------------- 快递站（马总） ---------------- */
  renderExpress(sh){
    const inWay = S.net.bought.filter(p=>nowDay()<p.arriveDay);
    const ready = S.net.bought.filter(p=>nowDay()>=p.arriveDay);
    const parcelHtml = ready.length
      ? ready.map(p=>`<div class="row"><span class="nm">${itemNameHtml(p.item)} ×${p.qty}</span><button class="btn" data-ncollect="1">领取</button></div>`).join("")
      : `<div class="empty">没有到货的包裹${inWay.length?`（还有 ${inWay.length} 笔在途中）`:""}。</div>`;
    const orders = S.net.orders.filter(o=>o.state==="new").map(o=>
      `<div class="row"><span class="nm">${itemNameHtml(o.item)} ×${o.qty} <small>${fmtMoney(o.price)}元 ${o.postpaid?"包邮(需付5元运费)":"不包邮(买家出运费)"}</small></span>
        <button class="btn" data-nship="${o.oid}">发货</button></div>`).join("") || `<div class="empty">没有待发货的网店订单。</div>`;
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">店主 马总</span></h2><div class="pd">
        <div class="note">网购包裹到了来这里领；网店订单在这里发货（运费一律5元，3天到货）。</div>
      </div></div>
      <div class="panel"><h3>📦 收快递</h3><div class="pd">${parcelHtml}</div></div>
      <div class="panel"><h3>🚚 发快递（网店订单）</h3><div class="pd">${orders}</div></div>` +
      this.giftBlock(sh.npc);
  },

  /* ---------------- 热闹街区（周大哥）· 公开版黑市 ---------------- */
  renderRejie(sh){
    stGen();
    if(S.street.cur !== null && S.street.cur >= 0){
      const st = S.street.stalls.find(x=>x.i===S.street.cur);
      if(!st || !st.npc){ S.street.cur = null; }
      else {
        const goods = st.goods.map(g=>{
          if(g.item){
            return `<div class="row"><span class="nm">${itemNameHtml(g.item)} <small>剩 ${g.qty} · ${fmtMoney(g.price)}元/${ITEMS[g.item].unit}</small></span>
              <input class="qty" id="stbq-${g.item}" type="number" min="1" max="${g.qty}" value="1">
              <button class="btn" data-stbuy="${g.item}" ${g.qty>0?"":"disabled"}>买</button></div>`;
          }
          return `<div class="row"><span class="nm">${TICK_NAME[g.type]} <small>剩 ${g.qty} · ${fmtMoney(g.price)}元/${TICK_UNIT[g.type]||"张"}</small></span>
            <input class="qty" id="stbq-${g.type}" type="number" min="1" max="${g.qty}" value="1">
            <button class="btn" data-stbuy="${g.type}" ${g.qty>0?"":"disabled"}>买</button></div>`;
        }).join("") || `<div class="empty">卖光了</div>`;
        this.el("main").innerHTML = `
          <div class="panel"><h2>${st.npc} 的摊位</h2><div class="pd"><button class="btn ghost" data-stback="1">← 返回街区</button></div></div>
          <div class="panel"><h3>货物</h3><div class="pd">${goods}</div></div>`;
        return;
      }
    }
    const stalls = S.street.stalls.map(st=>{
      if(st.mine) return `<button class="loc" data-stmine="1" style="text-align:center;background:#fef3c7">我的摊位</button>`;
      if(st.npc){
        const goods = st.goods.map(g=>g.item ? ITEMS[g.item].name : TICK_NAME[g.type]).join("、");
        return `<button class="loc" data-ststall="${st.i}" style="text-align:center;font-size:11px">${st.npc}<br><small>${goods}</small></button>`;
      }
      return `<button class="loc" data-strent="${st.i}" style="text-align:center">空摊<br><small>租摊摆卖</small></button>`;
    }).join("");
    let mineHtml = "";
    if(S.street.mine.slot>=0){
      const m = S.street.mine;
      const listed = m.items.map((it,i)=>
        `<div class="row"><span class="nm">${itemNameHtml(it.id)} ×${it.qty} <small>${fmtMoney(it.price)}元</small></span>
          <button class="btn sm" data-stunlist="${i}">下架</button></div>`).join("") || `<div class="empty">还没上货</div>`;
      const listable = S.backpack.map(it=>
        `<div class="row"><span class="nm">${itemNameHtml(it.id)} <small>×${it.qty}</small></span>
          <input class="qty" id="stlq-${it.id}" type="number" min="1" max="${it.qty}" value="1" style="width:50px">
          <input class="qty" id="stlp-${it.id}" type="number" min="0.01" step="0.01" value="${fmtMoney(itemRefValue(it.id))}" style="width:70px">
          <button class="btn sm" data-stlist="${it.id}">上架</button></div>`).join("") || `<div class="empty">背包空</div>`;
      mineHtml = `<div class="panel"><h3>我的摊位（租费1角/天）</h3><div class="pd">
        ${listed}
        <div class="btnrow"><button class="btn prim" data-stopen="1" ${m.items.length?"":"disabled"}>开张</button>
          <button class="btn warn" data-stdown="1">收摊</button></div>
        <div class="note">买家出价约=参考价×50%（合法市场，比黑市低一半）。</div>
        <div class="note">上货：</div>${listable}
      </div></div>`;
    }
    this.el("main").innerHTML = `
      <div class="panel"><h2>${sh.name} <span class="lbl">店主 周大哥</span></h2><div class="pd">
        <div class="note">公开版黑市：没人检查，合法。买东西便宜（老农菜比菜市便宜1分、职工票为黑市价80%）；卖东西要租摊（每天1角）。</div>
      </div></div>
      <div class="panel"><h3>15个摊位</h3><div class="pd"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${stalls}</div></div></div>
      ${mineHtml}` +
      this.giftBlock(sh.npc);
  },

  /* ---------------- 结算弹窗（仅当前世界） ---------------- */
  showSettlement(snap){
    snap = snap || {world:S.world, inc:S.dayStats[S.world].inc, exp:S.dayStats[S.world].exp};
    if(snap.net===undefined) snap.net = snap.inc - snap.exp;
    if(snap.assets===undefined) snap.assets = S.world==="80" ? (moneyWallet()+moneyPig())/100 : S.money["26"];
    this.el("modal").innerHTML = `
      <div class="modal">
        <h2>结算 · ${snap.world==="26"?"2026现代":"1980旧时"}</h2>
        <div class="row"><span class="nm">当日收入</span><b class="good">+¥${fmtMoney(snap.inc)}</b></div>
        <div class="row"><span class="nm">当日花费</span><b class="bad">-¥${fmtMoney(snap.exp)}</b></div>
        <div class="row"><span class="nm">当日净利润</span><b>¥${fmtMoney(snap.net)}</b></div>
        <div class="row"><span class="nm">剩余资产(本世界现金)</span><b>¥${fmtMoney(snap.assets)}</b></div>
        <div class="note">两个世界的钱互相独立，各自结算。</div>
        <button class="btn prim" data-close="1">继续</button>
      </div>`;
    this.el("modal").classList.add("show");
  },

  /* ---------------- 送礼块（只显示对方喜欢的） ---------------- */
  giftBlock(npc){
    if(!npc) return "";
    const np = NPCS[npc];
    const liked = S.backpack.filter(it=>npcLikes(np, it.id));
    if(!liked.length) return "";
    const dt = today80(); const gmk = dt.y+"-"+dt.m;
    const given = S.giftMonth[npc]===gmk;
    const opts = liked.map(it=>`<option value="${it.id}">${ITEMS[it.id].name}×${it.qty}</option>`).join("");
    return `<div class="panel"><h3>送礼给 ${npc}${given?"（本月已收）":""}</h3><div class="pd">
      <div class="row"><select id="giftSel">${opts}</select>
      <button class="btn" data-gift="${npc}" ${given?"disabled":""}>送</button></div>
      <div class="note">只收他喜欢的物品；每月限收1次。</div>
    </div></div>`;
  },

  /* ---------------- 任务块（仅NPC所在地点显示） ---------------- */
  questBlock(npc){
    if(!npc) return "";
    const list = QUESTS.filter(q=>q.npc===npc);
    if(!list.length) return "";
    const active = S.quests.find(x=>questById(x.qid) && questById(x.qid).npc===npc);
    if(active){
      const q = questById(active.qid);
      const pr = questProgress(q);
      const done = pr.have >= pr.need;
      return `<div class="panel"><h3>任务 · ${q.name}</h3><div class="pd">
        <div class="note">${q.desc}</div>
        <div class="note">需要：${questTargetText(q)}（已有 ${pr.have}/${pr.need}） · 奖励：${questRewardText(q)}</div>
        <div class="btnrow"><button class="btn prim" data-qsubmit="${q.id}" ${done?"":"disabled"}>交付任务</button></div>
      </div></div>`;
    }
    const first = list.find(q=>!questDone(q.id));
    if(!first) return "";
    return `<div class="panel"><h3>可接任务</h3><div class="pd">
      <div class="row"><span class="nm">${first.name}<small>${questRewardText(first)}</small></span>
        <button class="btn" data-qtake="${first.id}">接取</button></div>
      <div class="note">${first.desc}</div>
      <div class="note">同一NPC一次只能接1个任务，完成后再来接下一条。</div>
    </div></div>`;
  },

  /* ---------------- 图鉴 ---------------- */
  showCodex(){
    let html = `<h2>图鉴</h2><div class="note">收集过的物品会点亮，未获得的显示为？？？。</div>
      <div class="note">物品等级颜色：<span style="color:#1f2937">■1级普通</span> <span style="color:#16a34a">■2级精品</span> <span style="color:#2563eb">■3级贵重</span> <span style="color:#9333ea">■4级史诗</span> <span style="color:#d97706">■5级传世</span></div>`;
    for(const c of CATS){
      const items = Object.entries(ITEMS).filter(([,it])=>it.cat===c);
      if(!items.length) continue;
      html += `<h3>${c}</h3><div class="codex-grid">` + items.map(([id,it])=>{
        const seen = !!S.seen[id];
        return `<div class="codex-item ${seen?"on":"off"}"><b>${seen?itemNameHtml(id):"？？？"}</b><span>${it.unit}</span>${seen?`<small>${itemDesc(it)}</small>`:""}</div>`;
      }).join("") + `</div>`;
    }
    this.el("modal").innerHTML = `<div class="modal codex"><div class="codex-scroll">${html}</div><button class="btn prim" data-close="1">关闭</button></div>`;
    this.el("modal").classList.add("show");
  },

  /* ---------------- 穿越冷却选择 ---------------- */
  showCdPick(){
    this.el("modal").innerHTML = `
      <div class="modal">
        <h2>选择穿越冷却</h2>
        <div class="note" style="margin-bottom:14px">每次穿越后需冷却才能再次穿越，请选择冷却时长：</div>
        <div class="btnrow" style="flex-direction:column">
          <button class="btn prim" data-cd="1">1 天冷却</button>
          <button class="btn prim" data-cd="7">7 天冷却</button>
          <button class="btn prim" data-cd="30">1 个月冷却（30天）</button>
        </div>
      </div>`;
    this.el("modal").classList.add("show");
  },

  /* ---------------- 选票支付弹窗 ----------------
     {title, costFen, note, onPay(changeFen)} onPay在扣款+找零后调用 */
  openBillPay(o){
    const bills = S.walletT.money;
    if(!bills.length){ this.toast("钱包里没有现金","err"); return false; }
    this._pay = {title:o.title, costFen:o.costFen, onPay:o.onPay, sel:{}};
    this.renderBillPay(o);
    return true;
  },
  renderBillPay(o){
    const bills = S.walletT.money;
    const idx = bills.map((_,i)=>i).sort((a,b)=>bills[b]-bills[a]); // 大额在前
    const rows = idx.map(i=>{
      const on = this._pay.sel[i];
      return `<label class="bp-row"><input type="checkbox" data-bp="${i}" ${on?"checked":""}> <b>${fmtFen(bills[i])}</b></label>`;
    }).join("");
    this.el("modal").innerHTML = `
      <div class="modal pay">
        <h2>${o.title}</h2>
        <div class="note">应付 <b class="bad">${fmtFen(o.costFen)}</b>${o.note?" · "+o.note:""}</div>
        <div class="bp-list">${rows}</div>
        <div class="pay-sum" id="paySum"></div>
        <div class="btnrow">
          <button class="btn" data-pcancel="1">取消</button>
          <button class="btn prim" id="payOk" data-pok="1" disabled>确认支付</button>
        </div>
      </div>`;
    this.el("modal").classList.add("show");
    this.updPaySum();
  },
  updPaySum(){
    let sum = 0;
    for(const i in this._pay.sel) if(this._pay.sel[i]) sum += S.walletT.money[i];
    const need = this._pay.costFen - sum;
    const el = this.el("paySum");
    const ok = this.el("payOk");
    if(sum === 0){ el.innerHTML = "请勾选要支付的现金"; ok.disabled = true; }
    else if(need > 0){ el.innerHTML = `已选 <b class="good">${fmtFen(sum)}</b> · 还缺 <b class="bad">${fmtFen(need)}</b>`; ok.disabled = true; }
    else if(need === 0){ el.innerHTML = `已选 <b class="good">${fmtFen(sum)}</b> · 刚好够，无需找零`; ok.disabled = false; }
    else { el.innerHTML = `已选 <b class="good">${fmtFen(sum)}</b> · 找零 <b class="good">${fmtFen(-need)}</b>`; ok.disabled = false; }
  },
  confirmBillPay(){
    const p = this._pay; if(!p) return;
    const bills = S.walletT.money;
    let sum = 0;
    const idxs = [];
    for(const i in p.sel){
      if(p.sel[i]){ sum += bills[i]; idxs.push(+i); }
    }
    if(sum < p.costFen){ this.toast("现金不够","err"); return; }
    idxs.sort((a,b)=>b-a).forEach(i=>bills.splice(i,1));
    const change = sum - p.costFen;
    if(change > 0) addMoneyFen("wallet", change, true);
    this.el("modal").classList.remove("show");
    this._pay = null;
    p.onPay(change);
    this.render();
  },

  /* ---------------- 储蓄所：存钱（选票） ---------------- */
  openBankDep(idx){
    if(!S.walletT.money.length){ this.toast("钱包里没有现金","err"); return false; }
    this._bdep = { idx, sel:{} };
    const b = S.bank[idx];
    const bills = S.walletT.money;
    const sorted = bills.map((_,i)=>i).sort((a,c)=>bills[c]-bills[a]);
    const rows = sorted.map(i=>{
      const on = this._bdep.sel[i];
      return `<label class="bp-row"><input type="checkbox" data-bp="${i}" ${on?"checked":""}> <b>${fmtFen(bills[i])}</b></label>`;
    }).join("");
    this.el("modal").innerHTML = `
      <div class="modal pay">
        <h2>存钱到「${b.name}」</h2>
        <div class="note">勾选要存入的纸币（可多选）</div>
        <div class="bp-list">${rows}</div>
        <div class="pay-sum" id="bdepSum"></div>
        <div class="btnrow">
          <button class="btn" data-pcancel="1">取消</button>
          <button class="btn prim" data-bdepok="1" disabled>确认存入</button>
        </div>
      </div>`;
    this.el("modal").classList.add("show");
    this.updBankDep();
  },
  updBankDep(){
    let sum = 0;
    for(const i in this._bdep.sel) if(this._bdep.sel[i]) sum += S.walletT.money[i];
    const el = this.el("bdepSum");
    const ok = this.el("modal").querySelector("[data-bdepok]");
    if(sum === 0){ el.innerHTML = "请勾选要存入的纸币"; ok.disabled = true; }
    else { el.innerHTML = `本次存入 <b class="good">${fmtFen(sum)}</b>`; ok.disabled = false; }
  },
  confirmBankDep(){
    const p = this._bdep; if(!p) return;
    const bills = S.walletT.money;
    const idxs = [];
    for(const i in p.sel) if(p.sel[i]) idxs.push(+i);
    if(!idxs.length){ this.toast("请选择要存的纸币","err"); return; }
    const pieces = idxs.map(i=>bills[i]);
    idxs.sort((a,b)=>b-a).forEach(i=>bills.splice(i,1));
    const r = bankDeposit(p.idx, pieces);
    this.el("modal").classList.remove("show");
    this._bdep = null;
    if(!r.ok) this.toast(r.msg,"err");
  },

  /* ---------------- 储蓄所：取钱（自选金额与面额） ---------------- */
  openBankWd(idx){
    const b = S.bank[idx];
    if(!b || b.amt<=0){ this.toast("这本存折没有存款","err"); return; }
    this._bwd = { idx };
    this.el("modal").innerHTML = `
      <div class="modal pay">
        <h2>取钱 · ${b.name}（余额 ${fmtFen(b.amt)}）</h2>
        <div class="note">输入取款金额，并勾选想要的纸币面额组合</div>
        <div class="pay-sum">
          <div class="row"><span class="nm">取款金额</span><input class="qty" id="bwdAmt" type="number" min="0.01" value="10" oninput="U.renderBwdPieces()"></div>
        </div>
        <div class="bp-list" id="bwdPieces"></div>
        <div class="pay-sum" id="bwdSum"></div>
        <div class="btnrow">
          <button class="btn" data-pcancel="1">取消</button>
          <button class="btn prim" data-bwdok="1" disabled>确认取钱</button>
        </div>
      </div>`;
    this.el("modal").classList.add("show");
    this.renderBwdPieces();
  },
  renderBwdPieces(){
    const amtFen = Math.round(Number(this.el("bwdAmt").value||0)*100);
    const b = S.bank[this._bwd.idx];
    const pieces = decomposeFen(Math.min(amtFen, b.amt));
    const count = {};
    pieces.forEach(v=>count[v]=(count[v]||0)+1);
    this.el("bwdPieces").innerHTML = CASH_DENOMS.map(v=>{
      const n = count[v]||0;
      return `<div class="bp-row"><span class="nm" style="flex:1">${fmtFen(v)}</span>
        <input class="qty" data-bwdv="${v}" type="number" min="0" value="${n}" style="width:50px" oninput="U.updBwdSum()"></div>`;
    }).join("");
    this.updBwdSum();
  },
  updBwdSum(){
    const b = S.bank[this._bwd.idx];
    const amtFen = Math.round(Number(this.el("bwdAmt").value||0)*100);
    let sum = 0;
    this.el("bwdPieces").querySelectorAll("input[data-bwdv]").forEach(inp=>{
      sum += (+inp.dataset.bwdv) * Math.max(0, Math.floor(Number(inp.value)||0));
    });
    const el = this.el("bwdSum");
    const ok = this.el("modal").querySelector("[data-bwdok]");
    if(amtFen <= 0){ el.innerHTML = "请输入取款金额"; ok.disabled = true; }
    else if(amtFen > b.amt){ el.innerHTML = `余额不足（余额 <b class="bad">${fmtFen(b.amt)}</b>）`; ok.disabled = true; }
    else if(sum !== amtFen){ el.innerHTML = `纸币合计 <b class="bad">${fmtFen(sum)}</b> ≠ 金额 ${fmtFen(amtFen)}，请调整面额数量`; ok.disabled = true; }
    else { el.innerHTML = `将取出 <b class="good">${fmtFen(amtFen)}</b>`; ok.disabled = false; }
  },
  confirmBankWd(){
    const p = this._bwd; if(!p) return;
    const amtFen = Math.round(Number(this.el("bwdAmt").value||0)*100);
    const pieces = [];
    this.el("bwdPieces").querySelectorAll("input[data-bwdv]").forEach(inp=>{
      const n = Math.max(0, Math.floor(Number(inp.value)||0));
      for(let k=0;k<n;k++) pieces.push(+inp.dataset.bwdv);
    });
    const r = bankWithdraw(p.idx, amtFen, pieces);
    this.el("modal").classList.remove("show");
    this._bwd = null;
    if(!r.ok) this.toast(r.msg,"err");
  },

  /* ---------------- 储蓄所：明细 ---------------- */
  openBankRec(idx){
    const b = S.bank[idx];
    const recs = b.records.length ? b.records.slice().reverse().map(r=>`
      <div class="rec"><span class="t">${r.t}</span><br>
        ${r.type==="存入" ? `<span class="in">+${fmtFen(r.amt)}</span>` : `<span class="out">-${fmtFen(r.amt)}</span>`} ${r.detail}</div>`
    ).join("") : `<div class="empty">暂无交易记录</div>`;
    this.el("modal").innerHTML = `
      <div class="modal pay">
        <h2>${b.name} · 余额 ${fmtFen(b.amt)}</h2>
        <div class="bp-list">${recs}</div>
        <div class="btnrow"><button class="btn prim" data-close="1">关闭</button></div>
      </div>`;
    this.el("modal").classList.add("show");
  },

  /* ---------------- 事件分发 ---------------- */
  onClick(e){
    const t = e.target.closest("[data-loc],[data-buy],[data-sell],[data-appr],[data-use],[data-sleep],[data-cross],[data-store],[data-take],[data-rent],[data-rentpay],[data-house],[data-meal],[data-movie],[data-tailor],[data-donate],[data-letter],[data-mail],[data-dep],[data-wd],[data-plead],[data-bt],[data-gift],[data-cd],[data-step],[data-tmove2],[data-codex],[data-close],[data-pcancel],[data-bp],[data-pok],[data-bopen],[data-bdep],[data-bdepok],[data-bwd],[data-bwdok],[data-brec],[data-carryall],[data-bpchg],[data-qtake],[data-qsubmit],[data-wear],[data-takeoff],[data-discard],[data-hsenter],[data-hsstall],[data-hsback],[data-hsmine],[data-hslist],[data-hsunlist],[data-hsopen],[data-hsdown],[data-hsbuy],[data-hsex],[data-wait],[data-lotterybuy],[data-lscratch],[data-nbuy],[data-nref],[data-nopen],[data-nlist],[data-nunlist],[data-ncollect],[data-nship],[data-ngotoexpress],[data-netopen],[data-ststall],[data-strent],[data-stmine],[data-stlist],[data-stunlist],[data-stopen],[data-stdown],[data-stback],[data-stbuy]");
    if(!t){ if(e.target.id==="resetGame"){ if(confirm("确定重开？")){ resetState(); this.render(); if(S.crossCd===null) this.showCdPick(); } } return; }

    const d = t.dataset;
    let r;
    if(d.bp){
      const i = +d.bp;
      if(this._pay){ this._pay.sel[i] = !this._pay.sel[i]; this.updPaySum(); }
      else if(this._bdep){ this._bdep.sel[i] = !this._bdep.sel[i]; this.updBankDep(); }
      return;
    }
    if(d.pcancel){ this.el("modal").classList.remove("show"); this._pay = this._bdep = this._bwd = null; return; }
    if(d.pok){ this.confirmBillPay(); return; }
    if(d.bdepok){ this.confirmBankDep(); return; }
    if(d.bwdok){ this.confirmBankWd(); return; }
    if(d.bopen){ const bt = this.el("bkType").value; r = openBankBook(bt); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.bdep){ this.openBankDep(Number(d.bdep)); return; }
    else if(d.bwd){ this.openBankWd(Number(d.bwd)); return; }
    else if(d.brec){ this.openBankRec(Number(d.brec)); return; }
    if(d.loc){ r = enterLoc(d.loc); if(!r.ok){ this.toast(r.msg,"err"); return; } }
    else if(d.buy){
      const q = Math.floor(Number(this.el("qty-"+d.buy).value))||1;
      if(S.world==="80"){
        const qr = buyQuote(S.loc, d.buy, q);
        if(!qr.ok){ this.toast(qr.msg,"err"); }
        else {
          this.openBillPay({
            title:"购买 "+ITEMS[d.buy].name+(qr.ticket?"（另需"+TICK_NAME[qr.ticket]+"）":""),
            costFen: qr.costFen,
            onPay: ()=>{ const rr = buy(S.loc, d.buy, q, true); if(!rr.ok) this.toast(rr.msg,"err"); }
          });
        }
      } else {
        r = buy(S.loc, d.buy, q);
        if(!r.ok) this.toast(r.msg,"err");
      }
    }
    else if(d.sell){
      if(S.loc==="wangfugui"){ r = sellCollector(d.sell, Math.floor(Number(this.el("sell-"+d.sell).value))||1); }
      else if(S.loc==="xiaren"){ r = sellJunk(d.sell, Math.floor(Number(this.el("sq-"+d.sell).value))||1); }
      else if(S.loc==="heishi"){ r = sellStrong(d.sell, Math.floor(Number(this.el("sq-"+d.sell).value))||1); }
      if(r && !r.ok) this.toast(r.msg,"err");
    }
    else if(d.appr){
      const v=this.el("appr-"+d.appr);
      r = appraise(d.appr, Math.floor(Number(v&&v.value))||1);
      if(!r.ok) this.toast(r.msg,"err");
      else this.toast("鉴定完成：真品×"+r.genuine+"、假货×"+r.fake,"good");
    }
    else if(d.use){ r = useItem(d.use, 1); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.sleep){ r = sleep(); if(!r.ok){ this.toast(r.msg,"err"); } else { this.showSettlement(r.settle); } }
    else if(d.wait){ waitHours(1); }
    else if(d.cross){
      const picks = S.backpack.map(it=>({id:it.id, qty: Math.min(S.carrySel[it.id]||0, it.qty)})).filter(p=>p.qty>0);
      r = cross(picks); if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.carryall){
      S.carrySel = {};
      let rem = travelCap();
      for(const it of S.backpack){
        const take = Math.min(it.qty, rem);
        if(take > 0) S.carrySel[it.id] = take;
        rem -= take;
        if(rem <= 0) break;
      }
      this.toast("已一键携带（优先装满，不超穿越容量）","good");
    }
    else if(d.store){ const v=this.el("hstore-"+d.store); r = storeItem(d.store, Math.floor(Number(v&&v.value))||1); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.take){ const v=this.el("htake-"+d.take); r = takeItem(d.take, Math.floor(Number(v&&v.value))||1); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.rent){ const qr = rentQuote(); if(!qr.ok) this.toast(qr.msg,"err"); else this.openBillPay({title:"缴纳房租", costFen:qr.costFen, onPay:()=>{ const rr=payRent(true); if(!rr.ok) this.toast(rr.msg,"err"); }}); }
    else if(d.rentpay){ const qr = rentQuote(); if(!qr.ok) this.toast(qr.msg,"err"); else this.openBillPay({title:"缴纳房租", costFen:qr.costFen, onPay:()=>{ const rr=payRent(true); if(!rr.ok) this.toast(rr.msg,"err"); }}); }
    else if(d.house){ r = changeHousing(d.house); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.meal){
      const order = Object.assign({}, this.cart||{});
      const guest = this.el("mealGuest").value;
      const qr = mealQuote(order);
      if(!qr.ok){ this.toast(qr.msg,"err"); }
      else {
        this.openBillPay({
          title:"国营饭店买单"+(guest?"（请"+guest+"）":""),
          costFen: qr.costFen,
          note: qr.grainNeed ? "另需粮票 "+qr.grainNeed+" 两" : "",
          onPay: ()=>{ const rr = eatMeal(order, guest||null, true); if(rr.ok){ this.cart={}; } else this.toast(rr.msg,"err"); }
        });
      }
    }
    else if(d.step){ this.cartStep(d.item, Number(d.step)); }
    else if(d.tmove2){
      const [c,t,v] = d.tmove2.split("|");
      const n = Math.floor(Number(this.el("tm-"+c+"-"+t+"-"+v).value))||1;
      r = moveTicketVal(c, t, +v, n); if(!r.ok) this.toast(r.msg,"err"); else this.toast(r.msg,"good");
    }
    else if(d.codex){ this.showCodex(); }
    else if(d.movie){
      const guest = this.el("movieGuest").value;
      const qr = movieQuote(d.movie, guest||null);
      if(!qr.ok){ this.toast(qr.msg,"err"); }
      else this.openBillPay({title:"购买电影票"+(guest?"（请"+guest+"）":""), costFen:qr.costFen, onPay:()=>{ const rr=watchMovie(d.movie, guest||null, true); if(!rr.ok) this.toast(rr.msg,"err"); }});
    }
    else if(d.tailor){
      const type = this.el("tailorType").value;
      const h = Number(this.el("tailorH").value);
      const qr = tailorQuote(type, h);
      if(!qr.ok){ this.toast(qr.msg,"err"); }
      else this.openBillPay({title:"做衣服手工费", costFen:qr.costFen, onPay:()=>{ const rr=makeClothes(type, h, true); if(!rr.ok) this.toast(rr.msg,"err"); }});
    }
    else if(d.donate){ r = donateClothes(); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.wear){ r = wearClothes(d.wear); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.takeoff){ r = takeOffClothes(); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.discard){ r = discardItem(d.discard); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.hsenter){ r = hsEnter(d.hsenter); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.hsstall){ r = hsEnterStall(Number(d.hsstall)); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.hsback){ S.hs.cur = null; }
    else if(d.hsmine){ if(d.slot !== undefined) S.hs.mine.slot = Number(d.slot); S.hs.cur = -1; }
    else if(d.hslist){
      const id = d.hslist;
      const qty = Math.floor(Number(this.el("hslq-"+id).value))||1;
      const price = Number(this.el("hslp-"+id).value);
      r = hsList(S.hs.mine.slot, id, qty, price);
      if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.hsunlist){ r = hsUnlist(Number(d.hsunlist)); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.hsopen){
      r = hsOpenStall();
      if(!r.ok) this.toast(r.msg,"err");
      else {
        let msg = "";
        (r.sold||[]).forEach(s=>{ msg += s.name+"×"+s.qty+" @"+fmtMoney(s.price)+"；"; });
        this.toast(msg?("卖出："+msg):"没有成交","good");
      }
    }
    else if(d.hsdown){ r = hsTakeDown(); if(!r.ok) this.toast(r.msg,"err"); else this.toast(r.msg,"good"); }
    else if(d.hsbuy){
      const key = d.hsbuy;
      const qty = Math.floor(Number(this.el("hsbq-"+key).value))||1;
      r = hsBuy(S.hs.cur, key, qty);
      if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.hsex){
      const want = this.el("hsxWant").value;
      const offer = this.el("hsxOffer").value;
      const qty = Math.floor(Number(this.el("hsxQty").value))||1;
      if(!offer){ this.toast("背包里没有东西可换","err"); }
      else { r = hsExchange(S.hs.cur, want, offer, qty); if(!r.ok) this.toast(r.msg,"err"); }
    }
    else if(d.lotterybuy){
      const tier = Number(this.el("lottoTier").value);
      const n = Math.floor(Number(this.el("lottoN").value))||1;
      r = buyLottery(tier, n);
      if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.lscratch){
      const [i, k] = d.lscratch.split("|").map(Number);
      r = scratchTicket(i, k);
      if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.nbuy){
      const qty = Math.floor(Number(this.el("nbq-"+d.nbuy).value))||1;
      r = netBuy(d.nbuy, qty); if(!r.ok) this.toast(r.msg,"err"); else if(this._netOpen) this.showNet();
    }
    else if(d.nref){ r = netRefreshGoods(true); if(!r.ok) this.toast(r.msg,"err"); else this.showNet(); }
    else if(d.nopen){ r = netOpenShop(); if(!r.ok) this.toast(r.msg,"err"); else this.showNet(); }
    else if(d.nlist){
      const id = d.nlist;
      const qty = Math.floor(Number(this.el("nlq-"+id).value))||1;
      const price = Number(this.el("nlp-"+id).value);
      const post = !!(this.el("nlpst-"+id) && this.el("nlpst-"+id).checked);
      r = netList(id, qty, price, post); if(!r.ok) this.toast(r.msg,"err"); else this.showNet();
    }
    else if(d.nunlist){ r = netUnlist(d.nunlist); if(!r.ok) this.toast(r.msg,"err"); else this.showNet(); }
    else if(d.ncollect){ r = netCollect(); if(!r.ok) this.toast(r.msg,"err"); else this.toast("已领取网购包裹","good"); }
    else if(d.nship){ r = netShip(d.nship); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.ngotoexpress){ enterLoc("kuaidi"); this.el("modal").classList.remove("show"); this._netOpen = false; }
    else if(d.netopen){ this.showNet(); }
    else if(d.ststall){
      const st = S.street.stalls.find(x=>x.i===Number(d.ststall));
      if(st && st.npc){ /* 摊贩购买：弹出简化购买，直接给当前摊位一个简单列表 */ }
      S.street.cur = Number(d.ststall);
    }
    else if(d.strent){ r = stRent(Number(d.strent)); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.stmine){ S.street.cur = -1; }
    else if(d.stlist){
      const id = d.stlist;
      const qty = Math.floor(Number(this.el("stlq-"+id).value))||1;
      const price = Number(this.el("stlp-"+id).value);
      r = stList(S.street.mine.slot, id, qty, price); if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.stunlist){ r = stUnlist(Number(d.stunlist)); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.stopen){ r = stOpen(); if(!r.ok) this.toast(r.msg,"err"); else this.toast("成交"+ (r.sold||[]).length +" 单，进账 "+fmtMoney(r.gain)+" 元","good"); }
    else if(d.stdown){ r = stTakeDown(); if(!r.ok) this.toast(r.msg,"err"); else this.toast(r.msg,"good"); }
    else if(d.stback){ S.street.cur = null; }
    else if(d.stbuy){
      const qty = Math.floor(Number(this.el("stbq-"+d.stbuy).value))||1;
      r = stBuy(S.street.cur, d.stbuy, qty); if(!r.ok) this.toast(r.msg,"err");
    }
    else if(d.letter){
      const qr = letterQuote();
      if(!qr.ok) this.toast(qr.msg,"err");
      else if(qr.costFen===0){ r = sendLetter(true); if(!r.ok) this.toast(r.msg,"err"); }
      else this.openBillPay({title:"买邮票寄信", costFen:8, onPay:()=>{ const rr=sendLetter(true); if(!rr.ok) this.toast(rr.msg,"err"); }});
    }
    else if(d.mail){ r = checkMail(); if(!r.ok) this.toast(r.msg,"err"); else this.toast(r.msg,"good"); }
    else if(d.plead){ r = pleadReset(); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.bt){
      const q = Math.floor(Number(this.el("tq-"+d.bt).value))||1;
      const qr = btQuote(d.bt, q);
      if(!qr.ok){ this.toast(qr.msg,"err"); }
      else this.openBillPay({title:"购买 "+TICKETS[d.bt].name, costFen:qr.costFen, onPay:()=>{ const rr=buyTicket(d.bt, q, true); if(!rr.ok) this.toast(rr.msg,"err"); }});
    }
    else if(d.gift){ const item = this.el("giftSel").value; if(!item){ this.toast("背包里没有他能收下的物品","err"); } else { r = gift(d.gift, item, 1); if(!r.ok) this.toast(r.msg,"err"); } }
    else if(d.qtake){ r = takeQuest(d.qtake); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.qsubmit){ r = submitQuest(d.qsubmit); if(!r.ok) this.toast(r.msg,"err"); }
    else if(d.cd){ const cd = Number(d.cd); const cr = chooseCooldown(cd); if(cr.ok){ this.el("modal").classList.remove("show"); this.toast(cr.msg,"good"); } }
    else if(d.close){ this.el("modal").classList.remove("show"); this._netOpen = false; }
    this.render();
  },

  render(){
    if(!S) return;
    saveState();
    refreshAllShops();
    this.renderTop();
    this.renderNav();
    this.renderSide();
    this.renderMain();
    this.renderLog();
  },

  renderLog(){
    this.el("log").innerHTML = S.log.map(x=>`<div class="logi ${x.c}">${x.time?`<span class="lbl">[${x.time}] </span>`:""}${x.t}</div>`).join("");
  },
};
