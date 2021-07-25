/*
Problem
- given an array of integers between 0 to 19
- retun an array of those integers sorted based on the english
word for each number
- INput: array
- Output: array

Test Cases/Examples
- given

Data Structure
- array

Algorithm
- numbersEnglish = array that holds the numbers in english word
- sortedNumbersEnglish = numbersEnglish.slice().sort();
  sort(); sort based on string comparison
- sortedNumbers = sortedNumbersEnglish
  .map(numEnglish => numbersEnglish.indexOf(numEnglish))

Code

*/
function alphabeticNumberSort(arr) {
  const NUMBERS_ENGLISH = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let sortedNumbersEnglish = NUMBERS_ENGLISH.slice().sort();
  let sortedNumbers = sortedNumbersEnglish.map(numEnglish => {
    return NUMBERS_ENGLISH.indexOf(numEnglish);
  })
  return sortedNumbers;
}

console.log(alphabeticNumberSort(
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));



