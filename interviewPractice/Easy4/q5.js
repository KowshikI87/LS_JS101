/*

Problems
- is a string palindrome
  - reads the same forward and backward
  - case insensitive and ignore non-alphanumeric characters
  - can use my isPalindrome functoin from before

- Input: string
- Output: Boolean value

Test Cases/Examples
- given

Data Structure
- we will use an array to filter out non alphanumeric characters

Algorithm
- get the all upperCase version of the given string
- get a list of cahracters in the string
- iterate over all the characters and only
  add to a new array if the character is alphanumeric
  - character >= A and character <= Z
- pass the clean array character to isPalindrome function from previous exercise


Code

*/

function isPalindrome(text) {
  let midIdx = Math.floor(text.length / 2);
  for (let idx = 0; idx < midIdx; idx++) {
    if (text[idx] !== text[text.length - 1 - idx]) return false;
  }
  return true;
}

function isRealPalindrome(text) {
  let textChars = text.toUpperCase().split('');
  let cleanTextChars = textChars.filter(char => char >= 'A' && char <= 'Z');
  return isPalindrome(cleanTextChars);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
