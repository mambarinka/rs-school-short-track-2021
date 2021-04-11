/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = String(n);
  let max;
  max = string.substring(1);
  for (let i = 0; i < string.length; i++) {
    if (max < string.replace(string[i], '')) {
      max = string.replace(string[i], '');
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
