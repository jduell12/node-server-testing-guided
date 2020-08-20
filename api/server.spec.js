const server = require("./server");
const request = require("supertest");
const { intersect } = require("../data/dbConfig");

describe("GET /", () => {
  it("Server API works correctly", () => {
    return request(server)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect("Content-length", "12")
      .then((res) => {
        expect(res.body.api).toBe("up");
      });
  });
});
