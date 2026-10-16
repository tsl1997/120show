/**
 * networks.js —— 链上浏览器的网络配置源（「新增网络只改这里」）
 *
 * 结构对齐 120show/text 项目的 config.js（window.NETWORKS），方便两边对照同步。
 * 字段说明：
 *   name      链名（专有名词，不参与 i18n 翻译）
 *   rpc       公共 JSON-RPC 端点（免密钥；均已实测：可达 + chainId 正确 + CORS 放行）
 *   type      "mainnet" | "testnet"
 *   color     链品牌色（UI 徽标用）
 *   symbol    链原生币符号
 *   explorer  区块浏览器外链模板，{hash} 会被交易哈希替换（留空则不显示外链按钮）
 *   default   是否为默认链（只有一条，用于「只输入哈希、不指定链」的查询）
 *   note      备注（如端口限制）
 *
 * 检索规则：输入 <chainId>:<交易哈希>（如 11155111:0xabc... 或 0xaa36a7:0xabc...），
 * 先在本配置里查链，查不到直接拒绝；查到后用该链的 rpc 查询交易。
 * 单独输入地址或哈希时，走默认链（Sepolia）的列表/查询逻辑。
 *
 * RPC 验证记录（2026-10-17，curl 带 Origin 实测 eth_chainId + access-control-allow-origin）：
 *   - 所有 publicnode/drpc 端点：CORS 通配 *
 *   - Blast / Taiko 已从官方 RPC 换为 publicnode（官方 RPC 的 CORS 只放行 localhost:8080）
 *   - Arc 官方 RPC 的 CORS 仅放行 http://localhost:8080 —— 请用默认端口启动本地服务器
 *   - text 原配置中的 Sonic Blaze（RPC 已下线）与 Ronin Saigon（RPC 实际 chainId=0x31769 与
 *     配置键 0x7e5 不符）已剔除；Tempo 的 chainId 按 RPC 实际返回修正为 0xa5bf
 */
window.NETWORKS = {

  /* ==================== 主网 / 主流 L2 ==================== */
  "0x1": {
    name: "Ethereum", rpc: "https://ethereum-rpc.publicnode.com",
    type: "mainnet", color: "#627eea", symbol: "ETH",
    explorer: "https://etherscan.io/tx/{hash}", default: false
  },
  "0xa4b1": {
    name: "Arbitrum One", rpc: "https://arbitrum-one-rpc.publicnode.com",
    type: "mainnet", color: "#28a0f0", symbol: "ETH",
    explorer: "https://arbiscan.io/tx/{hash}", default: false
  },
  "0x2105": {
    name: "Base", rpc: "https://base-rpc.publicnode.com",
    type: "mainnet", color: "#0052ff", symbol: "ETH",
    explorer: "https://basescan.org/tx/{hash}", default: false
  },
  "0xa": {
    name: "Optimism", rpc: "https://optimism-rpc.publicnode.com",
    type: "mainnet", color: "#ff0420", symbol: "ETH",
    explorer: "https://optimistic.etherscan.io/tx/{hash}", default: false
  },
  "0x89": {
    name: "Polygon PoS", rpc: "https://polygon-bor-rpc.publicnode.com",
    type: "mainnet", color: "#8247e5", symbol: "POL",
    explorer: "https://polygonscan.com/tx/{hash}", default: false
  },
  "0x82750": {
    name: "Scroll", rpc: "https://rpc.scroll.io",
    type: "mainnet", color: "#ffd3ad", symbol: "ETH",
    explorer: "https://scrollscan.com/tx/{hash}", default: false
  },
  "0xe708": {
    name: "Linea", rpc: "https://linea-rpc.publicnode.com",
    type: "mainnet", color: "#121212", symbol: "ETH",
    explorer: "https://lineascan.build/tx/{hash}", default: false
  },
  "0x144": {
    name: "zkSync Era", rpc: "https://mainnet.era.zksync.io",
    type: "mainnet", color: "#8c8dfc", symbol: "ETH",
    explorer: "https://explorer.zksync.io/tx/{hash}", default: false
  },
  "0x13e31": {
    name: "Blast", rpc: "https://blast-rpc.publicnode.com",
    type: "mainnet", color: "#fcfc03", symbol: "ETH",
    explorer: "https://blastscan.io/tx/{hash}", default: false
  },
  "0x1388": {
    name: "Mantle", rpc: "https://rpc.mantle.xyz",
    type: "mainnet", color: "#65b3ae", symbol: "MNT",
    explorer: "https://mantlescan.xyz/tx/{hash}", default: false
  },
  "0x28c58": {
    name: "Taiko", rpc: "https://taiko-rpc.publicnode.com",
    type: "mainnet", color: "#e81899", symbol: "ETH",
    explorer: "https://taikoscan.io/tx/{hash}", default: false
  },
  "0x64": {
    name: "Gnosis", rpc: "https://gnosis-rpc.publicnode.com",
    type: "mainnet", color: "#10b981", symbol: "xDAI",
    explorer: "https://gnosisscan.io/tx/{hash}", default: false
  },
  "0xcc": {
    name: "opBNB", rpc: "https://opbnb-mainnet-rpc.bnbchain.org",
    type: "mainnet", color: "#f59e0b", symbol: "BNB",
    explorer: "https://opbnbscan.com/tx/{hash}", default: false
  },

  /* ==================== 测试网（来自 120show/text 配置，已逐一实测） ==================== */
  "0xaa36a7": {
    name: "Sepolia", rpc: "https://ethereum-sepolia-rpc.publicnode.com",
    type: "testnet", color: "#6366f1", symbol: "SepoliaETH",
    explorer: "https://eth-sepolia.blockscout.com/tx/{hash}", default: true
  },
  "0x66eee": {
    name: "Arbitrum Sepolia", rpc: "https://arbitrum-sepolia-rpc.publicnode.com",
    type: "testnet", color: "#3b82f6", symbol: "ETH",
    explorer: "https://sepolia.arbiscan.io/tx/{hash}", default: false
  },
  "0xaa37dc": {
    name: "OP Sepolia", rpc: "https://optimism-sepolia.drpc.org",
    type: "testnet", color: "#ff0000", symbol: "ETH",
    explorer: "https://sepolia-optimism.etherscan.io/tx/{hash}", default: false
  },
  "0x14a34": {
    name: "Base Sepolia", rpc: "https://base-sepolia-rpc.publicnode.com",
    type: "testnet", color: "#3b82f6", symbol: "ETH",
    explorer: "https://sepolia.basescan.org/tx/{hash}", default: false
  },
  "0x515": {
    name: "Unichain Sepolia", rpc: "https://unichain-sepolia-rpc.publicnode.com",
    type: "testnet", color: "#ec4899", symbol: "ETH",
    explorer: "https://sepolia.uniscan.xyz/tx/{hash}", default: false
  },
  "0xa869": {
    name: "Avalanche Fuji", rpc: "https://avalanche-fuji-c-chain-rpc.publicnode.com",
    type: "testnet", color: "#ef4444", symbol: "AVAX",
    explorer: "https://testnet.snowtrace.io/tx/{hash}", default: false
  },
  "0x138b": {
    name: "Mantle Sepolia", rpc: "https://rpc.sepolia.mantle.xyz",
    type: "testnet", color: "#14b8a6", symbol: "MNT",
    explorer: "https://sepolia.mantlescan.xyz/tx/{hash}", default: false
  },
  "0x13fb": {
    name: "Citrea", rpc: "https://rpc.testnet.citrea.xyz",
    type: "testnet", color: "#a3e635", symbol: "cBTC",
    explorer: "https://explorer.testnet.citrea.xyz/tx/{hash}", default: false
  },
  "0x18233": {
    name: "Plume", rpc: "https://testnet-rpc.plume.org",
    type: "testnet", color: "#9333ea", symbol: "PLUME",
    explorer: "https://testnet-explorer.plume.org/tx/{hash}", default: false
  },
  "0x940": {
    name: "KiteAI", rpc: "https://rpc-testnet.gokite.ai",
    type: "testnet", color: "#0ea5e9", symbol: "KITE",
    explorer: "https://testnet.kitescan.ai/tx/{hash}", default: false
  },
  "0x88bb0": {
    name: "Hoodi", rpc: "https://0xrpc.io/hoodi",
    type: "testnet", color: "#06b6d4", symbol: "ETH",
    explorer: "https://hoodi.etherscan.io/tx/{hash}", default: false
  },
  "0x61": {
    name: "BSC Testnet", rpc: "https://bsc-testnet-rpc.publicnode.com",
    type: "testnet", color: "#eab308", symbol: "tBNB",
    explorer: "https://testnet.bscscan.com/tx/{hash}", default: false
  },
  "0x350b": {
    name: "Intuition", rpc: "https://testnet.rpc.intuition.systems",
    type: "testnet", color: "#6366f1", symbol: "tTRUST",
    explorer: "https://testnet.explorer.intuition.systems/tx/{hash}", default: false
  },
  "0xaa39db": {
    name: "RISE", rpc: "https://testnet.riselabs.xyz",
    type: "testnet", color: "#84cc16", symbol: "ETH",
    explorer: "", default: false
  },
  "0x899": {
    name: "Stable", rpc: "https://rpc.testnet.stable.xyz",
    type: "testnet", color: "#3b82f6", symbol: "gUSDT",
    explorer: "https://explorer.testnet.stable.xyz/tx/{hash}", default: false
  },
  "0xa5bf": {
    name: "Tempo", rpc: "https://rpc.testnet.tempo.xyz",
    type: "testnet", color: "#ec4899", symbol: "TEMPO",
    explorer: "https://explorer.testnet.tempo.xyz/tx/{hash}", default: false,
    note: "chainId 已按 RPC 实际返回修正为 0xa5bf（text 配置中为 0xa5bd）"
  },
  "0x4cef52": {
    name: "Arc", rpc: "https://rpc.testnet.arc.io",
    type: "testnet", color: "#84cc16", symbol: "ARC",
    explorer: "", default: false,
    note: "官方 RPC 的 CORS 仅放行 http://localhost:8080 —— 本地服务器请用默认端口"
  },
  "0x164ce": {
    name: "Giwa", rpc: "https://sepolia-rpc.giwa.io",
    type: "testnet", color: "#14b8a6", symbol: "ETH",
    explorer: "", default: false
  },
  "0xc488": {
    name: "Somnia", rpc: "https://dream-rpc.somnia.network",
    type: "testnet", color: "#8b5cf6", symbol: "SOM",
    explorer: "https://shannon-explorer.somnia.network/tx/{hash}", default: false
  },
  "0x15eb": {
    name: "opBNB Testnet", rpc: "https://opbnb-testnet-rpc.bnbchain.org",
    type: "testnet", color: "#f97316", symbol: "tBNB",
    explorer: "https://testnet.opbnbscan.com/tx/{hash}", default: false
  }
};
