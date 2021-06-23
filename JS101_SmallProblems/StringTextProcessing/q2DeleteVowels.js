function removeVowels(arr) {
  //start a newBigArray
  //go through each word in the arr
    //start a word string
    //go through each charcter in the word of arr
      //if the character is not a vowel then add to new word string
  let vowels = 'AEIOUaeiou';
  return arr.map((word) => {
    return word.split('').filter((char) => !(vowels.includes(char))).join('');
  })
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]