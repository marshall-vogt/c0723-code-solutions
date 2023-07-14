/* exported getValues */

function getValues(object) {
  const valuesArray = [];
  for (const key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
