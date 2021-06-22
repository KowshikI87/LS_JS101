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
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]