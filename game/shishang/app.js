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
const GRADE_PTS = { 1: 0.5, 2: 1, 3: 1.5, 4: 2, 5: 3 };

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
    workers: {},
    orders: [],
    randomQueue: [],
    shelf: [],
    soldOnce: {},
    choice5: false,
    choiceOffered: false,
    upgradeOffered: {},
    stats: { trades: 0, servedGoku: 0, totalVp: 0, auctions: 0, known: {}, worldTrips: { shaDiao: 0, xiaoao: 0, longzhu: 0, sanguo: 0, yitian: 0 } },
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
      /* 防御：过滤坏数据 */
      state.randomQueue = (state.randomQueue || []).filter(x => x && x.rid);
      state.orders = (state.orders || []).filter(o => o && o.id);
      state.shelf = (state.shelf || []).filter(l => l && l.id && ITEMS[l.id]);
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
  let m = 1 + realmIndex() * 0.04 + (state.shopLevel - 1) * 0.1;
  if (state.workers && state.workers.fanli) m += 0.08;
  return Math.min(m, 2.2);
}

function countItem(id) { return state.inv[id] || 0; }
function invCap() { return 200 + state.shopLevel * 100; }
function invUsed() { return Object.values(state.inv).reduce((a, b) => a + b, 0); }
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

function tokenCap() { return 3 + (state.shopLevel - 1) * 2; }
function spawnInterval() {
  let ms = SPAWN_BASE_MS - state.shopLevel * 3000 - Math.min(realmIndex() * 2000, 15000);
  if (state.workers && state.workers.shenwansan) ms *= 0.7;
  return Math.max(ms, 15000);
}

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
    case 9: return (s.stats.auctions || 0) >= 1;
    case 10: return s.shopLevel >= 3;
    case 11: return !!s.storyDone["zhushen:yujian"];
    case 12: return WORKERS_EVER(s);
    case 13: return s.shopLevel >= 4;
    case 14: return ["mumu", "yanjiang", "shuangshuang", "xianxian"].some(id => s.stats.known[id]);
    case 15: return s.shopLevel >= 5;
    case 16: return !!s.storyDone["zhetian:jiulong"];
    case 17: return s.shopLevel >= 6;
    default: return s.quests[i] && s.quests[i].done;
  }
}

function WORKERS_EVER(s) { return Object.keys(WORKERS).every(id => s.workers[id]); }

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

/* ---------------- 随机NPC（世界偏好）---------------- */

let randomSeq = 0;
function makeRandomNPC() {
  const groups = RANDOM_GROUPS.filter(g => g.unlock(state));
  if (!groups.length) return null;
  const g = pick(groups);
  const budget = Math.round((g.budget[0] + Math.random() * (g.budget[1] - g.budget[0])) * (1 + realmIndex() * 0.04));
  return {
    rnd: true,
    rid: "rnd_" + (++randomSeq) + "_" + Date.now(),
    name: pick(RANDOM_SURNAMES) + pick(g.names),
    world: g.name,
    emoji: pick(g.emoji),
    pref: g.pref.slice(),
    budget: Math.max(10, budget),
    main: false,
    soldOnce: {},
    intro: "听闻万界楼货通万界，特来进点货。",
  };
}

function spawnRandomNPC() {
  if (state.customers.length + (state.randomQueue || []).length >= MAX_QUEUE) return false;
  const npc = makeRandomNPC();
  if (!npc) return false;
  state.randomQueue = state.randomQueue || [];
  state.randomQueue.push(npc);
  ding(npc.name + "（" + npc.world + "）走进了万界楼！");
  pushLog("🚪 " + npc.name + "（" + npc.world + "）到访。");
  return true;
}

/* 限购规则：功法/武器/奇物/现代物品 每位NPC限购1份 */
function dealNpcKey() { return deal.rnd ? deal.rnd.rid : deal.cid; }
function hasBoughtOnce(itemId) {
  if (!ITEMS[itemId] || !ITEMS[itemId].once) return false;
  if (deal.rnd) return !!deal.rnd.soldOnce[itemId];
  const rec = state.soldOnce[dealNpcKey()];
  return !!(rec && rec[itemId]);
}
function markBoughtOnce(itemId) {
  if (!ITEMS[itemId] || !ITEMS[itemId].once) return;
  if (deal.rnd) { deal.rnd.soldOnce[itemId] = true; return; }
  const k = dealNpcKey();
  if (!state.soldOnce[k]) state.soldOnce[k] = {};
  state.soldOnce[k][itemId] = true;
}
/* 功法拥有一份即可无限售卖，售出不扣库存 */
function consumeSold(id) {
  if (ITEMS[id] && ITEMS[id].cat === "gongfa") return;
  removeItem(id, 1);
}
/* 偏好定价：非偏好分类半价 */
function prefMultOf(pref, itemId) {
  return (pref || []).includes(ITEMS[itemId].cat) ? 1 : 0.5;
}

function spawnCustomer() {
  const total = state.customers.length + (state.randomQueue || []).length;
  if (total >= MAX_QUEUE) return;
  /* 二星起，四成概率来的是随机散客（遵循世界偏好与限购规则） */
  if (state.shopLevel >= 2 && roll(0.4)) {
    if (spawnRandomNPC()) renderLobby();
    return;
  }
  const pool = eligibleCustomers().filter(p => !state.customers.includes(p));
  if (!pool.length) {
    if (spawnRandomNPC()) renderLobby();
    return;
  }
  const id = pick(pool);
  state.customers.push(id);
  ding(CUSTOMERS[id].name + " 破空而来，走进了万界楼！");
  pushLog("🚪 " + CUSTOMERS[id].name + " 到访万界楼。");
  renderLobby();
}

function greetBtn() {
  const now = Date.now();
  if (now < greetReadyAt) { toast("系统正在捕捉位面意念，请稍候…"); return; }
  if (state.customers.length + (state.randomQueue || []).length >= MAX_QUEUE) { toast("大堂已经客满啦！"); return; }
  greetReadyAt = now + 20000;
  spawnCustomer();
  renderLobby();
}

function startDeal(cid) {
  deal = { cid, picked: [] };
  renderDeal();
  $("#dealModal").classList.add("open");
}

function startDealRnd(rid) {
  const npc = (state.randomQueue || []).find(x => x.rid === rid);
  if (!npc) return;
  deal = { rnd: npc, picked: [] };
  renderDeal();
  $("#dealModal").classList.add("open");
}

function dealData() {
  if (deal.rnd) return { c: deal.rnd, isFirst: false };
  const c = CUSTOMERS[deal.cid];
  const isFirst = !!c.first && !state.firstTrades[deal.cid];
  return { c, isFirst };
}

function dealNeedTags() {
  if (deal.order) return [deal.order.tag];
  if (deal.rnd) return [];
  const { c } = dealData();
  return c.need || [];
}

function togglePick(itemId) {
  const need = dealNeedTags();
  const it = ITEMS[itemId];
  if (hasBoughtOnce(itemId)) { toast("这位客人已经买过「" + it.name + "」了，同款限购一份。"); return; }
  if (!it.tags.some(t => need.includes(t)) && !deal.rnd) { toast("客户对这类商品没有意念需求。"); return; }
  const idx = deal.picked.indexOf(itemId);
  if (idx >= 0) deal.picked.splice(idx, 1);
  else {
    if (deal.picked.length >= 3) { toast("一次最多展示 3 件商品。"); return; }
    deal.picked.push(itemId);
  }
  renderDeal();
}

function dealPrice() {
  if (deal.order) {
    const sum = deal.picked.reduce((a, id) => a + ITEMS[id].value, 0);
    return { price: Math.round(sum * 2.2), note: "快递通道以物易物：报酬 = 商品价值 ×2.2" };
  }
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
  const prefNote = [];
  const sum = deal.picked.reduce((a, id) => {
    const mult = prefMultOf(c.pref, id);
    if (mult < 1) prefNote.push(ITEMS[id].name + "（非偏好半价）");
    return a + ITEMS[id].value * mult;
  }, 0);
  const price = Math.min(Math.round(sum * m), c.budget);
  return { price, loved, note: (loved ? "客户挚爱加价！" : "议价系数 ×" + m.toFixed(2)) + (prefNote.length ? "　" + prefNote.join("、") : "") };
}

function confirmDeal() {
  if (deal.order) { fulfillOrder(); return; }
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
    deal.picked.forEach(id => { consumeSold(id); markBoughtOnce(id); });
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

  if (deal.rnd) state.randomQueue = (state.randomQueue || []).filter(x => x.rid !== deal.rnd.rid);
  else state.customers = state.customers.filter(x => x !== deal.cid);
  checkQuests();
  closeModal("dealModal");
  deal = null;
  save();
  renderAll();
}

/* ---------------- 现代采购 / 拍卖 ---------------- */

function buyModern(id, qty) {
  qty = Math.max(1, Math.min(999, Math.floor(qty || 1)));
  const it = ITEMS[id];
  const unit = state.workers && state.workers.buma ? Math.ceil(it.cost / 2) : it.cost;
  const cost = unit * qty;
  if (state.cny < cost) { toast("华夏币不足（共需 " + fmt(cost) + "）。"); return; }
  if (invUsed() + qty > invCap()) { toast("背包已满（容量 " + invCap() + "），先清点库存吧。"); return; }
  state.cny -= cost;
  addItem(id, qty);
  pushLog("🛒 现代采购：" + it.name + " ×" + qty + "（-" + fmt(cost) + " 华夏币）");
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
  $("#endTitle").textContent = "二星店主 · 万界楼初具规模";
  $("#endText").innerHTML = "巍巍楼阁拔地而起，鎏金大字「万界楼」高悬正门。<br>" +
    "系统提示：「宿体晋升二星店主，解锁：顾客价值知情权、店主打折权、更快的客流量与更高采购权限。」<br><br>" +
    "——但这只是开始。虚空之中，一座万界商城正在凝聚；万界拍卖会的请帖即将发出……<br>" +
    "<b>继续经营，直至六星，商通万界！</b>";
  $("#endModal").classList.add("open");
  save();
}

function showEndingSix() {
  $("#endTitle").textContent = "六星店主 · 万道盟约";
  $("#endText").innerHTML = "六层楼阁直入云霄，天晶悬于顶层，紫光流转。<br>" +
    "系统提示：「六星店主权限已全部开启：回收六成、利润八分之一、万界连通诸天、时间加速。」<br><br>" +
    "石昊在喝兽奶，叶凡签了投资人契约，菩提祖师的论道场场爆满；太古人族排队订购周天星斗大阵……<br>" +
    "下一个台阶是<b>七星</b>：回收七成、按月利润结算、万界楼的真正权柄。<br>" +
    "——商通万界，让所有人给我打工。<b>万界楼的传奇，未完待续。你可以继续自由经营。</b>";
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

/* ---------------- 星级升级（三~六星）---------------- */

function starMet(level) {
  const c = STAR_CONDITIONS[level];
  if (!c) return false;
  if (distinctItems() < c.known || state.stats.trades < c.trades) return false;
  if (c.story && !state.storyDone[c.story]) return false;
  if (c.choice && !state.choice5) return false;
  return true;
}

function starCondText(level) {
  const c = STAR_CONDITIONS[level];
  let t = "累计上架 " + c.known + " 种商品、完成 " + c.trades + " 笔交易";
  if (c.story) t += "，并完成对应剧情";
  if (c.choice) t += "，并与系统摊牌";
  return t;
}

function maybeOfferUpgrade() {
  const next = state.shopLevel + 1;
  if (!STAR_CONDITIONS[next] || state.shopLevel >= 6) return;
  if (next === 5 && !state.choice5) {
    /* 五星：先触发系统摊牌 */
    if (distinctItems() >= STAR_CONDITIONS[5].known && state.stats.trades >= STAR_CONDITIONS[5].trades && !state.choiceOffered) {
      state.choiceOffered = true;
      showChoice5();
    }
    return;
  }
  if (starMet(next) && !state.upgradeOffered[next]) {
    state.upgradeOffered[next] = true;
    $("#starTitle").textContent = "「叮咚！系统满足升级需求」";
    $("#starText").innerHTML = "万界楼商品已经满足系统需求。<br><br>升级条件：" + starCondText(next) + " —— <b>已全部达成！</b><br>是否现在升级？";
    $("#starYes").textContent = "立即升级（" + next + " 星）";
    $("#starModal").classList.add("open");
    save();
  }
}

function applyStarUpgrade() {
  const next = state.shopLevel + 1;
  if (!STAR_CONDITIONS[next] || state.shopLevel >= 6) return;
  if (!starMet(next)) { toast("升级条件尚未达成：" + starCondText(next)); return; }
  state.shopLevel = next;
  $("#starModal").classList.remove("open");
  pushLog("🌟 万界楼升级！" + SHOP_LEVELS[next].name);
  $("#starTitle").textContent = next + " 星店主 · " + SHOP_LEVELS[next].name;
  $("#starText").innerHTML = STAR_PERKS[next] + "<br><br>" + SHOP_LEVELS[next].desc;
  $("#starYes").textContent = "继续经营";
  $("#starYes").onclick = () => { $("#starModal").classList.remove("open"); if (next === 6) showEndingSix(); };
  $("#starModal").classList.add("open");
  state.tokens = Math.min(state.tokens + 2, tokenCap() + 2);
  checkQuests();
  save();
  renderAll();
}

function showChoice5() {
  $("#choiceModal").classList.add("open");
}
function makeChoice5(keep) {
  state.choice5 = true;
  $("#choiceModal").classList.remove("open");
  if (keep) {
    pushLog("💜 你把手放上了紫色光团——「叮咚！升级成功！」本性未失，你就是万界商铺系统的宿主。");
    ding("系统：「很好。万界商铺系统的宿主，必须是一个拥有喜怒哀乐的人。」");
  } else {
    pushLog("📜 你险些把系统移交给陈峰……最终系统判定：'装的也算！'——叮咚！升级成功。");
    ding("系统：「选择的方式，会稍稍改变。」");
  }
  save();
  maybeOfferUpgrade();
  renderAll();
}

/* ---------------- 万界拍卖会（二星解锁）---------------- */

let auctionSession = null;
let auctionReadyAt = 0;

function auctionPrice(id) {
  const it = ITEMS[id];
  const mult = 2.2 + Math.random() * 2.5 + state.shopLevel * 0.25 + (state.workers && state.workers.micu ? 0.15 : 0);
  return Math.max(1, Math.round(it.value * mult));
}

function startAuction() {
  const now = Date.now();
  if (state.shopLevel < 2) { toast("二星店主后才能举办拍卖会。"); return; }
  if (now < auctionReadyAt) { toast("拍卖场还在打扫，请稍候…"); return; }
  const ids = Object.keys(state.inv).filter(id => state.inv[id] > 0);
  if (!ids.length) { toast("仓库空空，无物可拍！"); return; }
  auctionReadyAt = now + 300000;
  const pool = ids.slice().sort(() => Math.random() - 0.5);
  auctionSession = { lots: pool.slice(0, 4), idx: 0, gained: 0, log: [] };
  $("#auctionModal").classList.add("open");
  renderAuction();
}

function renderAuction() {
  if (!auctionSession) return;
  const box = $("#auctionBody");
  if (auctionSession.idx >= auctionSession.lots.length) {
    box.innerHTML = '<div class="trip-event"><p class="trip-text">本届拍卖会落幕！共入账 <b>' + fmt(auctionSession.gained) + ' 价值点</b>。台下观众的欢呼声经久不息。</p>' +
      '<button id="auctionNext" class="btn primary">送客收摊</button></div>';
    $("#auctionNext").onclick = () => { $("#auctionModal").classList.remove("open"); auctionSession = null; save(); renderAll(); };
    return;
  }
  const id = auctionSession.lots[auctionSession.idx];
  const it = ITEMS[id];
  box.innerHTML = '<p class="muted">第 ' + (auctionSession.idx + 1) + " / " + auctionSession.lots.length + ' 件拍品 · 糜竺执锤，万界直播</p>' +
    '<div class="trip-event"><h4>' + it.emoji + " " + it.name + '</h4><p class="trip-text">' + it.desc + '<br>系统底价：<b>' + fmt(it.value) + ' 价值点</b>（品相极佳，溢价空间巨大）</p>' +
    '<div class="trip-opts"><button id="auctionHammer" class="btn primary">一锤定音！</button>' +
    '<button id="auctionPass" class="btn ghost">流拍，下一件</button></div></div>' +
    '<div class="logs">' + auctionSession.log.map(l => '<div class="logline">' + l + '</div>').join("") + '</div>';
  $("#auctionHammer").onclick = auctionHammer;
  $("#auctionPass").onclick = auctionPass;
}

function auctionHammer() {
  if (!auctionSession) return;
  const id = auctionSession.lots[auctionSession.idx];
  if (countItem(id) < 1) { auctionSession.idx++; renderAuction(); return; }
  const it = ITEMS[id];
  const price = auctionPrice(id);
  const buyer = pick(AUCTION_BUYERS[Math.min(6, Math.max(2, state.shopLevel))] || AUCTION_BUYERS[2]);
  let line = "🔨 「" + it.name + "」由 <b>" + buyer + "</b> 以 " + fmt(price) + " 价值点拍得！";
  if (roll(0.25)) line += " 场面：" + pick(AUCTION_EVENTS);
  consumeSold(id);
  state.vp += price;
  state.stats.totalVp += price;
  state.stats.auctions++;
  auctionSession.gained += price;
  auctionSession.log.unshift(line);
  auctionSession.idx++;
  checkQuests();
  save();
  renderAuction();
}

function auctionPass() {
  if (!auctionSession) return;
  auctionSession.log.unshift("⏭️ 第 " + (auctionSession.idx + 1) + " 件拍品流拍，台下嘘声一片。");
  auctionSession.idx++;
  renderAuction();
}

/* ---------------- 员工（位面代理人，三星解锁）---------------- */

function hireWorker(id) {
  const w = WORKERS[id];
  if (state.workers[id]) return;
  if (state.shopLevel < 3) { toast("三星店主后才能招募位面代理人。"); return; }
  if (state.vp < w.cost) { toast("价值点不足（还差 " + fmt(w.cost - state.vp) + "）。"); return; }
  state.vp -= w.cost;
  state.workers[id] = true;
  pushLog("🤝 位面代理人入职：" + w.name + "（-" + fmt(w.cost) + " 价值点）");
  toast(w.name + " 入职万界楼！", true);
  checkQuests();
  save(); renderAll();
}

function renderStaff() {
  const box = $("#staffList");
  if (!box) return;
  box.innerHTML = "";
  Object.keys(WORKERS).forEach(id => {
    const w = WORKERS[id];
    const hired = !!state.workers[id];
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + w.emoji + '</span>' +
      '<span class="g-name">' + w.name + ' <em class="studied">' + (hired ? "在职" : "待聘") + '</em></span>' +
      '<span class="g-val">' + w.desc + '</span>' +
      '<button class="btn small ' + (hired ? "ghost" : "primary") + '">' + (hired ? "已入职" : "招募 " + fmt(w.cost) + " 点") + '</button>';
    el.querySelector("button").onclick = () => hireWorker(id);
    box.appendChild(el);
  });
}

/* ---------------- 快递通道（四星解锁）---------------- */

const ORDER_FROMS = {
  4: ["苍穹大世界 · 萧焱", "斗气大陆 · 匿名强者", "诛仙 · 鬼王宗", "风云 · 天下会"],
  5: ["遮天 · 姜家", "武动乾坤 · 林动", "白蛇传 · 钱塘商会", "漫威 · 神盾局"],
  6: ["完美世界 · 石村", "飞升之后 · 太古人族", "神墓 · 灭天联军", "西游 · 自由者联盟"],
};

function spawnOrder() {
  if (state.shopLevel < 4) return;
  if (state.orders.length >= 2) return;
  const tags = ["丹药", "秘籍", "神兵", "奇物", "美酒", "食物", "珍宝"];
  const froms = ORDER_FROMS[Math.min(6, state.shopLevel)] || ORDER_FROMS[4];
  state.orders.push({
    id: "ord_" + Date.now() + "_" + Math.floor(Math.random() * 999),
    tag: pick(tags),
    from: pick(froms),
  });
}

function startDealOrder(oid) {
  const order = state.orders.find(o => o.id === oid);
  if (!order) return;
  deal = { cid: null, order, picked: [] };
  renderDeal();
  $("#dealModal").classList.add("open");
}

function fulfillOrder() {
  const order = deal.order;
  if (!deal.picked.length) { toast("至少要附上一件商品。"); return; }
  const sum = deal.picked.reduce((a, id) => a + ITEMS[id].value, 0);
  const pay = Math.round(sum * 2.2);
  deal.picked.forEach(id => consumeSold(id));
  state.vp += pay;
  state.stats.totalVp += pay;
  state.stats.trades++;
  state.orders = state.orders.filter(o => o.id !== order.id);
  pushLog("📦 快递通道：来自 " + order.from + " 的订单成交（" + deal.picked.map(id => ITEMS[id].name).join("、") + "），+" + fmt(pay) + " 价值点。");
  toast("订单送达！价值点 +" + fmt(pay), true);
  state.customers = state.customers.filter(x => x !== deal.cid);
  checkQuests();
  closeModal("dealModal");
  deal = null;
  save();
  renderAll();
}

function declineOrder(oid) {
  state.orders = state.orders.filter(o => o.id !== oid);
  pushLog("📦 拒收了一笔快递订单。");
  save(); renderAll();
}

/* ---------------- 时间加速（六星权限）---------------- */

let accelReadyAt = 0;

function accelerate() {
  if (state.shopLevel < 6) { toast("六星店主的权限。"); return; }
  const now = Date.now();
  if (now < accelReadyAt) { toast("系统正在恢复时间权限，请稍候…"); return; }
  accelReadyAt = now + 300000;
  state.tokens = tokenCap();
  for (let i = 0; i < 3; i++) spawnCustomer();
  pushLog("⏳ 时间加速发动：一年光阴转瞬即逝，采购令回满，客户盈门。");
  toast("⏳ 时间加速：一年时光，弹指而过！", true);
  save(); renderAll();
}

/* ---------------- 万界货架（三星解锁的自动交易）---------------- */

let shelfNextAt = 0;

function shelfUnlocked() { return state.shopLevel >= SHELF_CONFIG.unlockLevel; }

function shelfChance(l) {
  const it = ITEMS[l.id];
  const ratio = l.price / Math.max(it.value, 1);
  return Math.max(0.03, Math.min(0.9,
    ratio <= 1 ? SHELF_CONFIG.baseChance - (1 - ratio) * 0.3 : SHELF_CONFIG.baseChance * Math.pow(ratio, -2)));
}

function shelfTick() {
  if (!shelfUnlocked() || !state.shelf.length) return;
  const now = Date.now();
  if (!shelfNextAt) shelfNextAt = now + SHELF_CONFIG.tickMs;
  if (now < shelfNextAt) return;
  shelfNextAt = now + SHELF_CONFIG.tickMs;
  let sold = 0;
  state.shelf.forEach(l => {
    if (ITEMS[l.id].cat !== "gongfa" && countItem(l.id) < 1) return;
    const groups = RANDOM_GROUPS.filter(g => g.unlock(state) && g.pref.includes(l.cat));
    if (!groups.length) return;
    const g = pick(groups);
    const buyerBudget = Math.round(g.budget[0] + Math.random() * (g.budget[1] - g.budget[0]));
    if (l.price > buyerBudget * 1.2) return; /* 定价过高，客人看一眼就走 */
    if (!roll(shelfChance(l))) return;
    const buyer = pick(RANDOM_SURNAMES) + pick(g.names);
    consumeSold(l.id);
    state.vp += l.price;
    state.stats.totalVp += l.price;
    state.stats.trades++;
    l.sold = (l.sold || 0) + 1;
    sold++;
    pushLog("🏷️ 货架：「" + ITEMS[l.id].name + "」被 " + buyer + "（" + g.name + "）以 " + fmt(l.price) + " 价值点买走。");
  });
  if (sold) {
    toast("🏷️ 货架自动售出 " + sold + " 件商品！", true);
    checkQuests();
    save();
    renderRes();
    if (!document.activeElement || document.activeElement.tagName !== "INPUT") renderShelf();
  }
}

function renderShelf() {
  const box = $("#shelfList");
  if (!box) return;
  const lockEl = $("#shelfLock");
  if (lockEl) lockEl.style.display = shelfUnlocked() ? "none" : "";
  box.innerHTML = "";
  if (!shelfUnlocked()) return;
  state.shelf.forEach((l, i) => {
    const it = ITEMS[l.id];
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + ' <span class="tagchip">' + (CATS[l.cat] ? CATS[l.cat].name : l.cat) + '</span> <em class="studied">已售 ' + (l.sold || 0) + (it.cat === "gongfa" ? "（无限售）" : "") + '</em></span>' +
      '<span class="g-val">定价 <input class="qty shelfprice" type="number" min="1" value="' + l.price + '" /> 点（估价 ' + fmt(it.value) + '）</span>' +
      '<button class="btn small ghost">下架</button>';
    const priceInput = el.querySelector(".shelfprice");
    priceInput.onchange = () => { l.price = Math.max(1, parseInt(priceInput.value, 10) || it.value); save(); };
    el.querySelector("button").onclick = () => { state.shelf.splice(i, 1); save(); renderShelf(); };
    box.appendChild(el);
  });
  if (state.shelf.length < SHELF_CONFIG.slots) {
    const el = document.createElement("div");
    el.className = "goods shelfnew";
    const opts = Object.keys(state.inv).map(id =>
      '<option value="' + id + '">' + ITEMS[id].emoji + " " + ITEMS[id].name + (ITEMS[id].cat === "gongfa" ? "（无限售）" : " ×" + state.inv[id]) + '</option>').join("");
    const catOpts = Object.keys(CATS).map(k => '<option value="' + k + '">' + CATS[k].name + '</option>').join("");
    el.innerHTML = '<span class="g-emoji">🏷️</span>' +
      '<span class="g-name">空位 ' + (state.shelf.length + 1) + '/' + SHELF_CONFIG.slots + '</span>' +
      '<select class="shelfitem">' + (opts || '<option value="">（仓库空空）</option>') + '</select>' +
      '<select class="shelfcat">' + catOpts + '</select>' +
      '<input class="qty shelfprice" type="number" min="1" placeholder="定价" />' +
      '<button class="btn small primary">上架</button>';
    const sel = el.querySelector(".shelfitem");
    const catSel = el.querySelector(".shelfcat");
    const priceInput = el.querySelector(".shelfprice");
    const syncPrice = () => { if (sel.value && ITEMS[sel.value]) priceInput.value = ITEMS[sel.value].value; };
    if (sel.value) syncPrice();
    sel.onchange = () => { syncPrice(); if (ITEMS[sel.value]) catSel.value = ITEMS[sel.value].cat; };
    el.querySelector("button").onclick = () => {
      const id = sel.value;
      if (!id || (!countItem(id) && ITEMS[id].cat !== "gongfa")) { toast("请选择库存中的商品。"); return; }
      if (state.shelf.some(x => x.id === id)) { toast("该商品已上架。"); return; }
      const price = Math.max(1, parseInt(priceInput.value, 10) || ITEMS[id].value);
      state.shelf.push({ id, price, cat: catSel.value, sold: 0 });
      pushLog("🏷️ 上架「" + ITEMS[id].name + "」，定价 " + fmt(price) + "，目标客群：" + (CATS[catSel.value] ? CATS[catSel.value].name : catSel.value) + "。");
      save(); renderShelf();
    };
    box.appendChild(el);
  } else {
    const el = document.createElement("div");
    el.className = "empty";
    el.textContent = "货架已满（" + SHELF_CONFIG.slots + " 位），下架商品可腾出货位。";
    box.appendChild(el);
  }
}

/* ---------------- 渲染 ---------------- */

function renderAll() {
  renderRes();
  renderLobby();
  renderStore();
  renderStudy();
  renderPlane();
  renderQuests();
  renderStaff();
  renderShelf();
}

function renderRes() {
  $("#rVp").textContent = fmt(state.vp);
  $("#rCny").textContent = fmt(state.cny);
  $("#rRealm").textContent = realmName();
  $("#rShop").textContent = state.shopLevel >= 2 ? state.shopLevel + " 星店主" : "一星店主";
  $("#rItems").textContent = distinctItems();
  $("#rTrades").textContent = state.stats.trades;
  $("#rTokens").textContent = state.tokens + " / " + tokenCap();
  const lv = SHOP_LEVELS[state.shopLevel] || SHOP_LEVELS[1];
  $("#shopName").textContent = lv.name;
  $("#shopDesc").textContent = lv.desc;
  $("#shopEmoji").textContent = lv.emoji;
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
  /* 快递通道订单 */
  state.orders.forEach(o => {
    const card = document.createElement("div");
    card.className = "customer order";
    card.innerHTML =
      '<div class="c-avatar">📦</div>' +
      '<div class="c-info"><b>快递通道 · 订单</b><span class="c-world">' + o.from + '</span>' +
      '<p class="c-quote">“万界信息平台下单：需要「' + o.tag + '」类商品，以物易物，报酬翻倍。”</p>' +
      '<div class="c-need">订单需求：<span class="tagchip">' + o.tag + '</span></div></div>' +
      '<button class="btn primary">接单</button>';
    card.querySelector("button").onclick = () => startDealOrder(o.id);
    box.appendChild(card);
  });
  /* 随机散客 */
  (state.randomQueue || []).forEach(npc => {
    const card = document.createElement("div");
    card.className = "customer random";
    card.innerHTML =
      '<div class="c-avatar">' + npc.emoji + '</div>' +
      '<div class="c-info"><b>' + npc.name + '</b><span class="c-world">' + npc.world + ' · 随机散客</span>' +
      '<p class="c-quote">“' + npc.intro + '”</p>' +
      '<div class="c-need">偏好：' + npc.pref.map(t => '<span class="tagchip">' + (CATS[t] ? CATS[t].name : t) + '</span>').join("") +
      ' <span class="tagchip">预算 ' + fmt(npc.budget) + ' 点</span></div></div>' +
      '<button class="btn primary">接待</button>';
    card.querySelector("button").onclick = () => startDealRnd(npc.rid);
    box.appendChild(card);
  });
}

let uiCat = "all";

function renderStore() {
  /* 容量 */
  const capEl = $("#invCap");
  if (capEl) capEl.textContent = "背包 " + invUsed() + " / " + invCap() + "（随星级提升）";

  /* 分类筛选 */
  const chips = $("#catFilter");
  if (chips) {
    chips.innerHTML = "";
    const mkChip = (key, label) => {
      const b = document.createElement("button");
      b.className = "chip" + (uiCat === key ? " on" : "");
      b.textContent = label;
      b.onclick = () => { uiCat = key; renderStore(); };
      chips.appendChild(b);
    };
    mkChip("all", "全部");
    Object.keys(CATS).forEach(k => mkChip(k, CATS[k].emoji + " " + CATS[k].name));
  }

  /* 现代采购（含数量框） */
  const buy = $("#buyList");
  buy.innerHTML = "";
  SHOP_GOODS.forEach(id => {
    const it = ITEMS[id];
    const el = document.createElement("div");
    el.className = "goods";
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + ' <span class="tagchip">' + (CATS[it.cat] ? CATS[it.cat].name : "") + '</span></span>' +
      '<span class="g-val">' + fmt(it.value) + ' 点</span>' +
      '<input class="qty" type="number" min="1" max="99" value="1" />' +
      '<button class="btn small">🧧 ' + fmt(state.workers && state.workers.buma ? Math.ceil(it.cost / 2) : it.cost) + '</button>';
    el.querySelector("button").onclick = () => {
      const q = parseInt(el.querySelector(".qty").value, 10) || 1;
      buyModern(id, q);
    };
    buy.appendChild(el);
  });

  /* 库存（分类筛选） */
  const inv = $("#invList");
  inv.innerHTML = "";
  const ids = Object.keys(state.inv).filter(id => uiCat === "all" || ITEMS[id].cat === uiCat);
  if (!ids.length) inv.innerHTML = '<div class="empty">' + (Object.keys(state.inv).length ? "该分类下没有物品。" : "仓库空空。去「现代采购」进货，或去「位面」淘宝！") + '</div>';
  ids.forEach(id => {
    const it = ITEMS[id];
    const st = state.studied[id] || 0;
    const el = document.createElement("div");
    el.className = "goods";
    const stockLabel = it.cat === "gongfa" ? "已收录（可无限售）" : "×" + state.inv[id];
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + ' <span class="tagchip">' + (CATS[it.cat] ? CATS[it.cat].name : "") + '</span>' +
      ' <em class="studied">' + stockLabel + (st ? ' · 已修' + st + '/' + it.lvls + '重' : '') + '</em></span>' +
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
  /* 时间加速（六星权限） */
  const accel = $("#accelBox");
  if (accel) {
    if (state.shopLevel >= 6) {
      const cd = Math.ceil((accelReadyAt - Date.now()) / 1000);
      accel.style.display = "";
      accel.innerHTML = '<h3>⏳ 时间加速（六星权限）</h3>' +
        '<p class="muted">指定一个连通的世界加速时光——游戏内效果：采购令立即回满，三位客户立即登门。冷却 5 分钟。</p>' +
        '<button id="accelBtn" class="btn primary">' + (cd > 0 ? "时间长河恢复中（" + cd + "s）" : "发动时间加速") + '</button>';
      const b = $("#accelBtn");
      if (b) { b.disabled = cd > 0; b.onclick = accelerate; }
    } else {
      accel.style.display = "none";
    }
  }
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
  if (deal.order) { renderDealOrder(); return; }
  const { c, isFirst } = dealData();
  $("#dealTitle").textContent = "接待 · " + c.name;
  const needList = c.need || [];
  const prefHtml = c.need
    ? c.need.map(t => '<span class="tagchip">' + t + '</span>').join("")
    : (c.pref || []).map(t => '<span class="tagchip">' + (CATS[t] ? CATS[t].name : t) + '</span>').join("");
  $("#dealInfo").innerHTML = '<span class="c-world">' + c.world + '</span>' +
    '<p class="c-quote">“' + c.intro + '”</p>' +
    '<div>' + (c.need ? "意念需求：" : "偏好分类：") + prefHtml +
    (isFirst ? ' <span class="tagchip story">剧情首单：以物易物</span>' : ' <span class="tagchip">预算 ' + fmt(c.budget) + ' 点</span>') +
    (c.main ? '' : ' <span class="tagchip story">功法/武器/奇物限购1份</span>') + '</div>';

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
    const match = deal.rnd ? c.pref.includes(it.cat) : needList.some(t => it.tags.includes(t));
    const bought = hasBoughtOnce(id);
    const mult = prefMultOf(c.pref, id);
    const catName = CATS[it.cat] ? CATS[it.cat].name : it.cat;
    const el = document.createElement("div");
    el.className = "goods" + (match || deal.rnd ? "" : " dim");
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + (state.inv[id] > 1 ? ' ×' + state.inv[id] : '') +
      (it.cat === "gongfa" && state.inv[id] ? ' <em class="studied">∞</em>' : '') +
      ' <span class="tagchip">' + catName + '</span>' + (mult < 1 ? ' <span class="tagchip story">非偏好半价</span>' : '') + '</span>' +
      '<span class="g-val">' + fmt(Math.round(it.value * mult)) + ' 点</span>' +
      '<button class="btn small ' + (deal.picked.includes(id) ? 'primary' : (match || deal.rnd ? '' : 'ghost')) + '" ' + (bought ? 'disabled' : '') + '>' +
      (bought ? "已购过" : (deal.picked.includes(id) ? "✓ 已选" : (match || deal.rnd ? "展示" : "不合意念"))) + '</button>';
    el.querySelector("button").onclick = () => togglePick(id);
    list.appendChild(el);
  });
}

function renderDealOrder() {
  const price = dealPrice();
  const list = $("#dealItems");
  $("#dealTitle").textContent = "📦 快递通道 · 订单";
  $("#dealInfo").innerHTML = '<span class="c-world">' + deal.order.from + '</span>' +
    '<p class="c-quote">“万界信息平台下单，报酬丰厚，售后包邮。”</p>' +
    '<div>订单需求：' + deal.order.tag.split("").map(t => '<span class="tagchip">' + t + '</span>').join("") + '</div>';
  $("#dealPrice").innerHTML = '已选 ' + deal.picked.length + ' 件：' +
    (deal.picked.map(id => ITEMS[id].name).join("、") || "——") +
    '<br><b>预计报酬：' + fmt(price.price) + ' 价值点</b>' +
    '<br><span class="muted">' + price.note + '</span>';
  list.innerHTML = "";
  const ids = Object.keys(state.inv);
  if (!ids.length) list.innerHTML = '<div class="empty">仓库空空，无法接单。</div>';
  ids.forEach(id => {
    const it = ITEMS[id];
    const match = it.tags.includes(deal.order.tag);
    const el = document.createElement("div");
    el.className = "goods" + (match ? "" : " dim");
    el.innerHTML = '<span class="g-emoji">' + it.emoji + '</span>' +
      '<span class="g-name">' + it.name + (state.inv[id] > 1 ? ' ×' + state.inv[id] : '') + '</span>' +
      '<span class="g-val">' + fmt(it.value) + ' 点</span>' +
      '<button class="btn small ' + (deal.picked.includes(id) ? 'primary' : (match ? '' : 'ghost')) + '">' +
      (deal.picked.includes(id) ? "✓ 已选" : (match ? "附上" : "不合订单")) + '</button>';
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
  /* 快递订单（四星+） */
  if (state.intro && state.shopLevel >= 4 && roll(0.004 * (state.workers && state.workers.shenwansan ? 1.8 : 1))) {
    spawnOrder();
    renderLobby();
    ding("📦 快递通道收到一笔新订单！");
  }
  /* 万界货架自动交易（三星+） */
  shelfTick();
  maybeOfferUpgrade();
  renderLobby();
  if (now % 10000 < 1100) { save(); renderRes(); }
}

/* ---------------- 初始化 ---------------- */

function init() {
  load();
  $("#greetBtn").onclick = greetBtn;
  $("#auctionBtn").onclick = startAuction;
  document.querySelectorAll(".tab").forEach(t => t.onclick = () => switchTab(t.dataset.tab));
  $("#dealConfirm").onclick = confirmDeal;
  $("#dealCancel").onclick = () => { closeModal("dealModal"); deal = null; };
  $("#introBtn").onclick = nextIntro;
  $("#endClose").onclick = () => closeModal("endModal");
  $("#starYes").onclick = applyStarUpgrade;
  $("#starNo").onclick = () => { $("#starModal").classList.remove("open"); state.upgradeOffered[state.shopLevel + 1] = false; };
  $("#choiceKeep").onclick = () => makeChoice5(true);
  $("#choiceLeave").onclick = () => makeChoice5(false);
  $("#resetBtn").onclick = () => {
    if (confirm("确定要重新开店吗？当前存档将被删除。")) {
      localStorage.removeItem(SAVE_KEY);
      state = freshState();
      trip = null; deal = null; auctionSession = null;
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
