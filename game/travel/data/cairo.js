/* ============ 埃及·开罗 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'cairo',
    name: '开罗',
    country: '埃及',
    cc: 'EG',
    flag: '🇪🇬',
    region: '非洲',
    hero: '🐪',
    desc: '尼罗河畔的七千年：金字塔在天际线上矗立四千五百年，骆驼与汽车共堵一条路，博物馆里的法老至今"睡着"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 300, note: '落地签或电子签（约25美元）' },
    spots: [
      { id: 'cairo_pyramids', name: '吉萨金字塔群', icon: '🔺', price: 120, desc: '胡夫金字塔四千五百年仍是"世界奇迹"。骆驼骑到沙漠高处看三塔同框，还能进墓道"猫腰探秘"。' },
      { id: 'cairo_sphinx', name: '狮身人面像', icon: '🦁', price: 0, desc: '73米长的守卫者沉默了四千年，"鼻子去哪了"至今是谜。清晨光线下最上镜，游客排队摸爪。' },
      { id: 'cairo_museum', name: '埃及博物馆·大埃及博物馆', icon: '🏺', price: 130, desc: '图坦卡蒙的黄金面具重11公斤，"全世界最著名的脸"。新馆落成后五千件文物同台，"法老全明星"。' },
      { id: 'cairo_nile', name: '尼罗河 felucca 帆船', icon: '⛵', price: 100, desc: '传统三角帆船漂在尼罗河上，看两岸城市慢慢滑过。日落时金光洒满河面，"七千年河流的下午"。' },
      { id: 'cairo_khan', name: '哈利利集市', icon: '🏮', price: 0, desc: '六百年的伊斯兰老市集，铜灯、纸莎草画、香料山。讨价还价是必修课，"砍到三折再成交"。' },
      { id: 'cairo_citadel', name: '萨拉丁城堡·雪花清真寺', icon: '🕌', price: 60, desc: '十二世纪的军事城堡俯瞰全城，雪花石膏清真寺在阳光下发光。塔顶看开罗的"千塔之城"天际线。' },
      { id: 'cairo_coptic', name: '科普特区·悬空教堂', icon: '⛪', price: 0, desc: '建在罗马要塞门楼上的教堂，玻璃地板下能看到"悬空"遗迹。圣乔治修道院与犹太会堂一步之遥。' },
    ],
    souvenirs: [
      { id: 'cairo_koshari', name: '库沙利', icon: '🍚', tag: '食', type: '美食', price: 25, desc: '米饭通心粉扁豆淋上番茄酱炸洋葱，"埃及国民快餐"。百年老店 Abou Tarek 一碗管饱。' },
      { id: 'cairo_kebab', name: '烤肉拼盘', icon: '🍖', tag: '食', type: '美食', price: 120, desc: '烤鸽子、烤肉串、烤饼与芝麻酱全家福。配"shai"红茶或薄荷茶，"尼罗河畔的晚宴"。' },
      { id: 'cairo_falafel', name: '法拉费·富勒', icon: '🧆', tag: '食', type: '美食', price: 20, desc: '蚕豆炸丸子夹在烤饼里，"埃及版早餐三明治"。街边一埃镑一个，配浓豆汤。' },
      { id: 'cairo_hibiscus', name: '洛神花茶', icon: '🌺', tag: '食', type: '饮品', price: 15, desc: '热饮"Karkade"酸红透亮，冰镇更佳。努比亚人的欢迎茶，"喝一口就上色"。' },
      { id: 'cairo_sugarcane', name: '甘蔗汁', icon: '🥤', tag: '食', type: '饮品', price: 10, desc: '现榨甘蔗汁三埃镑一大杯，甜到心口。开罗街头的"绿色加油站"。' },
      { id: 'cairo_baklava', name: '巴克拉瓦甜点', icon: '🍯', tag: '食', type: '美食', price: 40, desc: '果仁蜂蜜千层酥，甜得像法老的金子。老城甜点店一盒十块，"甜品界的金字塔"。' },
      { id: 'cairo_papyrus', name: '纸莎草画', icon: '📜', tag: '衣', type: '文创', price: 100, desc: '真的纸莎草纸画用火山石压花，"古埃及的纸"。看店员现场压制，图坦卡蒙的猎鹰图案最经典。' },
      { id: 'cairo_cartouche', name: '刻名银卡托什', icon: '🔗', tag: '衣', type: '文创', price: 180, desc: '把你的名字译成象形文字刻在银牌上。老城区银匠现场刻，"法老同款护照"。' },
      { id: 'cairo_perfume', name: '香精油', icon: '🌸', tag: '衣', type: '特产', price: 150, desc: '莲花香、茉莉香未稀释香精，"香水的祖先"。名牌香水的前调其实都来自埃及配方。' },
      { id: 'cairo_carpet', name: '手工地毯与驼毛毯', icon: '🧶', tag: '衣', type: '特产', price: 350, desc: '村落地毯学校孩子手织的挂毯，图案是法老与 Nile。驼毛毯冬天暖到"不许人离开"。' },
      { id: 'cairo_camel', name: '金字塔骆驼骑行', icon: '🐪', tag: '玩', type: '体验', price: 150, desc: '骆驼起立的"前后摇晃"先适应一下，骑到沙丘制高点。看金字塔"三塔一线"，"法老视角"。' },
      { id: 'cairo_hotel', name: '金字塔景酒店', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '泳池边就能看见金字塔，"开门见法老"。清晨阳台上金字塔独享，避开人潮。' },
    ],
    stories: [
      { id: 'cairo_story_pyramid', name: '金字塔的"十万工匠"', icon: '🔺', desc: '考古发现金字塔由雇工而非奴隶建造，工人村遗址有面包房与啤酒坊。"领工资建奇迹"刷新认知。' },
      { id: 'cairo_story_sphinx_nose', name: '狮身人面像的鼻子之谜', icon: '🦁', desc: '流行说法是被炮弹打掉，史学家考证是十四世纪被人为凿毁。四千年风沙都没能磨平它的微笑。' },
      { id: 'cairo_story_mask', name: '黄金面具的"修复事故"', icon: '👑', desc: '图坦卡蒙黄金面具的胡子曾被工作人员意外碰断，用环氧胶粘回引发争议。三千年的脸，" modern 的裂缝"。' },
      { id: 'cairo_story_khan', name: '集市的"茶水外交"', icon: '🍵', desc: '开罗店主谈生意前必先请茶，拒绝等于不礼貌。喝完三杯薄荷茶，价格反而谈下来了。' },
      { id: 'cairo_story_traffic', name: '开罗的"喇叭交响乐"', icon: '🚗', desc: '两千万人口的城市堵车时喇叭齐鸣，变道靠"默契"。本地司机说：喇叭是我们的第二语言。' },
      { id: 'cairo_story_nile', name: '尼罗河的"泛滥节"', icon: '🌊', desc: '古埃及人庆祝尼罗河泛滥带来沃土，"泛滥是恩赐"。阿斯旺大坝后水位稳定，节日成了文化记忆。' },
    ],
  });
})();
