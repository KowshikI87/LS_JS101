let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
//output format: (Name) is a (age)-year-old (male or female).
Object.keys(munsters).forEach((personName) => {
  console.log(`${personName} is a ${munsters[personName]['age']}-year-old (${munsters[personName]['gender']})`);
});
