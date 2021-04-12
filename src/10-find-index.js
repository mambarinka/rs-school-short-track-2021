/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const data = array;
  const target = value;

  const binarySearch = (arr, val, start, end) => {
    const middle = Math.floor((start + end) / 2);

    if (val === arr[middle]) {
      return middle;
    }

    if (end - 1 === start) {
      if (Math.abs(arr[start] - val) > Math.abs(arr[end] - val)) {
        return end;
      }
      return start;
    }

    if (val > arr[middle]) {
      return binarySearch(arr, val, middle, end);
    }

    if (val < arr[middle]) {
      return binarySearch(arr, val, start, middle);
    }

    return -1;
  };

  const IndexResult = binarySearch(data, target, 0, array.length - 1);
  return IndexResult;
}

module.exports = findIndex;
