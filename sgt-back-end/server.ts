import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// type Grade = {
//   course: string;
//   createdAt: string;
//   gradeId: number;
//   name: string;
//   score: number;
// };

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades";
    `;

    const grades = await db.query(sql);
    res.json(grades.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined) {
      throw new ClientError(400, 'name is a required field');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course is a required field');
    }
    if (score === undefined) {
      throw new ClientError(400, 'score is a required field');
    }
    if (isNaN(score) || score > 100 || score < 0) {
      throw new ClientError(400, 'score should be a value from 0-100');
    }
    const values = [`${name}`, `${course}`, `${score}`];
    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;
    const grades = await db.query(sql, values);
    res.json(grades.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const id = Number(req.params.gradeId);
    const values = [`${name}`, `${course}`, `${score}`, `${id}`];
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *
    `;
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    if (name === undefined) {
      throw new ClientError(400, 'name is a required field');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course is a required field');
    }
    if (
      score === undefined ||
      Number.isNaN(score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'score is a required field and must be a positive integer between 0 and 100'
      );
    }
    if (Number.isNaN(id) || !Number.isInteger(id)) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const grades = await db.query(sql, values);
    if (grades.rows.length === 0) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    res.json(grades.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const id = Number(req.params.gradeId);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const values = [`${id}`];
    const sql = `
    delete
      from "grades"
      where "gradeId" = $1
    `;
    const grades = await db.query(sql, values);
    if (grades.rowCount === 0) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen('8080', () => {
  console.log('Listening on port 8080');
});
