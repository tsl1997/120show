/* 杭州 分册02：特色周边（杭帮味道/茶香雅韵/运河手信/湖山体验） */
window.HZ_GIFTS = window.HZ_GIFTS || [];
window.HZ_GIFTS.push(
  /* ---- 杭帮菜与点心（沿用原条目） ---- */
  { id: 'hangzhou_pianerchuan', name: '片儿川', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '雪菜、笋片、瘦肉片浇头，"杭州人的元气面"。奎元馆百年老店，"一碗面的百年江湖"。' },
  { id: 'hangzhou_dongpo', name: '东坡肉', icon: '🍖', tag: '食', type: '美食', price: 68, desc: '苏东坡任杭州知州时的"民生菜"，慢火煨到酥烂。一小方砂锅上桌，肥而不腻入口即化。' },
  { id: 'hangzhou_xiaolong', name: '知味观小笼·猫耳朵', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '杭州小笼皮薄汁多，猫耳朵是"面做的贝壳"。知味观百年点心拼盘，一次尝遍杭州味。' },
  { id: 'hangzhou_oufen', name: '西湖藕粉·桂花糖', icon: '🍮', tag: '食', type: '特产', price: 35, desc: '西湖藕粉冲出来晶莹剔透，撒桂花更香。糖桂花是杭州甜品的"万能钥匙"。' },
  /* ---- 新增：杭帮味道补全 ---- */
  { id: 'hzg_cuyu', name: '西湖醋鱼', icon: '🐟', tag: '食', type: '美食', price: 88, desc: '草鱼飞水断生，浇糖醋芡汁，"叔嫂传珍"的典故菜。楼外楼的看家菜，酸甜鲜嫩一条鱼见功夫。' },
  { id: 'hzg_xiaren', name: '龙井虾仁', icon: '🦐', tag: '食', type: '美食', price: 98, desc: '明前龙井泡开与河虾仁同炒，茶香裹着虾鲜。一粒粒粉白虾仁里，是西湖春天的一口清雅。' },
  { id: 'hzg_jiaohuaji', name: '叫花鸡', icon: '🍗', tag: '食', type: '美食', price: 78, desc: '整鸡塞进荷叶裹上泥巴烘烤，上桌一锤敲开香气四溢。武侠小说里洪七公最爱的"叫化鸡"，酥烂脱骨。' },
  { id: 'hzg_yugeng', name: '宋嫂鱼羹', icon: '🥣', tag: '食', type: '美食', price: 45, desc: '鳜鱼丝配火腿笋丝勾芡，酸辣开胃。宋嫂南渡到临安卖羹，皇帝一尝惊为天人，酸辣鱼羹自此传千年。' },
  { id: 'hzg_congbaohui', name: '葱包烩', icon: '🥖', tag: '食', type: '美食', price: 6, desc: '面皮包油条压得焦脆，抹甜面酱辣酱，夹一根小葱。名字里那个"烩"是"桧"——民间炸秦桧的小小反抗。' },
  { id: 'hzg_dingshenggao', name: '定胜糕', icon: '🍥', tag: '食', type: '美食', price: 8, desc: '粉红色的松糕夹豆沙，南宋时百姓为将士出征做"定胜糕"。咬一口松软甜糯，讨个好彩头。' },
  { id: 'hzg_suyoubing', name: '吴山酥油饼', icon: '🫓', tag: '食', type: '美食', price: 8, desc: '吴山脚下层层起酥的油饼，撒绵白糖像落雪。老杭州爬山逛吴山，人手一块配碗茶。' },
  /* ---- 茶与特产 ---- */
  { id: 'hangzhou_longjing_cha', name: '西湖龙井', icon: '🍵', tag: '食', type: '特产', price: 150, desc: '"绿茶皇后"，明前狮峰龙井一叶难求。豆花香与板栗香交织，"色绿、香郁、味甘、形美"四绝。' },
  { id: 'hzg_jiuquhongmei', name: '九曲红梅', icon: '🫖', tag: '食', type: '特产', price: 60, desc: '西湖产的工夫红茶，汤色红艳如梅花。一红一绿与龙井并称"西湖双绝"，冬日暖胃最相宜。' },
  { id: 'hzg_baiju', name: '杭白菊', icon: '🌼', tag: '食', type: '特产', price: 25, desc: '菊花盏盏白如玉，泡开清甜降火。杭州人的保温杯里，一年四季都飘着这股菊香。' },
  { id: 'hzg_meigui?', name: '桂花龙井茶包', icon: '🍂', tag: '食', type: '特产', price: 45, desc: '满觉陇桂花窨进龙井，一开袋就是秋天。泡一杯满屋桂花香，杭州人把秋天装进了茶罐。' },
  /* ---- 丝绸扇印与手信（沿用原条目） ---- */
  { id: 'hangzhou_silk', name: '杭罗·丝绸', icon: '🧣', tag: '衣', type: '服饰', price: 200, desc: '杭罗与苏缎并称，"丝绸之府"的手艺。丝巾与睡衣轻盈透气，杭州丝绸市场可以淘货。' },
  { id: 'hangzhou_sanhua', name: '王星记扇子', icon: '🪭', tag: '衣', type: '文创', price: 80, desc: '百年扇庄，黑纸扇"雨淋不透、日晒不翘"。一把扇子甩出西湖十景，"杭州的名片"。' },
  { id: 'hzg_zhijin', name: '都锦生织锦画', icon: '🖼️', tag: '衣', type: '服饰', price: 150, desc: '丝线织出西湖风景与人物肖像，逼真如照片。都锦生把"丝织彩像"织进了世界博览会。' },
  { id: 'hzg_xiling', name: '西泠印泥', icon: '🧿', tag: '玩', type: '文创', price: 60, desc: '孤山西泠印社的印泥，朱砂陈年不干。爱篆刻的人都知道，一方好印要配一盒西泠泥。' },
  { id: 'hzg_zhangxq', name: '张小泉剪刀', icon: '✂️', tag: '玩', type: '文创', price: 40, desc: '"张小泉"剪刀开合自如、刃口锋利，剪刀铺三百年的老招牌。运河边剪刀博物馆还能看手工锻造。' },
  { id: 'hzg_tianzhukuai', name: '天竺筷', icon: '🥢', tag: '玩', type: '文创', price: 25, desc: '天竺山小竹做的筷子，烙花烫字百年不褪。杭州人办酒席讲究用天竺筷，图个"平安"。' },
  { id: 'hangzhou_xihu_wenxue', name: '西湖文创', icon: '🔮', tag: '衣', type: '文创', price: 40, desc: '断桥、雷峰塔冰箱贴，白娘子许仙盲盒。西博文创的"传说系列"，把神话带回家。' },
  /* ---- 湖山体验与住宿（沿用原条目+新增） ---- */
  { id: 'hangzhou_chashan', name: '龙井采茶炒茶体验', icon: '🌱', tag: '玩', type: '体验', price: 150, desc: '春天背茶篓上山采青，跟师傅学铁锅杀青。炒好的茶自己冲泡，"从叶到杯"的完整仪式。' },
  { id: 'hangzhou_huachuan', name: '西湖摇橹船', icon: '🛶', tag: '行', type: '体验', price: 180, desc: '包一条摇橹船游三潭印月，船娘讲白蛇传。避开人潮的西湖玩法，"水上视角"最诗意。' },
  { id: 'hzg_qixing', name: '环西湖骑行', icon: '🚲', tag: '玩', type: '体验', price: 40, desc: '沿湖滨、杨公堤、苏堤骑一圈，湖边每个转弯都是新景。骑累了在茅家埠喝杯茶，西湖归你所有。' },
  { id: 'hangzhou_qima2', name: '径山骑行·九溪徒步', icon: '🥾', tag: '玩', type: '体验', price: 100, desc: '九溪十八涧徒步，溪水从脚下叮咚流过。径山茶山骑行，"杭州人的周末山水"。' },
  { id: 'hzg_diancha', name: '宋代点茶体验', icon: '🍵', tag: '玩', type: '体验', price: 120, desc: '跟着茶艺师学宋代点茶：研膏、注汤、击拂，茶汤上还能作画"茶百戏"。一碗茶里，喝出千年前的文人风雅。' },
  { id: 'hzg_yueju', name: '小百花越剧剧场', icon: '🎭', tag: '玩', type: '体验', price: 120, desc: '在蝴蝶剧场听一场越剧《梁祝》，水袖翻飞、唱腔婉转。吴侬软语咿呀入耳，江南的梦都在戏里。' },
  { id: 'hzg_yinxiangxihu', name: '印象西湖·最忆是杭州', icon: '🌃', tag: '玩', type: '体验', price: 260, desc: '实景演出就在岳湖上，演员在水面起舞、灯光把西湖点亮。"最忆是杭州"，白居易的诗活了。' },
  { id: 'hzg_yunheyeyou', name: '京杭大运河夜游', icon: '⛴️', tag: '玩', type: '体验', price: 100, desc: '夜航大运河，从武林门到拱宸桥，两岸古桥与灯光次第展开。一条河穿过杭州的古今。' },
  { id: 'hangzhou_minsu', name: '茶山民宿', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '龙井山里的茶园民宿，露台对着层层茶田。清晨云雾漫过茶山，"住在画里"。' }
);
