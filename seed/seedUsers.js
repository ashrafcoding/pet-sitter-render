const User = require("../models/User");

const seedUsers = async () => {
  console.log("seedUser.js");
  const testUsers = [];

  const demoUser = await User.create({
    username: "demoUser",
    email: "demoUser@gmail.com",
    password: "123123",
  });

  testUsers.push(demoUser);

  for (let i = 1; i <= 8; i++) {
    const testUser = await User.create({
      username: `test${i}`,
      email: `test${i}@gmail.com`,
      password: "123123",
    });
    testUsers.push(testUser);
  }

  return testUsers;
};

module.exports = seedUsers;
