const express = require('express');
const pool = require('../db');

const router = express.Router();

/**
 * GET /api/tree?start=1&end=3
 * 返回 [start, end] 世系区间内的全部人物(扁平数组)及夫妻关系,
 * 前端据此构建可逐代展开的树。
 */
router.get('/tree', async (req, res, next) => {
  try {
    const start = parseInt(req.query.start, 10) || 1;
    const end = parseInt(req.query.end, 10) || start;

    const [persons] = await pool.query(
      `SELECT id, name, gender, generation, father_id, mother_id, ranking
         FROM person
        WHERE generation BETWEEN ? AND ?
        ORDER BY generation, father_id, ranking, id`,
      [start, end]
    );

    const [marriages] = await pool.query(
      `SELECT husband_id, wife_id FROM marriage`
    );

    res.json({ persons, marriages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
