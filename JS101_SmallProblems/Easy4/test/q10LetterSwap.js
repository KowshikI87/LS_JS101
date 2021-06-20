function swap(sentence) {
  if (sentence.length < 2) return sentence;
  //get a list of words
  let words = sentence.split(' ');
  //for each word, the word = word[word.length - 1] + word.slice(1, word.length - 1) + word[0]
  let currentWord;
  for (let w = 0; w < words.length; w++) {
    currentWord = words[w];
    currentWord = currentWord[currentWord.length - 1] + currentWord.slice(1, currentWord.length - 1) + currentWord[0]
    words[w] = currentWord;
  }
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

//nice slicing trick here from LS solution (looks like we can use negative indices like Python)
// return word[word.length - 1] + word.slice(1, -1) + word[0];
