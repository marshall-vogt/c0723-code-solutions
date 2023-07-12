/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// isUnderFive function
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('Is 4 under 5:', isUnderFive(4));
console.log('Is 10 under 5:', isUnderFive(10));
console.log('Is 5 under 5:', isUnderFive(5));

// isEven function

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('Is 4 even:', isEven(4));
console.log('Is 10 even:', isEven(10));
console.log('Is 5 even:', isEven(5));

// startsWithJ function

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('Javascript starts with J:', startsWithJ('Javascript'));
console.log('PHP starts with J:', startsWithJ('PHP'));
console.log('HTML starts with J:', startsWithJ('HTML'));
console.log('Java starts with J:', startsWithJ('Java'));
console.log('Kotlin starts with J:', startsWithJ('Kotlin'));
console.log('C# starts with J:', startsWithJ('C#'));

// isOldEnoughToDrink function

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log('bart is old enough to drink: ', isOldEnoughToDrink(bart));

// isOldEnoughToDrive function

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log('homer is old enough to drive: ', isOldEnoughToDrive(homer));

// isOldEnoughToDrinkAndDrive

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log('isOldEnoughToDrinkAndDrive: ', isOldEnoughToDrinkAndDrive());

// categorizeAcidity function

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('pH of 3: ', categorizeAcidity(3));
console.log('pH of 14.0000001: ', categorizeAcidity(14.0000001));
console.log('pH of 7: ', categorizeAcidity(7));
console.log('pH of 2: ', categorizeAcidity(2));
console.log('pH of 9: ', categorizeAcidity(9));

// introduceWarnerBro function

function introduceWarnerBro(name) {
  const firstName = name;
  switch (firstName) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log('yakko introduction: ', introduceWarnerBro('yakko'));
console.log('wakko introduction: ', introduceWarnerBro('wakko'));
console.log('dot introduction: ', introduceWarnerBro('dot'));
console.log('cody introduction: ', introduceWarnerBro('cody'));
console.log('minerva introduction: ', introduceWarnerBro('minerva'));

// recommendMovie function

function recommendMovie(genre) {
  const movieGenre = genre;
  switch (movieGenre) {
    case 'action':
      return 'Kill Bill';
    case 'comedy':
      return 'Ace Ventura';
    case 'horror':
      return 'Saw';
    case 'drama':
      return 'Goodwill Hunting';
    case 'musical':
      return 'Phantom of the Opera';
    case 'sci-fi':
      return 'The Matrix';
    default:
      return 'Genre not recognized';
  }
}

console.log('recommend action movie: ', recommendMovie('action'));
console.log('recommend comedy movie: ', recommendMovie('comedy'));
console.log('recommend random movie: ', recommendMovie('random'));
