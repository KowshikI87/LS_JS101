/*

Problem
- given
- Input: number
- Output: string
- the returned text has alternating 1s and 0s
- the returned text's length = number (input)

Test Cases / Examples
- given

Data Structure
- we will just strings

Algorithm
- if it is an even number then return '10'.repeat(number/2);
- else return '10'.repeat(Math.floor(number / 2)) + '1';

Code

*/

function stringy(number) {
  if (number % 2 === 0) {
    return '10'.repeat(number / 2);
  } else {
    return '10'.repeat(Math.floor(number / 2)) + '1';
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"