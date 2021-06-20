let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let testObj = {};
flintstones.forEach((element, index) => {
  testObj[element] = index;
})
console.log(testObj);