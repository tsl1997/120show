/* ================================================================
   两界人生 · 核心引擎（纯逻辑，不依赖 DOM）
   依赖 data.js 中的全局：ITEMS NPCS SHOPS WORLDS HOUSES TICKETS
   ================================================================ */

/* ---------------- 工具 ---------------- */
function rand(a, b){ return Math.floor(a + Math.random()*(b-a+1)); }
function rndPrice(min,max){ return Math.round((min + Math.random()*(max-min))*100)/100; }
const fmtMoney = n => (Math.round(n*100)/100).toFixed(2);

function nowDay(){ return S.day; }
function dateOf(world){
  const base = world === "26" ? {y:2026,m:1,d:1} : {y:1980,m:1,d:1};
  let t = new Date(base.y, base.m-1, base.d);
  t.setDate(t.getDate() + S.day);
  return { y:t.getFullYear(), m:t.getMonth()+1, d:t.getDate(), week:t.getDay() };
}
function fmtDateOf(world){
  const d = dateOf(world);
  const w = ["日","一","二","三","四","五","六"][d.week];
  return d.y+"年"+d.m+"月"+d.d+"日 周"+w;
}
function today80(){ return dateOf("80"); }

/* ---------------- 初始状态 ---------------- */
function newState(){
  return {
    day:0, hour:6, minute:0, world:"26", loc:"home26",
    money: { "26":300 },
    hp:100, mood:80, charmBase:10, beautyBonus:0,
    capBonus:0, worn:null, wornDays:0, wornBroken:false,
    backpack:[], storage:{ "26":[], "80":[] },
    aff:{ "老王头":0,"王富贵":30,"虾仁":0,"张姨":0,"何雨柱":0,"李叔":0,"王大姐":0,"周奶奶":0,"孙悟空":0,"张一冇":0,"钱所长":0,"李清照":0,"李婶":0,"钱厂长":0,"钱老大爷":0 },
    wfLowStreak:0, blacklisted:false, pleadUsed:false,
    visits:{}, affDay:{}, stock:{}, lastRefresh:{},
    mealsToday:0, lastMealHour:-99,
    ateToday:false, diet:{grain:false,veg:false}, mal:false,
    dayStats:{ "26":{inc:0,exp:0}, "80":{inc:0,exp:0} },
    crossCd:null, lastCross:-999, carrySel:{},
    giftMonth:{}, movieMonth:{}, inviteWeek:{},
    walletT:{ money:[1000], grain:[], cloth:[], meat:[], wine:[], smoke:[], sgrain:[], scloth:[], swine:[], ssmoke:[] },
    pigT:   { money:[], grain:[300], cloth:[20], meat:[], wine:[], smoke:[], sgrain:[], scloth:[], swine:[], ssmoke:[] },
    walletCap:200, pigCap:1000,
    seen:{}, dailyPrice:{},
    letters:{ sent:false, sentDay:null, reply:false, received:false },
    bank:[],
    housing:"hutong", rentPaidTo:0, rentOwed:false,
    factoryOpen:false, factoryBuyouts:0, factoryExtra:0, factoryLastMonthBuyout:false,
    risk:0,
    exp:0, quests:[], questDone:{},
    hs:{ day:-1, entry:null, cur:null, stalls:[], mine:{ slot:-1, items:[], opened:false } },
    lottery:[],
    net:{ shopOpen:false, shopLevel:1, shopExp:0, listings:[], orders:[], bought:[], goods:[], goodsDay:-1, soldAll:0, soldMonth:0, earnAll:0, earnMonth:0, statDay:-1 },
    street:{ day:-1, stalls:[], rentDay:-1, rented:false, cur:null, mine:{ slot:-1, items:[], opened:false } },
    love:0,   // 爱心
    log:[],
  };
}

let S = null;
function emptyT(){ return { money:[], grain:[], cloth:[], meat:[], wine:[], smoke:[], sgrain:[], scloth:[], swine:[], ssmoke:[] }; }
function migrate(s){
  if(!s.dayStats || !s.dayStats["26"]){ const old=s.dayStats||{inc:0,exp:0}; s.dayStats={ "26":{inc:old.inc||0,exp:old.exp||0}, "80":{inc:0,exp:0} }; }
  if(s.crossCd === undefined) s.crossCd = null;
  if(s.lastCross === undefined) s.lastCross = -999;
  if(!s.carrySel) s.carrySel = {};
  if(s.minute === undefined) s.minute = 0;
  if(!s.affDay) s.affDay = {};
  if(s.exp===undefined) s.exp = 0;
  if(!Array.isArray(s.quests)) s.quests = [];
  if(!s.questDone) s.questDone = {};
  if(!s.hs) s.hs = { day:-1, entry:null, cur:null, stalls:[], mine:{ slot:-1, items:[], opened:false } };
  if(!Array.isArray(s.lottery)) s.lottery = [];
  if(!s.net) s.net = { shopOpen:false, shopLevel:1, shopExp:0, listings:[], orders:[], bought:[], goods:[], goodsDay:-1, soldAll:0, soldMonth:0, earnAll:0, earnMonth:0, statDay:-1 };
  if(!s.street) s.street = { day:-1, stalls:[], rentDay:-1, rented:false, cur:null, mine:{ slot:-1, items:[], opened:false } };
  /* 旧档：穿着的是布料（cotton/dacron），转成新服装成品 */
  if(s.worn === "cotton") s.worn = "cloth_plain";
  else if(s.worn === "dacron") s.worn = "cloth_dacron";
  /* 旧档：穿着时衣服可能还在背包里，去重 */
  if(s.worn && Array.isArray(s.backpack)){
    const st = s.backpack.find(x=>x.id===s.worn);
    if(st){ st.qty -= 1; if(st.qty<=0) s.backpack = s.backpack.filter(x=>x.id!==s.worn); }
  }
  if(!s.giftMonth) s.giftMonth = {};
  if(!s.movieMonth) s.movieMonth = {};
  if(!s.inviteWeek) s.inviteWeek = {};
  if(!s.walletT || !s.walletT.money) s.walletT = { money:[], grain:[], cloth:[], meat:[], wine:[], smoke:[], sgrain:[], scloth:[], swine:[], ssmoke:[] };
  if(!s.pigT || !s.pigT.money) s.pigT = { money:[], grain:[], cloth:[], meat:[], wine:[], smoke:[], sgrain:[], scloth:[], swine:[], ssmoke:[] };
  /* 旧版票据迁移：全部放入储钱罐 */
  if(s.tickets){
    const scale = { grain:10, cloth:10, sgrain:10, scloth:10 };
    for(const k in s.tickets){
      const v = s.tickets[k];
      if(k==="money"){ if(v>0) s.walletT.money.push(...decomposeFen(Math.round(v*100))); }
      else if(v > 0) s.pigT[k].push(Math.max(1, Math.round(v*(scale[k]||1))));
    }
    delete s.tickets;
  }
  /* 旧版 money["80"] 转为现金票据 */
  if(s.money && s.money["80"] > 0){
    s.walletT.money.push(...decomposeFen(Math.round(s.money["80"]*100)));
    s.money["80"] = 0;
  }
  if(!s.walletCap || s.walletCap < 200) s.walletCap = 200;
  if(!s.pigCap || s.pigCap < 1000) s.pigCap = 1000;
  if(!s.seen) s.seen = {};
  if(!s.dailyPrice) s.dailyPrice = {};
  /* 旧版存折迁移：老格式 {name,type,amt,opened} → 新格式（amt转分，补records） */
  if(s.bank && s.bank.length && s.bank[0].opened !== undefined){
    s.bank = s.bank.map((b,i)=>({
      id:i+1,
      name:b.name || (b.type==="fixed"?"定期存折":"活期存折"),
      type:b.type || "live",
      amt:Math.round((b.amt||0)*100),
      records:[]
    }));
  }
  if(!Array.isArray(s.bank)) s.bank = [];
  /* 补全已入库的假货/真品定义 */
  for(const st of [...(s.backpack||[]), ...((s.storage&&s.storage["26"])||[]), ...((s.storage&&s.storage["80"])||[])]){
    if(st && typeof st.id==="string"){
      if(st.id.indexOf("fake_")===0) ensureFakeItem(st.id.slice(5));
      else if(st.id.indexOf("zhen_")===0) ensureZhenItem(st.id.slice(5));
    }
  }
  return s;
}
function loadState(){
  try { const s = localStorage.getItem("xiandai3"); if(s) S = migrate(JSON.parse(s)); } catch(e){ S = null; }
  if(!S) S = newState();
}
function saveState(){
  try { localStorage.setItem("xiandai3", JSON.stringify(S)); } catch(e){}
}
function resetState(){
  S = newState();
  try { localStorage.removeItem("xiandai3"); } catch(e){}
}

/* ---------------- 日志 ---------------- */
function log(msg, cls){ S.log.unshift({t:msg,c:cls||"info",time:nowDateTime()}); if(S.log.length>100) S.log.length=100; }
function addInc(v){ S.dayStats[S.world].inc += v; }
function addExp(v){ S.dayStats[S.world].exp += v; }

/* ---------------- 容量 ---------------- */
function backpackCap(){ return 30; }
function travelCap(){ return 3 + S.capBonus; }
function homeCap(){
  if(S.world === "26") return 50; // 老家仓库50
  return HOUSES[S.housing] ? Math.max(50, HOUSES[S.housing].cap) : 50;
}
function packWeight(){ return S.backpack.reduce((s,it)=>s+it.qty,0); }
function storageWeight(world){ return S.storage[world].reduce((s,it)=>s+it.qty,0); }
function addPack(id, q){
  S.seen[id] = true;
  const it = S.backpack.find(x=>x.id===id);
  if(it) it.qty += q; else S.backpack.push({id, qty:q});
}
function subPack(id, q){
  const it = S.backpack.find(x=>x.id===id);
  if(!it) return false;
  if(it.qty < q) return false;
  it.qty -= q;
  if(it.qty<=0) S.backpack = S.backpack.filter(x=>x.id!==id);
  return true;
}
function addStorage(world, id, q){
  const s = S.storage[world].find(x=>x.id===id);
  if(s) s.qty += q; else S.storage[world].push({id, qty:q});
}
function subStorage(world, id, q){
  const s = S.storage[world].find(x=>x.id===id);
  if(!s || s.qty<q) return false;
  s.qty -= q;
  if(s.qty<=0) S.storage[world] = S.storage[world].filter(x=>x.id!==id);
  return true;
}
function countOf(id, arr){
  const it = arr.find(x=>x.id===id); return it?it.qty:0;
}
function packQty(id){ return countOf(id, S.backpack); }
function storageQty(world, id){ return countOf(id, S.storage[world]); }

/* ---------------- 时间推进 ----------------
   最小单位 5 分钟。passMinutes(m, rate) 推进 m 分钟；
   rate = 每小时消耗的体力点数（默认 10，等待传 5，吃饭传 0）。
   hour 到达 24 时强制结算进入下一天（若未吃饭则休息不好）。 */
function pad2(n){ return (n<10?"0":"")+n; }
function nowClock(){ return pad2(Math.floor(S.hour))+":"+pad2(S.minute); }
function nowDateTime(){
  const d = dateOf(S.world);
  return d.y+"年"+d.m+"月"+d.d+"日 周"+"日一二三四五六"[d.week]+" "+nowClock();
}
function hoursText(hours){
  if(!hours) return "全天";
  return hours.map(([a,b])=>a+"-"+b+"点").join("、");
}
function passMinutes(m, rate){
  if(rate === undefined) rate = 10;
  m = Math.floor(m);
  S.minute += m;
  while(S.minute >= 60){ S.minute -= 60; S.hour++; }
  S.hp = Math.max(0, S.hp - m*rate/60);
  while(S.hour >= 24){ S.hour -= 24; settleDay(false); }
}
function passHour(h, rate){ return passMinutes(Math.round(h*60), rate); }
function waitHours(n){
  n = Math.max(1, Math.floor(n)||1);
  passMinutes(n*60, 5);
  log("你在原地等了 "+n+" 小时（体力-"+(n*5)+"）。现在是 "+nowClock()+"。","info");
}
function advanceTo(h){
  if(S.hour < h){
    const dt = h - S.hour;
    S.hour = h;
    S.hp = Math.max(0, S.hp - dt*10);
  }
}
/* 当前地点是否在营业时间（heishi 黑市走夜间规则） */
function shopOpen(id){
  if(id === "heishi") return hsOpen();
  const sh = SHOPS[id];
  if(!sh || !sh.hours || !sh.hours.length) return true;
  const now = S.hour*60 + S.minute;
  return sh.hours.some(([a,b]) => now >= a*60 && now < b*60);
}

/* ---------------- 每日结算 ----------------
   返回当日结算快照 {inc, exp, net, assets} */
function settleDay(slept){
  const snap = {
    world: S.world,
    inc: Math.round(S.dayStats[S.world].inc*100)/100,
    exp: Math.round(S.dayStats[S.world].exp*100)/100,
  };
  snap.net = Math.round((snap.inc - snap.exp)*100)/100;
  const d80 = today80();

  /* 营养检查 */
  if(S.diet.grain && !S.diet.veg){ S.mal = true; }
  if(S.diet.veg){ S.mal = false; }

  /* 服装磨损 */
  if(S.worn){
    S.wornDays++;
    if(S.wornDays >= 30 && !S.wornBroken){ S.wornBroken = true; log("你的衣服穿破了，魅力加成失效，穿出去会被取笑。","warn"); }
  }

  /* 书信回执 */
  if(S.letters.sent && !S.letters.received){
    if(nowDay() - S.letters.sentDay >= 15){ S.letters.received = true; log("你收到了大姑的回信！","good"); }
  }

  /* 睡觉恢复 */
  if(slept){
    S.hp = 100;
  } else {
    if(!S.ateToday){
      S.mood = Math.max(0, S.mood - 20);
      S.hp = Math.max(0, S.hp - 30);
      log("你一整天没吃东西，又熬夜工作，身体吃不消了！","warn");
    } else {
      S.hp = Math.max(50, S.hp + 30);
    }
  }
  if(S.mal){ S.mood = Math.max(0, S.mood - 5); log("营养不良，心情低落。多吃点蔬菜水果。","warn"); }

  /* 月初收租：以80年代日历每月1日触发 */
  if(d80.d === 1){
    const h = HOUSES[S.housing];
    if(nowDay() >= S.rentPaidTo + 1){
      const rentPay = autoPayMoney(Math.round(h.rent*100));
      if(rentPay.ok){
        S.dayStats["80"].exp += h.rent; S.rentPaidTo = nowDay(); S.rentOwed = false;
        log("缴纳本月房租 "+fmtMoney(h.rent)+" 元（"+h.name+"）。","info");
      } else {
        S.rentOwed = true; log("缴不起房租了！房租每月10号前须结清。","err");
      }
    }
  }

  /* 店铺刷新 */
  refreshAllShops();
  S.dailyPrice = {}; // 新的一天，收藏品重新报价

  S.day++;
  S.hour = 6;
  S.minute = 0;
  S.ateToday = false;
  S.diet = {grain:false, veg:false};
  S.mealsToday = 0;
  S.dayStats = { "26":{inc:0,exp:0}, "80":{inc:0,exp:0} };
  if(S.net && S.net.shopOpen){ netGenOrders(); netDeliver(); }
  if(S.net) netRefreshGoods(false); // 每月自动刷阿狸bb货源
  snap.assets = S.world === "80" ? Math.round((moneyWallet()+moneyPig())/100) : S.money["26"];
  return snap;
}

/* ---------------- 店铺进货刷新 ---------------- */
function refreshAllShops(){
  for(const id in SHOPS){
    const sh = SHOPS[id];
    const period = sh.refreshUnit === "month" ? 30 : sh.refreshUnit === "week" ? 7 : sh.refreshDays || 1;
    if(!S.stock[id]) S.stock[id] = {};
    const last = S.lastRefresh[id] ?? -999;
    if(nowDay() - last >= period){
      refreshShopStock(id);
      S.lastRefresh[id] = nowDay();
    }
  }
}
function refreshShopStock(id){
  const sh = SHOPS[id];
  if(!sh.stock) return;
  const st = S.stock[id] = S.stock[id] || {};

  /* 食品厂：上月是否清空库存 */
  if(id === "shipinchang"){
    const prevEmpty = Object.keys(st).length>0 && Object.values(st).every(v => v<=0);
    if(prevEmpty){ S.factoryBuyouts++; if(S.factoryBuyouts >= 12){ log("连续12个月买空食品厂！钱厂长开放区域货运与特殊批文！","good"); } }
    else if(nowDay()>1){ S.factoryBuyouts = 0; }
  }

  for(const s of sh.stock){
    if(s.item && !(s.item in ITEMS)) continue; // 虚拟物品不进货
    let max = s.max;
    if(id === "shipinchang") max = s.max + Math.min(S.factoryBuyouts, 12);
    st[s.item] = rand(s.min, max);
  }
  if(sh.hiddenStock && isHiddenOpen(id)){
    for(const s of sh.hiddenStock){ st[s.item] = rand(s.min, s.max); }
  } else if(sh.hiddenStock){
    for(const s of sh.hiddenStock){ if(st[s.item] !== undefined) st[s.item] = 0; }
  }
}
function isHiddenOpen(id){
  const sh = SHOPS[id];
  return sh.hiddenAt === undefined ? true : (S.aff[sh.npc]||0) >= sh.hiddenAt;
}
function shopStockOf(id, item){
  const st = S.stock[id] || {};
  return st[item] || 0;
}

/* ---------------- 票据系统 ----------------
   票据是独立的小物件：分「钱包（随身）」与「储钱罐（家中）」。
   数值以最小单位存储：粮票/特殊粮票=两(0.1斤)，布票/特殊布票=分米(0.1米)，其余=张。
   现金(cash)也走票据系统：以分为单位存储，每张纸币/硬币都是独立票据。
----------------------------------------------- */
const TICK_SCALE = { money:100, grain:10, cloth:10, sgrain:10, scloth:10 }; // 最小单位/显示单位
const TICK_UNIT  = { money:"元", grain:"斤", cloth:"米", sgrain:"斤", scloth:"米" }; // 显示单位（其余为"张"）
const TICK_NAME  = { money:"现金", grain:"粮票", cloth:"布票", meat:"肉票", wine:"酒票", smoke:"烟票",
                     sgrain:"特殊粮票", scloth:"特殊布票", swine:"特殊酒票", ssmoke:"特殊烟票" };

/* 现金面额（分）：最大10元纸币，最小1分硬币 */
const CASH_DENOMS = [1000,500,200,100,50,20,10,5,2,1];
function decomposeFen(fen){
  const out=[];
  for(const d of CASH_DENOMS){ while(fen>=d){ out.push(d); fen-=d; } }
  return out;
}
function fmtFen(fen){
  const y = Math.floor(fen/100), r = fen%100;
  const j = Math.floor(r/10), c = r%10;
  let s="";
  if(y) s += y+"元";
  if(j) s += j+"角";
  if(c) s += c+"分";
  return s || "0元";
}
function moneyWallet(){ return tValue("wallet","money"); }
function moneyPig(){ return tValue("pig","money"); }
function money80Total(){ return moneyWallet() + moneyPig(); }
function addMoneyFen(container, fen, force){
  const arr = (container==="wallet" ? S.walletT : S.pigT).money;
  const pieces = decomposeFen(fen);
  if(!force && tTotalCount(container) + pieces.length > tCap(container)){
    return {ok:false, msg:(container==="wallet"?"钱包":"储钱罐")+"放不下这么多现金（容量 "+(tTotalCount(container)+pieces.length)+"/"+tCap(container)+"）"};
  }
  arr.push(...pieces);
  return {ok:true, pieces};
}
function takeMoneyExact(fen){ // 从钱包凑出整额（存钱/缴存用）
  if(moneyWallet() < fen) return {ok:false, need: fen-moneyWallet()};
  const arr = S.walletT.money;
  const sorted = arr.slice().sort((a,b)=>b-a);
  const take=[]; let sum=0;
  for(const v of sorted){ if(sum+v<=fen){ take.push(v); sum+=v; } }
  if(sum!==fen) return {ok:false, msg:"现金零钱凑不出整额"};
  for(const v of take){ const i=arr.indexOf(v); arr.splice(i,1); }
  return {ok:true, sum};
}
function autoPayMoney(fen){ // 自动从钱包付钱并找零
  if(moneyWallet() < fen) return {ok:false, need: fen-moneyWallet()};
  const arr = S.walletT.money;
  const sorted = arr.slice().sort((a,b)=>b-a);
  const take=[]; let sum=0;
  for(const v of sorted){ if(sum>=fen) break; take.push(v); sum+=v; }
  for(const v of take){ const i=arr.indexOf(v); arr.splice(i,1); }
  const change = sum - fen;
  if(change>0) addMoneyFen("wallet", change, true);
  return {ok:true, paid:sum, change};
}

function tArr(container, type){ return (container==="wallet" ? S.walletT : S.pigT)[type]; }
function tValue(container, type){ return tArr(container,type).reduce((a,b)=>a+b,0); }
function tCount(container, type){ return tArr(container,type).length; }
function tTotalCount(container){ let n=0; for(const k in TICKETS) n += tCount(container,k); return n; }
function tCap(container){ return container==="wallet" ? S.walletCap : S.pigCap; }
function tDisp(container, type){ const v = tValue(container,type)/TICK_SCALE[type]||1; return Math.round(v*100)/100; }
function tPieceText(type, den){
  if(type === "money") return fmtFen(den); // 现金票据按面额显示（10元/5角/1分）
  const u = TICK_UNIT[type] || "张";
  const v = den/(TICK_SCALE[type]||1);
  const d = Math.round(v*100)/100;
  return (d % 1 === 0 ? d : d) + u;
}
function tPieceList(container, type){
  const arr = tArr(container,type);
  return arr.length ? arr.map(d=>tPieceText(type,d)).join(" + ") : "无";
}
function consumeTicket(type, minVal){
  const arr = S.walletT[type]; if(!arr) return false;
  let need = minVal;
  arr.sort((a,b)=>b-a);
  for(let i=0;i<arr.length && need>0;i++){
    const take = Math.min(arr[i], need);
    arr[i] -= take; need -= take;
    if(arr[i] <= 0){ arr.splice(i,1); i--; }
  }
  return need === 0;
}
function splitTicket(container, type, N){
  N = Math.max(2, Math.floor(N)||2);
  const arr = tArr(container,type);
  let idx = -1;
  for(let i=0;i<arr.length;i++) if(arr[i] % N === 0 && (idx===-1 || arr[i] > arr[idx])) idx = i;
  if(idx===-1) return {ok:false,msg:"这张票没法拆成 "+N+" 份"};
  if(tTotalCount(container) + (N-1) > tCap(container)) return {ok:false,msg:"容量不够（"+(N-1)+"张）"};
  const d = arr[idx];
  arr.splice(idx,1);
  for(let i=0;i<N;i++) arr.push(d/N);
  return {ok:true,msg:TICK_NAME[type]+"拆成 "+N+" 张"};
}
function mergeTicket(container, type){
  const arr = tArr(container,type);
  if(arr.length < 2) return {ok:false,msg:"只有一张，没法合"};
  const total = arr.reduce((a,b)=>a+b,0);
  arr.length = 0; arr.push(total);
  return {ok:true,msg:TICK_NAME[type]+"合并为 1 张"};
}
function moveTicket(type, fromWallet){
  const src = fromWallet ? S.walletT[type] : S.pigT[type];
  const dst = fromWallet ? S.pigT[type] : S.walletT[type];
  const dstContainer = fromWallet ? "pig" : "wallet";
  if(!src.length) return {ok:false,msg:"没有可移动的票据"};
  if(tTotalCount(dstContainer) >= tCap(dstContainer)) return {ok:false,msg:(fromWallet?"储钱罐":"钱包")+"满了"};
  dst.push(src.shift());
  return {ok:true,msg:(fromWallet?"存起一张":"带上一张")+TICK_NAME[type]};
}

/* 按面额分组统计某容器内的票据（用于存钱罐/钱包容器界面） */
function tGroups(container, type){
  const arr = tArr(container, type);
  const m = {};
  for(const v of arr) m[v] = (m[v]||0)+1;
  return Object.entries(m).map(([v,n])=>({v:+v, n}));
}
/* 容器间移动同面额票据 n 张（存钱罐↔钱包） */
function moveTicketVal(container, type, val, n){
  n = Math.max(1, Math.floor(n)||1);
  const src = container==="wallet" ? S.walletT[type] : S.pigT[type];
  const dst = container==="wallet" ? S.pigT[type] : S.walletT[type];
  const dstContainer = container==="wallet" ? "pig" : "wallet";
  let avail = src.filter(x=>x===val).length;
  if(!avail) return {ok:false,msg:"没有这种面额的票据"};
  n = Math.min(n, avail);
  if(tTotalCount(dstContainer) + n > tCap(dstContainer)) return {ok:false,msg:(dstContainer==="wallet"?"钱包":"存钱罐")+"放不下这么多"};
  let moved = 0;
  for(let i=src.length-1; i>=0 && moved<n; i--){
    if(src[i]===val){ dst.push(src[i]); src.splice(i,1); moved++; }
  }
  return {ok:true,msg:(container==="pig"?"取出":"存入")+moved+"张"+TICK_NAME[type]+"（"+tPieceText(type,val)+"）"};
}

/* 收藏品当日收购价（每天随机一次，方便玩家抉择）。真品(zhen_)与原物共享同一报价。 */
function dayPrice(it){
  if(it.sell === undefined) return null;
  const base = it.zhenOf ? ITEMS[it.zhenOf] : it;
  const id = Object.keys(ITEMS).find(k => ITEMS[k] === base);
  if(S.dailyPrice[id] === undefined){
    S.dailyPrice[id] = Math.round((base.sell + Math.random()*(base.sellHi-base.sell))*100)/100;
  }
  return S.dailyPrice[id];
}

/* ---------------- 好感 ---------------- */
function affOf(npc){ return S.aff[npc] || 0; }
function addAff(npc, n){
  const before = S.aff[npc] || 0;
  S.aff[npc] = Math.max(0, (S.aff[npc]||0) + n);
  if(S.aff[npc] > 100) S.aff[npc] = 100;
  /* 好感跨过隐藏商店门槛时立刻补货 */
  for(const id in SHOPS){
    const sh = SHOPS[id];
    if(sh.npc === npc && sh.hiddenAt !== undefined){
      if(before < sh.hiddenAt && S.aff[npc] >= sh.hiddenAt){
        log(sh.name+"的隐藏货上架了！","good");
        refreshShopStock(id);
      }
    }
  }
}

/* ---------------- 价格 ---------------- */
function stockPrice(id, s){
  if(s.priceCode){
    const d = today80();
    if(s.priceCode === "maotai"){
      if(d.y <= 1985) return {price:7, ticket:"swine"};
      if(d.y <= 1987) return {price:8, ticket:"swine", extra:"侨汇券120张"};
      return {price:rndPrice(140,200), ticket:null};
    }
    if(s.priceCode === "zhonghua"){
      if(d.y <= 1981) return {price:0.5, ticket:"ssmoke"};
      if(d.y <= 1987) return {price:1.5, ticket:"ssmoke"};
      return {price:rndPrice(10,12), ticket:null};
    }
  }
  if(s.priceMin !== undefined){ return {price:rndPrice(s.priceMin, s.priceMax), ticket:null}; }
  const base = s.price;
  let p = base;
  const npc = SHOPS[id] && SHOPS[id].npc;
  const sh = SHOPS[id];
  if(sh && sh.discountAt !== undefined && npc && affOf(npc) >= sh.discountAt){
    p = base * (sh.discountRate || 0.9);
  }
  return {price: Math.round(p*100)/100, ticket: s.ticket || null};
}

/* ---------------- 购买（普通商店） ----------------
   paid=true 表示钱已由界面选票支付，引擎不再扣钱 */
function buyQuote(id, item, q){
  q = Math.max(1, Math.floor(q)||1);
  const sh = SHOPS[id];
  if(!sh || !["market","post","junk","factory"].includes(sh.kind)) return {ok:false,msg:"此店不支持购买"};
  const def = sh.stock.find(s=>s.item===item);
  const hid = sh.hiddenStock && isHiddenOpen(id) ? sh.hiddenStock.find(s=>s.item===item) : null;
  const s = def || hid;
  if(!s) return {ok:false,msg:"没有这种商品"};
  if(shopStockOf(id,item) < q) return {ok:false,msg:"库存不足"};
  const {price, ticket} = stockPrice(id,s);
  let needT = 0;
  if(ticket){ needT = (ticket==="grain"||ticket==="sgrain") ? q*10 : ((ticket==="cloth"||ticket==="scloth") ? q*5 : q); }
  if(ticket && tValue("wallet", ticket) < needT) return {ok:false,msg:"随身票据不足（需要"+TICK_NAME[ticket]+"）"};
  if(packWeight() + q > backpackCap()) return {ok:false,msg:"背包满了（"+backpackCap()+"）"};
  return {ok:true, cost:price*q, costFen:Math.round(price*q*100), ticket, needT, item, q, max:s.max};
}
function buy(id, item, q, paid){
  const r = buyQuote(id, item, q);
  if(!r.ok) return r;
  if(r.ticket && tValue("wallet", r.ticket) < r.needT) return {ok:false,msg:"随身票据不足（需要"+TICK_NAME[r.ticket]+"）"};
  if(packWeight() + r.q > backpackCap()) return {ok:false,msg:"背包满了（"+backpackCap()+"）"};

  const w = S.world;
  if(w === "26"){
    const yuan = Math.ceil(r.cost*100)/100; // 现代最小单位1元，不找零
    if(!paid){
      if(S.money["26"] < yuan) return {ok:false,msg:"钱不够（需 "+fmtMoney(yuan)+" 元）"};
      S.money["26"] -= yuan; addExp(yuan);
    } else addExp(yuan);
  } else {
    if(!paid){
      const pay = autoPayMoney(r.costFen);
      if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
    }
    addExp(r.cost);
  }
  if(r.ticket) consumeTicket(r.ticket, r.needT);
  S.stock[id][item] -= r.q;
  addPack(item, r.q);
  const sh = SHOPS[id];
  if(sh.npc && S.affDay[sh.npc] !== nowDay()){ addAff(sh.npc, 1); S.affDay[sh.npc] = nowDay(); } // 正常交易每日只+1好感

  /* 老王头智能补货 */
  if(sh.restock === "smart"){ S.stock[id][item] = Math.min(r.max, S.stock[id][item] + r.q + rand(0,r.q)); }

  log("在"+sh.name+"购买 "+ITEMS[item].name+"×"+r.q+"。","good");
  return {ok:true};
}

/* ---------------- 自用物品 ---------------- */
function useItem(id, q){
  q = Math.max(1, Math.floor(q)||1);
  const it = ITEMS[id];
  if(!it) return {ok:false,msg:"无此物品"};
  if(packQty(id) < q) return {ok:false,msg:"背包里没有 "+it.name};
  const usable = it.use && (it.use.hp || it.use.mood || it.use.charm || it.use.cap);
  if(!usable) return {ok:false,msg:it.name+" 不能直接使用"};
  subPack(id,q);
  if(it.use.hp){ S.hp = Math.min(100, S.hp + it.use.hp*q); }
  if(it.use.mood){ S.mood = Math.min(100, S.mood + it.use.mood*q); }
  if(it.use.charm){ S.beautyBonus += it.use.charm*q; log("魅力永久 +"+it.use.charm*q+"！","good"); }
  if(it.use.cap){ S.capBonus = Math.min(7, S.capBonus + it.use.cap*q); log("穿越携带容量 +"+it.use.cap*q+"（当前 "+travelCap()+"）","good"); }
  if(it.tags.includes("食物") || it.tags.includes("粗粮") || it.tags.includes("细粮") || it.tags.includes("补品")){
    S.ateToday = true;
    if(it.tags.includes("粗粮")) S.diet.grain = true;
    if(it.tags.includes("补品") || it.tags.includes("细粮")) { /* 细粮也算进食 */ }
    if(it.tags.includes("菜")) S.diet.veg = true;
  }
  log("使用了 "+it.name+"。","good");
  return {ok:true};
}

/* ---------------- 睡觉 ---------------- */
function sleep(){
  if(!S.ateToday) return {ok:false,msg:"一整天没吃东西，饿得睡不着！先去吃点东西吧"};
  if(S.rentOwed) return {ok:false,msg:"房租还没交，街道办不让你安睡。去街道办缴租吧"};
  const snap = settleDay(true);
  return {ok:true,msg:"睡了一觉，新的一天开始了。", settle:snap};
}

/* ---------------- 穿越 ---------------- */
function cross(picks){
  if(S.crossCd !== null){
    const remain = S.crossCd - (nowDay() - S.lastCross);
    if(remain > 0) return {ok:false, msg:"穿越门冷却中，还需 "+remain+" 天才能再次穿越（冷却"+S.crossCd+"天）"};
  }
  const cap = travelCap();
  const total = picks.reduce((s,p)=>s+p.qty,0);
  if(total > cap) return {ok:false,msg:"穿越携带超限（"+cap+"）"};
  for(const p of picks){
    if(packQty(p.id) < p.qty) return {ok:false,msg:"背包里 "+ITEMS[p.id].name+" 数量不足"};
  }
  const from = S.world;
  /* 未携带的背包物品自动存入老家仓库 */
  const leftover = S.backpack.reduce((s,it)=>s+it.qty,0);
  if(storageWeight(from) + leftover > homeCap()) return {ok:false,msg:"仓库放不下未携带的物资，先整理一下吧"};
  for(const p of picks){ subPack(p.id, p.qty); }
  for(const it of S.backpack){ addStorage(from, it.id, it.qty); }
  S.backpack = [];
  for(const p of picks){ addPack(p.id, p.qty); }
  S.world = from === "26" ? "80" : "26";
  S.loc = WORLDS[S.world].home;
  S.hour = 6;
  S.minute = 0;
  S.lastCross = nowDay();
  S.carrySel = {};
  /* 随身票据过多可能被坏人盯上 */
  if(S.world === "80"){
    const ticketVal = tTotalCount("wallet");
    if(ticketVal > 30 && Math.random() < 0.15){
      const pct = rand(10,30);
      let loseMoney = 0;
      for(const k in TICKETS){
        const arr = S.walletT[k];
        for(let i=0;i<arr.length;i++){
          const loss = Math.floor(arr[i]*pct/100);
          arr[i] -= loss;
          if(k === "money") loseMoney += loss;
        }
        S.walletT[k] = arr.filter(v=>v>0);
      }
      log("被坏人盯上，损失了 "+pct+"% 的现金和随身票据（现金损失 "+fmtFen(loseMoney)+"）！","err");
    }
  }
  log("穿越时空之门，来到"+(S.world==="80"?"1980年":"2026年")+"。","info");
  return {ok:true};
}

/* ---------------- 存取物资（家里） ---------------- */
function storeItem(id, q){
  q = Math.max(1, Math.floor(q)||1);
  if(packQty(id) < q) return {ok:false,msg:"背包没有该物品"};
  if(storageWeight(S.world) + q > homeCap()) return {ok:false,msg:"家里仓库满了（"+homeCap()+"）"};
  subPack(id,q); addStorage(S.world, id, q);
  return {ok:true,msg:"存入仓库 "+ITEMS[id].name+"×"+q};
}
function takeItem(id, q){
  q = Math.max(1, Math.floor(q)||1);
  if(storageQty(S.world, id) < q) return {ok:false,msg:"仓库没有该物品"};
  if(packWeight() + q > backpackCap()) return {ok:false,msg:"背包满了（"+backpackCap()+"）"};
  subStorage(S.world, id, q); addPack(id,q);
  return {ok:true,msg:"取出 "+ITEMS[id].name+"×"+q};
}

/* ---------------- 收藏家（王富贵）/ 回收站（虾仁） ----------------
   王富贵鉴定规则：
   ≤500 元：免鉴定，直接收购；
   500-1万：鉴定费 500 元/件，成功率 = 好感 - 5%；
   >1万：   鉴定费 1 万元/件，成功率 = 好感 - 10%。
   鉴定产出两种实体：zhen_<id>（真品）与 fake_<id>（假货）。
   王富贵：真品原价收；假货不收。
   虾仁：  只收真品（10% 价）；未鉴定的高价值物品与假货一律按 1 元收。 */
function apprTier(price){
  if(price <= 500) return null;
  return price <= 10000 ? {fee:500, penalty:5} : {fee:10000, penalty:10};
}
function apprSuccess(tier){
  return Math.max(1, Math.min(99, affOf("王富贵") - tier.penalty));
}
function fakeIdOf(id){ return "fake_"+id; }
function zhenIdOf(id){ return "zhen_"+id; }
function ensureFakeItem(id){
  const fid = fakeIdOf(id);
  if(ITEMS[fid]) return fid;
  const orig = ITEMS[id];
  ITEMS[fid] = {
    name:"假"+(orig?orig.name:"品"), unit:orig?orig.unit:"件", cat:"假货",
    tags:["假货"], junkPrice:1, fakeOf:id, exp:false,
    note:"鉴定失败，一文不值，只能卖给虾仁 1 元"
  };
  return fid;
}
function ensureZhenItem(id){
  const zid = zhenIdOf(id);
  if(ITEMS[zid]) return zid;
  const orig = ITEMS[id];
  ITEMS[zid] = {
    name:(orig?orig.name:"品")+"（真品）", unit:orig?orig.unit:"件", cat:"收藏品",
    tags:["真品","收藏品"], sell:orig?orig.sell:0, sellHi:orig?orig.sellHi:0,
    zhenOf:id, exp:false,
    note:"已鉴定真品，可原价卖给王富贵，或 10% 卖给虾仁"
  };
  return zid;
}
function fakeCount(){
  return S.backpack.reduce((s,it)=> it.id.indexOf("fake_")===0 ? s+it.qty : s, 0);
}
function zhenCount(){
  return S.backpack.reduce((s,it)=> it.id.indexOf("zhen_")===0 ? s+it.qty : s, 0);
}

/* 鉴定：付费逐件判定，真品→zhen_<id>，假货→fake_<id>（进背包，不自动卖） */
function appraise(id, q){
  q = Math.max(1, Math.floor(q)||1);
  const it = ITEMS[id];
  if(!it || it.sell === undefined || it.zhenOf) return {ok:false,msg:"这件无需鉴定"};
  if(packQty(id) < q) return {ok:false,msg:"背包没有 "+it.name};
  if(S.blacklisted) return {ok:false,msg:"王富贵把你拉黑了！"};
  const tier = apprTier(dayPrice(it));
  if(!tier) return {ok:false,msg:"低价值物品免鉴定，直接出售即可"};
  const feeTotal = tier.fee * q;
  if(S.money["26"] < feeTotal) return {ok:false,msg:"鉴定费不够（需 "+fmtMoney(feeTotal)+" 元）"};
  S.money["26"] -= feeTotal; addExp(feeTotal);
  const success = apprSuccess(tier);
  let genuine = 0;
  for(let i=0;i<q;i++){ if(Math.random()*100 < success) genuine++; }
  const fake = q - genuine;
  subPack(id, q);
  if(genuine > 0){ const zid = ensureZhenItem(id); addPack(zid, genuine); }
  if(fake > 0){ const fid = ensureFakeItem(id); addPack(fid, fake); }
  log("鉴定 "+it.name+"×"+q+"：真品×"+genuine+"、假货×"+fake+"（鉴定费 "+fmtMoney(feeTotal)+"）。真品可原价卖给王富贵或 10% 卖给虾仁，假货只能卖虾仁 1 元。","warn");
  return {ok:true, genuine, fake, fee:feeTotal};
}

function sellCollector(id, q){
  q = Math.max(1, Math.floor(q)||1);
  const it = ITEMS[id];
  if(!it || it.sell === undefined) return {ok:false,msg:"王富贵不收这个"};
  if(packQty(id) < q) return {ok:false,msg:"背包没有 "+it.name};
  if(S.blacklisted) return {ok:false,msg:"王富贵把你拉黑了！只能去废品回收站卖"};
  /* 未鉴定的高价值物品，必须先鉴定 */
  if(it.zhenOf === undefined && apprTier(dayPrice(it))){
    return {ok:false,msg:"这件还没鉴定，先点「鉴定」，真品才能原价卖。"};
  }
  const price = dayPrice(it);
  const total = price*q;
  /* 交易金额影响好感 */
  if(total < 10000){ addAff("王富贵", -1); S.wfLowStreak++; }
  else if(total <= 1000000){ addAff("王富贵", 1); S.wfLowStreak = 0; }
  else if(total <= 100000000){ addAff("王富贵", 5); S.wfLowStreak = 0; }
  else return {ok:false,msg:"超过1亿元，王富贵收不起，请联系城里拍卖行蒋经理"};
  if(S.wfLowStreak >= 30){
    S.blacklisted = true;
    log("连续30次交易低于1万，王富贵把你拉黑了！","err");
    return {ok:false,msg:"王富贵把你拉黑了！"};
  }
  subPack(id,q);
  S.money["26"] += total; addInc(total);
  if(S.wornBroken){ S.money["26"] -= total*0.2; addInc(-total*0.2); log("穿着破衣服，被压价了。","warn"); }
  log("出售 "+it.name+"×"+q+" 给王富贵，获得 "+fmtMoney(total)+" 元。","good");
  return {ok:true, total};
}
function sellJunk(id, q){
  q = Math.max(1, Math.floor(q)||1);
  const it = ITEMS[id];
  if(!it || (it.sell===undefined && !it.strong && it.junkPrice===undefined && !it.zhenOf)) return {ok:false,msg:"虾仁不收这个"};
  if(packQty(id) < q) return {ok:false,msg:"背包没有 "+it.name};
  let total, tag;
  if(it.junkPrice !== undefined){
    total = it.junkPrice * q; tag = "假货 1元";
  } else if(it.zhenOf !== undefined){
    total = Math.round(dayPrice(it)*0.1*q*100)/100; tag = "真品 10%";
  } else if(it.sell !== undefined){
    if(apprTier(dayPrice(it))){ total = 1*q; tag = "未鉴定按假货 1元"; }
    else { total = Math.round(dayPrice(it)*0.1*q*100)/100; tag = "真品 10%"; }
  } else if(it.strong){
    total = rndPrice(it.strong.price, it.strong.priceHi)*q; tag = "物资";
  }
  subPack(id,q); S.money[S.world] += total; addInc(total);
  addAff("虾仁",1);
  log("在废品回收站卖掉 "+it.name+"×"+q+"（"+tag+"），获得 "+fmtMoney(total)+" 元。","good");
  return {ok:true, total};
}
function pleadReset(){
  if(S.pleadUsed) return {ok:false,msg:"老王头已经劝过一次了"};
  if(S.blacklisted !== true) return {ok:false,msg:"王富贵还没拉黑你"};
  if(affOf("老王头") <= 80) return {ok:false,msg:"老王头好感未超过80，他不愿出面"};
  S.aff["老王头"] -= 50; S.pleadUsed = true; S.blacklisted = false; S.wfLowStreak = 0;
  addAff("王富贵", 30);
  return {ok:true,msg:"老王头出面劝说，王富贵原谅了你（好感重置30）。"};
}

/* ---------------- 饭店吃饭（外卖式点餐） ----------------
   order: { itemId: 数量 }，主食可多选多份，菜也可多份，预留饮品
   paid=true 表示钱已由界面选票支付 */
function eatMeal(order, guest, paid){
  const sh = SHOPS["fandian"];
  if(S.world !== "80" || S.loc !== "fandian") return {ok:false,msg:"不在此处"};
  if(S.mealsToday >= 3) return {ok:false,msg:"今天已吃3顿了"};
  if(S.hour - S.lastMealHour < 4 && S.mealsToday>0) return {ok:false,msg:"刚吃过，间隔不足4小时"};

  let hasStaple=false, cost=0, grainNeed=0;
  const items=[];
  for(const [item, qty0] of Object.entries(order)){
    const qty = Math.floor(qty0)||0;
    if(qty<=0) continue;
    const sDef = sh.stock.find(x=>x.item===item);
    const sHid = (sh.hiddenStock && isHiddenOpen("fandian")) ? sh.hiddenStock.find(x=>x.item===item) : null;
    const s = sDef || sHid;
    if(!s) return {ok:false,msg:"无此菜"};
    if(shopStockOf("fandian", item) < qty) return {ok:false,msg:ITEMS[item].name+" 不够了"};
    if(s.staple) hasStaple = true;
    const price = s.price; // 主食/菜统一价格
    cost += price*qty;
    if(s.staple && s.ticket) grainNeed += (ITEMS[item].tickNeed||1)*qty;
    items.push({s, qty});
  }
  if(!hasStaple) return {ok:false,msg:"必须点主食"};
  if(grainNeed && tValue("wallet","grain") < grainNeed) return {ok:false,msg:"随身粮票不足（需"+grainNeed+"两）"};
  if(!paid){
    const pay = autoPayMoney(Math.round(cost*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
  }
  if(guest){
    const g = NPCS[guest];
    if(!g) return {ok:false,msg:"无效NPC"};
    const week = Math.floor(S.day/7);
    if(S.inviteWeek[guest] === week) return {ok:false,msg:guest+"这周已经请你吃过饭了，下周再约吧。"};
    S.inviteWeek[guest] = week;
    if(g.female && g.married && items.some(x=>x.s.item==="jiyu")){ addAff(guest,5); log(guest+"吃了鲫鱼，很受用（好感+5）。","good"); }
    else { addAff(guest,2); log(guest+"和你一起吃了顿饭，很愉快（好感+2）。","good"); }
  }
  addExp(cost);
  if(grainNeed) consumeTicket("grain", grainNeed);
  for(const it of items) S.stock["fandian"][it.s.item] -= it.qty;
  let hp=0, mood=0;
  for(const it of items){
    const u = ITEMS[it.s.item].use||{};
    hp += (u.hp||0)*it.qty; mood += (u.mood||0)*it.qty;
    S.seen[it.s.item] = true;
  }
  const mult = guest ? 0.5 : 1;
  S.hp = Math.min(100, S.hp + Math.round(hp*mult));
  S.mood = Math.min(100, S.mood + Math.round(mood*mult));
  S.ateToday = true;
  S.mealsToday++; S.lastMealHour = S.hour;
  addAff("何雨柱", 1);
  passHour(1, 0); // 吃饭耗时1小时，但不按劳作扣体力（进食本身是恢复）
  const names = items.map(x=>ITEMS[x.s.item].name+"×"+x.qty).join("、");
  log("在国营饭店吃了 "+names+"（共"+fmtMoney(cost)+"元）。","good");
  return {ok:true};
}

/* ---------------- 看电影 ---------------- */
function watchMovie(mid, guest, paid){
  const sh = SHOPS["dianying"];
  const m = sh.stock.find(x=>x.item===mid);
  if(!m) return {ok:false,msg:"无此电影"};
  if(shopStockOf("dianying", mid) < 1) return {ok:false,msg:"票卖完了"};
  if(!paid){
    const pay = autoPayMoney(Math.round(m.price*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
  }
  if(guest){
    const g = NPCS[guest];
    if(g && g.female && g.married && m.tags.includes("爱情")) return {ok:false,msg:guest+"已婚，不陪你看爱情片"};
    if(g){
      const d = today80(); const mk = d.y+"-"+d.m;
      if(S.movieMonth[guest] === mk) return {ok:false,msg:guest+"这个月已经看过电影了，下个月再约吧。"};
      S.movieMonth[guest] = mk;
      addAff(guest, m.invAff||2);
      log(guest+"陪你看了"+m.name+"（好感+"+(m.invAff||2)+"）。","good");
    }
  }
  addExp(m.price);
  S.stock["dianying"][mid]--;
  S.mood = Math.min(100, S.mood + (m.mood||5));
  addAff("张一冇", 1);
  passHour(2);
  log("看完《"+m.name.replace(/《|》/g,"")+"》，心情+"+(m.mood||5)+"。","good");
  return {ok:true};
}

/* ---------------- 裁缝做衣 ----------------
   布料以 0.5米/块 计：1.8米做一身约需 ceil(18/5)=4 块。
   做好的衣服是背包里的成品（可穿上/脱下），穿久会磨损。 */
function clothNeed(heightDm){ return Math.ceil((heightDm||18)/5); }
function makeClothes(type, heightDm, paid){
  const sh = SHOPS["caifeng"];
  const c = sh.clothes.find(x=>x.item===type);
  if(!c) return {ok:false,msg:"无此服装"};
  const h = heightDm || 18;
  if(h < 10) return {ok:false,msg:"身高太矮，做不了"};
  const need = clothNeed(h);
  const mat = ITEMS[c.material].name;
  if(packQty(c.material) < need){
    return {ok:false,msg:"布料不够（需 "+need+" 块"+mat+"（每块0.5米），背包只有 "+packQty(c.material)+" 块）"};
  }
  if(packWeight() + 1 > backpackCap()) return {ok:false,msg:"背包满了（"+backpackCap()+"）"};
  if(!paid){
    const pay = autoPayMoney(Math.round(c.fee*100));
    if(!pay.ok) return {ok:false,msg:"手工费不够（还缺 "+fmtFen(pay.need)+"）"};
  }
  subPack(c.material, need);
  addExp(c.fee);
  addPack(c.item, 1);
  addAff("周奶奶", 5);
  passHour(1);
  log("周奶奶给你做了一身"+c.name+"（用掉"+mat+"×"+need+"，即"+(need*0.5).toFixed(1)+"米），已放入背包。","good");
  return {ok:true};
}
/* 穿上 / 脱下（穿上后衣服离开背包，穿在身上；脱下放回背包） */
function wearClothes(id){
  const it = ITEMS[id];
  if(!it || it.charm === undefined) return {ok:false,msg:"这不是衣服"};
  if(packQty(id) < 1) return {ok:false,msg:"背包里没有这件衣服"};
  if(S.worn === id) return {ok:false,msg:"你已经穿着这件衣服了"};
  subPack(id, 1);
  S.worn = id; S.wornDays = 0; S.wornBroken = false;
  log("你穿上了"+it.name+"（魅力+"+it.charm+"），衣服已穿在身上。","good");
  return {ok:true};
}
function takeOffClothes(){
  if(!S.worn) return {ok:false,msg:"你现在没穿衣服"};
  if(packWeight() + 1 > backpackCap()) return {ok:false,msg:"背包满了（"+backpackCap()+"），脱不下衣服"};
  const id = S.worn;
  const name = ITEMS[id].name;
  addPack(id, 1);
  S.worn = null; S.wornDays = 0; S.wornBroken = false;
  log("你脱下了"+name+"，放回背包。","info");
  return {ok:true};
}
function donateClothes(){
  if(!S.worn) return {ok:false,msg:"没有旧衣服"};
  const id = S.worn;
  S.worn = null; S.wornDays=0; S.wornBroken=false; S.love += 1;
  subPack(id, 1); // 保险：旧档衣服可能在背包里，一并移除
  return {ok:true,msg:"你把"+ITEMS[id].name+"捐给了山区，爱心+1！"};
}
/* 丢弃背包里的物品（目前仅衣服使用） */
function discardItem(id){
  const it = ITEMS[id];
  if(!it) return {ok:false,msg:"无此物品"};
  if(packQty(id) < 1) return {ok:false,msg:"背包里没有"+it.name};
  subPack(id, 1);
  log("你丢掉了"+it.name+"。","info");
  return {ok:true};
}

/* ---------------- 邮电局 ---------------- */
function sendLetter(paid){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  if(S.letters.sent && !S.letters.received) return {ok:false,msg:"信还在路上，收到回信前不能再寄"};
  const needBuyStamp = packQty("stamp_bj") < 1;
  if(needBuyStamp && !paid){
    const pay = autoPayMoney(8); // 0.08元
    if(!pay.ok) return {ok:false,msg:"需要邮票（0.08元），现金还缺 "+fmtFen(pay.need)};
  }
  let cost = 0;
  if(packQty("stamp_bj") >= 1){ subPack("stamp_bj",1); }
  else {
    if(shopStockOf("youdian","stamp_bj") >= 1) S.stock["youdian"]["stamp_bj"]--;
    cost = 0.08;
    addExp(0.08);
  }
  S.letters = {sent:true, sentDay:nowDay(), reply:false, received:false};
  addAff("孙悟空", 1);
  passHour(1);
  log("寄了一封信给东北的大姑（"+fmtMoney(cost)+"元邮票），约15天送达。","good");
  return {ok:true};
}
function checkMail(){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  if(S.letters.received && !S.letters.reply){
    S.letters.reply = true;
    S.letters.sent = false; S.letters.received = false;
    addAff("孙悟空",1);
    return {ok:true,msg:"你取回了大姑的回信，她夸你能干，寄来一小包炒花生（已收下）。"};
  }
  if(S.letters.sent && !S.letters.received) return {ok:false,msg:"信还在路上（约需30天往返）。"};
  return {ok:false,msg:"没有新邮件。"};
}

/* ---------------- 储蓄所（存折） ----------------
   存折可免费办理；存钱=把钱包里的纸币存进去；取钱=取出指定金额（自选面额）；
   每笔交易记录在存折上（含时间）。金额以分(fen)存储。 */
function bankTime(){
  const d = today80();
  const w = ["日","一","二","三","四","五","六"][d.week];
  return d.y+"年"+d.m+"月"+d.d+"日 周"+w+" "+Math.floor(S.hour)+"时";
}
function openBankBook(type){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  type = type==="fixed" ? "fixed" : "live";
  const name = type==="fixed" ? "定期存折" : "活期存折";
  const n = S.bank.filter(b=>b.type===type).length + 1;
  const id = (S.bank.reduce((m,b)=>Math.max(m,b.id||0),0)||0)+1;
  const book = { id, name: n>1 ? name+" "+n : name, type, amt:0, records:[] };
  S.bank.push(book);
  log("免费办理了"+book.name+"。","good");
  return {ok:true, book};
}
/* 存钱：pieces=要存入的纸币面额数组（从钱包取出） */
function bankDeposit(idx, pieces){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  const b = S.bank[idx];
  if(!b) return {ok:false,msg:"无此存折"};
  if(!pieces || !pieces.length) return {ok:false,msg:"请先选择要存入的纸币"};
  const fen = pieces.reduce((a,v)=>a+v,0);
  for(const v of pieces){
    const i = S.walletT.money.indexOf(v);
    if(i>=0) S.walletT.money.splice(i,1);
  }
  b.amt += fen;
  b.records.push({t:bankTime(), type:"存入", amt:fen, detail:"存入纸币 "+pieces.map(fmtFen).join("、")});
  log("存入"+fmtFen(fen)+"到"+b.name+"。","good");
  return {ok:true};
}
/* 取钱：fen=金额(分)，pieces=要取出的纸币面额数组（放入钱包） */
function bankWithdraw(idx, fen, pieces){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  const b = S.bank[idx];
  if(!b) return {ok:false,msg:"无此存折"};
  if(!(fen>0) || !pieces || !pieces.length) return {ok:false,msg:"请指定取款金额"};
  const sum = pieces.reduce((a,v)=>a+v,0);
  if(sum !== fen) return {ok:false,msg:"面额合计与金额不符"};
  if(b.amt < fen) return {ok:false,msg:"余额不足（"+fmtFen(b.amt)+"）"};
  if(tTotalCount("wallet") + pieces.length > tCap("wallet")) return {ok:false,msg:"钱包放不下取出的现金"};
  b.amt -= fen;
  S.walletT.money.push(...pieces);
  b.records.push({t:bankTime(), type:"取出", amt:fen, detail:"取出纸币 "+pieces.map(fmtFen).join("、")});
  log("取出"+fmtFen(fen)+"从"+b.name+"。","good");
  return {ok:true};
}

/* ---------------- 移动 ---------------- */
const VISITFREE = ["meal","movie","post","bank","housing","factory","tailor","home","black"];
function enterLoc(loc){
  const sh = SHOPS[loc];
  if(!sh) return {ok:false,msg:"地点不存在"};
  if(!shopOpen(loc)){
    return {ok:false,msg:sh.name+" 现在打烊了（营业时间 "+hoursText(sh.hours)+"）。现在是 "+nowClock()+"。"};
  }
  S.loc = loc;
  if(loc !== "heishi"){ S.hs.entry = null; S.hs.cur = null; }
  refreshAllShops();
  passHour(0.5); // 前往任何地点耗时30分钟，体力-5
  return {ok:true, msg:sh.name};
}

/* ---------------- 黑市（强子）票据买卖 ---------------- */
const TICKET_PRICE = { grain:0.25, meat:1, wine:1, smoke:0.8, sgrain:0.5, scloth:2, swine:8, ssmoke:4 };
function buyTicket(k, q, paid){
  q = Math.max(1, Math.floor(q)||1);
  const price = TICKET_PRICE[k];
  if(price === undefined) return {ok:false,msg:"这里不卖这种票"};
  const cost = price*q;
  const scale = TICK_SCALE[k]||1;
  if(tTotalCount("wallet") + 1 > tCap("wallet")) return {ok:false,msg:"钱包满了（"+tCap("wallet")+"张）"};
  if(!paid){
    const pay = autoPayMoney(Math.round(cost*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
  }
  addExp(cost);
  S.walletT[k].push(q*scale);
  S.risk += 5;
  if(S.risk >= 60){ S.risk -= 30; log("黑市交易被盯上了！小心联防队。","warn"); }
  log("在黑市花 "+fmtMoney(cost)+" 元买 "+TICK_NAME[k]+"（已放入钱包）。","good");
  return {ok:true};
}
function sellStrong(id, q){
  q = Math.max(1, Math.floor(q)||1);
  const it = ITEMS[id];
  if(!it || !it.strong) return {ok:false,msg:"强子不收这个"};
  if(packQty(id) < q) return {ok:false,msg:"背包没有 "+it.name};
  const price = rndPrice(it.strong.price, it.strong.priceHi);
  const total = price*q;
  const add = addMoneyFen("wallet", Math.round(total*100));
  if(!add.ok) return {ok:false,msg:"钱包放不下卖货的钱，先回家把钱放进储钱罐"};
  subPack(id,q); addInc(total);
  S.risk += 5;
  if(S.risk >= 60){ S.risk -= 30; log("黑市交易太频繁，被联防队盯上了！","warn"); }
  log("把手电筒/电池卖给强子，获得 "+fmtMoney(total)+" 元。","good");
  return {ok:true, total};
}

/* ---------------- 选票支付前询价（不扣钱，先验证） ---------------- */
function mealQuote(order){
  const sh = SHOPS["fandian"];
  if(S.world!=="80" || S.loc!=="fandian") return {ok:false,msg:"不在此处"};
  if(S.mealsToday >= 3) return {ok:false,msg:"今天已吃3顿了"};
  if(S.hour - S.lastMealHour < 4 && S.mealsToday>0) return {ok:false,msg:"刚吃过，间隔不足4小时"};
  let hasStaple=false, costFen=0, grainNeed=0;
  for(const [item,qty0] of Object.entries(order)){
    const qty = Math.floor(qty0)||0; if(qty<=0) continue;
    const sDef = sh.stock.find(x=>x.item===item);
    const sHid = (sh.hiddenStock && isHiddenOpen("fandian")) ? sh.hiddenStock.find(x=>x.item===item) : null;
    const s = sDef || sHid;
    if(!s) return {ok:false,msg:"无此菜"};
    if(shopStockOf("fandian",item) < qty) return {ok:false,msg:ITEMS[item].name+" 不够了"};
    if(s.staple) hasStaple = true;
    costFen += Math.round(s.price*qty*100);
    if(s.staple && s.ticket) grainNeed += (ITEMS[item].tickNeed||1)*qty;
  }
  if(!hasStaple) return {ok:false,msg:"必须点主食"};
  if(grainNeed && tValue("wallet","grain") < grainNeed) return {ok:false,msg:"随身粮票不足（需"+grainNeed+"两）"};
  return {ok:true, costFen, grainNeed};
}
function movieQuote(mid, guest){
  const sh = SHOPS["dianying"];
  const m = sh.stock.find(x=>x.item===mid);
  if(!m) return {ok:false,msg:"无此电影"};
  if(shopStockOf("dianying", mid) < 1) return {ok:false,msg:"票卖完了"};
  if(guest){
    const g = NPCS[guest];
    if(g && g.female && g.married && m.tags.includes("爱情")) return {ok:false,msg:guest+"已婚，不陪你看爱情片"};
    if(g){
      const d = today80(); const mk = d.y+"-"+d.m;
      if(S.movieMonth[guest] === mk) return {ok:false,msg:guest+"这个月已经看过电影了，下个月再约吧。"};
    }
  }
  return {ok:true, costFen:Math.round(m.price*100)};
}
function tailorQuote(type, heightDm){
  const c = SHOPS["caifeng"].clothes.find(x=>x.item===type);
  if(!c) return {ok:false,msg:"无此服装"};
  if((heightDm||18) < 10) return {ok:false,msg:"身高太矮，做不了"};
  const need = clothNeed(heightDm);
  if(packQty(c.material) < need) return {ok:false,msg:"布料不够（需 "+need+" 块"+ITEMS[c.material].name+"）"};
  return {ok:true, costFen:Math.round(c.fee*100), need, material:c.material};
}
function btQuote(k, q){
  const price = TICKET_PRICE[k];
  if(price===undefined) return {ok:false,msg:"这里不卖这种票"};
  if(tTotalCount("wallet") + 1 > tCap("wallet")) return {ok:false,msg:"钱包满了（"+tCap("wallet")+"张）"};
  return {ok:true, costFen:Math.round(price*q*100)};
}
function rentQuote(){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  const h = HOUSES[S.housing];
  if(!S.rentOwed && nowDay() < S.rentPaidTo + 1) return {ok:false,msg:"本月房租已缴。"};
  return {ok:true, costFen:Math.round(h.rent*100)};
}
function letterQuote(){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  if(S.letters.sent && !S.letters.received) return {ok:false,msg:"信还在路上，收到回信前不能再寄"};
  return {ok:true, costFen: packQty("stamp_bj")>=1 ? 0 : 8};
}

/* ---------------- 穿越冷却选择 ---------------- */
function chooseCooldown(days){
  if(![1,7,30].includes(days)) return {ok:false,msg:"冷却只能选 1/7/30 天"};
  S.crossCd = days;
  S.lastCross = -999;
  log("已设定穿越冷却："+days+" 天。穿越后将进入冷却。","info");
  return {ok:true};
}
function cdRemain(){
  if(S.crossCd === null) return null;
  return S.crossCd - (nowDay() - S.lastCross);
}

/* ---------------- 送礼 ---------------- */
function npcLikes(npc, item){
  const it = ITEMS[item];
  if(!npc || !it) return false;
  if(npc.likes && npc.likes.some(l => l===item || it.tags.includes(l))) return true;
  return false;
}
function gift(npcId, item, q){
  q = Math.max(1, Math.floor(q)||1);
  const npc = NPCS[npcId];
  const it = ITEMS[item];
  if(!npc || !it) return {ok:false,msg:"无效"};
  if(packQty(item) < q) return {ok:false,msg:"背包里没有 "+it.name};
  /* 严格：只收喜欢的物品 */
  if(!npcLikes(npc,item)) return {ok:false,msg:npcId+"不喜欢这个，不肯收。"};
  if(item === "beauty"){
    const age = npc.age||0;
    if(!(npc.female && age>=20 && age<=50)) return {ok:false,msg:"美颜丹只对20-50岁女性NPC有效"};
  }
  /* 每月仅收1次礼 */
  const d = today80();
  const mk = d.y+"-"+d.m;
  if(S.giftMonth[npcId] === mk) return {ok:false,msg:npcId+"这个月已经收过礼了，下个月再来吧。"};
  S.giftMonth[npcId] = mk;

  subPack(item,q);
  let gain = 5;
  if(npc.pregUntil && d.y < npc.pregUntil && (it.tags.includes("补品") || item==="sugar" || item==="guantou")) gain = 8;
  if(item==="book_tang" && (npc.likes||[]).includes("诗歌")) gain = 8;
  if(item === "beauty") gain = 30;
  addAff(npcId, gain);
  log("送"+npcId+" "+it.name+"×"+q+"，好感+"+gain+"（当前 "+affOf(npcId)+"）。","good");
  return {ok:true};
}

/* ---------------- 住房 ---------------- */
function payRent(paid){
  if(S.world!=="80") return {ok:false,msg:"不在此处"};
  const h = HOUSES[S.housing];
  if(S.rentOwed || nowDay() >= S.rentPaidTo + 1){
    if(!paid){
      const pay = autoPayMoney(Math.round(h.rent*100));
      if(!pay.ok) return {ok:false,msg:"钱不够缴租（还缺 "+fmtFen(pay.need)+"）"};
    }
    addExp(h.rent);
    S.rentPaidTo = nowDay(); S.rentOwed = false;
    addAff("李婶", 1);
    return {ok:true,msg:"缴纳房租 "+fmtMoney(h.rent)+" 元。"};
  }
  return {ok:false,msg:"本月房租已缴。"};
}
function changeHousing(k){
  const h = HOUSES[k];
  if(!h) return {ok:false,msg:"无此房"};
  if(k === S.housing) return {ok:false,msg:"你现在就住这里"};
  if(k==="brick" && !S.hasJob) return {ok:false,msg:"砖瓦房需要职业（尚未开放）"};
  if(k==="building") return {ok:false,msg:"小楼房需要科长职位（尚未开放）"};
  S.housing = k;
  return {ok:true,msg:"搬到了"+h.name+"（容量"+h.cap+"，月租"+h.rent+"元）"};
}

/* ---------------- 食品厂 ---------------- */
function factoryIntro(){
  if(S.factoryOpen) return true;
  if(affOf("钱所长") >= 60 || affOf("钱老大爷") >= 60){
    S.factoryOpen = true; log("钱厂长愿意和你合作了！红星食品厂开放。","good");
  }
  return S.factoryOpen;
}
function factoryBuyOut(){
  const st = S.stock["shipinchang"] || {};
  return Object.values(st).every(v => v<=0);
}

/* ---------------- 任务系统 ----------------
   规则（doc/3任务系统设计初稿.md）：
   - 任务只能在NPC所在地点接取和提交；
   - 同一NPC同时只能接取1个任务；
   - 等级：1级0-99 / 2级100-499 / 3级500-1999 / 4级2000-9999；
   - 奖励：好感 / 现金（NPC所在世界货币）/ 经验 / 物品。 */
function levelOf(exp){
  if(exp >= 2000) return 4;
  if(exp >= 500) return 3;
  if(exp >= 100) return 2;
  return 1;
}
function questById(qid){ return QUESTS.find(q=>q.id===qid); }
function questActive(qid){ return S.quests.some(x=>x.qid===qid); }
function questDone(qid){ return !!S.questDone[qid]; }
function activeQuestOf(npc){ return S.quests.find(x=>questById(x.qid) && questById(x.qid).npc===npc); }
function questTargetText(q){
  if(q.target.item) return ITEMS[q.target.item].name+" ×"+q.target.qty;
  if(q.target.tag) return "符合「"+q.target.tag+"」的物品 ×"+q.target.qty;
  return "";
}
function questRewardText(q){
  const rw = q.rewards||{};
  const parts=[];
  if(rw.aff) parts.push("好感+"+rw.aff);
  if(rw.money) parts.push("现金"+rw.money+"元");
  if(rw.exp) parts.push("经验+"+rw.exp);
  if(rw.item) parts.push(ITEMS[rw.item].name+(rw.itemQty>1?"×"+rw.itemQty:""));
  return parts.join(" · ");
}
function questProgress(q){
  if(q.target.item) return { have: packQty(q.target.item), need: q.target.qty };
  if(q.target.tag){
    let have = 0;
    for(const it of S.backpack){ if((ITEMS[it.id].tags||[]).includes(q.target.tag)) have += it.qty; }
    return { have, need: q.target.qty };
  }
  return { have:0, need:0 };
}
function takeQuest(qid){
  const q = questById(qid);
  if(!q) return {ok:false,msg:"任务不存在"};
  if(questDone(qid)) return {ok:false,msg:"这个任务已经完成过了"};
  if(questActive(qid)) return {ok:false,msg:"这个任务已经接了"};
  if(S.loc !== NPCS[q.npc].place) return {ok:false,msg:"只能在"+q.npc+"那里接取任务"};
  if(activeQuestOf(q.npc)) return {ok:false,msg:q.npc+"有任务在身，完成后再来接新任务"};
  S.quests.push({ qid });
  log("接取任务：「"+q.name+"」","good");
  return {ok:true};
}
function submitQuest(qid){
  const q = questById(qid);
  if(!q) return {ok:false,msg:"任务不存在"};
  if(!questActive(qid)) return {ok:false,msg:"还没有接这个任务"};
  if(S.loc !== NPCS[q.npc].place) return {ok:false,msg:"只能在"+q.npc+"那里提交任务"};
  const pr = questProgress(q);
  if(pr.have < pr.need) return {ok:false,msg:"还缺 "+questTargetText(q)+"（已有 "+pr.have+"）"};
  /* 消耗物品 */
  if(q.target.item){
    subPack(q.target.item, q.target.qty);
  } else if(q.target.tag){
    let left = q.target.qty;
    for(const it of S.backpack){
      if(left<=0) break;
      if((ITEMS[it.id].tags||[]).includes(q.target.tag)){
        const take = Math.min(it.qty, left);
        subPack(it.id, take);
        left -= take;
      }
    }
  }
  /* 发放奖励 */
  const rw = q.rewards||{};
  if(rw.aff) addAff(q.npc, rw.aff);
  if(rw.exp){
    const before = levelOf(S.exp);
    S.exp += rw.exp;
    if(levelOf(S.exp) > before) log("经验提升，等级升至 Lv"+levelOf(S.exp)+"！","good");
  }
  if(rw.money){
    if((NPCS[q.npc]||{}).world === "26"){ S.money["26"] += rw.money; addInc(rw.money); }
    else addMoneyFen("wallet", Math.round(rw.money*100), true);
  }
  if(rw.item) addPack(rw.item, rw.itemQty||1);
  S.questDone[qid] = true;
  S.quests = S.quests.filter(x=>x.qid!==qid);
  log("完成任务「"+q.name+"」！","good");
  return {ok:true};
}

/* ================================================================
   黑市（强子）系统
   - 只在夜里 18 点 ~ 次日 6 点开门；
   - 进入方式：买门票（2角可买卖/1角只买，均有望风）或溜进去（免费无望风）；
   - 20 个摊位：门口 4（±20%）、中间 12（±5%）、里面 4（-10%），每天刷新 5~20 个路人摊贩；
   - 摊贩三种：票据贩子 / 商品贩子 / 交换商人；玩家可在空摊位摆摊；
   - 随机突击检查（见 hsRaid）。
   ================================================================ */
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=rand(0,i); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function hsOpen(){ const now = S.hour*60 + S.minute; return now >= HEISHI.openHour*60 || now < HEISHI.closeHour*60; }
function hsZone(i){ return i<4 ? "gate" : (i<16 ? "mid" : "inner"); }
function hsZoneDef(zone){ return HEISHI.zones.find(z=>z.id===zone); }
function hsZoneIdx(i){ return i<4 ? i : (i<16 ? i-4 : i-16); }
function hsStallName(i){
  const z = hsZone(i), n = hsZoneIdx(i)+1;
  if(z==="gate") return "门口摊子"+n;
  if(z==="mid") return "中间摊子"+n;
  return "里面摊子"+n;
}
function hsNow(){
  const d = dateOf("80");
  return d.y+"年"+d.m+"月"+d.d+"日 周"+"日一二三四五六"[d.week]+" "+nowClock();
}
function itemRefValue(id){
  const it = ITEMS[id];
  if(it.strong) return (it.strong.price + it.strong.priceHi)/2;
  return ITEM_REF[id] || 1;
}
function itemNation(it){ return it.nation || "中国"; }
function itemOrigin(it){ return it.origin || "北京"; }

/* ---------------- 物品等级（属性数字等级 → 颜色） ----------------
   属性标签带数字即为等级（如"奢侈品3"=3级），无数字=1级，取最高。
   1黑 / 2绿 / 3蓝 / 4紫 / 5金 */
const LV_COLOR = ["#1f2937","#16a34a","#2563eb","#9333ea","#d97706"];
function itemLevel(it){
  let lv = 1;
  for(const t of (it.tags||[])){
    const m = String(t).match(/(\d+)\s*$/);
    if(m) lv = Math.max(lv, parseInt(m[1],10));
  }
  return Math.max(1, Math.min(5, lv));
}
function itemNameHtml(id){
  const it = ITEMS[id];
  if(!it) return "？";
  const lv = itemLevel(it);
  return `<span style="color:${LV_COLOR[lv-1]};${lv>=3?"font-weight:700":""}">${it.name}</span>`;
}
function itemNamePlain(it){
  const lv = itemLevel(it);
  return (lv>=2 ? "("+lv+"级)" : "") + it.name;
}

/* 生成摊位（每天一次） */
function hsGenStalls(){
  if(S.hs.day === nowDay()) return;
  S.hs.day = nowDay();
  S.hs.stalls = [];
  const gate=[0,1,2,3], mid=[4,5,6,7,8,9,10,11,12,13,14,15], inner=[16,17,18,19];
  shuffle(gate); shuffle(mid); shuffle(inner);
  const order = gate.concat(mid, inner);
  const nP = rand(5,20);
  const used = new Set(order.slice(0,nP));
  for(let i=0;i<20;i++){
    const st = { i, zone:hsZone(i), npc:null };
    if(used.has(i)){
      const type = ["ticket","goods","exchange"][rand(0,2)];
      st.npc = { name:"路人"+(i+1), type, goods:hsGenGoods(type) };
    }
    S.hs.stalls.push(st);
  }
  S.hs.mine = { slot:-1, items:[], opened:false };
}
function hsGenGoods(type){
  const pool = type==="ticket" ? HEISHI.tickets : type==="goods" ? HEISHI.goods : HEISHI.exchange;
  const n = rand(2, Math.min(4, pool.length));
  const idx = new Set();
  while(idx.size < n) idx.add(rand(0, pool.length-1));
  const out = [];
  for(const k of idx){
    const g = pool[k];
    const qty = rand(g.qty[0], g.qty[1]);
    if(qty > 0) out.push(Object.assign({}, g, { qty }));
  }
  return out.length ? out : hsGenGoods(type); // 至少要有货
}

/* 进入黑市 */
function hsEnter(mode){
  if(!hsOpen()) return {ok:false,msg:"黑市还没开门（18点-次日6点）"};
  if(S.hs.entry) return {ok:true, mode:S.hs.entry};
  if(mode==="ticket2"){
    const pay = autoPayMoney(20);
    if(!pay.ok) return {ok:false,msg:"缴不起门票（2角）"};
    addExp(0.2);
    S.hs.entry = "ticket2";
    log("缴 2 角门票进入黑市，有专人望风。","info");
  } else if(mode==="ticket1"){
    const pay = autoPayMoney(10);
    if(!pay.ok) return {ok:false,msg:"缴不起门票（1角）"};
    addExp(0.1);
    S.hs.entry = "ticket1";
    log("缴 1 角门票进入黑市（只买不卖），有专人望风。","info");
  } else {
    S.hs.entry = "sneak";
    log("你偷偷溜进了黑市，没人望风，小心被抓。","warn");
  }
  hsGenStalls();
  return {ok:true, mode:S.hs.entry};
}
function hsBuyOnly(){ return S.hs.entry === "ticket1"; }

/* 进入某个摊位（耗时30分钟） */
function hsEnterStall(i){
  if(S.hs.entry === null) return {ok:false,msg:"还没进黑市"};
  const st = S.hs.stalls.find(x=>x.i===i);
  if(!st || !st.npc) return {ok:false,msg:"这个摊位没人"};
  S.hs.cur = i;
  passHour(0.5);
  return {ok:true};
}

/* 在摊贩处购买（票据贩子 / 商品贩子） */
function hsBuy(slot, key, qty){
  const st = S.hs.stalls.find(x=>x.i===slot);
  if(!st || !st.npc) return {ok:false,msg:"这个摊位没人"};
  qty = Math.max(1, Math.floor(qty)||1);
  if(st.npc.type==="ticket"){
    const g = st.npc.goods.find(x=>x.type===key);
    if(!g) return {ok:false,msg:"没有这种票"};
    if(qty > g.qty) return {ok:false,msg:"票不够（剩 "+g.qty+"）"};
    const mult = hsZoneDef(st.zone).mult;
    const total = Math.round(g.price*mult*qty*100)/100;
    const scale = TICK_SCALE[key]||1;
    if(tTotalCount("wallet") + 1 > tCap("wallet")) return {ok:false,msg:"钱包满了（"+tCap("wallet")+"张）"};
    const pay = autoPayMoney(Math.round(total*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
    addExp(total); g.qty -= qty;
    S.walletT[key].push(qty*scale);
    hsRaidChance();
    log("在黑市"+hsStallName(slot)+"买得 "+TICK_NAME[key]+"×"+qty+"，花 "+fmtMoney(total)+" 元。","good");
    return {ok:true, total};
  }
  if(st.npc.type==="goods"){
    const g = st.npc.goods.find(x=>x.item===key);
    if(!g) return {ok:false,msg:"没有这个货"};
    if(qty > g.qty) return {ok:false,msg:"货不够（剩 "+g.qty+"）"};
    const mult = hsZoneDef(st.zone).mult;
    const total = Math.round(g.price*mult*qty*100)/100;
    if(packWeight() + qty > backpackCap()) return {ok:false,msg:"背包装不下（"+backpackCap()+"）"};
    const pay = autoPayMoney(Math.round(total*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
    addExp(total); g.qty -= qty;
    addPack(g.item, qty);
    hsRaidChance();
    log("在黑市"+hsStallName(slot)+"买入 "+ITEMS[g.item].name+"×"+qty+"，花 "+fmtMoney(total)+" 元。","good");
    return {ok:true, total};
  }
  return {ok:false,msg:"这是交换商人，要用东西换"};
}

/* 交换商人：玩家出价低于货值80%会被赶出摊子 */
function hsExchange(slot, wantKey, offerId, offerQty){
  const st = S.hs.stalls.find(x=>x.i===slot);
  if(!st || !st.npc || st.npc.type!=="exchange") return {ok:false,msg:"不是交换商人"};
  const g = st.npc.goods.find(x=>x.item===wantKey);
  if(!g || g.qty<=0) return {ok:false,msg:"这个货已经没了"};
  offerQty = Math.max(1, Math.floor(offerQty)||1);
  if(packQty(offerId) < offerQty) return {ok:false,msg:"你没有那么多 "+ITEMS[offerId].name};
  const wantVal = g.value * g.qty;
  const offerVal = itemRefValue(offerId) * offerQty;
  if(offerVal < wantVal * 0.8){
    S.hs.cur = null;
    return {ok:false,msg:"交换商人识货，嫌你出价太低，把你赶出了摊子！"};
  }
  subPack(offerId, offerQty);
  const gotQty = g.qty; g.qty = 0;
  addPack(g.item, gotQty);
  hsRaidChance();
  log("用 "+ITEMS[offerId].name+"×"+offerQty+" 换得 "+ITEMS[g.item].name+"×"+gotQty+"。","good");
  return {ok:true};
}

/* 玩家摆摊 */
function hsMineSlot(){
  const i = S.hs.mine.slot;
  return i>=0 ? S.hs.stalls.find(x=>x.i===i) : null;
}
function hsList(slot, id, qty, price){
  if(hsBuyOnly()) return {ok:false,msg:"你买的是「只买不卖」的门票，不能摆摊"};
  const st = S.hs.stalls.find(x=>x.i===slot);
  if(!st || st.npc) return {ok:false,msg:"这个摊位被占了"};
  if(S.hs.mine.slot>=0 && S.hs.mine.slot!==slot) return {ok:false,msg:"你已经占了别的摊子"};
  if(S.hs.mine.opened) return {ok:false,msg:"已经开张了，先收摊"};
  qty = Math.max(1, Math.floor(qty)||1);
  if(packQty(id) < qty) return {ok:false,msg:"背包里没有那么多"};
  price = Math.max(0.01, Number(price)||0.01);
  S.hs.mine.slot = slot;
  subPack(id, qty);
  S.hs.mine.items.push({id, qty, price});
  return {ok:true,msg:"已上架 "+ITEMS[id].name+"×"+qty+"（标价 "+fmtMoney(price)+" 元/件）"};
}
function hsUnlist(i){
  const it = S.hs.mine.items[i];
  if(!it) return {ok:false,msg:"没有这条"};
  S.hs.mine.items.splice(i,1);
  if(packWeight()+it.qty > backpackCap()) log("背包满了，退回的 "+ITEMS[it.id].name+"×"+it.qty+" 被丢弃。","warn");
  else addPack(it.id, it.qty);
  return {ok:true};
}
function hsOpenStall(){
  if(S.hs.mine.slot < 0) return {ok:false,msg:"还没摆摊"};
  if(S.hs.mine.items.length===0) return {ok:false,msg:"还没上货"};
  if(S.hs.mine.opened) return {ok:false,msg:"已经开张了"};
  S.hs.mine.opened = true;
  const buyerN = hsZoneDef(hsZone(S.hs.mine.slot)).buyerN;
  const zMult = hsZoneDef(hsZone(S.hs.mine.slot)).mult;
  const sold = [], nope = [];
  for(let b=0;b<buyerN;b++){
    if(S.hs.mine.items.length===0) break;
    const idx = rand(0, S.hs.mine.items.length-1);
    const it = S.hs.mine.items[idx];
    // 买家心理价 = 参考价 × 摊子浮动 × (1 ± 30%)；标价太高会被拒买
    const fair = itemRefValue(it.id) * zMult * (1 + rand(-30,30)/100);
    if(it.price <= fair){
      sold.push({ name:ITEMS[it.id].name, qty:it.qty, price:it.price });
      S.hs.mine.items.splice(idx,1);
      addMoneyFen("wallet", Math.round(it.price*it.qty*100), true);
    } else {
      nope.push({ name:ITEMS[it.id].name, price:it.price, fair:Math.round(fair*100)/100 });
    }
  }
  S.hs.mine.opened = false;
  hsRaidChance();
  const gain = sold.reduce((s,x)=>s+x.price*x.qty,0);
  log("摆摊开张，来了 "+buyerN+" 个买家，成交 "+sold.length+" 单，进账 "+fmtMoney(gain)+" 元。","good");
  for(const n of nope) log("有买家嫌 "+n.name+" 定价 "+fmtMoney(n.price)+" 太贵（最多只肯出约 "+fmtMoney(n.fair)+"），没买。","warn");
  return {ok:true, sold, nope, gain};
}
function hsTakeDown(){
  if(S.hs.mine.slot < 0) return {ok:false,msg:"没有摆摊"};
  for(const it of S.hs.mine.items){
    if(packWeight()+it.qty <= backpackCap()) addPack(it.id, it.qty);
    else log("背包满了，"+ITEMS[it.id].name+"×"+it.qty+" 丢弃。","warn");
  }
  S.hs.mine = { slot:-1, items:[], opened:false };
  return {ok:true,msg:"已收摊，货物退回背包"};
}

/* 突击检查 */
function hsRaidChance(){
  if(S.hs.entry === null) return;
  if(Math.random() > 0.12) return;
  hsRaid();
}
function hsRaid(){
  const warned = (S.hs.entry==="ticket2" || S.hs.entry==="ticket1") && Math.random() < 0.7;
  if(warned){ log("望风的来报有检查，你提前溜出了黑市。","warn"); hsLeave(); return; }
  const d = dateOf("80");
  const weekend = d.week===0 || d.week===6;
  if(!weekend){
    hsConfiscate(false);
    log("公安局突击检查！现金、票据、货物全被没收（衣服除外），你被赶了出来。","err");
  } else {
    const aff = affOf("李婶");
    const pm = autoPayMoney;
    if(aff > 80){ log("李婶带队检查，看你面熟，直接放你走了。","good"); }
    else if(aff > 60){
      if(pm(100).ok){ addExp(1); log("李婶带队检查，罚你 1 元放行。","warn"); }
      else { hsConfiscate(false); log("交不上罚款，李婶没收了你的现金和货物。","err"); }
    }
    else if(aff > 30){
      const nonCloth = S.backpack.filter(x=>ITEMS[x.id].charm===undefined);
      let taken = "";
      if(nonCloth.length){ const t=nonCloth[rand(0,nonCloth.length-1)]; subPack(t.id,1); taken=ITEMS[t.id].name; }
      if(pm(300).ok) addExp(3);
      log("李婶带队检查：没收一件"+(taken||"货物")+"，罚 3 元放行。","warn");
    }
    else {
      if(backpackValue() < 3){ hsConfiscate(true); log("你身上没什么值钱的，李婶没收了你的票据。","err"); }
      else { hsConfiscate(false); log("李婶没收了你全部现金和货物后放了你。","err"); }
    }
  }
  hsLeave();
}
function backpackValue(){
  let v=0; for(const it of S.backpack){ v += itemRefValue(it.id)*it.qty; } return v;
}
function hsConfiscate(keepClothes){
  for(const k in S.walletT) S.walletT[k] = [];
  if(keepClothes) S.backpack = S.backpack.filter(x=>ITEMS[x.id].charm!==undefined);
  else S.backpack = [];
  S.hs.mine = { slot:-1, items:[], opened:false };
}
function hsLeave(){
  S.hs.entry = null; S.hs.cur = null; S.hs.mine = { slot:-1, items:[], opened:false };
  S.loc = "home80";
}

/* ================================================================
   福利彩票 · 刮刮乐（顾老板）
   - 档位：5/10/20/50 元，倍率一致（奖金 = 票价 × 倍率）；
   - 每张 3 个数字（000-999），逐个刮开，全开后按号码查 LOTTERY 表兑奖；
   - 类型：豹子20倍 / 顺子5倍 / 对子1倍 / 幸运号1倍 / 未中奖0。
   ================================================================ */
function lottoMult(num){ return LOTTERY[parseInt(num,10)] || 0; }
function lottoType(num){
  const n = String(num).padStart(3,"0").split("").map(Number);
  if(n[0]===n[1] && n[1]===n[2]) return "豹子";
  const asc = n[1]===n[0]+1 && n[2]===n[1]+1;
  const desc = n[1]===n[0]-1 && n[2]===n[1]-1;
  if(asc || desc) return "顺子";
  if(n[0]===n[1] || n[1]===n[2] || n[0]===n[2]) return "对子";
  return lottoMult(num)===1 ? "幸运号" : "未中奖";
}
function buyLottery(tier, n){
  tier = Number(tier);
  if(![5,10,20,50].includes(tier)) return {ok:false,msg:"档位无效"};
  n = Math.max(1, Math.floor(n)||1);
  const cost = tier * n;
  if(S.money["26"] < cost) return {ok:false,msg:"现金不够（需 "+fmtMoney(cost)+" 元）"};
  S.money["26"] -= cost; addExp(cost);
  for(let i=0;i<n;i++){
    const num = String(rand(0,999)).padStart(3,"0");
    S.lottery.push({ num, cost:tier, scratch:[false,false,false], done:false, prize:0 });
  }
  log("你买了 "+n+" 张 "+tier+" 元刮刮乐，共花 "+fmtMoney(cost)+" 元。","info");
  return {ok:true};
}
function scratchTicket(i, k){
  const t = S.lottery[i];
  if(!t) return {ok:false,msg:"没有这张彩票"};
  if(t.done) return {ok:false,msg:"这张已经兑奖了"};
  if(t.scratch[k]) return {ok:false,msg:"这个数字已经刮开了"};
  t.scratch[k] = true;
  if(t.scratch.every(Boolean)){
    t.done = true;
    t.prize = t.cost * lottoMult(t.num);
    if(t.prize > 0){ S.money["26"] += t.prize; addInc(t.prize); }
    const type = lottoType(t.num);
    log("刮开 "+t.num+"（"+type+"）："+(t.prize>0?"中奖 "+fmtMoney(t.prize)+" 元！":"未中奖。"), t.prize>0?"good":"info");
    return {ok:true, done:true, prize:t.prize, type, num:t.num};
  }
  return {ok:true, digit:t.num[k], k};
}

/* ================================================================
   网购 / 网店 / 快递站（阿狸bb）
   - 网购：老家网络面板下单，3 天到快递站领取；
   - 网店：老家上架商品，快递站发货（付邮费），3 天买家收货入账；
   - 店铺等级：累计发货件数提升，等级越高上架位越多。
   ================================================================ */
function netRefreshGoods(force){
  if(force){
    if(S.money["26"] < NET.refreshFee) return {ok:false,msg:"手动刷新需 "+fmtMoney(NET.refreshFee)+" 元"};
    S.money["26"] -= NET.refreshFee; addExp(NET.refreshFee);
  } else if(S.net.goodsDay === nowDay()) return {ok:true};
  S.net.goodsDay = nowDay();
  const n = rand(10,100);
  S.net.goods = [];
  for(let i=0;i<n;i++){
    const item = NET.items[rand(0,NET.items.length-1)];
    const g = S.net.goods.find(x=>x.item===item);
    if(g && g.qty < 99) g.qty++;
    else S.net.goods.push({ item, shop:NET.shops[rand(0,NET.shops.length-1)], qty:1 });
  }
  if(force) log("已花 "+fmtMoney(NET.refreshFee)+" 元手动刷新阿狸bb货源。","info");
  return {ok:true};
}
function netBuy(item, qty){
  const g = S.net.goods.find(x=>x.item===item);
  qty = Math.max(1, Math.floor(qty)||1);
  if(!g || g.qty < qty) return {ok:false,msg:"平台库存不足"};
  const cost = Math.round(ITEMS[item].modern*qty*100)/100;
  if(S.money["26"] < cost) return {ok:false,msg:"钱不够（需 "+fmtMoney(cost)+" 元）"};
  S.money["26"] -= cost; addExp(cost);
  g.qty -= qty;
  S.net.bought.push({ item, qty, arriveDay: nowDay()+NET.arriveDays });
  log("网购了 "+ITEMS[item].name+"×"+qty+"（"+fmtMoney(cost)+" 元），约 "+NET.arriveDays+" 天后到快递站。","info");
  return {ok:true};
}
function netCollect(){
  let got = 0;
  for(const p of S.net.bought){
    if(nowDay() >= p.arriveDay){ addPack(p.item, p.qty); got += p.qty; p.done = true; }
  }
  S.net.bought = S.net.bought.filter(p=>!p.done);
  if(got>0) log("在快递站领到网购包裹，共 "+got+" 件。","good");
  return {ok:true, got};
}
/* 网店 */
function netOpenShop(){ if(S.net.shopOpen) return {ok:false,msg:"已经开店了"}; S.net.shopOpen = true; log("你在阿狸bb开启了网店！","good"); return {ok:true}; }
function netList(item, qty, price, postpaid){
  if(!S.net.shopOpen) return {ok:false,msg:"还没开店"};
  qty = Math.max(1, Math.floor(qty)||1);
  if(packQty(item) < qty) return {ok:false,msg:"背包里没有那么多"};
  if(S.net.listings.length >= 3 + S.net.shopLevel) return {ok:false,msg:"上架位已满（等级 "+S.net.shopLevel+" 可上 "+ (3+S.net.shopLevel) +" 个）"};
  subPack(item,qty);
  S.net.listings.push({ lid:String(Math.random()).slice(2,10), item, price:Math.max(0.01, Number(price)||1), qty, postpaid:!!postpaid });
  return {ok:true};
}
function netUnlist(lid){
  const l = S.net.listings.find(x=>x.lid===lid);
  if(!l) return {ok:false,msg:"没有这个商品"};
  S.net.listings = S.net.listings.filter(x=>x.lid!==lid);
  addPack(l.item, l.qty);
  return {ok:true};
}
function netGenOrders(){ // 每天固定来 1 个顾客，看上一个上架商品，价格合理就买
  const on = S.net.listings.filter(l=>l.qty>0);
  if(!on.length) return;
  const l = on[rand(0, on.length-1)];
  const fair = modernValue(l.item) * 1.2; // 心理价：现代参考价120%以内
  if(l.price > fair){
    log("来了一位顾客，看了"+ITEMS[l.item].name+"嫌 "+fmtMoney(l.price)+" 太贵（市场价约 "+fmtMoney(modernValue(l.item))+"），没买。","warn");
    return;
  }
  const buyQty = Math.min(l.qty, rand(1,3));
  l.qty -= buyQty;
  S.net.orders.push({ oid:String(Math.random()).slice(2,14), item:l.item, qty:buyQty, price:l.price, postpaid:l.postpaid, no:"", shipDay:-1, arriveDay:-1, state:"new" });
  log("来了一位顾客，看中了你的"+ITEMS[l.item].name+"，下单 ×"+buyQty+"。","good");
  if(S.net.listings.length) S.net.listings = S.net.listings.filter(x=>x.qty>0);
}
/* 现代市场参考价：网购特产→modern；收藏品→sell中间值；其余→参考价 */
function modernValue(id){
  const it = ITEMS[id];
  if(it.modern !== undefined) return it.modern;
  if(it.sell !== undefined) return Math.round((it.sell + (it.sellHi||it.sell))/2);
  return Math.max(1, itemRefValue(id));
}
function netShip(oid){
  const o = S.net.orders.find(x=>x.oid===oid);
  if(!o || o.state!=="new") return {ok:false,msg:"订单不存在或已发货"};
  if(o.postpaid){ if(S.money["26"]<NET.postFee) return {ok:false,msg:"包邮商品需先付运费 5 元"}; S.money["26"]-=NET.postFee; addExp(NET.postFee); }
  o.shipDay = nowDay(); o.arriveDay = nowDay()+NET.arriveDays; o.state = "ship";
  o.no = "ALI-"+String(Math.random()).slice(2,8).toUpperCase();
  log("已发货 "+ITEMS[o.item].name+"×"+o.qty+"（运单 "+o.no+"），3天后买家收货。","info");
  return {ok:true};
}
function netDeliver(){ // 到货结算
  let earn=0, n=0;
  for(const o of S.net.orders){
    if(o.state==="ship" && nowDay()>=o.arriveDay){
      const amount = Math.round((o.price*o.qty + (o.postpaid?0:NET.postFee))*100)/100; // 不包邮买家出邮费
      S.money["26"] += amount; addInc(amount);
      earn+=amount; n+=o.qty; o.state="done";
      S.net.shopExp += o.qty;
      S.net.soldAll += o.qty; S.net.soldMonth += o.qty;
      S.net.earnAll += amount; S.net.earnMonth += amount;
    }
  }
  const lv = 1 + Math.floor(S.net.shopExp/10);
  if(lv > S.net.shopLevel){ S.net.shopLevel = Math.min(5,lv); log("网店升到 "+S.net.shopLevel+" 级！可上架 "+ (3+S.net.shopLevel) +" 件商品。","good"); }
  const mk = Math.floor(nowDay()/30);
  if(S.net.statDay !== mk){ S.net.statDay = mk; S.net.soldMonth = 0; S.net.earnMonth = 0; }
  if(n>0) log("网店有 "+n+" 件货被买家确认收货，进账 "+fmtMoney(earn)+" 元。","good");
  return {ok:true, earn, n};
}

/* ================================================================
   热闹街区（周大哥）· 公开版黑市
   - 6-18点营业，无检查；
   - 进店免费，摆摊租摊位（1角/天，每天最多+3好感）；
   - 玩家摆摊买家出价 = 物品参考价 × 0.5（黑市价的一半，合法低价）；
   - 固定摊贩：老农卖菜（便宜1分）、职工卖粮票布票（黑市价80%）。
   ================================================================ */
function stGen(){
  if(S.street.day === nowDay()) return;
  S.street.day = nowDay();
  S.street.stalls = [];
  for(let i=0;i<15;i++){
    if(i < SHOPS["rejie"].stalls.length){
      const tpl = SHOPS["rejie"].stalls[i];
      const goods = tpl.goods.map(g=>{
        if(g.item) return { item:g.item, qty:rand(g.qty[0],g.qty[1]), price:g.price };
        return { type:g.type, qty:rand(g.qty[0],g.qty[1]), price:g.price };
      });
      S.street.stalls.push({ i, npc:tpl.npc, goods, mine:i===S.street.mine.slot });
    } else {
      S.street.stalls.push({ i, npc:null, goods:[], mine:i===S.street.mine.slot });
    }
  }
}
function stRent(slot){
  if(S.street.rented && S.street.rentDay===nowDay()) return {ok:false,msg:"今天已租过摊位"};
  if(S.street.rentDay !== nowDay()){
    const pay = autoPayMoney(Math.round(0.1*100));
    if(!pay.ok) return {ok:false,msg:"付不起 1 角租金"};
    addExp(0.1);
    S.street.rentDay = nowDay();
    if(S.street.mine.slot<0) addAff("周大哥", 1);
  }
  S.street.mine.slot = slot; S.street.rented = true;
  S.street.mine = { slot, items:[], opened:false };
  S.street.stalls.forEach(x=>{ x.mine = (x.i===slot); });
  log("租下了热闹街区摊位（每天1角）。","info");
  return {ok:true};
}
function stBuy(slot, key, qty){
  const st = S.street.stalls.find(x=>x.i===slot);
  if(!st || !st.npc) return {ok:false,msg:"这是空摊位"};
  qty = Math.max(1, Math.floor(qty)||1);
  const g = st.goods.find(x=>(x.item||x.type)===key);
  if(!g || g.qty<qty) return {ok:false,msg:"货不够"};
  if(g.item){
    if(packWeight()+qty > backpackCap()) return {ok:false,msg:"背包装不下"};
    const total = Math.round(g.price*qty*100)/100;
    const pay = autoPayMoney(Math.round(total*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
    addExp(total); g.qty-=qty; addPack(g.item, qty);
    log("在热闹街区买得 "+ITEMS[g.item].name+"×"+qty+"，花 "+fmtMoney(total)+" 元。","good");
    return {ok:true, total};
  } else {
    const scale = TICK_SCALE[g.type]||1;
    const total = Math.round(g.price*qty*100)/100;
    if(tTotalCount("wallet")+1 > tCap("wallet")) return {ok:false,msg:"钱包满了"};
    const pay = autoPayMoney(Math.round(total*100));
    if(!pay.ok) return {ok:false,msg:"钱不够（还缺 "+fmtFen(pay.need)+"）"};
    addExp(total); g.qty-=qty; S.walletT[g.type].push(qty*scale);
    log("在热闹街区买得 "+TICK_NAME[g.type]+"×"+qty+"，花 "+fmtMoney(total)+" 元。","good");
    return {ok:true, total};
  }
}
function stList(slot, id, qty, price){
  if(S.street.mine.slot<0) return {ok:false,msg:"还没租摊位"};
  qty = Math.max(1, Math.floor(qty)||1);
  if(packQty(id)<qty) return {ok:false,msg:"背包不够"};
  S.street.mine.slot = slot; S.street.mine.opened = false;
  subPack(id,qty);
  S.street.mine.items.push({ id, qty, price:Math.max(0.01, Number(price)||1) });
  return {ok:true};
}
function stUnlist(i){
  const it = S.street.mine.items[i];
  if(!it) return {ok:false,msg:"没有这条"};
  S.street.mine.items.splice(i,1);
  if(packWeight()+it.qty<=backpackCap()) addPack(it.id, it.qty);
  return {ok:true};
}
function stOpen(){
  if(S.street.mine.slot<0) return {ok:false,msg:"还没租摊位"};
  if(S.street.mine.items.length===0) return {ok:false,msg:"还没上货"};
  if(S.street.mine.opened) return {ok:false,msg:"已经开张"};
  S.street.mine.opened = true;
  const sold=[];
  // 热闹街区买家出价 = 参考价 × 0.5（黑市一半）
  for(let b=0;b<3;b++){
    if(S.street.mine.items.length===0) break;
    const idx = rand(0, S.street.mine.items.length-1);
    const it = S.street.mine.items[idx];
    const fair = itemRefValue(it.id) * 0.5;
    if(it.price <= fair){
      sold.push({ name:ITEMS[it.id].name, qty:it.qty, price:it.price });
      S.street.mine.items.splice(idx,1);
      addMoneyFen("wallet", Math.round(it.price*it.qty*100), true);
    }
  }
  S.street.mine.opened = false;
  const gain = sold.reduce((s,x)=>s+x.price*x.qty,0);
  log("热闹街区开张，成交 "+sold.length+" 单，进账 "+fmtMoney(gain)+" 元。","good");
  return {ok:true, sold, gain};
}
function stTakeDown(){
  if(S.street.mine.slot<0) return {ok:false,msg:"没有摊位"};
  for(const it of S.street.mine.items){ if(packWeight()+it.qty<=backpackCap()) addPack(it.id,it.qty); }
  S.street.mine = { slot:-1, items:[], opened:false };
  return {ok:true,msg:"已收摊，货物退回背包"};
}
