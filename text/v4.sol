// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// 引入 OpenZeppelin 可升级合约标准库
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title OnChainInfoSystemV4
 * @notice 这是一个支持 UUPS 可升级架构、具备动态时间戳和链标识的版本。
 */
contract OnChainInfoSystemV4 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    
    // --- 数据结构 ---

    struct User {
        string username;
        bool isBanned;
        bool isRegistered;
        address userAddress;
    }

    struct Post {
        uint256 id;
        string title;
        string content;
        address author;
        string authorName;
        uint256 createdAt;  // 🆕 初始创建时间
        uint256 updatedAt;  // 🆕 最后更新时间
        string chainLabel;  // 🆕 链标识（如 "Tempo", "Sepolia"）
        bool exists;
    }

    // --- 状态变量 (注意：升级版合约不能有 constructor，必须用 initialize) ---

    uint256 private _postIdCounter;
    string public chainLabel; // 当前合约所属的链
    
    mapping(address => User) public users;
    mapping(uint256 => Post) public posts;
    uint256[] private _allPostIds;
    address[] public allRegisteredUsers;

    // --- 事件 ---

    event PostCreated(uint256 indexed postId, address indexed author, string title, uint256 timestamp);
    event PostUpdated(uint256 indexed postId, string newTitle, uint256 updatedAt);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev 代替构造函数，首次部署代理合约时调用。
     */
    function initialize(string memory _label) public initializer {
        __Ownable_init(msg.sender); // 设置管理员
        __UUPSUpgradeable_init();
        chainLabel = _label;
    }

    /**
     * @dev UUPS 必须实现的函数，用于检查谁有权升级合约。
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    // --- 核心逻辑 ---

    function register(string memory _username) public {
        require(!users[msg.sender].isRegistered, "Already registered");
        users[msg.sender] = User({
            username: _username,
            isBanned: false,
            isRegistered: true,
            userAddress: msg.sender
        });
        allRegisteredUsers.push(msg.sender);
    }

    function createPost(string memory _title, string memory _content) public {
        require(users[msg.sender].isRegistered, "Register first");
        _postIdCounter++;
        
        posts[_postIdCounter] = Post({
            id: _postIdCounter,
            title: _title,
            content: _content,
            author: msg.sender,
            authorName: users[msg.sender].username,
            createdAt: block.timestamp, // 记录创建时间
            updatedAt: block.timestamp, // 初始更新时间等于创建时间
            chainLabel: chainLabel,    // 自动打上链标签
            exists: true
        });

        _allPostIds.push(_postIdCounter);
        emit PostCreated(_postIdCounter, msg.sender, _title, block.timestamp);
    }

    function updatePost(uint256 _id, string memory _newTitle, string memory _newContent) public {
        require(posts[_id].exists, "Not found");
        require(posts[_id].author == msg.sender, "Only author");

        posts[_id].title = _newTitle;
        posts[_id].content = _newContent;
        posts[_id].updatedAt = block.timestamp; // 🆕 关键：每次修改更新时间戳

        emit PostUpdated(_id, _newTitle, block.timestamp);
    }

    // --- 查询逻辑 (保留 V3 的高效分页) ---

    function getPostCount() public view returns (uint256) {
        return _allPostIds.length;
    }

    function getPaginatedPosts(uint256 _page, uint256 _pageSize) public view returns (Post[] memory) {
        uint256 total = _allPostIds.length;
        uint256 startIndex = (_page - 1) * _pageSize;
        if (startIndex >= total) return new Post[](0);
        
        uint256 size = _pageSize;
        if (startIndex + size > total) size = total - startIndex;

        Post[] memory results = new Post[](size);
        for(uint i = 0; i < size; i++) {
            results[i] = posts[_allPostIds[total - 1 - (startIndex + i)]];
        }
        return results;
    }
}
