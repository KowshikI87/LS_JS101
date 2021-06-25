//we use rotate number of digit - 1 time 
//using rotateRightMost()
//max rotation counts from end and we need to count from begining
  //so we can use length of digit - loop counter for the count argument

function rotateRightmostDigits(number, count) {
  let digits = String(number).split('');
  let digitToRotate = digits.splice(-count, 1);
  return Number(digits.concat(digitToRotate).join(''))
}

function maxRotation(number) {
  let maxRotatedNumber = number
  let numberLength = String(number).split('').length;
  for (let i = 0; i < numberLength - 1; i++) {
    maxRotatedNumber = rotateRightmostDigits(maxRotatedNumber, numberLength - i);
  }
  return maxRotatedNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845



