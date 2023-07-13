/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const suffixArray = [];
  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
    suffixArray.push(words[i]);
  }
  return suffixArray;
}
