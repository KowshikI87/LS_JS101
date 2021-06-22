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

function palindromes(string) {
  //get all the substrings
  //go through each of those substring and 
    //if the length of the substring is not 1 and 
    //they read the way backward and forward then add to a new list
  
  let allSubstrings = substrings(string);
  return allSubstrings.filter((substring) => {
    return substring.length !== 1 && substring === substring.split('').reverse().join('')
  })
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]