/*

***P
Explicit Requirement: combine two arrays in alterantive fashion
Input: Two seperate arrays
Output: One array
Assumption:
- no arrays are empty
- both array contain same number of elements
- does not matter if either of the array contains objects

***Example: given

***Data Structure and Algorithm
- We will start off with an empty array
- Loop through one of the array and in each iteration push thorugh one element of 
- each array to the new empty array

*/
function interleave(arr1, arr2) {
  let interleaveArray = [];
  arr1.forEach((_, index) => {
    interleaveArray.push(arr1[index], arr2[index])
  });
  return interleaveArray;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
