const test = require("tape");
const input = require("./input_test");
const day_two = require("./day_two");

const [part_one, part_two] = day_two(input);

test("day two", (t) => {
  t.plan(2);
  t.equal(part_one, 15);
  t.equal(part_two, 12)
});
