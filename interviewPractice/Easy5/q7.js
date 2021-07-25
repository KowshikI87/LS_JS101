/*

Problems
- given two arrays of numbers
- return a new array where each element = element from array1 
* element from array2
- both array will always contain same number of elements
- Input: two arrays
- Output: single array

Test Cases/Examples
- given


Data Structure
- use a singel array


Algorithm
- we can just call the map method on first array and use the 
index parameter to multiply both array's element together


Code

*/

function multiplyList(arr1, arr2) {
  return arr1.map((_, index) => arr1[index] * arr2[index]);
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]