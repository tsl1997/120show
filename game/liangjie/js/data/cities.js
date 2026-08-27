(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function city(o) {
    return Object.assign({
      era: "old",
      country: "中国",
      currency: "CNY",
      unlock: { type: "open", desc: "" },
      travel: { mode: "train", hours: 24, desc: "" },
      priceMul: {}
    }, o);
  }

  const cities = [
    city({ id: "bj_modern", name: "北京", region: "现代北京", country: "中国", era: "modern", currency: "CNY", unlock: { type: "open" }, travel: { mode: "none", hours: 0 }, priceMul: {} }),
    city({ id: "bj_1980", name: "北京", region: "华北", country: "中国", era: "old", currency: "CNY", unlock: { type: "open" }, travel: { mode: "none", hours: 0 }, priceMul: {} }),
    city({ id: "heb_1980", name: "哈尔滨", region: "东北", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信" }, travel: { mode: "train", hours: 30, desc: "绿皮火车，京哈线" }, priceMul: { food_fresh: 1.8, food_staple: 0.8, electronics: 1.5, industrial: 0.7, medicine: 1.6 } }),
    city({ id: "qqhe_1980", name: "齐齐哈尔", region: "东北", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信" }, travel: { mode: "train", hours: 34, desc: "绿皮火车" }, priceMul: { food_fresh: 1.9, industrial: 0.65 } }),
    city({ id: "gz_1980", name: "广州", region: "华南", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信（1984沿海开放后放宽）" }, travel: { mode: "train", hours: 40, desc: "京广线，绿皮火车" }, priceMul: { electronics: 0.8, clothing: 0.8, food_staple: 1.3, medicine: 1.5, textile: 1.4 } }),
    city({ id: "wlmq_1980", name: "乌鲁木齐", region: "西北", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信+边防证" }, travel: { mode: "train", hours: 72, desc: "兰新线，横跨河西走廊" }, priceMul: { electronics: 2.0, clothing: 2.0, daily: 1.8, textile: 0.6, antique: 0.8 } }),
    city({ id: "wh_1980", name: "武汉", region: "华中", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信" }, travel: { mode: "train", hours: 20, desc: "京广线" }, priceMul: { food_staple: 0.8, electronics: 1.4, food_fresh: 1.2 } }),
    city({ id: "hz_1980", name: "杭州", region: "江南", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信" }, travel: { mode: "train", hours: 24, desc: "沪杭线" }, priceMul: { industrial: 1.6, textile: 0.7, antique: 0.75, food_staple: 1.1 } }),
    city({ id: "cd_1980", name: "成都", region: "西南", country: "中国", currency: "CNY", unlock: { type: "intro", kind: "once", desc: "需一次介绍信" }, travel: { mode: "train", hours: 30, desc: "宝成铁路，蜀道难" }, priceMul: { medicine: 0.7, electronics: 1.7, food_fresh: 1.2, tobacco: 0.8 } }),
    city({ id: "sz_1980", name: "深圳", region: "华南", country: "中国", currency: "CNY", unlock: { type: "event", event: "1980-08", desc: "1980年8月特区设立后解锁" }, travel: { mode: "train", hours: 44, desc: "经广州转" }, priceMul: { electronics: 0.7, clothing: 0.75, daily: 0.85 } }),
    city({ id: "sh_pudong", name: "上海·浦东", region: "华东", country: "中国", currency: "CNY", unlock: { type: "event", event: "1990-04", desc: "1990年4月浦东开发后解锁" }, travel: { mode: "train", hours: 18, desc: "京沪线" }, priceMul: { industrial: 1.2, electronics: 0.85, textile: 0.8 } }),
    city({ id: "hk_1980", name: "香港", region: "港澳", country: "英属香港", currency: "HKD", unlock: { type: "event", event: "1984-09", desc: "1984年中英声明后，需边境通行证" }, travel: { mode: "train", hours: 6, desc: "从广州乘广九铁路" }, priceMul: { luxury: 1.2, electronics: 0.8, antique: 1.6, tobacco: 0.8 } }),
    city({ id: "tokyo_1980", name: "东京", region: "关东", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照+批文" }, travel: { mode: "plane", hours: 4, desc: "中国民航波音707" }, priceMul: { electronics: 0.75, luxury: 1.2, antique: 1.8, clothing: 1.1 } }),
    city({ id: "osaka_1980", name: "大阪", region: "关西", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "train", hours: 3, desc: "东海道新干线(从东京)" }, priceMul: { electronics: 0.7, luxury: 1.1, tobacco: 0.85 } }),
    city({ id: "kyoto_1980", name: "京都", region: "关西", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "train", hours: 3, desc: "新干线(从东京)" }, priceMul: { antique: 2.0, book_edu: 1.2, luxury: 1.3 } }),
    city({ id: "sapporo_1980", name: "札幌", region: "北海道", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 2, desc: "国内航班(从东京)" }, priceMul: { food_fresh: 1.6, industrial: 1.2, food_staple: 1.1 } }),
    city({ id: "yokohama_1980", name: "横滨", region: "神奈川", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "train", hours: 1, desc: "从东京" }, priceMul: { industrial: 0.85, luxury: 1.1 } }),
    city({ id: "okinawa_1980", name: "冲绳", region: "冲绳", country: "日本", currency: "JPY", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 3, desc: "国内航班(从东京)" }, priceMul: { luxury: 1.2, electronics: 0.9 } }),
    city({ id: "nyc_1980", name: "纽约", region: "美东", country: "美国", currency: "USD", unlock: { type: "passport", desc: "需公派护照(经东京转机)" }, travel: { mode: "plane", hours: 30, desc: "经东京转机" }, priceMul: { industrial: 0.9, electronics: 0.85, luxury: 1.1, commodity: 0.9 } }),
    city({ id: "sf_1980", name: "旧金山·硅谷", region: "美西", country: "美国", currency: "USD", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 6, desc: "从纽约转机" }, priceMul: { electronics: 0.7, book_edu: 1.1 } }),
    city({ id: "detroit_1980", name: "底特律", region: "美中", country: "美国", currency: "USD", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 3, desc: "从纽约转机" }, priceMul: { vehicle: 0.8, industrial: 0.75 } }),
    city({ id: "la_1980", name: "洛杉矶", region: "美西", country: "美国", currency: "USD", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 5, desc: "从纽约转机" }, priceMul: { luxury: 1.1, electronics: 0.9 } }),
    city({ id: "houston_1980", name: "休斯顿", region: "美南", country: "美国", currency: "USD", unlock: { type: "passport", desc: "需公派护照" }, travel: { mode: "plane", hours: 4, desc: "从纽约转机" }, priceMul: { energy: 0.7, commodity: 0.8 } }),
    city({ id: "moscow_1980", name: "莫斯科", region: "苏联", country: "苏联", currency: "RUB", unlock: { type: "passport", desc: "需边境易货批文或护照" }, travel: { mode: "train", hours: 130, desc: "K3国际列车横跨西伯利亚" }, priceMul: { daily: 2.0, clothing: 2.0, food_processed: 2.5, industrial: 0.6, energy: 0.7 } }),
    city({ id: "novosibirsk_1980", name: "新西伯利亚", region: "西伯利亚", country: "苏联", currency: "RUB", unlock: { type: "passport", desc: "需批文" }, travel: { mode: "train", hours: 200, desc: "西伯利亚铁路" }, priceMul: { electronics: 2.0, book_edu: 1.5, industrial: 0.6 } }),
    city({ id: "tyumen_1980", name: "秋明", region: "西伯利亚", country: "苏联", currency: "RUB", unlock: { type: "passport", desc: "需批文" }, travel: { mode: "train", hours: 180, desc: "西伯利亚铁路" }, priceMul: { energy: 0.6, industrial: 0.7, daily: 2.0 } }),
    city({ id: "kharkov_1980", name: "哈尔科夫", region: "乌克兰", country: "苏联", currency: "RUB", unlock: { type: "passport", desc: "需批文" }, travel: { mode: "train", hours: 100, desc: "从莫斯科" }, priceMul: { industrial: 0.6, vehicle: 0.7, food_staple: 0.9 } }),
    city({ id: "leningrad_1980", name: "列宁格勒", region: "波罗的海", country: "苏联", currency: "RUB", unlock: { type: "passport", desc: "需批文" }, travel: { mode: "train", hours: 80, desc: "从莫斯科" }, priceMul: { luxury: 1.5, electronics: 1.6, food_processed: 1.6 } })
  ];

  R.register("cities", { items: cities, map: cities.reduce((m, c) => (m[c.id] = c, m), {}) });
})();
