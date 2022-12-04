const day_two = (input) => {
  const rock = 'A';
  const paper = 'B';
  const scissor = 'C';

  const rock_points = 1;
  const paper_points = 2;
  const scissor_points = 3;

  let total_points = 0;
  let part_one = 0;
  let part_two = 0;

  const lost = () => { total_points += 0; }

  const draw = () => { total_points += 3; }

  const won = () => { total_points += 6; }

  const moves = input.split("\n");

  for (let i = 0; i < moves.length; i++) {
    const opponent = moves[i][0];
    const me = moves[i][2];

    if (me === 'X') {
      part_one += rock_points;
      if (opponent === paper) lost();
      else if (opponent === scissor) won();
      else draw();
      continue;
    } else if (me === 'Y') {
      part_one += paper_points;
      if (opponent === scissor) lost();
      else if (opponent === rock) won();
      else draw();
      continue;
    } else {
      part_one += scissor_points;
      if (opponent === rock) lost();
      else if (opponent === paper) won();
      else draw();
      continue;
    }
  }

  total_points = 0;
  for (let i = 0; i < moves.length; i++) {
    const opponent = moves[i][0];
    const result = moves[i][2];

    if (result === 'X') {
      lost()
      if (opponent === rock) part_two += scissor_points;
      else if (opponent === paper) part_two += rock_points;
      else part_two += paper_points;
      continue;
    } else if (result === 'Y') {
      draw()
      if (opponent === rock) part_two += rock_points;
      else if (opponent === paper) part_two += paper_points;
      else part_two += scissor_points;
      continue;
    } else {
      won()
      if (opponent === rock) part_two += paper_points;
      else if (opponent === paper) part_two += scissor_points;
      else part_two += rock_points;
      continue;
    }
  }

  return [part_one + total_points, part_two + total_points];
};

module.exports = day_two;
