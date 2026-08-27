(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const currencies = [
    { id: "CNY", symbol: "¥", name: "人民币", kind: "fiat", world: "both", base: true },
    { id: "FEC", symbol: "汇", name: "外汇券", kind: "voucher", world: "old" },
    { id: "USD", symbol: "$", name: "美元", kind: "fiat", world: "both" },
    { id: "HKD", symbol: "HK$", name: "港币", kind: "fiat", world: "both" },
    { id: "JPY", symbol: "¥", name: "日元", kind: "fiat", world: "old" },
    { id: "GBP", symbol: "£", name: "英镑", kind: "fiat", world: "old" },
    { id: "DEM", symbol: "DM", name: "西德马克", kind: "fiat", world: "old" },
    { id: "FRF", symbol: "FF", name: "法国法郎", kind: "fiat", world: "old" },
    { id: "RUB", symbol: "руб", name: "苏联卢布", kind: "fiat", world: "old" },
    { id: "GOLD", symbol: "Au", name: "黄金(克)", kind: "commodity", world: "both" }
  ];

  const perUSD = {
    CNY: { 1980: 1.5, 1985: 2.94, 1986: 3.45, 1990: 4.78, 1994: 8.62, 1997: 8.28, 2005: 8.11, 2008: 6.95, 2010: 6.77, 2014: 6.14, 2018: 6.62, 2020: 6.90, 2023: 7.10, 2026: 7.15 },
    FEC: { 1980: 1.5, 1985: 2.94, 1986: 3.45, 1990: 4.78, 1993: 5.8 },
    USD: { 1980: 1, 2026: 1 },
    HKD: { 1980: 5.0, 1983: 7.8, 2026: 7.8 },
    JPY: { 1980: 226, 1985: 238, 1986: 168, 1988: 128, 1990: 145, 1995: 94, 2000: 108, 2010: 88, 2015: 120, 2020: 108, 2023: 140, 2026: 155 },
    GBP: { 1980: 0.43, 1985: 0.77, 1990: 0.56, 2000: 0.66, 2010: 0.65, 2020: 0.78, 2026: 0.79 },
    DEM: { 1980: 1.82, 1985: 2.94, 1990: 1.62, 1998: 1.76 },
    FRF: { 1980: 4.2, 1985: 8.0, 1990: 5.4, 1998: 5.9 },
    RUB: { 1980: 0.66, 1985: 0.83, 1990: 1.6, 1992: 415, 1994: 3500, 2026: 90 },
    GOLD: { 1980: 0.0321, 1982: 0.0118, 1985: 0.0110, 1990: 0.0087, 2000: 0.0107, 2010: 0.00275, 2020: 0.00155, 2026: 0.00130 }
  };

  function rateFor(code, year) {
    const t = perUSD[code] || { 1980: 1, 2026: 1 };
    const ys = Object.keys(t).map(Number).sort((a, b) => a - b);
    if (year <= ys[0]) return t[ys[0]];
    if (year >= ys[ys.length - 1]) return t[ys[ys.length - 1]];
    for (let i = 0; i < ys.length - 1; i++) {
      if (year >= ys[i] && year <= ys[i + 1]) {
        const span = ys[i + 1] - ys[i];
        const k = span ? (year - ys[i]) / span : 0;
        return t[ys[i]] + (t[ys[i + 1]] - t[ys[i]]) * k;
      }
    }
    return t[ys[ys.length - 1]];
  }

  function convert(amount, fromCode, toCode, year) {
    if (fromCode === toCode) return amount;
    const f = rateFor(fromCode, year);
    const t = rateFor(toCode, year);
    return (amount / f) * t;
  }

  R.register("currencies", {
    items: currencies,
    map: currencies.reduce((m, c) => (m[c.id] = c, m), {}),
    rateFor,
    convert
  });
})();
