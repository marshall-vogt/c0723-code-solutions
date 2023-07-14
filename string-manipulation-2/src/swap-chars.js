/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  const stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (i === firstIndex) {
      newString += stringArray[secondIndex];
    } else if (i === secondIndex) {
      newString += stringArray[firstIndex];
    } else {
      newString += stringArray[i];
    }
  }
  return newString;
}
