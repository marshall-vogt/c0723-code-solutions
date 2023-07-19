/* exported reverseWords */

function reverseWords(string) {
  const stringArray = string.split(' ');
  const newStringArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    let newString = '';
    for (let j = stringArray[i].length - 1; j >= 0; j--) {
      newString += stringArray[i][j];
    }
    newStringArray.push(newString);
  }
  return newStringArray.join(' ');
}
