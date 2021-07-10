// //Interview assessement

// Problem Description
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Test Cases
// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true




// Problem Description
//  Write a function to find the longest common prefix string amongst an array of strings.

//  If there is no common prefix, return an empty string "".

//  Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

// Test Cases
//  console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
//  console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
//  console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
//  console.log(commonPrefix(["throne","dungeon"]) === ""); // true
//  console.log(commonPrefix(["throne","throne"]) === "throne"); // true



//assesement Q1
let animal = "dog";

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};
speak();

//don't try to describe what "const speak" is because that's not what they are to test us on
//

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

//use reassign


//what's the difference between reassign and assignment

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push(" World!");
  return arr;
}

test(greeting);
console.log(greeting);

//////
function test(str) {
  str + "!!!"
}

let word = test("Hello");

if (word) {
  console.log("Hi");
} else {
  console.log("Goodbye");
}

///
let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

//b's value has not been changed
//a is out of scope and thus we have ReferenceError


///
//describe a function
// input, output
// input of callback function


// Array.prototype.forEach()
// - always returns undefined
// - being called on an arary
// - loops through each element of the array, and pass this element to the callback function, as an argument. 
// - takes a callback function as an argument

//Array.prototype.find()
// - being called on an array
// - find takes a callback function as an argument
// - outputs the first element that matches the condition // undefined if none was found
// - Iterates through the elements of the array, and pass the element to the callback function. 
//The first time the return value of the callback function is truthy, then we stop the iteration, 
//and return the element.
//note how we are being detailed about "truthy" not true; concentrate on truthy/false



//Problems and Solution to interview assesement

//first problem by jones

/*Problem Description
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Test Cases
*/

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentIndex = arr[i];
    let leftHalf = arr.slice(0, currentIndex);
    let rightHalf = arr.slice(currentIndex + 1);
    let leftSum = 0;
    let rightSum = 0;

    for (let leftIdx = 0; leftIdx < leftHalf.length; leftIdx++) {
      leftSum += leftHalf[leftIdx];
    }

    for (let rightIdx = 0; rightIdx < rightHalf.length; rightIdx++) {
      rightSum += rightHalf[rightIdx];
    }

    if (leftSum === rightSum) return currentIndex;
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

//first problem by Tim Donker

function sumArrayElements(array) {
  return array.reduce((acc, cv) => acc + cv, 0);
}

function findEvenIndex(array) {
  if (sumArrayElements(array.slice(1)) === 0) return 0;

  for (let index = 1; index < array.length; index += 1) {
    let leftSide = array.slice(0, index);
    let rightSide = array.slice(index + 1);
    
    if (sumArrayElements(leftSide) === sumArrayElements(rightSide)) {
      return index;
    }
  }
  return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

//second interview problem and solution by Tim
/*
PROBLEM:
  input: array of strings
  output: string
  rules: if no common prefix return empty string
    all inputs are lowercase letter strings
    pre-fix means the substrings will always being with start of string
EXAMPLES:
DATA-STRUCTURES:
  strings
ALGORITHM:
  0) declare longestCommonPrfix and set to empty string 
  1) loop over characters of element at index zero
    declare currentChar and set to element[index];
    On each iteration
    a) check every subsequent element to determine if the character at index matches currentChar
      if all subseqeunt elements return true append currentChar to longestCommonPrefix
  2) return longestCommonPrefix
CODE:
*/

function commonPrefix(array) {
  let longestCommonPrefix = '';

  for (let index = 0; index < array[0].length; index += 1) {
    let currentChar = array[0][index];

    if (array.every(word => word[index] === currentChar)) {
      longestCommonPrefix += currentChar;
    }
  }
  return longestCommonPrefix;
}

 console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
 console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
 console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
 console.log(commonPrefix(["throne","dungeon"]) === ""); // true
 console.log(commonPrefix(["throne","throne"]) === "throne"); // true

 //JS should have long naames if needed as type is defined dynamically



 //solve this problem next:
 //Alright he's a bonus 3rd one :wink:
 /*
Two words are anagrams of each other if they both contain the same letters.
Write a method that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []

*/

