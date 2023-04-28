const colors = require("colors");
const dotenv = require("dotenv").config({ path: __dirname + "/../.env" });
// dotenv.config({ path: ".env" });
console.log("seed.js");
const connectDB = require("../db");
const seedUsers = require("../seed/seedUsers");
const seedProfiles = require("../seed/seedProfiles");

const User = require("../models/User");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

async function deleteData() {
  try {
    await User.deleteMany();
    await Conversation.deleteMany();
    await Message.deleteMany();
    await Profile.deleteMany();
  } catch (err) {}
}

async function seed() {
  await connectDB();
  await deleteData(); //?

  const testUsers = await seedUsers();

  const testProfiles = await seedProfiles(testUsers);

  const demoUserConvo = await Conversation.create({
    user1Profile: testProfiles[0]._id,
    user2Profile: testProfiles[1]._id,
  });

  const demoUserTest1Message1 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test1",
    recipientRead: false,
  });

  const demoUserTest1Message2 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test1 (2nd)",
    recipientRead: false,
  });

  const demoUserTest1Message3 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[1]._id,
    text: "Test1 ---> DemoUser",
    recipientRead: false,
  });

  demoUserConvo.latestMessage = demoUserTest1Message3._id;
  await demoUserConvo.save();

  const demoUserConvo2 = await Conversation.create({
    user1Profile: testProfiles[0]._id,
    user2Profile: testProfiles[2]._id,
  });

  const demoUserTest2Message1 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test2",
    recipientRead: false,
  });

  const demoUserTest2Message2 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test2 (2nd)",
    recipientRead: false,
  });

  const demoUserTest2Message3 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[2]._id,
    text: "Test2 ---> DemoUser",
    recipientRead: false,
  });

  demoUserConvo2.latestMessage = demoUserTest2Message3._id;
  await demoUserConvo2.save();

  const demoUserConvo3 = await Conversation.create({
    user1Profile: testProfiles[3]._id,
    user2Profile: testProfiles[0]._id,
  });

  const demoUserTest3Message1 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[3]._id,
    text: "Test3 ---> DemoUser",
    recipientRead: false,
  });

  const demoUserTest3Message2 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[3]._id,
    text: "Test3 ---> DemoUser (2nd)",
    recipientRead: false,
  });

  const demoUserTest3Message3 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> Test3",
    recipientRead: false,
  });

  demoUserConvo3.latestMessage = demoUserTest3Message3._id;
  await demoUserConvo3.save();
}

async function runSeed() {
  try {
    console.log("starting");
    await seed();
  } catch (err) {
    console.log("err", err);
    process.exitCode = 1;
  } finally {
    console.log("done");
    process.exit();
  }
}

if (module === require.main) {
  runSeed();
}
