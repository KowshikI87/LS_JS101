/*

Problem
- Explicit Requirement: union of two arrays which means unique values in two arrays combined
- Input: two arrays
- Output: single new 
- Assumption: the arrays contains numbers only
  - So we can use === operator without worrying

Example
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Data Structure
- we will use an 'total' array that concats array1 + array2
- we will use a new array to only contain the unique values in 'total' array

Algorithm
- simple. Simple for loop will do the trick
*/

function union(arr1, arr2) {
  let arrCombined = arr1.concat(arr2);
  let arrUnion = [];

  for (let i = 0; i < arrCombined.length; i++) {
    if (!(arrUnion.includes(arrCombined[i]))) {
      arrUnion.push(arrCombined[i]);
    }
  }
  return arrUnion;
}

console.log(union([1, 3, 5], [3, 6, 9]));