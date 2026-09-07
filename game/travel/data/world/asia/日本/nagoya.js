/* ============ 日本·名古屋 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nagoya',
    name: '名古屋',
    country: '日本',
    cc: 'JP',
    flag: '🇨🇳',
    region: '日本·中部',
    hero: '🏯',
    desc: '中部霸主·"大名的厨房"：名古屋城的金鯱闪耀，味噌猪排与鳗鱼三吃自成一派，丰田汽车城的工业心脏在这里跳动。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2200 }, { name: '飞机', icon: '✈️', cost: 2400 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'nagoya_castle', name: '名古屋城', icon: '🏯', price: 30, desc: '德川家康的"天下名城"，金鯱（金虎鱼）闪耀屋脊。本丸御障壁画金碧辉煌，"日本三名城"之一。' },
      { id: 'nagoya_atsuta', name: '热田神宫', icon: '⛩️', price: 0, desc: '供奉三大神器之一"草薙剑"的古老神社。宝物馆藏有织田信长捐赠的屏风。' },
      { id: 'nagoya_osu', name: '大须商业街', icon: '🛍️', price: 0, desc: '四百年的商店街，古着、电器、神社混搭。"名古屋的秋叶原"，飞快丸与庸coste 咖啡店。' },
      { id: 'nagoya_scmland', name: '乐高乐园·吉卜力公园', icon: '🎢', price: 350, desc: '亚洲首座乐高乐园，吉卜力公园"龙猫"实景。爱·地球博纪念公园的"哈尔的移动城堡"区超梦幻。' },
      { id: 'nagoya_toyotamuseum', name: '丰田产业技术纪念馆', icon: '🚗', price: 30, desc: '从织布机到汽车的"制造之魂"。机器人演奏小提琴演示，工业迷朝圣地。' },
      { id: 'nagoya_tvtower', name: '绿洲21·名古屋电视塔', icon: '🌆', price: 0, desc: '水之宇宙船玻璃顶广场如飞碟。夜灯下电视塔倒映，"名古屋的现代封面"。' },
      { id: 'nagoya_inuyama', name: '犬山城·明治村', icon: '🏯', price: 60, desc: '日本现存最古老天守（1534年）。博物馆明治村搬来真迹建筑，"建筑界的迪士尼"。' },
    ],
    souvenirs: [
      { id: 'nagoya_misokatsu', name: '味噌猪排', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '红味噌酱浇得厚厚的炸猪排，"名古屋饭"的代表。矢场味噌酱微甜浓香。' },
      { id: 'nagoya_unadon', name: '鳗鱼三吃', icon: '🐟', tag: '食', type: '美食', price: 180, desc: '一碗鳗鱼饭三种吃法：原味、加料、茶泡饭。蓬莱轩的"元祖鳗鱼三吃"百年不衰。' },
      { id: 'nagoya_teppan', name: '味噌煮乌冬·台湾拉面', icon: '🍜', tag: '食', type: '美食', price: 50, desc: '土手煮与味噌煮乌冬热气腾腾。"台湾拉面"其实是名古屋发明，辣得过瘾。' },
      { id: 'nagoya_hatcho', name: '八丁味噌', icon: '🫘', tag: '食', type: '特产', price: 35, desc: '爱知八丁味噌酿造两年，"豆味噌之王"。炖菜与煮乌冬的灵魂。' },
      { id: 'nagoya_kishimen', name: 'きしめん（宽扁面）', icon: '🍝', tag: '食', type: '美食', price: 30, desc: '名古屋的"扁面条"，滑溜入口。新干线上就能吃到，"车内名物"。' },
      { id: 'nagoya_chicken', name: '手羽先（鸡翅尖）', icon: '🍗', tag: '食', type: '美食', price: 45, desc: '世界の山酱甜辣鸡翅，"舔手指级别"。配啤酒是名古屋夜宵。' },
      { id: 'nagoya_golden', name: '金鯱文创', icon: '🐟', tag: '衣', type: '文创', price: 50, desc: '金鯱巧克力、金色摆件、城印章。"名古屋城"的金色符号，游客必买。' },
      { id: 'nagoya_le', name: '乐高/吉卜力文创', icon: '🧱', tag: '衣', type: '文创', price: 90, desc: '乐高限定名古屋城积木、吉卜力龙猫毛绒。"爱知两大乐园"的周边宇宙。' },
      { id: 'nagoya_toyotamodel', name: '丰田车模·引擎摆件', icon: '🚙', tag: '衣', type: '文创', price: 80, desc: '丰田博物馆限定车模与GT跑车模型。"制造之国"爱知的机械浪漫。' },
      { id: 'nagoya_scml', name: '乐高乐园一日', icon: '🎢', tag: '玩', type: '体验', price: 350, desc: '亚洲首座乐高乐园，"迷你名古屋"积木城市。儿童驾驶学校拿到"驾照"超有成就感。' },
      { id: 'nagoya_gibli', name: '吉卜力公园巡礼', icon: '🌳', tag: '玩', type: '体验', price: 400, desc: '龙猫之森、魔女之谷、幽灵之里三园区。真实大小的"哈尔移动城堡"头部，宫崎骏迷的终极圣地。' },
      { id: 'nagoya_toyota_tour', name: '丰田工厂参观', icon: '🏭', tag: '玩', type: '体验', price: 0, desc: '免费参观元町工厂总装线。机械臂焊接火花四溅，"世界级制造现场"。' },
      { id: 'nagoya_minsu', name: '名古屋站前酒店', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '名古屋站直达酒店，交通枢纽级便利。楼下的味噌煮乌冬深夜营业。' },
    ],
    stories: [
      { id: 'nagoya_story_kinshachi', name: '金鯱的"黄金传说"', icon: '🐟', desc: '城顶一对金鯱用真金包裹，江户时代价值"城下町数年税收"。松坂屋百货的金鯱装饰，就是城徽的延伸。' },
      { id: 'nagoya_story_taiwan', name: '"台湾拉面"是名古屋发明', icon: '🍜', desc: '1970年代名古屋台湾料理店主把家乡辣味加进拉面。台湾本地反而没有，"误会成就的名物"。' },
      { id: 'nagoya_story_toyota', name: '从织布机到汽车', icon: '🚗', desc: '丰田创始人丰田佐吉先发明自动织布机，儿子喜一郎转做汽车。"祖宗是做纺织的"冷知识。' },
      { id: 'nagoya_story_unagi', name: '鳗鱼三吃的"仪式"', icon: '🐟', desc: '第一吃原味、第二吃加葱海苔、第三吃茶泡饭。三种口感一气呵成，"名古屋人的待客骄傲"。' },
      { id: 'nagoya_story_gibli', name: '吉卜力公园的"实景野心"', icon: '🌳', desc: '公园不建新内容，全部"还原电影场景"。龙猫真的站在小月梅雨林的巴士站旁。' },
      { id: 'nagoya_story_inuyama', name: '最古老天守的"活体"', icon: '🏯', desc: '犬山城天守是国宝级现存最古天守（1534年）。木楼梯陡得像梯子，爬上去就"穿越战国"。' },
    ],
  });
})();
