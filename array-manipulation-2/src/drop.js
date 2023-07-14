/* exported drop */

function drop(array, count) {
  const dropArray = [];
  for (let i = count; i < array.length; i++) {
    if (array.length === 0) {
      return dropArray;
    } else {
      dropArray.push(array[i]);
    }
  }
  return dropArray;
}
