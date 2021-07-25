/*

Problem
- given a string arugment, return true if all 
of the alphaetic character inside the string are uppercase; false otherwise.
- Ignore characters that are not alphabetic
  - for non alphabetic characters, uppercase vs. lowercase dn matter
  - same with spaces (uppercase or lowercase does not matter)
- Input: string
- Output: true/false

Test Cases/Examples
- given

Data Structure
- arrays


Algorithm
- input: text
- split the string into characters (chars)
- call every  method on chars and return true if char = char.toUpperCase();

Code


*/

function isUppercase(text) {
  return text.split('').every(char => char.toUpperCase() === char);
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


// console.log('!'.toLowerCase() === '!'.toUpperCase());
// console.log(' '.toLowerCase() === ' '.toUpperCase());

//LS solution is better
function isUppercase(string) {
  return string.toUpperCase() === string;
}

// Discussion
// The easiest way to solve this problem is to
// realize that the condition
// "all of the alphabetic characters...are uppercase"
// is true only if the string is not altered by converting it to all uppercase.
// Thus, all we need to is compare string with string.toUpperCase().
