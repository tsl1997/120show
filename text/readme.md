没问题，这个功能非常关键！在去中心化应用中，能够快速索引特定用户的内容是用户体验的核心。

为了实现“按地址”和“按用户名”查询，我引入了两个新的辅助映射：
1.  **`_userPostIds`**: 记录每个地址关联的所有帖子 ID。
2.  **`_nameToAddress`**: 建立用户名到钱包地址的索引，这样我们就能通过名字找到地址，进而找到帖子。

以下是优化后的合约代码和更新后的文档。

---

### 🛠️ 完善后的智能合约 (Solidity)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title OnChainInfoSystem
 * @dev 完善版：支持按地址和用户名查询用户所有帖子
 */
contract OnChainInfoSystem {
    
    struct User {
        string username;
        bool isBanned;
        bool isRegistered;
    }

    struct Post {
        uint256 id;
        string title;
        string content;
        address author;
        string authorName;
        uint256 timestamp;
        bool exists;
    }

    address public admin;
    uint256 private _postIdCounter;
    
    mapping(address => User) public users;
    mapping(string => bool) private _takenNames;
    mapping(string => address) private _nameToAddress; // 新增：用户名到地址的映射
    mapping(uint256 => Post) public posts;
    
    // 索引增强
    mapping(address => uint256[]) private _userPostIds; // 新增：存储每个用户的所有帖子ID
    uint256[] public allPostIds;

    event UserRegistered(address indexed userAddress, string username);
    event UserBannedStatusChanged(address indexed userAddress, bool isBanned);
    event PostCreated(uint256 indexed postId, address indexed author, string title);
    event PostUpdated(uint256 indexed postId, string newTitle);
    event PostDeleted(uint256 indexed postId, address indexed deletedBy);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyActiveUser() {
        require(users[msg.sender].isRegistered, "User not registered.");
        require(!users[msg.sender].isBanned, "User is banned.");
        _;
    }

    modifier postOwnerOrAdmin(uint256 _postId) {
        require(posts[_postId].exists, "Post does not exist.");
        require(msg.sender == posts[_postId].author || msg.sender == admin, "No permission.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // --- 用户管理 ---

    function register(string memory _username) public {
        require(!users[msg.sender].isRegistered, "Already registered.");
        require(bytes(_username).length > 0, "Empty username.");
        require(!_takenNames[_username], "Username taken.");

        users[msg.sender] = User({
            username: _username,
            isBanned: false,
            isRegistered: true
        });

        _takenNames[_username] = true;
        _nameToAddress[_username] = msg.sender; // 记录用户名对应的地址

        emit UserRegistered(msg.sender, _username);
    }

    function setBannedStatus(address _userAddress, bool _status) public onlyAdmin {
        require(users[_userAddress].isRegistered, "User not found.");
        users[_userAddress].isBanned = _status;
        emit UserBannedStatusChanged(_userAddress, _status);
    }

    // --- 帖子管理 ---

    function createPost(string memory _title, string memory _content) public onlyActiveUser {
        _postIdCounter++;
        
        posts[_postIdCounter] = Post({
            id: _postIdCounter,
            title: _title,
            content: _content,
            author: msg.sender,
            authorName: users[msg.sender].username,
            timestamp: block.timestamp,
            exists: true
        });

        allPostIds.push(_postIdCounter);
        _userPostIds[msg.sender].push(_postIdCounter); // 将帖子ID存入用户的个人列表

        emit PostCreated(_postIdCounter, msg.sender, _title);
    }

    function updatePost(uint256 _id, string memory _newTitle, string memory _newContent) 
        public 
        postOwnerOrAdmin(_id) 
    {
        if (msg.sender != admin) {
            require(!users[msg.sender].isBanned, "Banned.");
        }
        posts[_id].title = _newTitle;
        posts[_id].content = _newContent;
        emit PostUpdated(_id, _newTitle);
    }

    function deletePost(uint256 _id) public postOwnerOrAdmin(_id) {
        posts[_id].exists = false;
        emit PostDeleted(_id, msg.sender);
    }

    // --- 🔍 新增：查询功能 ---

    /**
     * @dev 根据用户钱包地址获取其所有帖子的ID列表
     */
    function getPostIdsByAddress(address _user) public view returns (uint256[] memory) {
        return _userPostIds[_user];
    }

    /**
     * @dev 根据用户名获取其所有帖子的ID列表
     */
    function getPostIdsByUsername(string memory _username) public view returns (uint256[] memory) {
        address userAddr = _nameToAddress[_username];
        require(userAddr != address(0), "Username does not exist.");
        return _userPostIds[userAddr];
    }

    /**
     * @dev 基础查询：获取单条帖子详情
     */
    function getPost(uint256 _id) public view returns (
        string memory title, 
        string memory content, 
        string memory authorName, 
        uint256 timestamp,
        bool exists
    ) {
        Post storage p = posts[_id];
        return (p.title, p.content, p.authorName, p.timestamp, p.exists);
    }
}
```

---

### 📖 更新版使用文档 (Markdown)

---

# 🔗 链上信息存储系统 (On-Chain Storage System) v2.0

本系统不仅支持基础的增删改查，还提供了强大的**索引功能**，允许通过用户地址或用户名快速检索内容。

---

## 🚀 新增检索功能说明

在 v2.0 版本中，我们增强了数据的可读性和检索效率：

| 功能 | 接口名 | 输入参数 | 返回值 |
|---|---|---|---|
| **按地址查询** | `getPostIdsByAddress` | 钱包地址 (`address`) | 包含该用户所有帖子 ID 的数组 |
| **按用户名查询** | `getPostIdsByUsername` | 用户名 (`string`) | 包含该用户所有帖子 ID 的数组 |

> **提示**：获取 ID 列表后，前端可以循环调用 `getPost(id)` 来渲染完整的帖子详情页面。

---

## 🛠️ 核心操作手册

### 1. 身份初始化
*   **操作**：调用 `register("你的用户名")`。
*   **规则**：
    *   每个地址只能注册一次。
    *   用户名在全网具有唯一性。
    *   **不可更改性**：一旦注册，用户名即永久绑定，确保了链上身份的连贯性。

### 2. 发布与内容管理
*   **发布**：使用 `createPost` 提交标题和内容。系统会自动关联你的用户名。
*   **修改/删除**：
    *   **用户**：仅能操作自己的帖子。
    *   **管理员**：拥有全平台监管权限。
    *   **注意**：`Publisher` (发布者) 和 `Timestamp` (时间戳) 是系统的底层元数据，**禁止任何人修改**。

### 3. 管理员权限 (封禁系统)
*   **封禁**：`setBannedStatus(用户地址, true)`。
*   **影响**：被封禁用户将无法发布新帖子，也无法修改已有帖子，直到管理员解封。

---

## 📊 数据结构预览

### 帖子对象 (Post)
| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | uint256 | 唯一序列号 |
| `title` | string | 帖子标题 (可变) |
| `content` | string | 帖子正文 (可变) |
| `authorName` | string | 发布者用户名 (**不可变**) |
| `timestamp` | uint256 | 区块存证时间 (**不可变**) |
| `exists` | bool | 逻辑存在状态 |

---

## 💡 开发建议

*   **前端展示**：当用户访问 `domain.com/user/alice` 时，前端应先调用 `getPostIdsByUsername("alice")`，获取 ID 数组后，并发请求 `getPost` 获取具体内容。
*   **Gas 优化**：我们在合规中使用 `uint256[]` 存储 ID，这比在前端遍历全网帖子要节省极大的资源。

---

这个版本现在非常完整了！它不仅是一个存储器，更像是一个拥有**身份系统**的小型社交后端。如果你需要我提供如何用 `ethers.js` 调用这些接口的前端代码示例，尽管开口！😊