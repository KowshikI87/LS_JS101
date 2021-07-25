/*
Problems
- takes two arguments: count and startingNUmber
- return an that contains count number of elements and each element's value
is multiple of startingNumber
- count always >= 0. if count = 0 the nreturn an empty array
- starting number can be any integer
- INput: two integers
- OUtput: an array


Test Cases/Examples
- given


Data Structure
- array

Algorithm
- input: count, startInt
- start a new array; multSeq
- if count = 0 then return []
- otherwise, start a for loop with mult local variable iniitalized to 1
  - increment mult by 1 each time
  - stopping conditoin: mult <= count
  - everytime push startInt * mult to a new array
- return multSeq

Code

*/

function sequence(count, startInt) {
  if (count === 0) return [];
  let multSeq = [];
  for (let mult = 1; mult <= count; mult++) {
    multSeq.push(startInt * mult);
  }
  return multSeq;
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []