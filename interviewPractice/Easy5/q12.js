/*
Problems
- given hr:mm (both hr and mm will be positive)
- write two functions that return minutes after midnight and before midnight
- Input: string
- Output: number


Test Cases/Examples
- given


Data Structure
- strings and numbers

Algorithm

afterMidnight
- input: time
- split on ':' to get hours and minutes
- minAfterMidNight = (hours * 60 + minutes) % 1440

before midNight
- input: time
- 12:34 ---> 686
- (totalMinuteInDay(1440) - afterMidnight(time)) % 1440

Code

*/

const HR_IN_DAY = 24;
const MIN_IN_HR = 60;
const TOT_MIN_IN_DAY = HR_IN_DAY * MIN_IN_HR;

function afterMidnight(time) {
  let hrMin = time.split(':');
  return (Number(hrMin[0]) * MIN_IN_HR + Number(hrMin[1])) % TOT_MIN_IN_DAY;
}

function beforeMidnight(time) {
  return  (TOT_MIN_IN_DAY - afterMidnight(time)) % TOT_MIN_IN_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
