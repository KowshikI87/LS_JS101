/*
Problem
- given a string
- return a list of all the substrings
- order the returned array so that all substrict taht start at
index positoin 0 come firt, all substring that start at index
position 1 come second and so on
- return the substring from shortest to longest for each index position

Test Cases/Examples
- given

Data Structure
- array

Algorithm
- input: word
- substrings = [];
- iterate over all the characters
  - call the leadingSubstrings(word.slice(index))

Code

*/
function substrings(word) {
  let substrings = [];
  for (let index = 0; index < word.length; index++) {
    substrings = substrings.concat(leadingSubstrings(word.slice(index)));
  }
  return substrings;
}

function substrings(word) {
  return word.split('').map((_, index) => leadingSubstrings(word.slice(index))).flat();
}

function leadingSubstrings(word) {
  return word.split('').map((_, index) => word.slice(0, index + 1));
}

console.log(substrings('abcde'));