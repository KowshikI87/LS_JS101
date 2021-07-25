/*

Problem
- given a string, swap the case of every letter
  - if letter is uppercase then change to lowercase
  - if letter is lowercase then change to uppercase
- input: string
- output: string


Test Cases/Examples
- given


Data Structure
- array, string


Algorithm
- input: text
- first: get list of chars (chars) using .split('')
- chars.map
  -callback function checks if char.uppercase  = char then return lowercase
  - else return char.uppercase

Code

*/
function swapCase(text) {
  return text.split('').map(chr => {
    return chr.toUpperCase() === chr ? chr.toLowerCase() : chr.toUpperCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
