const input = require("./input");

(() => {
  Array.prototype.sum = function() {
    return this.reduce((acc, el) => {
      acc += Number.parseInt(el, 10);
      return acc;
    }, 0);
  }

  const calories = input.split("\n\n")
    .map(block => block.split("\n"))
    .map(block => block.sum());

  let highest_calorie = 0;
  let highest_calories_tree = new Array(3);

  calories.forEach(calorie => {
    if (calorie > highest_calorie) {
      highest_calorie = calorie;
    }
  })

  for (let i = 0; i < calories.length; i++) {
    if (highest_calories_tree[0] === undefined) {
      highest_calories_tree[0] = calories[i];
      continue;
    }

    if (calories[i] > highest_calories_tree[0]) {
      if (highest_calories_tree[2] === undefined) {
        highest_calories_tree[2] = calories[i];
        continue;
      }

      if (calories[i] == highest_calories_tree[2]) {
        continue;
      }

      highest_calories_tree[1] = highest_calories_tree[0];

      if (calories[i] > highest_calories_tree[2]) {
        highest_calories_tree[0] = highest_calories_tree[2];
        highest_calories_tree[2] = calories[i];
      } else {
        highest_calories_tree[0] = calories[i];
      }
    }

    if (calories[i] < highest_calories_tree[0]) {
      if (highest_calories_tree[1] === undefined) {
        highest_calories_tree[1] = calories[i];
        continue;
      }

      if (calories[i] > highest_calories_tree[1]) {
        highest_calories_tree[1] = calories[i];
      }
    }
  }

  console.log(highest_calorie);
  console.log(highest_calories_tree.sum());
})()
