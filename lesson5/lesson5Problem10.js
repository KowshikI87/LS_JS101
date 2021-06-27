/*
Given the following data structure, return a new array with the
same structure, but with the values in each subarray ordered --
alphabetically or numerically as appropriate -- in
descending (change from last question) order.
*/
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let sortedArray = arr.map((array) => {
  let copyArray = array.slice();
  return copyArray.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});
console.log(arr);
console.log(sortedArray);