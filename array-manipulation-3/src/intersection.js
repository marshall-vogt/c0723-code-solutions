/* exported intersection */

function intersection(first, second) {
  const intersectionArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersectionArray.push(first[i]);
    }
  }
  return intersectionArray;
}
