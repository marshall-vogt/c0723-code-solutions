/* exported equal */

function equal(first, second) {
  if (typeof first[0] !== 'object') {
    first = first.toString();
    second = second.toString();
    return first === second;
  } else {
    return first.every((element, index) => element === second[index]);
  }
}
