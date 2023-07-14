/* exported chunk */

function chunk(array, size) {
  const newArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = array.slice(i, i + size);
    newArray.push(subArray);
  }
  return newArray;
}
