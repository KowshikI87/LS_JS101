function sum(numbers) {
  return numbers.reduce((accumulator, currentValue, index, array) => { 
    return accumulator + currentValue;
  }, 0)
}

function runningTotal(numbers) {
  
  if (numbers.length === 0) return numbers;
  
  let runningTotalNumbers = new Array(numbers.length);
  runningTotalNumbers[0] = numbers[0];

  for (let n = 1; n < numbers.length; n++) {
    runningTotalNumbers[n] = sum(numbers.slice(0, n + 1))
  }
  return runningTotalNumbers;
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

//LS solution is better. My solution is inefficient because I am calculating same sum over and over
// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push((sum += array[idx]));
//   }

//   return resultArray;
// };