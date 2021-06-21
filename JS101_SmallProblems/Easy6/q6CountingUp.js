//changed parameter name to limit as it is a better name
function sequence(limit) {
  let sequence = []
  for (let i = 1; i <= limit; i++) {
    sequence.push(i);
  }
  return sequence;
}
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]