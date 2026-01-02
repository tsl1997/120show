// config.js (v6.4 - Final & Corrected based on s3.txt)

// 1. 网络配置
// 所有网络信息已根据您提供的 s3.txt 文件精确校准。
const NETWORKS = {
    // Decimal: 42429 -> Hex: 0xa5bd
    "0xa5bd": { 
        name: "Tempo Testnet", 
        proxy: "0xba0c4539deb136356Ac63A4F58772B3BFe772883", 
        rpc: "https://rpc.testnet.tempo.xyz"
    },
    // Decimal: 50312 -> Hex: 0xc488
    "0xc488": { 
        name: "Somnia Testnet", 
        proxy: "0xDcB858D6A338d0fe3Cf7E724d95d6ED0f622702c", 
        rpc: "https://dream-rpc.somnia.network"
    },
    // Decimal: 11155111 -> Hex: 0xaa36a7
    "0xaa36a7": { 
        name: "Sepolia Testnet", 
        proxy: "0x0255d9E3432A39DC3a5F5bC3F05459C7D5c2a25e", 
        rpc: "https://sepolia.drpc.org"
    },
    // Decimal: 560048 -> Hex: 0x88c30
    "0x88bb0": { 
        name: "Hoodi Testnet", 
        proxy: "0xaB3968402A95143717D8fa571c0A43f94391d6d2", 
        rpc: "https://0xrpc.io/hoodi"
    },
    // Decimal: 97 -> Hex: 0x61
    "0x61": { 
        name: "BNB Smart Chain Testnet", 
        proxy: "0xd9AD95aF2cA617A67e4e9891AA75c637b62Aa34F", 
        rpc: "https://bsc-testnet-rpc.publicnode.com"
    },
    // Decimal: 5042002 -> Hex: 0x4ce452
    "0x4cef52": { 
        name: "Arc Testnet", 
        proxy: "0xb6459D33774595A645Ac730037645830485d98D9", 
        rpc: "https://rpc.testnet.arc.network"
    },
    // Decimal: 91342 -> Hex: 0x164be
    "0x164ce": { 
        name: "Giwa Sepolia", 
        proxy: "0x86f62014d0e422D4A1B069068852D123A0FF5259", 
        rpc: "https://sepolia-rpc.giwa.io"
    },
    // Decimal: 84532 -> Hex: 0x14a34
    "0x14a34": { 
        name: "Base Sepolia", 
        proxy: "0x964B8C91f8650296089fe5bF4B39d6c16b5E2580", 
        rpc: "https://base-sepolia-rpc.publicnode.com"
    }
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
