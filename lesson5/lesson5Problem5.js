let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//compute the total age of the male members of the family
let males = Object.values(munsters).filter((person) => person['gender'] === 'male');
let totalMaleAge = males.reduce((totalAge, person) => {
  return totalAge + person['age'];
},0);
console.log(totalMaleAge);