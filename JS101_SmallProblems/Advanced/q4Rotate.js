/*
//Use transpose then reverse the elements sublist
*/
function transpose(matrix) {
  let transposedMatrix = [];
  //transposedMatrix.length = matrix[0].length;
  for (let col = 0; col < matrix[0].length; col++) {
    let transposedrow = [];
    for (let row = 0; row < matrix.length; row++) {
      transposedrow.push(matrix[row][col]);
    }
    transposedMatrix.push(transposedrow);
  }
  return transposedMatrix;
}
function rotate90(matrix) {
  let rotate90Matrix = transpose(matrix);
  rotate90Matrix.forEach(row => row.reverse());
  return rotate90Matrix;
  //return transpose(matrix).forEach(row => row.reverse());
}
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
//console.log(matrix1);
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
//console.log(matrix2);
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
