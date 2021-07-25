/*
Problems
- multiply all the elements together and then divide by nubmer of elements
- result is an string rounded to three decimal places
- Input: Array
- Output: String

Test Cases/Examples
- given

Data Structure
- use array

Algorithm
- input :arr
- use reduce method to multiply all the elements of arr together
- take result from above / number of elements and
then round to 3 decimal places and then to string

Code

*/
function multiplicativeAverage(arr) {
  let totalProduct = arr.reduce((total, num) => total * num, 1);
  return String((totalProduct / arr.length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
