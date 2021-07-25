/*

Problem
- given a text; it contains words
  - words are strings seperated by a single space
- return an array where we have "word" + wordLength
- if the input is '' or undefind then return []
- input: string
- output: array of strings

Test Cases/Examples
- given

Data Structure
- array and string

Algorithm
- input: text
- get list of words using .split(' ') (words)
- call the map method on words
  callback function returns word word.length

Code

*/
function wordLengths(text) {
  if (!(text)) return [];
  return text.split(' ').map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []