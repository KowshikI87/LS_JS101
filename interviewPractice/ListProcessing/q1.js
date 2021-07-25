/*
Problem
- given a positive integer
- return the sum of its digits
- don't use looping constructs


Test Cases/Examples
- given


Data Structure
- use array


Algorithm
- number --> number in string --> list of digits --> sum


Code

*/

function sum(number) {
  return String(number)
    .split('')
    .reduce((total, currentNum) => total + Number(currentNum), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
