function greetings(name, work) {
  greetingPt1 = `Hello, ${name.join(' ')}! `;
  greetingPt2 = `Nice to have a ${work.title} ${work.occupation} around.`;
  return greetingPt1 + greetingPt2;
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);