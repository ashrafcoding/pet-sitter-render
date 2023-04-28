require("dotenv").config({ path: __dirname + "/../.env" });
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../app.js");

chai.should();
chai.use(chaiHttp);

describe("Ping test with logout controller", () => {
  it("should return 200 and message", async () => {
    const testingMessage = { message: "Ping test with logout controller" };
    const res = await chai.request
      .agent(app)
      .post("/auth/logout")
      .send(testingMessage);
    res.should.have.status(200);
    res.should.have
      .property("text")
      .eql(`Server is running. Message received: ${testingMessage.message}`);
  });
});
