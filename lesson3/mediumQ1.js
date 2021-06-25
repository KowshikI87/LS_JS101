//assuming first output has no padding
sentence = 'The Flintstones Rock!';
for (let i = 0; i < 10; i++) {
  console.log(sentence.padStart(sentence.length + i));
}