/* exported omit */

function omit(source, keys) {
  const obj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      obj[key] = source[key];
    }
  }
  return obj;
}
