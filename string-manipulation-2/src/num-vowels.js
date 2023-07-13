/* exported numVowels */

function numVowels(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
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
        counter++;
    }
  }
  return counter;
}
