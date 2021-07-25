/*
Problem
- Input: String
- Output: string
- We will be given at least two words
- Words are sequence of non-blank characters
  - words are seperated by a single empty space
  - so we have to remove instances where we have a
  space as an element in the array (so we discard instances
  where we have two or more empty space in a row)

Examples/Test Cases
- Given

Data Structure
- Array to contain the list of words

Algorithm
- We will split the text into list of words using " ".
- We will filter the array so we get rid off all elements
  which are empty space only
- We wil then return the second last element in the array

Code
*/

function penultimate(text) {
  let words = text.split(' ');
  words = words.filter(word => word !== '');
  return words[words.length - 2];
}

console.log(penultimate('Kowshik    Islam'));
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true