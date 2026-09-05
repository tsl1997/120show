# 陶氏族谱 · tao

陶氏宗族的族谱数字化网站。以人物为中心,树状展示世系,支持查看个人详情(配偶、父母、子女、备注/断代说明)。

> 当前路线:**先做静态原型**——纯 HTML/CSS/JS + 本地 JSON 数据,先把数据结构与展示跑通,暂不建数据库和后端。
> 原 Vue3 + MySQL 方案保留在 `server/`、`web/`、`database/`(可后续升级接入)。

## 一、静态原型(当前推荐使用)

目录:`static/`,无需安装任何依赖,数据用本地 JSON。

```
static/
├── index.html        # 页面(双击即可打开,或本地起个静态服务)
├── style.css         # 样式(家谱树 + 详情抽屉)
├── app.js            # 逻辑(读数据、画树、关系推导、详情)
├── data.json         # 数据(JSON 格式,网页读取)
├── data.js           # 数据(JS 内嵌版,file:// 双击打开时使用,与 data.json 一致)
├── data_template.csv # 填数据的模板(示例:一世祖~三世)
└── csv2json.js       # CSV → data.json/data.js 转换工具
```

### 使用流程

1. **复制 `data_template.csv`** 为你的数据表(或直接在里面改),按表头填写;
2. 运行转换:`node csv2json.js 你的表.csv`(自动生成 `data.json` 和 `data.js`);
3. 打开 `index.html`:
   - 直接双击(推荐,无需服务器),数据走 `data.js`;
   - 或 `npx serve .` / 任意静态服务器,数据走 `data.json`。

### CSV 表头(顺序固定)

| 列 | 必填 | 说明 |
|---|---|---|
| `id` | 是* | 人物编号(数字)。留空会自动编号 |
| `name` | 是 | 姓名 |
| `gender` | 是 | 男 / 女 |
| `generation` | 否* | 世系(一世祖=1)。留空且填了 `father_id` 时按父辈+1 自动推算 |
| `father_id` | 否 | 父亲编号(一世祖、正妻留空) |
| `zi` | 否 | 字 |
| `hao` | 否 | 号 |
| `spouse` | 否 | 配偶姓名(正妻,记在丈夫这一行) |
| `notes` | 否 | 备注/断代说明(如绝后原因) |

> 注意:某格内容含**英文逗号**时,该格须用英文双引号括起来,如 `"一世祖,明初迁来。"`;
> 也可以直接用**中文逗号**(，)避免加引号。

### 关系自动推导(不建关系表)

- **子女** = 所有 `father_id` 指向我的人
- **兄弟姐妹** = 和我 `father_id` 相同的人
- **母亲** = 父亲的 `spouse`
- **配偶** = `spouse` 字段(早年族谱通常只记正妻名)

### 页面功能

- 首页世系树(从上往下),**男(朱红)/女(浅灰)** 两种性别色明确区分,配偶为米黄虚线框
- 点击人物节点 → 右侧抽屉**平滑滑出**:字號、备注、父母、配偶、子女、兄弟姐妹(可点击跳转)
- 有子女的男丁节点右上角有 **+/− 按钮**,可**平滑展开/收起**分支(选中节点带高亮)
- 无子女的男丁自动标「无后」;按 Esc 或点击遮罩可关闭详情

## 二、Vue3 + MySQL 方案(后续升级用,暂不启动)

技术栈:Vue 3 + Vite + ECharts / Node.js + Express + MySQL 5.7.20(库 `tao`)。

```
tao/
├── database/schema.sql  # 建库建表(6 张)
├── database/seed.sql    # 演示数据
├── docs/database.md     # 数据库设计文档
├── server/              # 后端(端口 3001)
└── web/                 # 前端(端口 5173)
```

启动方式(需要 Node ≥ 18 + 本机 MySQL,配置见 `server/.env`):

```bash
cd server && npm install && npm run dev   # 后端 http://localhost:3001
cd web    && npm install && npm run dev   # 前端 http://localhost:5173
```

## 后续计划

- [ ] 用 CSV 录入真实族谱数据(一世祖起,逐支补全至 18、19 世)
- [ ] 数据量上来后接入 Vue3 + MySQL(导入 data.json 即可)
- [ ] 录入/编辑管理页面、搜索、原谱照片外链、打印世系图
