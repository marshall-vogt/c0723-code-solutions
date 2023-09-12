import express from 'express';
const app = express();
let nextId = 1;
const grades = {};
app.get('/api/grades', (req, res) => {
  const entryArray = [];
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
