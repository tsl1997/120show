const { createApp, ref, computed, onMounted, watch } = Vue;

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

createApp({
    setup() {
        const networks = window.NETWORKS || {};

        // --- 🆕 动态计算网络统计信息 ---
        const networkStats = computed(() => {
            const keys = Object.keys(networks);
            const total = keys.length;
            const mainnet = keys.filter(k => networks[k].type === 'mainnet').length;
            const testnet = keys.filter(k => networks[k].type === 'testnet').length;
            return `当前集成 ${total} 个网络，${mainnet} 个主网，${testnet} 个测试网`;
        });
        
        // --- 响应式数据 ---
        const currentView = ref('home');
        const activeNetworks = ref(Object.keys(networks).filter(k => networks[k].default));
        const wallet = ref({ address: null, chainId: null, isConnected: false });
        const userStatus = ref({ isRegistered: false, username: '', isBanned: false, isOwner: false });
        const loading = ref(false);

        // 内容数据
        const explorePosts = ref([]);
        const galleryPosts = ref([]);
        const historyPosts = ref([]);
        const adminUsers = ref([]);

        // 详情页与编辑
        const currentPost = ref(null);
        const isEditMode = ref(false);
        const modal = ref({ visible: false, post: null }); 

        // 表单与状态
        const createForm = ref({ title: '', content: '', cover: '' });
        const registerName = ref('');
        const page = ref({ explore: 1, gallery: 1, history: 1 });

        // --- 助手函数 ---
        const isV6Net = (id) => networks[id]?.isV6 || false;
        const getABI = (id) => isV6Net(id) ? V6_ABI : V5_ABI;
        const safeNetName = (id) => networks[id] ? networks[id].name : id;
        const parseMd = (t) => t ? marked.parse(t.replace(/\n/g, '  \n')) : '';

        // 生成卡片的动态内联样式 (修复 Tailwind 卡死问题)
        const getCardStyle = (cid) => {
            const hex = networks[cid]?.color || '#999';
            // 返回一个样式对象供 Vue 绑定 :style
            return {
                borderColor: `${hex}30`, // 20% opacity border
                background: `linear-gradient(180deg, #ffffff 0%, ${hex}08 100%)` // very light tint
            };
        };
        const getTagColor = (cid) => ({
            color: networks[cid]?.color || '#666',
            background: (networks[cid]?.color || '#666') + '15'
        });

        const copyLink = async () => {
            if(!currentPost.value) return;
            const url = `${window.location.origin}${window.location.pathname}?chain=${currentPost.value.chainId}&id=${currentPost.value.id}`;
            try { await navigator.clipboard.writeText(url); alert("链接已复制!"); } catch(e){ prompt("复制:", url); }
        }

        // --- 路由 ---
        const goPost = (p) => {
            currentPost.value = JSON.parse(JSON.stringify(p)); 
            isEditMode.value = false; 
            currentView.value = 'detail'; 
            window.scrollTo(0,0);
        };
        const goBack = () => { currentView.value = 'explore'; };

        // --- 核心连接 ---
        const checkUser = async () => {
            const cid = wallet.value.chainId;
            if(!networks[cid]) return;
            try {
                const p = new ethers.BrowserProvider(window.ethereum);
                const c = new ethers.Contract(networks[cid].proxy, COMMON_ABI, await p.getSigner()); 
                const u = await c.users(wallet.value.address);
                const o = await c.owner();
                userStatus.value = { isRegistered: u.isRegistered, username: u.username, isBanned: u.isBanned, isOwner: o.toLowerCase() === wallet.value.address.toLowerCase() };
            } catch (e) {
                // 如果当前网络没合约或RPC失败，不崩溃，只是无法获取身份
                userStatus.value = { isRegistered: false, username:'', isBanned: false, isOwner: false };
            }
        };

        const handleAcc = async (acc) => {
            if (!acc || acc.length === 0) {
                wallet.value = { address: null, chainId: null, isConnected: false };
                userStatus.value = { isRegistered: false };
            } else {
                wallet.value.address = acc[0];
                wallet.value.isConnected = true;
                try {
                    const cid = await window.ethereum.request({ method: 'eth_chainId' });
                    wallet.value.chainId = cid;
                    checkUser();
                } catch(e){}
            }
        };

        const connectWallet = async () => {
            if(!window.ethereum) return alert("Install MetaMask");
            try{ const acc = await window.ethereum.request({method:'eth_requestAccounts'}); handleAcc(acc); } catch(e){}
        };

        const autoConnect = async () => {
            if(window.ethereum) {
                try{ const acc = await window.ethereum.request({method:'eth_accounts'}); if(acc.length) handleAcc(acc); }catch(e){}
            }
        };

        const switchNet = async (id) => {
            if(!id) return;
            try { await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId:id}] }); }
            catch(e) { if(e.code===4902 && networks[id]) await window.ethereum.request({ method: 'wallet_addEthereumChain', params:[{chainId:id, chainName:networks[id].name, rpcUrls:[networks[id].rpc]}] }); }
        };

        // --- Data ---
        const fmt = (p, cid) => {
            const v6 = isV6Net(cid);
            let o = { id: p.id.toString(), chainId: cid, title: p.title, content: p.content, author: p.author, authorName: p.authorName, createdAt: Number(p.createdAt), updatedAt: Number(p.updatedAt), exists: p.exists, cover: '', count: 0 };
            if(v6) { o.cover = p.coverImageUrl||''; o.count = Number(p.imageCount)||0; }
            return o;
        };

        const fetchExp = async () => {
            loading.value=true; explorePosts.value=[];
            const t = activeNetworks.value.map(async cid=>{
                if(!networks[cid])return[]; try{
                    const p=new ethers.JsonRpcProvider(networks[cid].rpc);
                    const c=new ethers.Contract(networks[cid].proxy, getABI(cid), p);
                    const r=await c.getPaginatedPosts(page.value.explore, 6);
                    return r.map(x=>fmt(x,cid)).filter(x=>x.exists);
                }catch(e){return[];}
            });
            const all=await Promise.all(t);
            explorePosts.value = all.flat().sort((a,b)=>b.createdAt-a.createdAt);
            loading.value=false;
        };

        const fetchGal = async () => {
            const cid="0xa5bd"; if(!networks[cid]) return;
            loading.value=true; try{
                const p=new ethers.JsonRpcProvider(networks[cid].rpc);
                const c=new ethers.Contract(networks[cid].proxy, V6_ABI, p);
                const r=await c.getPaginatedPosts(page.value.gallery, 12);
                galleryPosts.value = r.map(x=>fmt(x,cid)).map(p=>{ p.img = p.cover||(p.content.match(/!\[.*?\]\((.*?)\)/)?.[1])||null; return p; }).filter(p=>p.exists&&p.img);
            }catch(e){} loading.value=false;
        };

        const fetchHis = async () => {
            if(!wallet.value.isConnected) return;
            loading.value=true;
            const cid=wallet.value.chainId;
            try{
                const p=new ethers.BrowserProvider(window.ethereum); const c=new ethers.Contract(networks[cid].proxy, COMMON_ABI, await p.getSigner());
                const ids=(await c.getPostIdsByAddress(wallet.value.address)).map(n=>Number(n)).reverse();
                const sl=ids.slice((page.value.history-1)*10, page.value.history*10);
                if(sl.length){
                    const cr=new ethers.Contract(networks[cid].proxy, getABI(cid), await p.getSigner());
                    const all=await Promise.all(sl.map(async i=>{try{return fmt(await cr.posts(i),cid)}catch{return null}}));
                    historyPosts.value = all.filter(x=>x&&x.exists);
                } else historyPosts.value=[];
            }catch(e){} loading.value=false;
        };

        const fetchAdmin = async()=>{
            if(!userStatus.value.isOwner) return;
            loading.value=true; adminUsers.value=[];
            try{
                const p=new ethers.BrowserProvider(window.ethereum); const c=new ethers.Contract(networks[wallet.value.chainId].proxy, COMMON_ABI, await p.getSigner());
                const t=await c.getUserCount(); const l=[];
                for(let i=Number(t)-1; i>=Math.max(0,Number(t)-20); i--){ const a=await c.allRegisteredUsers(i); const u=await c.users(a); l.push({addr:a,name:u.username,ban:u.isBanned}); }
                adminUsers.value=l;
            }catch(e){} loading.value=false;
        };

        // --- Interaction ---
        const register=async()=>{if(!registerName.value)return;const p=new ethers.BrowserProvider(window.ethereum);const c=new ethers.Contract(networks[wallet.value.chainId].proxy,COMMON_ABI,await p.getSigner());await(await c.register(registerName.value)).wait();alert("注册成功");checkUser();}
        const sendPost=async()=>{
            if(!userStatus.value.isRegistered)return alert("未注册"); loading.value=true; try{
                const cid=wallet.value.chainId;const p=new ethers.BrowserProvider(window.ethereum);const c=new ethers.Contract(networks[cid].proxy,getABI(cid),await p.getSigner());
                const{title,content,cover}=createForm.value;const v6=isV6Net(cid);
                const tx=v6?await c.createPost(title,content,cover,(content.match(/!\[/g)||[]).length):await c.createPost(title,content);
                await tx.wait();alert("已发布");currentView.value='history';page.value.history=1;fetchHis();createForm.value={title:'',content:'',cover:''};
            }catch(e){alert("Err:"+e.message);}loading.value=false;
        }
        const editPostAction=async()=>{loading.value=true;try{
            const p=new ethers.BrowserProvider(window.ethereum);const{id,title,content,cover,chainId}=currentPost.value;
            if(chainId!==wallet.value.chainId){loading.value=false;return alert("切换网络");}
            const c=new ethers.Contract(networks[chainId].proxy,getABI(chainId),await p.getSigner());const v6=isV6Net(chainId);
            const tx=v6?await c.updatePost(id,title,content,cover,0):await c.updatePost(id,title,content);
            await tx.wait();alert("OK");isEditMode.value=false;
        }catch(e){alert("Err");}loading.value=false;}
        const delPostAction=async()=>{if(!confirm("Del?"))return;loading.value=true;try{const p=new ethers.BrowserProvider(window.ethereum);const c=new ethers.Contract(networks[wallet.value.chainId].proxy,COMMON_ABI,await p.getSigner());await(await c.deletePost(currentPost.value.id)).wait();alert("Deleted");goBack();}catch(e){alert("Err");}loading.value=false;}
        const toggleBan=async(a,s)=>{try{const p=new ethers.BrowserProvider(window.ethereum);const c=new ethers.Contract(networks[wallet.value.chainId].proxy,COMMON_ABI,await p.getSigner());await(await c.setBannedStatus(a,s)).wait();fetchAdmin();}catch(e){alert("Err");}}

        const deepLink=async(c,i)=>{ if(!networks[c])return; loading.value=true;try{const p=new ethers.JsonRpcProvider(networks[c].rpc);const ct=new ethers.Contract(networks[c].proxy,getABI(c),p);const r=await ct.posts(i);const x=fmt(r,c);if(x.exists)goPost(x);else alert("Invalid");}catch(e){}loading.value=false;};

        // Lifecycle
        onMounted(async()=>{
            if(window.ethereum){ window.ethereum.on('accountsChanged', handleAcc); window.ethereum.on('chainChanged', ()=>window.location.reload()); await autoConnect();}
            const q=new URLSearchParams(window.location.search); if(q.get('chain')&&q.get('id')) deepLink(q.get('chain'),q.get('id'));
        });
        watch(currentView, v=>{if(v==='explore')fetchExp();if(v==='gallery')fetchGal();if(v==='history')fetchHis();if(v==='admin')fetchAdmin();});
        watch([()=>page.value.explore,()=>page.value.gallery,()=>page.value.history], (n,o)=>{if(n[0]!==o[0])fetchExp();if(n[1]!==o[1])fetchGal();if(n[2]!==o[2])fetchHis();});

        return {
            networkStats, // <--- 添加这个
            currentView, activeNetworks, networks, wallet, userStatus, loading, 
            explorePosts, galleryPosts, historyPosts, adminUsers, page, currentPost, isEditMode, createForm, registerName, isV6:computed(()=>isV6Net(wallet.value.chainId)),
            // Correctly named exports matching index.html
            connectWallet, switchNet, register, createPost:sendPost, updatePost:editPostAction, deletePost:delPostAction, toggleBan, 
            getCardStyle, getTagColor, safeNetName, parseMd, goPost, goBack, copyLink, 
            fetchExp, fetchGal, fetchHis, fetchAdmin, 
            canEdit: (auth) => wallet.value.address && auth.toLowerCase() === wallet.value.address.toLowerCase()
        };
    }
}).mount('#app');