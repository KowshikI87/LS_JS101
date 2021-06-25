/*

**Understanding the Problem
- move the first element of the array to the end
- do not modify the original array; return a new array
- if we have anything other than an arry or empty array then return undefind
- Input: Array, output: new array with first and last element swapped
- We can't change the array but we can have a case where both array have 
  -elemnets that point to same object/array

  ***Test Cases
  - given

  ***Data Structure and Algorithm
    - use slice to get rest of the array apart from first elmeent
    - get the first element and push to array

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;

  if (array.length === 0) return [];


  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]