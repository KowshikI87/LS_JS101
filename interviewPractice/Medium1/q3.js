/*

Problem
- maximum rotation

Examples/Test Cases

735291 (Index 0)
352917 (Index 1)
329175 (Index 2)
321759 (Index 3)
321597 (Index 4)
321579

We rotated 4 times for digit of 6 (-2)

Number of digit (10 and do rotation 10 - 2 = 8 times)

we repeat rotation from previous exercise num of digit - 1 time

Data Structure
- arrays and algorithm

Algorithm
- loop from 0 to num of digit - 1 time
- each time, pop the character at current idnex
- append the popped character to the end of array

Code

*/
function maxRotation(number) {
  let chars = String(number).split('');
  for (let index = 0; index < chars.length - 1; index++) {
    let poppedDigit = chars.splice(index, 1);
    chars.push(poppedDigit);
  }
  return Number(chars.join(''));
}
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845