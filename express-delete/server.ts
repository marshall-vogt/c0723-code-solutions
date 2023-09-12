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

const grades: Grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const entryArray: Entry[] = [];
  for (const entry in grades) {
    entryArray.push(grades[entry]);
  }
  res.json(entryArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const gradeId = Number(req.params.id);
  if (gradeId in grades) {
    delete grades[gradeId];
    res.sendStatus(204);
    return;
  }
  res.sendStatus(404);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
