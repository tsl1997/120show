/* 北海道 分册01：景点胜地（雪国札幌/小樽函馆浪漫/登别湖泉/富良野美瑛） */
window.HKD_SPOTS = window.HKD_SPOTS || [];
window.HKD_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'hokkaido_otingai', name: '小樽运河', icon: '🏮', price: 0, desc: '煤气灯与红砖仓库倒映在运河里，冬夜雪灯点亮时像一封信。音乐盒堂的八音盒声，是这座"浪漫仓库城"的BGM。' },
  { id: 'hokkaido_sapporo_yukimatsuri', name: '札幌雪祭', icon: '⛄', price: 0, desc: '每年二月，大通公园立起十几米高的冰雪雕塑。夜晚灯光打亮冰塔，零下十度挤满十万人，冬天就该这么热闹。' },
  { id: 'hokkaido_furano', name: '富良野花田', icon: '💜', price: 30, desc: '七月薰衣草开成紫色波浪，彩色花带像打翻的调色盘。租辆单车在田埂间骑行，风里全是香气。' },
  { id: 'hokkaido_atoro', name: '阿寒湖·摩周湖', icon: '🌊', price: 40, desc: '火山湖群像宝石散落：摩周湖常年雾锁"神秘之湖"，阿寒湖上有绿球藻。冬天湖面结冰还能玩冰钓和摩托雪橇。' },
  { id: 'hokkaido_niseko', name: '二世谷滑雪场', icon: '🎿', price: 320, desc: '"雪质世界第一"的粉雪天堂，外国滑雪客的朝圣地。摔进半米深的粉雪里不疼，站起来满身雪雾。' },
  { id: 'hokkaido_asahiyama', name: '旭山动物园', icon: '🐧', price: 45, desc: '日本人气第一动物园，企鹅雪地巡游是招牌节目。它们摇摇摆摆列队走过雪原，队伍后面总有想抱走它们的游客。' },
  { id: 'hokkaido_hakodate', name: '函馆山夜景', icon: '🌃', price: 15, desc: '"世界三大夜景"之一，函馆湾像一把发光的折扇。缆车十分钟登顶，风很大、灯很暖、人很满足。' },
  /* ---- 札幌·雪国都会（新增） ---- */
  { id: 'hkdp_sapporo_clock', name: '札幌市钟楼', icon: '🕰️', price: 0, desc: '建于1878年的木造钟楼，红砖白墙是札幌最上镜的明信片。塔顶的大钟至今还在走，整点敲响时连大通公园都能听见。' },
  { id: 'hkdp_odori_park', name: '大通公园', icon: '🌳', price: 0, desc: '札幌的心脏地带，十二丁目连成一条绿色缎带。春夏花坛轮换，冬日变身雪祭与白色灯饰的主会场，四季都不冷场。' },
  { id: 'hkdp_sapporo_tv_tower', name: '札幌电视塔', icon: '🗼', price: 20, desc: '大通公园尽头的地标，九十米展望台把棋盘街景尽收眼底。入夜塔身亮起橙红灯光，是札幌夜空最暖的坐标。' },
  { id: 'hkdp_hokkaido_jingu', name: '北海道神宫', icon: '⛩️', price: 0, desc: '圆山原始林里的总镇守，供奉开拓三神。新年初詣人流如织，平时参道安静，朱红鸟居在雪中格外醒目。' },
  { id: 'hkdp_shiroyama_park', name: '白色恋人公园', icon: '🍫', price: 40, desc: '白色恋人饼干的主题乐园，可参观生产线并DIY专属铁盒。英式花园里飘着可可香，连钟楼都会按时“唱歌”。' },
  { id: 'hkdp_sapporo_beer_museum', name: '札幌啤酒博物馆', icon: '🍺', price: 30, desc: '红砖厂房改成的啤酒博物馆，讲述北海道开拓史与麦酒情缘。参观完喝一杯限定“札幌生啤”，麦香正好。' },
  { id: 'hkdp_ramen_yokocho', name: '札幌拉面横丁', icon: '🍜', price: 0, desc: '狭窄巷子里挤着十几家拉面老铺，味噌汤头的蒸汽扑上玻璃。深夜来一碗加黄油玉米的味噌拉面，是札幌的宵夜魂。' },
  /* ---- 小樽·运河浪漫（新增） ---- */
  { id: 'hkdp_otaru_musicbox_hall', name: '小樽音乐盒堂', icon: '🎼', price: 0, desc: '本馆由明治仓库改建，数千只八音盒叮咚作响。挑一只喜欢的旋律现场试听，是运河边最“啰嗦”也最浪漫的店。' },
  /* ---- 函馆·港口风情（新增） ---- */
  { id: 'hkdp_hakodate_goryokaku', name: '五棱郭公园', icon: '⭐', price: 30, desc: '幕末建造的星形要塞，樱花季从塔上俯瞰宛如粉色五角星。这里见证箱馆战争终幕，也是函馆春天的名片。' },
  { id: 'hkdp_hakodate_morning_market', name: '函馆朝市', icon: '🐟', price: 0, desc: '海鲜摊天亮前就点起灯，乌贼、海胆、活蟹现捞现做。尝一碗现烤海胆盖饭，才算被函馆的早晨正式欢迎。' },
  /* ---- 登别·火山与湖泉（新增） ---- */
  { id: 'hkdp_noboribetsu_jigokudani', name: '登别地狱谷', icon: '♨️', price: 0, desc: '火山喷气从谷底嘶嘶涌出，硫磺味把岩石染成铁锈色。栈道尽头看“铁泉池”翻滚，地狱尽头是北海道第一汤。' },
  { id: 'hkdp_toya_lake', name: '洞爷湖', icon: '🏞️', price: 20, desc: '破火山口湖上浮着中岛，湖面冬天也不结冰。乘游览船喂海鸥，再眺望羊蹄山，是道央最开阔的放空。' },
  { id: 'hkdp_shikotsu_lake', name: '支笏湖', icon: '🛶', price: 0, desc: '日本最北的不冻湖，湖水清到能看穿十几米深的水下碎木。环湖步道与独木舟，让时间慢成一片安静的蓝。' },
  /* ---- 富良野·美瑛·道央群山（新增） ---- */
  { id: 'hkdp_biei_patchwork', name: '美瑛拼布之路', icon: '🌾', price: 0, desc: '起伏丘陵把麦田、荞麦花与马铃薯田缝成一块块拼布。骑车追着光影跑，四季颜色在这里轮换着登场。' },
  { id: 'hkdp_aoiike_pond', name: '白金青池', icon: '💧', price: 0, desc: '拦河坝拦出的一片钴蓝，枯立白桦的倒影让水面像调过色。清晨无风时最像画，摄影师蹲守只为那一束光。' },
  { id: 'hkdp_ningle_terrace', name: '富良野精灵露台', icon: '✨', price: 0, desc: '新富良野王子饭店后的森林里，一间间木屋亮着暖灯。冬日雪夜来访，仿佛误入小精灵开集市的童话。' },
  { id: 'hkdp_daisetsuzan_asahidake', name: '大雪山旭岳', icon: '🏔️', price: 40, desc: '北海道屋脊旭岳，六月仍被残雪覆盖。坐缆车登高看高山植物与火山湖，是道民避暑与赏雪的双重快乐。' }
);
