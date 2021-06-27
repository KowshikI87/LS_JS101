/*
**Understand the problem
- we try to spell the word given by taking only
  one letter from each of the block of two character
- both character of every block is completely unique
  it is not found in any other block

- letter cases don't matter

**Test Cases
- given

**Data Structure
- we will use a list of list to hold the block of character
- we will use another list to keep track of which list we used

**Algorithm
- blocks = list of list containing the block of making up characters
- chars = word uppercase split into characters
- while number of charcter >0 loop;
  - charToSearch = pop first element in chars
  - go through each element of block. as soon as char is found, pop the sublist
    -if not found then return false
- return true since we found all characters
*/

// eslint-disable-next-line max-lines-per-function
function isBlockWord(targetWord) {
  let buildChars = [['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'],
    ['G','T'], ['R','E'], ['F','S'], ['J','W'], ['H','U'],['V','I'], ['L','Y'],
    ['Z','M']];
  let targetWordChars = targetWord.toUpperCase().split('');
  while (targetWordChars.length > 0) {
    let charToSearch = targetWordChars.pop();
    let charFound = false;
    for (let id = 0; id < buildChars.length; id++) {
      if (buildChars[id].includes(charToSearch)) {
        //for some reason no working. go fuck yourself JS
        //buildChars[id].splice(id, 1); 
        buildChars = buildChars.slice(0, id).concat(buildChars.slice(id + 1));
        charFound = true;
        break;
      }
    }
    if (!charFound) return false;
    charFound = false;
  }
  return true;
}
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

