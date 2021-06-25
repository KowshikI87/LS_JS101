//Data Structure and Algorithm:
  //start with a new string
  //split the sentence into words
  //for each word, check uppercase version (have to split using '.' as well for cases like four.)
      //that they are one of the numbers
    //if yes then replace with corresponding digit
    //else leave it as is

let numberMap = {
  'ONE' : 1,
  'TWO' : 2,
  'THREE' : 3,
  'FOUR' : 4,
  'FIVE' : 5,
  'SIX' : 6,
  'SEVEN' : 7,
  'EIGHT' : 8,
  'NINE' : 9,
}

function wordToDigit(text) {
  return text
        .split(' ')
        .map((word) => {
          //take care of case like "4."
          if (numberMap.hasOwnProperty(word.split('.')[0].toUpperCase())) {
            return numberMap[word.toUpperCase()] || String(numberMap[word.split('.')[0].toUpperCase()]) + '.'; 
          } else {return word}
        }) 
        .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
