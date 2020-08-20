const supertest = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("returns 200 OK", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});
