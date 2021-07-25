/*

Problems
- give an array and exactly one value occurs twice
(eveyr other value occurs once)
- determine which value occurs twice
- input: an array
- output: primitive value
- Assume that array contains primitive values
only so we can use the includes method of array

Test Cases/Examples
- given

Data Structure
- array

Algorithm

Algorithm 1
- input: arr
- modArray = arr.slice();
- while (modArray.length > 0)
  - pop the last element and store it in poppedValue
  - if modArray.includes(poppedValue) return poppedValue

Code

*/

function findDup(arr) {
  let modArray = arr.slice();
  while (modArray.length > 0) {
    let poppedVal = modArray.pop();
    if (modArray.includes(poppedVal)) return poppedVal;
  }
}
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73