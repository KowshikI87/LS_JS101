function triangle(num) {
  //first row, we repeat empty space num - 1 time and * 1 time
  //second row, we repat empty space num - 2 time and * 2 time and so on
  for (let i = 1; i <= num; i++) {
    console.log(' '.repeat(num - i) + '*'.repeat(i));
  }
}

triangle(9);


