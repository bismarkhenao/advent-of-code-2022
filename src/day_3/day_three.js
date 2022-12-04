const day_three = (input) => {
  const rucksacks = input.split("\n");
  let part_one = 0;
  let part_two = 0;
  let element_shared = ""
  let elements_priority = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A': 27,
    'B': 28,
    'C': 29,
    'D': 30,
    'E': 31,
    'F': 32,
    'G': 33,
    'H': 34,
    'I': 35,
    'J': 36,
    'K': 37,
    'L': 38,
    'M': 39,
    'N': 40,
    'O': 41,
    'P': 42,
    'Q': 43,
    'R': 44,
    'S': 45,
    'T': 46,
    'U': 47,
    'V': 48,
    'W': 49,
    'X': 50,
    'Y': 51,
    'Z': 52,
  }

  for (let i = 0; i < rucksacks.length; i++) {
    const rucksack = rucksacks[i];
    const compartment_one = rucksack.substring(0, rucksack.length / 2);
    const compartment_two = rucksack.substring(rucksack.length / 2);

    for (let j = 0; j < compartment_one.length; j++) {
      if (compartment_two.includes(compartment_one[j])) {
        if (element_shared === compartment_one[j]) continue;

        element_shared = compartment_one[j];
        part_one += elements_priority[compartment_one[j]];
      }
    }
  }

  const rucksacks_group = [];
  let tmp = [];

  for (let i = 0; i < rucksacks.length; i++) {
    tmp.push(rucksacks[i]);

    if ((i + 1) % 3 === 0) {
      rucksacks_group.push(tmp);
      tmp = [];
    }
  }

  for (let i = 0; i < rucksacks_group.length; i++) {
    const compartment_one = rucksacks_group[i][0];
    const compartment_two = rucksacks_group[i][1];
    const compartment_three = rucksacks_group[i][2];

    let last_char = ""

    for (let j = 0; j < compartment_one.length; j++) {
      if (last_char === compartment_one[j]) continue;
      if (!compartment_two.includes(compartment_one[j])) continue;
      if (!compartment_three.includes(compartment_one[j])) continue;

      last_char = compartment_one[j];
      part_two += elements_priority[compartment_one[j]];
    }
  }

  return [part_one, part_two];
};

module.exports = day_three;
