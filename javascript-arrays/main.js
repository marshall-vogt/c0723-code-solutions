const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

const americaString =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(americaString);

colors[2] = 'green';

const mexicoString =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexicoString);

console.log(colors);

const students = ['Mary', 'Tom', 'Andy', 'Sam'];

const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the class is ' + lastStudent + '.');
console.log(students);
