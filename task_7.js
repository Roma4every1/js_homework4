const users = [
  { name: "Alex", age: 31 },
  { name: "Olga", age: 17 },
  { name: "Carl", age: 15 },
  { name: "Nancy", age: 28 },
  { name: "Eric", age: 9 },
];

const underAgeUsers = [];
for (let user of users) {
  if (user.age < 18) {
    underAgeUsers.push(user.name);
  }
}

console.log(underAgeUsers);
