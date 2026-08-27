(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const vehicles = [
    { id: "bike_28", name: "二八大杠自行车", type: "bike", era: "old", speed: 15, cargoWeight: 60, cargoVolume: 80, price: 160, currency: "CNY", unlock: {}, desc: "80年代最普及的载具，无需上牌，但载货有限。" },
    { id: "bike_ebike", name: "电动自行车", type: "bike", era: "modern", speed: 25, cargoWeight: 120, cargoVolume: 150, price: 3000, currency: "CNY", unlock: {}, desc: "现代城市代步，需充电。" },
    { id: "trike_huangyu", name: "黄鱼车(人力三轮)", type: "trike", era: "old", speed: 10, cargoWeight: 300, cargoVolume: 500, price: 400, currency: "CNY", unlock: {}, desc: "80年代城市大宗配送主力，靠人力，速度慢。" },
    { id: "motorcycle", name: "嘉陵摩托车", type: "motorcycle", era: "old", speed: 60, cargoWeight: 150, cargoVolume: 200, price: 2500, currency: "CNY", unlock: { plate: true }, desc: "80年代需上牌，有牌照可畅行，减少体力消耗。" },
    { id: "car_volga", name: "伏尔加/拉达小轿车", type: "car", era: "old", speed: 80, cargoWeight: 400, cargoVolume: 600, price: 40000, currency: "CNY", unlock: { plate: true, official: true }, desc: "80年代小汽车必须官方身份+上牌，否则无法上路。" },
    { id: "truck_jiefang", name: "解放牌卡车", type: "truck", era: "old", speed: 55, cargoWeight: 4000, cargoVolume: 8000, price: 30000, currency: "CNY", unlock: { plate: true, unitBatch: true }, desc: "大宗货运主力，需单位批文与牌照。" },
    { id: "van_modern", name: "面包车(现代)", type: "van", era: "modern", speed: 90, cargoWeight: 1000, cargoVolume: 3000, price: 60000, currency: "CNY", unlock: { plate: true }, desc: "现代货运与代步兼顾。" },
    { id: "truck_modern", name: "厢式货车(现代)", type: "truck", era: "modern", speed: 95, cargoWeight: 8000, cargoVolume: 20000, price: 180000, currency: "CNY", unlock: { plate: true }, desc: "现代大宗物流主力。" }
  ];

  R.register("vehicles", { items: vehicles, map: vehicles.reduce((m, v) => (m[v.id] = v, m), {}) });
})();
