// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title OnChainInfoSystemV6
 * @dev This contract is the upgraded version for the on-chain information system.
 * It adds coverImageUrl and imageCount to the Post struct for a gallery feature.
 * It is UUPS upgradeable.
 */
contract OnChainInfoSystemV6 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    
    // --- STRUCTS ---

    struct User {
        string username;
        bool isBanned;
        bool isRegistered;
        address userAddress;
    }

    // V6 Core Change: Expanded Post struct
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
        // V6 New Fields
        string coverImageUrl; // Cover image URL
        uint8 imageCount;     // Number of images in the post
    }

    // --- STATE VARIABLES ---
    // Storage layout is compatible with V5

    uint256 private _postIdCounter;
    string public chainLabel;
    mapping(address => User) public users;
    mapping(uint256 => Post) public posts;
    uint256[] private _allPostIds;
    address[] public allRegisteredUsers;
    mapping(address => uint256[]) private _userPostIds;

    // --- EVENTS ---

    event PostCreated(uint256 indexed postId, address indexed author, string title, uint256 timestamp);
    event PostUpdated(uint256 indexed postId, string newTitle, uint256 updatedAt);
    event PostDeleted(uint256 indexed postId, address indexed author);
    event UserBannedStatusChanged(address indexed user, bool status);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(string memory _label) public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        chainLabel = _label;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    // --- MODIFIERS ---

    modifier onlyActiveUser() {
        require(users[msg.sender].isRegistered, "Not registered");
        require(!users[msg.sender].isBanned, "You are banned");
        _;
    }

    // --- CORE LOGIC (V6 UPDATED FUNCTIONS) ---

    /**
     * @dev Creates a new post with gallery-specific fields.
     * @param _title The title of the post.
     * @param _content The main content of the post (Markdown).
     * @param _coverImageUrl The URL for the post's cover image.
     * @param _imageCount The total number of images within the post content.
     */
    function createPost(
        string memory _title, 
        string memory _content, 
        string memory _coverImageUrl,
        uint8 _imageCount
    ) public onlyActiveUser {
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
            exists: true,
            coverImageUrl: _coverImageUrl, // Store cover image URL
            imageCount: _imageCount        // Store image count
        });

        _allPostIds.push(_postIdCounter);
        _userPostIds[msg.sender].push(_postIdCounter);

        emit PostCreated(_postIdCounter, msg.sender, _title, block.timestamp);
    }
    
    /**
     * @dev Updates an existing post with new content and gallery fields.
     * @param _id The ID of the post to update.
     * @param _newTitle The new title.
     * @param _newContent The new content.
     * @param _newCoverImageUrl The new cover image URL.
     * @param _newImageCount The new image count.
     */
    function updatePost(
        uint256 _id, 
        string memory _newTitle, 
        string memory _newContent,
        string memory _newCoverImageUrl,
        uint8 _newImageCount
    ) public {
        require(posts[_id].exists, "Post deleted");
        require(posts[_id].author == msg.sender, "Only author");
        require(!users[msg.sender].isBanned, "Banned");

        Post storage p = posts[_id];
        p.title = _newTitle;
        p.content = _newContent;
        p.updatedAt = block.timestamp;
        p.coverImageUrl = _newCoverImageUrl; // Update cover image URL
        p.imageCount = _newImageCount;       // Update image count

        emit PostUpdated(_id, _newTitle, block.timestamp);
    }

    // --- UNCHANGED FUNCTIONS (from V5) ---

    function register(string memory _username) public {
        require(!users[msg.sender].isRegistered, "Already registered");
        require(bytes(_username).length > 0, "Username required");
        users[msg.sender] = User(_username, false, true, msg.sender);
        allRegisteredUsers.push(msg.sender);
    }

    function deletePost(uint256 _id) public {
        require(posts[_id].exists, "Post already deleted");
        require(posts[_id].author == msg.sender || owner() == msg.sender, "Not authorized");
        posts[_id].exists = false;
        posts[_id].content = "deleted";
        emit PostDeleted(_id, msg.sender);
    }

    function setBannedStatus(address _user, bool _status) public onlyOwner {
        require(users[_user].isRegistered, "User not registered");
        users[_user].isBanned = _status;
        emit UserBannedStatusChanged(_user, _status);
    }

    // --- VIEW FUNCTIONS (from V5) ---

    function getPaginatedPosts(uint256 _page, uint256 _pageSize) public view returns (Post[] memory) {
        require(_page > 0, "Page must be > 0");
        uint256 total = _allPostIds.length;
        uint256 startIndex = (_page - 1) * _pageSize;
        if (startIndex >= total) {
            return new Post[](0);
        }
        
        uint256 endIndex = startIndex + _pageSize;
        if (endIndex > total) {
            endIndex = total;
        }

        uint256 size = endIndex - startIndex;
        Post[] memory results = new Post[](size);
        for(uint i = 0; i < size; i++) {
            results[i] = posts[_allPostIds[total - 1 - (startIndex + i)]];
        }
        return results;
    }
    
    function getPostCount() public view returns (uint256) {
        return _allPostIds.length;
    }

    function getUserCount() public view returns (uint256) {
        return allRegisteredUsers.length;
    }

    function getPostIdsByAddress(address _user) public view returns (uint256[] memory) {
        return _userPostIds[_user];
    }
}
