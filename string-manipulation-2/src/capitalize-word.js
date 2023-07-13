/* exported capitalizeWord */

function capitalizeWord(word) {
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    const java = lowerCaseWord.slice(0, 4);
    const script = lowerCaseWord.slice(4);
    const j = java.slice(0, 1);
    const ava = java.slice(1);
    const s = script.slice(0, 1);
    const cript = script.slice(1);
    return j.toUpperCase() + ava + s.toUpperCase() + cript;
  } else {
    const firstLetter = word.slice(0, 1);
    const restOfWord = word.slice(1);
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  }
}
