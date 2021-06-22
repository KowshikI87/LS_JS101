function multiplyAllPairs(arr1, arr2) {
  //multiply all the pairs using two loop (outer loop goes over first list and inner loop goes over second list)
  //then use array.sort method with a callback function for sorting numbers
  let allPairMultArr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      allPairMultArr.push(arr1[i] * arr2[j]);
    } 
  }
  allPairMultArr.sort(sortNumbers);
  return allPairMultArr;
}

function sortNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1
  } else {
    return 0;
  }
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

//Launch School's solution is better (specifically using a - b instead of defining a new function)
// function multiplyAllPairs(array1, array2) {
//   const result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2);
//     });
//   });

//   return result.sort((a, b) => a - b);
// }
