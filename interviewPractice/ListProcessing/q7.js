/*
Problem
- give an array of number
- return the sum of the sums of each leading subsequences in that array
 -array contains at least one number

Test Cases/Examples
- given


Data Structure
- array


Algorithm
- input: numbers
- get subArrays
  - call the map method with index param for callback
    - in aech iteration, return numbers.slice(0, index)
    final result: array of subarrays
- then flatten the subArrays and then call reduce
*/

function sumOfSums(numbers) {
  let subArrays = numbers.map((_ , index) => numbers.slice(0, index + 1));
  return subArrays.flat().reduce((totalSum, num) => totalSum + num, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35