const test = require("tape");
const input = require("./input_test");
const day_three = require("./day_three");

const [part_one, part_two] = day_three(input);

test("day three", (t) => {
  t.plan(2);
  t.equal(part_one, 157);
  t.equal(part_two, 70)
});
