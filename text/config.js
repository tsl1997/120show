// config.js
window.NETWORKS = {
    // === 核心网络 (默认显示) ===
    "0x64": { 
        name: "Gnosis", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://gnosis-rpc.publicnode.com", 
        type: "mainnet", 
        color: "#10b981", 
        default: true 
    },
    "0xcc": { 
        name: "opBNB", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://opbnb-mainnet-rpc.bnbchain.org", 
        type: "mainnet", 
        color: "#f59e0b", 
        default: true 
    },
    "0xa5bd": { 
        name: "Tempo", 
        proxy: "0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", 
        rpc: "https://rpc.testnet.tempo.xyz", 
        type: "testnet", 
        isV6: true, 
        color: "#ec4899", // V6 Pink
        default: true 
    },
    "0xaa36a7": { 
        name: "Sepolia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://sepolia.drpc.org", 
        type: "testnet", 
        color: "#6366f1", 
        default: true 
    },
    "0xc488": { 
        name: "Somnia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://dream-rpc.somnia.network", 
        type: "testnet", 
        color: "#8b5cf6", 
        default: true 
    },
    
    // === 新增/其他测试网 (可选, 颜色已预配) ===
    // Layer 2s & High Perf
    "0x66eee": { name: "Arbitrum Sepolia", proxy:"0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", rpc:"https://arbitrum-sepolia-rpc.publicnode.com", type:"testnet", color:"#3b82f6", default: false },
    "0x515": { name: "Unichain", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://unichain-sepolia-rpc.publicnode.com", type:"testnet", color:"#ec4899", default: false },
    "0xdede": { name: "Sonic Blaze", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://sonic-blaze-rpc.publicnode.com", type:"testnet", color:"#f97316", default: false },
    "0xa869": { name: "Avalanche Fuji", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://avalanche-fuji-c-chain-rpc.publicnode.com", type:"testnet", color:"#ef4444", default: false },
    
    // Standard EVMs
    "0xaa37dc": { name: "OP Sepolia", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://optimism-sepolia.drpc.org", type:"testnet", color:"#ff0000", default: false },
    "0x138b": { name: "Mantle Sepolia", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://rpc.sepolia.mantle.xyz", type:"testnet", color:"#14b8a6", default: false },
    "0x13fb": { name: "Citrea", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://rpc.testnet.citrea.xyz", type:"testnet", color:"#a3e635", default: false },
    "0x18233": { name: "Plume", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://testnet-rpc.plume.org", type:"testnet", color:"#9333ea", default: false },
    "0x940": { name: "KiteAI", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://rpc-testnet.gokite.ai", type:"testnet", color:"#0ea5e9", default: false },
    
    // Niche & Misc
    "0x88bb0": { name: "Hoodi", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://0xrpc.io/hoodi", type:"testnet", color:"#06b6d4", default: false },
    "0x61": { name: "BSC Test", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://bsc-testnet-rpc.publicnode.com", type:"testnet", color:"#eab308", default: false },
    "0x350b": { name: "Intuition", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://testnet.rpc.intuition.systems", type:"testnet", color:"#6366f1", default: false },
    "0xaa39db": { name: "RISE", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://testnet.riselabs.xyz", type:"testnet", color:"#84cc16", default: false },
    "0x899": { name: "Stable", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://rpc.testnet.stable.xyz", type:"testnet", color:"#3b82f6", default: false },
    "0x7e5": { name: "Ronin", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://saigon-testnet.roninchain.com/rpc", type:"testnet", color:"#22c55e", default: false },
    
    // Fallbacks
    "0x4cef52": { name: "Arc", proxy:"0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", rpc:"https://rpc.testnet.arc.network", type:"testnet", color:"#84cc16", default: false },
    "0x164ce": { name: "Giwa", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://sepolia-rpc.giwa.io", type:"testnet", color:"#14b8a6", default: false },
    "0x14a34": { name: "Base Sep", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://base-sepolia-rpc.publicnode.com", type:"testnet", color:"#3b82f6", default: false },
    "0x15eb": { name: "opBNB T", proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc:"https://opbnb-testnet-rpc.bnbchain.org", type:"testnet", color:"#f97316", default: false }
};