/* ============ 马来西亚·吉隆坡 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kualalumpur',
    name: '吉隆坡',
    country: '马来西亚',
    cc: 'MY',
    flag: '🇲🇾',
    region: '东南亚',
    hero: '🕌',
    desc: '双塔之下的多元之城：清真寺圆顶、印度庙彩塔、华人骑楼在同一街角相遇，榴莲香与肉骨茶汤气一起升腾。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1900 }],
    visa: { cost: 0, note: '中马互免签证（停留不超过30天）' },
    spots: [
      { id: 'kualalumpur_petronas', name: '双子塔', icon: '🏙️', price: 60, desc: '全球最高的双塔楼，41层的空中天桥悬在170米高空。夜里塔身灯光亮起，全城的抬头率百分之百。' },
      { id: 'kualalumpur_batucaves', name: '黑风洞', icon: '🕳️', price: 0, desc: '272级彩虹阶梯通向巨大石灰岩溶洞，金色战神穆鲁甘像守在门口。洞里的猴子是"惯犯"，看好眼镜和零食。' },
      { id: 'kualalumpur_merdeka', name: '独立广场·苏丹大厦', icon: '🏁', price: 0, desc: '1957年马来西亚国旗在这里首次升起。摩尔式圆顶建筑配绿草坪，手一挥就是殖民与独立的百年对照。' },
      { id: 'kualalumpur_masjid_jamek', name: '国家清真寺', icon: '🕌', price: 0, desc: '18角星形屋顶象征国家13州与伊斯兰五功。免费参观，长袍头巾免费借穿，是了解马来文化的温柔窗口。' },
      { id: 'kualalumpur_bukit_bintang', name: '武吉免登·茨厂街', icon: '🛍️', price: 0, desc: '黄金三角购物区连着百年唐人街。夜市炒粿条香气、盗版碟吆喝声和霓虹灯牌一起，热闹得理直气壮。' },
      { id: 'kualalumpur_batu_town', name: '吉隆坡塔·咖啡山', icon: '🗼', price: 45, desc: '世界第七高通讯塔，旋转餐厅转一圈看尽全城。塔下的原始雨林保护区，城市中心藏着一条绿肺步道。' },
      { id: 'kualalumpur_klang', name: '巴生河与老火车站', icon: '🚉', price: 0, desc: '摩尔式白色老火车站像童话城堡，百年前就通电气铁路。对面的佳密清真寺在两河交汇处，钟楼是城市原点。' },
    ],
    souvenirs: [
      { id: 'kualalumpur_nasi', name: '椰浆饭', icon: '🍛', tag: '食', type: '美食', price: 15, desc: '椰浆蒸饭配参巴辣酱、炸江鱼仔、花生和溏心蛋。"国民早餐"从路边摊吃到飞机餐，辣酱是灵魂。' },
      { id: 'kualalumpur_bakuteh', name: '肉骨茶', icon: '🍲', tag: '食', type: '美食', price: 40, desc: '当归党参炖排骨汤浓到发黑，配油条蘸汤。巴生肉骨茶是"药膳派"，一碗下肚浑身发热。' },
      { id: 'kualalumpur_satay', name: '沙爹烤串', icon: '🍢', tag: '食', type: '美食', price: 25, desc: '腌好的鸡肉串炭火烤香，蘸花生酱汁。街头夜市的烟熏味能飘三条街，配黄瓜片和洋葱解腻。' },
      { id: 'kualalumpur_roti', name: '印度飞饼', icon: '🥞', tag: '食', type: '美食', price: 12, desc: '印度师傅把面团甩到薄如纸，煎脆配咖喱汁。 Teh Tarik"拉茶"一起点，看师傅拉出泡沫才完整。' },
      { id: 'kualalumpur_durian', name: '猫山王榴莲', icon: '🤢', tag: '食', type: '美食', price: 100, desc: '马来西亚"果王之王"，苦甜回甘。SS2榴莲摊论盒卖，老板教你"闻屁股"挑果的玄学。' },
      { id: 'kualalumpur_white_coffee', name: '怡保白咖啡', icon: '☕', tag: '食', type: '饮品', price: 20, desc: '低温烘培的咖啡不苦涩，奶香顺滑。旧街场白咖啡一条街，铁罐装是回家手信。' },
      { id: 'kualalumpur_teh_tarik', name: '拉茶', icon: '🧋', tag: '食', type: '饮品', price: 10, desc: '红茶与炼乳从杯到杯"拉"出泡沫。印度师傅手臂拉出彩虹弧线，看表演免费、喝茶便宜。' },
      { id: 'kualalumpur_batik', name: '巴迪蜡染布', icon: '🎨', tag: '衣', type: '文创', price: 70, desc: '马来西亚蜡染花布，热带花鸟图案色彩浓烈。做成衬衫、桌布、手包，国礼级别工艺品。' },
      { id: 'kualalumpur_pewter', name: '锡器·白锡杯', icon: '🥛', tag: '衣', type: '文创', price: 120, desc: '皇家雪兰莪锡器工坊，全球最大锡矿文明的手艺传承。一只锡杯冰镇啤酒更爽口，刻字定制是热门。' },
      { id: 'kualalumpur_kltower', name: '天空之盒·高空观景', icon: '🌆', tag: '玩', type: '体验', price: 55, desc: '双子塔对面的"天空之盒"玻璃观景台，脚下就是全城。拍"悬浮"照是标配，恐高者请看远方。' },
      { id: 'kualalumpur_klcc_park', name: '城中城公园喷泉夜跑', icon: '⛲', tag: '玩', type: '体验', price: 0, desc: '双子塔脚下的绿洲，晚上喷泉配音乐。免费看塔灯熄灭仪式，本地人跑步遛娃两不误。' },
      { id: 'kualalumpur_ktm', name: 'KTM电动火车体验', icon: '🚆', tag: '行', type: '体验', price: 10, desc: '百年铁路系统穿城过海，票价亲民。去巴生吃肉骨茶、去黑风洞拜神，一张票搞定。' },
      { id: 'kualalumpur_hotel', name: '双子塔景酒店', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '吉隆坡五星酒店性价比惊人，双塔景房两百多新元。泡着浴缸看塔灯闪烁，热带夜晚刚刚好。' },
    ],
    stories: [
      { id: 'kualalumpur_story_twin', name: '双塔的"国家竞赛"', icon: '🏙️', desc: '双子塔1998年建成时是全球最高楼，塔尖高度之争至今被马来西亚人骄傲提起。两座塔由一条天桥相连，象征"团结"。' },
      { id: 'kualalumpur_story_rainbow', name: '彩虹阶梯的"走红"', icon: '🌈', desc: '黑风洞的阶梯2018年刷成彩虹色，瞬间成为网红打卡点。印度教圣地配彩虹台阶，和谐得毫无违和。' },
      { id: 'kualalumpur_story_monkey', name: '猴子的"打工"日常', icon: '🐒', desc: '黑风洞的猕猴会"拦路抢劫"零食和墨镜，管理员用弹弓温柔驱赶。游客攻略第一条：别提塑料袋。' },
      { id: 'kualalumpur_story_mamak', name: 'Mamak档的深夜食堂', icon: '🌙', desc: '印度穆斯林开的Mamak档通宵营业，足球赛夜场座无虚席。拉茶配飞饼，是马来西亚人的"夜生活仪式"。' },
      { id: 'kualalumpur_story_durian_museum', name: '榴莲也分级', icon: '🤢', desc: '马来西亚人把榴莲按品种"赛马"：D24、D101、猫山王各领风骚。本地人教你听声辨熟、闻香识果。' },
      { id: 'kualalumpur_story_tin', name: '锡矿上的首都', icon: '⛏️', desc: '吉隆坡因1857年发现锡矿而兴起，"泥泞河口"就是它的马来语原意。如今国家博物馆里还躺着当年的锡镐。' },
    ],
  });
})();
