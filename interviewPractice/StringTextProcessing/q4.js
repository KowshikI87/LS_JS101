/*

Problem
- given a string
- return the string with each word's first letter is uppercase
  rest of the letters of the word is lowercase
- word is any sequence of non-whitespace characters
- input: string
- output: string

Test Cases/Examples
- given

Data Structure
- array, strings


Algorithm
- input: text
- first get a list of words - .split(' ') (words)
- call map method on words
  - callback function returns first char.uppercase +
  rest of string
  - join(' ');
Code

*/
function wordCap(text) {
  return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'