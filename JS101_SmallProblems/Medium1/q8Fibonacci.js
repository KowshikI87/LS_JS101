let memorization = {};
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  //else: if we have it in memory then return that.
  //Otherwise calculate it and store in memory
  if (memorization[n]) {
    return memorization[n];
  } else {
    memorization[n] = fibonacci(n - 2) + fibonacci(n - 1);
    return memorization[n];
  }
}

console.log(fibonacci(5));        //5
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050