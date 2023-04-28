require("dotenv").config({ path: __dirname + "/../.env" });
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { app } = require("../app.js");
const User = require("../models/User");

chai.should();
chai.use(chaiHttp);

let agent;
let clock;
let createdTestUser;

const testUserInfo = {
  username: "testUser",
  email: "testUser@gmail.com",
  invalidEmail: "testUsergmail.com",
  password: "123123",
  wrongPassword: "wrongPassword",
};

const testNewUserInfo = {
  username: "testNewUser",
  email: "testNewUser@gmail.com",
  invalidEmail: "testNewUsergmail.com",
  password: "randomPassword",
  shortPassword: "1234",
};

describe("Tests for all /auth controllers", () => {
  beforeEach(async () => {
    agent = chai.request.agent(app);
    createdTestUser = await User.create({
      username: testUserInfo.username,
      email: testUserInfo.email,
      password: testUserInfo.password,
    });
  });

  describe("Tests for /auth/login", () => {
    it("should be able to login with valid credentials", async () => {
      const res = await agent
        .post("/auth/login")
        .send({ email: testUserInfo.email, password: testUserInfo.password });
      res.should.have.status(200);
      res.should.have.property("text").contains(createdTestUser.username);
      res.should.have.property("text").contains(createdTestUser.email);
      agent.should.have.cookie("token");
    });

    it("should not be able to login with nonExisting email", async () => {
      const res = await agent.post("/auth/login").send({
        email: testNewUserInfo.email,
        password: testNewUserInfo.password,
      });
      res.should.have.status(401);
      res.should.have.property("text").contains("Invalid email or password");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to login with invalid password", async () => {
      const res = await agent.post("/auth/login").send({
        email: testUserInfo.email,
        password: testUserInfo.wrongPassword,
      });
      res.should.have.status(401);
      res.should.have.property("text").contains("Invalid email or password");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to login if email field is missing", async () => {
      const res = await agent
        .post("/auth/login")
        .send({ password: testUserInfo.password });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a valid email address");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to login if email is invalid", async () => {
      const res = await agent.post("/auth/login").send({
        email: testUserInfo.invalidEmail,
        password: testUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a valid email address");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to login if password field is missing", async () => {
      const res = await agent
        .post("/auth/login")
        .send({ email: testUserInfo.email });
      res.should.have.status(400);
      res.should.have.property("text").contains("Password is required");
      agent.should.not.have.cookie("token");
    });
  });

  describe("Tests for /auth/register", () => {
    it("should be able to register", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        email: testNewUserInfo.email,
        password: testNewUserInfo.password,
      });
      res.should.have.status(201);
      res.should.have.property("text").contains(testNewUserInfo.username);
      res.should.have.property("text").contains(testNewUserInfo.email);
      agent.should.have.cookie("token");
      await User.findOneAndDelete({ email: testNewUserInfo.email });
    });

    it("should not be able to register if email already exists", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        email: createdTestUser.email,
        password: testNewUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("A user with that email already exists");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if username already exists", async () => {
      const res = await agent.post("/auth/register").send({
        username: testUserInfo.username,
        email: testNewUserInfo.email,
        password: testNewUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("A user with that username already exists");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if username field is missing", async () => {
      const res = await agent.post("/auth/register").send({
        email: testNewUserInfo.email,
        password: testNewUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have.property("text").contains("Please enter a username");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if email field is missing", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        password: testNewUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a valid email address");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if password field is missing", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        email: testNewUserInfo.email,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a password with 6 or more characters");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if email is invalid", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        email: testNewUserInfo.invalidEmail,
        password: testNewUserInfo.password,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a valid email address");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to register if length of password is less than 6 characters", async () => {
      const res = await agent.post("/auth/register").send({
        username: testNewUserInfo.username,
        email: testNewUserInfo.email,
        password: testNewUserInfo.shortPassword,
      });
      res.should.have.status(400);
      res.should.have
        .property("text")
        .contains("Please enter a password with 6 or more characters");
      agent.should.not.have.cookie("token");
    });
  });

  describe("Tests for /auth/user", () => {
    it("should be able to get user data with authorization", async () => {
      await agent
        .post("/auth/login")
        .send({ email: testUserInfo.email, password: testUserInfo.password });
      const res = await agent.get("/auth/user");
      res.should.have.status(200);
      res.should.have.property("text").contains(createdTestUser.username);
      res.should.have.property("text").contains(createdTestUser.email);
      agent.should.have.cookie("token");
    });

    it("should not be able to get user data without authorization", async () => {
      const res = await agent.get("/auth/user");
      res.should.have.status(401);
      res.should.have
        .property("text")
        .contains("No token, authorization denied");
      agent.should.not.have.cookie("token");
    });

    it("should not be able to get user data with expired token", async () => {
      clock = sinon.useFakeTimers();
      await agent
        .post("/auth/login")
        .send({ email: testUserInfo.email, password: testUserInfo.password });
      const secondsInWeek = 604800;
      clock.tick(secondsInWeek * 1000);
      const res = await agent.get("/auth/user");
      res.should.have.status(401);
      res.should.have
        .property("text")
        .contains("No token, authorization denied");
      agent.should.not.have.cookie("token");
      clock.restore();
    });
  });

  describe("Tests for /auth/logout", () => {
    it("should be able to logout", async () => {
      const res = await agent.get("/auth/logout");
      res.should.have.status(200);
      res.should.have
        .property("text")
        .contains("You have successfully logged out");
      agent.should.not.have.cookie("token");
    });
  });

  afterEach(async () => {
    await User.deleteOne({ email: testUserInfo.email });
    agent.close();
  });
});
