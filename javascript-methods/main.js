// Math object
const x = 27;
const y = 13;
const z = 9;

const maximumValue = Math.max(x, y, z);
console.log('maximumValue', maximumValue);

const heroes = ['Batman', 'Superman', 'Wolverine', 'The Flash'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

// Array Methods

const library = [
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
];

const lastBook = library.pop();
console.log('lastBook', lastBook);

const firstBook = library.shift();
console.log('firstBook', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libary', library);

// String Methods

const fullName = 'Marshall Vogt';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName', sayMyName);
