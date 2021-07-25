/*
Problem
- given
- return true if exatly one of its arguments is truthy
- return a boolean result not truthy/falsy value

Examples/Test Cases
- given

Data Structure
- just a boolean variable to hold the result

Algorithm
- use !! to convert any value to a boolean value
- use Number(boolean value) to get 1 or 0 for each argument.
- return true if Number(!!argument1) + Number(!!argument2) === 1;
Code
*/

function xor(value1, value2) {
  return Number(!!value1) + Number(!!value2) === 1;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);