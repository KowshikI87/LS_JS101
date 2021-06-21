/*
***P
Explicit Requirement:
Write a function that takes an array of integers as input, 
multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

Input: array of numbers
Output: single value

Implicit
- if empty array then just return undefined. Nothing else makes sense

***Data Structure and Algorithm
- We will just use the reduce function on the array of numbers and 
- divide by length of the array
*/

function multiplicativeAverage (numbers) {
  if (numbers.length === 0) return undefined;
  let product = numbers.reduce((accum, currentVal) => {
    return accum * currentVal;
  }, 1)
  return (product / numbers.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"



