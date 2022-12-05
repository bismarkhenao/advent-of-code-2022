const day_five = (input) => {
  let [ crates, moves ] = input.split("\n\n");

  crates = crates.split("\n");
  moves = moves.split('\n');

  const length = crates[crates.length - 1]
    .replace(/\s/g, "").length;

  const matrix_one = new Array(length);
  const matrix_two = new Array(length);

  for (let i = 0; i < length; i++) {
    matrix_one[i] = [];
    matrix_two[i] = [];
  }

  for (let i = 0; i < crates.length - 1; i++) {
    const tmp = crates[i].replace(/\s{4}/g, " ").split(/\s/);

    for (let j = 0; j < tmp.length; j++) {
      if (tmp[j]) {
        matrix_one[j].push(tmp[j].replace(/\[|\]/g, ""))
        matrix_two[j].push(tmp[j].replace(/\[|\]/g, ""))
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i].trim();
    const regex = /[0-9]+/g;
    const [total, from, to] = move.match(regex).map(m => parseInt(m, 10));
    const elements_to_move = matrix_one[from - 1].splice(0, total);

    for (let j = 0; j < elements_to_move.length; j++) {
      matrix_one[to - 1].unshift(elements_to_move[j])
    }
  }

  let part_one = "";

  for (let i = 0; i < matrix_one.length; i++) {
    part_one += matrix_one[i][0];
  }

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i].trim();
    const regex = /[0-9]+/g;
    const [total, from, to] = move.match(regex).map(m => parseInt(m, 10));
    const elements_to_move = matrix_two[from - 1].splice(0, total);

    for (let j = elements_to_move.length - 1; j >= 0; j--) {
      matrix_two[to - 1].unshift(elements_to_move[j])
    }
  }

  let part_two = "";

  for (let i = 0; i < matrix_two.length; i++) {
    part_two += matrix_two[i][0];
  }

  return [part_one, part_two];
};

module.exports = day_five;
