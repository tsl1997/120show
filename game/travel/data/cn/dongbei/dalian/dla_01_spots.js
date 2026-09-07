/* 大连 分册01：景点圣地（浪漫之都·广场之城·山海画廊） */
window.DLA_SPOTS = window.DLA_SPOTS || [];
window.DLA_SPOTS.push(
  /* ---- 旧档保留 ---- */
  { id: 'dalian_xinghai', name: '星海广场', icon: '🌅', price: 0, desc: '亚洲最大城市广场之一，临海而建。傍晚喂海鸥、放风筝，贝壳博物馆就在旁边，夜晚灯光如星河。' },
  { id: 'dalian_binhailu', name: '滨海路·棒棰岛', icon: '🛣️', price: 20, desc: '30公里滨海观光路，一桥一湾皆大片。木栈道徒步最爽，棒棰岛的海水清澈见底。' },
  { id: 'dalian_jinshitan', name: '金石滩', icon: '🏖️', price: 90, desc: '"神力雕塑公园"，六亿年海蚀奇观。龟裂石被称为"天下第一奇石"，沙滩细腻海水湛蓝。' },
  { id: 'dalian_hutan', name: '老虎滩海洋公园', icon: '🐬', price: 220, desc: '海洋动物馆+海兽馆+鸟语林的大合体。海豚表演掌声雷动，极地馆企鹅萌到犯规。' },
  { id: 'dalian_railway', name: '俄罗斯风情街·东关街', icon: '🏛️', price: 0, desc: '百年俄式建筑连成街，"大连的异国风"。套娃手信与咖啡小店，历史与市井混搭。' },
  { id: 'dalian_yihe', name: '旅顺口', icon: '⚓', price: 40, desc: '天然不冻军港，日俄战争遗址遍布。白玉山顶俯瞰"老虎尾"，一部近代史读半天。' },
  { id: 'dalian_laohutan_ye', name: '东港音乐喷泉', icon: '⛲', price: 0, desc: '东北最大的音乐喷泉，水柱随乐起舞。夜景配游艇码头，夏天晚风里全是欢呼声。' },
  /* ---- 新增 ---- */
  { id: 'dlap_chengdiao_bainian', name: '百年城雕', icon: '📖', price: 0, desc: '星海广场南端，城雕如一册翻开的巨书，铜铸脚印从书页间一路铺向海边。1999年为纪念建市百年而立，百年足迹直抵大海。' },
  { id: 'dlap_weinisi_shuicheng', name: '东方威尼斯水城', icon: '🛶', price: 0, desc: '东港的仿威尼斯街区，运河从彩色小楼间穿过。乘贡多拉慢慢摇过石拱桥，抬头是钟楼，转身便是海。' },
  { id: 'dlap_senlin_dongwuyuan', name: '大连森林动物园', icon: '🦒', price: 120, desc: '白云山南麓依山而建的动物园，圈养区放养区沿山坡铺开。坐电瓶车穿过斑马长颈鹿的家，猛兽隔着玻璃打盹。' },
  { id: 'dlap_zhongshan_guangchang', name: '中山广场建筑群', icon: '🏛️', price: 0, desc: '十条马路从环形广场辐射开去，四周立着十栋百年欧式银行老楼。哥特塔楼与古典柱廊相望，这里是大连的城市客厅。' },
  { id: 'dlap_laogang_matou', name: '大连港老码头', icon: '⚓', price: 0, desc: '大连港最初的起点，废弃老仓库改成的文创街区。灯塔下看万吨巨轮缓缓进出，老码头平台上有咖啡馆和旧铁锚。' },
  { id: 'dlap_jinshitan_dizhi', name: '金石滩国家地质公园', icon: '🪨', price: 80, desc: '六亿年前的震旦纪地层裸露在海边，龟裂石、恐龙探海、鳌滩一景挨一景。海蚀礁石被浪雕成奇形怪状，走走停停像在读地质史书。' },
  { id: 'dlap_faxian_wangguo', name: '发现王国主题公园', icon: '🎢', price: 230, desc: '金石滩的游乐王国，欧洲城堡尖塔下藏着过山车与跳楼机。白天在尖叫中冲上云霄，夜晚花车巡游和烟火把乐园点亮。' },
  { id: 'dlap_yuren_matou', name: '渔人码头', icon: '⛵', price: 0, desc: '老虎滩旁的海湾渔港，彩色欧式小屋沿堤岸排开。老渔船泊在码头边，灯塔下咖啡馆里坐一下午，落日把海染成油画。' },
  { id: 'dlap_kuahai_daqiao', name: '星海湾跨海大桥', icon: '🌉', price: 0, desc: '大连第一座跨海大桥，银白色桥身横跨星海湾。开车经过时海鸥贴着车窗飞，日落时分站在桥上，海湾尽收眼底。' },
  { id: 'dlap_laotieshan', name: '老铁山·黄渤海分界线', icon: '🌊', price: 25, desc: '辽东半岛最南端的老铁山，灯塔下黄海与渤海在这里分明。一条黄蓝分界的水线随潮水摆动，海对面隐约是山东的蓬莱。' },
  { id: 'dlap_guanglu_dao', name: '广鹿岛', icon: '🏝️', price: 150, desc: '长海群岛里离陆地最近的岛，皮口港坐船一小时后登岛。月亮湾沙滩细软，渔家院里现捞现做海鲜，日子慢得像停住。' },
  { id: 'dlap_laodong_gongyuan', name: '劳动公园·大足球', icon: '⚽', price: 0, desc: '市中心的百年老公园，山顶那只大足球雕塑老远就能看见。缆车慢慢晃上山，秋天菊花展把山坡铺成彩色的海。' },
  { id: 'dlap_fujiazhuang', name: '付家庄海滨浴场', icon: '🏖️', price: 0, desc: '滨海路上人气最旺的免费浴场，三面环山一面临海。退潮后沙滩上全是挖沙踏浪的人，浪尖上海鸥起起落落。' },
  { id: 'dlap_shengya', name: '圣亚海洋世界', icon: '🦈', price: 240, desc: '星海广场旁的老牌海洋馆，百多米海底隧道里鲨鱼从头顶游过。白鲸隔着玻璃冲你吐泡泡，企鹅迈着步子列队散步。' },
  { id: 'dlap_lvshun_bowuguan', name: '旅顺博物馆', icon: '🏺', price: 0, desc: '落成于1917年的欧式老馆，建筑本身就是国家级宝贝。馆藏新疆文物与大连近代史并肩陈列，门票全免却值得逛半天。' },
  { id: 'dlap_youhao_guangchang', name: '友好广场·水晶球', icon: '🔮', price: 0, desc: '广场中央五只巨手托起一颗旋转的水晶球，夜里流光溢彩。它是老大连的地标，车流在它脚下昼夜不歇地画着圆圈。' },
  { id: 'dlap_bangchui_dao', name: '棒棰岛', icon: '🏝️', price: 20, desc: '棒棰岛国宾馆前的海湾，海中那座棒槌状小岛便是名字的由来。海之韵的木栈道沿礁石盘绕，海水清得能看见海底卵石。' }
);
