# 🌌 OmniVerse Protocol (V13)

# 全链去中心化存证与内容发布协议

Decentralized Full-Chain Content Registry & Publishing Platform
OmniVerse 是一个基于 Web3 的无后端、纯前端去中心化应用 (DApp)。它允许用户在多个与 EVM 兼容的区块链（Gnosis, opBNB, Tempo, Sepolia, Somnia 等）上发布不可篡改、永久存储的内容。
本项目采用 Vue 3 + Tailwind CSS + Ethers.js v6 构建，无需编译，即开即用，展现了极简代码架构下的高级 UI 交互体验。

## ✨ 核心特性 (Features)

### 🌐 全链聚合大厅 (Multi-Chain Explore)

自动并发抓取多个区块链网络（Mainnet & Testnet）上的最新数据。
支持动态筛选：一键过滤特定网络的内容流。
颜色编码：不同网络拥有独立的主题色（如 Gnosis 为绿色，Tempo 为粉色）。
默认显示 5 个网络：Gnosis、opBNB、opBNB T、Sepolia、Somnia。

### 🖼️ 画廊 (Gallery)

基于 V5 合约的 opBNB Testnet 画廊视图。
自动从帖子内容的 Markdown 图片语法 (`![alt](url)`) 提取第一张作为封面。
暗黑风格的瀑布流布局。

### 📝 沉浸式阅读与创作

所见即所得：支持 Markdown 语法的编辑器，实时预览。
沉浸式页面：详情页采用大字体、宽布局的杂志风格排版。
Deep Linking：支持生成分享链接（如 ?chain=0x..&id=10），访客无需连接钱包即可通过 RPC 读取内容。

### 🛡️ 权限与管理

身份系统：用户必须先在链上注册昵称才能发布。
所有权控制：只有发布者可以编辑或删除（逻辑删除）自己的帖子。
管理员后台：合约部署者拥有封禁/解封用户的权限，管理入口仅对管理员可见。

### 🎭 双模式钱包连接

**MetaMask 模式**: 传统浏览器插件钱包连接，自动识别账户切换和网络切换。
**本地私钥模式**: 无需安装任何插件，直接导入私钥，私钥加密存储在浏览器 localStorage 中。
自动登录：下次打开页面自动检测缓存私钥，一键进入。
⚠ 私钥模式仅推荐用于测试网，主网请使用 MetaMask 插件。

### 💰 余额监控

实时显示当前网络的原生代币余额及单位符号（如 tBNB、BNB、xDAI、ARC 等）。
点击钱包地址可快速复制完整地址，方便充值或领水。
每 30 秒自动刷新余额，交易后立即更新。
余额低于 0.0001 时右下角弹出红色充值提醒。
切换网络时自动重置并重新查询余额，加载过程显示 `...`，失败显示 `—`。

### ⚡ 极速与稳健

Zero Build：不需要 npm install 或 npm run build，纯静态 HTML/JS 运行。
Auto Connect：智能识别钱包状态，刷新页面自动保持登录（支持 MetaMask 和本地私钥）。
Anti-Crash：静态 CSS 映射解决 CDN 渲染卡顿问题，多链读取采用 Promise.all 并发容错。
定时刷新：余额每 30 秒自动同步，页面销毁时自动清理定时器。

### 🛠️ 技术栈 (Tech Stack)

Core: Vue.js 3 (Composition API, global build)
Styling: Tailwind CSS (CDN runtime)
Web3: Ethers.js v6
Markdown: Marked.js
Icons/Font: Inter Font, Native Emojis

## 🚀 快速开始 (Quick Start)

### 部署 (Deployment)

由于本项目是纯静态文件，您可以直接将其部署到任何静态托管服务，例如：
GitHub Pages (推荐)
Vercel
Netlify
AWS S3
只需上传以下三个文件即可：
index.html
logic.js
config.js

### 本地运行 (Local Development)

为了避免浏览器的 CORS 跨域限制或文件协议安全策略，建议使用本地服务器运行。
使用 VS Code Live Server 插件 (推荐):
右键点击 index.html。
选择 Open with Live Server。
或者使用 Python:
code
Bash
python3 -m http.server 8000
然后在浏览器访问 http://localhost:8000。

### ⚙️ 配置文件说明 (Configuration)

所有的网络配置都在 config.js 中，无需修改核心代码即可添加新链。

```javascript
window.NETWORKS = {
 "0xChainID": { 
     name: "Network Name", 
     proxy: "0xContractAddress...", // V5 或 V6 代理合约地址
     rpc: "https://rpc-url...",     // 公共 RPC 节点
     type: "mainnet",               // 'mainnet' 或 'testnet'
     isV6: true,                    // 是否支持封面图合约 (V6)
     color: "#hex",                 // UI 主题色
     symbol: "TOKEN",               // 原生代币符号 (用于余额显示)
     default: true                  // 是否在大厅默认选中
 },
 // ...
};
```

### 📄 智能合约架构 (Smart Contracts)

本项目兼容两种合约版本：
V5 (Standard):
基础的 title, content 存储。
适用于大部分网络 (Gnosis, opBNB, Sepolia, etc.)。
V6 (Enhanced):
新增 coverImageUrl (字符串) 和 imageCount (uint8)。
前端 logic.js 会根据 config.js 中的 isV6 字段自动切换 ABI (应用二进制接口) 进行交互。

### 📸 界面预览 (Screenshots)

首页: 极简、大字体的不对称网格设计 (Bento Grid)。
大厅: 根据链ID动态着色的多链信息流。
画廊: 暗黑风格的图片瀑布流（opBNB Testnet）。
阅读: 纯净的文章详情页。

### ⚠️ 注意事项

CDN 依赖: 这里的 Tailwind 和 Vue 通过 CDN 加载。在生产环境中虽然方便，但极少数情况下可能会受到 CDN 网络波动影响。
Browser Security: 请务必通过 http:// 或 https:// 协议访问，不要直接双击 index.html (file://)，否则无法连接 Metamask。
私钥安全: 本地私钥模式将密钥存储在浏览器 localStorage 中，存在 XSS 窃取风险，**请仅用于测试网**。主网使用请选择 MetaMask 连接。
RPC 可用性: 部分测试网 RPC 节点可能存在频率限制，余额显示为 `—` 时请检查 RPC 状态或切换网络。

### 🧭 版本与配置维护说明

- 主入口页面：`text/index.html`
- 网络配置唯一来源：`text/config.js`
- `text/config6.js` 仅作为兼容层（把 `window.NETWORKS` 映射为旧版页面可读的 `NETWORKS`）
- 历史页面已归档到：`text/archive/`

建议后续新增网络时只改 `config.js`，避免多份配置漂移。

### 📄 License

MIT License.
Build freely, Fork freely.
