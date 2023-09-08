import { writeFile } from 'node:fs/promises';

try {
  const input = process.argv[2];
  await writeFile('note.txt', `${input} \n`);
} catch (error) {
  console.error(error);
}
