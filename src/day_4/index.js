const input = require("./input");

(() => {
  const pairs = input.split("\n");
  let total_fully_contains = 0;
  let total_overlaps = 0;

  const build_range = (range) => {
    let [start, end] = range.split("-");

    if (start === end) return [parseInt(start, 10)];

    const set = [];

    start = parseInt(start, 10);
    end = parseInt(end, 10);
    for (let i = start; i <= end; i++) set.push(i)

    return set
  }

  const contains_set = (left, right, fn) => {
    if (left[fn](number => right.includes(number))) return true;
    if (right[fn](number => left.includes(number))) return true;
    return false;
  }

  for (let i = 0; i < pairs.length; i++) {
    const [elf_one, elf_two] = pairs[i].split(",");
    const range_one = build_range(elf_one);
    const range_two = build_range(elf_two);

    if (contains_set(range_one, range_two, 'every')) total_fully_contains += 1;
    if (contains_set(range_one, range_two, 'some')) total_overlaps += 1;
  }

  console.log(total_fully_contains);
  console.log(total_overlaps);
})()
