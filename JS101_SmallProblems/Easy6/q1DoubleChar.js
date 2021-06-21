function repeater(string) {
  //go through each character and use the repeat function and add it 
  //to a new string
  let doubleString = '';
  for (let i = 0; i < string.length; i++) {
    doubleString += string[i].repeat(2);
  }
  return doubleString;
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""