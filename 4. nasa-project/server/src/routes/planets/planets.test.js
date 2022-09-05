const request = require("supertest");

const app = require("../../app");

describe("Test GET /launches", () => {
  test("should response with 200 OK", async () => {
    await request(app)
      .get("/planets")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
