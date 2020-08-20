const supertest = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("returns 200 OK with return", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("returns 200 OK with async await", async () => {
      const res = await supertest(server).get("/");
      expect(res.status).toBe(200);
    });

    it("returns 200 OK with done", (done) => {
      supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
          done();
        });
    });

    it("returns 200 OK with no Jest", () => {
      return supertest(server).get("/").expect(200);
    });

    //check that the / endpoint returns an 'api' property in the body and that the value of that property is 'running...'
    it("returns api property in the body of running...", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("running...");
        });
    });

    it.only("should respond with json", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
