import { readFile } from 'node:fs/promises';

try {
  const anyText = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(anyText, { encoding: 'utf8' });
  console.log(contents);
} catch (error) {
  console.log(error);
}
