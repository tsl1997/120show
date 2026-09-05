const express = require('express');
const cors = require('cors');
const pool = require('./db');
const treeRoutes = require('./routes/tree');
const personRoutes = require('./routes/person');

require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ status: 'ok', db: rows[0].ok === 1 });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.use('/api', treeRoutes);
app.use('/api', personRoutes);

app.use((req, res) => {
  res.status(404).json({ error: '接口不存在' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: '服务器内部错误', detail: err.message });
});

app.listen(PORT, () => {
  console.log(`陶氏族谱后端已启动: http://localhost:${PORT}`);
});
