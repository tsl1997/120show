(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const U = window.LJ.util;

  const maleNames = ["建国", "卫东", "志强", "大勇", "柱子", "铁蛋", "二牛", "宝山", "德顺", "文斌", "国庆", "永刚", "满囤", "拴柱", "春生", "祥子", "老蔫", "四喜"];
  const femaleNames = ["秀兰", "桂英", "玉梅", "春香", "淑芬", "丽华", "彩凤", "金花", "小芳", "亚男", "红霞", "爱莲", "招娣", "翠花", "雪梅", "美兰"];
  const jobs = [
    { j: "纺织厂女工", g: "女", w: "温饱", t: ["主妇", "工作人士"] },
    { j: "钢厂炉前工", g: "男", w: "小康", t: ["工作人士"] },
    { j: "小学教师", g: "女", w: "温饱", t: ["工作人士", "文教"] },
    { j: "邮递员", g: "男", w: "温饱", t: ["工作人士"] },
    { j: "供销社售货员", g: "女", w: "温饱", t: ["工作人士"] },
    { j: "公交车司机", g: "男", w: "小康", t: ["工作人士", "机械"] },
    { j: "待业青年", g: "男", w: "赤贫", t: ["待业"] },
    { j: "返城知青", g: "女", w: "赤贫", t: ["待业"] },
    { j: "机关干部", g: "男", w: "中产", t: ["工作人士", "官方"] },
    { j: "医院护士", g: "女", w: "温饱", t: ["工作人士", "医药"] },
    { j: "国营食堂大师傅", g: "男", w: "温饱", t: ["工作人士", "美食"] },
    { j: "个体修鞋匠", g: "男", w: "温饱", t: ["工作人士", "日用"] },
    { j: "胡同口大爷", g: "男", w: "温饱", t: ["退休"] },
    { j: "居委会大妈", g: "女", w: "温饱", t: ["退休", "官方"] },
    { j: "下乡探亲的农民", g: "男", w: "赤贫", t: ["农资"] },
    { j: "京剧院学员", g: "女", w: "温饱", t: ["戏曲", "文教"] },
    { j: "报刊亭摊主", g: "男", w: "温饱", t: ["工作人士", "文教"] },
    { j: "卖糖葫芦小贩", g: "男", w: "赤贫", t: ["地方势力"] }
  ];
  const temperaments = ["豪爽", "谨慎", "贪婪", "正直", "圆滑", "多疑", "浪漫", "现实", "保守", "健谈", "虚荣", "节俭", "泼辣", "温柔"];
  const prefers = ["烟", "酒", "茶", "书画", "音乐", "棋牌", "古董", "服饰", "美食", "运动", "汽车", "摄影", "花草", "宠物", "读书", "收藏"];
  const personaBase = {
    "工人": "你是80年代北京的一名普通工人，每天按时上下班，生活简单，对新鲜物件好奇，警惕性强但重情义。",
    "公职人员": "你是北京的一名基层公职人员，讲原则、讲政策，不爱惹麻烦，但也不拒人千里。",
    "个体": "你是北京街头讨生活的个体户，脑子活、胆子大，见人说人话，见鬼说鬼话，最看重眼前利益。",
    "市民": "你是北京城里的普通市民，日子过得紧巴巴，精打细算，但对人对事有自己的主意。"
  };
  const CASH_BY_WEALTH = { 赤贫: [2, 10], 温饱: [5, 30], 小康: [20, 80], 中产: [50, 200] };
  const TICKET_PRICE = { 粮票: 0.25, 布票: 2, 肉票: 1.5, 油票: 1, 副食票: 0.6, 工业券: 0.5 };
  const WANT_CATS = ["luxury", "electronics", "appliance", "cosmetics"];
  const WANT_IDS = ["electronic_watch", "nylon_stockings", "sunglasses", "dacron_fabric", "malt_extract", "chocolate", "walkman", "famicom", "game_cart", "milk_candy", "canned_fruit", "instant_noodle", "luncheon_meat", "thermos", "radio", "candy_rabbit", "milk_powder"];
  const LINKS = ["与街道办王主任是邻居", "有亲戚在东单菜市场上班", "跟信托商店周掌柜相熟", "以前和京哥一起跑过买卖", "认识银行储蓄所的人", "家里有人在部委工作"];

  function wealthRank(w) { return { 赤贫: 0, 温饱: 1, 小康: 2, 中产: 3 }[w] || 1; }

  function makeTpl(locId, seed, idx) {
    const rnd = U.rng(seed + idx * 7919);
    const jobTpl = jobs[Math.floor(rnd() * jobs.length)];
    const gender = jobTpl.g;
    const name = gender === "女" ? femaleNames[Math.floor(rnd() * femaleNames.length)] : maleNames[Math.floor(rnd() * maleNames.length)];
    const temper = temperaments[Math.floor(rnd() * temperaments.length)];
    const pref = [prefers[Math.floor(rnd() * prefers.length)]];
    if (rnd() > 0.5) {
      const p2 = prefers[Math.floor(rnd() * prefers.length)];
      if (p2 !== pref[0]) pref.push(p2);
    }
    const wealth = jobTpl.w;
    const lifeStage = gender === "女" ? (rnd() > 0.5 ? "少女" : "中年") : (rnd() > 0.5 ? "青年" : "中年");
    const kind = jobTpl.j.indexOf("个体") >= 0 || jobTpl.j.indexOf("小贩") >= 0 ? "个体" : (jobTpl.j.indexOf("干部") >= 0 || jobTpl.j.indexOf("大妈") >= 0 || jobTpl.j.indexOf("售货员") >= 0 ? "公职人员" : (jobTpl.j.indexOf("工") >= 0 ? "工人" : "市民"));
    const tags = [gender, lifeStage].concat(jobTpl.t).concat([wealth, temper]).concat(pref);
    const cashRange = CASH_BY_WEALTH[wealth] || [5, 30];
    const baseCash = Math.round(cashRange[0] + rnd() * (cashRange[1] - cashRange[0]));
    const link = rnd() > 0.45 ? LINKS[Math.floor(rnd() * LINKS.length)] : null;
    const id = "ps_" + locId + "_" + idx;
    return {
      id, name, city: "bj_1980", role: jobTpl.j, gender, wealth, temperament: temper, prefer: pref, tags,
      relationship: 0, ai: true, passerby: true, link,
      persona: personaBase[kind] + "你是一名" + jobTpl.j + "，性格" + temper + "，喜欢" + pref.join("、") + "。你只能说当前时间点之前知道的事，绝不提未来。回答简短自然，一般不超过三句话。",
      tplSeed: seed, idx
    };
  }

  function poolFor(locId) {
    const seed = U.hashCode(locId);
    const out = [];
    for (let i = 0; i < 6; i++) out.push(makeTpl(locId, seed, i));
    return out;
  }

  function ensureProfile(tpl) {
    const st = S.get();
    if (!st.passers) st.passers = {};
    if (!st.passers[tpl.id]) {
      const rnd = U.rng(tpl.tplSeed + 31 + tpl.idx * 13);
      const tickets = {};
      if (rnd() > 0.3) tickets["粮票"] = Math.floor(rnd() * 10);
      if (rnd() > 0.5) tickets["副食票"] = Math.floor(rnd() * 6);
      if (rnd() > 0.6) tickets["布票"] = Math.floor(rnd() * 4);
      if (rnd() > 0.7) tickets["工业券"] = Math.floor(rnd() * 3);
      if (rnd() > 0.85) tickets["肉票"] = Math.floor(rnd() * 2);
      st.passers[tpl.id] = { cash: cashOf(tpl), tickets, met: false };
    }
    return st.passers[tpl.id];
  }

  function cashOf(tpl) {
    const range = CASH_BY_WEALTH[tpl.wealth] || [5, 30];
    return Math.round(range[0] + (range[1] - range[0]) / 2);
  }

  function at(locId, w) {
    const pool = poolFor(locId);
    const key = (w || "old") + "|" + locId + "|" + dayKey(w || "old");
    const rnd = U.rng(U.hashCode(key));
    const n = 2 + Math.floor(rnd() * 3);
    const picks = [];
    const used = {};
    while (picks.length < n) {
      const i = Math.floor(rnd() * pool.length);
      if (used[i]) continue;
      used[i] = true;
      picks.push(pool[i]);
    }
    return picks;
  }

  function get(id) {
    const parts = String(id).split("_");
    if (parts[0] !== "ps" || parts.length < 3) return null;
    const idx = parseInt(parts[parts.length - 1], 10);
    const locId = parts.slice(1, -1).join("_");
    return poolFor(locId)[idx] || null;
  }

  function profile(id) {
    const tpl = get(id);
    if (!tpl) return null;
    return ensureProfile(tpl);
  }

  function dayKey(w) {
    const c = S.clock(w);
    return c.year + "-" + c.month + "-" + c.day;
  }

  function ticketValue(tk) {
    let v = 0;
    Object.keys(tk || {}).forEach((k) => { v += (tk[k] || 0) * (TICKET_PRICE[k] || 0); });
    return U.round(v, 2);
  }

  function assets(id) {
    const p = profile(id);
    if (!p) return { cash: 0, tickets: {}, value: 0 };
    return { cash: p.cash, tickets: p.tickets, value: U.round(p.cash + ticketValue(p.tickets), 2) };
  }

  function wantsItem(item) {
    if (!item) return false;
    if (WANT_IDS.indexOf(item.id) >= 0) return true;
    if (WANT_CATS.indexOf(item.cat) >= 0 && (item.tier || 1) >= 2) return true;
    return false;
  }

  function streetPrice(itemId, cityId) {
    const E = window.LJ.economy;
    const p = E.price(itemId, "old", cityId, "black", 1);
    return p ? p.amount : null;
  }

  function tradeOffer(passerId, itemId, qty, cityId) {
    const tpl = get(passerId);
    const item = window.LJ.economy.getItem(itemId);
    if (!tpl || !item) return { ok: false, reason: "参数错误" };
    if (!wantsItem(item)) return { ok: false, reason: "他看不上这件东西" };
    const unit = streetPrice(itemId, cityId);
    if (unit == null) return { ok: false, reason: "无法估价" };
    qty = Math.max(1, Math.floor(qty));
    const ask = U.round(unit * 1.08 * qty, 2);
    const as = assets(passerId);
    if (as.value < ask * 0.8) return { ok: false, reason: "他囊中羞涩，买不起这么多", ask, assets: as };
    const payCash = Math.min(as.cash, ask);
    let rest = U.round(ask - payCash, 2);
    const payTickets = {};
    if (rest > 0.01) {
      const order = ["粮票", "布票", "肉票", "油票", "副食票", "工业券"];
      order.forEach((k) => {
        if (rest <= 0.01) return;
        const price = TICKET_PRICE[k] || 0;
        if (!price) return;
        const have = (as.tickets[k] || 0);
        const need = Math.min(have, Math.ceil(rest / price));
        if (need > 0) {
          payTickets[k] = need;
          rest = U.round(rest - need * price, 2);
        }
      });
    }
    if (rest > 0.01) return { ok: false, reason: "他的资产凑不齐这个价", ask, assets: as };
    return { ok: true, ask, payCash: U.round(payCash, 2), payTickets, unit: U.round(unit, 2) };
  }

  function doTrade(passerId, itemId, qty, cityId) {
    const INV = window.LJ.inventory;
    const W = window.LJ.wallet;
    const INT = window.LJ.interaction;
    const offer = tradeOffer(passerId, itemId, qty, cityId);
    if (!offer.ok) return offer;
    if (INV.count(INV.backpack(), itemId) < qty) return { ok: false, reason: "背包中数量不足" };
    const p = profile(passerId);
    INV.removeBackpack(itemId, qty);
    W.add("old", "CNY", offer.payCash);
    Object.keys(offer.payTickets).forEach((k) => {
      p.tickets[k] = Math.max(0, (p.tickets[k] || 0) - offer.payTickets[k]);
      if (p.tickets[k] === 0) delete p.tickets[k];
      window.LJ.inventory.grantTickets("old", k, offer.payTickets[k]);
    });
    p.cash = U.round(p.cash - offer.payCash, 2);
    INT.adjustRelationship(passerId, 5);
    return { ok: true, ask: offer.ask, payCash: offer.payCash, payTickets: offer.payTickets };
  }

  window.LJ.passers = { at, get, profile, assets, wantsItem, tradeOffer, doTrade, ticketValue };
})();
