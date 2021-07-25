/*

Problem
- Convert a number to its string equivalent
- Input: number
- output: string
- requirements
  - can't use String(), Number.prototype.toString()
  - can't use expression such as '' + number
  - construct this the old fashioned way
    that is analyzing and manipulating the number

Test Cases/ Examples
- Given

Data Strcture
- a list to hold the list of digit mapped to string


Algorithm
- how to extract digit by digit

- characterMap = ['0', '1', '2', '3'...]
- if number < 10 then return charaterMap[number];
- remianing = number provided
- let digits;
- while remaining >= 10
  - lastDigit = remaining % 10
  - remaining = parseInt(remaining / 10)
  - digit = characterMap[lastDigit]
  - if digits then digits = digit + digits
  - else digits = digit;
- return characterMap[remaining] + digits;

Code

*/
function integerToString(number) {
  let characterMap = ['0', '1','2','3','4','5','6','7','8','9'];
  if (number < 10) return characterMap[number];
  let remainingNumber = number;
  let digitsChars;
  while (remainingNumber >= 10) {
    let lastDigit = remainingNumber % 10;
    remainingNumber = parseInt(remainingNumber / 10, 10);
    let digitChar = characterMap[lastDigit];
    if (digitsChars) {
      digitsChars = digitChar + digitsChars;
    } else {
      digitsChars = digitChar;
    }
  }
  return characterMap[remainingNumber] + digitsChars;
}


console.log(integerToString(4321) === '4321');
console.log(integerToString(0) === '0');
console.log(integerToString(1598) === '1598');
