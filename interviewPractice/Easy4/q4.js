/*

Problem
- Palindromic strings
  - reads the same backward and forward
  - case matters and all characters matter
- solve without using reverse method or join method

Examples/Test Cases
- given


Data Structure
- use strings

Algorithm
- middle = floor(string.length / 2)
- compare first character to last, second to second last and so on.
  At any point if not same then return false
Code

*/

function isPalindrome(text) {
  let midIdx = Math.floor(text.length / 2);
  for (let idx = 0; idx < midIdx; idx++) {
    if (text[idx] !== text[text.length - 1 - idx]) return false;
  }
  return true;
}

//madam; midIdx = floor (length (5) / 2) = floor(2.5) = 2
//we loop till ma
//first iteration: m

//dada: midIdx = floor(4 / 2) = 2

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true