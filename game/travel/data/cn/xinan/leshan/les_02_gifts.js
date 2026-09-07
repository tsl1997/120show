/* 乐山 分册02：特色周边（嘉州小吃/峨眉山货/非遗手信） */
window.LES_GIFTS = window.LES_GIFTS || [];
window.LES_GIFTS.push(
  /* ---- 经典必吃（原版保留） ---- */
  { id: 'leshan_boboji', name: '钵钵鸡', icon: '🍗', tag: '食', type: '美食', price: 30, desc: '藤椒油泡着的签签鸡片，红油与藤椒双味。签签一把一把抽，"上瘾的速度像嗑瓜子"。' },
  { id: 'leshan_tiaojiao', name: '跷脚牛肉', icon: '🍲', tag: '食', type: '美食', price: 35, desc: '百年药膳汤底烫牛杂，"跷着脚吃"得名。配干碟蘸水，苏稽镇老店最正宗。' },
  { id: 'leshan_tianpi', name: '甜皮鸭', icon: '🦆', tag: '食', type: '美食', price: 40, desc: '鸭皮刷糖浆炸得焦甜，"乐山人的鸭子"。赵鸭子、纪六孃排队如龙。' },
  { id: 'leshan_doufu', name: '豆腐脑·油炸串串', icon: '🥣', tag: '食', type: '美食', price: 15, desc: '乐山豆腐脑加馓子花生，咸鲜浓稠。油炸串串刷辣椒面，"咔嚓"一声停不下来。' },
  { id: 'leshan_yumi', name: '西坝豆腐', icon: '🧈', tag: '食', type: '美食', price: 60, desc: '西坝镇豆腐宴三百多道菜。"豆腐都能开宴席"，川菜的温柔派。' },
  { id: 'leshan_zhuyashi', name: '竹叶青茶·犍为茉莉', icon: '🍵', tag: '食', type: '特产', price: 90, desc: '峨眉山竹叶青"扁直如竹"，杯中根根立。犍为茉莉花茶香飘三江。' },
  { id: 'leshan_yanshui', name: '沐川乌骨黑鸡·猕猴桃', icon: '🍗', tag: '食', type: '特产', price: 50, desc: '乌骨黑鸡"黑得彻底"，滋补佳品。徐氏猕猴桃红心甜糯，"竹海里的馈赠"。' },
  { id: 'leshan_dafu_wen', name: '大佛文创', icon: '🖼️', tag: '衣', type: '文创', price: 45, desc: '大佛冰箱贴、弥勒"开心"T恤。"乐山大佛微笑"，被做成表情包周边。' },
  { id: 'leshan_foyuan', name: '峨眉山猴文创', icon: '🐒', tag: '衣', type: '文创', price: 40, desc: '灵猴玩偶"抱走你的零食"。峨眉山猴文化文创，被抢过包的人秒懂。' },
  { id: 'leshan_jiaozinian', name: '金顶云海夜宿', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '金顶住一晚看日出云海与佛光。"运气好能看到七彩光环自己站在中间"。' },
  { id: 'leshan_zhuxie', name: '峨眉山猴群互动', icon: '🐒', tag: '玩', type: '体验', price: 0, desc: '生态猴区买猴粮投喂。护住背包！猴子抢食"快准狠"，"互动=斗智斗勇"。' },
  { id: 'leshan_piwei', name: '三江游船观大佛', icon: '⛴️', tag: '行', type: '体验', price: 70, desc: '游船江上看大佛全景，"只有船上看得到整尊佛"。三江交汇水色分明。' },
  { id: 'leshan_minsu', name: '嘉定坊民宿', icon: '🏨', tag: '住', type: '住宿', price: 240, desc: '大佛旁嘉定坊古街民宿，夜里灯笼亮起。早晨碗钵钵鸡香从街头飘来。' },
  /* ---- 嘉州小吃新菜单 ---- */
  { id: 'lesg_kabing', name: '咔饼', icon: '🫓', tag: '食', type: '美食', price: 15, desc: '热腾腾的白面饼从中间剖开，塞满笼屉里蒸透的粉蒸牛肉。椒麻肉汁浸着饼心，一口咬下满嘴喷香，是乐山的元气早点。' },
  { id: 'lesg_yeerba', name: '叶儿粑', icon: '🍡', tag: '食', type: '美食', price: 18, desc: '糯米皮裹上馅，用芭蕉叶包成小枕头模样上笼蒸熟。剥开叶子，咸甜两味热气直冒，油润软糯带着清甜叶香。' },
  { id: 'lesg_langya', name: '狼牙土豆', icon: '🥔', tag: '食', type: '美食', price: 12, desc: '土豆切成波浪楞条炸至外脆里绵，趁热拌折耳根香菜与辣椒油。竹签一戳边走边吃，夜市摊头几乎人手一碗。' },
  { id: 'lesg_shaokao', name: '乐山烧烤', icon: '🍢', tag: '食', type: '美食', price: 45, desc: '小竹签穿串码上炭火，五花肉烤得边角焦脆滴油。辣椒孜然撒得豪放，配瓶冰镇峨眉雪，能从黄昏吃到深夜。' },
  { id: 'lesg_dafu_icecream', name: '乐山大佛雪糕', icon: '🍦', tag: '食', type: '美食', price: 20, desc: '按大佛样貌倒模的抹茶雪糕，举在手里与真佛同框留影。微苦回甘的茶香，是打卡乐山必备的仪式感。' },
  { id: 'lesg_suzhai', name: '峨眉素斋', icon: '🥗', tag: '食', type: '美食', price: 60, desc: '豆腐豆筋做成鸡鸭鱼肉的模样，看着满桌荤腥，入口却是清淡本味。一席罗汉斋配碗白饭，吃的是寺院的耐心。' },
  /* ---- 山货茶香特产 ---- */
  { id: 'lesg_emeixueya', name: '峨眉雪芽', icon: '🍵', tag: '食', type: '特产', price: 120, desc: '清明前采自峨眉高山茶园的嫩芽，扁平秀直带淡淡兰花香。热水冲下叶片根根竖起，仿佛把金顶云雾泡进了杯里。' },
  { id: 'lesg_emeixue', name: '峨眉雪汽水', icon: '🥤', tag: '食', type: '饮品', price: 8, desc: '透亮玻璃瓶装的荔枝味汽水，瓶盖一开气泡咕嘟直冒。乐山人的童年味道，撸串烧烤时来一瓶透心凉。' },
  { id: 'lesg_mihuatang', name: '苏稽米花糖', icon: '🍿', tag: '食', type: '特产', price: 25, desc: '糯米炒开花，裹上熬化的麦芽糖紧压成块再切条。甜香不腻，咬一口咔嘣作响，苏稽老铺现做现卖满街飘香。' },
  { id: 'lesg_doufuru', name: '夹江豆腐乳', icon: '🫙', tag: '食', type: '特产', price: 35, desc: '毛豆腐在土坛中慢慢发酵，再裹上红油辣椒封坛。筷子尖挑一点就能送下一大口白粥，咸鲜在舌尖化开。' },
  { id: 'lesg_bobojitiao', name: '钵钵鸡调料包', icon: '🌶️', tag: '食', type: '特产', price: 45, desc: '藤椒油、红油与底料分装成套，回家煮好荤素一泡即成。把嘉州街头的麻辣鲜香，原封不动搬进自家厨房。' },
  { id: 'lesg_xuemo', name: '雪魔芋', icon: '🍲', tag: '食', type: '特产', price: 40, desc: '魔芋冻过再晒干，内部满是小孔，专为吸足汤汁而生。下进火锅红烧肉里，咬开一包浓汤，是峨眉的老山货。' },
  { id: 'lesg_zhuhaisun', name: '沐川笋干', icon: '🎋', tag: '食', type: '特产', price: 55, desc: '竹海春笋焯水后晾晒成金黄笋干，炖肉前温水泡发。山野清气全锁在干香里，咬下去仍脆嫩如初摘。' },
  /* ---- 手信·非遗·体验 ---- */
  { id: 'lesg_wumu', name: '乌木雕件', icon: '🪵', tag: '玩', type: '文创', price: 200, desc: '沉睡河床数千年的古木碳化成乌木，色如墨玉、叩之有声。匠人依形雕出佛像山水，摆在案头厚重又雅致。' },
  { id: 'lesg_yiqi', name: '彝族漆器', icon: '🏺', tag: '玩', type: '文创', price: 160, desc: '木胎外髹黑红黄三色漆，绘着日月星辰与羊角纹样。出自峨边彝寨匠人之手，盛一碗坨坨肉待客格外地道。' },
  { id: 'lesg_yeyou', name: '夜游三江观大佛', icon: '🌌', tag: '游', type: '体验', price: 90, desc: '天黑后登船，看灯光一层层勾勒出大佛轮廓，倒影在江面碎成金箔。江风裹着夜市香，夜游票记得提前订。' }
);
