/*
**Data Structure and Algorithm
  - we will just use strings
  - Algorithm
    -each line is n character
    - initialize #of diamond as 1
    - print one "*" at center of n length
    - next line gets # of diamond before + 2 and then print
      -number of diamond again centered
    - when we reach n = ceil(n/2) then change increment to - 2 and keep printing
      -same way
*/
function diamond(n) {
  let diamondCount = 1;
  let increment;
  let mid = Math.ceil(n / 2);
  for (let i = 1; i <= n; i++) {
    let padding = Math.ceil((n - diamondCount) / 2);
    console.log('*'.repeat(diamondCount).padStart(padding + diamondCount));
    increment = i < mid ? 2 : -2;
    diamondCount += increment;
  }
}
diamond(9);