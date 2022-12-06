const day_six = (input) => {
  const getMarker = (input, count) => {
    for (let i = 0; i < input.length; i++) {
      const set = new Set(input.substr(i, count));
      if (set.size === count) return i + count;
    }
  };

  const part_one = getMarker(input, 4);
  const part_two = getMarker(input, 14)

  return [part_one, part_two];
};

module.exports = day_six;
