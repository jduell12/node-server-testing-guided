const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

describe("server", () => {
  //wipe out the table -> makes sure nothing is there
  //truncate the table to make sure it's empty
  //beforeEach is within the describe scope
  //will happen for get / tests as well as post /hobbits tests
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  describe("GET /", () => {
    it("returns 200 OK with return", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("returns 200 OK with async await", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("returns 200 OK with done", (done) => {
      request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
          done();
        });
    });

    it("returns 200 OK with no Jest", () => {
      return request(server).get("/").expect(200);
    });

    //check that the / endpoint returns an 'api' property in the body and that the value of that property is 'running...'
    it("returns api property in the body of running...", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("running...");
        });
    });

    it("should respond with json", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("POST /hobbits", () => {
    it.only("should add hobbits", async () => {
      //check that the hobbit is not in the function
      //happens with before each outside the describe

      //make request, send data
      await request(server).post("/hobbits").send({
        name: "gaffer",
      });
      //check the data is in the database (without using GET / route)
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
  });
});
