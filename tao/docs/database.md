# 陶氏族谱 · 数据库设计文档

> 数据库:MySQL 5.7.20 · 库名:`tao` · 字符集:utf8mb4 · 引擎:InnoDB
> 建表脚本:`database/schema.sql` · 示例数据:`database/seed.sql`

## 1. 设计目标

- 以**人物(person)**为中心,记录姓名、性别、世系、父母、配偶、子女、备注。
- 支持一夫多妻/续弦(夫妻关系独立成表)。
- 可选记录**原始纸质族谱照片**(外链 url)与**原文摘录**,便于日后核对。
- 世系用数字(一世祖 = 1),同辈靠 `generation` 相同识别;可搭配字辈诗字段。

## 2. 表关系总览

```
book(族谱书目) 1 ── n person.source_book_id        (人物出自哪本书)
book(族谱书目) 1 ── n attachment.book_id           (照片出自哪本书)
book(族谱书目) 1 ── n citation.book_id             (摘录出自哪本书)

person(father_id) n ── 1 person(id)                (父子/父子关系,自关联)
person(mother_id) n ── 1 person(id)                (母子关系,自关联)

person(husband)  n ── n person(wife) 通过 marriage  (夫妻关系)
person ── 1:n attachment                            (一个人多张照片)
person ── 1:n citation                              (一个人多条摘录)
```

## 3. 表结构

### 3.1 `book` 族谱书目

登记原始纸质族谱(约 40 本),供人物/照片/摘录标注出处。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | INT UNSIGNED PK AUTO | 主键 |
| book_no | VARCHAR(20) UNIQUE | 编号,如「第1卷」 |
| title | VARCHAR(200) | 卷名 |
| period | VARCHAR(100) | 年代/时代 |
| remarks | TEXT | 备注 |
| created_at | TIMESTAMP | 创建时间 |

### 3.2 `person` 人物表(核心)

| 字段 | 类型 | 说明 |
|---|---|---|
| id | BIGINT UNSIGNED PK AUTO | 主键,唯一编号 |
| name | VARCHAR(50) | 姓名 |
| gender | TINYINT | 性别:1 男 / 2 女 |
| generation | INT | 世系,一世祖 = 1 |
| father_id | BIGINT UNSIGNED FK→person | 父亲(自关联) |
| mother_id | BIGINT UNSIGNED FK→person | 母亲(自关联) |
| ranking | TINYINT | 兄弟排行(序齿,1 = 长) |
| zi | VARCHAR(50) | 字 |
| hao | VARCHAR(50) | 号 |
| birth_year | SMALLINT | 出生年份(公元) |
| death_year | SMALLINT | 去世年份(公元) |
| remarks | TEXT | 备注/生平/事迹 |
| source_book_id | INT UNSIGNED FK→book | 出处书 |
| source_page | VARCHAR(50) | 出处页码 |
| created_at / updated_at | TIMESTAMP | 时间戳 |

索引:`generation`、`father_id`、`mother_id`、`name`。
外键:`father_id`/`mother_id` 删除时 SET NULL;`source_book_id` 删除时 SET NULL。

### 3.3 `marriage` 夫妻表

| 字段 | 类型 | 说明 |
|---|---|---|
| id | BIGINT UNSIGNED PK AUTO | 主键 |
| husband_id | BIGINT UNSIGNED FK→person | 夫 |
| wife_id | BIGINT UNSIGNED FK→person | 妻 |
| order_no | TINYINT | 第几任 / 排序(默认 1) |
| remarks | TEXT | 备注(如合葬地等) |
| created_at | TIMESTAMP | 创建时间 |

外键:删除关联人物时 CASCADE(连带删除夫妻记录)。

### 3.4 `attachment` 图片附件表

| 字段 | 类型 | 说明 |
|---|---|---|
| id | BIGINT UNSIGNED PK AUTO | 主键 |
| person_id | BIGINT UNSIGNED FK→person | 所属人物 |
| url | VARCHAR(500) | 图片外链地址(只存地址,不存图片本体) |
| title | VARCHAR(200) | 标题,如「第3卷·第18页」 |
| book_id | INT UNSIGNED FK→book | 来源书 |
| remarks | TEXT | 说明 |
| created_at | TIMESTAMP | 创建时间 |

### 3.5 `citation` 原文摘录表

| 字段 | 类型 | 说明 |
|---|---|---|
| id | BIGINT UNSIGNED PK AUTO | 主键 |
| person_id | BIGINT UNSIGNED FK→person | 关联人物 |
| book_id | INT UNSIGNED FK→book | 出处书 |
| page | VARCHAR(50) | 页码 |
| content | TEXT | 原文内容 |
| created_at | TIMESTAMP | 创建时间 |

### 3.6 `users` 管理员表

| 字段 | 类型 | 说明 |
|---|---|---|
| id | INT UNSIGNED PK AUTO | 主键 |
| username | VARCHAR(50) UNIQUE | 登录名 |
| password_hash | VARCHAR(255) | 密码哈希(bcrypt) |
| nickname | VARCHAR(50) | 昵称 |
| created_at | TIMESTAMP | 创建时间 |

## 4. 常用查询示例

```sql
-- 某人的子女(以 陶守仁 id=3 为例)
SELECT id, name, gender, ranking FROM person
WHERE father_id = 3 OR mother_id = 3 ORDER BY ranking;

-- 某人的父母
SELECT id, name, gender FROM person WHERE id IN (father_id, mother_id);
-- 注意:用 SQL 时先取 person.father_id / mother_id 再查一次即可

-- 某人的配偶(以丈夫 id=3 为例)
SELECT p.id, p.name FROM person p
JOIN marriage m ON m.wife_id = p.id WHERE m.husband_id = 3;

-- 某人携带的照片
SELECT url, title FROM attachment WHERE person_id = 3;
```

## 5. 说明与后续

- 当前 `seed.sql` 为**演示数据**(陶启 → 陶守仁/守义/守礼 → 陶承宗等),正式录入时替换为真实族谱。
- 图片为可选项:`attachment.url` 填外链即可,建议后续照片扫描后存 OSS/图床/服务器静态目录。
- 世系已到 18、19 世,数据量较大,建议按「一世祖 → 各代逐支」分批录入;本表结构已支持。
