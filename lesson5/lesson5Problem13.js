/*
Given the following data structure, sort the
array so that the sub-arrays are ordered based
on the sum of the odd numbers that they contain.
*/
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr.sort((list1, list2) => {
  //sum of odd numbers in a list
  let oddTotals = [list1, list2].map((list) => {
    return list.reduce((total, number) => {
      if (number % 2 !== 0) {
        return total + number;
      } else {
        return total;
      }
    }, 0);
  });
  return oddTotals[0] - oddTotals[1];
});
console.log(arr);

