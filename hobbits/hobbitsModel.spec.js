const Hobbits = require("./hobbitsModel");
const db = require("../data/dbConfig");

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  describe("insert function", () => {
    it("inserts hobbits into the db", async () => {
      let hobbitsNumber = await db("hobbits");
      expect(hobbitsNumber).toHaveLength(0);
      await Hobbits.insert({ name: "Gandalf" });
      await Hobbits.insert({ name: "Gaerry" });
      hobbitsNumber = await db("hobbits");
      expect(hobbitsNumber).toHaveLength(2);
    });

    it("inserts the provided hobbit into the db", async () => {
      let hobbit = await Hobbits.insert({ name: "Sammy" });
      expect(hobbit.name).toBe("Sammy");
    });
  });
});
