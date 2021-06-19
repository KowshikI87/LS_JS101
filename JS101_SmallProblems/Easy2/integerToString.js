function integerToString(num) {
  let remainder = num;
  let lastDigit;
  let numberArray = [];

  while (remainder >= 10) {
    lastDigit = remainder % 10;
    remainder = Math.floor(remainder / 10);
    numberArray.unshift(lastDigit);
  }
  numberArray.unshift(remainder);
  return numberArray.join('');

}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); //0
console.log(integerToString(5000)); //5000
console.log(integerToString(1234567890)); //1234567890
