/*

Problem
- given

Test Cases / Examples
- given


Data Structure
- I think I can just strings to get by



Algorithm
- first line gets + and number of dashes and then +
  - '+' + "-".repeat(string.length + 2) + "-"
- second line gets | + number of white spaces and then |
  - first line but replace '+' with '|'
- third line gets | + text centered + |
  - | + empty space + text + empty space + |
- 4th line = 2nd line
- 5th line = first line

Code

*/
function logInBox(text) {
  console.log('+' + '-'.repeat(text.length + 2) + '+');
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log('|' + ' ' + text + ' ' + '|');
  console.log('|' + ' '.repeat(text.length + 2) + '|');
  console.log('+' + '-'.repeat(text.length + 2) + '+');
}

logInBox('To boldly go where no one has gone before.');