/* 大富翁 · 静态数据 v5（13x13 双环地图）
 * 地图 80 格 = 外环 48 + 内环 24 + 四条连接道 8：
 *   外环：13x13 网格边框一圈（四角不重复计）
 *   内环：7x7 网格边框一圈（col4..col10, row4..row10），位于正中
 *   连接道：外环与内环之间的十字通道（上下左右各 2 格）
 * 移动顺序 idx：外环 0-47（底左→顺时针）→ 连接道/内环顺时针 48-79
 * 地区类型 z: 0=贫穷 1=普通 2=富裕（过路费系数 0.6 / 1.0 / 1.4）
 */
var MAP_LAYOUT = [
  /* ---- 外环：底排 0-12（左→右）---- */
  { t: 'start',    name: '起点' },
  { t: 'estate',   z: 0, g: 0 },
  { t: 'estate',   z: 0, g: 0 },
  { t: 'fishery', name: '舟山渔港' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 0, g: 0 },
  { t: 'port',    name: '东海港' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 0, g: 0 },
  { t: 'jail' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 0, g: 0 },
  { t: 'estate',   z: 1, g: 1 },
  /* ---- 外环：右列 13-24（下→上）---- */
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'stock' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'police' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'hospital' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  /* ---- 外环：顶排 25-36（右→左，12 格）---- */
  { t: 'bank' },
  { t: 'estate',   z: 2, g: 1 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'airport', name: '首都机场' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'police' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'grid' },
  { t: 'chance' },
  { t: 'estate',   z: 2, g: 1 },
  /* ---- 外环：左列 37-47（上→下）---- */
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'gas' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'mall' },
  { t: 'estate',   z: 0, g: 1 },
  /* ---- 内环：底排 48-54（左→右，row10 col4..col10，7 格）---- */
  { t: 'estate',   z: 2, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'grid' },              /* ★ 电网主站：内环底排（更容易被路过充电） */
  { t: 'estate',   z: 2, g: 2 },
  { t: 'estate',   z: 1, g: 1 },
  /* ---- 内环：右列 55-60（下→上，col10 row9..row4，6 格）---- */
  { t: 'bank' },              /* 内环银行 */
  { t: 'estate',   z: 2, g: 1 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 2, g: 2 },
  { t: 'stock' },             /* 内环交易所 */
  /* ---- 内环：顶排 61-66（右→左，row4 col9..col4，6 格）---- */
  { t: 'estate',   z: 2, g: 2 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'hospital' },          /* 内环医院 */
  { t: 'estate',   z: 2, g: 1 },
  { t: 'police' },
  /* ---- 内环：左列 67-71（上→下，col4 row5..row9，5 格）---- */
  { t: 'bank' },              /* 内环西银行（与连接道相邻） */
  { t: 'estate',   z: 2, g: 2 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 1, g: 1 },
  /* ---- 连接道：上 72-73 + 右 74-75 + 下 76-77 + 左 78-79 ---- */
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'chance' },
  { t: 'estate',   z: 1, g: 1 },
  { t: 'estate',   z: 1, g: 1 }
];

/* 机会格事件 */
var CHANCE_EVENTS = [
  { id: 'c1', text: '彩票中奖！获得 500 元', money: 500 },
  { id: 'c2', text: '踩到水坑，付干洗费 200 元', money: -200 },
  { id: 'c3', text: '闯红灯被拍，罚款 300 元', money: -300 },
  { id: 'c4', text: '公司发年终奖！获得 1000 元', money: 1000 },
  { id: 'c5', text: '手机掉水里，损失 400 元', money: -400 },
  { id: 'c6', text: '捡到钱包归还失主，获 300 元酬谢', money: 300 },
  { id: 'c7', text: '加班打车回家，车费 150 元', money: -150 },
  { id: 'c8', text: '旧手机闲鱼卖掉，进账 250 元', money: 250 }
];

/* 股票列表（10 只，前 2 只有实体产业：电网/石化） */
var STOCKS = [
  { id: 'grid',  name: '国家电网', entity: 'grid',  initPrice: 100 },
  { id: 'petro', name: '中国石化', entity: 'petro', initPrice: 100 },
  { id: 's01', name: '大唐烟草', entity: null, initPrice: 40 },
  { id: 's02', name: '长城汽车', entity: null, initPrice: 60 },
  { id: 's03', name: '三峡能源', entity: null, initPrice: 45 },
  { id: 's04', name: '茅台酒业', entity: null, initPrice: 80 },
  { id: 's05', name: '中兴通讯', entity: null, initPrice: 55 },
  { id: 's06', name: '顺丰快递', entity: null, initPrice: 65 },
  { id: 's07', name: '云南白药', entity: null, initPrice: 70 },
  { id: 's08', name: '青岛啤酒', entity: null, initPrice: 35 }
];
