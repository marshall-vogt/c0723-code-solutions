/* exported capitalize */

function capitalize(word) {
  const firstLetter = word.slice(0, 1);
  const restOfWord = word.slice(1);
  return firstLetter.toUpperCase() + restOfWord.toLowerCase();
}
