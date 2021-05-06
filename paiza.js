// *********************** PAIZA ONLY ************************
var lines = [];

let frameCount = 0;
let pinCount = 0;
let throwCount = 0;

let score = 0;
let scoreBoard = [];

const line = (line) => {
  let splits = line.split(" ").map((item) => Number(item) || item);
  if (lines.length === 0) {
    frameCount = splits[0];
    pinCount = splits[1];
    throwCount = splits[2];
    lines.push(line);
  } else {
    if (throwCount !== splits.length) return;
    let gameCount = 0;
    let round = 1;
    splits = splits.map((item) => (item === "G" ? 0 : item));
    for (let i = 0; i < splits; i++) {
      gameCount++;
      score += splits[i];
      if (round === frameCount) {
        if (score === pinCount) {
          if (gameCount === 1) {
          }
        }
      } else {
        if (score === pinCount) {
          scoreBoard.push(score);
          if (gameCount === 1) {
            score[round - 1] += splits[i + 1] + splits[i + 2];
          } else {
            score[round - 1] += splits[i + 1];
          }
          score = 0;
          gameCount = 0;
          round++;
        }
        if (gameCount === 2) {
          scoreBoard.push(score);
          score = 0;
          gameCount = 0;
          round++;
        }
      }
    }
  }
};

const close = () => {
  console.log(lines[1]);
};

window.onload = () => {
  line("15 5 24");
  line("5 5 5 4 G 1 G 5 3 2 1 4 4 G G 1 5 5 5 2 1 5 3 1");
  close();
};
