/*

Problem
- given an array of strings, return an array of the same string values,
but with all vowels (aeiou) removed.
- input: array of string
- output: array of string

Test Cases/Examples
- given

Data Structure
- array, string

Algorithm
- input: words
- call map method on words
  - callback function
    - split the word using empty space (chars)
    - then use filter method on chars and return true
    if aeiou does not include lower case of char
    - chars.join('');
Code

*/

function removeVowels(words) {
  let vowels = 'aeiou';
  return words.map(word => {
    return word.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]