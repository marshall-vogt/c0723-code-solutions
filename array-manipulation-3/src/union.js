/* exported union */

function union(first, second) {
  const unionArray = [];
  for (let i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      unionArray.push(second[i]);
    }
  }
  return unionArray;
}
