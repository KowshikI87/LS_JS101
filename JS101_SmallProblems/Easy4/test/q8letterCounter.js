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


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}