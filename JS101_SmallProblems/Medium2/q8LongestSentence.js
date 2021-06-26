/*
//sentence may end with . or ! or ?
  //so we can't use split as easily

//best thing to do is go character by character
//and once we encounter ., ! or ? then we stop a sentence
//we store the longest string in a variable and update it as

//we encounter longer strings and then at the end output longest
//sentence and its length

Algorithm
- start with remaining sentence = text.split('')
- we start going charcter by character of remaining sentence (pop them)
- as soon as we encounter . or ! or ? then currentSentence ends
- we compare currentSentence with longestSentenceYet. Store the longer text
- if remainingText is empty then we stop
- then we go back up and start another loop that starts
  at the start of remaining text
*/

function longestSentence(text) {
  let remainingText = text.split('');
  let maxSentence = '';
  while (remainingText.length > 0) {
    let curntSentence = getSentence(remainingText);
    if (curntSentence.trim().split(' ').length > maxSentence.split(' ').length) maxSentence = curntSentence.trim();
  }
  //console.log(maxSentence.split(' '));
  console.log(`Longest Sentence is: \n ${maxSentence.trim()}`);
  console.log(`Longest Sentence has ${maxSentence.trim().split(' ').length} words`);
}

function getSentence(characters) {
  const SENTENCE_END_CHAR = ['.', "!", "?"];
  let curntSentence = '';
  while (characters.length > 0) {
    let char = characters.shift();
    curntSentence += char;
    if (SENTENCE_END_CHAR.includes(char)) break;
  }
  return curntSentence;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent
//a new nation, conceived in liberty, and dedicated to the proposition
//that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before
//us -- that from these honored dead we take increased devotion to that cause
//for which they gave the last full measure of devotion -- that we here highly
//resolve that these dead shall not have died in vain -- that this nation,
//under God, shall have a new birth of freedom -- and that government of
//the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?"); //giving wrong answer and I need to calculate words
// To be or not to be!
//
// The longest sentence has 6 words.
