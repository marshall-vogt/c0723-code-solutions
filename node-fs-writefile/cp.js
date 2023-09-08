import { readFile, writeFile } from 'node:fs/promises';

try {
  const fromText = await readFile(process.argv[2], 'utf8');
  const toText = process.argv[3];
  await writeFile(toText, `${fromText} \n`);
} catch (error) {
  console.error(error);
}
