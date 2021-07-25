/*

Problems
- given an array, return an array with two subarrays
- the first subarray contains the left side of original array
- the second subarray contains the right side of the the original array
- if the array contains odd number of elements then add the middle
element to the left side
- special rules
  - if only one elmenet then left subarray contains that element,
  right subarray is empty
  - if arrays length is 0 then both subarray is empty
- input: array
- output: array of subarrays


Test Cases/Examples
- given

Data Structure
- arrays


Algorithm
- input: array
- leftSide = array.slice(0, Math.ceil(array.length / 2))
- rightSide = array.slice(Math.ceil(array.length / 2));


Even Lenght Array
0 1 2 3 4 5
- length = 6
- mid = 3 so we are good
- left side = good
- right side = good

Odd Length Array
0 1 2 3 4 5 6
- length = 7
- mid = 4
- left side = 0 1 2 3
- right side = 4 5 6

[5]
- length = 1
- mid = 1
- left side = good
- right side = good

[]
- length = 0
- mid = 0
- right side = empty
- left side=  empty

Code

*/

function halvsies(arr) {
  let leftSide = arr.slice(0, Math.ceil(arr.length / 2));
  let rightSide = arr.slice(Math.ceil(arr.length / 2));
  return [leftSide, rightSide];
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]