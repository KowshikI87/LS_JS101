/*
Problem
- a function that takes a string argument and returns a list of substrinsgs
of that string
- each substring should beging with the fisrt letter of the word
- the list should be ordered from shortest to longest
- input: string
- output: array of strings


Test Cases/Examples
- given


Data Structure
- arrays


Algorithm
- input: word
- first get a list of chaacters (chars)
- chars.map((char, index) => word.slice(0, index + 1))

Code

*/

function leadingSubstrings(word) {
  return word.split('').map((_, index) => word.slice(0, index + 1));
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]