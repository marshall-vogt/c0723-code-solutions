/* exported dropRight */

function dropRight(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
