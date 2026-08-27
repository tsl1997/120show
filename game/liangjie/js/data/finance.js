(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const bankProducts = [
    { id: "current", name: "活期存款", type: "deposit", rate: 0.003, min: 0, term: 0 },
    { id: "fixed_1y", name: "一年定期", type: "deposit", rate: 0.0175, min: 50, term: 12 },
    { id: "fixed_3y", name: "三年定期", type: "deposit", rate: 0.0225, min: 50, term: 36 },
    { id: "cd", name: "大额存单", type: "deposit", rate: 0.028, min: 200000, term: 36 },
    { id: "loan", name: "经营贷款", type: "loan", rate: 0.045, min: 10000, term: 12 }
  ];

  function stock(id, name, market, unlockYear, code, pts) {
    return { id, name, market, unlockYear, code, points: pts };
  }

  const stocks = [
    stock("stk_maotai", "贵州茅台", "A股", 2001, "600519", { 2001: 34, 2008: 84, 2014: 120, 2021: 2600, 2026: 1700 }),
    stock("stk_wanke", "万科A", "A股", 1991, "000002", { 1991: 5, 2007: 40, 2015: 14, 2026: 8 }),
    stock("stk_feiyue", "飞乐音响(老八股)", "A股", 1990, "600651", { 1990: 100, 1992: 3500, 2007: 8, 2026: 3 }),
    stock("stk_yuyuan", "豫园商城(老八股)", "A股", 1990, "600655", { 1990: 100, 1992: 10000, 2007: 15, 2026: 7 }),
    stock("stk_haier", "海尔智家", "A股", 1993, "600690", { 1993: 5, 2007: 25, 2026: 24 }),
    stock("stk_tencent", "腾讯控股", "港股", 2004, "0700.HK", { 2004: 3.7, 2007: 70, 2017: 400, 2021: 700, 2026: 380 }),
    stock("stk_alibaba", "阿里巴巴", "美股", 2014, "BABA", { 2014: 90, 2020: 300, 2022: 80, 2026: 110 }),
    stock("stk_apple", "苹果公司", "美股", 1980, "AAPL", { 1980: 0.1, 1997: 0.9, 2007: 5, 2020: 130, 2026: 220 }),
    stock("stk_msft", "微软", "美股", 1986, "MSFT", { 1986: 0.1, 1999: 40, 2009: 18, 2020: 220, 2026: 420 }),
    stock("stk_nvidia", "英伟达", "美股", 1999, "NVDA", { 1999: 0.4, 2009: 0.9, 2019: 4, 2024: 130, 2026: 140 }),
    stock("stk_tesla", "特斯拉", "美股", 2010, "TSLA", { 2010: 1.2, 2020: 40, 2021: 350, 2026: 250 }),
    stock("stk_bitcoin", "比特币", "加密", 2009, "BTC", { 2009: 0.001, 2013: 1000, 2017: 20000, 2022: 16000, 2024: 70000, 2026: 90000 })
  ];

  const assetTypes = [
    { id: "cash", name: "现金", kind: "liquid" },
    { id: "deposit", name: "银行存款", kind: "liquid" },
    { id: "bond", name: "债券", kind: "fixed" },
    { id: "fund", name: "基金", kind: "equity" },
    { id: "stock", name: "股票", kind: "equity" },
    { id: "gold", name: "黄金", kind: "commodity" },
    { id: "forex", name: "外汇", kind: "liquid" },
    { id: "property", name: "房产", kind: "real" },
    { id: "land", name: "土地", kind: "real" },
    { id: "farm", name: "农场", kind: "real" },
    { id: "factory", name: "工厂", kind: "real" },
    { id: "shop", name: "门店", kind: "real" },
    { id: "antique", name: "古玩收藏", kind: "real" },
    { id: "trust", name: "信托", kind: "fixed" },
    { id: "crypto", name: "数字货币", kind: "equity" }
  ];

  const forexQuota = { personalAnnualUSD: 50000 };

  R.register("finance", {
    bankProducts,
    bankMap: bankProducts.reduce((m, b) => (m[b.id] = b, m), {}),
    stocks,
    stockMap: stocks.reduce((m, s) => (m[s.id] = s, m), {}),
    assetTypes,
    forexQuota
  });
})();
