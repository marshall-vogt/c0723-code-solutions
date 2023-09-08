import { readFile } from 'node:fs/promises';

try {
  const contents = await readFile('dijkstra.txt', 'utf8');
  console.log(contents);
} catch (error) {
  console.log(error);
}
