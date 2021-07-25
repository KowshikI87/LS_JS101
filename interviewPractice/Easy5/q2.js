/*
Problems
- given two arrays, return an array containing the union of those two arrays
- the original arrays could contain duplicates
- Assume: Array contains primitive values only; so we can use
  includes method of array

Test Cases/Examples
- Given

Data Structure
- use an array

Algorithm
- start with an empty array (unionArray)
- we just combine both arrays into 1
- then only select the elements that is not already in unionArray

Code

*/
function union(arr1, arr2) {
  let unionArray = [];
  let combinedArray = arr1.concat(arr2);
  for (let index = 0; index < combinedArray.length; index++) {
    if (!unionArray.includes(combinedArray[index])) {
      unionArray.push(combinedArray[index]);
    }
  }
  return unionArray;
}
console.log(union([1, 3, 5], [3, 6, 9]));
