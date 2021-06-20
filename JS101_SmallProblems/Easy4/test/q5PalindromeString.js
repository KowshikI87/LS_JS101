function isPalindrome(sentence) {
  return sentence === sentence.split('').reverse().join('');
}

function compLetterOnlySentence(sentence) {
  let sentenceLower = sentence.toLowerCase();
  let sentenceCleaned = '';
  for (let c = 0; c < sentenceLower.length; c++) {
    if ((sentenceLower.charAt(c) >= 'a' && sentenceLower <= 'z') || (Number.isInteger(sentenceLower.charAt(c)))){
      sentenceCleaned += sentenceLower.charAt(c);
    }
  }
  return sentenceCleaned;
}

function isRealPalindrome(sentence) {
  return isPalindrome(compLetterOnlySentence(sentence));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));           // true
console.log(isRealPalindrome('123ab321'));          //false

// //non regex solution I like
// function isRealPalindrome(inputStr) {
//   const ALPHANUMS = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let str = [];

//   inputStr.split('').forEach( char => {
//     if (ALPHANUMS.includes(char.toLowerCase())) str.push(char.toLowerCase());
//   });

//   return str.join('') === str.reverse().join('');
// }