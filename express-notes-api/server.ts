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

async function read(): Promise<Data> {
  const jsonData = await readFile('./data.json', 'utf-8');
  return JSON.parse(jsonData);
}

async function write(obj: Data) {
  await writeFile('./data.json', JSON.stringify(obj, null, 2));
}

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const dataParsed: Data = await read();
    const entryArray: Entry[] = [];
    for (const entry in dataParsed.notes) {
      entryArray.push(dataParsed.notes[entry]);
    }
    res.json(entryArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const dataParsed: Data = await read();
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ Error: 'ID must be a positive integer!' });
    } else if (!dataParsed.notes[id]) {
      res.status(404).json({ Error: `No entry exists with ID: ${id}` });
    } else {
      res.status(200).json(dataParsed.notes[id]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const dataParsed: Data = await read();
    if (!req.body.content) {
      res.status(400).json({ Error: 'Content is a required field' });
    }
    dataParsed.notes[dataParsed.nextId] = req.body;
    dataParsed.notes[dataParsed.nextId].id = dataParsed.nextId;
    write(dataParsed);
    res.status(201).json(dataParsed.notes[dataParsed.nextId]);
    dataParsed.nextId++;
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: 'Unexpected error' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const dataParsed: Data = await read();
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ Error: 'ID must be a positive integer' });
    } else if (!dataParsed.notes[id]) {
      res.status(404).json({ Error: `No entry exists with ID: ${id}` });
    } else if (id in dataParsed.notes) {
      delete dataParsed.notes[id];
      write(dataParsed);
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const dataParsed: Data = await read();
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ Error: 'ID must be a positive integer' });
    } else if (!req.body.content) {
      res.status(400).json({ Error: 'Content is a required field' });
    } else if (!dataParsed.notes[id]) {
      res.status(404).json({ Error: `No entry exists with ID: ${id}` });
    } else if (id in dataParsed.notes) {
      dataParsed.notes[id].content = req.body.content;
      write(dataParsed);
      res.status(201).json(dataParsed.notes[id]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
