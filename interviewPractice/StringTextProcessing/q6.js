/*

Problem
- given a string
- every other character starting from first is capitalized
- followed by a lowercase or non-alphabet character
- non alphabetic character should not changed but
counted as characters for switching between upper and lower case
  - there is no meaning of uppercase or lowercase for nonalphabet characters
- input: string
- output: string

Test Cases/Examples
- example

Data Structure
- array, strings

Algorithm

- classic case for using map
- input: text
- get list of characters using .split('') (chars)
- call the map method on chars with only char, index used for callback functoin
  - index is even --> return char.toUpperCase()
  - index is odd ---> return char.toLowerCase()
- call join('');

Code

*/
function staggeredCase(text) {
  return text.split('').map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"