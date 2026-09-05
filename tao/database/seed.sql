-- ============================================================
-- 陶氏族谱 (tao) 示例数据
-- 注意:以下为演示用示例姓名,请替换为真实族谱内容!
-- 结构:一世祖 陶启 → 二世 三子 → 三世 部分孙辈,用于演示逐代展开
-- ============================================================

USE `tao`;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `citation`;
TRUNCATE TABLE `attachment`;
TRUNCATE TABLE `marriage`;
TRUNCATE TABLE `person`;
TRUNCATE TABLE `book`;
SET FOREIGN_KEY_CHECKS = 1;

-- ---------- 族谱书目(示例,后续按 40 本补全) ----------
INSERT INTO `book` (`id`, `book_no`, `title`, `period`, `remarks`) VALUES
(1, '第1卷', '陶氏族谱·卷首', '清光绪年间', '含序言、源流考、一世至五世世系图'),
(2, '第2卷', '陶氏族谱·卷之一', '民国十二年', '含世系表及传记');

-- ---------- 人物 ----------
-- 一世祖(示例)
INSERT INTO `person` (`id`, `name`, `gender`, `generation`, `ranking`, `remarks`, `source_book_id`, `source_page`) VALUES
(1, '陶启', 1, 1, 1, '一世祖(示例),明朝初年迁入本地,务农起家。', 1, '第3页');

-- 一世祖之妻(示例)
INSERT INTO `person` (`id`, `name`, `gender`, `generation`, `remarks`, `source_book_id`) VALUES
(2, '陈氏', 2, 1, '一世祖母(示例),生子三人。', 1);

-- 二世:陶启三子
INSERT INTO `person` (`id`, `name`, `gender`, `generation`, `father_id`, `mother_id`, `ranking`, `remarks`, `source_book_id`, `source_page`) VALUES
(3, '陶守仁', 1, 2, 1, 2, 1, '二世长房(示例),生一子。', 1, '第5页'),
(4, '陶守义', 1, 2, 1, 2, 2, '二世二房(示例),生二子。', 1, '第6页'),
(5, '陶守礼', 1, 2, 1, 2, 3, '二世三房(示例),无后。', 1, '第7页');

-- 二世之妻(示例)
INSERT INTO `person` (`id`, `name`, `gender`, `generation`, `remarks`) VALUES
(6, '王氏', 2, 2, '陶守仁之妻(示例).'),
(7, '李氏', 2, 2, '陶守义之妻(示例).'),
(8, '赵氏', 2, 2, '陶守礼之妻(示例).');

-- 三世:部分孙辈,用于演示逐代展开
INSERT INTO `person` (`id`, `name`, `gender`, `generation`, `father_id`, `mother_id`, `ranking`, `remarks`) VALUES
(9,  '陶承宗', 1, 3, 3, 6, 1, '三世长房长孙(示例).'),
(10, '陶承祖', 1, 3, 4, 7, 1, '三世二房(示例).'),
(11, '陶承庆', 2, 3, 4, 7, 2, '三世二房次女(示例).');

-- ---------- 夫妻关系 ----------
INSERT INTO `marriage` (`husband_id`, `wife_id`, `order_no`, `remarks`) VALUES
(1, 2, 1, '一世祖夫妇(示例).'),
(3, 6, 1, NULL),
(4, 7, 1, NULL),
(5, 8, 1, NULL);

-- ---------- 原文摘录(示例) ----------
INSERT INTO `citation` (`person_id`, `book_id`, `page`, `content`) VALUES
(1, 1, '第3页', '始祖讳启,原籍江右,明初卜居于此,勤俭持家,子孙繁昌。'),
(3, 1, '第5页', '二世长房守仁公,端方正直,克绍箕裘。');

-- ---------- 图片附件(示例,可选项) ----------
-- 下方 url 为示例占位,部署后替换为真实图片外链
INSERT INTO `attachment` (`person_id`, `url`, `title`, `book_id`, `remarks`) VALUES
(1, 'https://example.com/tao/v1/p3.jpg', '第1卷·第3页·一世祖世系图', 1, '示例外链,请替换'),
(3, 'https://example.com/tao/v1/p5.jpg', '第1卷·第5页·长房世系', 1, '示例外链,请替换');

-- ---------- 管理员(示例,密码为 123456 的 bcrypt 哈希占位,上线前请修改) ----------
INSERT INTO `users` (`username`, `password_hash`, `nickname`) VALUES
('admin', '$2a$10$REPLACE_ME_BEFORE_USE__REPLACE_ME_BEFORE_USE_', '管理员');
