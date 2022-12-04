const test = require("tape");
const input = require("./input_test");
const day_four = require("./day_four");

const [part_one, part_two] = day_four(input);

test("day four", (t) => {
  t.plan(2);
  t.equal(part_one, 2);
  t.equal(part_two, 4)
});
