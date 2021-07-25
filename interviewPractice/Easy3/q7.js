/*

Problem
- given
- Input: Number
- Output: Number
- definition of double:
  - numbers on left and right side are equal
  - by definition if numbers has odd digit then it is not a double

- if number is a double then just return the number as is
- else double the overall number and return it


Examples/Test Cases
- given


Data Structure
- likely use an array

Algorithm
- convert number to array of charcters (numChars)
- left = numChars.slice(0, Math.Floor(numChars.length / 2));
- right side = numChars.slice(Math.floor(numChars.length / 2));

- check if both sides are equal
  - join each side into a string, and then check if both sides are equal.
  - if equal then just reutnr number else return number * 2

Code

*/
function twice(number) {
  let numChars = String(number).split('');
  let leftSide = numChars.slice(0, Math.floor(numChars.length / 2));
  let rightSide = numChars.slice(Math.floor(numChars.length / 2));
  return leftSide.join('') === rightSide.join('') ? number : number * 2;
}
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

