/* exported flatten */

function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
      continue;
    }
    for (let j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }
  return newArray;
}
