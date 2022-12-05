const test = require("tape");
const input = require("./input_test");
const day_five = require("./day_five");

const [part_one, part_two] = day_five(input);

test("day five", (t) => {
  t.plan(2);
  t.equal(part_one, 'CMZ');
  t.equal(part_two, 'MCD');
});
