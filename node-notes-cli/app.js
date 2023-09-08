import { readFile, writeFile } from 'node:fs/promises';

try {
  const jsonData = await readFile('./data.json');
  const dataParsed = JSON.parse(jsonData);
  process.argv[2] === 'read' && read(dataParsed.notes);
  process.argv[2] === 'create' && create(process.argv[3], dataParsed);
  process.argv[2] === 'update' &&
    update(process.argv[3], process.argv[4], dataParsed);
  process.argv[2] === 'delete' && Delete(process.argv[3], dataParsed);
} catch (error) {
  console.error(error);
}

function read(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

function create(string, obj) {
  obj.notes[obj.nextId] = string;
  obj.nextId++;
  write(obj);
}

function update(id, string, obj) {
  if (Object.hasOwn(obj.notes, id)) {
    obj.notes[id] = string;
    write(obj);
  } else {
    throw new Error('No entry exists with that ID');
  }
}

function Delete(id, obj) {
  if (Object.hasOwn(obj.notes, id)) {
    delete obj.notes[id];
    write(obj);
  } else {
    throw new Error('No entry exists with that ID');
  }
}

async function write(obj) {
  const createData = JSON.stringify(obj, null, 2);
  await writeFile('./data.json', `${createData} \n`);
}
