/* ============ 主题收藏系列·中国文脉B（名山/名茶/红色/学府/名湖/非遗） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({
    id: 'sr_mingshan', cat: 'china', name: '名山系列（五岳与仙山）', years: '——', author: '中华山河', theme: '山岳打卡收藏',
    background: '五岳独尊、黄山归来、峨眉佛光、天门云海、玉龙雪山、鸣沙孤烟、恒山悬空、青城天下幽——一山一世界，各美其美。',
    story: '山不厌高，海不厌深。登一座山，收一片云海与传说。',
    protagonist: '中华名山', slogan: '会当凌绝顶，一览众山小！',
    cities: ['taian', 'huangshan', 'leshan', 'zhangjiajie', 'lijiang', 'dunhuang', 'datong', 'chengdu'],
    items: [
      { id: 'mtsh_taishan', name: '泰山·五岳独尊石刻拓片', type: '山岳卡', city: 'taian', price: 90, desc: '十八盘登顶玉皇顶，拓一方"五岳独尊"石刻。' },
      { id: 'mtsh_huangshan', name: '黄山·迎客松木刻', type: '山岳卡', city: 'huangshan', price: 100, desc: '奇松怪石云海日出一山收，迎客松守在玉屏楼。' },
      { id: 'mtsh_emei', name: '峨眉·金顶佛光纪念章', type: '山岳卡', city: 'leshan', price: 100, desc: '金顶十方普贤踏云而立，佛光乍现全山屏息。' },
      { id: 'mtsh_tianmen', name: '天门山·玻璃栈道书签', type: '山岳卡', city: 'zhangjiajie', price: 90, desc: '天门洞开、栈道悬空，三千奇峰铺在脚下。' },
      { id: 'mtsh_yulong', name: '玉龙雪山·东巴经卷', type: '山岳卡', city: 'lijiang', price: 110, desc: '冰川在云里若隐若现，纳西人的神山不可高声语。' },
      { id: 'mtsh_mingsha', name: '鸣沙山·沙画瓶', type: '山岳卡', city: 'dunhuang', price: 80, desc: '驼铃摇过沙脊，月牙泉边装一瓶会响的沙子。' },
      { id: 'mtsh_hengshan', name: '恒山·悬空寺斗拱模型', type: '山岳卡', city: 'datong', price: 100, desc: '寺庙挂在半崖千年不坠，榫卯里藏着北魏匠心。' },
      { id: 'mtsh_qingcheng', name: '青城山·道茶香囊', type: '山岳卡', city: 'chengdu', price: 90, desc: '"青城天下幽"，道观茶烟里求一支上上签。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_mingcha', cat: 'china', name: '茶香中国系列（名茶集）', years: '——', author: '中华茶文化', theme: '名茶收藏',
    background: '西湖龙井、洞庭碧螺春、黄山毛峰、安溪铁观音、安化黑茶、竹叶青、勐海普洱——一片东方树叶，泡出半部山河。',
    story: '茶为国饮，一叶知春。到产地喝一口头采，才算真正"来过"。',
    protagonist: '中国名茶', slogan: '且将新火试新茶，诗酒趁年华。',
    cities: ['hangzhou', 'suzhou', 'huangshan', 'quanzhou', 'changsha', 'chengdu', 'xishuangbanna'],
    items: [
      { id: 'tcha_longjing', name: '西湖龙井·狮峰明前', type: '名茶卡', city: 'hangzhou', price: 170, desc: '明前一芽一叶，豆花香里喝出整个西湖的春天。' },
      { id: 'tcha_biluochun', name: '洞庭碧螺春·吓煞人香', type: '名茶卡', city: 'suzhou', price: 160, desc: '卷曲如螺白毫隐翠，太湖水汽养的江南清甜。' },
      { id: 'tcha_maofeng', name: '黄山毛峰·云雾茶罐', type: '名茶卡', city: 'huangshan', price: 150, desc: '黄山云雾滋养的嫩芽，汤清味醇兰香隐隐。' },
      { id: 'tcha_tieguanyin', name: '安溪铁观音·兰花香', type: '名茶卡', city: 'quanzhou', price: 160, desc: '七泡仍有余香的观音韵，安溪山间的乌龙头牌。' },
      { id: 'tcha_hei', name: '安化黑茶·手筑茯砖', type: '名茶卡', city: 'changsha', price: 150, desc: '金花满布的茯砖越陈越香，湖湘茶马古道的味道。' },
      { id: 'tcha_zhuyeqing', name: '竹叶青·峨眉高山绿茶', type: '名茶卡', city: 'chengdu', price: 160, desc: '扁平挺直似竹叶，玻璃杯里根根立起的雅。' },
      { id: 'tcha_puer', name: '勐海普洱·雨林古树', type: '名茶卡', city: 'xishuangbanna', price: 180, desc: '雨林古茶树的一芽两叶，压成饼存进岁月。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_hong', cat: 'china', name: '红色足迹系列（初心之旅）', years: '——', author: '百年风华', theme: '红色纪念收藏',
    background: '石库门里开天辟地，橘子洲头独立寒秋，梅园新村灯火长明，香山脚下进京赶考——一条初心之路串起百年风华。',
    story: '山河已无恙，吾辈当自强。跟着红色足迹，读懂来时的路。',
    protagonist: '红色地标', slogan: '不忘初心，牢记使命！',
    cities: ['shanghai', 'wuhan', 'changsha', 'nanjing', 'beijing', 'xian', 'guangzhou'],
    items: [
      { id: 'hong_shanghai', name: '上海·中共一大会址纪念章', type: '红色纪念', city: 'shanghai', price: 60, desc: '石库门小楼里亮起的那盏灯，点燃了整个时代。' },
      { id: 'hong_wuhan', name: '武汉·首义十八星旗徽章', type: '红色纪念', city: 'wuhan', price: 60, desc: '红楼一声枪响，"敢为天下先"刻进武昌城墙。' },
      { id: 'hong_changsha', name: '长沙·橘子洲头书签', type: '红色纪念', city: 'changsha', price: 55, desc: '青年毛泽东雕像凝望湘江，"恰同学少年，风华正茂"。' },
      { id: 'hong_nanjing', name: '南京·雨花台英烈石', type: '红色纪念', city: 'nanjing', price: 60, desc: '雨花石上血色如霞，烈士的名字与山花同开。' },
      { id: 'hong_beijing', name: '北京·开国大典纪念明信片', type: '红色纪念', city: 'beijing', price: 55, desc: '天安门城楼一声宣告，东方醒狮站了起来。' },
      { id: 'hong_xian', name: '西安·西安事变纪念徽章', type: '红色纪念', city: 'xian', price: 55, desc: '临潼兵谏与张学良公馆，历史的十字路口在此定格。' },
      { id: 'hong_guangzhou', name: '广州·黄花岗"浩气长存"书签', type: '红色纪念', city: 'guangzhou', price: 55, desc: '七十二烈士的枪声，点燃了辛亥革命的引信。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_xuefu', cat: 'china', name: '中国名校系列（象牙塔）', years: '——', author: '百年学府', theme: '高校打卡收藏',
    background: '北大的未名湖、清华的荷塘、厦大的芙蓉隧道、交大的梧桐道、浙大的钟楼、苏大的银杏——一所大学就是一座花园。',
    story: '未名湖畔读过的书，隧道里画过的墙，都是青春最好的注脚。',
    protagonist: '百年学府', slogan: '恰同学少年，风华正茂！',
    cities: ['beijing', 'xiamen', 'xian', 'hangzhou', 'suzhou'],
    items: [
      { id: 'xfu_bei', name: '北大·博雅塔纪念徽章', type: '学府卡', city: 'beijing', price: 70, desc: '未名湖水映博雅塔影，"思想自由，兼容并包"。' },
      { id: 'xfu_tsinghua', name: '清华·二校门书签', type: '学府卡', city: 'beijing', price: 70, desc: '古月堂荷塘边，那篇《背影里的清华》读了很多年。' },
      { id: 'xfu_xiamen', name: '厦大·芙蓉隧道涂鸦卡', type: '学府卡', city: 'xiamen', price: 70, desc: '一公里隧道画满青春，"面朝大海，春暖花开"。' },
      { id: 'xfu_xjtu', name: '西安交大·梧桐道落叶标本', type: '学府卡', city: 'xian', price: 65, desc: '西迁梧桐年年金黄，薪火相传到西北。' },
      { id: 'xfu_zju', name: '浙大·之江钟楼模型', type: '学府卡', city: 'hangzhou', price: 75, desc: '钱塘江畔的百年红墙，钟声敲过一代代求是人。' },
      { id: 'xfu_suda', name: '苏大·天赐庄银杏书签', type: '学府卡', city: 'suzhou', price: 65, desc: '红砖钟楼银杏满地，苏州最美校区名不虚传。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_minghu', cat: 'china', name: '中国名湖系列（湖光山色）', years: '——', author: '中华水韵', theme: '湖泊打卡收藏',
    background: '西湖的烟柳、玄武湖的城墙、瘦西湖的桥、东湖的樱花、金鸡湖的天际线——一湖一城，湖是城市最温柔的眼睛。',
    story: '湖是城市的镜子，照见四季，也照见人间烟火。',
    protagonist: '中国名湖', slogan: '欲把西湖比西子，淡妆浓抹总相宜。',
    cities: ['hangzhou', 'nanjing', 'yangzhou', 'wuhan', 'suzhou'],
    items: [
      { id: 'mhu_xihu', name: '西湖·三潭印月书签', type: '名湖信物', city: 'hangzhou', price: 80, desc: '一湖烟雨千年诗，画舫摇过苏白二堤。' },
      { id: 'mhu_xuanwu', name: '玄武湖·台城砖拓', type: '名湖信物', city: 'nanjing', price: 80, desc: '六朝烟水笼玄武，城墙望湖一眼千年。' },
      { id: 'mhu_shouxihu', name: '瘦西湖·五亭桥剪纸', type: '名湖信物', city: 'yangzhou', price: 85, desc: '五亭桥下水如练，烟花三月的扬州梦。' },
      { id: 'mhu_donghu', name: '东湖·磨山樱花卡', type: '名湖信物', city: 'wuhan', price: 80, desc: '百公里绿道环湖，春天樱花落满磨山。' },
      { id: 'mhu_jinji', name: '金鸡湖·摩天轮夜卡', type: '名湖信物', city: 'suzhou', price: 85, desc: '东方之门倒映湖面，古典与摩登在此碰杯。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_feiyi', cat: 'china', name: '指尖非遗系列（匠艺中华）', years: '——', author: '非遗传承人', theme: '手工艺收藏',
    background: '景泰蓝掐丝点蓝、苏绣双面、蜀绣乱针、湘绣鬅毛、青花瓷、唐三彩、泥人张——中国的非遗，是看得见摸得着的绝活。',
    story: '一件器物，千锤百炼；一门手艺，代代相传。',
    protagonist: '非遗匠人', slogan: '匠心独运，巧夺天工。',
    cities: ['beijing', 'suzhou', 'chengdu', 'changsha', 'jingdezhen', 'luoyang', 'tianjin'],
    items: [
      { id: 'fyia_jingtailan', name: '北京·景泰蓝掐丝杯', type: '非遗卡', city: 'beijing', price: 150, desc: '铜胎掐丝再点蓝，一件器物过百道工序。' },
      { id: 'fyia_suxiu', name: '苏州·双面绣猫', type: '非遗卡', city: 'suzhou', price: 160, desc: '一根丝线劈成六十四分之一，猫眼两面同色。' },
      { id: 'fyia_shuxiu', name: '成都·蜀绣团扇', type: '非遗卡', city: 'chengdu', price: 150, desc: '芙蓉鲤鱼绣上扇面，蜀地针法细腻如发。' },
      { id: 'fyia_xiangxiu', name: '长沙·湘绣猛虎', type: '非遗卡', city: 'changsha', price: 160, desc: '鬅毛针法绣出虎威，"绣虎能奔跑"名不虚传。' },
      { id: 'fyia_qinghua', name: '景德镇·青花缠枝杯', type: '非遗卡', city: 'jingdezhen', price: 170, desc: '白釉青花一火成，千年窑火的东方之美。' },
      { id: 'fyia_tangsancai', name: '洛阳·唐三彩骆驼', type: '非遗卡', city: 'luoyang', price: 160, desc: '釉色流转的丝路驼铃，盛唐在掌心低语。' },
      { id: 'fyia_nireng', name: '天津·泥人张彩塑', type: '非遗卡', city: 'tianjin', price: 150, desc: '一抔泥捏出人间百态，"泥人张"活灵活现。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_xiqu', cat: 'china', name: '梨园戏曲系列（声腔之美）', years: '——', author: '中华戏曲', theme: '地方剧种收藏',
    background: '京剧的西皮二黄、秦腔的高亢苍凉、川剧的变脸吐火、昆曲的水磨腔、粤剧的南音、豫剧的梆子、越剧的婉转——一方水土一方戏。',
    story: '台上一分钟，台下十年功。听一声唱腔，便认得一座城的魂。',
    protagonist: '梨园名角', slogan: '不疯魔，不成活。',
    cities: ['beijing', 'xian', 'chengdu', 'suzhou', 'guangzhou', 'kaifeng', 'shaoxing'],
    items: [
      { id: 'xq_beijing', name: '京剧·脸谱折扇', type: '戏曲卡', city: 'beijing', price: 120, desc: '生旦净丑画上扇面，西皮二黄里是京城的精气神。' },
      { id: 'xq_xian', name: '秦腔·吼一声老腔', type: '戏曲卡', city: 'xian', price: 110, desc: '易俗社的百年戏台，黄土地上最滚烫的声腔。' },
      { id: 'xq_chengdu', name: '川剧·变脸面具', type: '戏曲卡', city: 'chengdu', price: 120, desc: '一甩头一张脸，蜀风雅韵的绝活笑傲梨园。' },
      { id: 'xq_suzhou', name: '昆曲·水磨腔唱片', type: '戏曲卡', city: 'suzhou', price: 130, desc: '杜丽娘一开口，园林的夜色都软了三分。' },
      { id: 'xq_guangzhou', name: '粤剧·红船宫灯', type: '戏曲卡', city: 'guangzhou', price: 120, desc: '水榭戏台上的金丝戏服，南国红豆最相思。' },
      { id: 'xq_kaifeng', name: '豫剧·穆桂英挂帅泥人', type: '戏曲卡', city: 'kaifeng', price: 110, desc: '梆子声一起，黄河边都跟着荡气回肠。' },
      { id: 'xq_shaoxing', name: '越剧·梁祝水袖书签', type: '戏曲卡', city: 'shaoxing', price: 110, desc: '吴侬软语的才子佳人，水袖翻飞唱尽江南。' },
    ]
  });
})();
