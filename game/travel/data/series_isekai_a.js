/* ============ 主题收藏系列·异世界作品联动（火影/海贼/柯南） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({
    id: 'sr_hokage', cat: 'anime', name: '历代火影系列（火影忍者）', years: '2002-至今', author: '岸本齐史', theme: '木叶村火影传承收藏',
    background: '"木叶飞舞之处，火亦生生不息。"从千手柱间与宇智波斑共创木叶开始，火影之位承载着村子的意志。每一代火影都是一段忍界的历史。',
    story: '吊车尾鸣人从火影岩下仰望各位前辈，最终自己也成为第七代火影被刻上岩壁——梦想的接力棒。',
    protagonist: '历代七位火影', slogan: '火之意志，代代相传。',
    cities: ['isekai_naruto'],
    items: [
      { id: 'hkg_1', name: '初代火影·千手柱间（木叶创村）', type: '火影卡', city: 'isekai_naruto', price: 300, desc: '"忍者之神"，木遁的持有者，与斑共创木叶村。' },
      { id: 'hkg_2', name: '二代火影·千手扉间（制度之父）', type: '火影卡', city: 'isekai_naruto', price: 240, desc: '水遁宗师，飞雷神与影分身的开发者，忍者制度奠基人。' },
      { id: 'hkg_3', name: '三代火影·猿飞日斩（忍术教授）', type: '火影卡', city: 'isekai_naruto', price: 220, desc: '历代火影在位最久的"教授"，火之意志的传道者。' },
      { id: 'hkg_4', name: '四代火影·波风水门（黄色闪光）', type: '火影卡', city: 'isekai_naruto', price: 260, desc: '飞雷神与螺旋丸的天才，九尾之乱以命封印救村。' },
      { id: 'hkg_5', name: '五代火影·纲手（传说中的大肥羊）', type: '火影卡', city: 'isekai_naruto', price: 240, desc: '初代孙女，百豪之术与怪力，佩恩之战守护全村。' },
      { id: 'hkg_6', name: '六代火影·旗木卡卡西（复制忍者）', type: '火影卡', city: 'isekai_naruto', price: 250, desc: '写轮眼的非宇智波持有者，第四次忍界大战后的过渡之主。' },
      { id: 'hkg_7', name: '七代火影·漩涡鸣人（梦想成真）', type: '火影卡', city: 'isekai_naruto', price: 320, desc: '"我可是要成为火影的男人！"——吊车尾的忍道终点。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_strawhat', cat: 'anime', name: '草帽海贼团伙伴系列（航海王）', years: '1999-至今', author: '尾田荣一郎', theme: '十人伙伴徽章收藏',
    background: '一顶草帽串起的羁绊：船长、剑士、航海士、狙击手、厨师、船医、考古学家、船匠、音乐家、舵手——"没有船长的命令决不后退"。',
    story: '从东海的小帆船到新世界的万里阳光号，十面旗帜在同一片桅杆下飘扬。',
    protagonist: '蒙奇·D·路飞与伙伴们', slogan: '我们是伙伴！',
    cities: ['isekai_onepiece'],
    items: [
      { id: 'stw_1', name: '船长·草帽路飞', type: '伙伴徽章', city: 'isekai_onepiece', price: 150, desc: '"我是要成为海贼王的男人！"橡胶果实的第五位皇帝。' },
      { id: 'stw_2', name: '剑士·罗罗诺亚·索隆', type: '伙伴徽章', city: 'isekai_onepiece', price: 140, desc: '三刀流与"世界第一剑豪"的修行——鹰眼的弟子。' },
      { id: 'stw_3', name: '航海士·娜美', type: '伙伴徽章', city: 'isekai_onepiece', price: 130, desc: '"用身体感受天气的天才"，画出世界地图的梦想。' },
      { id: 'stw_4', name: '狙击手·乌索普', type: '伙伴徽章', city: 'isekai_onepiece', price: 120, desc: '"狙击王"的弹弓与八千部下的谎言。' },
      { id: 'stw_5', name: '厨师·山治', type: '伙伴徽章', city: 'isekai_onepiece', price: 130, desc: '"饿肚子的人就要给饭吃"——ALL BLUE 的追梦厨师。' },
      { id: 'stw_6', name: '船医·乔巴', type: '伙伴徽章', city: 'isekai_onepiece', price: 120, desc: '"什么病都能治的医生"，蓝波球的七段变形驯鹿。' },
      { id: 'stw_7', name: '考古学家·罗宾', type: '伙伴徽章', city: 'isekai_onepiece', price: 140, desc: '"我想活下去！"——历史正文的唯一解读者。' },
      { id: 'stw_8', name: '船匠·弗兰奇', type: '伙伴徽章', city: 'isekai_onepiece', price: 130, desc: '"超级——！！"可乐驱动的改造人与桑尼号之父。' },
      { id: 'stw_9', name: '音乐家·布鲁克', type: '伙伴徽章', city: 'isekai_onepiece', price: 120, desc: '"灵魂之王"的骷髅小提琴，与拉布的五十年之约。' },
      { id: 'stw_10', name: '舵手·甚平', type: '伙伴徽章', city: 'isekai_onepiece', price: 140, desc: '"海侠甚平"入团——鱼人空手道与把心托付给信任。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_detectiveboys', cat: 'anime', name: '少年侦探团系列（名侦探柯南）', years: '1994-至今', author: '青山刚昌', theme: '帝丹小学1年B班侦探团收藏',
    background: '阿笠博士特制徽章串联的五人组：柯南、灰原、步美、光彦、元太。徽章内置通讯器与发信器，是"案件发生率全日本第一"的米花町小小守护者。',
    story: '"犯人就在我们中间！"——平均年龄不到十岁的侦探团，破案率却高得吓人。',
    protagonist: '江户川柯南与少年侦探团', slogan: '真相永远只有一个！',
    cities: ['isekai_conan'],
    items: [
      { id: 'dtb_1', name: '团长·江户川柯南', type: '团徽', city: 'isekai_conan', price: 200, desc: '"身体变小，头脑不变"——藏在小学生身体里的名侦探。' },
      { id: 'dtb_2', name: '成员·灰原哀', type: '团徽', city: 'isekai_conan', price: 180, desc: 'APTX4869的发明者，代号雪莉的叛逃科学家——冷面毒舌的温柔少女。' },
      { id: 'dtb_3', name: '成员·吉田步美', type: '团徽', city: 'isekai_conan', price: 120, desc: '"柯南君最帅气了！"团里的勇气担当。' },
      { id: 'dtb_4', name: '成员·圆谷光彦', type: '团徽', city: 'isekai_conan', price: 120, desc: '百科全书式的小学者，"以大人的视角推理"的天才儿童。' },
      { id: 'dtb_5', name: '成员·小岛元太', type: '团徽', city: 'isekai_conan', price: 110, desc: '"鳗鱼饭最大！"单细胞正义感队长自封。' },
      { id: 'dtb_6', name: '装备·侦探徽章', type: '团徽', city: 'isekai_conan', price: 150, desc: '通讯+发信+窃听的集合神器，阿笠博士出品。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_codename', cat: 'anime', name: '黑衣组织代号系列（名侦探柯南）', years: '1994-至今', author: '青山刚昌', theme: '酒名代号收藏',
    background: '半世纪前由"那位大人"乌丸莲耶创立的黑暗组织，成员一律以酒名为代号。琴酒、伏特加、贝尔摩德、波本、基尔……每个人都藏着三重身份。',
    story: '"我们是创造这个时代的人"——组织与FBI、公安、柯南的暗战贯穿二十余年。',
    protagonist: '黑衣组织全员', slogan: '神秘感让女人更有女人味。',
    cities: ['isekai_conan'],
    items: [
      { id: 'cdn_1', name: '琴酒（Gin）', type: '代号卡', city: 'isekai_conan', price: 260, desc: '银发冷血的核心执行者，让新一吃药变小的人。' },
      { id: 'cdn_2', name: '伏特加（Vodka）', type: '代号卡', city: 'isekai_conan', price: 180, desc: '琴酒的墨镜搭档，"大哥"挂嘴边的忠实跟班。' },
      { id: 'cdn_3', name: '贝尔摩德（Vermouth）', type: '代号卡', city: 'isekai_conan', price: 240, desc: '不老的女演员莎朗，"A secret makes a woman woman"。' },
      { id: 'cdn_4', name: '波本（Bourbon）=安室透', type: '代号卡', city: 'isekai_conan', price: 240, desc: '公安警察降谷零的三重潜伏——组织/咖啡厅/公安。' },
      { id: 'cdn_5', name: '基尔（Kir）=水无怜奈', type: '代号卡', city: 'isekai_conan', price: 200, desc: 'CIA卧底本堂瑛海，"基尔作战"的双面间谍。' },
      { id: 'cdn_6', name: '朗姆（Rum）=胁田兼则', type: '代号卡', city: 'isekai_conan', price: 280, desc: '组织二把手，寿司店独眼主厨——"三只眼睛"的谜。' },
      { id: 'cdn_7', name: '雪莉（Sherry）=灰原哀', type: '代号卡', city: 'isekai_conan', price: 260, desc: 'APTX4869的天才科学家，叛逃组织后的新人生。' },
      { id: 'cdn_8', name: '莱伊（Rye）=赤井秀一', type: '代号卡', city: 'isekai_conan', price: 260, desc: 'FBI王牌的卧底代号，"银色子弹"的狙击手。' },
    ]
  });
})();
