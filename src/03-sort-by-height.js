/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      newArray.push(array[i]);
    }
  }
  newArray.sort((a, b) => a - b);

  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      array.splice(i, 1, newArray[index]);
      index++;
    }
  }

  return array;
}

module.exports = sortByHeight;
