const arrayOfBooks = [
  {
    isbn: '99-7654321',
    title: 'How to Code',
    author: 'Thomas Henry Allen',
  },
  {
    isbn: '99-1234567',
    title: 'How to Program',
    author: 'Henry Allen Thomas',
  },
  {
    isbn: '99-8765432',
    title: 'How to Program and Code',
    author: 'Allen Thomas Henry',
  },
];

console.log('Value of arrayOfBooks:', arrayOfBooks);
console.log('Typeof arrayOfBooks:', typeof arrayOfBooks);

const jsonString = JSON.stringify(arrayOfBooks);

console.log('Value of jsonString:', jsonString);
console.log('Typeof jsonString:', typeof jsonString);

const stringOfStudent =
  '[{"studentName":"Marshall Vogt","studentID":"7654321"},{"studentName":"George Washington","studentID":"8765432"}]';

console.log('Value of stringOfStudent:', stringOfStudent);
console.log('Typeof stringOfStudent:', typeof stringOfStudent);

const jsonObject = JSON.parse(stringOfStudent);

console.log('Value of jsonObject:', jsonObject);
console.log('Typeof jsonObject:', typeof jsonObject);
