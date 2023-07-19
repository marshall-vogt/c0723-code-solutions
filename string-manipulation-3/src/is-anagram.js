/* exported isAnagram */

function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '').split('').sort().join();
  secondString = secondString.replaceAll(' ', '').split('').sort().join();
  return firstString === secondString;
}
