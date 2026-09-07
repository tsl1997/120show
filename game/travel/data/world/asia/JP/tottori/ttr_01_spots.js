/* 鸟取县 分册01：景点胜地（砂丘海岸/柯南·鬼太郎圣地/温泉大山/城下町秘境） */
window.TTR_SPOTS = window.TTR_SPOTS || [];
window.TTR_SPOTS.push(
  /* ---- 鸟取砂丘与海岸（沿用原条目） ---- */
  { id: 'tottori_sakyu', name: '鸟取沙丘', icon: '🏜️', price: 0, desc: '日本唯一大规模海岸沙丘，最大落差50米。骑骆驼、滑沙、"风纹"如波，"日本的沙漠"。' },
  { id: 'tottori_sand_museum', name: '沙之美术馆', icon: '🏛️', price: 70, desc: '世界唯一室内沙雕美术馆，每年主题不同。巨大沙雕细节逼真，"沙子的艺术极限"。' },
  { id: 'tottori_uruwanko', name: '浦富海岸', icon: '🌊', price: 0, desc: '山阴海岸地质公园，游船穿洞。"砂岛洞门"清澈见底，皮划艇穿岩缝。' },
  { id: 'ttrp_tottori_port', name: '鸟取港·砂丘海岸', icon: '🌅', price: 0, desc: '鸟取港与砂丘之间是绵长海岸线，日落时沙与海连成金色。散步道上看不见人，只有海风与浪声作伴。' },
  { id: 'ttrp_koyamaike', name: '湖山池', icon: '🚣', price: 0, desc: '鸟取市北面的湖山池是天然湖，湖上小岛星罗棋布。坐船看落日，湖面镜子般倒映中国山脉。' },
  /* ---- 柯南小镇（北荣町） ---- */
  { id: 'tottori_conan', name: '青山刚昌故乡馆', icon: '🔍', price: 70, desc: '柯南小镇北荣町，"柯南大道"铜像一路。作者故乡馆还原工作室，"真相只有一个"。' },
  { id: 'ttrp_conan_bridge', name: '柯南大桥', icon: '🌉', price: 0, desc: '北荣町的柯南大桥横跨由良川，桥栏立着十几尊柯南铜像。站在桥上望由良站，"少年侦探的故乡"就在脚下。' },
  { id: 'ttrp_conan_street', name: '柯南大道', icon: '🛣️', price: 0, desc: '从由良站到故乡馆的柯南大道，石砖上嵌满柯南角色浮雕。全长约1.4公里，走完等于重温一遍原作名场面。' },
  /* ---- 境港·鬼太郎圣地（沿用原条目+新增） ---- */
  { id: 'tottori_sakaiminato', name: '境港·水木茂之路', icon: '👻', price: 0, desc: '鬼太郎之父水木茂的家乡，800多尊妖怪铜像。妖怪神社与妖怪免税店，"日本最欢乐的妖怪街"。' },
  { id: 'ttrp_youkai_jinja', name: '妖怪神社', icon: '⛩️', price: 0, desc: '境港水木茂之路尽头的妖怪神社，鸟居上蹲着眼球老爹。参拜抽一支"妖怪签"，签筒里爬出来的都是鬼太郎。' },
  { id: 'ttrp_mizuki_kinenkan', name: '水木茂纪念馆', icon: '🏛️', price: 50, desc: '水木茂纪念馆收藏上万件妖怪原画与模型。手冢治虫都折服的妖怪画功力，"妖怪博士"的一生都浓缩在此。' },
  { id: 'ttrp_sakaiminato_shijo', name: '境港水产市场', icon: '🐟', price: 0, desc: '境港的清晨从水产市场开始，刚卸船的松叶蟹活蹦乱跳。食堂里一碗蟹杂汤配烤干贝，"渔港早餐"满到溢出来。' },
  /* ---- 大山与三朝温泉 ---- */
  { id: 'tottori_daisen', name: '大山', icon: '⛰️', price: 0, desc: '中国地方最高峰"伯耆富士"。夏季避暑徒步，冬季滑雪场"大山白金"。' },
  { id: 'ttrp_kendake_toge', name: '键挂峠', icon: '🏞️', price: 0, desc: '远望大山的最佳机位，日本海与伯耆平野尽收眼底。清晨云海盘绕时，"伯耆富士"像浮在空中的圣山。' },
  { id: 'ttrp_daisenji', name: '大山寺', icon: '🛕', price: 0, desc: '半山腰的大山寺立了一千三百年，阿夫利神社香火不断。寺前参道卖大山名物，登山前先拜一拜再吃一碗。' },
  { id: 'ttrp_misasa_kawara', name: '三朝温泉·河原风吕', icon: '♨️', price: 0, desc: '三朝川边有一处免费露天风吕，男女轮流泡的"河原风吕"。冬天泡热汤看雪，"山阴温泉乡最原始的浪漫"。' },
  { id: 'ttrp_misasa_yuan', name: '燕赵园', icon: '🏮', price: 10, desc: '三朝温泉的燕赵园是日本最大中国式庭园，凤翔阁飞檐翘角。从中国移建的亭台楼阁，"一步跨到中国"的错觉。' },
  /* ---- 白兔神社与城下町秘境 ---- */
  { id: 'ttrp_hakuto_jinja', name: '白兔神社', icon: '🐇', price: 0, desc: '因幡白兔传说之地，兔子被鳄鱼骗过海的日本最古老神话。绳结御守一拉姻缘就到，"结缘神社"名不虚传。' },
  { id: 'tottori_mizuki', name: '三德山三佛寺投入堂', icon: '🛕', price: 30, desc: '悬崖绝壁上的"最危险国宝"，悬造小堂。攀山两小时一睹真容，"修行者的圣地"。' },
  { id: 'ttrp_tottori_castle', name: '鸟取城址·久松公园', icon: '🏯', price: 0, desc: '鸟取城的栗色石垣称得上日本最高级，天守台保留战国遗构。樱花季园内开满染井吉野，夜樱点灯别有滋味。' },
  { id: 'ttrp_tottori_hakubutsukan', name: '鸟取县立博物馆', icon: '🏛️', price: 10, desc: '鸟取县立博物馆藏国宝太刀，旁边仁风阁木造洋馆混搭和风。穿过庭院就到旧鸟取城，"文化半日游"刚刚好。' },
  { id: 'ttrp_kashino', name: '鹿野城下町', icon: '🏘️', price: 0, desc: '江户时代鸟取藩的城下町，白墙土藏与老町屋沿街而立。町屋咖啡与纸灯笼，"山阴小京都"的低调温柔。' },
  { id: 'ttrp_chizu', name: '智头宿', icon: '🏚️', price: 0, desc: '山阴道的宿场町智头宿，驿站老铺与石阶保存完好。穿行其间像回到参勤交代年代，"安静得能听见木屐声"。' },
  { id: 'ttrp_wakasa', name: '若樱宿·若樱铁道', icon: '🚂', price: 0, desc: '若樱町有"日本最小小京都"之称，若樱铁道的小火车穿过红叶隧道。雪季车窗外的冰柱，"比童话更像童话"。' },
  { id: 'ttrp_yonago_castle', name: '米子城迹', icon: '🏯', price: 0, desc: '米子城曾被称"山阴的大阪"，现存石垣与天守台。登顶可望大山与中海，"废城的废墟美学"。' },
  /* ---- 瀑布与星空 ---- */
  { id: 'ttrp_ame_taki', name: '雨滝', icon: '💧', price: 0, desc: '雨滝落差四十米，入选日本瀑布百选。冬天结成冰瀑，初夏水量最大，"水帘洞"般的清凉秘境。' },
  { id: 'ttrp_hoshitori', name: '星取县·佐治天文台', icon: '🌌', price: 0, desc: '鸟取县自称"星取县"，佐治町夜空光害最少。天文台望远镜免费开放，"银河肉眼可见"的观星圣地。' }
);
