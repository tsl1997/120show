/* ============ 主题收藏系列·武侠世界联动（功法/美人/神兵） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({
    id: 'sr_wulin_secret', cat: 'isekai', name: '武林绝学系列（金庸武学）', years: '1955-1972', author: '金庸', theme: '绝世武功秘籍收藏',
    background: '飞雪连天射白鹿，笑书神侠倚碧鸳。金庸十四部书中的至高武学：从降龙十八掌到独孤九剑，从九阴九阳到葵花宝典——每一部秘籍都是一段江湖血雨。',
    story: '"武功练到极处，讲究的是境界而非招式。"',
    protagonist: '历代金庸主角', slogan: '无招胜有招。',
    cities: ['isekai_tianlong', 'isekai_sheDiao', 'isekai_shendiao', 'isekai_yitian', 'isekai_xiaoao'],
    items: [
      { id: 'wl_1', name: '降龙十八掌', type: '掌法卡', city: 'isekai_tianlong', price: 300, desc: '天下刚猛第一——乔峰、洪七公、郭靖一脉相承。' },
      { id: 'wl_2', name: '九阴真经', type: '秘籍卡', city: 'isekai_sheDiao', price: 320, desc: '两次华山论剑的争夺焦点，天下武学总纲。' },
      { id: 'wl_3', name: '六脉神剑', type: '指法卡', city: 'isekai_tianlong', price: 320, desc: '大理段氏最高武学，无形剑气。' },
      { id: 'wl_4', name: '独孤九剑', type: '剑法卡', city: 'isekai_xiaoao', price: 320, desc: '无招胜有招——风清扬传授令狐冲的剑道至境。' },
      { id: 'wl_5', name: '九阳真经', type: '秘籍卡', city: 'isekai_yitian', price: 320, desc: '至阳内功之巅，张无忌的立身之本。' },
      { id: 'wl_6', name: '黯然销魂掌', type: '掌法卡', city: 'isekai_shendiao', price: 300, desc: '杨过相思所创——"唯别而已矣"的深情武学。' },
      { id: 'wl_7', name: '北冥神功', type: '秘籍卡', city: 'isekai_tianlong', price: 300, desc: '逍遥派吸内力的绝学。' },
      { id: 'wl_8', name: '乾坤大挪移', type: '心法卡', city: 'isekai_yitian', price: 300, desc: '明教护教神功，牵引挪移敌劲。' },
      { id: 'wl_9', name: '太极拳经', type: '拳法卡', city: 'isekai_yitian', price: 280, desc: '张三丰百岁创拳，以柔克刚。' },
      { id: 'wl_10', name: '打狗棒法', type: '棒法卡', city: 'isekai_sheDiao', price: 240, desc: '丐帮帮主不传之秘，三十六路天下无狗。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_jinyong_beauty', cat: 'isekai', name: '金庸美人系列（绝代佳人）', years: '1955-1972', author: '金庸', theme: '绝代佳人头牌收藏',
    background: '飞雪连天射白鹿，笑书神侠倚碧鸳——金庸笔下的绝代佳人，或聪慧、或仙气、或刁蛮、或温柔，共同织就江湖儿女的缱绻底色。',
    story: '"问世间情为何物，直教生死相许。"',
    protagonist: '黄蓉、小龙女、王语嫣、赵敏……', slogan: '一见杨过误终身。',
    cities: ['isekai_sheDiao', 'isekai_shendiao', 'isekai_tianlong', 'isekai_yitian', 'isekai_xiaoao'],
    items: [
      { id: 'jm_1', name: '黄蓉（俏黄蓉）', type: '佳人卡', city: 'isekai_sheDiao', price: 260, desc: '桃花岛主的聪慧女儿，射雕第一机变女诸葛。' },
      { id: 'jm_2', name: '小龙女（姑姑）', type: '佳人卡', city: 'isekai_shendiao', price: 280, desc: '古墓派的冰清仙子，十六年之约的等待者。' },
      { id: 'jm_3', name: '王语嫣（神仙姐姐）', type: '佳人卡', city: 'isekai_tianlong', price: 280, desc: '天下武学活百科——玉像走出的绝色。' },
      { id: 'jm_4', name: '赵敏（绍敏郡主）', type: '佳人卡', city: 'isekai_yitian', price: 280, desc: '"我偏要勉强"——敢爱敢恨的蒙古郡主。' },
      { id: 'jm_5', name: '任盈盈（圣姑）', type: '佳人卡', city: 'isekai_xiaoao', price: 260, desc: '绿竹巷的琴音少女，魔教圣姑的柔情。' },
      { id: 'jm_6', name: '阿朱（塞上之约）', type: '佳人卡', city: 'isekai_tianlong', price: 240, desc: '"塞上牛羊空许约"——易容替死的最痛一别。' },
      { id: 'jm_7', name: '香香公主（喀丝丽）', type: '佳人卡', city: 'isekai_shujian', price: 240, desc: '让千军放下兵刃的圣女之美。' },
      { id: 'jm_8', name: '郭襄（小东邪）', type: '佳人卡', city: 'isekai_shendiao', price: 240, desc: '风陵渡口初相遇——峨眉开山祖师。' },
      { id: 'jm_9', name: '程灵素（七心海棠）', type: '佳人卡', city: 'isekai_feihu', price: 240, desc: '用生命解毒的毒医少女。' },
      { id: 'jm_10', name: '李文秀（白马少女）', type: '佳人卡', city: 'isekai_baima', price: 220, desc: '"都是很好很好的，可是我偏不喜欢"。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_shenbing', cat: 'isekai', name: '神兵利器系列（江湖名器）', years: '1955-1972', author: '金庸', theme: '神兵宝刀收藏',
    background: '武林至尊，宝刀屠龙；倚天不出，谁与争锋——江湖名器见证了多少恩怨情仇。',
    story: '兵者是凶器，圣人不得已而用之。',
    protagonist: '历代持剑人', slogan: '重剑无锋，大巧不工。',
    cities: ['isekai_tianlong', 'isekai_sheDiao', 'isekai_shendiao', 'isekai_yitian', 'isekai_bixue'],
    items: [
      { id: 'sb_1', name: '屠龙刀', type: '神兵卡', city: 'isekai_yitian', price: 320, desc: '"号令天下，莫敢不从"——内藏武穆遗书。' },
      { id: 'sb_2', name: '倚天剑', type: '神兵卡', city: 'isekai_yitian', price: 320, desc: '"倚天不出，谁与争锋"——内藏九阴真经。' },
      { id: 'sb_3', name: '玄铁重剑', type: '神兵卡', city: 'isekai_shendiao', price: 320, desc: '重剑无锋，大巧不工——独孤求败的重剑境界。' },
      { id: 'sb_4', name: '金蛇剑', type: '神兵卡', city: 'isekai_bixue', price: 280, desc: '蛇形卷刃——金蛇郎君的诡异凶器。' },
      { id: 'sb_5', name: '碧玉绿波香雾剑', type: '神兵卡', city: 'isekai_tianlong', price: 260, desc: '无量剑派传世名剑——江湖名器的虚位之选。' },
      { id: 'sb_6', name: '碧玉打狗棒', type: '宝物卡', city: 'isekai_sheDiao', price: 220, desc: '丐帮帮主的代代相传信物。' },
      { id: 'sb_7', name: '软猬甲', type: '护甲卡', city: 'isekai_sheDiao', price: 220, desc: '桃花岛护身宝甲，刺尖带毒。' },
      { id: 'sb_8', name: '君子剑&淑女剑', type: '神兵卡', city: 'isekai_shendiao', price: 220, desc: '杨过小龙女的成婚双剑。' },
    ]
  });
})();
