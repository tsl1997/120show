# 动漫异世界总规则（ANIME_RULES）

> 本文是「动漫 IP → 旅行图鉴异世界副本」的**统一造城规约**。任何 AI / 维护者新增副本前必须通读。
> 目录：`game/travel/data/isekai/anime/<作品英文小写>/`
> 主进度板：`data/isekai/anime/ANIME_IP_LIST.md`

---

## 0. 一句话规则

一个动漫 IP = 一个**副本**（`world:'isekai'`，`region:'isekai_anime'`），副本内仿 OP/SM 结构：
**景点圣地(spots) + 特色宝物(souvenirs) + 剧情名场面(stories) + 势力系列收藏(TRAVEL_SERIES，分色)**。
人物不进"名场面"，人物一律做成"系列收藏卡"；名场面只放剧情高光。

## 1. 目录 / 文件模板（每副本一套）

```
data/isekai/anime/<work>/
├─ <PX>_00_plan.md            # 可选：该副本大纲（抄 op_00_plan 风格）
├─ <PX>_01_spots.js           → window.<PX>_SPOTS    景点（无 tag/type，price 可 0）
├─ <PX>_02_stories.js         → window.<PX>_STORIES  剧情名场面（无 price）
├─ <PX>_03_gifts.js           → window.<PX>_GIFTS    特色宝物（tag+type+price）
├─ <PX>_series.js             → 多个 window.TRAVEL_SERIES.push（势力系列收藏）
└─ isekai_<work>.js           → 组装器：push 一个 city 到 window.TRAVEL_CITIES
```
`<PX>`：全库唯一的 2~3 位大写前缀（如 DB/SM/OP/CO/SL/NA）。**index.html 加载顺序**：
分册(01→02→03) → series → 组装器（组装器必须最后，见现有文件）。**series 加载不依赖组装器**，但为整齐放组装器前一行。

## 2. 城市对象（组装器必填字段，参考 `isekai_sailormoon.js`）

```js
window.TRAVEL_CITIES.push({
  id: 'isekai_<work>', name: 'IP名·舞台名', country: '异世界', cc: 'CN',
  flag: 'emoji', region: 'isekai_anime', world: 'isekai', hero: 'emoji',
  desc: '一句话世界观+主题句',
  labels: { spotL:'景点圣地', souvenirL:'特色宝物', storyL:'剧情名场面', spotB:'前往', souvenirB:'获取', storyB:'见证' },
  travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
  spots: window.PX_SPOTS || [], souvenirs: window.PX_GIFTS || [], stories: window.PX_STORIES || [],
});
```
- `id` 唯一；**发布后不可改名**（存档引用）。新 IP 用 `isekai_<work>`。
- 完全架空的 IP（Fate/EVA/SAO 等）舞台名直接写架空地名，无需现实圣巡。

## 3. 数据条目 schema（三个数组）

```js
// 景点 spots：{ id, name, icon, price, desc }
{ id: 'pxp_xxx', name: '地点名', icon: '🏰', price: 0, desc: '…' }
// 宝物 souvenirs：{ id, name, icon, tag, type, price, desc }
{ id: 'pxg_xxx', name: '宝物名', icon: '🗡️', tag: '玩', type: '宝物', price: 120, desc: '…' }
// 名场面 stories：{ id, name, icon, desc }（无 price、无 tag/type）
{ id: 'pxv_xxx', name: '经典剧情名', icon: '🌟', desc: '…' }
```
- **id 全库唯一**，前缀固定：`pxp_`地点 / `pxg_`宝物 / `pxv_`名场面 / `pxc_`人物系列卡。
- `tag ∈ {衣,食,住,行,玩,游,闻}`；`type` 用 check_data TYPES 白名单（宝物/秘籍/徽章/美食/饮品/特产/文创/服饰/体验/住宿/收藏卡/手办…），超白名单需同步 `check_data.js` TYPES。
- 免费：`price:0`（spots 常用；souvenirs 建议至少留少量免费入口或低价入口）。
- 描述 ≥18 字、画面感强、少英文；人物卡同样遵守。

## 4. 势力系列收藏（本规则重点）

- 每个副本按世界观拆 **3~8 个势力/篇章系列**；每个系列 push 一条：
```js
window.TRAVEL_SERIES.push({ id:'sr_<work>_<grp>', cat:'isekai', name:'势力名', color:'#hex',
  years:'…', author:'…', theme:'…', background:'…', story:'…', protagonist:'…', slogan:'…',
  cities:['isekai_<work>'], items:[ { id:'pxc_1', name:'角色/战利品', type:'卡类名', city:'isekai_<work>', price:…, desc:'…' } ] });
```
- **同副本多个系列背景方块颜色必须不同**；主角团/主队用**金色 #d4a017**，其余势力各配一色（互不相同）。
- 建议配色池（避免与金色撞）：`#c0392b 红 / #2e86c1 蓝 / #16a085 青绿 / #8e44ad 紫 / #e67e22 橙 / #34495e 深蓝灰 / #c2185b 粉红 / #27ae60 绿 / #7d3c98 深紫 / #d4ac0d 暗金 / #5d6d7e 灰蓝`，按势力气质选用。
- `app.js`：series 对象带 `color` 时本城·系列收藏自动分组+染色；不带则按 id 哈希配色。**尽量都显式给 color。**
- 系列名可用 `（副标题）` 结尾以触发 app 的分组，一般势力名即可。

## 5. 数量目标（单副本）

| 数据 | 建议量 | 说明 |
|---|---|---|
| spots | 18–30 | 按世界观主线舞台；可 0 元免费打卡 |
| souvenirs | 22–40 | 名物/武器/道具/专属特产，价格梯度大 |
| stories(名场面) | 12–24 | 只放"非某人物独角戏"的高光剧情 |
| series | 3–8 个 | 主势力(金)+敌人/配角等，各色不同 |
| series 卡/系列 | 5–15 张 | 人物或标志性单位；价格随地位 80–400 |

## 6. 造城流程（改/造副本的统一动作）

1. 在 `ANIME_IP_LIST.md` 登记，分配 `<work>`、`<PX>`、势力名与色板。
2. 建目录+五件套文件（可复制 SM/DB 模板），先写组装器再填数据。
3. 若复用"旧人物相遇分册"，用 `anime_series_gen.js` 思路迁移：人物→series，事件→stories。
4. 在 `index.html` 动漫段按「01→02→03→series→isekai_<work>」挂载。
5. 跑 `node check_data.js`，**必须 0 error**（可留警告）。
6. 完成打勾 + 记录总条目数。

## 7. 红线
- id 全库唯一且发布后不删改；前缀规则见 §3。
- 不破坏 6 个既有副本与 root `series_*.js`。
- `check_data.js` 0 error 才算过。
- 描述写作纪律：中文、≥18 字、少英文、有画面/梗。

## 8. 现有 6 个副本（参考蓝本）
海贼王 op（28系列/483卡）、美战 sm（7系列/37卡）、龙珠 db（3+1系列）、灌篮 sl（3系列）、火影 na（6系列）、柯南 co（5系列）——**结构与本文一致**，可直接打开对照写作。
