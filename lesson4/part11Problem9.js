let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAge = 0;
for (let name in ages) {
  totalAge += ages[name];
}
console.log(totalAge);