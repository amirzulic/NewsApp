import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var pg = require('pg');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const config = {
  user: 'qwgupwtr',
  database: 'qwgupwtr',
  password: 'ZgTXGfCtmG40pDmGD_VRtVHEck7pHxrI',
  host: 'mel.db.elephantsql.com',
  port: 5432,
  max: 100,
  idleTimeoutMillis: 10
};
const pool = new pg.Pool(config);

app.get('/', (req, res) => {
  res.json({ message: 'Hi!' });
});

app.get('/reports', (req, res) => {
  pool.connect(function (err, client, done) {
    if (err) {
      res.end('{"error" : "Error", "status": 500}');
    }
    client.query(`SELECT * FROM report;`, [], function (err, result) {
      done();
      if (err) {
        console.info(err);
      } else {
        res.json({ reports: result.rows });
      }
    });
  });
});

app.get('/reports/:id', (req, res) => {
  let id = req.params.id;
  pool.connect(function (err, client, done) {
    if (err) {
      res.end('{"error" : "Error", "status": 500}');
    }
    client.query(`SELECT * FROM report WHERE report_id = ${id};`, [], function (err, result) {
      done();
      if (err) {
        console.info(err);
      } else {
        res.json({ report: result.rows[0] });
      }
    });
  });
});

app.get('/comments/:id', (req, res) => {
  let id = req.params.id;
  pool.connect(function (err, client, done) {
    if (err) {
      res.end('{"error" : "Error", "status": 500}');
    }
    client.query(`SELECT * FROM comment WHERE report_id = ${id};`, [], function (err, result) {
      done();
      if (err) {
        console.info(err);
      } else {
        res.json({ comments: result.rows });
      }
    });
  });
});

app.post('/new-comment', (req, res) => {
  let comment = req.body.comment;
  let date = req.body.date;
  let report_id = req.body.report_id;
  pool.connect(function (err, client, done) {
    if (err) {
      res.end('{"error" : "Error", "status": 500}');
    }
    client.query(
      `INSERT INTO comment(comment, date, report_id) VALUES('${comment}', '${date}', ${report_id})`,
      [],
      function (err) {
        done();
        if (err) {
          console.info(err);
        } else {
          res.json({ message: 'Successfully commented!' });
        }
      }
    );
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
