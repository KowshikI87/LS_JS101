/*
Problems
- takes a string, doubles every consonant cahracter in the string and
returns the result as a new string
- do not double vowels, digits, puncuation, or whitespace
  - vowels are aeiou

- input: string
- output: string


Test Cases/Examples
- given


Data Structure
- array


Algorithm
- first: get a list of characters using split method of string
- iterate through all the character
  - if character uppercase >= a and <= z and not a vowel then return char + char
  - otherwise jsut return char

Code

*/
function doubleConsonants(text) {
  let vowels = 'aeiou';
  return text.split('').map(char => {
    if (char.toLowerCase() >= 'a' &&
        char.toLowerCase() >= 'a' &&
        !vowels.includes(char.toLowerCase())) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""