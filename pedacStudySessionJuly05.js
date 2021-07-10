/*

The objective is to return all pair of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.


Problem

input:
- array of integers
- the order of the integers should not matter
- no duplicate integers

output:
- nested array
- pairs of integers

rules:
- the pairs will be ordered in ascending order
  - in the nested array, the first element is the lowest
  - in the outer array, the first element of each pair is sorted in asc. order
- the pairs are unique
- the pairs have a difference of two


Examples

rules:
- if no pair matches, return an empty array
- in the output array, the integers are not unique
- input array always has a minimum of 2 integers


Data structures

input: array of integers
output: nested array with pairs of integers
intermediary: arrays and integers

Algorithm


ALGORITHM:
1) declare an output variable and set to empty array
2) make a copy of the input array and sort in ascending order
3) Calculate (x - y) === 2, using a nested for Loop structure:
  a) Outer loop iterate over every element in the array to identify x, stopping at second to last index
  b) Inner loop iterate over every element in array starting at index 1 to identify y
  !) identify current pair as (x - y)
  c) if abs(x - y) === 2, push [x, y] to output array
4) return output array

---------------------

Algorithms
- start with an empty array
- sort the array (for ascending order
  -ensures that the left element is lower
  - ensures that outer element in ascending order
- loop through the sorted array
  - use array.find to find the first number with absolute difference of two for
    the array that starts at current index of loop to the end
    - always be positive since we have sorted teh array
  - push that subarray to the empty array
  - go through the array again and sort

  //Input: [4, 1, 2, 3] ---> [1, 2, 3, 4]
    //[[1,3], [2,4]]

  //Input: [4, 3, 1, 5, 6] ---> [1, 3, 4, 5, 6]
    //[[1,3], [3, 5], [4, 6]]
    
    
-----------------


Algorithm

- Create new array variable
- Create a function 'differenceOfTwo'.
- Loop through the input array.
- For each integers, loop trough the input array.
- If integer difference is 2, push integers into sub arrays.
- sort sub array in ascending order.
- Sort outer array in ascending order.



------------

ALGORITHM
  - define function `differenceOfTwo`
  - give it a parameter called `array`
  - declare a variable called `returnArr` and initialize it to an empty array
  - if `array.length` is less than 2, return `returnArr`
  - loop through the array represented by the parameter name `array`, selecting the first number
    - have a nested loop that loops through the array, checking to see if 
      each number is equal to the element - 2 or the element + 2
      e.g. if (array[i] === array[j] + 2 || array[i] === array[j] - 2) 
      - if a match is found, add the number from the first loop and the matching 
        number from the second loop to an array and add it to our variable `returnArr`.
  - once all the numbers have been looped thorough and no more matches are found,
    sort the numbers in each array with the smallest first
  - sort the nested arrays based on ascending order of the first element of the array
  - return `returnArr`.
  
  
--------

- start with an empty array
- sort the array (for ascending order
  -ensures that the left element is lower
  - ensures that outer element in ascending order
- loop through the sorted array
  - use array.find to find the first number with absolute difference of two for
    the array that starts at current index of loop to the end
    - always be positive since we have sorted teh array
  - push that subarray to the empty array
  - go through the array again and sort
*/

function differenceOfTwo(numbers) {
  let sortedNumbers = numbers.slice().sort((a, b) => Number(a) - Number(b));
  let output = [];
  
  for (let index = 0; index < sortedNumbers.length; index +=1) {
    let match = sortedNumbers.find(elem => elem - sortedNumbers[index] === 2);
    if (match) {
      output.push([sortedNumbers[index], match]);
    }
  }
  return output;
}


console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]

console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]

console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
console.log(differenceOfTwo([-1, 0, 1, 2, 3, 4])); // [[-1, 1], [0, 2], [1, 3], [2, 4]]