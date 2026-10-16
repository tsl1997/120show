/* 钱家任务链冒烟测试（Node 运行：node smoke-test.js）
   按 AGENTS.md 约定：拼 data/*.js + lottery.js + engine.js 到一个字符串 eval，模拟全流程断言。 */
const fs = require("fs"), path = require("path");
const dir = __dirname;
const src = ["js/data/items.js","js/data/npcs.js","js/data/tickets.js","js/data/world.js","js/data/shops.js",
             "js/data/quests.js","js/data/heishi.js","js/data/net.js","js/lottery.js","js/engine.js"]
  .map(f => fs.readFileSync(path.join(dir,f),"utf8")).join("\n");
global.localStorage = { getItem:()=>null, setItem:()=>{}, removeItem:()=>{} };
eval(src + "\n;global.__setS = v => { S = v; };");
let _S = null;
Object.defineProperty(globalThis, "S", {
  get(){ return _S; },
  set(v){ global.__setS(v); _S = v; },
  configurable: true,
});

let failed = 0;
function ok(cond, msg){
  if(cond) console.log("  ✓ " + msg);
  else { failed++; console.log("  ✗ FAIL: " + msg); }
}

console.log("== 钱家链全流程 ==");
S = newState();
S.world = "80";

/* 阶段0 · 落脚 */
S.loc = "jiedao";
addPack("guantou", 1);
ok(takeQuest("qj_luojiao").ok, "接取：落脚城南");
ok(submitQuest("qj_luojiao").ok, "交付：落脚城南");
ok(S.identity === 2, "身份升为2（有住址）");
ok(!!S.unlocks.luojiao, "解锁标记 luojiao");
ok(affOf("李婶") === 5, "李婶好感+5");

/* 阶段1 · 钱老大爷 */
S.loc = "fandian";
ok(takeQuest("qj_xiliang").ok, "接取：老爷子的细粮");
ok(!takeQuest("qj_guantou").ok, "同一NPC不能同时接2个任务");
addPack("noodle", 2);
ok(submitQuest("qj_xiliang").ok, "交付：老爷子的细粮");
ok(S.qianTrust === 10, "信任10");
ok(takeQuest("qj_guantou").ok, "接取：老爷子的存货");
addPack("guantou", 5);
ok(submitQuest("qj_guantou").ok, "交付：老爷子的存货");
ok(S.qianTrust === 25 && !!S.unlocks.dashuo, "信任25，解锁 dashuo（老爷子替你说话）");

/* 阶段2 · 钱所长：开户（活期≥50元存满7天） */
S.loc = "chuxu";
ok(takeQuest("qj_kaihu").ok, "接取：开户存钱");
openBankBook("live");
addMoneyFen("wallet", 10000, true);
bankDeposit(0, [10000]);
ok(questProgress(questById("qj_kaihu")).have === 0, "存款刚存，计时0天");
ok(!submitQuest("qj_kaihu").ok, "未存满7天不能交付");
for(let i=0;i<7;i++) settleDay(false);
ok(questProgress(questById("qj_kaihu")).have >= 7, "存满7天");
ok(submitQuest("qj_kaihu").ok, "交付：开户存钱");
ok(S.qianTrust === 40 && !!S.unlocks.kaihu, "信任40，解锁 kaihu");

/* 茅台 */
ok(takeQuest("qj_maotai").ok, "接取：所长的应酬");
addPack("maotai", 2);
ok(submitQuest("qj_maotai").ok, "交付：所长的应酬");
ok(S.qianTrust === 60 && S.identity === 3 && !!S.unlocks.danbao, "信任60，身份3（有担保），解锁 danbao");

/* 阶段3 · 钱厂长 */
S.loc = "shipinchang";
ok(takeQuest("qj_dingdan1").ok, "接取：第一张订单");
addPack("flashlight", 20);
ok(packQty("flashlight") === 20, "背包有20个手电筒");
const wBefore = moneyWallet();
ok(submitQuest("qj_dingdan1").ok, "交付：第一张订单");
ok(S.factoryOpen && !!S.unlocks.dingdan1, "食品厂开放（unlock:factory）");
ok(S.qianTrust === 80, "信任80");
ok(moneyWallet() - wBefore === 120000, "货款+1200元（80年代现金）");

ok(takeQuest("qj_dingdan2").ok, "接取：紧急补单");
addPack("battery", 30); addPack("ebwatch", 2);
ok(submitQuest("qj_dingdan2").ok, "交付：紧急补单（多目标：电池30+电子表2）");
ok(S.qianTrust === 95 && !!S.unlocks.dingdan2, "信任95，解锁 dingdan2");

ok(takeQuest("qj_dingdan3").ok, "接取：连续合作");
addPack("guantou", 30); addPack("malrjing", 10);
ok(submitQuest("qj_dingdan3").ok, "交付：连续合作");
ok(S.qianTrust === 100 && S.identity === 4 && !!S.unlocks.changqihezuo, "信任100封顶，身份4（有单位），解锁 changqihezuo");

/* 身份 → 住房 */
ok(changeHousing("brick").ok, "身份2+可租砖瓦房");
ok(changeHousing("building").ok, "身份4可租小楼房");

console.log("== 逾期惩罚 ==");
S.loc = "fandian";
takeQuest("qj_xiliang"); // 已做过？qj_xiliang 已 questDone——用重置的链验证
// qj_xiliang 已完成，改用新档验证逾期
S = newState(); S.world = "80"; S.loc = "jiedao";
addPack("guantou", 1); takeQuest("qj_luojiao"); submitQuest("qj_luojiao");
S.loc = "fandian";
takeQuest("qj_xiliang");
const t0 = S.qianTrust; // 0
for(let i=0;i<4;i++) settleDay(false);
ok(!questActive("qj_xiliang"), "逾期3天任务自动移除");
ok(S.qianTrust === 0, "信任变化 = " + S.qianTrust + "（-5下限为0，t0=" + t0 + "）");
ok(takeQuest("qj_xiliang").ok, "逾期后可重新接取");

console.log("== 旧任务兼容（schema v1 → v2） ==");
S = newState();
S.world = "26"; S.loc = "wangtou";
addPack("tobacco", 1);
takeQuest("wt_tobacco");
ok(submitQuest("wt_tobacco").ok, "老王头旱烟任务（item型）可完成");
ok(S.money["26"] === 400, "现代现金奖励+100元");
S.world = "80"; S.loc = "liangdian";
addPack("dahuoji", 1);
takeQuest("zy_liuxing");
ok(submitQuest("zy_liuxing").ok, "张姨流行标签任务（tag型）可完成");

console.log("== 前置门槛 ==");
S = newState(); S.world = "80"; S.loc = "shipinchang";
ok(!takeQuest("qj_dingdan1").ok, "无 danbao 不能接第一张订单");

console.log(failed === 0 ? "\n全部通过 ✔" : "\n失败 " + failed + " 项 ✘");
process.exit(failed === 0 ? 0 : 1);
