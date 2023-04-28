const Profile = require("../models/ProfileModel");

const seedProfiles = async (testUsers) => {
  console.log("seedProfile.js");
  const testProfiles = [];

  const demoUserProfile = await Profile.create({
    userId: testUsers[0]._id,
    firstName: "DemoFname",
    lastName: "DemoLname",
    address: "Toronto, Ontario",
    phone: "1231231234",
    description:
      "Hello! I am a DemoUser. Hello! I am a DemoUser. Hello! I am a DemoUser. Hello! I am a DemoUser. ",
    birth: "2021-01-01",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sky",
      "https://robohash.org/demo-user.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
  });
  testProfiles.push(demoUserProfile);

  const test1Profile = await Profile.create({
    userId: testUsers[1]._id,
    firstName: "Test1Fname",
    lastName: "Test1Lname",
    address: "Montreal, Quebec",
    phone: "1112223333",
    description:
      "Hello! I am Test1. Hello! I am Test1. Hello! I am Test1. Hello! I am Test1. ",
    birth: "2021-02-02",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-1.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Female",
    isSitter: true,
    title: "I love pets1",
    hourlyWage: 11,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 6, 18)],
    },
  });
  testProfiles.push(test1Profile);

  const test2Profile = await Profile.create({
    userId: testUsers[2]._id,
    firstName: "Test2Fname",
    lastName: "Test2Lname",
    address: "Ottawa, Ontario",
    phone: "1112223333",
    description:
      "Hello! I am Test2. Hello! I am Test2. Hello! I am Test2. Hello! I am Test2. ",
    birth: "2021-02-02",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-2.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Other",
    isSitter: true,
    title: "I love pets2",
    hourlyWage: 12,
    availability: {
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });
  testProfiles.push(test2Profile);

  const test3Profile = await Profile.create({
    userId: testUsers[3]._id,
    firstName: "Test3Fname",
    lastName: "Test3Lname",
    address: "Ottawa, Ontario",
    phone: "2223334444",
    description:
      "Hello! I am Test3. Hello! I am Test3. Hello! I am Test3. Hello! I am Test3. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-3.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets3",
    hourlyWage: 13,
    availability: {
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });
  testProfiles.push(test3Profile);

  const test4Profile = await Profile.create({
    userId: testUsers[4]._id,
    firstName: "Test4Fname",
    lastName: "Test4Lname",
    address: "Toronto, Ontario",
    phone: "2223334444",
    description:
      "Hello! I am Test4. Hello! I am Test4. Hello! I am Test4. Hello! I am Test4. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-4.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets4",
    hourlyWage: 14,
    availability: {
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });
  testProfiles.push(test4Profile);

  const test5Profile = await Profile.create({
    userId: testUsers[5]._id,
    firstName: "Test5Fname",
    lastName: "Test5Lname",
    address: "Ottawa, Ontario",
    phone: "2223334444",
    description:
      "Hello! I am Test5. Hello! I am Test5. Hello! I am Test5. Hello! I am Test5. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-5.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets5",
    hourlyWage: 15,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 6, 18)],
    },
  });
  testProfiles.push(test5Profile);

  const test6Profile = await Profile.create({
    userId: testUsers[6]._id,
    firstName: "Test6Fname",
    lastName: "Test6Lname",
    address: "Vancouver, British columbia",
    phone: "2223334444",
    description:
      "Hello! I am Test6. Hello! I am Test6. Hello! I am Test6. Hello! I am Test6. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-6.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets6",
    hourlyWage: 16,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
      saturday: [new Date(2021, 9, 9, 12), new Date(2021, 9, 9, 18)],
    },
  });
  testProfiles.push(test6Profile);

  const test7Profile = await Profile.create({
    userId: testUsers[7]._id,
    firstName: "Test7Fname",
    lastName: "Test7Lname",
    address: "Burnaby, British columbia",
    phone: "2223334444",
    description:
      "Hello! I am Test7. Hello! I am Test7. Hello! I am Test7. Hello! I am Test7. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-7.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets7",
    hourlyWage: 17,
    availability: {
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });
  testProfiles.push(test7Profile);

  const test8Profile = await Profile.create({
    userId: testUsers[8]._id,
    firstName: "Test8Fname",
    lastName: "Test8Lname",
    address: "Toronto, Ontario",
    phone: "2223334444",
    description:
      "Hello! I am Test8. Hello! I am Test8. Hello! I am Test8. Hello! I am Test8. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-8.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Female",
    isSitter: true,
    title: "I love pets8",
    hourlyWage: 18,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
      saturday: [new Date(2021, 9, 9, 12), new Date(2021, 9, 9, 18)],
    },
  });
  testProfiles.push(test8Profile);

  return testProfiles;
};

module.exports = seedProfiles;
