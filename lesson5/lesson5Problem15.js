let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let evenObjects = arr.filter((obj) => {
  let objValues = Object.values(obj);
  //return true if every sublist contain even numbers
  return objValues.every((numbers) => {
    //return true if all number in a subarray contain even numbers
    return numbers.every(num => num % 2 === 0);
  });
});
console.log(evenObjects);