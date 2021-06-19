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

function signedIntegerToString(num) {
  if (num === 0) {
    return '0';
  } else {
    sign = num > 0 ? '+' : '-';
    return `${sign}${integerToString(Math.abs(num))}`
  }
}

console.log(signedIntegerToString(+4321));
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");

