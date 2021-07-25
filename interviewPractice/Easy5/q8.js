/*
Problems
- takes a positive integer and return list of digits in the number
  in the order they arein the number
- input: Number
- ouptut; Array of numbers

Test Cases/Examples
- given

Data Structure
- array

Algorithm
- number --> String --> list of characters --> convert each to number


Code

*/

function digitList(number) {
  return String(number).split('').map(digit => Number(digit));
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

