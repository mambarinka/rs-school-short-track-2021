/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  let same = 0;

  s1Array.map((item) => {
    if (s2Array.indexOf(item) >= 0) {
      s2Array.splice(s2Array.indexOf(item), 1);
      same++;
    }
    return same;
  });
  return same;
}

module.exports = getCommonCharacterCount;
