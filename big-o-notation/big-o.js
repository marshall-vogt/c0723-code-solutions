/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _1 * 1_ = O(1)
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // _1 * 1_ = O(1)
    i < words.length; // _2 * n_ = O(n)
    i++ // _2 * n_ = O(n)
  ) {
    const word = words[i]; // _2 * n_ = O(n)
    if (!seen[word]) {
      // _1 * n_ = O(n)
      seen[word] = true; // _2 * n_ = O(n)
      unique[unique.length] = word; // _3 * n_ = O(n)
    }
  }
  return unique; // _1 * 1_ = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // _1 * 1_ = O(1)
    i < words.length; // _2 * n_ = O(n)
    i++ // _2 * n_ = O(n)
  ) {
    const word = words[i]; // _2 * n_ = O(n)
    let isUnique = true; // _1 * 1_ = O(1)
    for (
      let c = 0; // _1 * n_ = O(n)
      c < i; // _1 * n * n_ = O(n^2)
      c++ // _2 * n * n_ = O(n^2)
    ) {
      const comparing = words[c]; // _2 * n * n_ = O(n^2)
      if (comparing === word) {
        // _1 * n * n_ = O(n^2)
        isUnique = false; // _1 * n * n_ = O(n^2)
      }
    }
    if (isUnique) {
      // _1 * n_ = O(n)
      unique[unique.length] = word; // _3 * n_ = O(n)
    }
  }
  return unique; // _1 * 1_ = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
