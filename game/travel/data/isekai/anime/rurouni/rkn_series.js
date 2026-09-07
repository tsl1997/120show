/* 异世界·浪客剑心 势力系列收藏 */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({ id: 'sr_rkn_main', cat: 'isekai', name: '神谷道场·主角团', color: '#d4a017',
    years: '1996-1999', author: '和月伸宏', theme: '剑心伙伴收藏',
    background: '浪客剑心与神谷薰、明神弥彦、相乐左之助——神谷活心流道场组成的"家"。',
    story: '从逆刃刀到竹刀，剑心的归处是道场里的炊烟。',
    protagonist: '绯村剑心', slogan: '飞天御剑流，天翔龙闪！',
    cities: ['isekai_rurouni'], items: [
      { id: 'rknc_kenshin', name: '绯村剑心', icon: '👨', type: '主角卡', city: 'isekai_rurouni', price: 260, desc: '曾经的拔刀斋，如今的浪客——逆刃刀与十字伤的赎罪者。' },
      { id: 'rknc_kaoru', name: '神谷薫', icon: '👩', type: '主角卡', city: 'isekai_rurouni', price: 180, desc: '神谷活心流第16代继承人，收留剑心并教会他"活着"。' },
      { id: 'rknc_yahiko', name: '明神弥彦', icon: '👦', type: '主角卡', city: 'isekai_rurouni', price: 150, desc: '孤儿出身的倔强少年，剑心的弟子——继承逆刃刀的下一代。' },
      { id: 'rknc_sanosuke', name: '相乐左之助', icon: '👊', type: '主角卡', city: 'isekai_rurouni', price: 170, desc: '维新志士出身的打架狂，剑心最可靠的兄弟与"暴力的朋友"。' },
      { id: 'rknc_megumi', name: '高荷惠', icon: '👩‍⚕️', type: '主角卡', city: 'isekai_rurouni', price: 160, desc: '从志志雄阵营归来的医生小姐，道场常驻的毒舌营养师。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_rkn_enemy', cat: 'isekai', name: '志志雄一派', color: '#c0392b',
    years: '1996-1999', author: '和月伸宏', theme: '京都反派收藏',
    background: '全身烧伤的志志雄雄真与他的"十本刀"、御庭番众——觊觎新时代的最强敌人。',
    story: '烧不死的男人，要用火重新点燃日本。',
    protagonist: '志志雄雄真', slogan: '新时代由我重写',
    cities: ['isekai_rurouni'], items: [
      { id: 'rknc_shishio', name: '志志雄雄真', icon: '🔥', type: '反派卡', city: 'isekai_rurouni', price: 260, desc: '被维新政府背叛的刽子手，浑身烧伤却要毁灭新时代的"活地狱"。' },
      { id: 'rknc_aoshi', name: '四乃森苍紫', icon: '🎭', type: '反派卡', city: 'isekai_rurouni', price: 210, desc: '御庭番众首领，为"最强"之名与剑心一战的忍者。' },
      { id: 'rknc_sojiro', name: '濑田宗次郎', icon: '😊', type: '反派卡', city: 'isekai_rurouni', price: 200, desc: '志志雄的剑客，天剑宗次郎——"笑"的背后是扭曲的童年。' },
      { id: 'rknc_sano_enemy', name: '十本刀众', icon: '⚔️', type: '反派卡', city: 'isekai_rurouni', price: 150, desc: '宇水、方治等志志雄麾下的"十本刀"剑客群。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_rkn_master', cat: 'isekai', name: '飞天御剑流·前辈们', color: '#34495e',
    years: '1996-1999', author: '和月伸宏', theme: '剑豪传承收藏',
    background: '比古清十郎、绯村剑心的师父，以及见证幕末到明治的剑豪与旧友。',
    story: '御剑流的过去，是剑心逆刃刀的另一面。',
    protagonist: '比古清十郎', slogan: '剑是活人剑',
    cities: ['isekai_rurouni'], items: [
      { id: 'rknc_seijuro', name: '比古清十郎', icon: '🧔', type: '前辈卡', city: 'isekai_rurouni', price: 240, desc: '飞天御剑流十三代传人，剑心的师父——隐居山林的最强剑客。' },
      { id: 'rknc_shinomori', name: '相乐总三', icon: '🎖️', type: '前辈卡', city: 'isekai_rurouni', price: 160, desc: '左之助的兄长般的前辈，维新志士——被时代牺牲的人。' },
      { id: 'rknc_old_enemies', name: '旧日拔刀斋之敌', icon: '🗡️', type: '前辈卡', city: 'isekai_rurouni', price: 140, desc: '幕末死在拔刀斋刀下的武士们——剑心赎罪的对象。' },
    ]});
  window.TRAVEL_SERIES.push({ id: 'sr_rkn_memories', cat: 'isekai', name: '追忆·雪代巴', color: '#5d6d7e',
    years: '1996-1999', author: '和月伸宏', theme: '追忆篇收藏',
    background: '雪代巴、雪代缘与剑心的过去——白梅香与十字伤的追忆篇群像。',
    story: '这场雪里，拔刀斋第一次不想杀人。',
    protagonist: '雪代巴', slogan: '白梅香之雪',
    cities: ['isekai_rurouni'], items: [
      { id: 'rknc_tomie', name: '雪代巴', icon: '👩', type: '回忆卡', city: 'isekai_rurouni', price: 240, desc: '白梅香女子，剑心的亡妻与最深的心结——十字伤的另一半。' },
      { id: 'rknc_enishi', name: '雪代缘', icon: '🧑', type: '回忆卡', city: 'isekai_rurouni', price: 200, desc: '巴的弟弟，为姐复仇的"缘"——人诛篇的核心反派。' },
      { id: 'rknc_katsura', name: '桂小五郎', icon: '🎎', type: '回忆卡', city: 'isekai_rurouni', price: 170, desc: '幕末的维新志士，拔刀斋时代剑心的"雇主"。' },
    ]});
})();
