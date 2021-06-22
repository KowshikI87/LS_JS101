function sumOfSums(numbers) {

  //new Array = old Array copy
  //go through each element in array starting at element 1.  element at i = element before it plus itself
  //then just use reduce function calculate overall sum
  //techncially we could do this with nested reduce but it is too intense to do so. so just use simple ways for now
  let sumOfSums = numbers.slice();
  for (let i = 1; i < sumOfSums.length; i++) {
    sumOfSums[i] = sumOfSums[i] + sumOfSums[i - 1];
  }
  return sumOfSums.reduce((accum, currentVal) => accum + currentVal, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35