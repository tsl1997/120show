/* 巴黎 分册02：特色周边（法餐·甜品·奶酪·红酒·香水·药妆·时装·住宿体验） */
window.FR_GIFTS = window.FR_GIFTS || [];
window.FR_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'paris_croissant', name: '可颂·法棍', icon: '🥐', tag: '食', type: '美食', price: 20, desc: '酥皮可颂掉渣才正宗，法棍要夹着黄油吃。巴黎人一天进三次面包房，就是日常。' },
  { id: 'paris_macaron', name: '马卡龙', icon: '🧁', tag: '食', type: '美食', price: 45, desc: '拉杜丽的马卡龙色彩像首饰盒，外脆内糯。百年老店里六枚装是"巴黎甜品的通行证"。' },
  { id: 'paris_steak', name: '法式牛排配红酒', icon: '🍷', tag: '食', type: '美食', price: 150, desc: '三分熟牛排配薯条与波尔多红酒。小酒馆里"每日特供"，主厨与食客用一句"Bon appétit"达成默契。' },
  { id: 'paris_onion_soup', name: '法式洋葱汤', icon: '🍲', tag: '食', type: '美食', price: 90, desc: '洋葱慢炒出焦糖香，面包芝士焗到拉丝。冬夜小馆里的一碗，是"巴黎的胃"。' },
  { id: 'paris_coffee', name: '左岸咖啡', icon: '☕', tag: '食', type: '饮品', price: 45, desc: '花神咖啡馆一杯浓缩坐一下午，海明威萨特都坐过。咖啡不便宜，买的是"左岸的午后"。' },
  { id: 'paris_macaron_gift', name: '鹅肝·奶酪礼盒', icon: '🧀', tag: '食', type: '特产', price: 180, desc: '三百种奶酪的"奶酪天堂"，配一小罐鹅肝酱。机场免税的真空包装款，回家也能"法式晚餐"。' },
  { id: 'paris_perfume', name: '香水·花宫娜', icon: '🌸', tag: '衣', type: '特产', price: 180, desc: '格拉斯调香师现场配"专属香"。巴黎人把香水当"看不见的衣服"，专柜试香纸都烫金。' },
  { id: 'paris_foulard', name: '爱马仕丝巾·小铺丝巾', icon: '🧣', tag: '衣', type: '服饰', price: 180, desc: '一方丝巾印着塞纳河与铁塔。爱马仕橱窗是艺术展，圣旺跳蚤市场的老丝巾也有惊喜。' },
  { id: 'paris_beret', name: '贝雷帽', icon: '🎩', tag: '衣', type: '服饰', price: 60, desc: '羊毛贝雷帽一戴，"法式慵懒"上身。蒙马特的帽子铺里，老板娘会帮你调成最俏皮的角度。' },
  { id: 'paris_metro', name: '巴黎地铁体验', icon: '🚇', tag: '行', type: '体验', price: 15, desc: '百年地铁有手风琴艺人、也有"地铁诗人"。买一叠十次票，出站就是景点——"地铁巡游"是巴黎生存技能。' },
  { id: 'paris_bike', name: '塞纳河畔骑行', icon: '🚲', tag: '玩', type: '体验', price: 60, desc: '公共自行车沿塞纳河慢骑，从卢浮宫骑到铁塔。河边路不堵车，风里全是面包香。' },
  { id: 'paris_cabaret', name: '红磨坊康康舞', icon: '💃', tag: '玩', type: '体验', price: 320, desc: '百年歌舞秀：羽毛头饰、康康舞与香槟。票价不便宜，但看过的人都说"这才叫巴黎之夜"。' },
  { id: 'paris_hotel', name: '左岸精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '奥斯曼式老楼里的酒店，电梯像电话亭。推窗就是铁塔一角，"住在明信片里"的体感。' },
  /* ---- 法餐与甜品（新增） ---- */
  { id: 'frg_foiegras', name: '鹅肝酱·法式前菜', icon: '🍽️', tag: '食', type: '特产', price: 220, desc: '西南佩里戈尔的鹅肝酱配法棍与无花果酱。罐装版是机场手信之王，涂面包配无醇香槟，"法式慵懒"立刻上身。' },
  { id: 'frg_cheese', name: '法国奶酪拼盘', icon: '🧀', tag: '食', type: '特产', price: 180, desc: '三种奶酪：卡芒贝尔、布里、罗克福。配核桃与蜂蜜，配酒一晚就是"法国生活艺术"入门课。' },
  { id: 'frg_crepe', name: '法式可丽饼', icon: '🥞', tag: '食', type: '美食', price: 30, desc: '布列塔尼风可丽饼，荞麦面咸口配火腿奶酪，小麦面甜口配焦糖香蕉。街头的小摊飘着黄油香。' },
  { id: 'frg_ratatouille', name: '普罗旺斯炖菜', icon: '🍆', tag: '食', type: '美食', price: 80, desc: '茄子、西红柿、甜椒、洋葱慢火炖出"南法的夏天"。配法棍与橄榄油，配白葡萄酒一绝。' },
  { id: 'frg_bouillabaisse', name: '马赛鱼汤', icon: '🐟', tag: '食', type: '美食', price: 280, desc: '普罗旺斯鱼汤配蒜泥蛋黄酱与烤面包。地中海的鲜味在锅里滚，是法国南海岸的灵魂。' },
  /* ---- 红酒与酒类 ---- */
  { id: 'frg_champagne', name: '香槟酒', icon: '🍾', tag: '食', type: '饮品', price: 220, desc: '香槟区小瓶装的酩悦年份香槟，开瓶声是节庆的代名词。机场免税的限定套盒，"庆祝用"是它的唯一功能。' },
  { id: 'frg_bordeaux', name: '波尔多红酒', icon: '🍷', tag: '食', type: '饮品', price: 220, desc: '梅多克或圣埃美隆的小庄红酒，木箱装手信款。回家配牛排，"法国"两个字的味觉翻译。' },
  { id: 'frg_cognac', name: '干邑白兰地', icon: '🥃', tag: '食', type: '饮品', price: 280, desc: '多年份的干邑白兰地，圆肚小瓶装。冬天兑热巧克力，是"法式冬夜"的标准动作。' },
  /* ---- 香水与药妆 ---- */
  { 'id': 'frg_chnl5', name: '香奈儿 N°5 香水', icon: '💐', tag: '衣', type: '特产', price: 350, desc: '1921年"女人要闻起来像女人"的传奇香水。巴黎专柜刻字版礼盒，是"经典中的经典"。' },
  { id: 'frg_parfum_mini', name: '香水小样五件套', icon: '🌸', tag: '衣', type: '特产', price: 280, desc: '娇兰、香奈儿、迪奥、爱马仕、罗嘉杜五家的小样集。一周换一种香，是"试香周"。' },
  { id: 'frg_avene', name: '雅漾·理肤泉药妆', icon: '💧', tag: '衣', type: '特产', price: 200, desc: '法国药妆店的两大当家，理肤泉喷雾与雅漾舒缓霜。欧洲药妆店是化妆品版的免税店，价差惊人。' },
  /* ---- 时装与配饰 ---- */
  { id: 'frg_champs', name: '香榭丽舍大道路线', icon: '👜', tag: '衣', type: '服饰', price: 350, desc: '香奈儿、迪奥、LV、爱马仕旗舰店的"奢侈品一日巡"。橱窗本身就是展览，是"巴黎时装周"的日常版。' },
  { id: 'frg_souliers', name: 'Repetto 芭蕾舞鞋', icon: '👟', tag: '衣', type: '服饰', price: 250, desc: '法国国民舞鞋，柔软小牛皮。方头款与亮片款各有粉丝，配任何裙装都"法式少女"。' },
  { id: 'frg_baccarat', name: '巴卡拉水晶杯', icon: '🥂', tag: '衣', type: '文创', price: 280, desc: '法国顶级水晶，从路易十五用到现在的香槟杯。专柜刻字的小号对杯，是"婚礼手信天花板"。' },
  { id: 'frg_laduree_box', name: '拉杜丽马卡龙礼盒', icon: '🎁', tag: '食', type: '特产', price: 280, desc: '拉杜丽香水店的丝带礼盒装十二枚马卡龙。绿色招牌与粉绿盒身，"巴黎甜品"的代名词。' },
  /* ---- 体验与手作 ---- */
  { id: 'frg_seine_dinner', name: '塞纳河晚餐游船', icon: '⛵', tag: '食', type: '体验', price: 280, desc: '三道法式晚餐配红酒，在塞纳河上看两岸灯火。铁塔整点闪灯时全场起立，是"巴黎式求婚"的最佳场。' },
  { id: 'frg_cooking', name: '法式料理课堂', icon: '👨‍🍳', tag: '玩', type: '体验', price: 220, desc: '在主厨的厨房里学做鹅肝或马卡龙，三个小时学一道菜。最后大家围坐吃自己做的，巴黎最"接地气"的体验。' },
  { id: 'frg_perfume_workshop', name: '香水调配工作坊', icon: '🧪', tag: '玩', type: '体验', price: 200, desc: '花宫娜香水博物馆里，跟调香师学配一瓶"专属香"。30 毫升玻璃瓶刻名带走，是独一无二的巴黎回忆。' },
  { id: 'frg_eiffel_dinner', name: '铁塔58餐厅', icon: '🍷', tag: '食', type: '体验', price: 320, desc: '铁塔二层的米其林一星餐厅，三道式晚餐配香槟。窗外就是战神广场，巴黎最浪漫的"一餐"。' },
  /* ---- 住宿与夜间 ---- */
  { id: 'frg_palace', name: '奥斯曼宫殿酒店', icon: '🏨', tag: '住', type: '住宿', price: 380, desc: '丽兹、乔治五世、克里翁三大宫殿酒店。水晶吊灯与下午茶，享乐主义的天花板。' },
  { id: 'frg_bnb', name: '左岸民宿阁楼', icon: '🏠', tag: '住', type: '住宿', price: 280, desc: '拉丁区老楼的顶层阁楼，铁艺阳台对着一棵百年椴树。清晨下楼买可颂，假装在巴黎住了十年。' },
  /* ---- 法式生活杂货 ---- */
  { id: 'frg_presse', name: '塞纳河旧书摊', icon: '📖', tag: '玩', type: '文创', price: 25, desc: '河边绿色铁箱里塞满二手书。老板是爱书人，聊起来能讲半小时——巴黎市府承认的"流动文化遗产"。' },
  { id: 'frg_jambon', name: '圣米歇尔贝壳饼', icon: '🥨', tag: '食', type: '特产', price: 30, desc: '诺曼底的贝壳形小黄油饼，酥皮掉渣。配下午茶是法国家庭日常，机场手信袋十块装带走。' },
  { id: 'frg_chocolat', name: '法式松露巧克力', icon: '🍫', tag: '食', type: '特产', price: 180, desc: '可可粉裹的圆形松露巧克力，融化在舌尖。玛颂之家的礼盒是"法国巧克力"的世界标准。' },
  { id: 'frg_confiture', name: '法式果酱礼盒', icon: '🍓', tag: '食', type: '特产', price: 120, desc: '草莓、覆盆子、杏子、黑加仑四种小罐装。涂在黄油面包上是法式早餐的固定节目。' }
);
