function stringToInteger(string) {
  numberCharacters = string.split('').filter((element) => (element >= '0' && element <= '9'))
  return +numberCharacters.join('');
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("572") === 570); //logs false
