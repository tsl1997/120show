-- ============================================================
-- 陶氏族谱 (tao) 数据库结构
-- MySQL 5.7.20 / InnoDB / utf8mb4
-- 设计文档见 ../docs/database.md
-- ============================================================

CREATE DATABASE IF NOT EXISTS `tao`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE `tao`;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `citation`;
DROP TABLE IF EXISTS `attachment`;
DROP TABLE IF EXISTS `marriage`;
DROP TABLE IF EXISTS `person`;
DROP TABLE IF EXISTS `book`;
DROP TABLE IF EXISTS `users`;
SET FOREIGN_KEY_CHECKS = 1;

-- ------------------------------------------------------------
-- 1. 族谱书目表 book:登记原始纸质族谱(约 40 本)
-- ------------------------------------------------------------
CREATE TABLE `book` (
  `id`         INT UNSIGNED    NOT NULL AUTO_INCREMENT COMMENT '主键',
  `book_no`    VARCHAR(20)     NOT NULL COMMENT '编号,如 第1卷',
  `title`      VARCHAR(200)    NOT NULL COMMENT '卷名',
  `period`     VARCHAR(100)    DEFAULT NULL COMMENT '年代/时代',
  `remarks`    TEXT            COMMENT '备注',
  `created_at` TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_book_no` (`book_no`)
) ENGINE=InnoDB COMMENT='族谱书目';

-- ------------------------------------------------------------
-- 2. 人物表 person:所有陶氏子孙及配偶
-- ------------------------------------------------------------
CREATE TABLE `person` (
  `id`             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键,唯一编号',
  `name`           VARCHAR(50)     NOT NULL COMMENT '姓名',
  `gender`         TINYINT         NOT NULL DEFAULT 1 COMMENT '性别:1男 2女',
  `generation`     INT             NOT NULL COMMENT '世系,一世祖=1',
  `father_id`      BIGINT UNSIGNED DEFAULT NULL COMMENT '父亲(person.id)',
  `mother_id`      BIGINT UNSIGNED DEFAULT NULL COMMENT '母亲(person.id)',
  `ranking`        TINYINT         DEFAULT NULL COMMENT '兄弟排行(序齿,1=长)',
  `zi`             VARCHAR(50)     DEFAULT NULL COMMENT '字',
  `hao`            VARCHAR(50)     DEFAULT NULL COMMENT '号',
  `birth_year`     SMALLINT        DEFAULT NULL COMMENT '出生年份(公元,可空)',
  `death_year`     SMALLINT        DEFAULT NULL COMMENT '去世年份(公元,可空)',
  `remarks`        TEXT            COMMENT '备注/生平/事迹',
  `source_book_id` INT UNSIGNED    DEFAULT NULL COMMENT '出处:书(book.id)',
  `source_page`    VARCHAR(50)     DEFAULT NULL COMMENT '出处:页码',
  `created_at`     TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`     TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_generation` (`generation`),
  KEY `idx_father` (`father_id`),
  KEY `idx_mother` (`mother_id`),
  KEY `idx_name` (`name`),
  CONSTRAINT `fk_person_father` FOREIGN KEY (`father_id`) REFERENCES `person` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_person_mother` FOREIGN KEY (`mother_id`) REFERENCES `person` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_person_book`   FOREIGN KEY (`source_book_id`) REFERENCES `book` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB COMMENT='人物表';

-- ------------------------------------------------------------
-- 3. 夫妻表 marriage:配偶关系(多对多,支持续弦/一夫多妻)
-- ------------------------------------------------------------
CREATE TABLE `marriage` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `husband_id` BIGINT UNSIGNED NOT NULL COMMENT '夫(person.id)',
  `wife_id`    BIGINT UNSIGNED NOT NULL COMMENT '妻(person.id)',
  `order_no`   TINYINT         NOT NULL DEFAULT 1 COMMENT '第几任/排序',
  `remarks`    TEXT            COMMENT '备注(如合葬地等)',
  `created_at` TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_marriage_husband` (`husband_id`),
  KEY `idx_marriage_wife` (`wife_id`),
  CONSTRAINT `fk_marriage_husband` FOREIGN KEY (`husband_id`) REFERENCES `person` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_marriage_wife`   FOREIGN KEY (`wife_id`)    REFERENCES `person` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB COMMENT='夫妻表';

-- ------------------------------------------------------------
-- 4. 图片附件表 attachment:原始族谱照片(外链 url,不存图片本体)
-- ------------------------------------------------------------
CREATE TABLE `attachment` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `person_id`  BIGINT UNSIGNED NOT NULL COMMENT '所属人物(person.id)',
  `url`        VARCHAR(500)    NOT NULL COMMENT '图片外链地址',
  `title`      VARCHAR(200)    DEFAULT NULL COMMENT '标题,如 第3卷·第18页',
  `book_id`    INT UNSIGNED    DEFAULT NULL COMMENT '来源书(book.id)',
  `remarks`    TEXT            COMMENT '说明',
  `created_at` TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_attachment_person` (`person_id`),
  KEY `idx_attachment_book` (`book_id`),
  CONSTRAINT `fk_attachment_person` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_attachment_book`   FOREIGN KEY (`book_id`)   REFERENCES `book` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB COMMENT='图片附件';

-- ------------------------------------------------------------
-- 5. 原文摘录表 citation:保存族谱关键原文,便于日后核对
-- ------------------------------------------------------------
CREATE TABLE `citation` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `person_id`  BIGINT UNSIGNED NOT NULL COMMENT '关联人物(person.id)',
  `book_id`    INT UNSIGNED    DEFAULT NULL COMMENT '出处书(book.id)',
  `page`       VARCHAR(50)     DEFAULT NULL COMMENT '页码',
  `content`    TEXT            NOT NULL COMMENT '原文内容',
  `created_at` TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_citation_person` (`person_id`),
  CONSTRAINT `fk_citation_person` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_citation_book`   FOREIGN KEY (`book_id`)   REFERENCES `book` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB COMMENT='原文摘录';

-- ------------------------------------------------------------
-- 6. 管理员表 users:录入/编辑权限(密码为哈希)
-- ------------------------------------------------------------
CREATE TABLE `users` (
  `id`           INT UNSIGNED  NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username`     VARCHAR(50)   NOT NULL COMMENT '登录名',
  `password_hash` VARCHAR(255) NOT NULL COMMENT '密码哈希',
  `nickname`     VARCHAR(50)   DEFAULT NULL COMMENT '昵称',
  `created_at`   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB COMMENT='管理员';
