/* ================================================================
   两界人生 · 世界导航（WORLDS）+ 住房（HOUSES）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- 世界与地点 ----------------
   world: 26 现代 / 80 旧时
   home: 家的店铺id
   locs: 该世界所有地点id数组，决定左侧导航栏
----------------------------------------------- */
const WORLDS = {
  "26": { name:"2026 · 现代", home:"home26", locs:["home26","wangtou","wangfugui","xiaren","caipiao","kuaidi"] },
  "80": { name:"1980 · 旧时", home:"home80", locs:["home80","rejie","heishi","liangdian","fandian","cai","gongxiao","caifeng","youdian","dianying","chuxu","shudian","jiedao","shipinchang"] },
};

/* ---------------- 住房（街道办） ---------------- */
const HOUSES = {
  hutong:   { name:"城南四合院", rent:10, cap:50, cond:"无" },
  brick:    { name:"城南砖瓦房", rent:20, cap:70, cond:"需要职业" },
  building: { name:"城南小楼房", rent:50, cap:100, cond:"需要科长级别职位" },
};
