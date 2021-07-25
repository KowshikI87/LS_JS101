function fibonacci(n) {
  let fn2 = 1;
  let fn1 = 1;
  let fn;
  /*
  //start at n = 3
    //fn = fn2 + fn1
    //fn2 = fn1
    //fn1 = fn
  */

  for (let i = 3; i <= n; i++) {
    fn = fn1 + fn2;
    fn2 = fn1;
    fn1 = fn;
  }
  return fn;
}
console.log(fibonacci(5));        //5
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050