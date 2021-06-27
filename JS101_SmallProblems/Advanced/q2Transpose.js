/*
**P
  //given an list of list (as rows of matrix)
  //I need to exchange the rows with columns
    **n x m matrix ---> m x n matrix
    //(or 3x2 ---> 2x3)
    //Example: Array with 3 sub array and 2 element in each
    //Becomes an array with 2 sub array and 3 element in each

**E/T: given

**Data Structure
  //I need to use list of list
**Algorithm
  - start with an empty list with m sub list
  - then for original array, loop through its column and push
  - column elements to row
//
*/
function transpose(matrix) {
  let transposedMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let transposedrow = [];
    for (let row = 0; row < matrix.length; row++) {
      transposedrow.push(matrix[row][col]);
    }
    transposedMatrix.push(transposedrow);
  }
  return transposedMatrix;
}
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(transpose([[1,2,3], [4,5,6]])); //[[1,4], [2,5], [3,6]]

