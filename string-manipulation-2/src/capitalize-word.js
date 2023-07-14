/* exported capitalizeWord */

function capitalizeWord(word) {
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  } else {
    const firstLetter = word.slice(0, 1);
    const restOfWord = word.slice(1);
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  }
}
