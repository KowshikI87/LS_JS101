/*

Problem
- given
- we start with a new string and start adding character by character
 and at any point if the last character we added is same as the 
 character we are trying to add, then don't add the current character


Test Cases / Examples
- given


Data Structure
- we can just an array of characters


Algorithm
- input: text
- start a new string (doubleRemoved)
- cleanText = text[0] || '';
- get a list of characters
- start iterating over all the charcters starting at index 1; go up to last char
- if character at current index !== character at current index - 1
- append this character to the new string

Code


*/

function crunch(text) {
  let cleanText = text[0] || '';
  let characters = text.split('');
  for (let index = 1; index < characters.length; index++) {
    if (characters[index] !== characters[index - 1]) {
      cleanText += characters[index];
    }
  }
  return cleanText;
  
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""