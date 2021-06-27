let arr = ['10', '11', '9', '7', '8'];
let sortedArray = arr.sort((num1, num2) => Number(num2) - Number(num1));
console.log(sortedArray);