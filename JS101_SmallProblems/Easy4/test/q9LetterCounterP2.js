function wordSizes(sentence) {
  if (sentence.trim().length === 0) return new Object();

  //get a list of words
  let words = sentence.split(' ');

  //get all of their lengths and store it in a list
  let wordsLength = words.map((word) => word.length);

  //word histogram
  let wordHistogram = new Object();

  //then loop through the list
  //if the word length as a key does not exist then initialize it with 1
  let key;
  for (w = 0; w < wordsLength.length; w++) {
    key = String(wordsLength[w]);
    if (wordHistogram.hasOwnProperty(key)) {
      wordHistogram[key] += 1;
    } else { //else add it to counter
      wordHistogram[key] = 1;
    }
  }
  return wordHistogram;
}

function letterOnlySentence(sentence) {
  let cleanSentence = ''
  for (let c = 0; c < sentence.length; c++) {
    if ((sentence.charAt(c) >= 'a' && sentence.charAt(c) <= 'z') || 
       (sentence.charAt(c) >= 'A' && sentence.charAt(c) <= 'Z') ||
       (sentence.charAt(c) === ' ')) {
      cleanSentence += sentence.charAt(c);
    }
  }
  return cleanSentence;
}

console.log(wordSizes(letterOnlySentence('Four score and seven.')));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes(letterOnlySentence('Hey diddle diddle, the cat and the fiddle!')));  // { "3": 5, "6": 3 }
console.log(wordSizes(letterOnlySentence("What's up doc?")));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(letterOnlySentence('')));                                            // {}