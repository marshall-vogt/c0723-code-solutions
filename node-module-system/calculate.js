import add from './files/add.js';
import subtract from './files/subtract.js';
import multiply from './files/multiply.js';
import divide from './files/divide.js';

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const keyword = process.argv[3];
if (keyword === 'plus') {
  console.log(add(num1, num2));
} else if (keyword === 'minus') {
  console.log(subtract(num1, num2));
} else if (keyword === 'over') {
  console.log(divide(num1, num2));
} else if (keyword === 'times') {
  console.log(multiply(num1, num2));
} else {
  console.log('invalid operation');
}
