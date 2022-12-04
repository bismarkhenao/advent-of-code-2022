const test = require("tape");
const input = require("./input_test");
const day_one = require("./day_one");

const [part_one, part_two] = day_one(input);

test("day one", (t) => {
  t.plan(2);
  t.equal(part_one, 24000);
  t.equal(part_two, 45000)
});
