/*

Problem
- given a string
- return an object containing three properties
  one representing the number of lowercase characters
  one representing the number of uppercase characters
  one representing neither

Test Cases/Examples
- given

Data Structure
- object and strings


Algorithm
- input: text
- first get a list of characters using .split('') (chars)
- call the reduce method on chars
  - initial value is an object with this format:
    { lowercase: 0, uppercase: 0, neither: 0 }
  - if it is a lowercase cahracter (>= a and <= z)
    increment the value associated with lowercase by 1
  - if it is a uppercase cahracter (> A and <= Z)
    increment the value assocaited with uppercase by 1
  - else increment the value associated with neither by 1
Code

*/

function letterCaseCount(text) {
  let chars = text.split('');
  return chars.reduce((hist, char) => {
    if (char >= 'a' && char <= 'z') {
      hist['lowercase'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      hist['uppercase'] += 1;
    } else {
      hist['neither'] += 1;
    }
    return hist;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));