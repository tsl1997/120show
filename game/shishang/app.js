/* ============================================================
 * 万界楼 · 史上最强店主（试玩版）
 * app.js —— 游戏逻辑
 * ============================================================ */

"use strict";

const SAVE_KEY = "shishang_save_v1";
const SPAWN_BASE_MS = 45000;      // 客户自然到访间隔
const TOKEN_REGEN_MS = 180000;    // 采购令回复间隔
const MAX_QUEUE = 3;

/* ---------------- 存档与状态 ---------------- */

/* 品阶 → 每重境界点（对应原作：九阳四重 ≈ 后天大圆满） */
const GRADE_PTS = { 1: 0.5, 2: 1, 3: 1.5, 4: 2 };

function freshState() {
  return {
    intro: false,
    vp: 0,
    cny: 500,
    shopLevel: 1,
    realmPts: 0,
    tokens: 2,
    tokenNext: 0,
    inv: {},
    studied: {},
    customers: [],
    quests: QUESTS.map((q, i) => ({ done: i === 0 })),
    firstTrades: {},
    buffs: {},
    storyDone: {},
    stats: { trades: 0, servedGoku: 0, totalVp: 0, known: {}, worldTrips: { shaDiao: 0, xiaoao: 0, longzhu: 0, sanguo: 0, yitian: 0 } },
    nextSpawnAt: Date.now() + 20000,
    greetCd: 0,
    log: [],
  };
}

let state = freshState();
let trip = null;          // 进行中的位面采购
let deal = null;          // 进行中的交易
let greetReadyAt = 0;

function save() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify({ state, trip })); } catch (e) { }
}
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    if (s && s.state) {
      state = Object.assign(freshState(), s.state);
      state.stats = Object.assign(freshState().stats, s.state.stats || {});
      state.stats.worldTrips = Object.assign({ shaDiao: 0, xiaoao: 0, longzhu: 0, sanguo: 0, yitian: 0 }, s.state.stats.worldTrips || {});
      state.stats.known = s.state.stats.known || {};
      /* 迁移：库存中的商品必然上架过 */
      Object.keys(state.inv).forEach(id => { state.stats.known[id] = true; });
      trip = s.trip || null;
    } else if (s && s.stats) {
      // 旧版存档兼容
      state = Object.assign(freshState(), s);
      state.stats.worldTrips = Object.assign({ shaDiao: 0, xiaoao: 0, longzhu: 0, sanguo: 0, yitian: 0 }, s.stats.worldTrips || {});
    }
  } catch (e) { }
}

/* ---------------- 工具 ---------------- */

const $ = (sel) => document.querySelector(sel);
const fmt = (n) => {
  n = Math.round(n);
  if (n >= 1e8) return (n / 1e8).toFixed(2).replace(/\.?0+$/, "") + " 亿";
  if (n >= 1e4) return (n / 1e4).toFixed(2).replace(/\.?0+$/, "") + " 万";
  return n.toLocaleString("zh-CN");
};
function roll(chance) { return Math.random() < chance; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function realmIndex() {
  let idx = 0;
  REALMS.forEach((r, i) => { if (state.realmPts >= r.pts) idx = i; });
  return idx;
}
function realmName() { return REALMS[realmIndex()].name; }

function margin() {
  let m = 1 + realmIndex() * 0.04;
  if (state.shopLevel >= 2) m += 0.1;
  return Math.min(m, 1.6);
}

function countItem(id) { return state.inv[id] || 0; }
function addItem(id, n) {
  if (!state.inv[id] && !state.stats.known[id]) {
    state.stats.known[id] = true;
  }
  state.inv[id] = (state.inv[id] || 0) + n;
}
function removeItem(id, n) {
  state.inv[id] = Math.max(0, (state.inv[id] || 0) - n);
  if (!state.inv[id]) delete state.inv[id];
}
function distinctItems() { return Object.keys(state.stats.known || {}).length; }

function tokenCap() { return state.shopLevel >= 2 ? 5 : 3; }
function spawnInterval() { return SPAWN_BASE_MS - (state.shopLevel >= 2 ? 20000 : 0) - Math.min(realmIndex() * 3000, 15000); }

function pushLog(text) {
  state.log.unshift({ t: Date.now(), text });
  if (state.log.length > 60) state.log.length = 60;
}

function toast(text, good) {
  const box = $("#toasts");
  const el = document.createElement("div");
  el.className = "toast" + (good ? " good" : "");
  el.textContent = text;
  box.appendChild(el);
  setTimeout(() => el.classList.add("show"), 10);
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 400); }, 3600);
}

function ding(text) { toast("🔔 " + text, true); }

/* ---------------- 任务 ---------------- */

function questProgress(i) {
  const s = state;
  switch (i) {
    case 1: return s.stats.servedGoku >= 1;
    case 2: return !!s.firstTrades.yue;
    case 3: return !!s.storyDone["shaDiao:zhangjiakou"];
    case 4: return !!s.storyDone["shaDiao:shaolin"];
    case 5: return realmIndex() >= 4;
    case 6: return distinctItems() >= 12 && s.stats.trades >= 12;
    case 7: return !!s.storyDone["sanguo:siku"];
    case 8: return s.shopLevel >= 2;
    default: return s.quests[i] && s.quests[i].done;
  }
}

function checkQuests() {
  state.quests.forEach((q, i) => {
    if (!q.done && questProgress(i)) {
      q.done = true;
      const reward = QUESTS[i].reward || {};
      let extra = [];
      if (reward.vp) { state.vp += reward.vp; extra.push("价值点+" + reward.vp); }
      if (reward.tokens) { state.tokens = Math.min(state.tokens + reward.tokens, tokenCap() + 2); extra.push("采购令+" + reward.tokens); }
      ding("任务完成【" + QUESTS[i].title + "】" + (extra.length ? "，奖励：" + extra.join("，") : ""));
      pushLog("✅ 任务完成【" + QUESTS[i].chapter + " " + QUESTS[i].title + "】");
      if (i === 8) showEnding();
    }
  });
}

/* ---------------- 客户与交易 ---------------- */

function eligibleCustomers() {
  return Object.keys(CUSTOMERS).filter(id => CUSTOMERS[id].unlock(state));
}

function spawnCustomer() {
  if (state.customers.length >= MAX_QUEUE) return;
  const pool = eligibleCustomers().filter(p => !state.customers.includes(p));
  if (!pool.length) return;
  const id = pick(pool);
  state.customers.push(id);
  ding(CUSTOMERS[id].name + " 破空而来，走进了万界楼！");
  pushLog("🚪 " + CUSTOMERS[id].name + " 到访万界楼。");
  renderLobby();
}

function greetBtn() {
  const now = Date.now();
  if (now < greetReadyAt) { toast("系统正在捕捉位面意念，请稍候…"); return; }
  if (state.customers.length >= MAX_QUEUE) { toast("大堂已经客满啦！"); return; }
  greetReadyAt = now + 20000;
  spawnCustomer();
  renderLobby();
}

function startDeal(cid) {
  deal = { cid, picked: [] };
  renderDeal();
  $("#dealModal").classList.add("open");
}

function dealData() {
  const c = CUSTOMERS[deal.cid];
  const isFirst = !!c.first && !state.firstTrades[deal.cid];
  return { c, isFirst };
}

function dealNeedTags() {
  const { c } = dealData();
  return c.need;
}

function togglePick(itemId) {
  const need = dealNeedTags();
  const it = ITEMS[itemId];
  if (!it.tags.some(t => need.includes(t))) { toast("客户对这类商品没有意念需求。"); return; }
  const idx = deal.picked.indexOf(itemId);
  if (idx >= 0) deal.picked.splice(idx, 1);
  else {
    if (deal.picked.length >= 3) { toast("一次最多展示 3 件商品。"); return; }
    deal.picked.push(itemId);
  }
  renderDeal();
}

function dealPrice() {
  const { c, isFirst } = dealData();
  if (isFirst) return { price: 0, note: "剧情首单：以物易物" };
  if (c.special === "goku") {
    const sum = deal.picked.reduce((a, id) => a + ITEMS[id].value, 0);
    const blood = sum <= 0 ? 0 : Math.min(3, 1 + Math.floor(sum / 100));
    return { price: sum, blood, note: "悟空直接开吃！吃爽了会用赛亚人血脉付账" };
  }
  let m = margin();
  let loved = false;
  deal.picked.forEach(id => { if (c.loves && c.loves.includes(id)) loved = true; });
  if (loved) m += 0.5;
  const sum = deal.picked.reduce((a, id) => a + ITEMS[id].value, 0);
  const price = Math.min(Math.round(sum * m), c.budget);
  return { price, loved, note: loved ? "客户挚爱加价！" : "议价系数 ×" + m.toFixed(2) };
}

function confirmDeal() {
  const { c, isFirst } = dealData();
  if (!deal.picked.length) { toast("至少要拿出一件商品。"); return; }

  if (isFirst) {
    if (!deal.picked.includes(c.first.needItem)) { toast("客户点名要「" + ITEMS[c.first.needItem].name + "」。"); return; }
    removeItem(c.first.needItem, 1);
    c.first.pay.forEach(id => addItem(id, 1));
    state.firstTrades[deal.cid] = true;
    state.stats.trades++;
    pushLog("🤝 剧情首单：" + c.name + " 以「华山秘籍一摞」换走 1 滴赛亚人血脉。");
    ding("首单达成！获得华山派秘籍（紫霞神功等），价值点将随转售进账。");
  } else if (c.special === "goku") {
    const sum = deal.picked.reduce((a, id) => a + ITEMS[id].value, 0);
    const { blood } = dealPrice();
    deal.picked.forEach(id => removeItem(id, 1));
    if (blood > 0) { addItem("saiyan", blood); }
    state.vp += sum;
    state.stats.totalVp += sum;
    state.stats.trades++;
    state.stats.servedGoku++;
    pushLog("🐵 孙悟空吃了 " + deal.picked.length + " 份食物，付了 " + blood + " 滴赛亚人血脉。");
    toast("孙悟空：" + (blood > 0 ? "多谢店主，这个给你！" : "好吃！"), true);
  } else {
    const { price, loved } = dealPrice();
    deal.picked.forEach(id => removeItem(id, 1));
    state.vp += price;
    state.stats.totalVp += price;
    state.stats.trades++;
    let bonusText = "";
    if (c.pay && roll(0.4)) {
      const gift = pick(c.pay);
      addItem(gift, 1);
      bonusText = "，另赠「" + ITEMS[gift].name + "」";
    }
    pushLog("🤝 " + c.name + " 以 " + fmt(price) + " 价值点购得 " + deal.picked.map(id => ITEMS[id].name).join("、") + (loved ? "（挚爱加价）" : "") + bonusText + "。");
    toast("成交！价值点 +" + fmt(price), true);
  }

  state.customers = state.customers.filter(x => x !== deal.cid);
  checkQuests();
  closeModal("dealModal");
  deal = null;
  save();
  renderAll();
}

/* ---------------- 现代采购 / 拍卖 ---------------- */

function buyModern(id) {
  const it = ITEMS[id];
  if (state.cny < it.cost) { toast("华夏币不足。"); return; }
  state.cny -= it.cost;
  addItem(id, 1);
  pushLog("🛒 现代采购：" + it.name + " ×1（-" + fmt(it.cost) + " 华夏币）");
  save(); renderAll();
}

function auction(id) {
  const it = ITEMS[id];
  if (it.modern) { toast("现代商品可别拿去拍卖行丢人……"); return; }
  const gain = it.value * 200;
  removeItem(id, 1);
  state.cny += gain;
  pushLog("🏛️ 拍卖行成交：「" + it.name + "」 +" + fmt(gain) + " 华夏币。");
  toast("拍卖成交！华夏币 +" + fmt(gain), true);
  save(); renderAll();
}

function discard(id) {
  removeItem(id, 1);
  pushLog("🗑️ 丢弃了「" + ITEMS[id].name + "」。");
  save(); renderAll();
}

/* ---------------- 修炼 ---------------- */

function studyCost(id, nextLvl) {
  const it = ITEMS[id];
  const r = 1.6;
  const w = Math.pow(r, nextLvl - 1) * (r - 1) / (Math.pow(r, it.lvls) - 1);
  return Math.max(1, Math.round(it.value * 10 * w));
}

function study(id) {
  const it = ITEMS[id];
  if (it.noStudy) { toast(it.cursed ? "欲练此功，必先自宫。你默默把剑谱收了回去。" : "此物无法修炼。"); return; }
  if (!countItem(id)) { toast("需要持有这本秘籍才能修炼。"); return; }
  const cur = state.studied[id] || 0;
  if (cur >= it.lvls) { toast("《" + it.name + "》已大成！"); return; }
  const cost = studyCost(id, cur + 1);
  if (state.vp < cost) { toast("价值点不足（还差 " + fmt(cost - state.vp) + "）。"); return; }
  state.vp -= cost;
  state.studied[id] = cur + 1;
  state.realmPts += GRADE_PTS[it.grade] || it.grade;
  pushLog("🥋 修炼《" + it.name + "》第 " + (cur + 1) + " 重（-" + fmt(cost) + " 价值点），境界点 +" + it.grade + "。");
  toast("《" + it.name + "》第 " + (cur + 1) + " 重练成！", true);
  checkQuests();
  save(); renderAll();
}

/* ---------------- 位面采购 ---------------- */

function startTrip(wid) {
  const w = WORLDS[wid];
  if (!w.unlock(state)) { toast(w.unlockText); return; }
  if (state.tokens < 1) { toast("采购令不足，等系统冷却回复。"); return; }
  state.tokens--;
  trip = { world: wid, day: 1, used: [], gained: [] };
  renderTrip();
  $("#tripModal").classList.add("open");
  save();
}

function tripCandidates() {
  const w = WORLDS[trip.world];
  const pool = w.events.filter(e => !trip.used.includes(e.id));
  const story = pool.filter(e => e.story && !state.storyDone[trip.world + ":" + e.id]);
  const normal = pool.filter(e => !e.story);
  const cands = [];
  const sPool = story.slice().sort(() => Math.random() - 0.5);
  const nPool = normal.slice().sort(() => Math.random() - 0.5);
  while (cands.length < 3 && sPool.length) cands.push(sPool.shift());
  while (cands.length < 3 && nPool.length) cands.push(nPool.shift());
  return cands;
}

function optRiskChance(opt) {
  return Math.max(0.15, Math.min(0.95, 0.9 - opt.risk.power * 0.12 + realmIndex() * 0.06));
}

function chooseOption(eventId, oi) {
  const w = WORLDS[trip.world];
  const e = w.events.find(ev => ev.id === eventId);
  const opt = e.options[oi];
  const out = {};
  const r = opt.result || {};

  if (opt.cond && !opt.cond(state)) { toast("条件不满足。"); return; }
  if (opt.cost) {
    if (state.cny < opt.cost) { toast("华夏币不足。"); return; }
    state.cny -= opt.cost;
  }

  let text = r.text || "";
  let fail = false;
  if (opt.risk) {
    const chance = optRiskChance(opt);
    if (!roll(chance)) {
      fail = true;
      text = "⚠️ " + opt.risk.failText;
      if (opt.risk.failHalf && trip.gained.length) {
        const half = Math.ceil(trip.gained.length / 2);
        for (let i = 0; i < half; i++) {
          const [id, n] = trip.gained[i];
          removeItem(id, n);
        }
        trip.gained = trip.gained.slice(half);
        text += "（损失了一半本次收成）";
      }
      if (opt.risk.loseCny) state.cny = Math.max(0, state.cny - opt.risk.loseCny);
    }
  }

  if (!fail) {
    (r.remove || []).forEach(([id, n]) => removeItem(id, n));
    (r.items || []).forEach(([id, n]) => { addItem(id, n); for (let k = 0; k < n; k++) trip.gained.push([id, 1]); });
    if (r.items2) r.items2.forEach(([id, n]) => addItem(id, n));
    if (r.cny) state.cny += r.cny;
    if (r.vp) { state.vp += r.vp; state.stats.totalVp += r.vp; }
    if (r.buff) state.buffs[r.buff] = true;
    if (r.quest) state.storyDone[trip.world + ":" + e.id] = true;
  }

  trip.used.push(e.id);
  trip.lastText = text;
  trip.lastFail = fail;
  checkQuests();
  save();
  renderTrip(true);
}

function afterEventNext() {
  trip.day++;
  if (trip.day > 3) { endTrip(); return; }
  renderTrip();
}

function endTrip() {
  const wid = trip.world;
  state.stats.worldTrips[wid] = (state.stats.worldTrips[wid] || 0) + 1;
  const gained = trip.gained.slice();
  pushLog("🌍 位面采购归来【" + WORLDS[wid].name + "】，共收获 " + gained.length + " 件宝物。");
  checkQuests();
  trip = null;
  closeModal("tripModal");
  save();
  switchTab("plane");
  renderAll();
}

/* ---------------- 万界楼升级 ---------------- */

function buyVilla() {
  if (state.shopLevel >= 2) return;
  if (!state.storyDone["sanguo:siku"]) { toast("先去三国位面搬空皇帝私库，凑够巨款吧。"); return; }
  if (state.cny < 980000000) { toast("华夏币不足 9.8 亿，先去拍卖行变卖古董。"); return; }
  state.cny -= 980000000;
  state.shopLevel = 2;
  pushLog("🏢 豪掷 9.8 亿买下明雅小区！系统绑定新万界楼，商品琳琅满目——万界楼，初具规模！");
  checkQuests();
  save(); renderAll();
  if (state.quests[8].done) showEnding();
}

function showEnding() {
  $("#endTitle").textContent = "二星店主 · 试玩版完";
  $("#endText").innerHTML = "巍巍楼阁拔地而起，鎏金大字「万界楼」高悬正门。<br>" +
    "系统提示：「宿体晋升二星店主，解锁：顾客价值知情权、店主打折权、更快的客流量与更高采购权限。」<br><br>" +
    "后续剧情预告：小型拍卖会引来一百多位皇帝（还有两个李世民）、发动海贼世界全员找恶魔果实、独孤求败的剑冢、哆啦A梦的次元口袋……<br>" +
    "——商通万界，让所有人给我打工。<b>试玩版到此结束，你可以继续自由经营。</b>";
  $("#endModal").classList.add("open");
  save();
}

/* ---------------- 开场剧情 ---------------- */

let introStep = 0;
function showIntro() {
  introStep = 0;
  $("#introModal").classList.add("open");
  renderIntro();
}
function renderIntro() {
  const st = INTRO_STEPS[introStep];
  $("#introEmoji").textContent = st.emoji;
  $("#introText").textContent = st.text;
  $("#introBtn").textContent = introStep === INTRO_STEPS.length - 1 ? "绑定完成，开门营业！" : "继续";
  $("#introStep").textContent = (introStep + 1) + " / " + INTRO_STEPS.length;
}
function nextIntro() {
  introStep++;
  if (introStep >= INTRO_STEPS.length) {
    $("#introModal").classList.remove("open");
    state.intro = true;
    ding("任务【万界商铺系统】完成！获得采购令 ×1");
    save();
    renderAll();
  } else renderIntro();
}

function closeModal(id) { $("#" + id).classList.remove("open"); }

/* ---------------- 渲染 ---------------- */

function renderAll() {
  renderRes();
  renderLobby();
  renderStore();
  renderStudy();
  renderPlane();
  renderQuests();
}

function renderRes() {
  $("#rVp").textContent = fmt(state.vp);
  $("#rCny").textContent = fmt(state.cny);
  $("#rRealm").textContent = realmName();
  $("#rShop").textContent = state.shopLevel >= 2 ? "二星店主" : "一星店主";
  $("#rItems").textContent = distinctItems();
  $("#rTrades").textContent = state.stats.trades;
  $("#rTokens").textContent = state.tokens + " / " + tokenCap();
  $("#shopName").textContent = state.shopLevel >= 2 ? "万界楼 · 明雅别墅" : "万界楼 · 出租房（20㎡）";
  $("#shopDesc").textContent = state.shopLevel >= 2
    ? "巍峨楼阁，八根雕龙玉柱，水晶柜台琳琅满目。"
    : "不足二十平的出租房，泡面箱子还没搬走。";
  $("#shopEmoji").textContent = state.shopLevel >= 2 ? "🏯" : "🏠";
}

let lastQueueKey = null;
function renderLobby() {
  /* 迎客按钮：每次调用都刷新（倒计时） */
  const btn = $("#greetBtn");
  const cd = Math.ceil((greetReadyAt - Date.now()) / 1000);
  btn.disabled = cd > 0;
  btn.textContent = cd > 0 ? "捕捉意念中（" + cd + "s）" : "主动迎客（意念捕捉）";

  /* 客户卡片：仅在队列变化时重建，避免打断玩家点击 */
  const qKey = state.customers.join(",");
  if (qKey === lastQueueKey) return;
  lastQueueKey = qKey;
  const box = $("#lobbyQueue");
  box.innerHTML = "";
  if (!state.customers.length) {
    box.innerHTML = '<div class="empty">大堂空空如也。<br>系统正在万千位面捕捉「意念」……</div>';
  }
  state.customers.forEach(cid => {
    const c = CUSTOMERS[cid];
    const isFirst = !!c.first && !state.firstTrades[cid];
    const card = document.createElement("div");
    card.className = "customer";
    card.innerHTML =
      '<div class="c-avatar">' + c.emoji + '</div>' +
      '<div class="c-info"><b>' + c.name + '</b><span class="c-world">' + c.world + '</span>' +
      '<p class="c-quote">“' + c.intro + '”</p>' +
      '<div class="c-need">意念需求：' + c.need.map(t => '<span class="tagchip">' + t + '</span>').join("") +
      (isFirst ? ' <span class="tagchip story">剧情首单</span>' : '') + '</div></div>' +
      '<button class="btn primary">接待</button>';
    card.querySelector("button").onclick = () => startDeal(cid);
    box.appendChild(card);
  });
}

function renderStore() {
  /* 现代采购 */
  const buy = $("#buyList");
  buy.innerHTML = "";
  SHOP_GOODS.forEach(id => {
    const it = ITEMS[id];
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + '</span>' +
      '<span class="g-val">' + fmt(it.value) + ' 点</span>' +
      '<button class="btn small">🧧 ' + fmt(it.cost) + '</button>';
    el.querySelector("button").onclick = () => buyModern(id);
    buy.appendChild(el);
  });

  /* 库存 */
  const inv = $("#invList");
  inv.innerHTML = "";
  const ids = Object.keys(state.inv);
  if (!ids.length) inv.innerHTML = '<div class="empty">仓库空空。去「现代采购」进货，或去「位面」淘宝！</div>';
  ids.forEach(id => {
    const it = ITEMS[id];
    const st = state.studied[id] || 0;
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + (state.inv[id] > 1 ? ' ×' + state.inv[id] : '') +
      (st ? ' <em class="studied">已修' + st + '/' + it.lvls + '重</em>' : '') + '</span>' +
      '<span class="g-val">' + fmt(it.value) + ' 点</span>' +
      '<span class="g-acts"></span>';
    const acts = el.querySelector(".g-acts");
    if (!it.modern) {
      const b1 = document.createElement("button");
      b1.className = "btn small"; b1.textContent = "🏛️ 拍卖";
      b1.onclick = () => auction(id);
      acts.appendChild(b1);
    }
    const b2 = document.createElement("button");
    b2.className = "btn small ghost"; b2.textContent = "丢弃";
    b2.onclick = () => discard(id);
    acts.appendChild(b2);
    inv.appendChild(el);
  });
}

function renderStudy() {
  $("#realmNow").textContent = realmName();
  const next = REALMS[realmIndex() + 1];
  $("#realmNext").textContent = next ? next.name + "（还需 " + (next.pts - state.realmPts) + " 境界点）" : "已臻至巅峰";
  $("#realmPts").textContent = "境界点：" + state.realmPts + "　议价系数 ×" + margin().toFixed(2);

  const box = $("#studyList");
  box.innerHTML = "";
  const ids = Object.keys(state.inv).filter(id => ITEMS[id].lvls && !ITEMS[id].noStudy);
  if (!ids.length) box.innerHTML = '<div class="empty">尚未获得可修炼的秘籍。收购客户带来的武学，或去位面淘宝！</div>';
  ids.forEach(id => {
    const it = ITEMS[id];
    const cur = state.studied[id] || 0;
    const cost = cur >= it.lvls ? 0 : studyCost(id, cur + 1);
    const gradeName = ["", "低级", "中级", "高级", "顶级"][it.grade] || "";
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + ' <em class="studied">' + gradeName + ' · ' + cur + '/' + it.lvls + ' 重</em></span>' +
      '<span class="g-val">+' + (GRADE_PTS[it.grade] || it.grade) + ' 点/重</span>' +
      '<button class="btn small primary">' + (cur >= it.lvls ? "已大成" : "修炼 " + fmt(cost) + " 点") + '</button>';
    el.querySelector("button").onclick = () => study(id);
    box.appendChild(el);
  });
}

function renderPlane() {
  const box = $("#worldList");
  box.innerHTML = "";
  Object.keys(WORLDS).forEach(wid => {
    const w = WORLDS[wid];
    const ok = w.unlock(state);
    const el = document.createElement("div");
    el.className = "world" + (ok ? "" : " locked");
    el.innerHTML = '<div class="w-head"><span class="w-emoji">' + (ok ? w.emoji : "🔒") + '</span>' +
      '<b>' + w.name + '</b></div>' +
      '<p class="w-desc">' + w.desc + '</p>' +
      '<p class="w-unlock">' + (ok ? '已开启时空定位' : w.unlockText) + '</p>' +
      '<button class="btn small ' + (ok ? 'primary' : '') + '" ' + (ok ? '' : 'disabled') + '>' +
      (ok ? '前往采购（消耗 1 采购令）' : '未解锁') + '</button>';
    el.querySelector("button").onclick = () => startTrip(wid);
    box.appendChild(el);
  });
}

function renderQuests() {
  const box = $("#questList");
  box.innerHTML = "";
  QUESTS.forEach((q, i) => {
    const done = state.quests[i].done;
    const el = document.createElement("div");
    el.className = "quest" + (done ? " done" : "");
    el.innerHTML = '<div class="q-badge">' + (done ? "✅" : "🔸") + '</div>' +
      '<div><b>' + q.chapter + ' · ' + q.title + '</b><p>' + q.desc + '</p></div>';
    box.appendChild(el);
  });

  /* 明雅小区 */
  const villa = $("#villaBox");
  if (state.shopLevel >= 2) {
    villa.innerHTML = '<p>明雅小区已绑定为新万界楼。✔</p>';
  } else if (state.storyDone["sanguo:siku"]) {
    villa.innerHTML = '<p>私库巨款已到手！只需支付 <b>9.8 亿华夏币</b>（当前 ' + fmt(state.cny) + '），即可买下明雅小区并晋升二星店主。</p>' +
      '<button id="villaBtn" class="btn primary">买下明雅小区（9.8 亿）</button>';
    const b = $("#villaBtn");
    if (b) b.onclick = buyVilla;
    if (state.cny < 980000000) { b.disabled = true; b.textContent = "华夏币不足（还差 " + fmt(980000000 - state.cny) + "）"; }
  } else {
    villa.innerHTML = '<p>🔐 完成任务【搬空皇帝私库】后，可以在这里置业升级。</p>';
  }

  /* 大事记 */
  const logBox = $("#logList");
  logBox.innerHTML = state.log.slice(0, 20).map(l =>
    '<div class="logline"><span>' + new Date(l.t).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }) + '</span>' + l.text + '</div>'
  ).join("") || '<div class="empty">暂无大事记。</div>';
}

/* ---------------- 交易弹窗 ---------------- */

function renderDeal() {
  if (!deal) return;
  const { c, isFirst } = dealData();
  $("#dealTitle").textContent = "接待 · " + c.name;
  $("#dealInfo").innerHTML = '<span class="c-world">' + c.world + '</span>' +
    '<p class="c-quote">“' + c.intro + '”</p>' +
    '<div>意念需求：' + c.need.map(t => '<span class="tagchip">' + t + '</span>').join("") +
    (isFirst ? ' <span class="tagchip story">剧情首单：以物易物</span>' : ' <span class="tagchip">预算 ' + fmt(c.budget) + ' 点</span>') + '</div>';

  const price = dealPrice();
  $("#dealPrice").innerHTML = '已选 ' + deal.picked.length + ' 件：' +
    (deal.picked.map(id => ITEMS[id].name).join("、") || "——") +
    '<br><b>' + (isFirst ? "支付：华山秘籍一摞（含紫霞神功）" : "预计成交：" + fmt(price.price) + " 价值点") + '</b>' +
    '<br><span class="muted">' + price.note + '</span>';

  const list = $("#dealItems");
  list.innerHTML = "";
  const ids = Object.keys(state.inv);
  if (!ids.length) list.innerHTML = '<div class="empty">仓库空空，快去进货！</div>';
  ids.forEach(id => {
    const it = ITEMS[id];
    const match = it.tags.some(t => c.need.includes(t));
    const el = document.createElement("div");
    el.className = "goods" + (match ? "" : " dim");
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + (state.inv[id] > 1 ? ' ×' + state.inv[id] : '') + '</span>' +
      '<span class="g-val">' + fmt(it.value) + ' 点</span>' +
      '<button class="btn small ' + (deal.picked.includes(id) ? 'primary' : (match ? '' : 'ghost')) + '">' +
      (deal.picked.includes(id) ? "✓ 已选" : (match ? "展示" : "不合意念")) + '</button>';
    el.querySelector("button").onclick = () => togglePick(id);
    list.appendChild(el);
  });
}

/* ---------------- 位面采购弹窗 ---------------- */

function renderTrip(eventDone) {
  if (!trip) return;
  const w = WORLDS[trip.world];
  $("#tripTitle").textContent = "位面采购 · " + w.name;

  if (eventDone) {
    $("#tripDay").textContent = "第 " + Math.min(trip.day, 3) + " 天 · 事件结算";
    $("#tripBody").innerHTML = '<div class="trip-event"><p class="trip-text">' + trip.lastText + '</p>' +
      '<button id="tripNext" class="btn primary">' + (trip.day >= 3 ? "收队回现代" : "继续行商") + '</button></div>';
    $("#tripNext").onclick = afterEventNext;
    return;
  }

  $("#tripDay").textContent = "第 " + trip.day + " 天 / 共 3 天 · 剩余采购令 " + state.tokens;
  const cands = tripCandidates();
  if (!cands.length) {
    $("#tripBody").innerHTML = '<div class="trip-event"><p class="trip-text">这一带你已经搜刮干净了，找不到新的机会。收队回现代吧。</p>' +
      '<button id="tripNext" class="btn primary">提前收队</button></div>';
    $("#tripNext").onclick = endTrip;
    return;
  }
  trip.currentEventId = null;
  const body = $("#tripBody");
  body.innerHTML = "";
  cands.forEach(e => {
    const card = document.createElement("div");
    card.className = "trip-event";
    card.innerHTML = '<h4>' + (e.story ? "⭐ " : "📍 ") + e.title + '</h4><p class="trip-text">' + e.text + '</p><div class="trip-opts"></div>';
    const opts = card.querySelector(".trip-opts");
    e.options.forEach((opt, oi) => {
      if (opt.cond && !opt.cond(state)) return;
      const b = document.createElement("button");
      b.className = "btn";
      let label = opt.label;
      if (opt.risk) label += "（风险·成功率 " + Math.round(optRiskChance(opt) * 100) + "%）";
      if (opt.cost) label += "（-" + fmt(opt.cost) + " 华夏币）";
      b.textContent = label;
      b.onclick = () => chooseOption(e.id, oi);
      opts.appendChild(b);
    });
    body.appendChild(card);
  });
}

/* ---------------- 标签页 ---------------- */

function switchTab(name) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelector('.tab[data-tab="' + name + '"]').classList.add("active");
  document.querySelector('.panel[data-panel="' + name + '"]').classList.add("active");
}

/* ---------------- 主循环 ---------------- */

function tick() {
  const now = Date.now();
  /* 采购令回复 */
  if (state.tokens < tokenCap()) {
    if (!state.tokenNext) state.tokenNext = now + TOKEN_REGEN_MS;
    if (now >= state.tokenNext) {
      state.tokens++;
      state.tokenNext = state.tokens >= tokenCap() ? 0 : now + TOKEN_REGEN_MS;
      ding("系统冷却完毕，采购令 +1（" + state.tokens + "/" + tokenCap() + "）");
    }
  }
  /* 客户到访 */
  if (state.intro && now >= state.nextSpawnAt) {
    spawnCustomer();
    state.nextSpawnAt = now + spawnInterval() * (0.7 + Math.random() * 0.6);
  }
  renderLobby();
  if (now % 10000 < 1100) { save(); renderRes(); }
}

/* ---------------- 初始化 ---------------- */

function init() {
  load();
  $("#greetBtn").onclick = greetBtn;
  document.querySelectorAll(".tab").forEach(t => t.onclick = () => switchTab(t.dataset.tab));
  $("#dealConfirm").onclick = confirmDeal;
  $("#dealCancel").onclick = () => { closeModal("dealModal"); deal = null; };
  $("#introBtn").onclick = nextIntro;
  $("#endClose").onclick = () => closeModal("endModal");
  $("#resetBtn").onclick = () => {
    if (confirm("确定要重新开店吗？当前存档将被删除。")) {
      localStorage.removeItem(SAVE_KEY);
      state = freshState();
      trip = null; deal = null;
      $("#endModal").classList.remove("open");
      renderAll();
      showIntro();
    }
  };

  renderAll();
  if (!state.intro) showIntro();
  setInterval(tick, 1000);
  window.addEventListener("beforeunload", save);
}

document.addEventListener("DOMContentLoaded", init);
