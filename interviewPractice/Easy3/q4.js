/*
Problem
- index of the first fibonacci number that 
  has the same number of digits as input num
- first number has an index of 1

- Input: Number
- Output: Number
- Fibonacci Seqeunce
  - the first two numbers are 1
  - afterward, the nth fibonacci number is (n - 1)th number + (n-2)th number

Examples/Test Cases
- given

Data Structure
- use an array to hold the fibonacci sequence

Algorithm
- input: numDigits
- start with an array: fibSeq = [1,1]
- while (the last number's number of digit < numDigits)
  - push to array (array[last index] + array[last index - 1])
- return array's length (that's the index of the number)

Code
*/
function findFibonacciIndexByLength(numDigits) {
  let fibSeq = [1n, 1n];
  while (String(fibSeq[fibSeq.length - 1]).length < numDigits) {
    let currentFibNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    fibSeq.push(currentFibNum);
  }
  return BigInt(fibSeq.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;