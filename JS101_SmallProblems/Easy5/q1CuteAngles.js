/*
*****Understand the *****
Explicit Requirements
- Input: Number
- Output: String
- Take a floating point number which represents an angle (between 0 and 360) and return a string
representing that angle in degrees, minutes, and seconds. 
Use various symbols for degree, minutes and seconds

Implicit Requirements
- 360 degree = 0 
- How do we deal with negative degrees and abs(angle) > 360

- So we have a floating point number. The whole number part of the floating point
is in degrees. The decimal portion is what we need to express in minutes and seconds

*****Example*****:

76.73 --> 76 degrees, 43 minutes, 48 seconds

We have 60 minutes in one degree and 60 seconds in one second

here is how we obtain the minutes and seconds
0.73 * 60 = 43.8 ---> 43 minutes
0.8 * 60 = 48 ---> seconds

*****Data Structure*****
- we can just number to hold the decimal portion and then add result of x to final output

*****Algorithms*****
- Create a variable to hold decimal part of a number
  -Need to deal with negative numbers and abs(number) > 360
- With the initial floating point number, the whole part is degrees
- Get the decimal from first floating point number * 60 ---> a new number. The whole number is minutes
- Take the decimal portion from last step * 60 ---> seconds
- Concatenate all to a string
*/

function dms(angle) {
  const ANGLE_TO_MINUTE = 60;
  const MINUTE_TO_SECOND = 60;

  //get correct angle
  let degreesFull = transformAngle(angle);

  let degreesOnly =  Number.parseInt(degreesFull);
  let degreesDecimal = degreesFull - degreesOnly;

  let minutesFull = degreesDecimal * ANGLE_TO_MINUTE;
  let minutesOnly = Number.parseInt(minutesFull);
  let minutesDecimal = minutesFull - minutesOnly;

  let seconds = Math.floor(minutesDecimal * MINUTE_TO_SECOND); //use floor  based on test case #3

  return `${degreesOnly}˚${String(minutesOnly).padStart(2,'0')}'${String(seconds).padStart(2,'0')}"`
}

//Assumes no empty argument
function zeroPadder(number) {
  return String(number).length < 2? '0' + String(number) : String(number);
}

function transformAngle(angle) {
  const MIN_DEGREE = 0;
  const MAX_DEGREE = 360;

  //get the number of decimal places we need to return (sometime we may not have decimals)
  const NUM_DECIMALS = String(angle).split('.').length > 1 ? String(angle).split('.')[1].length : 0
  
  /*
  Case 1: 0 to < 360 ---> don't do anything
  Case 2: >= 360 ---> angle = angle % 360
  Case 3: <0 and =< -360 ---> angle = angle + 360
  Case 4: <-360 ---> (Abs(Angle) % 360) * -1 + 360
  */
  if (angle >= MIN_DEGREE && angle < MAX_DEGREE) return angle;
  if (angle >= MAX_DEGREE) return (angle % MAX_DEGREE).toFixed(NUM_DECIMALS);
  if (angle < MIN_DEGREE && angle >= -MAX_DEGREE) return (angle + MAX_DEGREE).toFixed(NUM_DECIMALS);
  if (angle < -MAX_DEGREE) return (-(Math.abs(angle) % MAX_DEGREE) + MAX_DEGREE).toFixed(NUM_DECIMALS);
}

// //test angle transformer
// console.log(transformAngle(25.5));    //25.5
// console.log(transformAngle(420.23));  //60.23
// console.log(transformAngle(-445.10)); //274.9
// console.log(transformAngle(-85.10125)); //274.89875

// //test the padder
// console.log(zeroPadder(10));
// console.log(zeroPadder(0))
// console.log(zeroPadder(-12));

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-445.10))       //274˚53'59"
console.log(dms(-85.10125))     //274˚53'55"