const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

describe("hobbitsModel", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  describe("insert()", () => {
    it("inserts a hobbit into the database", async () => {
      await Hobbits.insert({ name: "gaffer" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
  });
});
