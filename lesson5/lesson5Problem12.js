//return new array identical in structure to the original
//but only contains numbers that are multiples of 3
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let multiples3 = arr.map((list) => {
  return list.filter((number) => number % 3 === 0);
});
console.log(multiples3);