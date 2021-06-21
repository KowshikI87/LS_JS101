/*
***Understand the problem***

Explicit Requirements
- given an 1D array, return an array with two subarrays.
- first subaarray contains the first half of the elements
- second subarray contains the second half of the elements
- if the array contains odd number of elements then put the middle element in the first array

***Examples
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

***Data Structures
- we will use one big array with two arrays inside each of which represents one half of the numbers we passed

***Algorithm
- Determine the middle index dividing the  so we can use slice method

  - Example
  - Even length
    - Length of 0 ---> 0
    - Length of 2 ---> 2
    - Length of 4 ---> 2
    - Length of 6 ---> 3
    - Length of 8 ---> 4
    - Formula: length / 2

  - Odd Length
    - Length of 1 ---> 0 
    - Length of 3 ---> 2
    - Length of 5 ---> 3
    - Length of 7 ---> 4
    - Length of 9 ---> 5

    -So formula = ceil(length / 2)

  length of 4 ==> mid index = 3
  length of 5 ==> mid index = 4
- Then just slice the array

- set the first empty sub array to first half of slice and second empty sub array to second half of slice
*/
function halvsies(numbers) {
  let halfArrays = [[], []]
  let midIndex = numbers.length % 2 === 0? numbers.length / 2 : Math.ceil(numbers.length / 2);
  halfArrays[0] = numbers.slice(0, midIndex);
  halfArrays[1] = numbers.slice(midIndex);
  return halfArrays;
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
console.log(halvsies([1,2,3,4,5,6,7,8]))     //[[1,2,3,4], [5,6,7,8]]
console.log(halvsies([1,2,3,4,5,6,7,8,9])) //[[1,2,3,4,5], [6,7,8,9]]
