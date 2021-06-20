function sumEvenNumberRow(rowNumber) {
  // 1. Create an empty 'rows' array to contain all of the rows
	// 2. Create a 'row' array and add it to overall 'rows' array
	// 3. Repeat step 2 until all the necessary rows have been created
	// 	a. All the rows have been created when the length of the 'rows' array is equal to the input integer
	// 4. Sum the final row
	// 	a. Leave it to implementation detail
	// 5. Return the sum

  // [
  //   [2],
  //   [4, 6],
  //   [8, 10, 12],
  //   [14, 16, 18, 20],
  //   …
  // 

  //Calculating the starting integer
  //Rule: first integer of a row = last integer of preceding row + 2
  //Algorithm: (we started off at kind of high level and drilled down
  //so it matches with our data structure)
    //- Get the lat row from the rows array
    //- Get the last integer of that row
    //- add 2

  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }
  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}

function createRow (startIntger, rowLength) {
  const row = [];
  let currentInteger = startIntger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row; 
}

// row 1: 2 --> 2
// row 2: 4, 6 --> 10
// row 3: 8, 10, 12 --> 30
// row 4: 14, 16, 18, 20 ---> 68
console.log(sumEvenNumberRow(1)) ; //2
console.log(sumEvenNumberRow(2)) ; //10
console.log(sumEvenNumberRow(3)) ; //30
console.log(sumEvenNumberRow(4)) ; //68

// Examples: (we tested out createRow first and then moved onto to sumEvenNumberRow)
//run one set of tests at a time
// Start: 2, length: 1 --> [2]
// Start: 4, length: 2 --> [4, 6]
// Start: 8, length: 3 --> [8, 10, 12]
// console.log(createRow(2, 1)); //[2]
// console.log(createRow(4, 2)); //[4, 6]
// console.log(createRow(8, 3)); //[8, 10, 12]

  // Algorithm:
  // 1. Create an empty 'row' array to contain the integers
  // 2. Add the starting integer
  // 3. Increment the starting integer by 2 to get the next integer in the sequence
  // 4. Repeat steps 2 & 3 until the array has reached the correct length
  // Return the 'row'

  //Start the loop
  //-Add start integer to the row array
  //increment the start integer by 2
  //break out of the loop if the length of row array = rowLength