/* exported includes */

function includes(array, value) {
  let x = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      x = true;
      return x;
    }
  }
  return x;
}
