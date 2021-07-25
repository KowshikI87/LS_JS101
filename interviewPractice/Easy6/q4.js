/*
Problems
- takes a string and returns the middle character(s)
- if string is even then return the middle two characters
- if string is odd then only reutnr the middle character
- input: string
- output: string

- what is middle
  odd length string
    abcde ---> middle is c
  even lenth string
    -abcd --> middle is bc

Test Cases/Examples
- given

Data Structure
- string is fine

Algorithm
- input: text
- middle = Math.floor(text.length / 2)
- odd length string
  - abcde (length of 5)
  - return text[middle];
- even length string
  - abcdefgh (length of 8) --> return de
  - slice from middle -1 to middle + 1
Code

*/
function centerOf(text) {
  let middle = Math.floor(text.length / 2);
  if (text.length % 2 !== 0) {
    return text[middle];
  } else {
    return text.slice(middle - 1, middle + 1);
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"