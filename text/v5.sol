// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract OnChainInfoSystemV5 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    
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
        uint256 createdAt;
        uint256 updatedAt;
        string chainLabel;
        bool exists;
    }

    // --- 状态变量 (必须保持与 V4 顺序完全一致) ---
    uint256 private _postIdCounter;
    string public chainLabel;
    mapping(address => User) public users;
    mapping(uint256 => Post) public posts;
    uint256[] private _allPostIds;
    address[] public allRegisteredUsers;

    // --- V5 新增状态变量 (必须加在最后) ---
    mapping(address => uint256[]) private _userPostIds; // 🆕 用于快速查询“我的记录”

    // --- 事件 ---
    event PostCreated(uint256 indexed postId, address indexed author, string title, uint256 timestamp);
    event PostUpdated(uint256 indexed postId, string newTitle, uint256 updatedAt);
    event PostDeleted(uint256 indexed postId, address indexed author);
    event UserBannedStatusChanged(address indexed user, bool status);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // 升级检查
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    // --- 权限修改器 ---
    modifier onlyActiveUser() {
        require(users[msg.sender].isRegistered, "Not registered");
        require(!users[msg.sender].isBanned, "You are banned");
        _;
    }

    // --- 核心逻辑更新 ---

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

    function createPost(string memory _title, string memory _content) public onlyActiveUser {
        _postIdCounter++;
        
        posts[_postIdCounter] = Post({
            id: _postIdCounter,
            title: _title,
            content: _content,
            author: msg.sender,
            authorName: users[msg.sender].username,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            chainLabel: chainLabel,
            exists: true
        });

        _allPostIds.push(_postIdCounter);
        _userPostIds[msg.sender].push(_postIdCounter); // 🆕 记录到用户个人索引

        emit PostCreated(_postIdCounter, msg.sender, _title, block.timestamp);
    }

    function updatePost(uint256 _id, string memory _newTitle, string memory _newContent) public {
        require(posts[_id].exists, "Post deleted");
        require(posts[_id].author == msg.sender, "Only author");
        require(!users[msg.sender].isBanned, "Banned");

        posts[_id].title = _newTitle;
        posts[_id].content = _newContent;
        posts[_id].updatedAt = block.timestamp;

        emit PostUpdated(_id, _newTitle, block.timestamp);
    }

    // 🆕 新增：逻辑删除帖子
    function deletePost(uint256 _id) public {
        require(posts[_id].exists, "Already deleted");
        require(posts[_id].author == msg.sender || msg.sender == owner(), "No permission");

        posts[_id].exists = false;
        emit PostDeleted(_id, msg.sender);
    }

    // 🆕 新增：管理员封禁用户
    function setBannedStatus(address _user, bool _status) public onlyOwner {
        require(users[_user].isRegistered, "User not found");
        users[_user].isBanned = _status;
        emit UserBannedStatusChanged(_user, _status);
    }

    // --- 高效查询函数 ---

    function getPostCount() public view returns (uint256) {
        return _allPostIds.length;
    }

    function getUserCount() public view returns (uint256) {
        return allRegisteredUsers.length;
    }

    // 🆕 新增：获取某个用户的全部帖子 ID
    function getPostIdsByAddress(address _user) public view returns (uint256[] memory) {
        return _userPostIds[_user];
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
