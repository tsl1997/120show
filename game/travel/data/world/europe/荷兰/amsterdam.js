/* ============ 荷兰·阿姆斯特丹 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'amsterdam',
    name: '阿姆斯特丹',
    country: '荷兰',
    cc: 'SCH',
    flag: '🇳🇱',
    region: '欧洲',
    hero: '🚲',
    desc: '北方威尼斯：165条运河围出半圆城，梵高的向日葵与《夜巡》，郁金香与自行车王国，黄金时代的自由之城。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6300 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'amsterdam_canal', name: '运河游船（Herengracht）', icon: '⛵', price: 120, desc: '2010年世界遗产运河带，山形墙房子歪歪斜斜。夜游灯光，"黄金时代的黄金水道"。' },
      { id: 'amsterdam_vangogh', name: '梵高博物馆', icon: '🌻', price: 150, desc: '梵高真迹最多：向日葵、杏花、自画像。从灰暗到明亮的十年，"用颜色燃烧的画家"。' },
      { id: 'amsterdam_rijks', name: '荷兰国立博物馆', icon: '🖼️', price: 150, desc: '伦勃朗《夜巡》专属展厅，维米尔《倒牛奶的女仆》。荷兰黄金时代的"国家相册"。' },
      { id: 'amsterdam_anne', name: '安妮·弗兰克故居', icon: '🕯️', price: 60, desc: '《安妮日记》的秘密附楼原址。书架后的暗门仍在，"人类黑暗与希望的记录"。' },
      { id: 'amsterdam_jordaan', name: '约旦区·九街', icon: '🛍️', price: 0, desc: '文艺街区：古着店、咖啡馆、 blk1 花市。辛格花市是"唯一的浮动花市"。' },
      { id: 'amsterdam_keukenhof', name: '库肯霍夫郁金香公园（3-5月）', icon: '🌷', price: 120, desc: '世界最大花园：700万株球茎花卉。郁金香田从空中看是"彩色条纹"，"春天的荷兰 = 花的海洋"。' },
      { id: 'amsterdam_zaanse', name: '赞斯堡风车村', icon: '🌬️', price: 90, desc: '绿色木屋风车群，芝士与木鞋工坊。风车还能磨颜料，"荷兰的明信片"。' },
    ],
    souvenirs: [
      { id: 'amsterdam_stroop', name: 'Stroopwafel 焦糖华夫', icon: '🧇', tag: '食', type: '特产', price: 30, desc: '两层薄华夫夹热糖浆，"放咖啡上蒸软更好吃"。Albert Heijn 超市版也好吃。' },
      { id: 'amsterdam_cheese', name: '豪达奶酪（Gouda）', icon: '🧀', tag: '食', type: '特产', price: 60, desc: '荷兰奶酪之王：陈年豪达"石锤敲击试音"。试吃到饱的奶酪店，"荷兰的味道"。' },
      { id: 'amsterdam_haring', name: '荷兰腌鲱鱼', icon: '🐟', tag: '食', type: '美食', price: 40, desc: '"Hollandse Nieuwe"提尾巴仰头生吞。配洋葱酸黄瓜，"荷兰人的国民小吃"。' },
      { id: 'amsterdam_tulip', name: '郁金香球茎', icon: '🌷', tag: '衣', type: '特产', price: 60, desc: '花市买球茎带回国（有检疫证明）。"郁金香狂热"的今天：一株球茎曾值一栋房。' },
      { id: 'amsterdam_clogs', name: '木鞋（Klompen）', icon: '🥾', tag: '衣', type: '服饰', price: 80, desc: '传统杨木鞋防水防砸，"农民的劳保鞋"。彩绘木鞋是"荷兰符号"。' },
      { id: 'amsterdam_delft', name: '代尔夫特蓝陶', icon: '🏺', tag: '衣', type: '文创', price: 120, desc: '"荷兰青花"：蓝白瓷风车与郁金香。皇家代尔夫特蓝陶工厂，"蓝陶的蓝色"。' },
      { id: 'amsterdam_bike', name: '运河骑行', icon: '🚲', tag: '行', type: '体验', price: 80, desc: '租自行车像荷兰人一样穿城。注意别走自行车道！"自行车比人多"。' },
      { id: 'amsterdam_boat', name: '私人小船巡河', icon: '🛶', tag: '玩', type: '体验', price: 250, desc: '租电动小船（不用驾照）自带酒水。从水面看运河房子，"阿姆斯特丹的正确打开方式"。' },
      { id: 'amsterdam_heineken', name: '喜力啤酒体验馆', icon: '🍺', tag: '玩', type: '体验', price: 150, desc: '老啤酒厂改的互动馆，含两杯鲜啤。" become the beer"的4D体验。' },
      { id: 'amsterdam_flower', name: '花市+风车村一日', icon: '🌷', tag: '玩', type: '体验', price: 150, desc: '花市买球茎+赞斯堡看风车。春天加库肯霍夫，"荷兰花式一日"。' },
      { id: 'amsterdam_minsu', name: '运河屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '运河边窄楼民宿，楼梯陡得像梯子。推窗就见游船，"住在明信片里"。' },
    ],
    stories: [
      { id: 'amsterdam_story_canal2', name: '运河是"绅士运河"', icon: '⛵', desc: 'Herengracht 意为"绅士运河"，黄金时代富商比豪宅。最贵的房至今"歪着"——地基是木桩。' },
      { id: 'amsterdam_story_tulip2', name: '郁金香狂热：一株房', icon: '🌷', desc: '1637年一株 Semper Augustus 球茎换一栋运河房。泡沫破裂史称"第一次金融泡沫"。' },
      { id: 'amsterdam_story_anne2', name: '安妮的"八小时"', icon: '🕯️', desc: '安妮一家藏了25个月后被告发。她日记的最后一篇停在被捕前三天，"15岁的声音改变世界"。' },
      { id: 'amsterdam_story_bike2', name: '自行车比人多', icon: '🚲', desc: '阿姆斯特丹88万辆自行车对82万人口。每年从运河捞起1.2万辆沉车，"自行车坟墓"。' },
      { id: 'amsterdam_story_vangogh2', name: '梵高只卖出一幅画', icon: '🌻', desc: '梵高生前只卖出《红色葡萄园》一幅画。弟弟提奥养他一生，如今他是荷兰的"国宝"。' },
      { id: 'amsterdam_story_delft2', name: '代尔夫特蓝的"中国血统"', icon: '🏺', desc: '17世纪荷兰模仿中国青花瓷失败，却发明了自己的蓝。"失败品的逆袭"。' },
    ],
  });
})();
