function reverseNumber(number) {
  //convert to string ---> array of character ---> reverse ---> string
  //---> back to number
  return Number(String(number).split('').reverse().join('').toString());
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1