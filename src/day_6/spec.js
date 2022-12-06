const test = require("tape");
const input = require("./input_test");
const day_six = require("./day_six");

const [part_one] = day_six(input);

test("day six", (t) => {
  t.plan(1);
  t.equal(part_one, 7);
});
