/* ============ 湖北·襄阳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xiangyang',
    name: '襄阳',
    country: '中国',
    cc: 'CN',
    province: '湖北',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏰',
    desc: '华夏第一城池：汉江穿城而过，铁打的襄阳城墙守护着三国与金庸笔下的侠气，一碗牛肉面配黄酒唤醒清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 170 }, { name: '汽车', icon: '🚌', cost: 100 }],
    visa: null,
    spots: [
      { id: 'xiangyang_gulongzhong', name: '古隆中', icon: '⛰️', price: 78, desc: '诸葛亮躬耕十年的地方，"三顾茅庐""隆中对"都发生在这里。草庐、躬耕田与武侯祠，一步一景都是三国现场。' },
      { id: 'xiangyang_chengqiang', name: '襄阳古城墙', icon: '🧱', price: 0, desc: '"铁打的襄阳"，华夏最宽的护城河平均宽180米。临汉门城楼扼守汉江，城砖上还留着历代修补的铭文。' },
      { id: 'xiangyang_tangcheng', name: '唐城景区', icon: '🏯', price: 90, desc: '为《妖猫传》而建的影视城，朱雀门与大青龙寺气势恢宏。夜游灯会时穿汉服进去，一秒梦回大唐。' },
      { id: 'xiangyang_hanshui', name: '汉江夜游', icon: '🌉', price: 60, desc: '乘游船看两岸灯光，一江碧水穿城过。北岸樊城、南岸襄阳，"南船北马、七省通衢"的码头气派。' },
      { id: 'xiangyang_mizishi', name: '米公祠', icon: '🖌️', price: 25, desc: '书法大家米芾的祠堂，碑刻满廊。"米颠拜石"的典故就在这里，爱好书法的人能看一整天。' },
      { id: 'xiangyang_lumen', name: '鹿门寺', icon: '🍃', price: 40, desc: '孟浩然隐居地，"鹿门月照开烟树"。山林幽深，唐代田园诗的灵感源头，适合半日静走。' },
      { id: 'xiangyang_beijie', name: '北街·管家巷', icon: '🏮', price: 0, desc: '昭明台下的千年老街，美食与文创小店连排。傍晚灯笼亮起，牛肉面馆和黄酒铺子挤满人。' },
    ],
    souvenirs: [
      { id: 'xiangyang_niuroumian', name: '襄阳牛肉面', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '一辣二麻三鲜，牛油汤底厚到挂面。配一碗黄酒，"牛肉面配黄酒，神仙来了也不走"。' },
      { id: 'xiangyang_huangjiu', name: '襄阳黄酒', icon: '🍶', tag: '食', type: '饮品', price: 10, desc: '乳白色米酒甜中带劲，本地人清晨配面喝。"早酒文化"全国罕见，喝的是一天的底气。' },
      { id: 'xiangyang_kongcaifan', name: '孔明菜（襄阳大头菜）', icon: '🥬', tag: '食', type: '特产', price: 20, desc: '传说诸葛亮隆中隐居时腌制的咸菜，脆咸耐嚼。配稀饭下面条，是襄阳人的"万能配菜"。' },
      { id: 'xiangyang_baozi', name: '清汤（襄阳馄饨）', icon: '🥟', tag: '食', type: '美食', price: 10, desc: '皮薄如纱的馄饨撒虾皮紫菜，汤清味鲜。夜宵界的温柔担当，配锅盔刚好。' },
      { id: 'xiangyang_yizhou', name: '宜城盘鳝', icon: '🦐', tag: '食', type: '美食', price: 58, desc: '整条鳝鱼盘成卷焖酥，"楚地一绝"。考验吃法技巧，会吃的人连骨头都嚼出香味。' },
      { id: 'xiangyang_hupi', name: '金刚酥', icon: '🥠', tag: '食', type: '美食', price: 8, desc: '炉烤的硬面饼"掉在地上不碎"，越嚼越香。老襄阳的干粮记忆，配黄酒是隐藏吃法。' },
      { id: 'xiangyang_chash', name: '汉江银鱼·鱼干', icon: '🐟', tag: '食', type: '特产', price: 45, desc: '汉江特产银鱼透明细嫩，鱼干咸香耐存。江鲜的"浓缩版"，下饭下酒都合适。' },
      { id: 'xiangyang_kongming_wenxue', name: '诸葛文创', icon: '🧑‍🌾', tag: '衣', type: '文创', price: 40, desc: '"智圣"诸葛亮羽毛扇、Q版孔明手办与《出师表》卷轴书签。古隆中出来的"智慧伴手礼"。' },
      { id: 'xiangyang_jinYong', name: '金庸武侠文创', icon: '🗡️', tag: '衣', type: '文创', price: 50, desc: '郭靖黄蓉守襄阳的故事做成书签与折扇。武侠迷的朝圣纪念品，"侠之大者"随身带。' },
      { id: 'xiangyang_hanchuan_boat', name: '汉江游船', icon: '🛥️', tag: '行', type: '体验', price: 60, desc: '夜航汉江看两岸灯火与古城楼。江风拂面，"一城两岸三镇"的格局尽收眼底。' },
      { id: 'xiangyang_hanfu_tang', name: '唐城汉服夜游', icon: '👘', tag: '玩', type: '体验', price: 150, desc: '穿汉服入唐城看夜景演出，灯光把朱雀门染成金色。满城"唐人"同游，出片率极高。' },
      { id: 'xiangyang_gongfu', name: '襄阳武术体验', icon: '🥋', tag: '玩', type: '体验', price: 80, desc: '襄阳自古兵家必争，民间尚武。跟着老师傅扎马步学两招，感受"铁打襄阳"的气场。' },
      { id: 'xiangyang_minsu', name: '古城江景民宿', icon: '🏨', tag: '住', type: '住宿', price: 220, desc: '临汉门附近的江景民宿，夜里城楼亮灯。清晨被牛肉面香气叫醒，下楼就是北街。' },
    ],
    stories: [
      { id: 'xiangyang_story_guojing', name: '金庸笔下的襄阳', icon: '🗡️', desc: '《射雕》《神雕》里郭靖黄蓉死守襄阳数十年。襄阳城为金庸立了射雕雕像，武侠迷的朝圣地。' },
      { id: 'xiangyang_story_sanguo', name: '三顾茅庐现场', icon: '🏔️', desc: '刘备三次到隆中请诸葛亮，"卧龙"从此出山。古隆中至今保存躬耕田与草庐遗址，三国迷必到。' },
      { id: 'xiangyang_story_zaojiu', name: '早酒文化', icon: '🌅', desc: '襄阳人早晨喝黄酒配牛肉面，"早酒"全国罕见。老街面馆里，清晨六点就有人拎着酒壶开喝。' },
      { id: 'xiangyang_story_tietie', name: '铁打的襄阳', icon: '🏰', desc: '襄阳古城墙历经200多次战事而不破，蒙古大军围攻六年才攻下。护城河最宽处250米，"华夏第一城池"。' },
      { id: 'xiangyang_story_mishifu', name: '米芾"颠"出书法史', icon: '🖌️', desc: '米芾痴迷奇石见石就拜，人称"米颠"。他的"刷字"笔法自成一派，米公祠碑廊里全是真迹刻石。' },
      { id: 'xiangyang_story_yumi', name: '《妖猫传》的唐城', icon: '🎬', desc: '陈凯歌为拍《妖猫传》在襄阳建了整座唐城，一建六年。电影拍完城留下，如今是网红夜游地。' },
    ],
  });
})();
