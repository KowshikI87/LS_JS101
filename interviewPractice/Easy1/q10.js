function multisum(number) {
  let array = [];
  for (let num = 1; num <= number; num++) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
      array.push(num);
    }
  }
  return array.reduce((totalSum, currentNum) => totalSum + currentNum, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168