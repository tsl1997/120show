/* ============ 江苏·扬州 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yangzhou',
    name: '扬州',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌸',
    desc: '"烟花三月下扬州"：瘦西湖的二十四桥明月夜，早茶 culture 一吃半天，三把刀的技艺，慢城扬州把生活过成了诗。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: [
      { id: 'yangzhou_shouxihu', name: '瘦西湖', icon: '🌸', price: 100, desc: '"两堤花柳全依水，一路楼台直到山"。五亭桥像莲花绽放，二十四桥"玉人吹箫"，春天柳絮如烟。' },
      { id: 'yangzhou_geru', name: '个园', icon: '🎍', price: 45, desc: '以竹得名的盐商园林，四季假山一园看尽春夏秋冬。宣石冬山"积雪"效果，江南园林的独一份。' },
      { id: 'yangzhou_heyuan', name: '何园', icon: '🏛️', price: 40, desc: '"晚清第一园"，1500米复道回廊立体交通。中西合璧的百叶窗与壁炉，盐商的开放气派。' },
      { id: 'yangzhou_dongguan', name: '东关街', icon: '🏮', price: 0, desc: '千年古运河边的商业老街，谢馥春香粉老铺在此。夜灯笼亮起，"春风十里扬州路"的现实版。' },
      { id: 'yangzhou_dayunhe', name: '中国大运河博物馆', icon: '🚢', price: 0, desc: '"运河上的舟楫"巨型船模震撼，沉浸式数字展。扬州是"运河长子"，一条河读懂半部中国经济史。' },
      { id: 'yangzhou_daming', name: '大明寺·鉴真纪念堂', icon: '🛕', price: 45, desc: '鉴真东渡日本的出发地，栖灵塔可登高。日本唐招提寺的"兄弟寺"情谊，文化输出的千年佳话。' },
      { id: 'yangzhou_zaocha', name: '冶春茶社早茶', icon: '🍵', price: 60, desc: '"早上皮包水"，扬州早茶与广式并称双绝。冶春临水而坐，蒸笼白汽里全是仪式感。' },
    ],
    souvenirs: [
      { id: 'yangzhou_baozi', name: '蟹黄汤包·三丁包', icon: '🥟', tag: '食', type: '美食', price: 25, desc: '"三丁"是鸡丁、肉丁、笋丁，鲜香三重奏。蟹黄汤包"轻轻提、慢慢移"，先开窗后喝汤。' },
      { id: 'yangzhou_chaofan', name: '扬州炒饭', icon: '🍚', tag: '食', type: '美食', price: 30, desc: '发源地的正宗版本：火腿、海参、虾仁、青豆。粒粒分明"金裹银"，全国的扬州炒饭都得来认祖。' },
      { id: 'yangzhou_daoqiang', name: '扬州三把刀', icon: '💈', tag: '玩', type: '体验', price: 80, desc: '厨刀、修脚刀、理发刀，扬州人的手艺名片。修脚师傅的手艺是国家级非遗，"足底按摩的祖师爷"。' },
      { id: 'yangzhou_jiangcai', name: '扬州酱菜·牛皮糖', icon: '🥒', tag: '食', type: '特产', price: 30, desc: '三和四美酱菜脆爽百年，牛皮糖软韧拉丝。老字号伴手礼，配粥下茶都好。' },
      { id: 'yangzhou_xie', name: '高邮咸鸭蛋', icon: '🥚', tag: '食', type: '特产', price: 40, desc: '汪曾祺笔下的家乡味，"筷子头一扎，红油就冒出来"。蛋黄流油起沙，配白粥一绝。' },
      { id: 'yangzhou_xiehua', name: '谢馥春香粉', icon: '🌸', tag: '衣', type: '文创', price: 60, desc: '1915年巴拿马万国博览会金奖的"鸭蛋粉"。古典鹅蛋盒包装，"东方香粉"的百年芳华。' },
      { id: 'yangzhou_diao', name: '扬州漆器·玉雕', icon: '🖼️', tag: '衣', type: '文创', price: 200, desc: '点螺漆器在光下变幻，扬州玉雕"琮璧之巧"。"扬州工"是工艺界的金字招牌。' },
      { id: 'yangzhou_wood', name: '雕版印刷体验', icon: '🖨️', tag: '玩', type: '体验', price: 60, desc: '扬州是雕版印刷术的发源地之一。亲手刷印一页《唐诗》，油墨书香，"活着的非遗"。' },
      { id: 'yangzhou_paozao', name: '"晚上水包皮"泡澡', icon: '♨️', tag: '玩', type: '体验', price: 80, desc: '"早上皮包水，晚上水包皮"——泡澡修脚全套。扬州澡堂师傅的手艺，泡完整个人"酥"了。' },
      { id: 'yangzhou_chuan2', name: '古运河夜游', icon: '⛴️', tag: '行', type: '体验', price: 60, desc: '夜游京杭大运河扬州段，两岸灯火与东关古渡。一条河看尽"运河城市"的繁华基因。' },
      { id: 'yangzhou_hanfu', name: '瘦西湖汉服旅拍', icon: '📸', tag: '玩', type: '体验', price: 220, desc: '三月烟雨穿汉服游瘦西湖，二十四桥入镜。"烟花三月"的实景拍摄，出片率爆表。' },
      { id: 'yangzhou_minsu', name: '古城客栈', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '东关街附近的盐商老宅客栈，天井里养着锦鲤。早晨被隔壁茶社的白汽香唤醒。' },
    ],
    stories: [
      { id: 'yangzhou_story_pibaoshui', name: '皮包水与水包皮', icon: '♨️', desc: '扬州人的幸福公式：早上吃茶包子（皮包水），晚上泡澡（水包皮）。慢生活的"祖师爷级"代表。' },
      { id: 'yangzhou_story_yanshang', name: '盐商造就的繁华', icon: '💰', desc: '清代两淮盐商聚集扬州，富可敌国。园林、淮扬菜、戏剧都因盐商的"内卷消费"而登峰造极。' },
      { id: 'yangzhou_story_jianzhen', name: '鉴真六次东渡', icon: '🛕', desc: '大明寺鉴真和尚双目失明仍六次东渡日本传戒律。日本唐招提寺至今供奉鉴真坐像，"文化大使"第一人。' },
      { id: 'yangzhou_story_ershi', name: '二十四桥到底有几座', icon: '🌉', desc: '"二十四桥明月夜"引发千年争论：是24座桥还是一座桥名？如今瘦西湖里那座白玉桥就叫"二十四桥"。' },
      { id: 'yangzhou_story_sanba', name: '"腰缠十万贯，骑鹤下扬州"', icon: '🦢', desc: '古人把"下扬州"列为人生三大梦想之一。扬州从唐代的"魔都"地位可见一斑。' },
      { id: 'yangzhou_story_wangzengqi', name: '汪曾祺的故乡味觉', icon: '🥚', desc: '"高邮咸蛋，质细而油多"被写进课文。扬州人饮食自信的底气：连咸鸭蛋都是文学级的。' },
    ],
  });
})();
