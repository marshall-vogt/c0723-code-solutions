/* exported countdown */

function countdown(number) {
  const cdArray = [];
  while (number >= 0) {
    cdArray.push(number);
    number--;
  }
  return cdArray;
}
