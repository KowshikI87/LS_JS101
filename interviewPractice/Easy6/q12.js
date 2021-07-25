/*
Problem
- return true if parentheses are properly balanced
- balanced means '(' and ')' occurs in matching paris

Test Cases/Examples
- given

Data Structure
- numbers

Algorithm
- start a counter with 0
- iterate over all the characters in text
  - if encounter '(' then counter += 1
  - if encounter ')' then counter -= 1
  - if counter < 0 at any point then return false
- at the end return true if counter = 0

Code

*/

function isBalanced(text) {
  let count = 0;
  for (let idx = 0; idx < text.length; idx++) {
    if (text[idx] === '(') {
      count += 1;
    } else if (text[idx] === ')') {
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/*
//if expand to multiple brackets then we can just an object with counters
  //we have a counter for each type of bracket using opening and closing bracket
    //example: '()'
      //so when we counter a bracket if a key includes it then if 
        //matches with firt char then increment esle decrement
//every time, we would check if any of those counters < 0 then return false
*/


