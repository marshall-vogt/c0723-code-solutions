/* exported filterOutNulls */

function filterOutNulls(values) {
  const filteredArray = [];
  for (let i = 0; i < values.length; i++) {
    if (Boolean(values[i]) === true) {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
