window.NETWORKS = {
    // === 核心网络 (默认显示) ===
    "0x64": { 
        name: "Gnosis", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://gnosis-rpc.publicnode.com", 
        type: "mainnet", 
        color: "#10b981", // Emerald
        default: true 
    },
    "0xcc": { 
        name: "opBNB", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://opbnb-mainnet-rpc.bnbchain.org", 
        type: "mainnet", 
        color: "#f59e0b", // Amber
        default: true 
    },
    "0xa5bd": { 
        name: "Tempo", 
        proxy: "0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", 
        rpc: "https://rpc.testnet.tempo.xyz", 
        type: "testnet", 
        isV6: true, 
        color: "#ec4899", // Pink
        default: true 
    },
    "0xaa36a7": { 
        name: "Sepolia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://sepolia.drpc.org", 
        type: "testnet", 
        color: "#6366f1", // Indigo
        default: true 
    },
    "0xc488": { 
        name: "Somnia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://dream-rpc.somnia.network", 
        type: "testnet", 
        color: "#8b5cf6", // Purple
        default: true 
    },

    // === 备用网络 (默认隐藏) ===
    "0x88bb0": { name: "Hoodi", proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc: "https://0xrpc.io/hoodi", type: "testnet", color: "#06b6d4", default: false },
    "0x61": { name: "BSC Test", proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc: "https://bsc-testnet-rpc.publicnode.com", type: "testnet", color: "#eab308", default: false },
    "0x4cef52": { name: "Arc Test", proxy: "0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", rpc: "https://rpc.testnet.arc.network", type: "testnet", color: "#84cc16", default: false },
    "0x164ce": { name: "Giwa Sep", proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc: "https://sepolia-rpc.giwa.io", type: "testnet", color: "#14b8a6", default: false },
    "0x14a34": { name: "Base Sep", proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc: "https://base-sepolia-rpc.publicnode.com", type: "testnet", color: "#3b82f6", default: false },
    "0x15eb": { name: "opBNB Test", proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", rpc: "https://opbnb-testnet-rpc.bnbchain.org", type: "testnet", color: "#f97316", default: false }
};