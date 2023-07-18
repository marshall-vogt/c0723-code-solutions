/* exported difference */

function difference(first, second) {
  const differenceArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      differenceArray.push(second[i]);
    }
  }
  return differenceArray;
}
