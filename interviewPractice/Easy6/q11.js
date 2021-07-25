/*
Problems
- reverse an array inplace by mutating the origial array
- can't use Array.protottype.reverse()
- input: array
- output: array (technicall not an output since we are just mutating)

Test Cases/Examples

Data Structure
- array

Algorithm
- start with original array: arr
- we start a loop and iterate over all the elemtns
  - in each iteration
    - temp = arr[index]
    - arr[index] = arr[arr.length - 1 - index]
    - arr[arr.length - 1 - index] = temp

even length (num of iteration = Math.floor(length / 2))
1 2 3 4
first: 4 2 3 1
second: 4 3 2 1

odd length
a b c d e
first: e b c d a
second: e d c b a

Code

*/

function reverse(arr) {
  let numIter = Math.floor(arr.length / 2);
  for (let index = 0; index < numIter; index++) {
    let placeHolder = arr[index];
    arr[index] = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = placeHolder;
  }
  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


//I Like Eamon's solutin
/*

I havent's seen anyone use this, it simply pops the last element
and unshifts it to the beginning of the array,
it does this once for each element.

function reverse(array) {
  let elementsToSwap = array.length;

  while (elementsToSwap > 0) {
    array.unshift(array.pop());
    elementsToSwap -= 1;
  }

  return array;
}
*/
