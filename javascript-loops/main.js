/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen function

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(getNumbersToTen());

// getEvenNumbersToTwenty function

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());

// repeatWord function

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('javascript', 30));

// logEachCharacter function

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('javascript');

// doubleAll function

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleAll([5, 7, 9, 11]));

// getKeys function

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log(
  getKeys({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmeyer',
  })
);

// getValues function

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log(
  getValues({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmeyer',
  })
);
