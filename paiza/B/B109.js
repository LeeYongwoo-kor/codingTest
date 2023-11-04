// *********************** PAIZA ONLY ************************
var lines = [];

let row = 0;
let column = 0;
let theater;
let bestSeat;
let goodSeat = [];

const line = (line) => {
  const splits = line.split(" ").map((item) => Number(item));

  if (lines.length === 0) {
    row = splits[1];
    column = splits[2];
    theater = Array(row)
      .fill()
      .map(() => Array(column).fill(0));

    bestSeat = [splits[3], splits[4]];
    lines.push(splits[0]);
  } else {
    theater[splits[0]][splits[1]] = -1;
  }
};

const close = () => {
  let minDistance = Infinity;

  if (theater[bestSeat[0]][bestSeat[1]] !== -1) {
    console.log(bestSeat[0], bestSeat[1]);
    return;
  }

  const manhattanDistance = (p, q) => {
    return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (theater[i][j] === -1) continue;
      const distance = manhattanDistance([i, j], bestSeat);
      if (minDistance >= distance) {
        if (minDistance > distance) {
          goodSeat = [];
        }
        minDistance = distance;
        goodSeat.push([i, j]);
      }
    }
  }

  for (let i = 0; i < goodSeat.length; i++) {
    console.log(goodSeat[i][0], goodSeat[i][1]);
  }
};

window.onload = () => {
  // line("9 4 5 2 3");
  // line("1 0");
  // line("1 2");
  // line("1 3");
  // line("1 4");
  // line("2 2");
  // line("2 3");
  // line("2 4");
  // line("3 3");
  // line("3 4");
  line("4 3 2 2 0");
  line("0 0");
  line("1 0");
  line("1 1");
  line("2 1");
  close();
};
