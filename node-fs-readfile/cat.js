import { readFile } from 'node:fs/promises';

try {
  const processes = process.argv.slice(2).map((file) => readFile(file, 'utf8'));
  const promises = await Promise.all(processes);
  console.log(promises.join('\n'));
} catch (error) {
  console.log(error);
}
