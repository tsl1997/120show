/* 大富翁 · 角色台词系统 v7
 * 四个角色各有自己的说话风格，按事件类型随机挑一句。
 * say(p, type, action) → 拼成「角色名 + 动作描述 + 台词」，交给 ui.js 的
 * showToast 在屏幕中心短暂浮现；测试模式（ANIM.speed>=100）只算数不渲染。
 *
 * 事件类型：
 *   buy 买地 / upgrade 升级 / toll 被收过路费 / receiveToll 收租 /
 *   hospital 住院 / chanceGood 机会得钱 / chanceBad 机会罚钱 /
 *   salary 领工资 / god 神仙 / vehicle 买车 / item 道具 / grid 电网 /
 *   dice 掷骰出发 / idle 平安无事（回合摘要兜底） / bankrupt 破产
 */
var SPEECH = {
  /* 米鼠：元气小可爱，爱喊 Good */
  mouse: {
    buy:         ['Good！这块地归我啦～', '太棒了！又添一处家业！', '嘻嘻，捡到宝了！'],
    upgrade:     ['哇，房子长高啦！', 'Good！再盖一层！'],
    toll:        ['呜呜……零花钱没了', '怎么能这样！我的奶酪钱！', '哎呀，钱包瘦了一圈…'],
    receiveToll: ['谢谢惠顾，下次再来哦～', '嘻嘻，收钱真开心！'],
    hospital:    ['不要打针！呜哇——', '医院好可怕……'],
    chanceGood:  ['Good！天上掉钱啦！', '今天运气超好的！'],
    chanceBad:   ['呜……倒霉的一天', '怎么会这样啦！'],
    salary:      ['发工资啦！买奶酪去～', 'Good！又有零花钱了！'],
    god:         ['哇！是神仙！', '好闪好闪，许个愿～'],
    vehicle:     ['有车车啦，冲鸭！', '太棒了！跑得更快了！'],
    item:        ['偷偷用一下下～', '嘻嘻，小道具大作用！'],
    grid:        ['哇啊！麻麻的！', '电到了啦，呜呜'],
    dice:        ['出发出发！', '冲呀～'],
    idle:        ['这里好安静呀', '东看看，西看看～'],
    bankrupt:    ['呜……我的奶酪……']
  },
  /* 阿狸：精明傲娇，凡事算账 */
  fox: {
    buy:         ['哼，这价位划算。', '地段不错，收下了。', '算过账了，值。'],
    upgrade:     ['加一层，租金翻倍。', '投资要舍得下手。'],
    toll:        ['……这笔账我记下了。', '啧，真会挑地方收钱。', '哼，等着瞧。'],
    receiveToll: ['多谢惠顾，欢迎常来。', '生意兴隆，承让。'],
    hospital:    ['住院费也能砍价吗……', '耽误我做生意。'],
    chanceGood:  ['意外之财，照单全收。', '运气也是实力的一部分。'],
    chanceBad:   ['哼，就当交学费。', '破财消灾，算了。'],
    salary:      ['固定收入，稳。', '该存起来了。'],
    god:         ['神仙？先谈谈条件。', '这波运气能变现吗。'],
    vehicle:     ['效率提升，值得。', '省下的时间更值钱。'],
    item:        ['道具要用在刀刃上。', '计划之内。'],
    grid:        ['触电也要按规章罚款？', '啧，这收费不合理。'],
    dice:        ['按概率走。', '看这回运气。'],
    idle:        ['无事发生，挺好。', '观察一下局势。'],
    bankrupt:    ['……算错了这一步。']
  },
  /* 熊猫：佛系淡定，三句不离吃 */
  panda: {
    buy:         ['哦，那块地不错，收着吧。', '买都买了，种点竹子。'],
    upgrade:     ['盖高一点，晒得到太阳。', '慢慢来，不急。'],
    toll:        ['哦……钱少了。', '行吧，就当请客了。', '竹子涨价，钱要省着花。'],
    receiveToll: ['谢谢啊，改天请吃竹子。', '哦，进账了。'],
    hospital:    ['躺三天……也挺好。', '正好补个觉。'],
    chanceGood:  ['哦，捡到钱了。', '今天适合加餐。'],
    chanceBad:   ['唉，破费了。', '算了，睡一觉就好。'],
    salary:      ['到账了，够买竹子。', '哦，发钱了。'],
    god:         ['哦，神仙啊，坐。', '要不要一起吃个竹子。'],
    vehicle:     ['车比走路省劲儿。', '慢点开，稳当。'],
    item:        ['哦，还有这东西。', '收着吧，说不定有用。'],
    grid:        ['麻……有点酥。', '哦，被电了。'],
    dice:        ['慢慢走。', '走哪算哪。'],
    idle:        ['晒晒太阳，挺好。', '这儿风不错。'],
    bankrupt:    ['哦……那我回山上吧。']
  },
  /* 唐鸭：暴躁吐槽，情绪最足 */
  duck: {
    buy:         ['Good！这块地是本大爷的了！', '太棒了！嘎嘎嘎！', '哈哈，抢到先手！'],
    upgrade:     ['盖！给我往高了盖！', '租金涨起来！嘎！'],
    toll:        ['怎么能这样！', '呜呜呜，太痛了！', '嘎！我的钱！抢钱啊！'],
    receiveToll: ['哈哈哈，乖乖交钱！', '这才对嘛，嘎嘎！'],
    hospital:    ['放开我！我没病！', '八百块？！抢钱啊！'],
    chanceGood:  ['哈！天助我也！', '爽！这笔横财收下了！'],
    chanceBad:   ['岂有此理！', '嘎！谁设计的这破卡！'],
    salary:      ['才两千？！打发叫花子呢！', '总算有点进账，哼！'],
    god:         ['神仙！给我多来点钱！', '嘎？什么玩意儿？！'],
    vehicle:     ['上车！让你们吃尾气！', '三个骰子，爽！'],
    item:        ['看我的！嘎嘎嘎！', '这波稳了！'],
    grid:        ['啊啊啊！电死我了！', '谁家电网乱放电啊！'],
    dice:        ['走你！', '大点！给爷来个大点！'],
    idle:        ['嘎？就这么没事？', '无聊，换个地方！'],
    bankrupt:    ['不可能！本大爷怎么会输！']
  }
};

/* 本回合已说过的台词数（用于回合摘要兜底） */
var SAY_COUNT = 0;
function resetSayCount() { SAY_COUNT = 0; }
function getSayCount() { return SAY_COUNT; }

/* 取一句台词（角色 + 事件） */
function pickSpeech(p, type) {
  var byAvatar = SPEECH[p.avatar.id] || SPEECH.mouse;
  var lines = byAvatar[type] || SPEECH.mouse[type];
  if (!lines || !lines.length) return null;
  return lines[Math.floor(Math.random() * lines.length)];
}

/* 说一句：返回消息对象，同时交给中心气泡层渲染 */
function say(p, type, action, tone) {
  var line = pickSpeech(p, type);
  if (!line) return null;
  var msg = {
    emoji: ICON_FALLBACK[p.avatar.id] || '🙂',
    name: p.name,
    color: (typeof PLAYER_COLORS !== 'undefined' && PLAYER_COLORS[p.idx]) ? PLAYER_COLORS[p.idx] : '#ff8fab',
    action: action || '',
    line: line,
    tone: tone || type
  };
  SAY_COUNT++;
  /* 每回合最多 3 条气泡，避免交棒等待过久（超出的仍返回消息、仍计数） */
  if (SAY_COUNT <= 3 && typeof showToast === 'function') showToast(msg);
  return msg;
}
