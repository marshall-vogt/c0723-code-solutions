import { readFile } from 'node:fs/promises';

try {
  const dijkstraText = new URL('./dijkstra.txt', import.meta.url);
  const contents = await readFile(dijkstraText, { encoding: 'utf8' });
  console.log(contents);
} catch (error) {
  console.log(error);
}
