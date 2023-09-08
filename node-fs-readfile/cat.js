import { readFile } from 'node:fs/promises';

try {
  const processes = process.argv.slice(2).map(async (file) => {
    const process = new URL(file, import.meta.url);
    const contents = await readFile(process, {
      encoding: 'utf8',
    });
    return contents;
  });
  const promises = await Promise.all(processes);
  promises.map((promise) => console.log(promise));
} catch (error) {
  console.log(error);
}
