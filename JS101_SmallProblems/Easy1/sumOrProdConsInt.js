/*
  Write a program that asks the user to enter an integer 
  greater than 0, then asks whether the user wants to determine the 
  sum or the product of all numbers between 1 and the entered integer, 
  inclusive.
*/

function sumConsInt(number) {
  let sum = 0;
  for (let n = 1; n <= number; n++) {
    sum += n;
  }
  return sum;
}

function  prodConsInt(number) {
  let product = 1;
  for (let n = 1; n <= number; n++) {
    product *= n;
  }
  return product;
}

let rlSync = require('readline-sync');
let number = Number(rlSync.question('Please enter an integer greater than 0: '));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. :');
let result;

if (operation === 's') {
  result = sumConsInt(number);
  console.log(`The sum of the integers between 1 and ${number} is ${result}`);
} else if (operation === 'p') {
  result = prodConsInt(number);
  console.log(`The product of the integers between 1 and ${number} is ${result}`);
} else {
  console.log('Operation is not valid.Try Again');
}