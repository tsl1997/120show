const express = require('express');
const pool = require('../db');

const router = express.Router();

const PERSON_FIELDS = `
  p.id, p.name, p.gender, p.generation, p.father_id, p.mother_id,
  p.ranking, p.zi, p.hao, p.birth_year, p.death_year, p.remarks,
  p.source_book_id, p.source_page,
  b.title AS source_book_title
`;

/**
 * GET /api/person/:id
 * 返回本人 + 父母 + 配偶 + 子女 + 图片 + 原文摘录,用于详情面板。
 */
router.get('/person/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (!id || Number.isNaN(id)) {
      return res.status(400).json({ error: '非法 id' });
    }

    const [[person]] = await pool.query(
      `SELECT ${PERSON_FIELDS}
         FROM person p
         LEFT JOIN book b ON b.id = p.source_book_id
        WHERE p.id = ?`,
      [id]
    );

    if (!person) {
      return res.status(404).json({ error: '人物不存在' });
    }

    // 父母
    const parentIds = [person.father_id, person.mother_id].filter(Boolean);
    const parents = [];
    if (parentIds.length) {
      const [rows] = await pool.query(
        `SELECT id, name, gender, generation, birth_year, death_year
           FROM person WHERE id IN (?)`,
        [parentIds]
      );
      parents.push(...rows);
    }

    // 配偶(双向)
    const [spouses] = await pool.query(
      `SELECT p.id, p.name, p.gender, p.generation, m.order_no
         FROM marriage m
         JOIN person p ON (p.id = m.wife_id AND m.husband_id = ?)
                       OR (p.id = m.husband_id AND m.wife_id = ?)
        ORDER BY m.order_no`,
      [id, id]
    );

    // 子女(以父/母为本人)
    const [children] = await pool.query(
      `SELECT ${PERSON_FIELDS}
         FROM person p
         LEFT JOIN book b ON b.id = p.source_book_id
        WHERE p.father_id = ? OR p.mother_id = ?
        ORDER BY p.ranking, p.id`,
      [id, id]
    );

    // 图片附件
    const [attachments] = await pool.query(
      `SELECT a.url, a.title, a.remarks, b.title AS book_title
         FROM attachment a
         LEFT JOIN book b ON b.id = a.book_id
        WHERE a.person_id = ?`,
      [id]
    );

    // 原文摘录
    const [citations] = await pool.query(
      `SELECT c.content, c.page, b.title AS book_title
         FROM citation c
         LEFT JOIN book b ON b.id = c.book_id
        WHERE c.person_id = ?`,
      [id]
    );

    res.json({ person, parents, spouses, children, attachments, citations });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
