// config.js (v6.4 - Final & Corrected based on s3.txt)

// 1. 网络配置
// 所有网络信息已根据您提供的 s3.txt 文件精确校准。
const NETWORKS = {
    // 上线第一个主网
    "0x64": { 
        name: "Gnosis(xDai) Mainnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://gnosis-rpc.publicnode.com"
    },
    // 上线第二个主网
    "0xcc": { 
        name: "opBNB Mainnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://opbnb-mainnet-rpc.bnbchain.org"
    },
   
   
    "0xa5bd": { 
        name: "Tempo Testnet", 
        proxy: "0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", 
        rpc: "https://rpc.testnet.tempo.xyz"
    },

    "0xc488": { 
        name: "Somnia Testnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://dream-rpc.somnia.network"
    },

    "0xaa36a7": { 
        name: "Sepolia Testnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://sepolia.drpc.org"
    },

    "0x88bb0": { 
        name: "Hoodi Testnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://0xrpc.io/hoodi"
    },

    "0x61": { 
        name: "BNB Smart Chain Testnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://bsc-testnet-rpc.publicnode.com"
    },

    "0x4cef52": { 
        name: "Arc Testnet", 
        proxy: "0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71", 
        rpc: "https://rpc.testnet.arc.network"
    },

    "0x164ce": { 
        name: "Giwa Sepolia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://sepolia-rpc.giwa.io"
    },

    "0x14a34": { 
        name: "Base Sepolia", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://base-sepolia-rpc.publicnode.com"
    },


    "0x15eb": { 
        name: "opBnb Testnet", 
        proxy: "0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34", 
        rpc: "https://opbnb-testnet-rpc.bnbchain.org"
    },

    // 新增的测试网合约信息 均是v5合约
    "0xdede":{
        name:"Sonic Blaze",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://sonic-blaze-rpc.publicnode.com"
    },

    "0x66eee":{
        name:"Arbitrum Sepolia",
        proxy:"0x7d342C7A5a7dc33Fb57eA4474D2D17eF8217cD71",
        rpc:"https://arbitrum-sepolia-rpc.publicnode.com"
    },

    "0x350b":{
        name:"Intuition",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://testnet.rpc.intuition.systems"
    },

    "0x515":{
        name:"Unichain Sepolia",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://unichain-sepolia-rpc.publicnode.com"
    },


    "0x138b":{
        name:"Mantle Sepolia",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://rpc.sepolia.mantle.xyz"
    },

    "0xa869":{
        name:"Avalanche Fuji",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://avalanche-fuji-c-chain-rpc.publicnode.com"
    },


    "0xaa37dc":{
        name:"OP Sepolia",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://optimism-sepolia.drpc.org"
    },

    "0x18233":{
        name:"Plume",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://testnet-rpc.plume.org"
    },

    "0x13fb":{
        name:"Citrea",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://rpc.testnet.citrea.xyz"
    },

    "0x940":{
        name:"KiteAI",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://rpc-testnet.gokite.ai"
    },


    "0xaa39db":{
        name:"RISE",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://testnet.riselabs.xyz"
    },

    "0x899":{
        name:"Stable",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://rpc.testnet.stable.xyz"
    },


    "0x7e5":{
        name:"Ronin stats",
        proxy:"0x177D8DCAf02504A8eFeAFcaFDC7253473ace4C34",
        rpc:"https://saigon-testnet.roninchain.com/rpc"
    },













};