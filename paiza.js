// *********************** PAIZA ONLY ************************
var lines = [];

let frameCount = 0;
let pinCount = 0;
let throwCount = 0;

let score = [];

const line = (line) => {
  let splits = line
    .split(" ")
    .map((item) => Number(item) || (item === "G" ? 0 : item));
  if (lines.length === 0) {
    frameCount = splits[0];
    pinCount = splits[1];
    throwCount = splits[2];
    lines.push(line);
  } else if (lines.length === 1) {
    score = splits;
    lines.push(score);
  }
};

const close = () => {
  let round = 0;
  let cnt = 0;
  const result = score.reduce((acc, curr, idx, scoreArr) => {
    cnt++;
    round += curr;
    if (round === pinCount) {
      round = 0;
      if (cnt === 1) {
        cnt = 0;
        return (acc +=
          curr + (scoreArr[idx + 1] || 0) + (scoreArr[idx + 2] || 0));
      } else {
        cnt = 0;
        return (acc += curr + scoreArr[idx + 1]);
      }
    } else {
      if (cnt === 2) {
        cnt = 0;
        round = 0;
      }
      return (acc += curr);
    }
  }, 0);
  console.log(result);
};

window.onload = () => {
  line("10 10 18");
  line("3 4 G 1 8 2 6 2 10 2 7 G 10 10 10 9 1 3");
  close();
};
