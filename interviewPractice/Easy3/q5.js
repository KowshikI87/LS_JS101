/*

Problem
- draw a right triangle as shown in screen
- input: number (num is the paramter name)
- output: string 
- requirement
  - each line has num characters
  - each line has white space first and then star(s)
  - line 1 has 1 star and rest white space
  - line 2 has 2 stars and rest white space
  - line 3 has 3 stars and rest white space till
  - line num has num stars and rest white space


Examples/Test Cases
- given


Data Structure
- strings


Algorithm
- parameters: num
- start a loop that starts at index = 1 and goes to num
- in each iteration, log to console: ' '.repeat(num - index) + '*'.repeat(index)

Code

*/

function triangle(num) {
  for (let index = 1; index <= num; index++) {
    console.log(' '.repeat(num - index) + '*'.repeat(index));
  }
}
triangle(5);
triangle(9);