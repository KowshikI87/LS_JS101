function isPalindromicNumber(number) {
  //condition below is redundant I guess useful to make sure we have a number
  if (Number.isNaN(Number(number))) { 
    return false;
  } else {
    return isPalindrome(number.toString());
  }

}

function isPalindrome(sentence) {
  return sentence === sentence.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
