/* 乐山 分册01：景点圣地（大佛凌云/峨眉仙山/古镇秘境） */
window.LES_SPOTS = window.LES_SPOTS || [];
window.LES_SPOTS.push(
  /* ---- 经典必去（原版保留） ---- */
  { id: 'leshan_dafu', name: '乐山大佛', icon: '🗿', price: 80, desc: '71米的弥勒坐佛"山是一尊佛，佛是一座山"。开凿90年治水患，九曲栈道贴壁而下，佛脚仰望最震撼。' },
  { id: 'leshan_emei', name: '峨眉山', icon: '⛰️', price: 160, desc: '四大佛教名山之一，金顶十方普贤金像耀眼。猴子"抢劫"背包成常态，云海日出与佛光齐观。' },
  { id: 'leshan_wannian', name: '万年寺·清音阁', icon: '🛕', price: 0, desc: '万年寺无梁砖殿与普贤铜像千年不损。清音阁双桥清音，"峨眉山水最秀处"。' },
  { id: 'leshan_diaolou', name: '东方佛都·乌木博物馆', icon: '🏛️', price: 80, desc: '三千余尊佛像群雕，"佛国世界的复刻"。乌木博物馆阴沉木雕巧夺天工。' },
  { id: 'leshan_shangzhong', name: '上中顺美食街', icon: '🍢', price: 0, desc: '乐山小吃宇宙中心：钵钵鸡、甜皮鸭、油炸串串。本地人从街头吃到巷尾，"味蕾马拉松"。' },
  { id: 'leshan_jiajiang', name: '夹江千佛岩', icon: '🛕', price: 0, desc: '青衣江畔2400余尊唐代摩崖造像。"千佛岩"比大佛更小众，水声与佛影相伴。' },
  { id: 'leshan_zhuhai', name: '沐川竹海·黑竹沟', icon: '🎋', price: 60, desc: '沐川竹海十万亩楠竹涛声，"天然氧吧"。黑竹沟号称"中国百慕大"，神秘探险地。' },
  /* ---- 大佛·凌云山片区 ---- */
  { id: 'lesp_lingyunsi', name: '凌云寺', icon: '🏯', price: 0, desc: '紧邻大佛的唐代古刹，苏东坡留下过题刻。殿檐一半悬在崖边，香火绕梁不散，出门即是三江奔流的开阔江面。' },
  { id: 'lesp_jiuqushandao', name: '九曲栈道', icon: '🪜', price: 0, desc: '贴大佛右崖凿出的之字形石梯，最窄处仅容一人侧身。扶着铁链拾级而下，抬头正对慈眉佛面，江风灌满衣襟。' },
  { id: 'lesp_sanjiangkou', name: '三江汇流·乐山港', icon: '🌊', price: 0, desc: '岷江、青衣江、大渡河在城外汇合，江水涨落时看得出颜色分界。站在乐山港望江，汽笛声随水汽一起飘到对岸。' },
  { id: 'lesp_wuyousi', name: '乌尤寺', icon: '🛕', price: 0, desc: '乌尤山离堆之上竹树环抱，寺院顺山势错落而建。江对岸车马喧嚣，此处只闻钟鼓与鸟鸣，最适合独自发呆。' },
  { id: 'lesp_jiadingfang', name: '嘉定坊古街', icon: '🏮', price: 0, desc: '大佛脚下的仿古街区，青瓦木楼檐下挂满灯笼。茶馆藤椅一坐半天，钵钵鸡与甜皮鸭的香气追着行人跑。' },
  { id: 'lesp_zhanggongqiao', name: '张公桥美食街', icon: '🥢', price: 0, desc: '入夜整条街被炉火点亮，卤味烧烤摊前排着等位的人。桥头老店亮灯到凌晨，麻辣香顺着河风飘出三条巷。' },
  { id: 'lesp_guomoruo', name: '郭沫若故居', icon: '🏛️', price: 0, desc: '沙湾老街上郭沫若出生地，穿斗木楼还摆着他少年用过的书桌。门前大渡河涛声依旧，笔名里的两条河就在窗外。' },
  { id: 'lesp_sujigu', name: '苏稽古镇', icon: '🏘️', price: 0, desc: '峨眉河穿镇而过，红砂石廊桥连着两岸茶馆。桥头大锅咕嘟着跷脚牛肉，竹椅摆到河边，时间在这里慢下来。' },
  /* ---- 峨眉山片区 ---- */
  { id: 'lesp_dafochanyuan', name: '大佛禅院', icon: '🛕', price: 0, desc: '峨眉山脚恢宏的寺院群，金瓦连片、殿宇层层叠叠。晨钟暮鼓中香客绕塔诵经，深秋桂花开时香飘整条长街。' },
  { id: 'lesp_emei_baoguosi', name: '报国寺', icon: '⛩️', price: 0, desc: '入峨眉山的第一座大寺，匾额出自康熙御笔。青石阶旁古楠参天，香客进山前多在此进香，求一路平安顺遂。' },
  { id: 'lesp_emei_fuhusi', name: '伏虎寺', icon: '🛕', price: 0, desc: '藏在报国寺后山的幽谷古刹，四周楠木蔽日成林。寺顶终年不见落叶，人呼“离垢园”，虎溪桥下流水声清脆。' },
  { id: 'lesp_emei_qingyinge', name: '清音阁', icon: '🏞️', price: 0, desc: '黑龙江与白龙江在阁下汇流，撞上溪心牛心石，水声如琴。双桥横卧溪上，站久了暑气全被水声冲走。' },
  { id: 'lesp_emei_houqu', name: '生态猴区', icon: '🐒', price: 0, desc: '过一线天便进了灵猴地盘，石阶上蹲着等零食的“路霸”。护好背包再逗它们，抢食快得只留下一道残影。' },
  { id: 'lesp_emei_jinding', name: '金顶·十方普贤', icon: '🌄', price: 0, desc: '登上海拔三千多米的金顶，十方普贤金身十面环视。云海在脚下铺成白浪，运气好能看见佛光圈住自己的影子。' },
  { id: 'lesp_emei_leidongping', name: '雷洞坪', icon: '🌨️', price: 0, desc: '冬春的雪线常常压到雷洞坪，冷杉挂满雾凇与冰凌。不想冒寒登顶的人，在此赏雪堆雪人，笑声滚满山坡。' },
  { id: 'lesp_emei_xixiangchi', name: '洗象池', icon: '🐘', price: 0, desc: '传说普贤骑象登山，白象在此池中洗浴，故得此名。古寺月池清幽，山中段夜宿听松涛，是峨眉的清净处。' },
  /* ---- 古镇·小火车·奇山 ---- */
  { id: 'lesp_jiayang', name: '嘉阳小火车', icon: '🚂', price: 100, desc: '犍为山谷里仍喘着白烟的窄轨蒸汽小火车，车厢晃晃悠悠像退回老电影。春天轨道两侧油菜花金黄，车过处轰隆震天。' },
  { id: 'lesp_suoluohu', name: '桫椤湖', icon: '🚣', price: 50, desc: '游船沿犍为峡谷缓缓而行，两岸长满恐龙时代的桫椤树。枝叶像撑开的绿伞，雾气贴着水面，像驶进远古丛林。' },
  { id: 'lesp_luocheng', name: '罗城古镇·船形街', icon: '⛵', price: 0, desc: '建在山顶的船形老街，中间主街像船身，两侧廊檐弯成船舷。凉厅子下茶桌排满，全镇人都像在一条船上过日子。' },
  { id: 'lesp_wutongqiao', name: '五通桥·小西湖', icon: '🌉', price: 0, desc: '涌斯江穿城而过，把五通桥割出许多座桥和岛。黄葛树绿荫罩街，河边茶馆摆到水里，人称乐山“小西湖”。' }
);
