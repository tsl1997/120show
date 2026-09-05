/* ============================================================
 * engine.js — 万界店主 游戏引擎
 * 依赖：data_core.js 及 data_acts/*.js（均挂到 window.SS）
 * ============================================================ */
(function(){
"use strict";

var SAVE_KEY = "wanjie_dianzhu_save_";
var SAVE_COUNT = 4;
var $ = function(id){ return document.getElementById(id); };

/* ---------------- 状态 ----------------
 * state = {
 *   curAct, curScene, lineIdx,
 *   vp, rmb, gd, wb, star,
 *   items:{}, flags:{}, skills:{}, staff:[],
 *   chars:{}, worlds:{}, mems:{}, ach:{},
 *   actSeen:{}, actDone:{}, finished:bool
 * }
 * ----------------------------------- */
function defaultState(){
  return {
    curAct:"act1", curScene:"s1", lineIdx:0,
    vp:0, rmb:6000, gd:0, wb:1, star:1,
    items:{}, flags:{}, skills:{}, staff:[],
    chars:{}, worlds:{earth:1, wanjie:1}, mems:{}, ach:{},
    actSeen:{}, actDone:{}, finished:false, started:true
  };
}
function clone(o){ return JSON.parse(JSON.stringify(o)); }
function actIndex(actId){
  for(var i=0;i<SS.ACT_CONFIG.length;i++) if(SS.ACT_CONFIG[i].id===actId) return i;
  return 0;
}

var state = null;
var typing = null;        // {timer, full, pos}
var linePos = 0;
var sceneDone = false;    // 当前场景对白是否播完
var busy = false;

var elems = {};

/* ---------------- 工具 ---------------- */
function toast(msg, ms){
  var t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(function(){ t.classList.remove("show"); }, ms||2600);
}
function showOverlay(cfg){
  return new Promise(function(res){
    var ov = $("overlay");
    var card = $("overlay-card");
    card.innerHTML =
      '<div class="big-txt">'+cfg.big+'</div>'+
      (cfg.mid?'<div class="mid-txt">'+cfg.mid+'</div>':'')+
      (cfg.sub?'<div class="sub-txt">'+cfg.sub+'</div>':'')+
      (cfg.btn?'<button class="btn gold" id="ov-btn">'+(cfg.btn||'确定')+'</button>':'');
    ov.classList.remove("hidden");
    var done = false;
    var fin = function(){ if(done) return; done=true; ov.classList.add("hidden"); card.innerHTML=""; res(); };
    var b = $("ov-btn");
    if(b) b.addEventListener("click", fin);
    else { setTimeout(fin, cfg.auto||1800); }
  });
}
function esc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function fmtNum(n){
  if(n>=1e8) return (n/1e8).toFixed(2)+"亿";
  if(n>=1e4) return (n/1e4).toFixed(2)+"万";
  return String(n);
}

/* ---------------- 图鉴数据 ---------------- */
function charById(id){
  for(var i=0;i<SS.CHARS.length;i++) if(SS.CHARS[i].id===id) return SS.CHARS[i];
  return null;
}
function goodById(id){
  for(var i=0;i<SS.GOODS.length;i++) if(SS.GOODS[i].id===id) return SS.GOODS[i];
  return null;
}
function skillById(id){
  for(var i=0;i<SS.SKILLS.length;i++) if(SS.SKILLS[i].id===id) return SS.SKILLS[i];
  return null;
}
function custById(id){
  for(var i=0;i<SS.CUSTOMERS.length;i++) if(SS.CUSTOMERS[i].id===id) return SS.CUSTOMERS[i];
  return null;
}

/* ---------------- 效果指令 ---------------- */
function applyEffects(effects, ctx){
  if(!effects) return;
  if(typeof effects === "string") effects = [effects];
  if(!Array.isArray(effects)) return;
  var logs = [];
  effects.forEach(function(e){
    if(typeof e === "string"){ logs.push(e); return; }
    if(!Array.isArray(e)) return;
    var op = e[0];
    switch(op){
      case "add":{
        var name = e[1], n = e[2];
        if(name==="价值点") state.vp += n;
        else if(name==="华夏币") state.rmb += n;
        else if(name==="功德") state.gd += n;
        logs.push(name + (n>=0?" +":" ") + fmtNum(Math.abs(n)));
        break;
      }
      case "flag": state.flags[e[2]] = (e[1]==="on"); break;
      case "item":{
        var id = e[2], cnt = e[3]||1, sign = e[1]==="-" ? -1 : 1;
        if(!state.items[id]) state.items[id]=0;
        state.items[id] = Math.max(0, state.items[id] + sign*cnt);
        var g = goodById(id);
        logs.push((g?g.name:id) + (sign>0?" +":" -") + cnt);
        break;
      }
      case "skill":{
        var sk = skillById(e[1]);
        if(!sk){ for(var i=0;i<SS.SKILLS.length;i++) if(SS.SKILLS[i].name===e[1]) sk=SS.SKILLS[i]; }
        if(sk) state.skills[sk.id] = 1;
        logs.push("习得武功："+(sk?sk.name:e[1])); break;
      }
      case "wb": state.wb = Math.max(state.wb, e[1]); break;
      case "star": applyStar(e[1]); break;
      case "emp": state.staff.push(e[2]); break;
      case "look":{
        if(e[1]==="顾客") state.chars[e[2]] = 1;
        else if(e[1]==="世界") state.worlds[e[2]] = 1;
        else if(e[1]==="名场") state.mems[e[2]] = 1;
        break;
      }
      case "ach": state.ach[e[2]] = 1; break;
      case "notify": toast(e[1], e[2]||2800); break;
      case "world": state.worlds[e[2]] = 1; break;
      case "save": save(); break;
    }
  });
  if(logs.length) logResult(logs, ctx);
  refreshStats();
}

function logResult(logs, ctx){
  var box = $("text");
  var old = box.innerHTML;
  box.innerHTML = old + '<div class="hl" style="margin-top:10px;border-top:1px dashed rgba(232,193,90,.3);padding-top:6px;font-size:14px;">◆ '+esc(logs.join("　"))+'</div>';
  box.scrollTop = box.scrollHeight;
}

function applyStar(star){
  var prev = state.star;
  state.star = star;
  var st = null;
  for(var i=0;i<SS.STARS.length;i++) if(SS.STARS[i].star===star) st = SS.STARS[i];
  toast("叮咚！恭喜宿体升级为「"+st.title+"」！", 3600);
  showOverlay({
    big: st.title,
    mid: "万界商铺系统 · 升级",
    sub: st.desc,
    btn: "恭 喜"
  });
  if(prev < star){ /* 世界图鉴与成长 */ }
}

/* ---------------- 存档 ---------------- */
function save(){
  if(!state) return;
  try{
    state._ts = Date.now();
    state._actTitle = actTitle(state.curAct);
    localStorage.setItem(SAVE_KEY+"slot"+currentSlot, JSON.stringify(state));
  }catch(e){ toast("存档失败："+e.message); }
}
function load(slot){
  var raw = localStorage.getItem(SAVE_KEY+"slot"+slot);
  if(!raw) return null;
  try{ return JSON.parse(raw); }catch(e){ return null; }
}
var currentSlot = 0;
function actTitle(id){
  var a = SS.ACT_CONFIG[actIndex(id)];
  return a? a.title : id;
}

/* ---------------- 界面 ---------------- */
function refreshStats(){
  $("stat-star").textContent = "★" + (state.star===1?"一星":state.star===2?"二星":"三星");
  $("stat-vp").textContent = "价值点 " + fmtNum(state.vp);
  $("stat-rmb").textContent = "华夏币 " + fmtNum(state.rmb);
  $("stat-gd").textContent = "功德 " + state.gd;
  $("stat-wb").textContent = "武道·" + (SS.WB[state.wb]||"-");
  $("stat-emp").textContent = "员工 " + (state.staff.length? state.staff.join("·") : "-");
}

/* ---------------- 剧情流程 ---------------- */
function showScreen(which){
  $("screen-title").classList.toggle("hidden", which!=="title");
  $("screen-game").classList.toggle("hidden", which!=="game");
}

function startNewGame(){
  state = defaultState();
  currentSlot = 0;
  refreshStats();
  showScreen("game");
  beginAct(state.curAct, true);
}

function beginAct(actId, first){
  state.curAct = actId;
  state.actSeen[actId] = 1;
  state.curScene = "s1";
  state.lineIdx = 0;
  var a = SS.ACT_CONFIG[actIndex(actId)];
  $("act-title").textContent = "【"+a.title+"】 原著第"+a.chapters+"章";
  renderActStart(a).then(function(){
    renderScene();
  });
}

function renderActStart(a){
  return showOverlay({
    big: a.title,
    mid: "第 "+a.chapters+" 章",
    sub: a.sub || "",
    btn: "开 始"
  });
}

function getScenes(actId){
  var acts = SS.ACTS||{};
  return acts[actId]||[];
}

function renderScene(){
  var scenes = getScenes(state.curAct);
  var sc = null;
  for(var i=0;i<scenes.length;i++) if(scenes[i].id===state.curScene){ sc=scenes[i]; break; }
  if(!sc){ endAct(); return; }
  sceneDone = false;
  linePos = 0;

  // 场景入口效果
  if(sc.effect) applyEffects(sc.effect, sc.id);

  // 背景/地点
  var wd = sc.bg || (sc.loc?"wanjie":"wanjie");
  var w = SS.WORLDS[wd] || SS.WORLDS.wanjie;
  $("loc-icon").textContent = w.icon;
  $("loc-text").textContent = (sc.loc? sc.loc+"　·　" : "") + w.name;
  $("avatar-letter").textContent = "店";
  $("speaker").className = "";
  $("speaker").textContent = "";
  $("text").innerHTML = "";
  $("choices").innerHTML = "";
  $("next-hint").classList.add("hidden");
  var prog = $("actbar-prog");
  if(prog) prog.textContent = "";
  typeLine(sc.lines[0]);
}

function typeLine(line){
  if(!line){ afterLines(); return; }
  var who = line.who || "";
  var sp = $("speaker");
  if(!who){
    sp.className = "narr";
    sp.textContent = "旁 白";
    $("avatar-letter").textContent = "☰";
  }else if(who==="系统"){
    sp.className = "system";
    sp.textContent = "【系统提示】";
    $("avatar-letter").textContent = "✦";
  }else{
    sp.className = "";
    sp.textContent = who;
    $("avatar-letter").textContent = who.charAt(0);
  }
  var box = $("text");
  box.innerHTML = "";
  var full = line.text;
  typing = { full:full, pos:0, timer:null };
  typing.timer = setInterval(typeTick, 16);
}
function typeTick(){
  if(!typing){ return; }
  var box = $("text");
  typing.pos++;
  box.textContent = typing.full.slice(0, typing.pos);
  box.scrollTop = box.scrollHeight;
  if(typing.pos >= typing.full.length){
    clearInterval(typing.timer); typing.timer=null; typing=null;
    $("next-hint").classList.remove("hidden");
  }
}

function advance(){
  if(busy) return;
  if(typing){
    var box = $("text");
    box.textContent = typing.full;
    box.scrollTop = box.scrollHeight;
    clearInterval(typing.timer); typing.timer=null; typing=null;
    $("next-hint").classList.remove("hidden");
    return;
  }
  // 对白行推进
  var scenes = getScenes(state.curAct);
  var sc = null;
  for(var i=0;i<scenes.length;i++) if(scenes[i].id===state.curScene){ sc=scenes[i]; break; }
  if(!sc) return;
  linePos++;
  if(linePos < sc.lines.length){
    typeLine(sc.lines[linePos]);
  }else{
    afterLines();
  }
}

function afterLines(){
  var scenes = getScenes(state.curAct);
  var sc = null;
  for(var i=0;i<scenes.length;i++) if(scenes[i].id===state.curScene){ sc=scenes[i]; break; }
  if(!sc) return;
  $("next-hint").classList.add("hidden");
  if(sc.choices && sc.choices.length){
    renderChoices(sc.choices);
  }else if(sc.then){
    gotoScene(sc.then);
  }else{
    endAct();
  }
}

function renderChoices(choices){
  var wrap = $("choices");
  wrap.innerHTML = "";
  choices.forEach(function(c,i){
    var b = document.createElement("button");
    b.className = "choice";
    b._label = c.text;
    var unmet = needUnmet(c.need);
    b.innerHTML = esc(c.text) + (c.needTxt? '<span class="need">'+esc(c.needTxt)+'</span>' : '');
    if(unmet){ b.disabled = true; b.title = unmet; }
    b.addEventListener("click", function(){ if(b.disabled) return; choose(i); });
    wrap.appendChild(b);
  });
}

function needUnmet(need){
  if(!need) return "";
  var req = [];
  if(need["价值点"]!==undefined && state.vp < need["价值点"]) req.push("价值点 "+fmtNum(need["价值点"]));
  if(need["华夏币"]!==undefined && state.rmb < need["华夏币"]) req.push("华夏币 "+fmtNum(need["华夏币"]));
  if(need["功德"]!==undefined && state.gd < need["功德"]) req.push("功德 "+need["功德"]);
  if(need.wb!==undefined && state.wb < need.wb) req.push("武道≥"+SS.WB[need.wb]);
  if(need.flag && !state.flags[need.flag]) req.push("缺少条件");
  if(need.flags){ for(var i=0;i<need.flags.length;i++) if(!state.flags[need.flags[i]]){ req.push("缺少条件"); break; } }
  if(need.item && (!state.items[need.item]||state.items[need.item]<=0)){ var g=goodById(need.item); req.push("持有"+(g?g.name:need.item)); }
  if(need.skill && !state.skills[need.skill]) req.push("习得"+need.skill);
  return req.join("；");
}

function choose(i){
  var scenes = getScenes(state.curAct);
  var sc = null;
  for(var k=0;k<scenes.length;k++) if(scenes[k].id===state.curScene){ sc=scenes[k]; break; }
  if(!sc) return;
  var c = sc.choices[i];
  if(!c) return;
  busy = true;
  applyEffects(c.effect, sc.id);
  busy = false;
  if(c.goto){ gotoScene(c.goto); }
  else if(c.then){ gotoScene(c.then); }
  else { endAct(); }
}

function isActId(id){
  for(var i=0;i<SS.ACT_CONFIG.length;i++) if(SS.ACT_CONFIG[i].id===id) return true;
  return false;
}
function gotoScene(id){
  if(id === "THE_END"){ finishGame(); return; }
  if(isActId(id)){ beginAct(id); return; }
  state.curScene = id;
  state.lineIdx = linePos;
  save();
  renderScene();
}

function endAct(){
  var idx = actIndex(state.curAct);
  state.actDone[state.curAct] = 1;
  save();
  var isLast = idx >= SS.ACT_CONFIG.length-1;
  if(isLast){ finishGame(); return; }
  var next = SS.ACT_CONFIG[idx+1];
  showOverlay({
    big: "幕间",
    mid: "【"+actTitle(state.curAct)+"】 完成",
    sub: "下一幕：\n《"+next.title+"》 原著第"+next.chapters+"章\n（已自动存档）",
    btn: "继续 · 进入下一幕"
  }).then(function(){
    beginAct(next.id);
  });
}

function finishGame(){
  state.finished = true;
  save();
  showOverlay({
    big: "通关达成",
    mid: "《万界店主 · 三星之路》 · 完",
    sub: "从失业青年到三星店主，商通万界，名动诸天。\n\n感谢游玩！欢迎再次光临万界楼。\n（改编自小说《史上最强店主》第1~141章）",
    btn: "回到标题"
  }).then(function(){
    showScreen("title");
  });
}

/* ---------------- 顶栏/标题动作 ---------------- */
function cmd(c){
  switch(c){
    case "newgame":
      if(state && state.started){
        showOverlay({big:"重新开始？", sub:"当前进度将被覆盖。", btn:"确定"}).then(function(){ startNewGame(); });
      }else startNewGame();
      break;
    case "continue":{
      var st = load(0);
      if(st){ state = st; currentSlot = 0; refreshStats(); showScreen("game");
        if(state.finished){ showScreen("title"); break; }
        renderActStart(SS.ACT_CONFIG[actIndex(state.curAct)]).then(renderScene);
      }else toast("尚无存档，请开始新游戏");
      break;
    }
    case "loadslot": openSlotPicker(); break;
    case "collection": openCollection(); break;
    case "menu": openMenu(); break;
    case "shop": openShop(); break;
    case "practice": openPractice(); break;
    case "help": openHelp(); break;
  }
}

function openSlotPicker(){
  var root = $("modal-root");
  root.classList.remove("hidden");
  var list = $("slotlist");
  list.innerHTML = "";
  for(var i=0;i<SAVE_COUNT;i++){
    var st = load(i);
    var div = document.createElement("div");
    div.className = "slotlist-item";
    div.innerHTML =
      '<span style="color:#c9a86b;">槽位 '+ (i+1) +'</span>'+
      '<span style="color:#8d7bb5;font-size:12px;">'+(st? new Date(st._ts).toLocaleString()+" · "+st._actTitle : "空")+'</span>'+
      '<button class="btn small" data-slot="'+i+'">'+(st?"读档":"—")+'</button>';
    div.querySelector("button").addEventListener("click", function(){
      var slot = parseInt(this.getAttribute("data-slot"),10);
      var s = load(slot);
      if(!s){ toast("该槽位为空"); return; }
      state = s; currentSlot = slot; refreshStats();
      $("slotpicker").classList.add("hidden");
      root.classList.add("hidden");
      showScreen("game");
      if(state.finished){ showScreen("title"); return; }
      renderActStart(SS.ACT_CONFIG[actIndex(state.curAct)]).then(renderScene);
    });
    list.appendChild(div);
  }
  $("slotpicker").classList.remove("hidden");
}

function closeModal(){ $("modal-root").classList.add("hidden"); $("modal-root").innerHTML=""; }

function modal(tabContent){
  var root = $("modal-root");
  root.classList.remove("hidden");
  root.innerHTML = '<div class="modal"><span class="close" id="modal-close">✕</span><div id="modal-body">'+tabContent+'</div></div>';
  $("modal-close").addEventListener("click", closeModal);
  return $("modal-body");
}
function confirmCloseHandler(b){
  b.addEventListener("click", function(){
    closeModal();
  });
}

/* ---------------- 菜单 ---------------- */
function openMenu(){
  var body = modal(
    '<h2>万界楼 · 系统菜单</h2>'+
    '<div style="display:flex;flex-direction:column;gap:10px;align-items:stretch;">'+
      '<button class="btn big" id="m-save">存 档（当前进度）</button>'+
      '<button class="btn big" id="m-load">读 档</button>'+
      '<button class="btn big" id="m-shop">万界楼经营</button>'+
      '<button class="btn big" id="m-prac">武功修炼</button>'+
      '<button class="btn big" id="m-book">图鉴 & 成就</button>'+
      '<button class="btn big" id="m-help">玩法说明</button>'+
      '<button class="btn big" id="m-title">返回标题</button>'+
    '</div>'
  );
  $("m-save").addEventListener("click", function(){ save(); toast("已存档到槽位 "+(currentSlot+1)); });
  $("m-load").addEventListener("click", function(){ closeModal(); cmd("loadslot"); });
  $("m-shop").addEventListener("click", function(){ closeModal(); openShop(); });
  $("m-prac").addEventListener("click", function(){ closeModal(); openPractice(); });
  $("m-book").addEventListener("click", function(){ closeModal(); openCollection(); });
  $("m-help").addEventListener("click", function(){ closeModal(); openHelp(); });
  $("m-title").addEventListener("click", function(){ closeModal(); showScreen("title"); });
}

/* ---------------- 经营小游戏 ---------------- */
function customerPool(){
  var idx = actIndex(state.curAct);
  return SS.CUSTOMERS.filter(function(c){
    var u = actIndex(c.unlock||"act1");
    return u <= idx;
  });
}
function randomCustomers(n){
  var pool = customerPool();
  if(!pool.length) return [];
  var out = [], used = {};
  for(var i=0;i<n && out.length<Math.min(n,pool.length);i++){
    var c = pool[Math.floor(Math.random()*pool.length)];
    if(!used[c.id]){ used[c.id]=1; out.push(c); }
  }
  while(out.length<n){ out.push(pool[Math.floor(Math.random()*pool.length)]); }
  return out;
}

function openShop(){
  var queue = randomCustomers(3);
  var body = modal(
    '<h2>🏮 万界楼 · 经营</h2>'+
    '<div class="shop-flex">'+
      '<div class="shop-col">'+
        '<h3>今日顾客（需求=商品标签）</h3><div id="shop-cust"></div>'+
        '<h3>我的货架</h3><div id="shop-goods"></div>'+
      '</div>'+
      '<div class="shop-col">'+
        '<h3>进货</h3>'+
        '<div class="tabs"><span class="tab active" id="tab-earth">地球超市</span><span class="tab" id="tab-world">位面采购</span></div>'+
        '<div id="shop-buy"></div>'+
        '<p style="font-size:12px;color:#8d7bb5;margin-top:10px;">提示：地球商品用华夏币进货，位面商品用价值点进货。售出可获商品估值的2%作为店主佣金。</p>'+
      '</div>'+
    '</div>'
  );
  var custBox = $("shop-cust"), goodsBox = $("shop-goods"), buyBox = $("shop-buy");
  var buyMode = "earth";

  function renderCust(){
    custBox.innerHTML = "";
    if(!queue.length){ custBox.innerHTML = '<div style="color:#8d7bb5;padding:10px;">今日暂无顾客，点击"刷新顾客"吧。</div>'; return; }
    queue.forEach(function(c,i){
      var div = document.createElement("div");
      div.className = "customer";
      var myGoods = Object.keys(state.items).map(goodById).filter(Boolean).filter(function(g){ return g.tag===c.need && state.items[g.id]>0; });
      var sellVp = 0;
      if(myGoods.length){ var g=myGoods[0]; sellVp = Math.max(1, Math.floor(g.vp*0.02)); }
      div.innerHTML =
        '<div class="nm">'+esc(c.name)+' <span style="color:#6f5d96;font-size:12px;">· '+esc(c.world)+'</span></div>'+
        '<div>需要：<span class="need">【'+esc(c.need)+'】</span>　支付：<span class="pay">'+esc(c.pay)+'</span></div>'+
        '<div class="q">“'+esc(c.quote)+'”</div>'+
        '<button class="btn small" data-i="'+i+'" '+(myGoods.length?'':'disabled')+'>'+(myGoods.length?('以'+esc(myGoods[0].name)+'成交　+'+sellVp+'价值点'):'货不对路')+'</button>';
      div.querySelector("button").addEventListener("click", function(){
        var idx = parseInt(this.getAttribute("data-i"),10);
        var cu = queue[idx]; if(!cu) return;
        var g = myGoods[0]; if(!g) return;
        state.items[g.id]--;
        var inc = Math.max(1, Math.floor(g.vp*0.02));
        state.vp += inc;
        if(cu.id==="swk"){ /* 孙悟空不识数彩蛋 */ }
        toast("成交！"+cu.name+" 满意地买走了"+g.name+"，店主佣金 +"+inc+" 价值点", 2600);
        queue.splice(idx,1);
        refreshStats(); renderCust(); renderGoods();
        save();
      });
      custBox.appendChild(div);
    });
    var rb = document.createElement("button");
    rb.className = "btn small gold";
    rb.textContent = "刷新顾客";
    rb.addEventListener("click", function(){ queue = randomCustomers(3); renderCust(); });
    custBox.appendChild(rb);
  }

  function renderGoods(){
    goodsBox.innerHTML = "";
    var ids = Object.keys(state.items).filter(function(id){ return state.items[id]>0; });
    if(!ids.length){ goodsBox.innerHTML = '<div style="color:#8d7bb5;padding:10px;">货架空空如也，去进货吧。</div>'; return; }
    ids.forEach(function(id){
      var g = goodById(id); if(!g) return;
      var div = document.createElement("div");
      div.className = "goods-card";
      div.innerHTML =
        '<div class="nm">'+g.icon+' '+esc(g.name)+'<span class="tg">'+esc(g.tag)+'</span></div>'+
        '<div class="row"><span class="v">估值 '+fmtNum(g.vp)+' 价值点</span></div>'+
        '<div class="row"><span>库存</span><span class="stock">×'+state.items[id]+'</span></div>'+
        '<div style="font-size:12px;color:#8d7bb5;">'+esc(g.desc||"")+'</div>';
      goodsBox.appendChild(div);
    });
  }

  function renderBuy(){
    buyBox.innerHTML = "";
    var list = SS.GOODS.filter(function(g){ return g.src===buyMode; });
    list.forEach(function(g){
      var price = buyMode==="earth" ? g.rmb : (g.buyVp||0);
      var currency = buyMode==="earth" ? "华夏币" : "价值点";
      var afford = buyMode==="earth" ? state.rmb>=price : state.vp>=price;
      var div = document.createElement("div");
      div.className = "goods-card";
      div.innerHTML =
        '<div class="nm">'+g.icon+' '+esc(g.name)+'<span class="tg">'+esc(g.tag)+'</span></div>'+
        '<div class="row"><span>进价</span><span class="v">'+fmtNum(price)+' '+currency+'</span></div>'+
        '<button data-id="'+g.id+'" '+(afford?'':'disabled')+'>进货 +1</button>';
      div.querySelector("button").addEventListener("click", function(){
        var id = this.getAttribute("data-id");
        var gg = goodById(id); if(!gg) return;
        if(buyMode==="earth"){ if(state.rmb<gg.rmb) return; state.rmb-=gg.rmb; }
        else { var p=gg.buyVp||0; if(state.vp<p) return; state.vp-=p; }
        if(!state.items[id]) state.items[id]=0;
        state.items[id]++;
        refreshStats(); renderGoods(); renderBuy();
        save();
      });
      buyBox.appendChild(div);
    });
  }

  $("tab-earth").addEventListener("click", function(){ buyMode="earth"; tabSet(this); renderBuy(); });
  $("tab-world").addEventListener("click", function(){ buyMode="world"; tabSet(this); renderBuy(); });
  function tabSet(el){
    $("tab-earth").classList.toggle("active", el=== $("tab-earth"));
    $("tab-world").classList.toggle("active", el=== $("tab-world"));
  }
  renderCust(); renderGoods(); renderBuy();
}

/* ---------------- 修炼 ---------------- */
function openPractice(){
  var idx = actIndex(state.curAct);
  var body = modal(
    '<h2>⚔ 武功修炼</h2>'+
    '<p style="font-size:13px;color:#8d7bb5;margin-bottom:10px;">当前武道境界：<b style="color:#c7b7ff;">'+SS.WB[state.wb]+'</b>。用价值点修炼解锁的武功，可提升武道境界。</p>'+
    '<div id="prac-list"></div>'
  );
  var box = $("prac-list");
  box.innerHTML = "";
  var list = SS.SKILLS.filter(function(s){ return actIndex(s.unlock||"act1") <= idx; });
  list.forEach(function(s){
    var learned = state.skills[s.id];
    var div = document.createElement("div");
    div.className = "skill-card" + (learned?" learned":"");
    var afford = !learned && state.vp >= s.cost;
    div.innerHTML =
      '<div class="nm">'+esc(s.name)+'</div>'+
      '<div class="desc">'+esc(s.desc)+'</div>'+
      '<div class="cost">'+(learned?'已修炼 ✓':'修炼消耗 '+fmtNum(s.cost)+' 价值点　·　效果：武道提升至'+SS.WB[Math.max(state.wb,s.wb)])+'</div>'+
      (learned? '':'<button data-id="'+s.id+'" '+(afford?'':'disabled')+'>修炼</button>');
    var b = div.querySelector("button");
    if(b) b.addEventListener("click", function(){
      var sk = skillById(this.getAttribute("data-id"));
      if(state.vp < sk.cost) return;
      state.vp -= sk.cost;
      state.skills[sk.id] = 1;
      if(sk.wb > state.wb) state.wb = sk.wb;
      toast("叮咚！成功修炼《"+sk.name+"》，武道境界提升至"+SS.WB[state.wb]+"！", 3200);
      refreshStats(); openPractice();
      save();
    });
    box.appendChild(div);
  });
}

/* ---------------- 图鉴与成就 ---------------- */
function openCollection(tab){
  tab = tab || "char";
  var body = modal(
    '<h2>📖 图鉴 & 成就</h2>'+
    '<div class="tabs">'+
      '<span class="tab'+(tab==="char"?" active":"")+'" id="ct-char">顾客</span>'+
      '<span class="tab'+(tab==="world"?" active":"")+'" id="ct-world">世界</span>'+
      '<span class="tab'+(tab==="mem"?" active":"")+'" id="ct-mem">名场面</span>'+
      '<span class="tab'+(tab==="ach"?" active":"")+'" id="ct-ach">成就</span>'+
    '</div><div id="col-body"></div>'
  );
  var box = $("col-body");
  function tabSet(t){
    $("ct-char").classList.toggle("active", t==="char");
    $("ct-world").classList.toggle("active", t==="world");
    $("ct-mem").classList.toggle("active", t==="mem");
    $("ct-ach").classList.toggle("active", t==="ach");
  }
  function render(){
    box.innerHTML = "";
    if(tab==="char"){
      var html = '<div class="book-grid">';
      SS.CHARS.forEach(function(c){
        var got = state.chars[c.id];
        html += '<div class="book-item'+(got?'':' locked')+'">'+esc(c.name)+'<div class="w">'+(got?esc(c.world)+' · '+esc(c.role):'？？？')+'</div></div>';
      });
      html += '</div><p style="font-size:12px;color:#8d7bb5;margin-top:12px;">图鉴：'+
        Object.keys(state.chars).length+' / '+SS.CHARS.length+'</p>';
      box.innerHTML = html;
    }else if(tab==="world"){
      var hw = '<div class="book-grid">';
      Object.keys(SS.WORLDS).forEach(function(k){
        var w = SS.WORLDS[k];
        var got = state.worlds[k];
        hw += '<div class="book-item'+(got?'':' locked')+'">'+w.icon+' '+esc(w.name)+'</div>';
      });
      hw += '</div>';
      box.innerHTML = hw;
    }else if(tab==="mem"){
      var hm = '<div class="book-grid">';
      (SS.MEMS||[]).forEach(function(m){
        var got = state.mems[m.id];
        hm += '<div class="book-item'+(got?'':' locked')+'">“'+(got?esc(m.text):'？？？')+'”'+(got?'<div class="w">'+esc(m.src)+'</div>':'')+'</div>';
      });
      hm += '</div>';
      box.innerHTML = hm;
    }else{
      var gotN = 0;
      var html = '';
      SS.ACHIEVES.forEach(function(a){
        var got = state.ach[a.id];
        if(got) gotN++;
        html += '<div class="ach-item"><span class="mark'+(got?'':' lock')+'">'+(got?'✔':'✘')+'</span><div><div class="nm">'+esc(a.name)+'</div><div class="desc">'+esc(a.desc)+'</div></div></div>';
      });
      html += '<p style="font-size:12px;color:#8d7bb5;margin-top:12px;">成就：'+gotN+' / '+SS.ACHIEVES.length+'</p>';
      box.innerHTML = html;
    }
  }
  $("ct-char").addEventListener("click", function(){ tab="char"; tabSet(tab); render(); });
  $("ct-world").addEventListener("click", function(){ tab="world"; tabSet(tab); render(); });
  $("ct-mem").addEventListener("click", function(){ tab="mem"; tabSet(tab); render(); });
  $("ct-ach").addEventListener("click", function(){ tab="ach"; tabSet(tab); render(); });
  render();
}

/* ---------------- 帮助 ---------------- */
function openHelp(){
  modal(
    '<h2>玩法说明</h2>'+
    '<div style="line-height:1.9;font-size:14px;color:#d9c490;">'+
    '· 点击对话区域继续剧情；有分支时点选下方选项。<br>'+
    '· <b style="color:#ffd968;">价值点</b>：万界楼通用积分，用于修炼武功、位面进货、部分剧情。<br>'+
    '· <b style="color:#9fe6c0;">华夏币</b>：现代货币，用于地球超市进货。<br>'+
    '· 顶栏「经营」可接客做生意赚价值点；「修炼」提升武道。<br>'+
    '· 图鉴与成就记录你结识的顾客、去过的世界与名场面。<br>'+
    '· 游戏自动存档到浏览器，标题界面可读档。<br>'+
    '· 剧情改编自《史上最强店主》1~141章，忠于原著。'+
    '</div>'
  );
}

/* ---------------- 事件绑定 ---------------- */
function bind(){
  document.querySelectorAll("[data-cmd]").forEach(function(el){
    el.addEventListener("click", function(){ cmd(this.getAttribute("data-cmd")); });
  });
  $("story-area").addEventListener("click", function(e){
    if(e.target.closest(".choice")) return;
    advance();
  });
  document.addEventListener("keydown", function(e){
    if(e.key===" " || e.key==="Enter"){ e.preventDefault(); advance(); }
  });
}

window.addEventListener("load", function(){
  bind();
  showScreen("title");
});

/* 测试钩子（供 tools/smoke.js 与开发者调试使用） */
window.__SS_TEST__ = {
  start: function(){ state = defaultState(); currentSlot = 0; refreshStats(); showScreen("game"); beginAct(state.curAct, true); },
  step: advance,
  choose: choose,
  confirm: function(){ var b = $("ov-btn"); if(b && b._emit) b._emit("click"); },
  status: function(){
    return { act: state.curAct, scene: state.curScene, vp: state.vp, rmb: state.rmb, wb: state.wb,
      star: state.star, finished: !!state.finished, staff: state.staff.slice(),
      skills: Object.keys(state.skills).length, chars: Object.keys(state.chars).length,
      ach: Object.keys(state.ach).length, actsDone: Object.keys(state.actDone).length };
  },
  choices: function(){
    var wrap = $("choices"), out = [];
    if(!wrap || !wrap._children) return out;
    for(var i=0;i<wrap._children.length;i++){
      var b = wrap._children[i];
      if(b && b._label !== undefined) out.push({ text: b._label, disabled: !!b.disabled });
    }
    return out;
  },
  choicesRaw: function(){ var w=$("choices"); return { n: w._children.length, html: (w._html||'').slice(0,80) }; },
  overlay: function(){ var o = $("overlay"); return o && !o.classList.contains("hidden"); },
  debug: function(){ return { scene: state.curScene, linePos: linePos, busy: busy, typing: !!typing,
    lines: getScenes(state.curAct).filter(function(s){return s.id===state.curScene;}).map(function(s){return s.lines.length;}) }; },
  validate: function(){ return SS.__validate(); }
};

window.SS = window.SS || {};
})();
