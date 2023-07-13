/* exported getKeys */

function getKeys(object) {
  const keysArray = [];
  for (const key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
