function leadingSubstrings(string) {
  //start a new array
  //start going through character by character
  //in each iteration, push to array : slice of start charcter to current character + 1
  let substrings = []
  for (let c = 0; c < string.length; c++) {
    substrings.push(string.slice(0, c + 1));
  }
  return substrings;
}

function substrings(string) {
  //start a new arra
  //start going through character by character
  //each time call leadingSubstring and pass the charcter we are at to the end of string
  //push the result from result above into the new array (use array descructuring so we get elements not subarray)
  let allSubstrings = []
  for (let c = 0; c < string.length; c++) {
    allSubstrings.push(...(leadingSubstrings(string.slice(c))));
  }
  return allSubstrings;
}

console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]