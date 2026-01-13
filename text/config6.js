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

};

// 2. 合约ABI (Application Binary Interface) - 无改动
const ABI = [
    "function register(string _username) public",
    "function createPost(string _title, string _content) public",
    "function updatePost(uint256 _id, string _newTitle, string _newContent) public",
    "function deletePost(uint256 _id) public",
    "function getPostCount() view returns (uint256)",
    "function getPaginatedPosts(uint256 _page, uint256 _pageSize) view returns (tuple(uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists)[])",
    "function users(address) view returns (string username, bool isBanned, bool isRegistered, address userAddress)",
    "function posts(uint256) view returns (uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists)",
    "function getPostIdsByAddress(address _user) view returns (uint256[])",
    "function getUserCount() view returns (uint256)",
    "function allRegisteredUsers(uint256) view returns (address)",
    "function setBannedStatus(address _user, bool _status) public",
    "function owner() view returns (address)"
];
