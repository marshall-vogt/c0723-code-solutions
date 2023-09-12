import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

type Entry = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: {
    [key: number]: Entry;
  };
};

async function write(obj: Data) {
  const createData = JSON.stringify(obj, null, 2);
  await writeFile('./data.json', `${createData} \n`);
}

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const jsonData = await readFile('./data.json', 'utf-8');
  const dataParsed: Data = JSON.parse(jsonData);
  const entryArray: Entry[] = [];
  for (const entry in dataParsed.notes) {
    entryArray.push(dataParsed.notes[entry]);
  }
  res.json(entryArray);
});

app.get('/api/notes/:id', async (req, res) => {
  const jsonData = await readFile('./data.json', 'utf-8');
  const dataParsed: Data = JSON.parse(jsonData);
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).send({ Error: 'ID must be a positive integer!' });
  } else if (!dataParsed.notes[id]) {
    res.status(404).send({ Error: `No entry exists with ID: ${id}` });
  } else {
    res.status(200).send(dataParsed.notes[id]);
  }
});

app.post('/api/notes', async (req, res) => {
  const jsonData = await readFile('./data.json', 'utf-8');
  const dataParsed: Data = JSON.parse(jsonData);
  try {
    if (!req.body.content) {
      res.status(400).send({ Error: 'Content is a required field' });
    }
    dataParsed.notes[dataParsed.nextId] = req.body;
    dataParsed.notes[dataParsed.nextId].id = dataParsed.nextId;
    write(dataParsed);
    res.status(201).send(dataParsed.notes[dataParsed.nextId]);
    dataParsed.nextId++;
  } catch (error) {
    console.error(error);
    res.status(500).send({ Error: 'Unexpected error' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const jsonData = await readFile('./data.json', 'utf-8');
  const dataParsed: Data = JSON.parse(jsonData);
  const id = Number(req.params.id);
  try {
    if (id < 0) {
      res.status(400).send({ Error: 'ID must be a positive integer' });
    } else if (!dataParsed.notes[id]) {
      res.status(404).send({ Error: `No entry exists with ID: ${id}` });
    } else if (id in dataParsed.notes) {
      delete dataParsed.notes[id];
      write(dataParsed);
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ Error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const jsonData = await readFile('./data.json', 'utf-8');
  const dataParsed: Data = JSON.parse(jsonData);
  const id = Number(req.params.id);
  try {
    if (id < 0) {
      res.status(400).send({ Error: 'ID must be a positive integer' });
    } else if (!req.body.content) {
      res.status(400).send({ Error: 'Content is a required field' });
    } else if (!dataParsed.notes[id]) {
      res.status(404).send({ Error: `No entry exists with ID: ${id}` });
    } else if (id in dataParsed.notes) {
      dataParsed.notes[id].content = req.body.content;
      write(dataParsed);
      res.status(201).send(dataParsed.notes[id]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ Error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
