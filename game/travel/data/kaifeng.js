/* ============ 河南·开封 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kaifeng',
    name: '开封',
    country: '中国',
    cc: 'CN',
    province: '河南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏯',
    desc: '八朝古都、北宋东京：清明上河图的实景现场，一城宋韵半城水，灌汤包小笼夜市喧，大宋的烟火气从未熄灭。',
    travel: [{ name: '高铁', icon: '🚄', cost: 300 }, { name: '飞机', icon: '✈️', cost: 720 }],
    visa: null,
    spots: [
      { id: 'kaifeng_qingming', name: '清明上河园', icon: '🎨', price: 120, desc: '把《清明上河图》变成可以走进去的宋城。王员外招婿、包公迎宾、汴河大战实景演出，"大宋沉浸游"。' },
      { id: 'kaifeng_longting', name: '龙亭·天波杨府', icon: '🏛️', price: 45, desc: '六朝皇宫遗址上的龙亭大殿，潘杨二湖映忠奸。天波杨府讲杨家将满门忠烈，菊花展秋天满城。' },
      { id: 'kaifeng_tie', name: '铁塔·繁塔', icon: '🛕', price: 40, desc: '"天下第一塔"铁塔高55米，琉璃砖如铁色千年不倒。繁塔是全国罕见的六角形内六角形佛塔。' },
      { id: 'kaifeng_daxiangguo', name: '大相国寺', icon: '🛕', price: 40, desc: '鲁智深倒拔垂杨柳的地方，北宋皇家寺院。千手千眼观音像整棵银杏雕成，镇寺之宝。' },
      { id: 'kaifeng_gulou', name: '鼓楼夜市·西司夜市', icon: '🏮', price: 0, desc: '千年不熄的夜市灯火，"汴梁夜市从北宋摆到现在"。炒凉粉、羊肉炕馍、杏仁茶一路吃过去。' },
      { id: 'kaifeng_bao', name: '开封府·包公祠', icon: '⚖️', price: 65, desc: '"开封有个包青天"，开封府每天有包公断案演出。铡刀威风凛凛，"包青天"是开封的文化IP。' },
      { id: 'kaifeng_shanxi', name: '山陕甘会馆', icon: '🏛️', price: 30, desc: '清代商人会馆，木雕砖雕石雕"三绝"藏在深巷。一座牌楼七层镂空，"看不见的木匠功"。' },
    ],
    souvenirs: [
      { id: 'kaifeng_baozi', name: '灌汤包', icon: '🥟', tag: '食', type: '美食', price: 25, desc: '"先开窗、后喝汤、再吃皮"，第一楼灌汤包是祖师爷。提起来像灯笼，放下像菊花。' },
      { id: 'kaifeng_chao', name: '炒凉粉·羊肉炕馍', icon: '🥞', tag: '食', type: '美食', price: 15, desc: '夜市顶流：凉粉炒到焦壳浇蒜汁。羊肉炕馍薄脆油香，"开封夜市双雄"。' },
      { id: 'kaifeng_xingren', name: '杏仁茶·花生糕', icon: '🍮', tag: '食', type: '美食', price: 10, desc: '杏仁茶香甜暖胃，花生糕"一敲就碎"。传统木槌现场打糕，"开封的甜品手艺"。' },
      { id: 'kaifeng_tongzi', name: '桶子鸡·酱牛肉', icon: '🍗', tag: '食', type: '特产', price: 60, desc: '马豫兴桶子鸡百年老号，肥而不腻咸香入味。真空装是开封手信的"老字号担当"。' },
      { id: 'kaifeng_cai', name: '汴绣', icon: '🪡', tag: '衣', type: '文创', price: 150, desc: '汴绣以绣《清明上河图》闻名，针法细密。小幅汴绣书签与团扇，"绣出来的宋画"。' },
      { id: 'kaifeng_nianhua', name: '朱仙镇木版年画', icon: '🖼️', tag: '衣', type: '文创', price: 45, desc: '中国木版年画鼻祖，门神秦琼尉迟恭。朱仙镇年画作坊可亲手拓印一张门神。' },
      { id: 'kaifeng_qiu', name: '菊花文创', icon: '🌼', tag: '衣', type: '文创', price: 35, desc: '菊花茶、菊花枕与菊花冰箱贴。开封菊花甲天下，"把秋天泡进杯子"。' },
      { id: 'kaifeng_chuan', name: '大宋御河夜游', icon: '⛴️', tag: '行', type: '体验', price: 60, desc: '御河串起两岸宋式园林，画舫夜游灯影绰约。"桥桥有故事"，11座桥11种风情。' },
      { id: 'kaifeng_yan', name: '宋装换装游园', icon: '👘', tag: '玩', type: '体验', price: 150, desc: '清明上河园穿宋装看演出，投壶、射箭、打马球。"一天宋人"的完整体验。' },
      { id: 'kaifeng_she', name: '包公断案演出', icon: '⚖️', tag: '玩', type: '体验', price: 40, desc: '开封府"包公巡案"实景剧，威武——的喊堂声震天。游客可以当"原告"参与断案。' },
      { id: 'kaifeng_minsu', name: '四合院民宿', icon: '🏨', tag: '住', type: '住宿', price: 220, desc: '鼓楼附近的宋式民宿，夜市步行可达。夜里枕着叫卖声入睡，"大宋的烟火"。' },
    ],
    stories: [
      { id: 'kaifeng_story_cheng', name: '"城摞城"的奇观', icon: '🏛️', desc: '黄河水患一次次淹没开封，城市在原址重建六次。"开封城下摞着六座城"，考古奇观全国独一份。' },
      { id: 'kaifeng_story_yeshi', name: '夜市从北宋开始', icon: '🏮', desc: '北宋打破了"宵禁"，东京夜市通宵达旦。《东京梦华录》记录的州桥夜市，如今还在原地摆摊。' },
      { id: 'kaifeng_story_bao', name: '包青天为什么在开封', icon: '⚖️', desc: '包拯任开封府尹一年多，却成了"包青天"符号。铁面无私+皇权背景，戏剧让包公"活"了千年。' },
      { id: 'kaifeng_story_hua', name: '《清明上河图》的密码', icon: '🎨', desc: '张择端画了800多个人物、20多艘船。虹桥那一幕"船要撞桥"的惊险，是全画的高潮。' },
      { id: 'kaifeng_story_ju', name: '菊城的固执', icon: '🌼', desc: '开封人种菊上千年，每年十月满城菊展。"家家有菊、户户飘香"，菊花是城市性格。' },
      { id: 'kaifeng_story_gouzi', name: '灌汤包的"开封规矩"', icon: '🥟', desc: '吃灌汤包讲究"轻轻提、慢慢移、先开窗、后喝汤"。违规"爆汁烫嘴"，服务员会现场教学。' },
    ],
  });
})();
