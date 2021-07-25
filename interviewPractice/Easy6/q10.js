/*
Problems
- given a text
- we only have letters and spaces
- words are seperated by a single space
- return a string containing the same words but
  if the word contains >=5 letters then reverse the order of the letters
- input: string
- output: string

Test Cases/Examples
- given

Data Structure
- array and string

Algorithm
- input: text
- first get a list of words using ' ' as delimiter
- transfWords: then use map method to transform the words
  - if word.length >= 5 then
    word.split('').reverse().join('')
  - else return word
- return transfWords.join(' ');

Code
*/
function reverseWords(text) {
  let words = text.split(' ');
  let transfWords = words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return transfWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
