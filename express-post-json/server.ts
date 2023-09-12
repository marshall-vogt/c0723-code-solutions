import express from 'express';

const app = express();

type Entry = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type Grades = {
  [key: number]: Entry;
};

let nextId = 1;

const grades: Grades = {};

app.get('/api/grades', (req, res) => {
  const entryArray: Entry[] = [];
  for (const entry in grades) {
    entryArray.push(grades[entry]);
  }
  res.json(entryArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
