/* 桂林 分册02：特色周边（山水美食 / 桂花手信 / 壮乡文创 / 户外体验） */
window.GL_GIFTS = window.GL_GIFTS || [];
window.GL_GIFTS.push(
  /* ---- 旧档原条目（保留不动） ---- */
  { id: 'guilin_mifen', name: '桂林米粉', icon: '🍜', tag: '食', type: '美食', price: 10, desc: '卤水米粉先干拌后加汤，锅烧脆皮是灵魂。"桂林人的一天从二两米粉开始"。' },
  { id: 'guilin_pijiuyu', name: '阳朔啤酒鱼', icon: '🐟', tag: '食', type: '美食', price: 88, desc: '漓江鱼配啤酒焖烧，鱼鳞都炸得酥脆。西街每家店都有"秘方"，剑骨鱼最贵最嫩。' },
  { id: 'guilin_suancai', name: '桂林酸品', icon: '🥒', tag: '食', type: '美食', price: 10, desc: '"英雄难过美人关，美人难过酸摊关"。酸萝卜、酸芒果蘸辣椒盐，桂北人的解馋神器。' },
  { id: 'guilin_luohan', name: '罗汉果', icon: '🍈', tag: '食', type: '特产', price: 40, desc: '"东方神果"甜度是蔗糖300倍且零热量。罗汉果茶润嗓，桂林人的"随身药箱"。' },
  { id: 'guilin_sanyu', name: '三花酒·豆腐乳', icon: '🍶', tag: '食', type: '特产', price: 40, desc: '桂林三宝：三花酒、豆腐乳、辣椒酱。三花酒斟酒起花三层，"米香型白酒之王"。' },
  { id: 'guilin_huashan', name: '壮锦·扎染', icon: '🧶', tag: '衣', type: '服饰', price: 90, desc: '壮锦团龙纹围巾、蓝染布包。龙脊红瑶长发姐姐的手作，"山里的颜色"。' },
  { id: 'guilin_shanshui', name: '山水文创·人民币打卡框', icon: '💵', tag: '衣', type: '文创', price: 25, desc: '20元人民币同款画框、漓江山水冰箱贴。在兴坪举着画框对齐真山，"全民仪式感"。' },
  { id: 'guilin_yurehe', name: '遇龙河竹筏漂流', icon: '🚣', tag: '玩', type: '体验', price: 200, desc: '人工撑筏慢漂4小时，过堤坝"小刺激"。水牛在岸边吃草，"最温柔的漂流"。' },
  { id: 'guilin_feiji', name: '热气球看峰林', icon: '🎈', tag: '玩', type: '体验', price: 300, desc: '阳朔热气球升空，俯瞰万座喀斯特小山包。"桂林山水的上帝视角"。' },
  { id: 'guilin_panye', name: '印象刘三姐演出', icon: '🎭', tag: '玩', type: '体验', price: 238, desc: '张艺谋导演，漓江水面为舞台。600名演员渔火点点，"山水实景演出鼻祖"。' },
  { id: 'guilin_panxi', name: '攀岩·骑行十里画廊', icon: '🚲', tag: '玩', type: '体验', price: 120, desc: '阳朔是全球著名攀岩地，月亮山岩壁经典。骑行十里画廊，"人车共游山水间"。' },
  { id: 'guilin_minsu', name: '漓江边民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '兴坪江畔民宿，阳台正对黄布倒影。清晨渔翁带鸬鹚从窗前划过，"20元画面实景"。' },
  /* ---- 新增（分册扩容） ---- */
  { id: 'glg_tianluoniang', name: '阳朔田螺酿', icon: '🐚', tag: '食', type: '美食', price: 28, desc: '田螺肉挑出剁碎，拌上猪肉薄荷紫苏再塞回螺壳，连壳焖烧。牙签挑出一整颗塞进嘴里，满口鲜香，是“十八酿”里最勾人的一口。' },
  { id: 'glg_youcha', name: '恭城油茶', icon: '🍵', tag: '食', type: '美食', price: 15, desc: '茶叶姜蒜在铁锅里捶出茶沫，冲进滚水煮成一碗咸香。配米花麻蛋炒花生，苦后回甘，瑶家人说三碗下肚才算喝过。' },
  { id: 'glg_guihuagao', name: '桂花糕', icon: '🌼', tag: '食', type: '特产', price: 18, desc: '糯米粉兑糖桂花蒸成小方糕，面上撒一层金桂。趁热咬开软糯弹牙，桂花香从舌尖漫到喉咙，满口都是秋天的味道。' },
  { id: 'glg_guihuami', name: '桂林桂花蜜', icon: '🍯', tag: '食', type: '特产', price: 45, desc: '金桂入蜜封存，琥珀色的蜜里浮着细碎花瓣。冲温水或蘸糕饼皆宜，一勺下去，把桂林满城的桂香都收进瓶底。' },
  { id: 'glg_guihuatang', name: '桂花糖', icon: '🍬', tag: '食', type: '美食', price: 15, desc: '麦芽糖裹进干桂花与芝麻，切成一粒粒小方块。入口酥脆、满嘴花香，是老桂林人兜里的童年零嘴。' },
  { id: 'glg_guihuaxiangnang', name: '桂花香囊', icon: '🌸', tag: '闻', type: '文创', price: 35, desc: '应季桂花晾干装进绣花布囊，挂在包上或枕边，暗香能浮上小半年。每只花纹都不同，带走一袋桂林的甜香。' },
  { id: 'glg_lipuyukourou', name: '荔浦芋扣肉', icon: '🍖', tag: '食', type: '美食', price: 48, desc: '荔浦芋头粉糯起沙，与带皮五花肉相间码进碗里，蒸到肉化芋香。扣肉入口即化，芋片吸饱肉汁，是广西年夜饭的压轴菜。' },
  { id: 'glg_lijiangyugan', name: '漓江小鱼干', icon: '🐟', tag: '食', type: '特产', price: 38, desc: '漓江里的小鱼仔晒干再油酥，拌上辣椒芝麻炒得香酥透骨。抓一把配粥下酒都合适，漓江的鲜味被装进一只小罐。' },
  { id: 'glg_shanshuisijin', name: '漓江山水丝巾', icon: '🧣', tag: '衣', type: '服饰', price: 120, desc: '真丝方巾印着漓江山水与渔翁竹筏，蓝绿渐层如水墨晕染。系在颈间或缠上包带，把二十元人民币的风景随身带着走。' },
  { id: 'glg_guilinmingxinpian', name: '漓江手绘明信片', icon: '📮', tag: '玩', type: '文创', price: 30, desc: '手绘桂林山水明信片，附一张二十元取景对照卡。在兴坪码头挑一张写好，盖上桂林邮戳，寄给远方的朋友。' },
  { id: 'glg_huaxiangsan', name: '阳朔滑翔伞', icon: '🪂', tag: '玩', type: '体验', price: 420, desc: '从十里画廊的山坡起飞，教练带你滑翔过峰林与稻田。双脚离地那刻风声灌满耳朵，落地后还忍不住抬头再看天。' },
  { id: 'glg_qianguqing', name: '桂林千古情', icon: '🎪', tag: '玩', type: '体验', price: 260, desc: '宋城出品的歌舞大秀，把桂林山水与传说搬上旋转舞台。灯光喷泉追着剧情走，雨丝真从头顶飘落，阳朔之夜多了场热闹。' },
  { id: 'glg_longjidiaojiao', name: '龙脊吊脚楼民宿', icon: '🏚️', tag: '住', type: '住宿', price: 280, desc: '木楼悬在梯田之上，推窗便是层层金浪或翻涌云雾。夜里听虫鸣、清晨等日出，壮族阿嫂端来一碗油茶，日子慢成风景。' },
  { id: 'glg_fuzi', name: '王府福字拓印', icon: '📜', tag: '玩', type: '文创', price: 25, desc: '在靖江王城贡院里亲手拓一张“福”字，墨香中沾沾千年文气。老师傅手把手教，拓好的福字卷起带走，是最好的彩头。' },
  { id: 'glg_xiuqiu', name: '壮乡绣球', icon: '🧵', tag: '玩', type: '文创', price: 30, desc: '壮族姑娘抛给心上人的定情信物，彩绸拼缝、下缀流苏。挑一只挂进车里或别在包上，山歌里的浪漫便一路跟着你。' }
);
