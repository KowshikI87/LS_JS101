/*

**Understand the problem
- rotate the last count digits of a number
  - so we start counting digits (starting at 1) from right
  - when we count "count" argument, we take that number and put it to the end of array

**Examples/Test Cases
- given

**Data Structure and Algorithm
- we will use an array to keep the digits as string of characters
- pop the digt we need to use a array method
- then pput the popped digit to the end of array
- then joing together the array of char and convert to number
*/

function rotateRightmostDigits(number, count) {
  let digits = String(number).split('');
  let digitToRotate = digits.splice(-count, 1);
  return Number(digits.concat(digitToRotate).join(''))
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917