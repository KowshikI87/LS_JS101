/*
***P
- build out the pattern shown

***Examples/Test Cases
- given in question

***Data Structure
- we wil use a string to hold individual line pattern
- an array of string to hold all the indivual line patterns

**Algorithm
- we can see that we need to iterate n - 1 time but let's use another conditoin
- middle = math.floor(9/2)
- patterns = []
- while true; exit condition will be when current line has *** one after another
    - use includes method
  - currentPattern =
    - ith index (0 based) of space + *
      "*".padStart(middle - ith index of space) +
      " ".repeat(middle - 1 - index) + *.padend(ith space + 1)
    - push currentPattern to patterns
    - break if currentPattern includes "***" which means we have 3 stars
    in a row
- push line of empty space and *.repeat(9) to patterns
- print patterns so far
- then print pattern starting at emepty line to to backward
*/

//assuming that n is always >= 7
// eslint-disable-next-line max-lines-per-function
function star(n) {
  let middle = Math.floor(n / 2);
  let patterns = [];
  let currentPattern = '';
  let index = 0;
  while (true) {
    currentPattern = ' '.repeat(index) + "*" + "*".padStart(middle - index) + " ".repeat(middle - 1 - index) + "*".padEnd(index + 1);
    patterns.push(currentPattern);
    if (currentPattern.includes("***")) break;
    currentPattern = '';
    index += 1;
  }
  //now print
  patterns.forEach(ptrn => console.log(ptrn));
  console.log("\n");
  console.log("*".repeat(n));
  console.log("\n");
  //reverse pattern to print
  patterns.slice().forEach(ptrn => console.log(ptrn));
}
star(9);
star(7);