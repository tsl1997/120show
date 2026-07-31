const { createApp, ref, computed, onMounted, onUnmounted, watch } = Vue;

const COMMON_ABI = [
    "function register(string _username) public",
    "function deletePost(uint256 _id) public",
    "function setBannedStatus(address _user, bool _status) public",
    "function users(address) view returns (string username, bool isBanned, bool isRegistered, address userAddress)",
    "function allRegisteredUsers(uint256) view returns (address)",
    "function getUserCount() view returns (uint256)",
    "function getPostIdsByAddress(address _user) view returns (uint256[])",
    "function owner() view returns (address)"
];

const V5_ABI = [ ...COMMON_ABI,
    "function createPost(string _title, string _content) public",
    "function updatePost(uint256 _id, string _newTitle, string _newContent) public",
    "function posts(uint256) view returns (uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists)",
    "function getPaginatedPosts(uint256 _page, uint256 _pageSize) view returns (tuple(uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists)[])"
];

const V6_ABI = [ ...COMMON_ABI,
    "function createPost(string _title, string _content, string _coverImageUrl, uint8 _imageCount) public",
    "function updatePost(uint256 _id, string _newTitle, string _newContent, string _newCoverImageUrl, uint8 _newImageCount) public",
    "function posts(uint256) view returns (uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists, string coverImageUrl, uint8 imageCount)",
    "function getPaginatedPosts(uint256 _page, uint256 _pageSize) view returns (tuple(uint256 id, string title, string content, address author, string authorName, uint256 createdAt, uint256 updatedAt, string chainLabel, bool exists, string coverImageUrl, uint8 imageCount)[])"
];

const LOCAL_PK_KEY = 'omniverse_local_pk';

createApp({
    setup() {
        const networks = window.NETWORKS || {};
        const DEFAULT_CHAIN = '0x15eb';

        const networkStats = computed(() => {
            const keys = Object.keys(networks);
            const total = keys.length;
            const mainnet = keys.filter(k => networks[k].type === 'mainnet').length;
            const testnet = keys.filter(k => networks[k].type === 'testnet').length;
            return `当前集成 ${total} 个网络，${mainnet} 个主网，${testnet} 个测试网`;
        });

        const currentView = ref('home');
        const activeNetworks = ref(Object.keys(networks).filter(k => networks[k].default));
        const wallet = ref({ address: null, chainId: null, isConnected: false });
        const userStatus = ref({ isRegistered: false, username: '', isBanned: false, isOwner: false });
        const loading = ref(false);

        const explorePosts = ref([]);
        const galleryPosts = ref([]);
        const historyPosts = ref([]);
        const adminUsers = ref([]);

        const currentPost = ref(null);
        const isEditMode = ref(false);
        const modal = ref({ visible: false, post: null });

        const createForm = ref({ title: '', content: '', cover: '' });
        const registerName = ref('');
        const page = ref({ explore: 1, gallery: 1, history: 1 });

        const accountType = ref(null);
        const showConnectModal = ref(false);
        const localKeyInput = ref('');
        const lowBalance = ref(false);
        const walletBalance = ref('');
        const balanceLoading = ref(false);

        let balanceInterval = null;

        const checkLocalCache = () => !!localStorage.getItem(LOCAL_PK_KEY);

        const isV6Net = (id) => networks[id]?.isV6 || false;
        const getABI = (id) => isV6Net(id) ? V6_ABI : V5_ABI;
        const safeNetName = (id) => networks[id] ? networks[id].name : id;
        const sanitizeHtml = (rawHtml) => {
            if (!rawHtml) return '';
            if (window.DOMPurify) {
                return window.DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
            }
            return rawHtml
                .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
                .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
                .replace(/on\w+\s*=\s*'[^']*'/gi, '');
        };
        const parseMd = (t) => {
            if (!t) return '';
            const rawHtml = marked.parse(t.replace(/\n/g, '  \n'));
            return sanitizeHtml(rawHtml);
        };

        const RPC_TIMEOUT_MS = 12000;
        const withTimeout = (promise, timeoutMs = RPC_TIMEOUT_MS) => Promise.race([
            promise,
            new Promise((_, reject) => setTimeout(() => reject(new Error('RPC timeout')), timeoutMs))
        ]);
        const getRpcCandidates = (cid) => {
            const rpc = networks[cid]?.rpc;
            if (!rpc) return [];
            return Array.isArray(rpc) ? rpc : [rpc];
        };
        const runReadOnNetwork = async (cid, runWithProvider) => {
            const rpcList = getRpcCandidates(cid);
            for (const rpcUrl of rpcList) {
                try {
                    const provider = new ethers.JsonRpcProvider(rpcUrl);
                    return await withTimeout(runWithProvider(provider));
                } catch (_) {}
            }
            throw new Error(`all rpc failed for ${cid}`);
        };

        const getCardStyle = (cid) => {
            const hex = networks[cid]?.color || '#999';
            return {
                borderColor: `${hex}30`,
                background: `linear-gradient(180deg, #ffffff 0%, ${hex}08 100%)`
            };
        };
        const getTagColor = (cid) => ({
            color: networks[cid]?.color || '#666',
            background: (networks[cid]?.color || '#666') + '15'
        });

        const copyLink = async () => {
            if (!currentPost.value) return;
            const url = `${window.location.origin}${window.location.pathname}?chain=${currentPost.value.chainId}&id=${currentPost.value.id}`;
            try { await navigator.clipboard.writeText(url); alert("链接已复制!"); } catch (e) { prompt("复制:", url); }
        };

        const goPost = (p) => {
            currentPost.value = JSON.parse(JSON.stringify(p));
            isEditMode.value = false;
            currentView.value = 'detail';
            window.scrollTo(0, 0);
        };
        const goBack = () => { currentView.value = 'explore'; };

        const getProvider = (cid) => {
            const rpcList = getRpcCandidates(cid);
            return new ethers.JsonRpcProvider(rpcList[0]);
        };

        const getSigner = async (cid) => {
            if (accountType.value === 'metamask') {
                return await new ethers.BrowserProvider(window.ethereum).getSigner();
            }
            const pk = localStorage.getItem(LOCAL_PK_KEY);
            return new ethers.Wallet(pk, getProvider(cid));
        };

        const getWriteContract = async (cid, abi) => {
            return new ethers.Contract(networks[cid].proxy, abi, await getSigner(cid));
        };

        const getReadContract = (cid, abi) => {
            return new ethers.Contract(networks[cid].proxy, abi, getProvider(cid));
        };

        const checkBalance = async () => {
            if (!wallet.value.isConnected || !wallet.value.chainId) return;
            balanceLoading.value = true;
            try {
                const provider = getProvider(wallet.value.chainId);
                const bal = await provider.getBalance(wallet.value.address);
                const eth = ethers.formatEther(bal);
                lowBalance.value = parseFloat(eth) < 0.0001;
                walletBalance.value = parseFloat(eth).toFixed(4);
            } catch (e) {
                console.warn(`[OmniVerse] Balance check failed for ${wallet.value.chainId}:`, e.message || e);
            }
            balanceLoading.value = false;
        };

        const startBalancePolling = () => {
            stopBalancePolling();
            balanceInterval = setInterval(checkBalance, 30000);
        };

        const stopBalancePolling = () => {
            if (balanceInterval) {
                clearInterval(balanceInterval);
                balanceInterval = null;
            }
        };

        const copyAddress = async () => {
            if (!wallet.value.address) return;
            try { await navigator.clipboard.writeText(wallet.value.address); alert("地址已复制"); } catch(e) { prompt("复制地址:", wallet.value.address); }
        };

        const checkUser = async () => {
            const cid = wallet.value.chainId;
            if (!networks[cid]) return;
            try {
                const c = getReadContract(cid, COMMON_ABI);
                const u = await c.users(wallet.value.address);
                const o = await c.owner();
                userStatus.value = { isRegistered: u.isRegistered, username: u.username, isBanned: u.isBanned, isOwner: o.toLowerCase() === wallet.value.address.toLowerCase() };
            } catch (e) {
                userStatus.value = { isRegistered: false, username: '', isBanned: false, isOwner: false };
            }
        };

        const handleAcc = async (acc) => {
            if (!acc || acc.length === 0) {
                wallet.value = { address: null, chainId: null, isConnected: false };
                userStatus.value = { isRegistered: false };
                stopBalancePolling();
            } else {
                wallet.value.address = acc[0];
                wallet.value.isConnected = true;
                try {
                    const cid = await window.ethereum.request({ method: 'eth_chainId' });
                    wallet.value.chainId = cid;
                    checkUser();
                    checkBalance();
                    startBalancePolling();
                } catch (e) {}
            }
        };

        const connectWallet = () => {
            showConnectModal.value = true;
        };

        const connectMetaMask = async () => {
            showConnectModal.value = false;
            if (!window.ethereum) return alert("请安装 MetaMask 插件");
            try {
                const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
                accountType.value = 'metamask';
                await handleAcc(acc);
            } catch (e) {}
        };

        const importLocalKey = () => {
            const pk = localKeyInput.value.trim();
            if (!pk) return alert("请输入私钥");
            try {
                const w = new ethers.Wallet(pk);
                localStorage.setItem(LOCAL_PK_KEY, pk);
                accountType.value = 'local';
                localKeyInput.value = '';
                showConnectModal.value = false;
                wallet.value.address = w.address;
                wallet.value.chainId = DEFAULT_CHAIN;
                wallet.value.isConnected = true;
                checkUser();
                checkBalance();
                startBalancePolling();
            } catch (e) {
                alert("私钥格式无效");
            }
        };

        const logout = () => {
            localStorage.removeItem(LOCAL_PK_KEY);
            accountType.value = null;
            wallet.value = { address: null, chainId: null, isConnected: false };
            userStatus.value = { isRegistered: false, username: '', isBanned: false, isOwner: false };
            lowBalance.value = false;
            walletBalance.value = '';
            stopBalancePolling();
        };

        const autoConnect = async () => {
            if (window.ethereum) {
                try { const acc = await window.ethereum.request({ method: 'eth_accounts' }); if (acc.length) handleAcc(acc); } catch (e) {}
            }
        };

        const switchNet = async (id) => {
            if (!id) return;
            if (accountType.value === 'metamask') {
                try { await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: id }] }); } catch (e) { if (e.code === 4902 && networks[id]) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [{ chainId: id, chainName: networks[id].name, rpcUrls: [networks[id].rpc] }] }); }
            } else {
                wallet.value.chainId = id;
                walletBalance.value = '';
                lowBalance.value = false;
                checkUser();
                checkBalance();
            }
        };

        const fmt = (p, cid) => {
            const v6 = isV6Net(cid);
            let o = { id: p.id.toString(), chainId: cid, title: p.title, content: p.content, author: p.author, authorName: p.authorName, createdAt: Number(p.createdAt), updatedAt: Number(p.updatedAt), exists: p.exists, cover: '', count: 0 };
            if (v6) { o.cover = p.coverImageUrl || ''; o.count = Number(p.imageCount) || 0; }
            return o;
        };

        const fetchExp = async () => {
            loading.value = true; explorePosts.value = [];
            const t = activeNetworks.value.map(async cid => {
                if (!networks[cid]) return []; try {
                    return await runReadOnNetwork(cid, async (p) => {
                        const c = new ethers.Contract(networks[cid].proxy, getABI(cid), p);
                        const r = await c.getPaginatedPosts(page.value.explore, 6);
                        return r.map(x => fmt(x, cid)).filter(x => x.exists);
                    });
                } catch (e) { return []; }
            });
            const all = await Promise.all(t);
            explorePosts.value = all.flat().sort((a, b) => b.createdAt - a.createdAt);
            loading.value = false;
        };

        const fetchGal = async () => {
            const cid = "0x15eb"; if (!networks[cid]) return;
            loading.value = true; try {
                const r = await runReadOnNetwork(cid, async (p) => {
                    const c = new ethers.Contract(networks[cid].proxy, getABI(cid), p);
                    return await c.getPaginatedPosts(page.value.gallery, 12);
                });
                galleryPosts.value = r.map(x => fmt(x, cid)).map(p => { p.img = p.cover || (p.content.match(/!\[.*?\]\((.*?)\)/)?.[1]) || null; return p; }).filter(p => p.exists && p.img);
            } catch (e) {} loading.value = false;
        };

        const fetchHis = async () => {
            if (!wallet.value.isConnected) return;
            loading.value = true;
            const cid = wallet.value.chainId;
            try {
                const c = getReadContract(cid, COMMON_ABI);
                const ids = (await c.getPostIdsByAddress(wallet.value.address)).map(n => Number(n)).reverse();
                const sl = ids.slice((page.value.history - 1) * 10, page.value.history * 10);
                if (sl.length) {
                    const cr = getReadContract(cid, getABI(cid));
                    const all = await Promise.all(sl.map(async i => { try { return fmt(await cr.posts(i), cid) } catch { return null } }));
                    historyPosts.value = all.filter(x => x && x.exists);
                } else historyPosts.value = [];
            } catch (e) {} loading.value = false;
        };

        const fetchAdmin = async () => {
            if (!userStatus.value.isOwner) return;
            loading.value = true; adminUsers.value = [];
            try {
                const c = getReadContract(wallet.value.chainId, COMMON_ABI);
                const t = await c.getUserCount();
                const start = Number(t) - 1;
                const end = Math.max(0, Number(t) - 20);
                const indexes = [];
                for (let i = start; i >= end; i--) indexes.push(i);
                const l = await Promise.all(indexes.map(async (idx) => {
                    const a = await c.allRegisteredUsers(idx);
                    const u = await c.users(a);
                    return { addr: a, name: u.username, ban: u.isBanned };
                }));
                adminUsers.value = l;
            } catch (e) {} loading.value = false;
        };

        const register = async () => {
            if (!registerName.value) return;
            try {
                const c = await getWriteContract(wallet.value.chainId, COMMON_ABI);
                const tx = await c.register(registerName.value);
                await tx.wait();
                alert("注册成功");
                checkUser();
                checkBalance();
            } catch (e) { alert("Err:" + e.message); }
        };

        const sendPost = async () => {
            if (!userStatus.value.isRegistered) return alert("未注册"); loading.value = true; try {
                const cid = wallet.value.chainId;
                const c = await getWriteContract(cid, getABI(cid));
                const { title, content, cover } = createForm.value; const v6 = isV6Net(cid);
                const tx = v6 ? await c.createPost(title, content, cover, (content.match(/!\[/g) || []).length) : await c.createPost(title, content);
                await tx.wait();
                alert("已发布"); currentView.value = 'history'; page.value.history = 1; fetchHis(); createForm.value = { title: '', content: '', cover: '' };
                checkBalance();
            } catch (e) { alert("Err:" + e.message); } loading.value = false;
        };

        const editPostAction = async () => {
            loading.value = true; try {
                const { id, title, content, cover, chainId } = currentPost.value;
                if (chainId !== wallet.value.chainId) { loading.value = false; return alert("切换网络"); }
                const c = await getWriteContract(chainId, getABI(chainId)); const v6 = isV6Net(chainId);
                const tx = v6 ? await c.updatePost(id, title, content, cover, 0) : await c.updatePost(id, title, content);
                await tx.wait(); alert("OK"); isEditMode.value = false;
                checkBalance();
            } catch (e) { alert("Err"); } loading.value = false;
        };

        const delPostAction = async () => {
            if (!confirm("Del?")) return; loading.value = true; try {
                const c = await getWriteContract(wallet.value.chainId, COMMON_ABI);
                const tx = await c.deletePost(currentPost.value.id);
                await tx.wait(); alert("Deleted"); goBack();
                checkBalance();
            } catch (e) { alert("Err"); } loading.value = false;
        };

        const toggleBan = async (a, s) => {
            try {
                const c = await getWriteContract(wallet.value.chainId, COMMON_ABI);
                await (await c.setBannedStatus(a, s)).wait();
                fetchAdmin();
            } catch (e) { alert("Err"); }
        };

        const deepLink = async (c, i) => {
            if (!networks[c]) return; loading.value = true; try {
                const r = await runReadOnNetwork(c, async (p) => {
                    const ct = new ethers.Contract(networks[c].proxy, getABI(c), p);
                    return await ct.posts(i);
                });
                const x = fmt(r, c); if (x.exists) goPost(x); else alert("Invalid");
            } catch (e) {} loading.value = false;
        };

        onMounted(async () => {
            const hasLocal = checkLocalCache();
            if (hasLocal) {
                try {
                    const pk = localStorage.getItem(LOCAL_PK_KEY);
                    const w = new ethers.Wallet(pk);
                    accountType.value = 'local';
                    wallet.value.address = w.address;
                    wallet.value.chainId = DEFAULT_CHAIN;
                    wallet.value.isConnected = true;
                    await checkUser();
                    await checkBalance();
                    startBalancePolling();
                } catch (e) {
                    localStorage.removeItem(LOCAL_PK_KEY);
                }
            }

            if (!hasLocal && window.ethereum) {
                window.ethereum.on('accountsChanged', handleAcc);
                window.ethereum.on('chainChanged', () => window.location.reload());
                await autoConnect();
            }

            const q = new URLSearchParams(window.location.search);
            if (q.get('chain') && q.get('id')) deepLink(q.get('chain'), q.get('id'));
        });

        onUnmounted(() => stopBalancePolling());

        watch(currentView, v => {
            if (v === 'explore') fetchExp();
            if (v === 'gallery') fetchGal();
            if (v === 'history') fetchHis();
            if (v === 'admin') fetchAdmin();
        });
        watch([() => page.value.explore, () => page.value.gallery, () => page.value.history], (n, o) => {
            if (n[0] !== o[0]) fetchExp();
            if (n[1] !== o[1]) fetchGal();
            if (n[2] !== o[2]) fetchHis();
        });

        return {
            networkStats,
            currentView, activeNetworks, networks, wallet, userStatus, loading,
            explorePosts, galleryPosts, historyPosts, adminUsers, page, currentPost, isEditMode, createForm, registerName, isV6: computed(() => isV6Net(wallet.value.chainId)),
            connectWallet, connect: connectWallet, switchNet, register, create: sendPost, updatePost: editPostAction, update: editPostAction, deletePost: delPostAction, del: delPostAction, toggleBan,
            getCardStyle, getTagColor, safeNetName, parseMd, goPost, goBack, copyLink,
            fetchExp, fetchGal, fetchHis, fetchAdmin,
            canEdit: (auth) => wallet.value.address && auth.toLowerCase() === wallet.value.address.toLowerCase(),
            accountType, showConnectModal, localKeyInput, lowBalance, walletBalance, balanceLoading,
            connectMetaMask, importLocalKey, logout, copyAddress
        };
    }
}).mount('#app');
