/* exported truncate */

function truncate(length, string) {
  let newString = '';
  newString += string.slice(0, length);
  return newString + '...';
}
