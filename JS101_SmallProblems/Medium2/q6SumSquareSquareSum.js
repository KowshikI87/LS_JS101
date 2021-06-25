function sumSquareDifference(number) {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= number; i++) {
    sumSquare += i;
    squareSum += i ** 2;
  }
  sumSquare = sumSquare ** 2 
  return sumSquare - squareSum;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
