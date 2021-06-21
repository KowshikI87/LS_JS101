function isBalanced(expression) {
  //assuming only brackets are () pair
  //go through character by character
    //keep count of opening parentheses
    //if encounter a closing parentheses then decrement opening parentheses count
    //if at any point opening parentheses count < 1 then not 
  //at the end expressoin is balanced if # of opening parentheses is 0

  let openBracketCount = 0;
  for (c = 0; c < expression.length; c++) {
    if (expression[c] === '(') {
      openBracketCount += 1;
    }
    if (expression[c] === ')') {
      openBracketCount -= 1;
    }
    if (openBracketCount < 0) return false;
  }
  return openBracketCount === 0;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);