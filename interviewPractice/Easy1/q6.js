function integersOneToNum(number) {
  let array = [];
  for (let num = 1; num <= number; num++) {
    array.push(num);
  }
  return array
}

let number1 = 5;
let number2 = 6;
let sum = integersOneToNum(number1).reduce((totalSum, currentNum) => totalSum + currentNum, 0);
let product = integersOneToNum(number2).reduce((totalProduct, currentNum) => totalProduct * currentNum, 1);
console.log('Sum is: ' + sum);
console.log('Product is: ' + product);