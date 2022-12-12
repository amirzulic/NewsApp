import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { PAGE_REPORTS } from './data.js';
import { COMMENT_LIST } from './data.js';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/reports', (req, res) => {
  res.json({ reports: PAGE_REPORTS });
});

app.get('/reports/:id', (req, res) => {
  let id = req.params.id;
  const report = PAGE_REPORTS.find((obj) => {
    return obj.id === parseInt(id);
  });
  res.json({ report: report });
});

app.get('/comments', (req, res) => {
  res.json({ comments: COMMENT_LIST });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
