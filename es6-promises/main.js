import takeAChance from './take-a-chance.js';

takeAChance('Marshall')
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
