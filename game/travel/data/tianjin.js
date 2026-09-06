/* ============ 天津 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'tianjin',
    name: '天津',
    country: '中国',
    cc: 'CN',
    province: '天津',
    flag: '🇨🇳',
    region: '华北',
    hero: '🎡',
    desc: '九河下梢的哏都：五大道的小洋楼、海河上的摩天轮、茶馆里的相声，天津把幽默过成了日常。',
    travel: [{ name: '高铁', icon: '🚄', cost: 540 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: [
      { id: 'tianjin_wudadao', name: '五大道', icon: '🏛️', price: 0, desc: '两千多栋万国建筑博览会，马场道上的梧桐与洋楼。租辆马车或骑共享单车，"近代中国看天津"的活教材。' },
      { id: 'tianjin_jiefangqiao', name: '解放桥·世纪钟', icon: '🌉', price: 0, desc: '海河上的百年开启式铁桥，整点还能"张合"。河边世纪钟转动，天津卫的近代史从码头开始。' },
      { id: 'tianjin_yongleqiao', name: '天津之眼', icon: '🎡', price: 70, desc: '建在永乐桥上的巨型摩天轮，"桥轮合一"全球唯一。转一圈28分钟，海河夜景一览无余。' },
      { id: 'tianjin_gulou', name: '古文化街', icon: '🏮', price: 0, desc: '津门故里，泥人张、杨柳青年画的老字号扎堆。天后宫香火百年，糖画与熟梨糕的甜香满街。' },
      { id: 'tianjin_xiaobailou', name: '瓷房子', icon: '🏠', price: 50, desc: '七亿多片古瓷片贴满整栋法式洋楼，"疯狂的瓷器"建筑。房顶盘着瓷龙，看一眼就知道多土豪。' },
      { id: 'tianjin_panshan', name: '盘山', icon: '⛰️', price: 78, desc: '"早知有盘山，何必下江南"。乾隆巡幸32次的京东名山，五峰八石与古寺松涛。' },
      { id: 'tianjin_chaguan', name: '名流茶馆·相声', icon: '🎭', price: 100, desc: '到天津不听相声等于白来。茶馆里一壶茶一碟瓜子，台上说学逗唱，台下"吁——"声此起彼伏。' },
    ],
    souvenirs: [
      { id: 'tianjin_goubuli', name: '狗不理包子', icon: '🥟', tag: '食', type: '美食', price: 60, desc: '水馅半发面、十八个褶的百年名点。配小米粥和咸菜，老天津的讲究从早茶开始。' },
      { id: 'tianjin_jianbing', name: '煎饼馃子', icon: '🌯', tag: '食', type: '美食', price: 10, desc: '绿豆面皮摊鸡蛋，加馃子或馃篦儿。"天津人眼里加生菜都是邪教"，正宗只配甜面酱腐乳。' },
      { id: 'tianjin_mahua', name: '十八街麻花', icon: '🥨', tag: '食', type: '特产', price: 40, desc: '酥脆掉渣夹什锦馅的大麻花，一根管饱。桂发祥百年配方，天津手信的门面担当。' },
      { id: 'tianjin_erduoyan', name: '耳朵眼炸糕', icon: '🍩', tag: '食', type: '美食', price: 8, desc: '外酥里糯的豆沙炸糕，现炸现卖烫手。名字来自胡同，甜得朴实又上头。' },
      { id: 'tianjin_baozi_lu', name: '锅巴菜', icon: '🍲', tag: '食', type: '美食', price: 10, desc: '绿豆煎饼切条浇卤汁，天津人叫"嘎巴菜"。大福来老铺一碗，早点的隐藏王者。' },
      { id: 'tianjin_chashang', name: '熟梨糕', icon: '🍰', tag: '食', type: '美食', price: 10, desc: '米粉蒸成的小糕插着果酱纸斗，"呜呜"的蒸哨声是童年暗号。古文化街的甜蜜BGM。' },
      { id: 'tianjin_nirenzhang', name: '泥人张彩塑', icon: '🧑‍🎨', tag: '衣', type: '文创', price: 120, desc: '手捏泥人百态传神，"泥人张"三字是非遗招牌。小件钟馗、仕女摆件，桌上摆一个津味十足。' },
      { id: 'tianjin_yangliuqing', name: '杨柳青年画', icon: '🖼️', tag: '衣', type: '文创', price: 80, desc: '"连年有余"的胖娃娃年画，木版套色加手工彩绘。非遗老手艺，贴家里喜庆三百年。' },
      { id: 'tianjin_kites', name: '风筝魏风筝', icon: '🪁', tag: '衣', type: '文创', price: 90, desc: '百年老字号"风筝魏"，沙燕、蜈蚣风筝能折叠。既是玩具又是工艺品，海边公园放飞正合适。' },
      { id: 'tianjin_xiangsheng', name: '茶馆听相声', icon: '🎤', tag: '玩', type: '体验', price: 100, desc: '名流茶馆买张票嗑着瓜子听两小时。包袱一个接一个，"哏都"的快乐就是这么简单。' },
      { id: 'tianjin_haihe', name: '海河游船', icon: '🚤', tag: '行', type: '体验', price: 80, desc: '夜游海河穿十几座桥，解放桥、北安桥灯影如画。两岸欧式建筑与摩天轮，天津夜色精华段。' },
      { id: 'tianjin_dakanda', name: '五大道马车游', icon: '🐎', tag: '玩', type: '体验', price: 80, desc: '坐复古马车逛五大道，铃铛一路叮当。马夫用天津话讲洋楼八卦，比导游词生动十倍。' },
      { id: 'tianjin_minsu', name: '洋楼民宿一晚', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '小洋楼改的民宿，木楼梯嘎吱响。窗外梧桐叶影，一晚住进民国电影。' },
    ],
    stories: [
      { id: 'tianjin_story_ken', name: '哏都的幽默基因', icon: '😂', desc: '天津人自带相声体质，出租司机、煎饼摊主张口就是包袱。全国网友公认：在天津，快乐成本最低。' },
      { id: 'tianjin_story_jianbing', name: '煎饼馃子的"正统之争"', icon: '🌯', desc: '天津为煎饼馃子立了团体标准：只许加馃子馃篦儿。加生菜火腿？天津大爷会跟你"讲道理"。' },
      { id: 'tianjin_story_qiaolun', name: '桥上开摩天轮', icon: '🎡', desc: '天津之眼建在永乐桥正上方，全球首创"桥轮合一"。坐到最高点，据说情侣会一直在一起——排队两小时也值。' },
      { id: 'tianjin_story_jiefangqiao', name: '会"张嘴"的桥', icon: '🌉', desc: '解放桥是百年开启式铁桥，桥面能竖起让大船通过。老天津人管它叫"万国桥"，见证码头时代。' },
      { id: 'tianjin_story_cifangzi', name: '瓷房子的疯狂', icon: '🏠', desc: '收藏家用七亿多古瓷片、13000件古瓷瓶贴满洋楼，连下水管都是瓷的。有人叫绝有人称疯，反正火了。' },
      { id: 'tianjin_story_xiangsheng', name: '相声的"码头"', icon: '🎭', desc: '相声演员得先过天津观众的关："天津不乐，北京白搭"。茶馆里观众接下茬的功力，也是一绝。' },
    ],
  });
})();
