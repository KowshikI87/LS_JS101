function staggeredCase(sentence) {
  //string = ''
  //start at index 1
  //if index i - 1 character is a lowercase letter then uppercase it + index i character into string
  let staggerredSentence = '';
  for (c = 1; c < sentence.length; c += 2) {
    if (sentence[c - 1] >= 'a' && sentence[c - 1] <='z') {
      staggerredSentence += sentence[c - 1].toUpperCase()
    } else {
      staggerredSentence += sentence[c - 1]
    }
    staggerredSentence +=sentence[c].toLowerCase();
  }
  return staggerredSentence;
}

//LS solution is better

// function staggeredCase(string) {
//   return string
//     .split("")
//     .map((char, index) => {
//       if (index % 2 === 0) {
//         return char.toUpperCase();
//       } else {
//         return char.toLowerCase();
//       }
//     })
//     .join("");
// }

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"