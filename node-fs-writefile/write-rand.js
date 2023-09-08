import { writeFile } from 'node:fs/promises';

try {
  const randomNumber = Math.random().toString();
  await writeFile('random.txt', `${randomNumber} \n`);
} catch (error) {
  console.error(error);
}
