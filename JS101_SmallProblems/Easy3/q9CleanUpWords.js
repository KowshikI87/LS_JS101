function cleanUp(sentence) {
  let words = sentence.split(' ');
  return words.map(cleanUpWord).join(' ');
}

function cleanUpWord(word) {
  let cleanWord = '';
  for (c = 0; c < word.length; c++) {
    if ((word.charAt(c) >= 'a' && word.charAt(c) <= 'z') || 
        (word.charAt(c) >= 'A' && word.charAt(c) <= 'Z')) {
          cleanWord += word.charAt(c);
    } else {
      cleanWord += ' ';
    }
  }
  return cleanWord;
}
console.log(cleanUp("---what's my +*& line?"));