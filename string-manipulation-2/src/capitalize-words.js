/* exported capitalizeWords */

function capitalizeWords(string) {
  let newString = '';
  const stringArray = string.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    const firstLetter = stringArray[i].slice(0, 1);
    const restOfWord = stringArray[i].slice(1);
    newString += firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
  }
  return newString.trim();
}
