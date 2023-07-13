/* exported isVowel */

function isVowel(char) {
  switch (char) {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
      return true;
    default:
      return false;
  }
}
