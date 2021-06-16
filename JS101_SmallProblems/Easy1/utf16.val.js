//skipped

//their solution using loop
// function utf16Value(string) {
//   let sum = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     sum += string.charCodeAt(idx);
//   }

//   return sum;
// }

// I like this solution
// let utf16Value = (str) => {
//   return str.split('').reduce( (sum, idx) => sum + idx.charCodeAt(), 0);
// };