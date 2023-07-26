/* exported zip */

function zip(first, second) {
  const zipArray = [];
  if (first.length === second.length || first.length < second.length) {
    for (let i = 0; i < first.length; i++) {
      const subArray = [];
      subArray.push(first[i]);
      subArray.push(second[i]);
      zipArray.push(subArray);
    }
  } else {
    for (let i = 0; i < second.length; i++) {
      const subArray = [];
      subArray.push(first[i]);
      subArray.push(second[i]);
      zipArray.push(subArray);
    }
  }
  return zipArray;
}
