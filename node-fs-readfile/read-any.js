import { readFile } from 'node:fs/promises';

try {
  const contents = await readFile(process.argv[2], { encoding: 'utf8' });
  console.log(contents);
} catch (error) {
  console.log(error);
}
